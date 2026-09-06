import { test } from "node:test";
import assert from "node:assert/strict";
import { mkdtemp, mkdir, writeFile, rm } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { readBlogPosts, blogDate } from "./blog.ts";

test("blog discovers, localises and sorts posts, excluding drafts", async () => {
  const root = await mkdtemp(path.join(os.tmpdir(), "scripticx-blog-test-"));
  try {
    for (const [slug, date, draft] of [["older","2026-08-01",false],["newer","2026-09-05",false],["draft","2026-09-06",true]]) {
      await mkdir(path.join(root,slug));
      await writeFile(path.join(root,slug,"meta.json"),JSON.stringify({date,draft,author:"ScripticX",tags:["learning"],en:{title:slug,description:"Summary"},ro:{title:`RO ${slug}`,description:"Rezumat"}}));
      if (!draft) for (const locale of ["en","ro"]) await writeFile(path.join(root,slug,`${locale}.mdx`),"## Heading\n\nExample content.");
    }
    const en = await readBlogPosts(root,"en");
    assert.deepEqual(en.map(p=>p.slug),["newer","older"]);
    assert.equal(en[0].minutes,1);
    assert.equal((await readBlogPosts(root,"ro"))[0].title,"RO newer");
    await writeFile(path.join(root,"newer","meta.json"),JSON.stringify({date:"2026-02-30",author:"ScripticX",tags:[],en:{title:"Invalid",description:"Invalid"}}));
    await assert.rejects(readBlogPosts(root,"en"),/Invalid blog date/);
  } finally { await rm(root,{recursive:true,force:true}); }
});

test("blog dates are stable and include the expected calendar day", () => {
  assert.equal(blogDate("2026-09-05","en"),"5 September 2026");
  assert.equal(blogDate("2026-09-05","ro"),"5 septembrie 2026");
});
