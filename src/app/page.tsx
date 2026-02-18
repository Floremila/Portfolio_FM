import {
  contactLinks,
  hero,
  navItems,
  projects,
  skillGroups,
} from "@/data/portfolio";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";

export default function Home() {
  return (
    <div className="min-h-dvh">
      <Header navItems={navItems} />
      <main id="top" className="mx-auto max-w-6xl px-6 pb-20 pt-12">
        <Hero hero={hero} />
        <Projects projects={projects} />
        <Skills skillGroups={skillGroups} />
        <About />
        <Contact contactLinks={contactLinks} />
      </main>
      <Footer />
    </div>
  );
}
