// src/components/sections/About.js
export default function About() {
  return (
    <section id="about" className="px-6 py-20">
      <div className="max-w-4xl mx-auto"> {/* Add this wrapper */}
        <h2 className="text-4xl font-bold mb-6">About Me</h2>
        <p className="text-lg text-gray-700 dark:text-gray-600 leading-relaxed">
          I'm a frontend developer with a passion for creating clean, modern, and
          responsive web applications. I enjoy working with React, Next.js, and
          Tailwind CSS to bring designs to life.
        </p>
      </div>
    </section>
  );
}