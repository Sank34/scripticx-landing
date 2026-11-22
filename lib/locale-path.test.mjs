import assert from "node:assert/strict";
import { test } from "node:test";
import { localizeHref, stripLocale } from "./locale-path.ts";

test("internal paths get the locale prefix", () => {
  assert.equal(localizeHref("/members/maia", "en"), "/en/members/maia");
  assert.equal(localizeHref("/education", "ro"), "/ro/education");
  assert.equal(localizeHref("/", "en"), "/en");
});

test("query strings and hashes are kept", () => {
  assert.equal(localizeHref("/#team", "en"), "/en#team");
  assert.equal(localizeHref("/blog?tag=python#top", "ro"), "/ro/blog?tag=python#top");
});

test("non-page hrefs are left alone", () => {
  for (const href of [
    "https://platform.scripticx.org",
    "//cdn.example.com/x",
    "#team",
    "mailto:maia@scripticx.org",
    "/en/members/maia",
    "/ro",
    "/team/Maia-Pricop-new.jpg",
    "/api/social-image",
    "/_next/static/x.js",
  ]) {
    assert.equal(localizeHref(href, "en"), href);
  }
});

test("a path that only starts like a locale is still localized", () => {
  assert.equal(localizeHref("/english", "en"), "/en/english");
});

test("stripLocale removes only a leading locale segment", () => {
  assert.equal(stripLocale("/en/members/maia"), "/members/maia");
  assert.equal(stripLocale("/ro"), "/");
  assert.equal(stripLocale("/members/maia"), "/members/maia");
  assert.equal(stripLocale("/english"), "/english");
});
