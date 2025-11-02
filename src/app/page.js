import Hero from "./sections/Hero";
import About from "./sections/About";
import Contact from "./sections/Contact";
import ProjectsList from "./sections/Projects"


export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <ProjectsList />
      <Contact />
    </div>
  );
}