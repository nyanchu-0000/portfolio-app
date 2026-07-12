import React, { useEffect, useState } from "react";

const BackgroundBirds: React.FC = () => {
    const [aboutSeen, setAboutSeen] = useState(false);
    const [footerVisible, setFooterVisible] = useState(false);

    useEffect(() => {
        const about = document.getElementById("about");
        const footer = document.querySelector("footer");

        const aboutObserver = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setAboutSeen(true);
                } else if (entry.boundingClientRect.top > 0) {
                    // About がビューポートより下にある（未到達 or 上に戻った）
                    setAboutSeen(false);
                }
            },
            { threshold: 0.1 }
        );

        const footerObserver = new IntersectionObserver(
            ([entry]) => {
                setFooterVisible(entry.isIntersecting);
            },
            { threshold: 0.1 }
        );

        if (about) aboutObserver.observe(about);
        if (footer) footerObserver.observe(footer);

        return () => {
            aboutObserver.disconnect();
            footerObserver.disconnect();
        };
    }, []);

    const visible = aboutSeen && !footerVisible;

    const commonStyle: React.CSSProperties = {
        position: "fixed",
        zIndex: 5,
        opacity: visible ? 1 : 0,
        transition: "opacity 2s ease",
    };

    return (
        <>
            {/* 左：スズメ */}
            <div
                aria-hidden="true"
                className="pointer-events-none"
                style={{ ...commonStyle, top: "35%", left: "3%" }}
            >
                <div className="animate-float-mid" style={{ animationDelay: "0.4s" }}>
                    <img
                        src="/images/about/profile/IMG_0080.PNG"
                        alt=""
                        draggable={false}
                        style={{
                            display: "block",
                            width: "340px",
                            transform: "rotate(-4deg)",
                            userSelect: "none",
                        }}
                    />
                </div>
            </div>

            {/* 右：フクロウ */}
            <div
                aria-hidden="true"
                className="pointer-events-none"
                style={{ ...commonStyle, top: "30%", right: "3%" }}
            >
                <div className="animate-float-mid" style={{ animationDelay: "1.2s" }}>
                    <img
                        src="/images/about/profile/IMG_0079.PNG"
                        alt=""
                        draggable={false}
                        style={{
                            display: "block",
                            width: "340px",
                            transform: "rotate(4deg)",
                            userSelect: "none",
                        }}
                    />
                </div>
            </div>
        </>
    );
};

export default BackgroundBirds;
