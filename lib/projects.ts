import fs from "fs";
import matter from 'gray-matter';
import path from 'path';
import {remark} from 'remark';
import html from 'remark-html';
import {Project} from "@/lib/types";

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

export function getSortedProjects()  {
    const projects = getAllProjects();
    return projects.sort((a, b) => {
        if (a.priority < b.priority) {
            return 1;
        } else if (a.priority > b.priority) {
            return -1;
        }
        else {
            return 0;
        }
    });
}

export async function getProject(id: string) {
    const fullPath = path.join(projectsDirectory, `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterData = matter(fileContents);

    const processContent = await remark()
        .use(html)
        .process(matterData.content);

    const contentHtml = processContent.toString();

    return {
        id,
        contentHtml,
        title: matterData.data.title,
        description: matterData.data.description,
        bannerImage: matterData.data.bannerImage,
        logoImage: matterData.data.logoImage,
        demoLink: matterData.data.demoLink
    };
}