import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Hero from "../components/sections/Hero";
import AboutMe from "../components/sections/AboutMe";
import Skills from "../components/sections/Skills";
import Works from "../components/sections/Works";
import Qualifications from "../components/sections/Qualifications";
import Career from "../components/sections/Career";
import BackgroundBirds from "../components/common/BackgroundBirds";

function Home() {
    const { hash } = useLocation();

    useEffect(() => {
        if (hash) {
            const el = document.querySelector(hash);
            if (el) {
                setTimeout(() => {
                    el.scrollIntoView({ behavior: "smooth" });
                }, 100);
            }
        }
    }, [hash]);

    return (
        <div className="relative min-h-screen bg-cream-100 overflow-x-hidden">
            <BackgroundBirds />
            <Header />
            <main className="relative z-10">
                <Hero />
                <AboutMe />
                <Skills />
                <Works />
                <Qualifications />
                <Career />
            </main>
            <Footer />
        </div>
    );
}

export default Home;
