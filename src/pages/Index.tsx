import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Journey from "@/components/Journey";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Journey />
        <About />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
