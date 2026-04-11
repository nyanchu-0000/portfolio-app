import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

const ESCheckerDetail: React.FC = () => {
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
                            就活ESチェッカー
                        </h1>
                        <p className="text-xl text-brown-700 leading-relaxed">
                            作成した文章を入力するだけで高性能AIが添削＆最適化。
                            <br />
                            文字数調整も可能で、短時間で就活を有利に進められます。
                        </p>
                    </div>
                </section>

                {/* Mockup Showcase Section */}
                <section className="pt-8 pb-20 bg-cream-100">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
                            <div className="flex justify-center">
                                <img
                                    src="/images/projects/es-checker/Group 22.png"
                                    alt="就活ESチェッカー デスクトップ画面"
                                    className="w-full max-w-xl"
                                />
                            </div>
                            <div className="flex justify-center">
                                <img
                                    src="/images/projects/es-checker/Group 23.png"
                                    alt="就活ESチェッカー ラップトップ画面"
                                    className="w-full max-w-xl"
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

                        {/* Feature 1: Design Comp */}
                        <div className="mb-16">
                            <div className="bg-cream-50 rounded-lg p-8 shadow-lg border border-sand-200">
                                <h3 className="text-2xl font-bold text-brown-900 mb-4">
                                    デザインカンプ
                                </h3>
                                <p className="text-brown-700 mb-2 leading-relaxed">
                                    全ページのデザイン案をFigmaで作成。
                                </p>
                                <h4 className="text-lg font-bold text-brown-900 mb-2">
                                    デザインコンセプト
                                </h4>
                                <p className="text-brown-700 mb-6 leading-relaxed">
                                    就活生が使いやすいよう、シンプルで直感的なUIを心がけました。
                                    落ち着いたカラーパレットで長時間使用しても目が疲れにくいデザインです。
                                </p>
                                <div className="flex justify-center">
                                    <img
                                        src="/images/projects/es-checker/screenshot1.png"
                                        alt="デザインカンプ"
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

                        {/* Feature 2: Logo */}
                        <div className="mb-16">
                            <div className="bg-cream-50 rounded-lg p-6 shadow-lg border border-sand-200">
                                <h3 className="text-2xl font-bold text-brown-900 mb-4">
                                    ロゴデザイン
                                </h3>
                                <div className="grid md:grid-cols-2 gap-6 items-center">
                                    <div className="flex justify-center items-center bg-white rounded-lg p-3">
                                        <img
                                            src="/images/projects/es-checker/logo.png"
                                            alt="就活ESチェッカー ロゴ"
                                            className="w-3/4 h-auto"
                                        />
                                    </div>
                                    <div>
                                        <p className="text-brown-600 text-base mb-3">
                                            使用ツール：Illustrator
                                        </p>
                                        <p className="text-brown-700 leading-relaxed text-sm">
                                            信頼性と親しみやすさを両立したロゴデザイン。
                                            「ES（エントリーシート）」と「チェック」の要素を組み合わせ、
                                            就活生にとって頼れる存在であることを表現しました。
                                            ブルーを基調とした配色で、清潔感と安心感を演出しています。
                                            チェックの先端を矢印にすることで、より良いものに向上するという意味を持たせています。
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Feature 3: Development Process */}
                        <div className="mb-16">
                            <div className="bg-cream-50 rounded-lg p-8 shadow-lg border border-sand-200">
                                <h3 className="text-2xl font-bold text-brown-900 mb-4">
                                    自己PR添削
                                </h3>
                                <p className="text-brown-700 mb-8 leading-relaxed">
                                    現在の職業・学習状況や希望する雇用形態、文字数といった条件を
                                    <strong className="text-brown-900">
                                        ボタンひとつで簡単に選択
                                    </strong>
                                    できるUIを実装。
                                    あとは作成済みの自己PR文章を貼り付けるだけで、AIが状況に合わせた添削・最適化を自動で行います。
                                    入力の手間を最小限に抑えながら、就活生一人ひとりに寄り添ったフィードバックを届けられる仕組みを意識して設計しました。
                                </p>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <p className="text-sm font-medium text-brown-600 mb-2 text-center">
                                            入力画面 — 条件選択 &amp; 文章入力
                                        </p>
                                        <img
                                            src="/images/projects/es-checker/screenshot-input.png"
                                            alt="入力画面：条件選択と文章入力"
                                            className="w-full rounded-lg shadow-md"
                                        />
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-brown-600 mb-2 text-center">
                                            添削結果画面 — コメント &amp;
                                            改善ポイント
                                        </p>
                                        <img
                                            src="/images/projects/es-checker/screenshot-result.png"
                                            alt="添削結果画面：コメントと改善ポイント"
                                            className="w-full rounded-lg shadow-md"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Feature 4: User Feedback */}
                        <div className="mb-16">
                            <div className="bg-cream-50 rounded-lg p-8 shadow-lg border border-sand-200">
                                <h3 className="text-2xl font-bold text-brown-900 mb-4">
                                    自己PR採点
                                </h3>
                                <p className="text-brown-700 mb-8 leading-relaxed">
                                    作成した文章を貼り付けるだけで、AIが自動で採点。
                                    「具体性」「一貫性」「差別化」「熱意・モチベーション」「成果・影響力」の
                                    <strong className="text-brown-900">
                                        5つの評価軸
                                    </strong>
                                    をレーダーチャートでグラフ化し、
                                    それぞれの項目について具体的なフィードバックをわかりやすく返してくれます。
                                    自分の文章のどこが強く、どこを伸ばすべきかが一目で把握できる体験を目指しました。
                                </p>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <p className="text-sm font-medium text-brown-600 mb-2 text-center">
                                            採点画面 — 文章入力 &amp; 採点ボタン
                                        </p>
                                        <img
                                            src="/images/projects/es-checker/screenshot-score-input.png"
                                            alt="採点画面：文章入力と採点ボタン"
                                            className="w-full rounded-lg shadow-md"
                                        />
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-brown-600 mb-2 text-center">
                                            採点結果画面 — レーダーチャート
                                            &amp; 項目別FB
                                        </p>
                                        <img
                                            src="/images/projects/es-checker/screenshot-score-result.png"
                                            alt="採点結果画面：レーダーチャートと項目別フィードバック"
                                            className="w-full rounded-lg shadow-md"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Feature 5: PR Creation */}
                        <div className="mb-16">
                            <div className="bg-cream-50 rounded-lg p-8 shadow-lg border border-sand-200">
                                <h3 className="text-2xl font-bold text-brown-900 mb-4">
                                    自己PR作成
                                </h3>
                                <p className="text-brown-700 mb-8 leading-relaxed">
                                    志望する業界・職種やアピールしたい強み・特技を入力すると、
                                    その内容をもとに
                                    <strong className="text-brown-900">
                                        AIが自己PRを自動で作成
                                    </strong>
                                    します。
                                    文字数はボタンからかんたんに選択でき、選んだ文字数にぴったり合わせた
                                    自己PRを即座に生成。ゼロから文章を考える手間を省き、
                                    あとは内容を確認・調整するだけで質の高い自己PRが完成します。
                                </p>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <p className="text-sm font-medium text-brown-600 mb-2 text-center">
                                            作成画面 — 業界・強み入力 &amp;
                                            文字数選択
                                        </p>
                                        <img
                                            src="/images/projects/es-checker/screenshot-create-input.png"
                                            alt="作成画面：業界・強み入力と文字数選択"
                                            className="w-full rounded-lg shadow-md"
                                        />
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-brown-600 mb-2 text-center">
                                            作成結果画面 — AI生成テキスト
                                        </p>
                                        <img
                                            src="/images/projects/es-checker/screenshot-create-result.png"
                                            alt="作成結果画面：AI生成テキスト"
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
                            使用技術
                        </h2>
                        <div className="mb-8">
                            <h3 className="text-sm font-semibold text-brown-600 uppercase tracking-widest mb-4 text-center">
                                デザインツール
                            </h3>
                            <div className="flex flex-wrap justify-center gap-4 mb-8">
                                {["Illustrator", "Figma"].map((tool) => (
                                    <span
                                        key={tool}
                                        className="px-6 py-3 bg-sand-200 text-brown-800 text-lg rounded-full font-medium shadow-md"
                                    >
                                        {tool}
                                    </span>
                                ))}
                            </div>
                            <div className="border-t border-sand-300 mb-8" />
                            <div className="flex flex-wrap justify-center gap-4">
                                {[
                                    "Next.js",
                                    "TypeScript",
                                    "Tailwind CSS",
                                    "OpenAI API",
                                    "Vercel",
                                ].map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-6 py-3 bg-sand-200 text-brown-800 text-lg rounded-full font-medium shadow-md"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="flex justify-center mt-8">
                            <div className="inline-flex flex-col items-center gap-1 text-sm text-brown-600">
                                <span className="font-semibold text-brown-800">共同開発</span>
                                <div className="flex gap-6">
                                    <span>Des：自身が担当</span>
                                    <span>Eng：1名</span>
                                </div>
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

export default ESCheckerDetail;
