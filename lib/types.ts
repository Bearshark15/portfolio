export interface TeamMember {
    key: number;
    name: string;
    role: string;
    image: string;
    fallback: string;
}

export interface Project {
    id: string;
    key: number;
    title: string;
    shortDescription: string;
    description: string;
    thumbnail: string;
    bannerImage: string;
    logoImage: string;
    demoLink: string;
}

export interface ResumeEntry { 
    key: number;
    title: string;
    subtitle: string;
    description: string;
    date: string;
}