import About from "@/components/About";
import Contact from "@/components/Contact";
import Experiences from "@/components/Experiences";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";

const Home = () => {
  return (
    <main className="flex flex-col items-center px-4">
      <Hero />
      <About />
      <Projects />
      <Experiences />
      <Contact />
    </main>
  );
};

export default Home;
