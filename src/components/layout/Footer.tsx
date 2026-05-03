import React from "react";

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-brown-900 text-cream-100 py-12">
            <div className="container mx-auto px-6 md:px-12 max-w-7xl">
                <div className="mb-8">
                    <h3 className="text-xl font-bold mb-4 text-cream-50">Links</h3>
                    <ul className="space-y-2">
                        <li>
                            <a href="#about" className="text-cream-300 hover:text-cream-50 transition-colors text-sm">About</a>
                        </li>
                        <li>
                            <a href="#skills" className="text-cream-300 hover:text-cream-50 transition-colors text-sm">Skills</a>
                        </li>
                        <li>
                            <a href="#works" className="text-cream-300 hover:text-cream-50 transition-colors text-sm">Works</a>
                        </li>
                        <li>
                            <a href="#qualifications" className="text-cream-300 hover:text-cream-50 transition-colors text-sm">Qualifications</a>
                        </li>
                        <li>
                            <a href="#career" className="text-cream-300 hover:text-cream-50 transition-colors text-sm">Career</a>
                        </li>
                    </ul>
                </div>

                <div className="border-t border-brown-800 pt-8 text-center text-cream-300">
                    <p className="text-sm">&copy; {currentYear} Portfolio. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
