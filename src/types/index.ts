export interface Work {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    technologies?: string[];
    link?: string;
    github?: string;
    category: "engineering" | "design" | "art";
}

export interface Skill {
    name: string;
    level: number; // 1-5
    category: string;
    icon?: string;
}

export interface Qualification {
    id: string;
    name: string;
    issuer: string;
    date: string;
}

export interface CareerItem {
    id: string;
    period: string;
    company?: string;
    position: string;
    description: string;
}

export interface Profile {
    name: string;
    nameEn?: string;
    title: string;
    bio: string;
    email: string;
    github?: string;
    twitter?: string;
    linkedin?: string;
}
