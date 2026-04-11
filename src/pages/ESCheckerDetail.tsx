import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

const ESCheckerDetail: React.FC = () => {
    const handleFullscreen = () => {
        const videoContainer = document.getElementById("video-container");
        if (videoContainer) {
            if (!document.fullscreenElement) {
                videoContainer.requestFullscreen();
            } else {
                document.exitFullscreen();
            }
        }
    };

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

                {/* Video Section */}
                <section className="py-16 bg-cream-50">
                    <div className="max-w-6xl mx-auto px-6">
                        <h2 className="text-3xl font-bold text-brown-900 mb-8 text-center">
                            デモ動画
                        </h2>
                        <div
                            id="video-container"
                            className="relative bg-sand-200 rounded-lg overflow-hidden shadow-xl"
                        >
                            <div className="aspect-video">
                                <video
                                    controls
                                    className="w-full h-full object-cover"
                                    poster="/images/works/es-checker.png"
                                >
                                    <source src="/videos/es-checker-demo.mp4" type="video/mp4" />
                                    お使いのブラウザは動画タグをサポートしていません。
                                </video>
                            </div>
                            <button
                                onClick={handleFullscreen}
                                className="absolute top-4 right-4 bg-brown-800/80 hover:bg-brown-900/90 text-cream-50 p-3 rounded-lg transition-colors"
                                title="全画面表示"
                            >
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"></path>
                                </svg>
                            </button>
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
                                    デザインコンセプト
                                </h3>
                                <p className="text-brown-700 mb-6 leading-relaxed">
                                    就活生が使いやすいよう、シンプルで直感的なUIを心がけました。
                                    落ち着いたカラーパレットで長時間使用しても目が疲れにくいデザインです。
                                </p>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <img
                                        src="/images/projects/es-checker/screenshot1.png"
                                        alt="デザインコンセプト"
                                        className="w-full rounded-lg shadow-md"
                                        onError={(e) => {
                                            const target = e.target as HTMLImageElement;
                                            target.src =
                                                'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="600" height="400"%3E%3Crect fill="%23d9d3c6" width="600" height="400"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" fill="%239a8d7d" font-family="sans-serif" font-size="20"%3E画像を追加予定%3C/text%3E%3C/svg%3E';
                                        }}
                                    />
                                    <img
                                        src="/images/projects/es-checker/screenshot2.png"
                                        alt="UI詳細"
                                        className="w-full rounded-lg shadow-md"
                                        onError={(e) => {
                                            const target = e.target as HTMLImageElement;
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
                                        <p className="text-brown-700 leading-relaxed text-sm">
                                            信頼性と親しみやすさを両立したロゴデザイン。
                                            「ES（エントリーシート）」と「チェック」の要素を組み合わせ、
                                            就活生にとって頼れる存在であることを表現しました。
                                            ブルーを基調とした配色で、清潔感と安心感を演出しています。
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Feature 3: Development Process */}
                        <div className="mb-16">
                            <div className="bg-cream-50 rounded-lg p-8 shadow-lg border border-sand-200">
                                <h3 className="text-2xl font-bold text-brown-900 mb-4">
                                    技術的な工夫
                                </h3>
                                <p className="text-brown-700 mb-6 leading-relaxed">
                                    高性能なAI APIを活用し、リアルタイムでの文章添削を実現。
                                    レスポンシブデザインで、スマートフォンからでも快適に利用できます。
                                </p>
                                <div className="grid md:grid-cols-3 gap-6">
                                    <img
                                        src="/images/projects/es-checker/process1.png"
                                        alt="制作過程1"
                                        className="w-full rounded-lg shadow-md"
                                        onError={(e) => {
                                            const target = e.target as HTMLImageElement;
                                            target.src =
                                                'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%23d9d3c6" width="400" height="300"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" fill="%239a8d7d" font-family="sans-serif" font-size="16"%3E画像を追加予定%3C/text%3E%3C/svg%3E';
                                        }}
                                    />
                                    <img
                                        src="/images/projects/es-checker/process2.png"
                                        alt="制作過程2"
                                        className="w-full rounded-lg shadow-md"
                                        onError={(e) => {
                                            const target = e.target as HTMLImageElement;
                                            target.src =
                                                'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%23d9d3c6" width="400" height="300"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" fill="%239a8d7d" font-family="sans-serif" font-size="16"%3E画像を追加予定%3C/text%3E%3C/svg%3E';
                                        }}
                                    />
                                    <img
                                        src="/images/projects/es-checker/process3.png"
                                        alt="制作過程3"
                                        className="w-full rounded-lg shadow-md"
                                        onError={(e) => {
                                            const target = e.target as HTMLImageElement;
                                            target.src =
                                                'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%23d9d3c6" width="400" height="300"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" fill="%239a8d7d" font-family="sans-serif" font-size="16"%3E画像を追加予定%3C/text%3E%3C/svg%3E';
                                        }}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Feature 4: User Feedback */}
                        <div className="mb-16">
                            <div className="bg-cream-50 rounded-lg p-8 shadow-lg border border-sand-200">
                                <h3 className="text-2xl font-bold text-brown-900 mb-4">
                                    ユーザー体験の最適化
                                </h3>
                                <p className="text-brown-700 mb-6 leading-relaxed">
                                    複数の就活生にテストしてもらい、フィードバックを基に改善を重ねました。
                                    特に文字数調整機能は高く評価されています。
                                </p>
                                <img
                                    src="/images/projects/es-checker/feedback.png"
                                    alt="ユーザーフィードバック"
                                    className="w-full rounded-lg shadow-md"
                                    onError={(e) => {
                                        const target = e.target as HTMLImageElement;
                                        target.src =
                                            'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="800" height="400"%3E%3Crect fill="%23d9d3c6" width="800" height="400"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" fill="%239a8d7d" font-family="sans-serif" font-size="20"%3E画像を追加予定%3C/text%3E%3C/svg%3E';
                                    }}
                                />
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
                        <div className="flex flex-wrap justify-center gap-4">
                            {["Next.js", "TypeScript", "Tailwind CSS", "OpenAI API", "Vercel"].map(
                                (tech) => (
                                    <span
                                        key={tech}
                                        className="px-6 py-3 bg-sand-200 text-brown-800 text-lg rounded-full font-medium shadow-md"
                                    >
                                        {tech}
                                    </span>
                                )
                            )}
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
