import { defineField, defineType } from "sanity";

export const article = defineType({
  name: "article",
  title: "Article",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: rule => rule.required() }),
    defineField({ name: "slug", title: "URL slug", type: "slug", options: { source: "title", maxLength: 96 }, validation: rule => rule.required() }),
    defineField({ name: "excerpt", title: "Summary", type: "text", rows: 3 }),
    defineField({ name: "coverImage", title: "Cover image", type: "image", options: { hotspot: true } }),
    defineField({ name: "author", title: "Author", type: "reference", to: [{ type: "author" }] }),
    defineField({ name: "topics", title: "Topics", type: "array", of: [{ type: "reference", to: [{ type: "topic" }] }] }),
    defineField({ name: "publishedAt", title: "Published date", type: "datetime" }),
    defineField({ name: "readingTime", title: "Reading time", type: "string", description: "For example: 5 min read" }),
    defineField({ name: "featured", title: "Feature on home page", type: "boolean", initialValue: false }),
    defineField({ name: "body", title: "Article body", type: "array", of: [{ type: "block" }] }),
    defineField({ name: "seoDescription", title: "SEO description", type: "text", rows: 3 })
  ],
  orderings: [{ title: "Published, newest first", name: "publishedAtDesc", by: [{ field: "publishedAt", direction: "desc" }] }]
});
