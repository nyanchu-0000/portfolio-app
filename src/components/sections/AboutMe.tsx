import React from "react";
import Section from "../common/Section";
import TerminalCodeBlock from "../common/TerminalCodeBlock";

const AboutMe: React.FC = () => {
    return (
        <Section id="about" title="ABOUT" className="bg-cream-50/80">
            <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left side - Text content */}
                    <div>
                        <div className="mb-6">
                            <TerminalCodeBlock />
                        </div>

                        <div className="space-y-4 text-brown-700">
                            <p className="leading-relaxed">
                                2002年生まれ、神奈川県出身。
                                <br />
                                2024年に女子美術大学を卒業し、現在は東京を拠点に、フロントエンドエンジニアとして主にWebサイトの制作をしています。
                                <br />
                                自主制作では、日常で不便に感じたものなどから着想を経て、アプリケーションを開発しています。
                                <br />
                                イメージをもとに、デザイン〜実装までを一貫して行い独自のアイデアを形にすることで、ユーザーや自身の生活をよりよいものにすることが目標です。
                                <br />
                                ふたつの「想像」「創造」をモットーに、作品を作り続けています。
                            </p>
                        </div>

                        <div className="mt-8">
                            <a
                                href="#works"
                                className="inline-flex items-center gap-2 text-brown-800 font-medium hover:text-brown-900 transition-colors group"
                            >
                                <span>VIEW MORE</span>
                                <svg
                                    className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Right side - Image */}
                    <div className="relative flex justify-center">
                        <img
                            src="/images/about/mouse.png"
                            alt="About me"
                            className="w-11/12 object-cover"
                        />
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default AboutMe;
