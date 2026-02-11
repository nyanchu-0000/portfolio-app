import React from "react";
import { profile } from "../../data/profile";

const Hero: React.FC = () => {
    return (
        <section
            id="hero"
            className="min-h-screen flex items-center justify-center bg-cream-100 relative overflow-hidden"
        >
            {/* Background image placeholder */}
            <div className="absolute inset-0 opacity-30">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cream-100/50 to-cream-100"></div>
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-sand-200/30 to-transparent"></div>
            </div>

            <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
                <div className="max-w-3xl">
                    <div className="mb-8 animate-fade-in">
                        <p className="text-sm md:text-base text-brown-600 mb-4 tracking-wider uppercase font-medium">
                            Portfolio 2026
                        </p>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-brown-900 leading-tight">
                            色を見つけ、
                            <br />
                            色をかがやかせる。
                        </h1>
                    </div>

                    <div className="mb-12 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                        <p className="text-base md:text-lg text-brown-700 leading-relaxed mb-4">
                            色をみつけ、色を育て、色をみつめる。
                        </p>
                        <p className="text-base md:text-lg text-brown-700 leading-relaxed mb-4">
                            色をみつけ、色を育て、色をみつめる。
                        </p>
                        <p className="text-base md:text-lg text-brown-700 leading-relaxed mb-4">
                            色をみつけ、色を育て、色をみつめる。
                        </p>
                        <p className="text-base md:text-lg text-brown-700 leading-relaxed">
                            色をみつけ、色を育て、色をみつめる。
                        </p>
                    </div>

                    <div className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
                        <a
                            href="#works"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-brown-800 text-cream-50 font-medium rounded-full hover:bg-brown-900 transition-all duration-300 shadow-lg hover:shadow-xl"
                        >
                            <span>VIEW MORE</span>
                            <svg
                                className="w-5 h-5"
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
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
                <div className="flex flex-col items-center gap-2">
                    <span className="text-xs text-brown-600 tracking-wider">SCROLL</span>
                    <div className="w-px h-12 bg-brown-400"></div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
