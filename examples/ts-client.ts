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
 * Reusable, framework-free helpers for talking to the ONDEWO Survey gRPC-web API.
 *
 * These functions are deliberately decoupled from *how* the {@link SurveysPromiseClient} and its
 * request / response messages are constructed (that concrete wiring lives in `survey-list-app.ts`),
 * so they can be unit-tested with in-memory fakes and NO live backend -- see `ts-client.spec.ts`.
 *
 * Auth follows the D18 Keycloak migration: every call carries an `Authorization: Bearer <token>`
 * metadata header sourced from the offline-token provider in `../auth/offlineTokenProvider`. There
 * is no legacy cai-token / HTTP-basic / users.login() credential anymore.
 *
 * The generated stubs are imported type-only, so importing this module never pulls the browser
 * gRPC-web runtime into a Node test process.
 *
 * @module ts-client
 */

import type * as grpcWeb from 'grpc-web';

import type { ListSurveysRequest, ListSurveysResponse, Survey } from '../api/ondewo/survey/survey_pb';
import type { SurveysPromiseClient } from '../api/ondewo/survey/survey_grpc_web_pb';

/**
 * Build the gRPC metadata that authorizes a call with an OIDC bearer credential.
 *
 * @param authorizationHeader - The `Bearer <access_token>` value returned by
 *   `OfflineTokenProvider.getAuthorizationHeader()`.
 * @returns gRPC-web metadata carrying the `authorization` header.
 */
export function authorizationMetadata(authorizationHeader: string): grpcWeb.Metadata {
	return { authorization: authorizationHeader };
}

/**
 * Apply the ONDEWO `page_size-<n>` pagination token to a ListSurveys request. The ONDEWO APIs page
 * through an opaque `page_token`; `page_size-<n>` asks the server for up to `n` records in one page.
 *
 * @param request - The ListSurveys request to mutate.
 * @param pageSize - Maximum number of surveys to request in a single page.
 * @returns The same request instance, for call chaining.
 */
export function applyPageSize(request: ListSurveysRequest, pageSize: number): ListSurveysRequest {
	request.setPageToken(`page_size-${pageSize}`);
	return request;
}

/**
 * List the surveys visible to the authorized account and project their display names.
 *
 * @param client - A promise-based Surveys service client.
 * @param request - The ListSurveys request (see {@link applyPageSize}).
 * @param authorizationHeader - The `Bearer <access_token>` value for the call metadata.
 * @returns The display names of every returned survey, in server order.
 */
export async function listSurveyDisplayNames(
	client: SurveysPromiseClient,
	request: ListSurveysRequest,
	authorizationHeader: string
): Promise<string[]> {
	const response: ListSurveysResponse = await client.listSurveys(request, authorizationMetadata(authorizationHeader));
	return response.getSurveysList().map((survey: Survey): string => survey.getDisplayName());
}
