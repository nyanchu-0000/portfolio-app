import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

const MinutesAppDetail: React.FC = () => {
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
                            議事録作成サイト
                        </h1>
                        <p className="text-xl text-brown-700 leading-relaxed">
                            スピーディーに議事録を作成するためのサポートサイトです。
                            <br />
                            リロードしても削除されず、入力内容が保持されるため、安心して議事録を作成できます。
                        </p>
                    </div>
                </section>

                {/* Mockup Showcase Section */}
                <section className="pt-8 pb-20 bg-cream-100">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="flex justify-center">
                            <div className="flex justify-center max-w-3xl w-full">
                                <img
                                    src="/images/works/minutes-app.png"
                                    alt="企業コーポレートサイト スクリーンショット"
                                    className="w-full object-contain"
                                    onError={(e) => {
                                        const target =
                                            e.target as HTMLImageElement;
                                        target.src =
                                            'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="800" height="500"%3E%3Crect fill="%23d9d3c6" width="800" height="500"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" fill="%239a8d7d" font-family="sans-serif" font-size="20"%3E画像を追加予定%3C/text%3E%3C/svg%3E';
                                    }}
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

                        {/* Feature 2 */}
                        <div className="mb-16">
                            <div className="bg-cream-50 rounded-lg p-8 shadow-lg border border-sand-200">
                                <h3 className="text-2xl font-bold text-brown-900 mb-4">
                                    機能紹介
                                </h3>
                                <p className="text-brown-700 mb-8 leading-relaxed">
                                    主要機能の画面遷移や操作フローを設計・実装。
                                </p>
                                <div className="grid grid-cols-3 gap-4">
                                    <div>
                                        <img
                                            src="/images/projects/minutes-app/screen1.png"
                                            alt="画面 1"
                                            className="w-full rounded-lg shadow-md"
                                            onError={(e) => {
                                                const target =
                                                    e.target as HTMLImageElement;
                                                target.src =
                                                    'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%23d9d3c6" width="400" height="300"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" fill="%239a8d7d" font-family="sans-serif" font-size="16"%3E画像を追加予定%3C/text%3E%3C/svg%3E';
                                            }}
                                        />
                                    </div>
                                    <div>
                                        <img
                                            src="/images/projects/minutes-app/screen2.png"
                                            alt="画面 2"
                                            className="w-full rounded-lg shadow-md"
                                            onError={(e) => {
                                                const target =
                                                    e.target as HTMLImageElement;
                                                target.src =
                                                    'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%23d9d3c6" width="400" height="300"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" fill="%239a8d7d" font-family="sans-serif" font-size="16"%3E画像を追加予定%3C/text%3E%3C/svg%3E';
                                            }}
                                        />
                                    </div>
                                    <div>
                                        <img
                                            src="/images/projects/minutes-app/screen3.png"
                                            alt="画面 3"
                                            className="w-full rounded-lg shadow-md"
                                            onError={(e) => {
                                                const target =
                                                    e.target as HTMLImageElement;
                                                target.src =
                                                    'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%23d9d3c6" width="400" height="300"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" fill="%239a8d7d" font-family="sans-serif" font-size="16"%3E画像を追加予定%3C/text%3E%3C/svg%3E';
                                            }}
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
                                開発ツール
                            </h3>
                            <div className="flex flex-wrap justify-center gap-4">
                                {[
                                    "Vue.js",
                                    "Nuxt.js",
                                    "Contentful",
                                    "SCSS",
                                ].map((tool) => (
                                    <span
                                        key={tool}
                                        className="px-6 py-3 bg-sand-200 text-brown-800 text-lg rounded-full font-medium shadow-md"
                                    >
                                        {tool}
                                    </span>
                                ))}
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

export default MinutesAppDetail;
