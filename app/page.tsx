import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";

const Home = () => {
  return (
    <main className="flex flex-col items-center px-4">
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Contact />
    </main>
  );
};

export default Home;
