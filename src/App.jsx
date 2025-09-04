// App.jsx
// This file composes all sections and sets up the global layout of your portfolio.

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      {/* Navbar always stays on top */}
      <Navbar />

      {/* Main website content */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      {/* Footer section */}
      <Footer />
    </>
  );
}
