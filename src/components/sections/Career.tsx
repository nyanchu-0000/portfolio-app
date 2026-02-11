import React from "react";
import Section from "../common/Section";
import { careerItems } from "../../data/career";

const Career: React.FC = () => {
    return (
        <Section id="career" title="CAREER" className="bg-cream-50">
            <div className="max-w-4xl mx-auto">
                <div className="relative">
                    {/* Timeline line */}
                    <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-brown-400 transform md:-translate-x-1/2"></div>

                    {/* Career items */}
                    <div className="space-y-12">
                        {careerItems.map((item, index) => (
                            <div
                                key={item.id}
                                className={`relative flex ${
                                    index % 2 === 0
                                        ? "md:flex-row"
                                        : "md:flex-row-reverse"
                                } flex-col md:items-center`}
                            >
                                {/* Timeline dot */}
                                <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-brown-700 rounded-full transform md:-translate-x-1/2 border-4 border-cream-50 shadow"></div>

                                {/* Content */}
                                <div
                                    className={`w-full md:w-5/12 ml-8 md:ml-0 ${
                                        index % 2 === 0
                                            ? "md:pr-12 md:text-right"
                                            : "md:pl-12"
                                    }`}
                                >
                                    <div className="bg-cream-50 border border-sand-200 rounded-lg p-6 hover:shadow-lg transition-all">
                                        <div className="text-sm text-brown-700 font-semibold mb-2">
                                            {item.period}
                                        </div>
                                        {item.company && (
                                            <h3 className="text-xl font-bold mb-1 text-brown-900">
                                                {item.company}
                                            </h3>
                                        )}
                                        <h4 className="text-base font-semibold text-brown-700 mb-3">
                                            {item.position}
                                        </h4>
                                        <p className="text-brown-600 leading-relaxed text-sm">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Career;
