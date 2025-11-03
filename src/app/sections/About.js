// sections/About.js
"use client";
import { useEffect, useState } from 'react';

export default function About() {
  const [isDark, setIsDark] = useState(false);

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

  return (
    <section
      id="about"
      className="px-6 py-20 transition-colors duration-300"
      style={{ backgroundColor: 'var(--bg-primary)' }}
    >
      <div className="max-w-4xl mx-auto">
        <h2
          className="text-4xl font-bold mb-6 transition-colors duration-300"
          style={{ color: 'var(--text-primary)' }}
        >
          About Me
        </h2>
        <p
          className="text-lg leading-relaxed transition-colors duration-300"
          style={{ color: 'var(--text-secondary)' }}
        >
          I'm a frontend developer with a passion for creating clean, modern, and
          responsive web applications. I enjoy working with React, Next.js, and
          Tailwind CSS to bring designs to life.
        </p>
        <h3
          className="text-2xl font-bold mt-6 transition-colors duration-300"
          style={{ color: 'var(--text-primary)' }}
        >
          Education
        </h3>
        <p
          className="text-lg leading-relaxed transition-colors duration-300"
          style={{ color: 'var(--text-secondary)' }}
        >
          BSc in computer engineering at Islamic Azad University
        </p>
        <h3
          className="text-2xl font-bold mt-6 transition-colors duration-300"
          style={{ color: 'var(--text-primary)' }}
        >
          Track Record
        </h3>
        <p
          className="text-lg leading-relaxed transition-colors duration-300"
          style={{ color: 'var(--text-secondary)' }}
        >
          Head of Front-End Developers and main Front-End engineer at{" "}
          <a
            className="underline transition-colors duration-300 hover:opacity-80"
            style={{ color: 'var(--accent-color)' }}
            href="https://Ajur.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ajur.app
          </a>{" "}
          since June 2025
        </p>
      </div>
    </section>
  );
}