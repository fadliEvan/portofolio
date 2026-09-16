import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SpatialFeature from "@/components/SpatialFeature";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Stack from "@/components/Stack";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SpotlightCursor from "@/components/SpotlightCursor";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[var(--bg-canvas)] text-[var(--text-primary)]">
      <SpotlightCursor />
      <Navbar />
      <main className="relative z-10 flex flex-col">
        <Hero />
        <SpatialFeature />
        <Projects />
        <About />
        <Stack />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}