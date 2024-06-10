import { defineDocumentType, defineNestedType, makeSource } from 'contentlayer2/source-files'
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode, {LineElement} from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import {Pluggable} from "unified";

export const Project = defineDocumentType(() => ({
    name: 'Project',
    filePathPattern: `*.mdx`,
    contentType: "mdx",
    fields: {
        priority: {
            type: "number",
            required: true,
        },
        title: {
            type: "string",
            required: true,
        },
        description: {
            type: "string",
            required: true,
        },
        thumbnail: {
            type: "string",
            required: true,
        },
        bannerImage: {
            type: "string",
            required: true,
        },
        logoImage: {
            type: "string",
            required: true,
        },
        demoLink: {
            type: "string",
        },
        published: {
            type: "string",
            default: "true",
        },
    },
    computedFields: {
        slug: {
            type: "string",
            resolve: (doc) => `${doc._raw.flattenedPath}`,
        },
        slugAsParams: {
            type: "string",
            resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/"),
        },
    }
}))

export default makeSource({
    contentDirPath: "./projects",
    documentTypes: [Project],
    mdx: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [
            rehypePrettyCode({
                theme: "github-dark-default",
                keepBackground: true,
                onVisitLine(node: LineElement) {
                    // Prevent lines from collapsing in `display: grid` mode, and
                    // allow empty lines to be copy/pasted
                    if (node.children.length === 0) {
                        node.children = [{ type: "text", value: " " }];
                    }

                    node.properties.className?.push("text-red-500")
                }
            }),
            rehypeSlug,
            [
                rehypeAutolinkHeadings,
                {
                    properties: {
                        className: ["subheading-anchor"],
                        ariaLabel: "Link to section",
                    },
                },
            ],
        ] as unknown as Pluggable[],
    },
})