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
        title: "ZzzCast（SNSアプリ）",
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
        imageContain: true,
    },
    {
        id: "eng-4",
        title: "割り勘アプリ",
        description:
            "2人の支払い金額を入力するだけで、割り勘の差額を自動計算。どちらがいくら多く払うべきかを即座に表示します。本アプリ独自に、「多く払うべき金額」機能を搭載。",
        imageUrl: "/images/works/nyanchu-app.png",
        technologies: ["JavaScript"],
        link: "https://nyanchu-app.vercel.app/split",
        category: "engineering",
    },
    {
        id: "eng-5",
        title: "メトロノーム",
        description:
            "BPMを入力するだけで、メトロノームが起動。ホバー時のみスピンボタンを表示し、ボタン操作と手動数値入力の両方に対応。音だけでなくアニメーションで視覚化される。",
        imageUrl: "/images/works/metronome.png",
        technologies: ["JavaScriptct"],
        link: "https://metronome-seven-coral.vercel.app/",
        category: "engineering",
        imageContain: true,
    },
    {
        id: "eng-6",
        title: "経路沿いスポット検索（準備中）",
        description:
            "設定した移動ルートの左右一帯にあるスポットだけをフィルタリングして表示。",
        imageUrl: "/images/works/weather-app.jpg",
        technologies: [
            "React",
            "TypeScript",
            "Maps JavaScript API",
            "Places API",
            "Directions API",
        ],
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
