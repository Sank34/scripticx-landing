import assert from "node:assert/strict";
import { test } from "node:test";
import { blogSettings } from "../config/blog.ts";
import { getBlogListing, getBlogPageUrl } from "./blog-listing.ts";

const posts = Array.from(
  { length: blogSettings.postsPerPage + 2 },
  (_, index) => ({
    slug: `article-${index}`,
    date: "2026-09-10",
    author: "ScripticX",
    minutes: 1,
    title: index === 0 ? "Învățare Python" : "Programming",
    description: "Practice algorithms",
    tags: index === 0 ? ["python"] : ["learning"],
  }),
);

test("blog combines case-insensitive text search and tag filtering", () => {
  const listing = getBlogListing(
    posts,
    { q: "  ÎNVĂȚARE  ", tag: "python" },
    "ro",
  );
  assert.deepEqual(
    listing.visiblePosts.map((post) => post.slug),
    ["article-0"],
  );
  assert.equal(listing.searchQuery, "ÎNVĂȚARE");
  assert.equal(
    getBlogListing(posts, { q: "Python", tag: "learning" }, "en").visiblePosts
      .length,
    0,
  );
});

test("pagination follows configured page size and clamps invalid or out-of-range pages", () => {
  assert.equal(
    getBlogListing(posts, {}, "en").visiblePosts.length,
    blogSettings.postsPerPage,
  );
  for (const page of ["0", "-1", "1.5", "text", "Infinity"]) {
    assert.equal(getBlogListing(posts, { page }, "en").currentPage, 1);
  }
  const lastPage = getBlogListing(posts, { page: "999" }, "en");
  assert.equal(lastPage.currentPage, 2);
  assert.equal(lastPage.visiblePosts.length, 2);
  const empty = getBlogListing([], { page: "999" }, "en");
  assert.equal(empty.currentPage, 1);
  assert.equal(empty.totalPages, 1);
  assert.deepEqual(empty.visiblePosts, []);
});

test("page links preserve and encode filters", () => {
  const url = new URL(
    getBlogPageUrl(2, "C++ & Python", "learning"),
    "https://example.com",
  );
  assert.equal(url.searchParams.get("q"), "C++ & Python");
  assert.equal(url.searchParams.get("tag"), "learning");
  assert.equal(url.searchParams.get("page"), "2");
});
