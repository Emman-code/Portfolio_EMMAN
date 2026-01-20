import { useState, useEffect } from 'react';
import PortfolioHero from './components/ui/portfolio-hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { ColorBends } from './components/ui/color-bends';
import { Chatbot } from './components/ui/chatbot';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white relative">
      {/* ColorBends Animated Background */}
      <div className="fixed inset-0 w-full h-full z-0">
        <ColorBends
          rotation={45}
          speed={0.3}
          colors={["#05070c", "#00e5ff", "#7c5cff"]}
          transparent
          autoRotate={0}
          scale={2}
          frequency={1}
          warpStrength={1}
          mouseInfluence={0.5}
          parallax={0.5}
          noise={0.15}
          opacity={0.30}
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <section id="home">
          <PortfolioHero
            firstName="EMMANUEL"
            lastName="JOSHUA"
            tagline="Data Scientist | ML & Time Series Expert"
            profileImage="https://i.postimg.cc/kgZJbKts/IMG-20260107-225418.png"
          />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="experience">
          <Experience />
        </section>

        <section id="education">
          <Education />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="skills">
          <Skills />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </div>

      {/* AI Chatbot */}
      <Chatbot />
    </div>
  );
}
