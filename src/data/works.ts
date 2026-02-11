import type { Work } from "../types/index";

export const engineeringWorks: Work[] = [
    {
        id: "eng-1",
        title: "ECサイト構築プロジェクト",
        description:
            "Next.jsとStripeを使用したフルスタックECサイト。商品管理、決済、注文管理機能を実装。",
        imageUrl: "/images/works/ec-site.jpg",
        technologies: [
            "Next.js",
            "TypeScript",
            "Stripe",
            "Tailwind CSS",
            "PostgreSQL",
        ],
        link: "https://example.com",
        github: "https://github.com/username/ec-site",
        category: "engineering",
    },
    {
        id: "eng-2",
        title: "タスク管理アプリケーション",
        description:
            "React + Firebaseを使用したリアルタイムタスク管理ツール。ドラッグ&ドロップ対応。",
        imageUrl: "/images/works/task-app.jpg",
        technologies: ["React", "TypeScript", "Firebase", "Material-UI"],
        link: "https://example.com/task-app",
        github: "https://github.com/username/task-app",
        category: "engineering",
    },
    {
        id: "eng-3",
        title: "企業コーポレートサイト",
        description:
            "モダンでレスポンシブな企業サイト。CMSによるコンテンツ管理機能付き。",
        imageUrl: "/images/works/corporate.jpg",
        technologies: ["Vue.js", "Nuxt.js", "Contentful", "SCSS"],
        link: "https://example.com/corporate",
        category: "engineering",
    },
];

export const designWorks: Work[] = [
    {
        id: "design-1",
        title: "ブランディングデザイン",
        description:
            "スタートアップ企業のブランディング一式。ロゴ、名刺、Webデザインを制作。",
        imageUrl: "/images/works/branding.jpg",
        category: "design",
    },
    {
        id: "design-2",
        title: "UIデザインシステム",
        description:
            "SaaS製品向けのデザインシステム構築。コンポーネントライブラリとガイドライン。",
        imageUrl: "/images/works/design-system.jpg",
        category: "design",
    },
    {
        id: "design-3",
        title: "モバイルアプリUI/UX",
        description:
            "フィットネスアプリのUI/UXデザイン。ユーザビリティテストを実施。",
        imageUrl: "/images/works/mobile-ui.jpg",
        category: "design",
    },
];

export const artWorks: Work[] = [
    {
        id: "art-1",
        title: "風景画シリーズ - 四季",
        description: "油彩による日本の四季を表現した風景画作品。",
        imageUrl: "/images/works/landscape.jpg",
        category: "art",
    },
    {
        id: "art-2",
        title: "抽象画コレクション",
        description: "アクリル絵具を使用した抽象表現作品。感情と色彩の探求。",
        imageUrl: "/images/works/abstract.jpg",
        category: "art",
    },
    {
        id: "art-3",
        title: "デジタルアート作品",
        description: "Procreateを使用したデジタルイラストレーション。",
        imageUrl: "/images/works/digital-art.jpg",
        category: "art",
    },
];

export const allWorks = [...engineeringWorks, ...designWorks, ...artWorks];
