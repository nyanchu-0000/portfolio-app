import type { Skill } from "../types/index";

export const skills: Skill[] = [
    // Programming
    {
        name: "HTML/CSS",
        level: 4,
        category: "Programming",
    },
    {
        name: "JavaScript",
        level: 3,
        category: "Programming",
    },
    {
        name: "TypeScript",
        level: 3,
        category: "Programming",
    },
    {
        name: "React",
        level: 3,
        category: "Programming",
    },
    {
        name: "Next.js",
        level: 2,
        category: "Programming",
    },
    {
        name: "Tailwind CSS",
        level: 2,
        category: "Programming",
    },
    {
        name: "Node.js",
        level: 2,
        category: "Programming",
    },

    // Design
    {
        name: "Figma",
        level: 4,
        category: "Design",
    },
    {
        name: "Adobe Photoshop",
        level: 3,
        category: "Design",
    },
    {
        name: "Adobe Illustrator",
        level: 3,
        category: "Design",
    },
    {
        name: "CLIP STUDIO PAINT",
        level: 4,
        category: "Design",
    },

    // Infrastructure
    {
        name: "Docker",
        level: 1,
        category: "Infrastructure",
    },

    // Tools
    {
        name: "Git/GitHub",
        level: 4,
        category: "Tools",
    },
    {
        name: "VS Code",
        level: 5,
        category: "Tools",
    },
    {
        name: "Cursor",
        level: 5,
        category: "Tools",
    },
    {
        name: "Supabase",
        level: 2,
        category: "Tools",
    },
];

export const skillCategories = ["Programming", "Infrastructure", "Design", "Tools"];
