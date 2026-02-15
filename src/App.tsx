import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import AboutMe from "./components/sections/AboutMe";
import Skills from "./components/sections/Skills";
import Works from "./components/sections/Works";
import Qualifications from "./components/sections/Qualifications";
import Career from "./components/sections/Career";

function App() {
    return (
        <div className="min-h-screen bg-cream-100">
            <Header />
            <main>
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

export default App;
