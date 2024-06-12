import fs from "fs";
import matter from 'gray-matter';
import path from 'path';
import {Project} from "@/lib/types";
import {unified} from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import rehypePrettyCode from "rehype-pretty-code";

const projectsDirectory = path.join(process.cwd(), 'projects');

function getAllProjects(): Project[] {
    const fileNames = fs.readdirSync(projectsDirectory);

    return fileNames.map(fileName => {
        const id = fileName.replace(/\.md$/, '');
        const fullPath = path.join(projectsDirectory, fileName);
        const fileContents  = fs.readFileSync(fullPath, 'utf8');

        const metaData = matter(fileContents);

        return {
            id,
            priority: metaData.data.priority,
            title: metaData.data.title,
            description: metaData.data.description,
            thumbnail: metaData.data.thumbnail,
            bannerImage: metaData.data.bannerImage,
            logoImage: metaData.data.logoImage,
            demoLink: metaData.data.demoLink,
            published: metaData.data.published
        }
    });
}

async function parseMarkdown(markdown: string) {
    const result = await unified()
        .use(remarkParse)
        .use(remarkRehype)
        .use(rehypePrettyCode, {
            theme: "dark-plus",
            onVisitLine(node) {
                // Prevent lines from collapsing in `display: grid` mode, and allow empty
                // lines to be copy/pasted
                if (node.children.length === 0) {
                    node.children = [{ type: "text", value: " " }]
                }
            },
        })
        .use(rehypeStringify)
        .process(markdown);

    return result.toString();
}

export function getSortedProjects()  {
    return getAllProjects().sort((a, b) => {
        if (a.priority < b.priority) {
            return 1;
        } else if (a.priority > b.priority) {
            return -1;
        } else {
            return 0;
        }
    });
}

export async function getProject(id: string) {
    const fullPath = path.join(projectsDirectory, `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterData = matter(fileContents);

    const contentHtml = await parseMarkdown(matterData.content);

    return {
        id,
        contentHtml,
        title: matterData.data.title,
        description: matterData.data.description,
        bannerImage: matterData.data.bannerImage,
        logoImage: matterData.data.logoImage,
        demoLink: matterData.data.demoLink,
        published: matterData.data.published
    };
}