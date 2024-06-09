import { Project } from "@/lib/types";
import ProjectCard from "./ProjectCard";
import React from "react";

interface ProjectListProps {
    projects: Project[];
}

const ProjectList: React.FC<ProjectListProps> = ({ projects }) => {
    return (
        <div className={"space-y-4 pb-14"}>
            <div className={"grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"}>
                {projects.map((project) => (
                    <ProjectCard key={project.key} project={project} />
                ))}
            </div>
        </div>
    );
}

export default ProjectList;