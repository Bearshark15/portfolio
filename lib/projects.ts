import fs from "fs";
import matter from 'gray-matter';
import path from 'path';
import {remark} from 'remark';
import html from 'remark-html';
import {Project} from "@/ts/types";

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
            key: metaData.data.key,
            title: metaData.data.title,
            shortDescription: metaData.data.shortDescription,
            description: metaData.content,
            pageLink: metaData.data.pageLink,
            thumbnail: metaData.data.thumbnail,
            bannerImage: metaData.data.bannerImage,
        }
    });
}

export function getSortedProjects()  {
    const projects = getAllProjects();
    return projects.sort((a, b) => {
        if (a.key < b.key) {
            return 1;
        } else if (a.key > b.key) {
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

    const processContent = await remark().use(html).process(matterData.content);

    const contentHtml = processContent.toString();

    return {
        id,
        contentHtml,
        title: matterData.data.title,
        shortDescription: matterData.data.shortDescription,
        bannerImage: matterData.data.bannerImage,
    };
}