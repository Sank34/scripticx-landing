import path from "node:path";

import type { NextConfig } from "next";
import createMDX from "@next/mdx";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
};

const withMDX = createMDX({
  extension: /\.(md|mdx)$/,
  options: {
    remarkPlugins: ["remark-gfm"],
    rehypePlugins: [
      "rehype-slug",
      // @next/mdx resolves plugin strings from inside its own package, so a
      // relative specifier would not be found here.
      path.join(process.cwd(), "lib/rehype-ascii-slug.mjs"),
      ["rehype-autolink-headings", { behavior: "wrap" }],
    ],
  },
});

const withNextIntl = createNextIntlPlugin("./app/i18n/request.ts");

export default withNextIntl(withMDX(nextConfig));
