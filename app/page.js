import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Articles from "../components/Articles";
import Videos from "../components/Videos";  // Import Videos component
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Footer from "../components/Footer";


export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-[var(--background)] text-[var(--foreground)]">
      {/* Make the overlay more transparent and keep it below content */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-cybergrid bg-grid opacity-20" />
      {/* Ensure content sits above backgrounds */}
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Projects />
          <Articles />
          <Videos />  {/* Videos section added here */}
          <Skills />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}
