export interface TeamMember {
    key: number;
    name: string;
    role: string;
    image: string;
    fallback: string;
}

export interface Project { 
    key: number;
    title: string;
    shortDescription: string;
    description: string;
    pageLink: string;
    thumbnail: string;
    images: string[];
    team: TeamMember[];
}

export interface ResumeEntry { 
    key: number;
    title: string;
    subtitle: string;
    description: string;
    date: string;
}