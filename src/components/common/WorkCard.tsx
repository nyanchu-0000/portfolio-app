import React from "react";
import { Link } from "react-router-dom";
import type { Work } from "../../types/index";

interface WorkCardProps {
    work: Work;
}

const WorkCard: React.FC<WorkCardProps> = ({ work }) => {
    const CardContent = (
        <>
            <div className="aspect-[4/3] bg-sand-200 relative overflow-hidden">
                <img
                    src={work.imageUrl}
                    alt={work.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src =
                            'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%23d9d3c6" width="400" height="300"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" fill="%239a8d7d" font-family="sans-serif" font-size="16"%3EYour Work%3C/text%3E%3C/svg%3E';
                    }}
                />
                <div className="absolute inset-0 bg-brown-900/0 group-hover:bg-brown-900/10 transition-colors duration-300"></div>
            </div>
            <div className="p-6 flex flex-col flex-1">
                <h3 className="text-lg font-bold mb-2 text-brown-900 group-hover:text-brown-800 transition-colors flex flex-wrap items-center gap-2">
                    {work.title}
                    {work.isCollaborative && (
                        <span className="text-xs font-medium px-2 py-0.5 bg-sand-200 text-brown-600 rounded-full">
                            共同開発
                        </span>
                    )}
                </h3>
                <p className="text-brown-600 text-sm mb-4 leading-relaxed flex-1">
                    {work.description}
                </p>

                {work.technologies && work.technologies.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-auto pt-2">
                        {work.technologies.map((tech, index) => (
                            <span
                                key={index}
                                className="px-3 py-1 bg-sand-200 text-brown-700 text-xs rounded-full font-medium"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                )}
            </div>
        </>
    );

    if (work.link) {
        const isInternalLink = work.link.startsWith("/");

        if (isInternalLink) {
            return (
                <Link
                    to={work.link}
                    className="group bg-cream-50 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-sand-200 block cursor-pointer flex flex-col h-full"
                >
                    {CardContent}
                </Link>
            );
        }

        return (
            <a
                href={work.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-cream-50 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-sand-200 block cursor-pointer flex flex-col h-full"
            >
                {CardContent}
            </a>
        );
    }

    return (
        <div className="group bg-cream-50 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-sand-200 flex flex-col h-full">
            {CardContent}
        </div>
    );
};

export default WorkCard;
