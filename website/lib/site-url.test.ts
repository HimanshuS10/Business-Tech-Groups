import assert from "node:assert/strict";
import test from "node:test";
import { indexingEnabled, siteOrigin } from "./site-url.ts";

test("rejects a missing or localhost site url", () => {
  assert.equal(siteOrigin(undefined), null);
  assert.equal(siteOrigin("http://localhost:3001"), null);
  assert.equal(siteOrigin("http://127.0.0.1:3001"), null);
  assert.equal(siteOrigin("not a url"), null);
});

test("accepts a public origin and drops a path", () => {
  const origin = siteOrigin("https://example.invalid/about");
  assert.equal(origin?.origin, "https://example.invalid");
});

test("preview deployments stay out of the index", () => {
  assert.equal(
    indexingEnabled({
      siteUrl: "https://example.invalid",
      vercelEnv: "preview",
      indexing: "production",
    }),
    false,
  );
});

test("production indexing requires a public origin", () => {
  assert.equal(indexingEnabled({ siteUrl: "http://localhost:3001", vercelEnv: "production" }), false);
  assert.equal(indexingEnabled({ siteUrl: "https://example.invalid", vercelEnv: "production" }), true);
  assert.equal(
    indexingEnabled({ siteUrl: "https://example.invalid", indexing: "production" }),
    true,
  );
  assert.equal(indexingEnabled({ siteUrl: "https://example.invalid" }), false);
});
