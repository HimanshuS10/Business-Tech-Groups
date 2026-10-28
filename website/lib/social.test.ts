import assert from "node:assert/strict";
import test from "node:test";
import { socialShare, socialTitle, socialWordCount } from "./social.ts";

test("social titles stay the club name and descriptions stay under 25 words", () => {
  assert.equal(socialTitle, "Business Technologies Guelph");
  const paths = new Set<string>();
  for (const share of Object.values(socialShare)) {
    assert.ok(socialWordCount(share.description) < 25, share.description);
    assert.ok(share.path.startsWith("/images/share/"));
    assert.equal(paths.has(share.path), false);
    paths.add(share.path);
  }
  assert.equal(paths.size, 6);
});
