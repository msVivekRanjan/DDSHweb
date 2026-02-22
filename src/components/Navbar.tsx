import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { cn } from '../lib/utils';

const navLinks = [
  { name: 'Features', href: '#features' },
  { name: 'Technology', href: '#technology' },
  { name: 'Use Cases', href: '#use-cases' },
  { name: 'Impact', href: '#impact' },
  { name: 'Team', href: '#team' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b',
        scrolled
          ? 'bg-background/80 backdrop-blur-md border-border-custom py-4'
          : 'bg-transparent border-transparent py-6'
      )}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <span className="font-display text-2xl font-extrabold tracking-tighter text-text-primary">
            DDSH
          </span>
          <div className="w-2 h-2 rounded-full bg-primary-custom pulse-red" />
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-text-muted hover:text-text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#demo"
            className="px-5 py-2.5 bg-primary-custom text-white text-sm font-bold rounded-full hover:bg-primary-custom/90 transition-all hover:scale-105 active:scale-95"
          >
            View Demo
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-text-primary"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-surface border-b border-border-custom p-6 md:hidden flex flex-col gap-4"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium text-text-muted hover:text-text-primary"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#demo"
              onClick={() => setIsOpen(false)}
              className="w-full py-3 bg-primary-custom text-white text-center font-bold rounded-xl"
            >
              View Demo
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
