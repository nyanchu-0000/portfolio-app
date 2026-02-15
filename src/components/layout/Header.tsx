import React, { useState, useEffect } from "react";

const Header: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { href: "#about", label: "About" },
        { href: "#skills", label: "Skills" },
        { href: "#works", label: "Works" },
        { href: "#qualifications", label: "Qualifications" },
        { href: "#career", label: "Career" },
    ];

    const handleNavClick = (
        e: React.MouseEvent<HTMLAnchorElement>,
        href: string,
    ) => {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            setIsMobileMenuOpen(false);
        }
    };

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isScrolled ? "bg-cream-50/95 backdrop-blur-sm shadow-sm py-4" : "bg-transparent py-6"
            }`}
        >
            <div className="container mx-auto px-6 md:px-12 max-w-7xl">
                <nav className="flex items-center justify-between">
                    <a
                        href="#hero"
                        onClick={(e) => handleNavClick(e, "#hero")}
                        className={`text-xl md:text-2xl font-semibold transition-colors ${
                            isScrolled ? "text-brown-900" : "text-brown-800"
                        }`}
                    >
                        Portfolio
                    </a>

                    {/* Desktop Navigation */}
                    <ul className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <a
                                    href={link.href}
                                    onClick={(e) =>
                                        handleNavClick(e, link.href)
                                    }
                                    className={`text-sm font-medium transition-colors hover:text-brown-900 ${
                                        isScrolled
                                            ? "text-brown-700"
                                            : "text-brown-700"
                                    }`}
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className={`md:hidden p-2 ${isScrolled ? "text-brown-900" : "text-brown-800"}`}
                        aria-label="メニュー"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            {isMobileMenuOpen ? (
                                <path d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </nav>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="md:hidden mt-4 py-4 bg-cream-50 rounded-lg shadow-lg border border-sand-200">
                        <ul className="flex flex-col">
                            {navLinks.map((link) => (
                                <li key={link.href}>
                                    <a
                                        href={link.href}
                                        onClick={(e) =>
                                            handleNavClick(e, link.href)
                                        }
                                        className="block px-4 py-3 text-brown-700 hover:bg-sand-100 transition-colors"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
