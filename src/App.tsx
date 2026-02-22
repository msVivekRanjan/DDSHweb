import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Solution from './components/Solution';
import TechStack from './components/TechStack';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import Impact from './components/Impact';
import Research from './components/Research';
import Demo from './components/Demo';
import Team from './components/Team';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen bg-background selection:bg-primary-custom/30">
      {/* Global Noise Overlay */}
      <div className="noise-overlay" />
      
      {/* Navigation */}
      <Navbar />

      <main>
        {/* Hero Section */}
        <Hero />

        {/* Problem Statement */}
        <Problem />

        {/* Proposed Solution */}
        <Solution />

        {/* Tech Stack */}
        <TechStack />

        {/* Implementation / How It Works */}
        <HowItWorks />

        {/* Use Cases / Features */}
        <Features />

        {/* Feasibility & Impact */}
        <Impact />

        {/* Research Foundation */}
        <Research />

        {/* Demo Section */}
        <Demo />

        {/* Team Section */}
        <Team />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
