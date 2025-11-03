// components/Header.js
"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";
import DarkModeToggle from "./DarkModeToggle";
import LanguageSelector from "./LangSelector";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isDark, setIsDark] = useState(false);
  
  const { language } = useLanguage();

  const sections = ["about", "projects", "contact"];


  // ✅ CORRECT - Use console.log for debugging
  useEffect(() => {
    console.log('Language changed to:', language);
  }, [language]);

  useEffect(() => {
    const checkDarkMode = () => {
      setIsDark(document.documentElement.classList.contains('dark'));
    };

    checkDarkMode();
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });
    return () => observer.disconnect();
  }, []);

  const smoothScroll = (e, targetId) => {
    e.preventDefault();
    setMenuOpen(false);
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className="fixed top-0 w-full z-50 backdrop-blur-sm h-16 transition-colors duration-300"
      style={{
        backgroundColor: 'var(--bg-primary)'
      }}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center h-full px-4">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/logo.png"
            alt="Portfolio Logo"
            width={50}
            height={50}
            priority
            className="transition-transform duration-500 hover:scale-105"
          />
        </Link>

        <div className="flex items-center h-full"> {/* Added h-full here */}
          {/* Desktop Navigation */}
          <nav className="hidden md:flex h-full items-center space-x-0">
            <a
              href="#about"
              onClick={(e) => smoothScroll(e, "#about")}
              className="relative h-full flex items-center px-8 font-medium cursor-pointer transition-all duration-300 group"
              style={{
                color: activeSection === "about" ? 'var(--accent-color)' : 'var(--text-primary)',
              }}
            >
              {language == 'en' ? "About" : "درباره"}
              <div
                className="absolute bottom-0 left-0 h-0.5 transition-all duration-300 group-hover:w-full"
                style={{
                  width: activeSection === "about" ? '100%' : '0%',
                  backgroundColor: 'var(--accent-color)'
                }}
              />
            </a>

            <a
              href="#projects"
              onClick={(e) => smoothScroll(e, "#projects")}
              className="relative h-full flex items-center px-8 font-medium cursor-pointer transition-all duration-300 group"
              style={{
                color: activeSection === "projects" ? 'var(--accent-color)' : 'var(--text-primary)',
              }}
            >
              {language === 'en' ? "Projects" : "پروژه ها"}
              <div
                className="absolute bottom-0 left-0 h-0.5 transition-all duration-300 group-hover:w-full"
                style={{
                  width: activeSection === "projects" ? '100%' : '0%',
                  backgroundColor: 'var(--accent-color)'
                }}
              />
            </a>

            <a
              href="#contact"
              onClick={(e) => smoothScroll(e, "#contact")}
              className="relative h-full flex items-center px-8 font-medium cursor-pointer transition-all duration-300 group"
              style={{
                color: activeSection === "contact" ? 'var(--accent-color)' : 'var(--text-primary)',
              }}
            >
              {language === 'en' ? "Contact" : "تماس"}
              <div
                className="absolute bottom-0 left-0 h-0.5 transition-all duration-300 group-hover:w-full"
                style={{
                  width: activeSection === "contact" ? '100%' : '0%',
                  backgroundColor: 'var(--accent-color)'
                }}
              />
            </a>
          </nav>

          {/* Language Selector */}
          <div className="flex items-center h-full"> {/* Added h-full here */}
            <LanguageSelector />
          </div>

          {/* Dark Mode Toggle */}
          <div className="flex items-center h-full"> {/* Added h-full here */}
            <DarkModeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center h-full"> {/* Added h-full here */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 rounded-lg transition-colors duration-500 h-full flex items-center" // Added h-full and flex items-center
              style={{
                color: 'var(--text-primary)',
                backgroundColor: menuOpen ? 'var(--bg-secondary)' : 'transparent'
              }}
              aria-label="Toggle Menu"
            >
              {menuOpen ? <span className="text-xl">✖</span> : <span className="text-xl">☰</span>}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className="md:hidden absolute top-16 left-0 w-full transition-all duration-500 ease-in-out overflow-hidden"
        style={{
          opacity: menuOpen ? 1 : 0,
          visibility: menuOpen ? 'visible' : 'hidden',
          maxHeight: menuOpen ? '192px' : '0px',
          backgroundColor: 'var(--bg-primary)',
          borderTop: '1px solid var(--border-color)'
        }}
      >
        <nav className="flex flex-col items-center w-full shadow-lg">
          {sections.map((section) => (
            <a
              key={section}
              href={`#${section}`}
              onClick={(e) => smoothScroll(e, `#${section}`)}
              className="w-full text-center py-4 font-medium border-b cursor-pointer transition-all duration-500"
              style={{
                color: activeSection === section ? 'white' : 'var(--text-primary)',
                backgroundColor: activeSection === section ? 'var(--accent-color)' : 'transparent',
                borderColor: 'var(--border-color)'
              }}
              onMouseOver={(e) => {
                if (activeSection !== section) {
                  e.target.style.backgroundColor = 'var(--bg-secondary)';
                  e.target.style.color = 'var(--text-primary)';
                }
              }}
              onMouseOut={(e) => {
                if (activeSection !== section) {
                  e.target.style.backgroundColor = 'transparent';
                  e.target.style.color = 'var(--text-primary)';
                }
              }}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}