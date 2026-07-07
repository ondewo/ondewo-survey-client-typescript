// Copyright 2021-2026 ONDEWO GmbH
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//

/**
 * Runnable end-to-end example for the ONDEWO Survey Typescript client: authorize via the D18
 * Keycloak offline-token flow, construct the Surveys gRPC-web promise client, list the surveys of
 * the account and print their display names.
 *
 * Configuration is read from `examples/environment.env` (loaded via dotenv, relative to this file so
 * the working directory does not matter). Copy that template, fill in the blanks and run it (after
 * `npm install`, against a reachable ONDEWO Survey backend + Keycloak):
 *
 * ```sh
 * npx ts-node examples/survey-list-app.ts
 * ```
 *
 * The reusable request / response logic lives in `./ts-client` and is unit-tested with fakes in
 * `./ts-client.spec.ts`; this file only demonstrates the concrete client + auth wiring.
 *
 * @module survey-list-app
 */

import * as path from 'path';
import * as dotenv from 'dotenv';

import { SurveysPromiseClient } from '../api/ondewo/survey/survey_grpc_web_pb';
import { ListSurveysRequest } from '../api/ondewo/survey/survey_pb';
import { login, type OfflineTokenProvider } from '../auth/offlineTokenProvider';

import { applyPageSize, listSurveyDisplayNames } from './ts-client';

// Load the examples configuration relative to THIS script so the example works from any cwd.
dotenv.config({ path: path.join(__dirname, 'environment.env') });

/**
 * Read a configuration value from the environment, falling back to a placeholder so the file stays
 * self-describing until the caller supplies real values.
 *
 * @param name - Environment variable name.
 * @param fallback - Placeholder returned when the variable is unset or empty.
 * @returns The configured value.
 */
function fromEnv(name: string, fallback: string): string {
	const value: string | undefined = process.env[name];
	if (value !== undefined && value.length > 0) {
		return value;
	}
	return fallback;
}

/**
 * Read a boolean configuration flag from the environment (`true`/`false`, case-insensitive).
 *
 * @param name - Environment variable name.
 * @param fallback - Value returned when the variable is unset or empty.
 * @returns `true` when the value equals `"true"` (case-insensitive), else `false`, else the fallback.
 */
function boolFromEnv(name: string, fallback: boolean): boolean {
	const value: string | undefined = process.env[name];
	if (value === undefined || value.length === 0) {
		return fallback;
	}
	return value.toLowerCase() === 'true';
}

/**
 * Build the ONDEWO Survey gRPC-web endpoint URL from the canonical connection env vars.
 *
 * @returns A `<scheme>://<host>:<port>` URL for the {@link SurveysPromiseClient}.
 */
function buildGrpcHost(): string {
	const host: string = fromEnv('ONDEWO_HOST', 'localhost');
	const port: string = fromEnv('ONDEWO_PORT', '443');
	const scheme: string = boolFromEnv('ONDEWO_USE_SECURE_CHANNEL', true) ? 'https' : 'http';
	return `${scheme}://${host}:${port}`;
}

/**
 * Log in, list the surveys and print their display names, then stop the background token refresh.
 *
 * @returns Resolves once the surveys have been listed and printed.
 */
export async function main(): Promise<void> {
	console.log('START: authorizing against Keycloak and listing ONDEWO Survey display names');

	const provider: OfflineTokenProvider = await login({
		keycloakUrl: fromEnv('KEYCLOAK_URL', 'https://auth.example.com/auth'),
		realm: fromEnv('KEYCLOAK_REALM', 'ondewo-ccai-platform'),
		clientId: fromEnv('KEYCLOAK_CLIENT_ID', 'ondewo-survey-cai-sdk-public'),
		username: fromEnv('KEYCLOAK_USER_NAME', 'technical-user@example.com'),
		password: fromEnv('KEYCLOAK_PASSWORD', 'change-me'),
		keycloakVerifySsl: boolFromEnv('KEYCLOAK_VERIFY_SSL', true)
	});
	console.log('Keycloak login succeeded; offline-token background refresh started');

	try {
		const grpcHost: string = buildGrpcHost();
		console.log(`Connecting to ONDEWO Survey gRPC-web endpoint at ${grpcHost}`);
		const client: SurveysPromiseClient = new SurveysPromiseClient(grpcHost);
		const request: ListSurveysRequest = applyPageSize(new ListSurveysRequest(), 100);
		const displayNames: string[] = await listSurveyDisplayNames(client, request, provider.getAuthorizationHeader());
		console.log(`DONE: listed ${displayNames.length} ONDEWO Survey display name(s): ${displayNames.join(', ')}`);
	} finally {
		provider.stop();
	}
}

/* c8 ignore start -- entrypoint guard: only runs when the file is executed directly, never in tests */
if (require.main === module) {
	void main().catch((error: unknown): void => {
		console.error('FAILED to list ONDEWO Survey display names:', error);
		process.exit(1);
	});
}
/* c8 ignore stop */
