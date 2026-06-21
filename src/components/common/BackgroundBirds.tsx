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

    return (
        <div
            aria-hidden="true"
            className="pointer-events-none"
            style={{
                position: "fixed",
                top: "35%",
                left: "3%",
                zIndex: 2,
                opacity: visible ? 1 : 0,
                transition: "opacity 2s ease",
            }}
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
    );
};

export default BackgroundBirds;
