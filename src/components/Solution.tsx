import { motion } from 'motion/react';
import { Eye, User, Plus } from 'lucide-react';

export default function Solution() {
  return (
    <section className="py-32 bg-surface relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Two AI Layers. One Mission. <br />
            <span className="text-primary-custom">Zero Compromise.</span>
          </motion.h2>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-8 relative">
          {/* Layer 1 */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 glass p-10 rounded-[2rem] relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <Eye size={120} />
            </div>
            <div className="w-16 h-16 rounded-2xl bg-primary-custom/10 flex items-center justify-center text-primary-custom mb-8">
              <Eye size={32} />
            </div>
            <h3 className="text-3xl font-bold mb-6">DrowsAI™ Eye Intelligence</h3>
            <ul className="space-y-4 text-text-muted">
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary-custom" />
                MobileNet transfer learning
              </li>
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary-custom" />
                Haar Cascade face + eye detection
              </li>
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary-custom" />
                87.01% accuracy, 79.2% precision
              </li>
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary-custom" />
                Alarm triggers at 6 consecutive frames (~2 sec)
              </li>
            </ul>
          </motion.div>

          {/* Plus Connector */}
          <div className="z-10 bg-background p-4 rounded-full border border-border-custom text-primary-custom">
            <Plus size={32} />
          </div>

          {/* Layer 2 */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 glass p-10 rounded-[2rem] relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <User size={120} />
            </div>
            <div className="w-16 h-16 rounded-2xl bg-secondary-custom/10 flex items-center justify-center text-secondary-custom mb-8">
              <User size={32} />
            </div>
            <h3 className="text-3xl font-bold mb-6">PoseGuard™ Body Intelligence</h3>
            <ul className="space-y-4 text-text-muted">
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-secondary-custom" />
                Whole-body 133-keypoint estimation
              </li>
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-secondary-custom" />
                Adaptive Gaussian Factor for dense regions
              </li>
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-secondary-custom" />
                Anatomical reference point constraints
              </li>
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-secondary-custom" />
                Real-time posture slump detection
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-xl font-display font-medium text-text-primary">
            Combined Signal = <span className="text-primary-custom">Higher Confidence.</span> Fewer False Alerts.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
