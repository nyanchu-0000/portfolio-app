import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

const DesignSystemDetail: React.FC = () => {
    const pcImgRef = useRef<HTMLImageElement>(null);
    const [pcImgHeight, setPcImgHeight] = useState<number | undefined>(
        undefined,
    );

    useEffect(() => {
        const updateHeight = () => {
            if (pcImgRef.current) {
                setPcImgHeight(pcImgRef.current.offsetHeight);
            }
        };
        const img = pcImgRef.current;
        if (img) {
            if (img.complete) {
                updateHeight();
            } else {
                img.addEventListener("load", updateHeight);
            }
        }
        window.addEventListener("resize", updateHeight);
        return () => {
            img?.removeEventListener("load", updateHeight);
            window.removeEventListener("resize", updateHeight);
        };
    }, []);

    return (
        <div className="min-h-screen bg-cream-100">
            <Header />
            <main className="pt-20">
                {/* Hero Section */}
                <section className="bg-gradient-to-r from-brown-100 to-sand-100 py-16">
                    <div className="max-w-6xl mx-auto px-6">
                        <Link
                            to="/"
                            className="inline-flex items-center text-brown-700 hover:text-brown-900 mb-6 transition-colors"
                        >
                            <svg
                                className="w-5 h-5 mr-2"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path d="M15 19l-7-7 7-7"></path>
                            </svg>
                            戻る
                        </Link>
                        <h1 className="text-4xl md:text-5xl font-bold text-brown-900 mb-4">
                            UIデザインシステム
                        </h1>
                        <p className="text-xl text-brown-700 leading-relaxed">
                            親しい関係の人とのみ、思い出や日常を共有できます。
                            <br />
                            「いいね」の代わりに承認ボタンがあり、投稿を承認しあうことができる承認欲求を満たすアプリです。
                        </p>
                    </div>
                </section>

                {/* Mockup Showcase Section */}
                <section className="pt-8 pb-20 bg-cream-100">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="flex flex-col md:flex-row gap-0 items-center justify-start">
                            <div className="flex justify-center flex-[10]">
                                <img
                                    ref={pcImgRef}
                                    src="/images/projects/approval-app/Group 25.png"
                                    alt="承認アプリ モックアップ1"
                                    className="w-full object-contain"
                                />
                            </div>
                            <div className="flex justify-center items-center flex-[5]">
                                <img
                                    src="/images/projects/approval-app/Group 26.png"
                                    alt="承認アプリ モックアップ2"
                                    className="w-auto object-contain"
                                    style={
                                        pcImgHeight
                                            ? {
                                                  height: `${pcImgHeight}px`,
                                              }
                                            : undefined
                                    }
                                />
                            </div>
                            <div className="flex justify-center items-center flex-[5]">
                                <img
                                    src="/images/projects/approval-app/Group 27.png"
                                    alt="承認アプリ モックアップ3"
                                    className="w-auto object-contain"
                                    style={
                                        pcImgHeight
                                            ? { height: `${pcImgHeight}px` }
                                            : undefined
                                    }
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section className="py-16 bg-cream-100">
                    <div className="max-w-6xl mx-auto px-6">
                        <h2 className="text-3xl font-bold text-brown-900 mb-12 text-center">
                            制作のポイント
                        </h2>

                        {/* Feature 1: Design Concept */}
                        <div className="mb-16">
                            <div className="bg-cream-50 rounded-lg p-8 shadow-lg border border-sand-200">
                                <h3 className="text-2xl font-bold text-brown-900 mb-4">
                                    デザインカンプ
                                </h3>
                                <p className="text-brown-700 mb-2 leading-relaxed">
                                    全コンポーネントのデザイン案をFigmaで作成。
                                </p>
                                <h4 className="text-lg font-bold text-brown-900 mb-2">
                                    デザイン・アプリケーションコンセプト
                                </h4>
                                <p className="text-brown-700 mb-6 leading-relaxed">
                                    ホーム・投稿・承認一覧・マイページなど、全画面のUIをFigmaでデザイン。
                                    既存のSNSアプリでは、不当低多数との繋がりになることが多いが、本来「見せたい・見たい人」は僅かなのでは、、という点から着想を得て開発しました。また、承認欲求を満たしたいという理由でSNSを利用するユーザーが増えていることから、「いいね」の代わりに承認ボタンを設置し、投稿を承認しあうことができる承認欲求を満たすアプリです。
                                </p>
                                <div className="flex justify-center">
                                    <img
                                        src="/images/projects/ZzzCast/ZzzCast-design.png"
                                        alt="デザインカンプ全体像"
                                        className="w-full max-w-3xl rounded-lg shadow-md"
                                        onError={(e) => {
                                            const target =
                                                e.target as HTMLImageElement;
                                            target.src =
                                                'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="600" height="400"%3E%3Crect fill="%23d9d3c6" width="600" height="400"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" fill="%239a8d7d" font-family="sans-serif" font-size="20"%3E画像を追加予定%3C/text%3E%3C/svg%3E';
                                        }}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Feature 3: Component Library */}
                        <div className="mb-16">
                            <div className="bg-cream-50 rounded-lg p-8 shadow-lg border border-sand-200">
                                <h3 className="text-2xl font-bold text-brown-900 mb-4">
                                    投稿画面
                                </h3>
                                <p className="text-brown-700 mb-8 leading-relaxed">
                                    投稿画面では、タイトルと内容（本文）が入力されていれば投稿ボタンが活性化されます。画像を挿入することもできます。その場から写真を撮って投稿することもできるため、リアルタイムで日常を共有することが可能です。
                                </p>
                                <div className="grid grid-cols-3 gap-4">
                                    <div>
                                        <img
                                            src="/images/projects/ZzzCast/Group 25.png"
                                            alt="投稿画面 1"
                                            className="w-full rounded-lg shadow-md"
                                        />
                                    </div>
                                    <div>
                                        <img
                                            src="/images/projects/ZzzCast/Group 26.png"
                                            alt="投稿画面 2"
                                            className="w-full rounded-lg shadow-md"
                                        />
                                    </div>
                                    <div>
                                        <img
                                            src="/images/projects/ZzzCast/Group 27.png"
                                            alt="投稿画面 3"
                                            className="w-full rounded-lg shadow-md"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Feature 4: Guideline */}
                        <div className="mb-16">
                            <div className="bg-cream-50 rounded-lg p-8 shadow-lg border border-sand-200">
                                <h3 className="text-2xl font-bold text-brown-900 mb-4">
                                    承認画面
                                </h3>
                                <p className="text-brown-700 mb-8 leading-relaxed">
                                    Reactのアニメーションライブラリを使用し、承認ボタンを押下した際にアニメーションが発火するようにすることで、ボタンを押下したことを視覚的に伝えることができます。
                                </p>
                                <div className="grid grid-cols-3 gap-4">
                                    <div>
                                        <img
                                            src="/images/projects/ZzzCast/Group 30.png"
                                            alt="承認画面 1"
                                            className="w-full rounded-lg shadow-md"
                                        />
                                    </div>
                                    <div>
                                        <img
                                            src="/images/projects/ZzzCast/Group 31.png"
                                            alt="承認画面 2"
                                            className="w-full rounded-lg shadow-md"
                                        />
                                    </div>
                                    <div>
                                        <img
                                            src="/images/projects/ZzzCast/Group 33.png"
                                            alt="承認画面 3"
                                            className="w-full rounded-lg shadow-md"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Feature 5: Page Layout */}
                        <div className="mb-16">
                            <div className="bg-cream-50 rounded-lg p-8 shadow-lg border border-sand-200">
                                <h3 className="text-2xl font-bold text-brown-900 mb-4">
                                    アイテム一覧
                                </h3>
                                <p className="text-brown-700 mb-8 leading-relaxed">
                                    5つ投稿するごとにランクが1つ上がります。1ランクにつき1アイテム手に入れることができ、ゲーム感覚で投稿を楽しむことができます。全部で150個のアイテムを用意しているので長く楽しむことができます。
                                </p>
                                <h3 className="text-2xl font-bold text-brown-900 mb-4">
                                    プロフィール
                                </h3>
                                <p className="text-brown-700 mb-8 leading-relaxed">
                                    ユーザーのアイコン・名前・自己紹介に加え、フレンドの表示ができるプロフィール画面を設計しました。アイコン画像等は好きな時に変更可能です。
                                </p>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <img
                                            src="/images/projects/ZzzCast/Group 34.png"
                                            alt="アイテム一覧"
                                            className="w-full rounded-lg shadow-md"
                                        />
                                    </div>
                                    <div>
                                        <img
                                            src="/images/projects/ZzzCast/Group 37.png"
                                            alt="プロフィール"
                                            className="w-full rounded-lg shadow-md"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Technologies Section */}
                <section className="py-16 bg-cream-50">
                    <div className="max-w-6xl mx-auto px-6">
                        <h2 className="text-3xl font-bold text-brown-900 mb-8 text-center">
                            使用ツール
                        </h2>
                        <div className="mb-8">
                            <h3 className="text-sm font-semibold text-brown-600 uppercase tracking-widest mb-4 text-center">
                                デザインツール
                            </h3>
                            <div className="flex flex-wrap justify-center gap-4">
                                {["Figma"].map((tool) => (
                                    <span
                                        key={tool}
                                        className="px-6 py-3 bg-sand-200 text-brown-800 text-lg rounded-full font-medium shadow-md"
                                    >
                                        {tool}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="border-t border-sand-300 mb-8" />
                        <div className="mb-8">
                            <h3 className="text-sm font-semibold text-brown-600 uppercase tracking-widest mb-4 text-center">
                                開発ツール
                            </h3>
                            <div className="flex flex-wrap justify-center gap-4">
                                {["React", "TypeScript", "Supabase"].map(
                                    (tool) => (
                                        <span
                                            key={tool}
                                            className="px-6 py-3 bg-sand-200 text-brown-800 text-lg rounded-full font-medium shadow-md"
                                        >
                                            {tool}
                                        </span>
                                    ),
                                )}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Back to Works */}
                <section className="py-16 bg-cream-100">
                    <div className="max-w-6xl mx-auto px-6 text-center">
                        <Link
                            to="/#works"
                            className="inline-flex items-center px-8 py-4 bg-brown-800 hover:bg-brown-900 text-cream-50 rounded-lg transition-colors font-medium text-lg shadow-lg"
                        >
                            <svg
                                className="w-5 h-5 mr-2"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path d="M15 19l-7-7 7-7"></path>
                            </svg>
                            作品一覧に戻る
                        </Link>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default DesignSystemDetail;
