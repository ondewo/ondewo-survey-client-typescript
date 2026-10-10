# Release History

*****************

## Release ONDEWO Survey Typescript Client 2.0.3

### Bug Fixes

* [[OND211-2443]](https://ondewo.atlassian.net/browse/OND211-2443) 2.0.2 shipped `api/google/api/annotations_pb.js`,
  which requires `../../google/api/http_pb.js`, without that file: loading any generated client module that reaches
  `annotations_pb` (every `ondewo/survey/*_pb.js` / `*_grpc_web_pb.js` with an HTTP annotation) failed with
  `Cannot find module '../../google/api/http_pb.js'`. The proto compiler generated only the google protos the API
  imports directly; 5.15.6 follows their own imports too. Regenerated with ondewo-proto-compiler 5.15.6, so
  `api/google/api/http_pb.js` and `http_pb.d.ts` are shipped. Do not use 2.0.2. The ondewo-survey-api commit is
  unchanged (`37d2f92`, now pinned by commit instead of by branch name).
* A new test (`tests/generatedModules.spec.ts`) requires every generated module and resolves every relative import in
  `api/` and in the entry point, so a missing stub fails CI.

*****************

## Release ONDEWO Survey Typescript Client 2.0.2

### New Features

* [[OND211-2443]](https://ondewo.atlassian.net/browse/OND211-2443) `createGrpcWebEndpoint({ host, port, useSecureChannel, withCredentials })`
  (`auth/grpcWebEndpoint`, re-exported from `auth/offlineTokenProvider` and the package entry point) builds the
  `hostname` URL and the client options a generated `*Client` / `*PromiseClient` takes. `https://` is the default;
  `useSecureChannel: false` builds `http://` and logs a warning naming `host:port`; a bare IPv6 host is bracketed;
  `host`, `port` and both flags are validated (`'false'` is refused, not read as `true`).
* TLS in a browser is the browser's TLS: the server certificate is checked against the browser / OS trust store and a
  client certificate (mutual TLS) comes from the browser's certificate store. A config carrying a non-empty
  `grpcCert` / `grpcClientCert` / `grpcClientKey` (or `grpc_cert` / `grpc_client_cert` / `grpc_client_key`) is
  therefore refused with an error naming the field, never the value; empty values are ignored. `withCredentials: true`
  lets a cross-origin call present the browser's client certificate. No error message renders a refused value.
* README section "TLS, mutual TLS and certificates": modes, the Envoy side of mutual TLS, a test PKI with openssl,
  security notes and troubleshooting. Documented gap: the generated clients need `XMLHttpRequest`, so gRPC calls run
  in browsers only; in Node.js only the Keycloak `login` helper is usable and there is no Node.js path for a custom CA
  or client certificate.

### Bug Fixes

* [[OND211-2443]](https://ondewo.atlassian.net/browse/OND211-2443) `OfflineTokenProvider` no longer leaks its tokens
  when logged: `JSON.stringify`, `console.log` and `util.inspect` of a provider (also nested in another object) render
  the access and refresh tokens as `***REDACTED***`. `getAuthorizationHeader()` is unchanged.
* `google-protobuf` is pinned to `4.0.2` (was exactly `3.21.4`). The generated code, regenerated with
  [ondewo-proto-compiler 5.15.2](https://github.com/ondewo/ondewo-proto-compiler/releases/tag/5.15.2),
  calls `reader.readStringRequireUtf8()` and `jspb.internal.public_for_gencode.serializeMapToBinary()`,
  which 3.21.4 does not have: with the old pin every `deserializeBinary` of a message carrying a string would throw
  `TypeError: reader.readStringRequireUtf8 is not a function` (the defect nlu-client-typescript 7.1.0-7.1.2 and
  csi-client-typescript 5.5.0-5.5.2 shipped). No released version of this package was affected. The regenerated
  `api/` is committed with this release.
* Guard: `tests/bundleStringRoundTrip.spec.ts` round-trips a string with multi-byte characters through the generated
  code; against google-protobuf 3.21.4 it reports 0 passed, 2 failed with that exact TypeError.

### Improvements

* Tests: the endpoint helper's edge cases, including calls through the real grpc-web runtime with a recording
  `XMLHttpRequest`, and the token redaction. `tests/releaseNotes.spec.ts` pins the RELEASE.md heading spelling the
  Makefile slices, a `*****` separator ending every section, and non-empty notes for the version being released.
* RELEASE.md: every section now ends at its separator (the last one ran to the end of the file).
* The release tolerates an empty "Preparing for Release" commit and commits `auth/` and the generated `README.md`.

*****************

## Release ONDEWO Survey Typescript Client 2.0.1

### Bug Fixes

* [[OND221-2830]](https://ondewo.atlassian.net/browse/OND221-2830) Regenerated with [ondewo-proto-compiler 5.13.0](https://github.com/ondewo/ondewo-proto-compiler/releases/tag/5.13.0).
* [[OND221-2830]](https://ondewo.atlassian.net/browse/OND221-2830) The hand-written `auth/` surface is now re-exported from the generated public-api barrel. It was compiled and shipped inside the package but nothing re-exported it, so importing a symbol from the package root did not resolve and consumers could only deep-import the module. The re-export is emitted by the compiler, so it survives the regeneration that rewrites the barrel on every build.
* [[OND221-2830]](https://ondewo.atlassian.net/browse/OND221-2830) Tooling: `conventional-pre-commit` now runs before `giticket` at the commit-msg stage - with giticket first, its `[OND221-2830] fix: ...` rewrite was no longer valid Conventional Commits and every commit on a ticket branch failed. `README.md` is prettier-ignored where `.prettierrc` sets `useTabs` and markdownlint's MD010 de-tabs the same blocks, and the codegen `docker run` invocations no longer pass `-it`, which fails outside a TTY.

*****************

## Release ONDEWO Survey Typescript Client 2.0.0

### Improvements

* Tracking API Version [2.0.0](https://github.com/ondewo/ondewo-survey-api/releases/tag/2.0.0) ( [Documentation](https://ondewo.github.io/ondewo-survey-api/) )

*****************

## Release ONDEWO Survey Typescript Client 1.1.0

### Improvements

* Update to SURVEY client version tag 1.1.0
* [[OND211-2039]](https://ondewo.atlassian.net/browse/OND211-2039) - Implemented automated release for GitHub and NPM
* [[OND211-2039]](https://ondewo.atlassian.net/browse/OND211-2039) - Added pre-commit hooks and adjusted files to them

*****************
