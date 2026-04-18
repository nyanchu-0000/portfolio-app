import type { Work } from "../types/index";

export const engineeringWorks: Work[] = [
    {
        id: "eng-1",
        title: "恐竜図鑑",
        description:
            "ReactとTypeScriptを使用した恐竜紹介図鑑サイト。画像はGemini、ImageFX、Hailuo AIなどの生成AIツールで制作。",
        imageUrl: "/images/works/dinosaur-dictionary.png",
        technologies: [
            "React",
            "TypeScript",
            "Gemini (AI)",
            "ImageFX (AI)",
            "Hailuo AI (AI)",
        ],
        link: "https://dinosaur-dictionary-app.vercel.app/",
        github: "https://github.com/username/ec-site",
        category: "engineering",
    },
    {
        id: "eng-2",
        title: "ZzzCast",
        description:
            "2人専用のSNSアプリ。投稿や相手の投稿の閲覧が可能。すべてのページのデザイン設計から実装までを担当。",
        imageUrl: "/images/works/zzzcast.png",
        link: "/works/design-system",
        technologies: ["React", "TypeScript", "Supabase", "Figma"],
        category: "engineering",
    },
    {
        id: "eng-2b",
        title: "Git コマンド クイズ",
        description:
            "ReactとTypeScriptを使用したGit コマンド クイズサイト。正答・誤答を問わず、回答直後に解説を表示。",
        imageUrl: "/images/works/git-quiz-app.png",
        technologies: ["React", "TypeScript", "Gemini"],
        link: "https://git-quiz-app.vercel.app/",
        github: "https://github.com/username/task-app",
        category: "engineering",
    },
    {
        id: "eng-3",
        title: "議事録作成サイト",
        description:
            "ReactとTypeScriptを使用した議事録作成サイト。会議で手早く議事録を作成できるようにするため、入力フォームを作成。",
        imageUrl: "/images/works/minutes-app.png",
        technologies: ["React", "TypeScript"],
        link: "/works/minutes-app",
        category: "engineering",
    },
    {
        id: "eng-4",
        title: "ECサイト（仮）",
        description:
            "Next.jsとStripeを使用したフルスタックECサイト。カート・決済機能付き。",
        imageUrl: "/images/works/ec-site.jpg",
        technologies: ["Next.js", "TypeScript", "Stripe", "Prisma"],
        category: "engineering",
    },
    {
        id: "eng-5",
        title: "ポートフォリオサイト（仮）",
        description:
            "Vite + React + Tailwind CSSで制作したポートフォリオサイト。アニメーション実装済み。",
        imageUrl: "/images/works/portfolio.jpg",
        technologies: ["React", "Vite", "Tailwind CSS"],
        category: "engineering",
    },
    {
        id: "eng-6",
        title: "天気予報アプリ（仮）",
        description:
            "OpenWeather APIを使用したリアルタイム天気予報アプリ。位置情報対応。",
        imageUrl: "/images/works/weather-app.jpg",
        technologies: ["React", "TypeScript", "OpenWeather API"],
        category: "engineering",
    },
];

export const designWorks: Work[] = [
    {
        id: "design-1",
        title: "就活ESチェッカー",
        description:
            "作成した文章を入力するだけで高性能AIが添削＆最適化。文字数調整も可能で、短時間で就活を有利に進められます。",
        imageUrl: "/images/works/es-checker.png",
        link: "/works/es-checker",
        technologies: ["Illustrator", "Figma"],
        category: "design",
        isCollaborative: true,
    },
    {
        id: "design-3",
        title: "モバイルアプリUI/UX",
        description:
            "フィットネスアプリのUI/UXデザイン。ユーザビリティテストを実施。",
        imageUrl: "/images/works/mobile-ui.jpg",
        category: "design",
    },
    {
        id: "design-4",
        title: "ブランドロゴデザイン（仮）",
        description:
            "スタートアップ企業向けのロゴ・ブランドアイデンティティデザイン。",
        imageUrl: "/images/works/logo-design.jpg",
        category: "design",
    },
    {
        id: "design-5",
        title: "LP デザイン（仮）",
        description:
            "サービス訴求のためのランディングページデザイン。CVR向上を意識したレイアウト。",
        imageUrl: "/images/works/lp-design.jpg",
        category: "design",
    },
    {
        id: "design-6",
        title: "アイコンセット（仮）",
        description:
            "Illustratorで制作した統一感のあるUIアイコンセット。SVG形式で書き出し。",
        imageUrl: "/images/works/icon-set.jpg",
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
