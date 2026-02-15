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

            {/* Bird image on the right */}
            <div className="absolute right-12 top-1/2 transform -translate-y-[30%] hidden lg:block">
                <img 
                    src="/bird.png" 
                    alt="Bird illustration" 
                    className="w-[40rem] h-auto opacity-90 animate-fade-in"
                    style={{ animationDelay: "0.6s" }}
                />
            </div>

            <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
                <div className="max-w-3xl">
                    <div className="mb-8 animate-fade-in">

                        <div className="max-w-xl mb-6 overflow-hidden" style={{ marginLeft: '-1.5rem' }}>
                            <img 
                                src="/yui-gamo-logo.png" 
                                alt="Yui Gamo" 
                                className="block w-full"
                                style={{ 
                                    clipPath: 'inset(0 3% 0 3%)',
                                    transform: 'scale(1.065)'
                                }}
                            />
                        </div>
                    </div>

                    <div
                        className="mb-12 animate-fade-in"
                        style={{ animationDelay: "0.2s" }}
                    >
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

                    <div
                        className="animate-fade-in"
                        style={{ animationDelay: "0.4s" }}
                    >
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
                    <span className="text-xs text-brown-600 tracking-wider">
                        SCROLL
                    </span>
                    <div className="w-px h-12 bg-brown-400"></div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
