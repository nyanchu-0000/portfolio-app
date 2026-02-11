import type { Skill } from "../types/index";

export const skills: Skill[] = [
    // Frontend
    {
        name: "HTML/CSS",
        level: 5,
        category: "Frontend",
        icon: "🌐",
    },
    {
        name: "JavaScript",
        level: 5,
        category: "Frontend",
        icon: "⚡",
    },
    {
        name: "TypeScript",
        level: 5,
        category: "Frontend",
        icon: "📘",
    },
    {
        name: "React",
        level: 5,
        category: "Frontend",
        icon: "⚛️",
    },
    {
        name: "Next.js",
        level: 4,
        category: "Frontend",
        icon: "▲",
    },
    {
        name: "Vue.js",
        level: 4,
        category: "Frontend",
        icon: "💚",
    },
    {
        name: "Tailwind CSS",
        level: 5,
        category: "Frontend",
        icon: "🎨",
    },

    // Backend
    {
        name: "Node.js",
        level: 4,
        category: "Backend",
        icon: "🟢",
    },
    {
        name: "Express",
        level: 4,
        category: "Backend",
        icon: "🚂",
    },
    {
        name: "PostgreSQL",
        level: 3,
        category: "Backend",
        icon: "🐘",
    },
    {
        name: "Firebase",
        level: 4,
        category: "Backend",
        icon: "🔥",
    },

    // Design
    {
        name: "Figma",
        level: 5,
        category: "Design",
        icon: "🎯",
    },
    {
        name: "Adobe Photoshop",
        level: 4,
        category: "Design",
        icon: "🖼️",
    },
    {
        name: "Adobe Illustrator",
        level: 4,
        category: "Design",
        icon: "✏️",
    },

    // Tools
    {
        name: "Git/GitHub",
        level: 5,
        category: "Tools",
        icon: "🔧",
    },
    {
        name: "Docker",
        level: 3,
        category: "Tools",
        icon: "🐳",
    },
    {
        name: "VS Code",
        level: 5,
        category: "Tools",
        icon: "💻",
    },
];

export const skillCategories = ["Frontend", "Backend", "Design", "Tools"];
