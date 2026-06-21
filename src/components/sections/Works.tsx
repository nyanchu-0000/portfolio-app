import React, { useRef, useState, useEffect } from "react";
import Section from "../common/Section";
import WorkCard from "../common/WorkCard";
import { engineeringWorks, designWorks } from "../../data/works";

interface SliderRowProps {
    title: string;
    works: typeof engineeringWorks;
}

const SliderRow: React.FC<SliderRowProps> = ({ title, works }) => {
    const trackRef = useRef<HTMLDivElement>(null);
    const [current, setCurrent] = useState(0);
    const [cardWidth, setCardWidth] = useState(0);
    const total = works.length;

    useEffect(() => {
        const updateWidth = () => {
            if (trackRef.current) {
                const card = trackRef.current.querySelector<HTMLElement>(".work-card-item");
                if (card) setCardWidth(card.offsetWidth + 32);
            }
        };
        updateWidth();
        window.addEventListener("resize", updateWidth);
        return () => window.removeEventListener("resize", updateWidth);
    }, [works]);

    const goTo = (index: number) => {
        const clamped = Math.max(0, Math.min(index, total - 1));
        setCurrent(clamped);
        if (trackRef.current && cardWidth > 0) {
            trackRef.current.scrollTo({ left: clamped * cardWidth, behavior: "smooth" });
        }
    };

    const handleScroll = () => {
        if (trackRef.current && cardWidth > 0) {
            const index = Math.round(trackRef.current.scrollLeft / cardWidth);
            setCurrent(index);
        }
    };

    return (
        <div className="mb-16">
            <h3 className="text-xl font-bold text-brown-900 mb-6 px-2">{title}</h3>

            <div
                ref={trackRef}
                onScroll={handleScroll}
                className="flex gap-8 overflow-x-auto pb-4 scroll-smooth snap-x snap-mandatory scrollbar-hide"
                style={{ scrollbarWidth: "none" }}
            >
                {works.map((work) => (
                    <div
                        key={work.id}
                        className="work-card-item flex-shrink-0 w-72 md:w-80 snap-start h-[480px] flex flex-col"
                    >
                        <WorkCard work={work} />
                    </div>
                ))}
            </div>

            {/* Dot indicators */}
            <div className="flex justify-center gap-2 mt-4">
                {works.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => goTo(i)}
                        className={`rounded-full transition-all duration-300 ${
                            i === current
                                ? "w-6 h-2 bg-brown-800"
                                : "w-2 h-2 bg-sand-300 hover:bg-sand-400"
                        }`}
                        aria-label={`${i + 1}件目に移動`}
                    />
                ))}
            </div>
        </div>
    );
};

const ComingSoonCard: React.FC = () => (
    <div className="flex-shrink-0 w-72 md:w-80 h-[480px] rounded-lg border-2 border-dashed border-sand-300 bg-cream-50/50 flex flex-col items-center justify-center gap-3 opacity-50">
        <div className="w-10 h-10 rounded-full border-2 border-sand-400 flex items-center justify-center">
            <svg className="w-5 h-5 text-sand-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2m6-2a10 10 0 11-20 0 10 10 0 0120 0z" />
            </svg>
        </div>
        <p className="text-sm font-medium text-brown-500 tracking-wide">準備中</p>
    </div>
);

const DesignRow: React.FC<{ title: string; works: typeof designWorks }> = ({ title, works }) => {
    if (works.length === 1) {
        return (
            <div className="mb-16">
                <h3 className="text-xl font-bold text-brown-900 mb-6 px-2">{title}</h3>

                <div className="flex items-start gap-8 overflow-x-auto pb-4" style={{ scrollbarWidth: "none" }}>
                    <div className="flex-shrink-0 w-72 md:w-80 h-[480px] flex flex-col">
                        <WorkCard work={works[0]} />
                    </div>
                    <ComingSoonCard />
                    <ComingSoonCard />
                </div>

                <div className="flex flex-col items-center mt-6 gap-1">
                    <p className="text-xs text-brown-400 tracking-wider">順次更新予定</p>
                </div>
            </div>
        );
    }

    return <SliderRow title={title} works={works} />;
};

const Works: React.FC = () => {
    return (
        <Section id="works" title="WORKS" className="bg-cream-100/80">
            <div className="text-center mb-12">
                <p className="text-brown-700 text-lg">制作実績</p>
            </div>

            <SliderRow title="Engineering" works={engineeringWorks} />
            <DesignRow title="Design" works={designWorks} />
        </Section>
    );
};

export default Works;
