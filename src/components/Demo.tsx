import React from 'react';
import { motion } from 'motion/react';
import { Terminal } from 'lucide-react';
import { cn } from '../lib/utils';

const terminalLines = [
  'Frame 1247 | Faces: 1 | Eyes: 2',
  'Eye State: CLOSED | Closed Frames: 4/6',
  'Pose: ALERT | Head Drop: NO | Slump: NO',
  'Status: MONITORING...',
  '---',
  'Frame 1253 | Closed Frames: 6/6',
  '⚠ DROWSINESS DETECTED — ALARM TRIGGERED',
  'Pose Check: Head Drop DETECTED',
  '🚨 MULTI-MODAL ALERT ACTIVE',
];

export default function Demo() {
  const [visibleLines, setVisibleLines] = React.useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = React.useState(0);

  React.useEffect(() => {
    if (currentIndex < terminalLines.length) {
      const timer = setTimeout(() => {
        setVisibleLines((prev) => [...prev, terminalLines[currentIndex]]);
        setCurrentIndex((prev) => prev + 1);
      }, 800);
      return () => clearTimeout(timer);
    } else {
      const resetTimer = setTimeout(() => {
        setVisibleLines([]);
        setCurrentIndex(0);
      }, 5000);
      return () => clearTimeout(resetTimer);
    }
  }, [currentIndex]);

  return (
    <section id="demo" className="py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            See It Think. <br />
            <span className="text-primary-custom">See It React.</span>
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Video Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="aspect-video rounded-[2.5rem] overflow-hidden bg-background border border-border-custom relative group"
          >
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <a
                href="https://www.youtube.com/watch?v=SooPxUEUdlQ"
                target="_blank"
                rel="noopener noreferrer"
                className="w-20 h-20 rounded-full bg-primary-custom flex items-center justify-center text-white hover:scale-110 transition-transform cursor-pointer"
              >
                <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-white border-b-[10px] border-b-transparent ml-1" />
              </a>
            </div>
            <img 
              src="https://www.scratchlearn.com/assets/projects/Drowsiness%20detection/Frame%202147223573.webp" 
              alt="Demo Preview" 
              className="w-full h-full object-cover opacity-40 pointer-events-none"
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
              <div>
                <div className="text-xs font-bold tracking-widest uppercase text-primary-custom mb-1">Live Feed</div>
                <div className="text-xl font-bold">Driver Monitoring System</div>
              </div>
              <div className="flex gap-2">
                <div className="w-2 h-2 rounded-full bg-primary-custom pulse-red" />
                <span className="text-[10px] font-bold uppercase tracking-widest">Rec</span>
              </div>
            </div>
          </motion.div>

          {/* Terminal */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#050508] border border-border-custom rounded-[2rem] p-8 font-mono text-sm h-[400px] overflow-hidden relative"
          >
            <div className="flex items-center gap-2 mb-8 border-b border-border-custom pb-4">
              <Terminal size={18} className="text-text-muted" />
              <span className="text-text-muted uppercase tracking-widest text-[10px] font-bold">Detection Engine v2.4.0</span>
            </div>
            <div className="space-y-3">
              {visibleLines.map((line, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={cn(
                    "flex gap-3",
                    line.includes('⚠') || line.includes('🚨') ? "text-primary-custom font-bold" : "text-text-muted"
                  )}
                >
                  <span className="opacity-30 shrink-0">{'>'}</span>
                  <span>{line}</span>
                </motion.div>
              ))}
              <motion.div
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="w-2 h-4 bg-primary-custom inline-block ml-1"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
