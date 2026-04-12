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

const Works: React.FC = () => {
    return (
        <Section id="works" title="WORKS" className="bg-cream-100">
            <div className="text-center mb-12">
                <p className="text-brown-700 text-lg">制作実績</p>
            </div>

            <SliderRow title="Engineering" works={engineeringWorks} />
            <SliderRow title="Design" works={designWorks} />
        </Section>
    );
};

export default Works;
