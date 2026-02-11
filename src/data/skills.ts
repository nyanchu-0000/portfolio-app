import type { Skill } from "../types/index";

export const skills: Skill[] = [
    // Frontend
    {
        name: "HTML/CSS",
        level: 3,
        category: "Frontend",
    },
    {
        name: "JavaScript",
        level: 2,
        category: "Frontend",
    },
    {
        name: "TypeScript",
        level: 2,
        category: "Frontend",
    },
    {
        name: "React",
        level: 2,
        category: "Frontend",
    },
    {
        name: "Next.js",
        level: 2,
        category: "Frontend",
    },
    {
        name: "Tailwind CSS",
        level: 2,
        category: "Frontend",
    },

    // Backend
    {
        name: "Node.js",
        level: 2,
        category: "Backend",
    },
    {
        name: "supabase",
        level: 3,
        category: "Backend",
    },

    // Design
    {
        name: "Figma",
        level: 4,
        category: "Design",
    },
    {
        name: "Adobe Photoshop",
        level: 4,
        category: "Design",
    },
    {
        name: "Adobe Illustrator",
        level: 4,
        category: "Design",
    },

    // Tools
    {
        name: "Git/GitHub",
        level: 4,
        category: "Tools",
    },
    {
        name: "VS Code",
        level: 4,
        category: "Tools",
    },
    {
        name: "Cursor",
        level: 4,
        category: "Tools",
    },
];

export const skillCategories = ["Frontend", "Backend", "Design", "Tools"];
