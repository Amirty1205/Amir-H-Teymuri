// app/page.js
import Hero from "./sections/Hero";
import About from "./sections/About";
import Contact from "./sections/Contact";
import ProjectsList from "./sections/Projects"

export default function Home() {
  return (
    <div style={{ backgroundColor: 'var(--bg-primary)' }} className="min-h-screen transition-colors duration-300">
      <Hero />
      <About />
      <ProjectsList />
      <Contact />
    </div>
  );
}