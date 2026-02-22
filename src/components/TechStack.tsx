import { motion } from 'motion/react';

const techStack = [
  { name: 'Python 3.10', desc: 'Core runtime' },
  { name: 'TensorFlow 2.13', desc: 'Deep learning framework' },
  { name: 'MobileNet', desc: 'Drowsiness classification' },
  { name: 'HRNet / MediaPipe', desc: 'Whole-body pose estimation' },
  { name: 'OpenCV 4.8', desc: 'Computer vision pipeline' },
  { name: 'Haar Cascades', desc: 'Face & eye region detection' },
  { name: 'scikit-learn', desc: 'Evaluation metrics' },
  { name: 'pygame', desc: 'Real-time audio alarm' },
  { name: 'Firebase', desc: 'Cloud deployment & hosting' },
];

export default function TechStack() {
  return (
    <section id="technology" className="py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Built on Research. <br />
              <span className="text-text-muted">Deployed for Reality.</span>
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass p-6 rounded-2xl border-primary-custom/20"
          >
            <div className="text-xs font-bold tracking-[0.15em] uppercase text-primary-custom mb-2">Research Foundation</div>
            <p className="text-sm text-text-muted max-w-[240px]">
              Grounded in peer-reviewed research — Wei et al., Complex & Intelligent Systems (2025) 11:415
            </p>
            <div className="mt-4 inline-flex px-3 py-1 rounded-full bg-primary-custom/10 text-primary-custom text-[10px] font-bold">
              DOI: 10.1007/s40747-024-01582-w
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {techStack.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="glass p-6 rounded-2xl glass-hover"
            >
              <div className="font-display font-bold text-text-primary mb-1">{tech.name}</div>
              <div className="text-xs text-text-muted">{tech.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
