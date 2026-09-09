import Navbar from "@/components/navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/projects";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
  <Hero />
  <Projects />

  <Skills />

  <Experience />

 <Contact />
</main>
  <Footer />
    </>
  );
}