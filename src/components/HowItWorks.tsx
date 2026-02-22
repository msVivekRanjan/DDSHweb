import { motion } from 'motion/react';
import { Camera, Scan, Eye, UserCheck, Bell, ArrowRight } from 'lucide-react';

const steps = [
  {
    icon: Camera,
    title: 'Camera Capture',
    desc: '30 FPS webcam / dashcam feed processing.',
  },
  {
    icon: Scan,
    title: 'Face Detection',
    desc: 'Haar Cascade locates driver face in real-time.',
  },
  {
    icon: Eye,
    title: 'Eye State',
    desc: 'MobileNet scores open/closed states per frame.',
  },
  {
    icon: UserCheck,
    title: 'Pose Analysis',
    desc: '133 keypoints extracted, posture scored.',
  },
  {
    icon: Bell,
    title: 'Alert Decision',
    desc: 'Multi-modal fusion triggers instant alarm.',
  },
];

export default function HowItWorks() {
  return (
    <section className="py-32 bg-surface overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            From Pixel to Protection <br />
            <span className="text-text-muted text-4xl md:text-5xl">in Under 2 Seconds</span>
          </motion.h2>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-px bg-gradient-to-right from-transparent via-border-custom to-transparent -translate-y-1/2" />

          <div className="grid lg:grid-cols-5 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-20 h-20 rounded-full bg-background border border-border-custom flex items-center justify-center text-primary-custom mb-8 group-hover:border-primary-custom transition-colors duration-500 relative">
                  <step.icon size={32} />
                  {index < steps.length - 1 && (
                    <div className="lg:hidden absolute -bottom-8 left-1/2 -translate-x-1/2 text-border-custom">
                      <ArrowRight size={20} className="rotate-90" />
                    </div>
                  )}
                </div>
                <div className="text-xs font-bold tracking-[0.15em] uppercase text-primary-custom mb-3">Step 0{index + 1}</div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
