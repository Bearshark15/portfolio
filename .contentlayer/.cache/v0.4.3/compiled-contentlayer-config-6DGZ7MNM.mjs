// contentlayer.config.ts
import { defineDocumentType, makeSource } from "contentlayer2/source-files";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
var Project = defineDocumentType(() => ({
  name: "Project",
  filePathPattern: `*.mdx`,
  contentType: "mdx",
  fields: {
    priority: {
      type: "number",
      required: true
    },
    title: {
      type: "string",
      required: true
    },
    description: {
      type: "string",
      required: true
    },
    thumbnail: {
      type: "string",
      required: true
    },
    bannerImage: {
      type: "string",
      required: true
    },
    logoImage: {
      type: "string",
      required: true
    },
    demoLink: {
      type: "string"
    },
    published: {
      type: "string",
      default: "true"
    }
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (doc) => `${doc._raw.flattenedPath}`
    },
    slugAsParams: {
      type: "string",
      resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/")
    }
  }
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "./projects",
  documentTypes: [Project],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      rehypePrettyCode,
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ["subheading-anchor"],
            ariaLabel: "Link to section"
          }
        }
      ]
    ]
  }
});
export {
  Project,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-6DGZ7MNM.mjs.map
