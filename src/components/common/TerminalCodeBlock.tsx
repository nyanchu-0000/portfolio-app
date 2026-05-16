import React, { useEffect, useRef, useState } from "react";

const CODE_STRING = `if (hasCheese === true) { console.log("すぐに開発します"); }`;

const TerminalCodeBlock: React.FC = () => {
    const [displayedText, setDisplayedText] = useState("");
    const [isDone, setIsDone] = useState(false);
    const containerRef = useRef<HTMLHeadingElement>(null);
    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const startedRef = useRef(false);

    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !startedRef.current) {
                    startedRef.current = true;
                    let index = 0;
                    timeoutRef.current = setTimeout(() => {
                        intervalRef.current = setInterval(() => {
                            index++;
                            setDisplayedText(CODE_STRING.slice(0, index));
                            if (index >= CODE_STRING.length) {
                                clearInterval(intervalRef.current!);
                                setIsDone(true);
                            }
                        }, 80);
                    }, 800);
                }
            },
            { threshold: 0 },
        );

        observer.observe(el);

        return () => {
            observer.disconnect();
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, []);

    return (
        <h3
            ref={containerRef}
            className="text-base font-black text-brown-900 leading-tight font-mono whitespace-nowrap"
        >
            {displayedText}
            {!isDone && <span className="animate-blink">▌</span>}
        </h3>
    );
};

export default TerminalCodeBlock;
