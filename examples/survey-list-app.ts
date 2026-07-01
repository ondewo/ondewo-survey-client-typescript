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
 * Run it (after `npm install`, against a reachable ONDEWO Survey backend + Keycloak):
 *
 * ```sh
 * ONDEWO_SURVEY_KEYCLOAK_URL=https://auth.example.com/auth \
 * ONDEWO_SURVEY_KEYCLOAK_REALM=ondewo-ccai-platform \
 * ONDEWO_SURVEY_KEYCLOAK_CLIENT_ID=ondewo-survey-cai-sdk-public \
 * ONDEWO_SURVEY_KEYCLOAK_USERNAME=technical-user@example.com \
 * ONDEWO_SURVEY_KEYCLOAK_PASSWORD=... \
 * ONDEWO_SURVEY_GRPC_HOST=https://survey.example.com:443 \
 * npx ts-node examples/survey-list-app.ts
 * ```
 *
 * The reusable request / response logic lives in `./ts-client` and is unit-tested with fakes in
 * `./ts-client.spec.ts`; this file only demonstrates the concrete client + auth wiring.
 *
 * @module survey-list-app
 */

import { SurveysPromiseClient } from '../api/ondewo/survey/survey_grpc_web_pb';
import { ListSurveysRequest } from '../api/ondewo/survey/survey_pb';
import { login, type OfflineTokenProvider } from '../auth/offlineTokenProvider';

import { applyPageSize, listSurveyDisplayNames } from './ts-client';

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
 * Log in, list the surveys and print their display names, then stop the background token refresh.
 *
 * @returns Resolves once the surveys have been listed and printed.
 */
export async function main(): Promise<void> {
	const provider: OfflineTokenProvider = await login({
		keycloakUrl: fromEnv('ONDEWO_SURVEY_KEYCLOAK_URL', 'https://auth.example.com/auth'),
		realm: fromEnv('ONDEWO_SURVEY_KEYCLOAK_REALM', 'ondewo-ccai-platform'),
		clientId: fromEnv('ONDEWO_SURVEY_KEYCLOAK_CLIENT_ID', 'ondewo-survey-cai-sdk-public'),
		username: fromEnv('ONDEWO_SURVEY_KEYCLOAK_USERNAME', 'technical-user@example.com'),
		password: fromEnv('ONDEWO_SURVEY_KEYCLOAK_PASSWORD', 'change-me')
	});

	try {
		const grpcHost: string = fromEnv('ONDEWO_SURVEY_GRPC_HOST', 'https://survey.example.com:443');
		const client: SurveysPromiseClient = new SurveysPromiseClient(grpcHost);
		const request: ListSurveysRequest = applyPageSize(new ListSurveysRequest(), 100);
		const displayNames: string[] = await listSurveyDisplayNames(client, request, provider.getAuthorizationHeader());
		console.log(`ONDEWO Survey display names: ${displayNames.join(', ')}`);
	} finally {
		provider.stop();
	}
}

/* c8 ignore start -- entrypoint guard: only runs when the file is executed directly, never in tests */
if (require.main === module) {
	void main().catch((error: unknown): void => {
		console.error(error);
		process.exitCode = 1;
	});
}
/* c8 ignore stop */
