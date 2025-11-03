// sections/Contact.js
"use client";
import { useEffect, useState } from 'react';
import { LanguageProvider, useLanguage } from '@/contexts/LanguageContext';

export default function Contact() {
  const [isDark, setIsDark] = useState(false);
  const { language } = useLanguage();

  // RTL styles for Persian
  const isRTL = language === 'fa';
  const sectionStyle = isRTL ? { direction: 'rtl', textAlign: 'right' } : { direction: 'ltr', textAlign: 'left' };

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
      id="contact"
      className="px-6 py-20 transition-colors duration-300"
      style={{ backgroundColor: 'var(--bg-primary)', ...sectionStyle }}
    >
      <div className="max-w-4xl mx-auto">
        <h2
          className="text-4xl font-bold mb-8 transition-colors duration-300"
          style={{ color: 'var(--text-primary)' }}
        >
          {language === 'en' ? "Contact Me" : "با من تماس بگیرید"}
        </h2>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Contact Info */}
          <div className="flex-1 space-y-4">
            <p style={{ color: 'var(--text-secondary)' }}>
              {language === 'en' ? "Feel free to reach out via email or connect with me on social media." : "لطفا از طریق ایمیل با من تماس بگیرید یا در شبکه های اجتماعی با من ارتباط برقرار کنید."}
            </p>
            <p style={{ color: 'var(--text-secondary)' }}>
              <strong>{language === 'en' ? "Email:" : "ایمیل:"}</strong>{" "}
              <a
                href="mailto:amir.h.teymuri@gmail.com"
                style={{ color: 'var(--accent-color)' }}
                className="hover:opacity-80 transition-opacity"
              >
                amir.h.teymuri@gmail.com
              </a>
            </p>
            <p style={{ color: 'var(--text-secondary)' }}>
              <strong>{language === 'en' ? "GitHub:" : "گیت‌هاب:"}</strong>{" "}
              <a
                href="https://github.com/Amirty1205"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'var(--accent-color)' }}
                className="hover:opacity-80 transition-opacity"
              >
                github.com/Amirty1205
              </a>
            </p>
            <p style={{ color: 'var(--text-secondary)' }}>
              <strong>{language === 'en' ? "Telegram:" : "تلگرام:"}</strong>{" "}
              <a
                href="https://t.me/AmirHTeymuri"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'var(--accent-color)' }}
                className="hover:opacity-80 transition-opacity"
              >
                @AmirHTeymuri
              </a>
            </p>
          </div>

          {/* Contact Form */}
          <form className="flex-1 flex flex-col space-y-4">
            <input
              type="text"
              placeholder={language === 'en' ? "Your Name" : "نام شما"}
              style={{
                backgroundColor: 'var(--bg-primary)',
                color: 'var(--text-primary)',
                borderColor: 'var(--border-color)'
              }}
              className="p-3 border rounded-md focus:outline-none focus:ring-2 transition-colors duration-300"
            />
            <input
              type="email"
              placeholder={language === 'en' ? "Your Email" : "ایمیل شما"}
              style={{
                backgroundColor: 'var(--bg-primary)',
                color: 'var(--text-primary)',
                borderColor: 'var(--border-color)'
              }}
              className="p-3 border rounded-md focus:outline-none focus:ring-2 transition-colors duration-300"
            />
            <textarea
              placeholder={language === 'en' ? "Your Message" : "پیام شما"}
              rows={5}
              style={{
                backgroundColor: 'var(--bg-primary)',
                color: 'var(--text-primary)',
                borderColor: 'var(--border-color)'
              }}
              className="p-3 border rounded-md focus:outline-none focus:ring-2 transition-colors duration-300"
            />
            <button
              type="submit"
              style={{
                backgroundColor: 'var(--accent-color)'
              }}
              className="text-white px-6 py-3 rounded-md hover:opacity-90 transition-opacity duration-300"
            >
              {language === 'en' ? "Send Message" : "ارسال پیام"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}