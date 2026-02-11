import React from "react";
import type { Work } from "../../types/index";

interface WorkCardProps {
    work: Work;
}

const WorkCard: React.FC<WorkCardProps> = ({ work }) => {
    return (
        <div className="group bg-cream-50 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-sand-200">
            <div className="aspect-[4/3] bg-sand-200 relative overflow-hidden">
                <img
                    src={work.imageUrl}
                    alt={work.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src =
                            'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%23d9d3c6" width="400" height="300"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" fill="%239a8d7d" font-family="sans-serif" font-size="16"%3EYour Work%3C/text%3E%3C/svg%3E';
                    }}
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-brown-900/0 group-hover:bg-brown-900/10 transition-colors duration-300"></div>
            </div>
            <div className="p-6">
                <h3 className="text-lg font-bold mb-2 text-brown-900 group-hover:text-brown-800 transition-colors">
                    {work.title}
                </h3>
                <p className="text-brown-600 text-sm mb-4 leading-relaxed line-clamp-3">
                    {work.description}
                </p>

                {work.technologies && work.technologies.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                        {work.technologies.slice(0, 3).map((tech, index) => (
                            <span
                                key={index}
                                className="px-3 py-1 bg-sand-200 text-brown-700 text-xs rounded-full font-medium"
                            >
                                {tech}
                            </span>
                        ))}
                        {work.technologies.length > 3 && (
                            <span className="px-3 py-1 text-brown-600 text-xs">
                                +{work.technologies.length - 3}
                            </span>
                        )}
                    </div>
                )}

                <div className="flex gap-4 text-sm">
                    {work.link && (
                        <a
                            href={work.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-brown-800 hover:text-brown-900 font-medium inline-flex items-center gap-1 group/link"
                        >
                            <span>View</span>
                            <svg
                                className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform"
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
                    )}
                    {work.github && (
                        <a
                            href={work.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-brown-600 hover:text-brown-800 font-medium"
                        >
                            GitHub
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

export default WorkCard;
