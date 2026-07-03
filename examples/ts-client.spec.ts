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
 * Mock-based unit tests for the `ts-client` usage example. No live gRPC backend and no generated
 * browser stubs are loaded: the Surveys client and its request / response messages are replaced by
 * in-memory fakes, so the test asserts purely on what the example SENDS (page token + bearer
 * metadata) and how it maps the response.
 *
 * ```sh
 * npm test
 * ```
 *
 * @module ts-client.spec
 */

import { test as runTestCase } from 'node:test';
import assert from 'node:assert/strict';

import type * as grpcWeb from 'grpc-web';

import type { ListSurveysRequest, ListSurveysResponse, Survey } from '../api/ondewo/survey/survey_pb';
import type { SurveysPromiseClient } from '../api/ondewo/survey/survey_grpc_web_pb';

import { applyPageSize, authorizationMetadata, listSurveyDisplayNames } from './ts-client';

/** A fake ListSurveys request paired with the page tokens it recorded. */
interface FakeRequestRecord {
	/** The message passed to the example, structurally typed as the real request. */
	message: ListSurveysRequest;
	/** Every value the example set via `setPageToken`, in call order. */
	pageTokens: string[];
}

/** One recorded invocation of the fake `listSurveys` RPC. */
interface RecordedCall {
	/** The request the example sent. */
	request: ListSurveysRequest;
	/** The metadata the example attached to the call. */
	metadata: grpcWeb.Metadata | undefined;
}

/** A fake Surveys client paired with the calls it recorded. */
interface FakeClientRecord {
	/** The client passed to the example, structurally typed as the real promise client. */
	client: SurveysPromiseClient;
	/** Every `listSurveys` invocation the example made, in call order. */
	calls: RecordedCall[];
}

/**
 * Build a fake {@link Survey} exposing only the accessors the example reads.
 *
 * @param surveyId - The survey id the fake reports.
 * @param displayName - The display name the fake reports.
 * @returns A structural stand-in for a generated Survey message.
 */
function fakeSurvey(surveyId: string, displayName: string): Survey {
	return {
		getSurveyId: (): string => surveyId,
		getDisplayName: (): string => displayName
	} as unknown as Survey;
}

/**
 * Build a fake ListSurveys request that records every page token the example sets on it.
 *
 * @returns The fake request and its recorded page tokens.
 */
function fakeListSurveysRequest(): FakeRequestRecord {
	const pageTokens: string[] = [];
	const message: ListSurveysRequest = {
		setPageToken(value: string): void {
			pageTokens.push(value);
		}
	} as unknown as ListSurveysRequest;
	return { message, pageTokens };
}

/**
 * Build a fake ListSurveys response returning a fixed survey list.
 *
 * @param surveys - The surveys the response returns.
 * @returns A structural stand-in for a generated ListSurveysResponse message.
 */
function fakeListSurveysResponse(surveys: Survey[]): ListSurveysResponse {
	return {
		getSurveysList: (): Survey[] => surveys,
		getNextPageToken: (): string => ''
	} as unknown as ListSurveysResponse;
}

/**
 * Build a fake Surveys promise client that records each request + metadata and returns a fixed
 * response.
 *
 * @param response - The response every `listSurveys` call resolves to.
 * @returns The fake client and its recorded calls.
 */
function fakeSurveysClient(response: ListSurveysResponse): FakeClientRecord {
	const calls: RecordedCall[] = [];
	const client: SurveysPromiseClient = {
		listSurveys(request: ListSurveysRequest, metadata?: grpcWeb.Metadata): Promise<ListSurveysResponse> {
			calls.push({ request, metadata });
			return Promise.resolve(response);
		}
	} as unknown as SurveysPromiseClient;
	return { client, calls };
}

runTestCase('authorizationMetadata carries the bearer credential on the authorization header', () => {
	assert.deepEqual(authorizationMetadata('Bearer access-1'), { Authorization: 'Bearer access-1' });
});

runTestCase('applyPageSize writes the ONDEWO page_size-<n> pagination token onto the request', () => {
	const built: FakeRequestRecord = fakeListSurveysRequest();
	const returned: ListSurveysRequest = applyPageSize(built.message, 100);
	// The helper mutates and returns the same request instance (enables call chaining).
	assert.equal(returned, built.message);
	assert.deepEqual(built.pageTokens, ['page_size-100']);
});

runTestCase('listSurveyDisplayNames sends the bearer metadata and maps surveys to display names', async () => {
	const surveys: Survey[] = [fakeSurvey('id-1', 'Onboarding'), fakeSurvey('id-2', 'NPS')];
	const backend: FakeClientRecord = fakeSurveysClient(fakeListSurveysResponse(surveys));
	const built: FakeRequestRecord = fakeListSurveysRequest();

	const displayNames: string[] = await listSurveyDisplayNames(backend.client, built.message, 'Bearer access-1');

	assert.deepEqual(displayNames, ['Onboarding', 'NPS']);
	assert.equal(backend.calls.length, 1);
	assert.equal(backend.calls[0].request, built.message);
	assert.deepEqual(backend.calls[0].metadata, { Authorization: 'Bearer access-1' });
});
