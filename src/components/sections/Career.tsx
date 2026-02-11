import React from "react";
import Section from "../common/Section";
import { careerItems } from "../../data/career";

const Career: React.FC = () => {
    return (
        <Section id="career" title="Career" className="bg-gray-50">
            <div className="max-w-4xl mx-auto">
                <div className="relative">
                    {/* Timeline line */}
                    <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-blue-600 transform md:-translate-x-1/2"></div>

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
                                <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-blue-600 rounded-full transform md:-translate-x-1/2 border-4 border-white shadow"></div>

                                {/* Content */}
                                <div
                                    className={`w-full md:w-5/12 ml-8 md:ml-0 ${
                                        index % 2 === 0
                                            ? "md:pr-12 md:text-right"
                                            : "md:pl-12"
                                    }`}
                                >
                                    <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                                        <div className="text-sm text-blue-600 font-semibold mb-2">
                                            {item.period}
                                        </div>
                                        {item.company && (
                                            <h3 className="text-xl font-bold mb-1">
                                                {item.company}
                                            </h3>
                                        )}
                                        <h4 className="text-lg font-semibold text-gray-700 mb-3">
                                            {item.position}
                                        </h4>
                                        <p className="text-gray-600 leading-relaxed">
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
