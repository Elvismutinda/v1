import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0 ">

      {/* Header */}
      <Header />

      {/* Hero */}
      <section id="hero" className="snap-start">
        <Hero />
      </section>

      {/* About Me */}
      <section id="about" className="snap-center">
        <About />
      </section>

      {/* Experience */} 
      <section id="experience" className="snap-center">
        <Experience />
      </section>

      {/* Skills */}
      
      {/* Projects */}
      <section id="projects" className="snap-center">
        <Projects />
      </section>

      {/* Contact Me */}
      <section id="contactMe" className="snap-center">
        <Contact />
      </section>
    </div>
  );
};

export default Home;
