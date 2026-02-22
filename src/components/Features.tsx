import { motion } from 'motion/react';
import { Truck, ShieldCheck, Baby, FileText, BarChart3, Zap } from 'lucide-react';

const features = [
  {
    icon: Truck,
    title: 'Fleet Safety',
    desc: 'Real-time monitoring for logistics fleets. Reduce accident liability and insurance premiums.',
    isRoadmap: false,
  },
  {
    icon: ShieldCheck,
    title: 'Personal Vehicle Assistant',
    desc: 'Clip-on dashcam integration. Alerts the driver AND notifies emergency contacts automatically.',
    isRoadmap: false,
  },
  {
    icon: Baby,
    title: 'Child Safety Mode',
    desc: 'PoseGuard™ detects irregular child movements in rear seats and activates child lock protocols.',
    isRoadmap: false,
  },
  {
    icon: FileText,
    title: 'Insurance Telematics',
    desc: 'Generate a DrowsinessScore™ per trip. Feed into insurance risk models for usage-based premiums.',
    isRoadmap: true,
  },
  {
    icon: BarChart3,
    title: 'Fatigue Analytics',
    desc: 'Post-trip heatmaps showing when and where drowsiness peaked. Route-level safety scoring.',
    isRoadmap: true,
  },
  {
    icon: Zap,
    title: 'Emergency Auto-Response',
    desc: 'Trigger hazard lights, reduce cruise speed via CAN bus, and call emergency services autonomously.',
    isRoadmap: true,
  },
];

export default function Features() {
  return (
    <section id="use-cases" className="py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            One Platform. <br />
            <span className="text-text-muted">Every Road. Every Driver.</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass p-8 rounded-[2rem] glass-hover relative overflow-hidden"
            >
              {feature.isRoadmap && (
                <div className="absolute top-6 right-6 px-3 py-1 rounded-full bg-accent-custom/10 border border-accent-custom/20 text-accent-custom text-[10px] font-bold tracking-wider uppercase">
                  Roadmap
                </div>
              )}
              <div className="w-14 h-14 rounded-2xl bg-primary-custom/10 flex items-center justify-center text-primary-custom mb-8">
                <feature.icon size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
              <p className="text-text-muted leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
