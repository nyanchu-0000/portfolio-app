import React from "react";
import Section from "../common/Section";
import { profile } from "../../data/profile";

const AboutMe: React.FC = () => {
    return (
        <Section id="about" title="ABOUT" className="bg-cream-50">
            <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left side - Text content */}
                    <div>
                        <h3 className="text-3xl md:text-4xl font-bold mb-6 text-brown-900 leading-tight">
                            banana
                        </h3>

                        <div className="space-y-4 text-brown-700">
                            <p className="leading-relaxed">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur animi sequi earum assumenda quasi blanditiis exercitationem vitae est perferendis possimus? Molestias fugiat laborum numquam earum, exercitationem veniam obcaecati placeat tenetur.
                            </p>
                        </div>

                        <div className="mt-8">
                            <a
                                href="#contact"
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

                    {/* Right side - Image placeholder */}
                    <div className="relative">
                        <div className="aspect-square bg-sand-200 rounded-lg overflow-hidden shadow-lg">
                            <div className="w-full h-full flex items-center justify-center text-brown-400">
                                {/* Placeholder for image */}
                                <svg
                                    className="w-24 h-24 opacity-30"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="1"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                                    <circle cx="8.5" cy="8.5" r="1.5"></circle>
                                    <polyline points="21 15 16 10 5 21"></polyline>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default AboutMe;
