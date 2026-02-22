import { motion } from 'motion/react';
import { Github, Mail, Globe } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-background relative pt-20 pb-10 overflow-hidden">
      {/* Red line at top */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-custom/50 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <span className="font-display text-2xl font-extrabold tracking-tighter text-text-primary">
                DDSH
              </span>
              <div className="w-2 h-2 rounded-full bg-primary-custom pulse-red" />
            </div>
            <p className="text-text-muted max-w-sm mb-8 leading-relaxed">
              Driver Drowsiness Shield — The AI safety layer that keeps drivers alive through real-time eye and posture intelligence.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-text-muted hover:text-primary-custom transition-colors"><Github size={20} /></a>
              <a href="#" className="text-text-muted hover:text-primary-custom transition-colors"><Mail size={20} /></a>
              <a href="#" className="text-text-muted hover:text-primary-custom transition-colors"><Globe size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase tracking-widest text-xs text-text-primary">Platform</h4>
            <ul className="space-y-4 text-sm text-text-muted">
              <li><a href="#features" className="hover:text-text-primary transition-colors">Features</a></li>
              <li><a href="#technology" className="hover:text-text-primary transition-colors">Technology</a></li>
              <li><a href="#demo" className="hover:text-text-primary transition-colors">Live Demo</a></li>
              <li><a href="#impact" className="hover:text-text-primary transition-colors">Market Impact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase tracking-widest text-xs text-text-primary">Resources</h4>
            <ul className="space-y-4 text-sm text-text-muted">
              <li><a href="#" className="hover:text-text-primary transition-colors">Research Papers</a></li>
              <li><a href="#" className="hover:text-text-primary transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-text-primary transition-colors">GitHub Repository</a></li>
              <li><a href="#" className="hover:text-text-primary transition-colors">Contact Support</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border-custom pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-text-muted font-medium">
            Built for <span className="text-text-primary">Impact</span> | ITER, SOA University
          </p>
          <p className="text-xs text-text-muted">
            © 2025 Vivek Ranjan Sahoo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
