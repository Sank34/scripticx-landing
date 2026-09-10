import { blogSettings } from "../config/blog.ts";
import type { BlogLocale, BlogPost } from "./blog.ts";

export interface BlogSearchParameters {
  q?: string;
  tag?: string;
  page?: string;
}

export function getBlogListing(
  posts: BlogPost[],
  parameters: BlogSearchParameters,
  locale: BlogLocale,
) {
  const searchQuery =
    typeof parameters.q === "string"
      ? parameters.q.trim().slice(0, blogSettings.maximumSearchLength)
      : "";
  const selectedTag = typeof parameters.tag === "string" ? parameters.tag : "";
  const normalizedQuery = searchQuery.toLocaleLowerCase(locale);
  const tags = Array.from(new Set(posts.flatMap((post) => post.tags))).sort();

  const matchingPosts = posts.filter((post) => {
    const matchesTag = !selectedTag || post.tags.includes(selectedTag);
    const searchableText =
      `${post.title} ${post.description}`.toLocaleLowerCase(locale);
    return (
      matchesTag &&
      (!normalizedQuery || searchableText.includes(normalizedQuery))
    );
  });

  const totalPages = Math.max(
    1,
    Math.ceil(matchingPosts.length / blogSettings.postsPerPage),
  );
  const requestedPage = Number(parameters.page);
  const currentPage =
    Number.isSafeInteger(requestedPage) && requestedPage > 0
      ? Math.min(requestedPage, totalPages)
      : 1;
  const firstPostIndex = (currentPage - 1) * blogSettings.postsPerPage;

  return {
    searchQuery,
    selectedTag,
    tags,
    currentPage,
    totalPages,
    visiblePosts: matchingPosts.slice(
      firstPostIndex,
      firstPostIndex + blogSettings.postsPerPage,
    ),
  };
}

export function getBlogPageUrl(
  pageNumber: number,
  searchQuery: string,
  selectedTag: string,
) {
  const parameters = new URLSearchParams();
  if (searchQuery) parameters.set("q", searchQuery);
  if (selectedTag) parameters.set("tag", selectedTag);
  parameters.set("page", String(pageNumber));
  return `/blog?${parameters}`;
}
