// sections/About.js
"use client";
import { useEffect, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function About() {
  const [isDark, setIsDark] = useState(false);
  const { language } = useLanguage();

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

  // RTL styles for Persian
  const isRTL = language === 'fa';
  const sectionStyle = isRTL ? { direction: 'rtl', textAlign: 'right' } : { direction: 'ltr', textAlign: 'left' };

  return (
    <section
      id="about"
      className="px-6 py-20 transition-colors duration-300"
      style={{ 
        backgroundColor: 'var(--bg-primary)',
        ...sectionStyle 
      }}
    >
      <div className="max-w-4xl mx-auto">
        <h2
          className="text-4xl font-bold mb-6 transition-colors duration-300"
          style={{ color: 'var(--text-primary)' }}
        >
          {language === 'en' ? "About Me" : "درباره من"}
        </h2>
        <p
          className="text-lg leading-relaxed transition-colors duration-300"
          style={{ color: 'var(--text-secondary)' }}
        >
          {language === 'en' ? `I'm a frontend developer with a passion for creating clean, modern, and
          responsive web applications. I enjoy working with React, Next.js, and
          Tailwind CSS to bring designs to life.` : `من یک توسعه دهنده فرانت اند هستم که علاقه زیادی به ایجاد برنامه‌های وب تمیز، مدرن و واکنش‌گرا دارم. من از کار با ری‌اکت، نکست‌جی‌اس و تیلویند سی‌اس‌اس برای زنده کردن طرح‌ها لذت می‌برم.`}
        </p>
        
        <h3
          className="text-2xl font-bold mt-6 transition-colors duration-300"
          style={{ color: 'var(--text-primary)' }}
        >
          {language === 'en' ? "Education" : "تحصیلات"}
        </h3>
        <p
          className="text-lg leading-relaxed transition-colors duration-300"
          style={{ color: 'var(--text-secondary)' }}
        >
          {language === 'en' ? "BSc in computer engineering at Islamic Azad University" : "کارشناسی مهندسی کامپیوتر از دانشگاه آزاد اسلامی"}
        </p>
        
        <h3
          className="text-2xl font-bold mt-6 transition-colors duration-300"
          style={{ color: 'var(--text-primary)' }}
        >
          {language === 'en' ? "Track Record" : "سابقه کاری"}
        </h3>
        <p
          className="text-lg leading-relaxed transition-colors duration-300"
          style={{ color: 'var(--text-secondary)' }}
        >
          {language === 'en' ? `Head of Front-End Developers and main Front-End engineer at ` : `سرپرست تیم توسعه فرانت اند و مهندس اصلی فرانت اند در `}
          <a
            className="underline transition-colors duration-300 hover:opacity-80"
            style={{ color: 'var(--accent-color)' }}
            href="https://Ajur.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            {language === 'en' ? "Ajur.app" : "آجر"}
          </a>
          {language === 'en' ? ` since June 2024` : ` از خرداد ۱۴۰۳`}
        </p>
      </div>
    </section>
  );
}