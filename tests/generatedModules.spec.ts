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

// EVERY GENERATED MODULE MUST LOAD.
//
// `@ondewo/survey-client-typescript` 2.0.2 shipped `api/google/api/annotations_pb.js`, which requires
// `../../google/api/http_pb.js`, without that file: the proto compiler (up to 5.15.5) generated only
// the google/ protos the API imports DIRECTLY, and `google/api/http.proto` is imported by
// `annotations.proto`, not by the API. Loading any client that reaches `annotations_pb` failed with
// "Cannot find module". This suite requires every generated module and resolves every relative
// import the package ships, so a missing stub fails here instead of in a consumer.
//
//   node --test .test-build/generatedModules.spec.js

import nodeTest from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { createRequire } from 'node:module';
import path from 'node:path';

/** The repository root: this file is compiled to `.test-build/generatedModules.spec.js`. */
const ROOT: string = path.resolve(__dirname, '..');

/** Every `.js` file below `dir`, as absolute paths, in a stable order. */
function listJsFiles(dir: string): string[] {
	const found: string[] = [];
	for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
		const full: string = path.join(dir, entry.name);
		if (entry.isDirectory()) {
			found.push(...listJsFiles(full));
		} else if (entry.name.endsWith('.js')) {
			found.push(full);
		}
	}
	return found.sort();
}

/**
 * True when `specifier`, relative to `fromFile`, names a file the way Node or a bundler resolves it.
 * `.ts` counts as well: the entry point re-exports the hand-written `auth/` modules, which are kept
 * as `.ts` here and compiled to `.js` only when the npm package is assembled. api/ holds no `.ts`.
 */
function resolves(fromFile: string, specifier: string): boolean {
	const target: string = path.resolve(path.dirname(fromFile), specifier);
	return [target, `${target}.js`, `${target}.ts`, path.join(target, 'index.js')].some(
		(candidate: string): boolean => fs.existsSync(candidate) && fs.statSync(candidate).isFile()
	);
}

/** The relative specifiers of every `require('./x')` and `from './x'` in `file`. */
function relativeSpecifiers(file: string): string[] {
	const source: string = fs.readFileSync(file, 'utf8');
	const pattern: RegExp = /(?:require\(\s*|from\s+)['"](\.{1,2}\/[^'"]+)['"]/g;
	return Array.from(source.matchAll(pattern), (match: RegExpMatchArray): string => match[1]);
}

/** The first line of whatever a failed `require()` threw. */
function firstLine(error: unknown): string {
	if (error instanceof Error) {
		return error.message.split('\n')[0];
	}
	return String(error);
}

/** A CommonJS loader, so each module is loaded exactly the way a consumer's `require()` loads it. */
const load: NodeJS.Require = createRequire(__filename);

const GENERATED: string[] = listJsFiles(path.join(ROOT, 'api'));

nodeTest('the generated api/ tree is not empty', (): void => {
	assert.ok(GENERATED.length > 0, 'no generated .js modules under api/');
});

nodeTest('google/api/annotations_pb.js ships with the http_pb.js it requires', (): void => {
	assert.ok(fs.existsSync(path.join(ROOT, 'api', 'google', 'api', 'http_pb.js')));
	assert.ok(fs.existsSync(path.join(ROOT, 'api', 'google', 'api', 'http_pb.d.ts')));
});

nodeTest('every relative import in the generated modules and the entry point resolves', (): void => {
	const unresolved: string[] = [];
	for (const file of [...GENERATED, path.join(ROOT, 'public-api.js')]) {
		for (const specifier of relativeSpecifiers(file)) {
			if (!resolves(file, specifier)) {
				unresolved.push(`${path.relative(ROOT, file)} -> ${specifier}`);
			}
		}
	}
	assert.deepEqual(unresolved, []);
});

nodeTest('every generated module can be required', (): void => {
	const failed: string[] = [];
	for (const file of GENERATED) {
		try {
			load(file);
		} catch (error: unknown) {
			failed.push(`${path.relative(ROOT, file)}: ${firstLine(error)}`);
		}
	}
	assert.deepEqual(failed, []);
});
