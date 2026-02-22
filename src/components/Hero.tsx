import { motion } from 'motion/react';
import { Play, ArrowRight } from 'lucide-react';

const stats = [
  { label: 'Detection Accuracy', value: '87%' },
  { label: 'Alert Response', value: '< 2 sec' },
  { label: 'Real-Time Processing', value: '30 FPS' },
  { label: 'Body Keypoints Tracked', value: '133' },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 mesh-gradient opacity-40" />
      <div className="absolute inset-0 grid-overlay opacity-20" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-custom/10 border border-primary-custom/20 text-primary-custom text-[11px] font-bold tracking-[0.15em] uppercase mb-6">
              Next-Gen Driver Safety
            </span>
            <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight leading-[0.9] mb-8">
              The AI Layer That Keeps <br />
              <span className="text-primary-custom">Drivers Alive.</span>
            </h1>
            <p className="text-xl text-text-muted max-w-2xl mb-10 leading-relaxed">
              Real-time drowsiness detection and posture intelligence for modern vehicles — 
              powered by computer vision and adaptive AI.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a
                href="#technology"
                className="px-8 py-4 bg-primary-custom text-white font-bold rounded-full flex items-center gap-2 hover:bg-primary-custom/90 transition-all hover:scale-105 active:scale-95"
              >
                Explore Platform <ArrowRight size={18} />
              </a>
              <a
                href="#demo"
                className="px-8 py-4 bg-surface border border-border-custom text-text-primary font-bold rounded-full flex items-center gap-2 hover:bg-border-custom transition-all hover:scale-105 active:scale-95"
              >
                Watch Demo <Play size={18} fill="currentColor" />
              </a>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-20">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="glass p-6 rounded-2xl"
              >
                <div className="text-3xl font-display font-bold text-text-primary mb-1">
                  {stat.value}
                </div>
                <div className="text-[11px] font-bold tracking-[0.15em] uppercase text-text-muted">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <motion.div
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/4 right-0 w-96 h-96 bg-primary-custom/10 blur-[100px] rounded-full"
      />
    </section>
  );
}
