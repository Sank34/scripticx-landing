const HEADINGS = new Set(["h1", "h2", "h3", "h4", "h5", "h6"]);

function toAscii(id) {
  return id
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/**
 * rehype-slug builds ids straight from the heading text, so Romanian headings
 * produce ids like `cum-funcționează-învățarea`, which browsers percent-encode
 * into unreadable fragments. Folding them to ASCII keeps the anchors short,
 * shareable, and identical to the ids these pages used before their headings
 * were written as Markdown.
 */
export default function rehypeAsciiSlug() {
  return function transform(node) {
    if (node.type === "element" && HEADINGS.has(node.tagName)) {
      const id = node.properties?.id;
      if (typeof id === "string") {
        node.properties.id = toAscii(id);
      }
    }

    for (const child of node.children ?? []) {
      transform(child);
    }
  };
}
