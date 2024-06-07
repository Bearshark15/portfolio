"use client"

import React, { createContext, useContext, useState } from 'react';
import {Project} from "@/ts/types";
import Projects from "@/ts/projects";

interface ProjectProviderProps {
    children?: React.ReactNode
}

// Define a new type that includes project and setProject
interface ProjectContextType {
    project: Project;
    setProject: React.Dispatch<React.SetStateAction<Project>>;
}

// Create a context
const ProjectContext = createContext<ProjectContextType>({project: Projects[0], setProject: () => {} });

// Create a provider component
const ProjectProvider: React.FC<ProjectProviderProps> = ({ children }) => {
    const [project, setProject] = useState(Projects[0]);

    return (
        <ProjectContext.Provider value={{project, setProject}}>
            {children}
        </ProjectContext.Provider>
    );
}

export default ProjectProvider;

// Create a hook to use the context
export function useProject() {
    const context = useContext(ProjectContext);
    if (context === undefined) {
        throw new Error('useProject must be used within a ProjectProvider');
    }
    return context;
}