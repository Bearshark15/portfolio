export interface TeamMember {
    key: number;
    name: string;
    role: string;
    image: string;
    fallback: string;
}

export interface Project {
    id: string;
    priority: number;
    title: string;
    description: string;
    thumbnail: string;
    bannerImage: string;
    logoImage: string;
    demoLink: string;
    published: boolean;
}

export interface ResumeEntry { 
    key: number;
    title: string;
    subtitle: string;
    description: string;
    date: string;
}