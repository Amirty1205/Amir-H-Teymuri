// sections/Contact.js
"use client";
import { useEffect, useState } from 'react';

export default function Contact() {
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
      id="contact"
      className="px-6 py-20 transition-colors duration-300"
      style={{ backgroundColor: 'var(--bg-primary)' }}
    >
      <div className="max-w-4xl mx-auto">
        <h2
          className="text-4xl font-bold mb-8 text-left transition-colors duration-300"
          style={{ color: 'var(--text-primary)' }}
        >
          Contact Me
        </h2>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Contact Info */}
          <div className="flex-1 space-y-4">
            <p style={{ color: 'var(--text-secondary)' }}>
              Feel free to reach out via email or connect with me on social media.
            </p>
            <p style={{ color: 'var(--text-secondary)' }}>
              <strong>Email:</strong>{" "}
              <a
                href="mailto:amir.h.teymuri@gmail.com"
                style={{ color: 'var(--accent-color)' }}
                className="hover:opacity-80 transition-opacity"
              >
                amir.h.teymuri@gmail.com
              </a>
            </p>
            <p style={{ color: 'var(--text-secondary)' }}>
              <strong>GitHub:</strong>{" "}
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
              <strong>Telegram:</strong>{" "}
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
              placeholder="Your Name"
              style={{
                backgroundColor: 'var(--bg-primary)',
                color: 'var(--text-primary)',
                borderColor: 'var(--border-color)'
              }}
              className="p-3 border rounded-md focus:outline-none focus:ring-2 transition-colors duration-300"
            />
            <input
              type="email"
              placeholder="Your Email"
              style={{
                backgroundColor: 'var(--bg-primary)',
                color: 'var(--text-primary)',
                borderColor: 'var(--border-color)'
              }}
              className="p-3 border rounded-md focus:outline-none focus:ring-2 transition-colors duration-300"
            />
            <textarea
              placeholder="Your Message"
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
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}