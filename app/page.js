import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Articles from "../components/Articles";
import Videos from "../components/Videos";  // Import Videos component
import ImagesSection from "../components/Images"; // Added Images component import
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="portfolio-shell min-h-screen relative overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[42rem] hero-wash" />
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Projects />
          <Articles />
          <Videos />  {/* Videos section added here */}
          <ImagesSection /> {/* Images section added here */}
          <Skills />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}
