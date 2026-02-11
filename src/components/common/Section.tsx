import React from "react";

interface SectionProps {
    id: string;
    title?: string;
    children: React.ReactNode;
    className?: string;
    dark?: boolean;
}

const Section: React.FC<SectionProps> = ({
    id,
    title,
    children,
    className = "",
    dark = false,
}) => {
    return (
        <section
            id={id}
            className={`py-20 md:py-28 ${dark ? "bg-brown-900 text-cream-50" : "bg-cream-50"} ${className}`}
        >
            <div className="container mx-auto px-6 md:px-12 max-w-7xl">
                {title && (
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-brown-900 mb-4 tracking-tight">
                            {title}
                        </h2>
                        <div className="w-16 h-1 bg-brown-800 mx-auto"></div>
                    </div>
                )}
                {children}
            </div>
        </section>
    );
};

export default Section;
