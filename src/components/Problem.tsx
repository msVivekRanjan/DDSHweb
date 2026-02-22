import { motion } from 'motion/react';

const problemStats = [
  { value: '38%', label: 'Crashes involving drowsy driving (NHTSA)' },
  { value: '71%', label: 'Drivers admit to drowsy driving' },
  { value: '$109B', label: 'Annual economic cost of drowsy driving (US)' },
];

export default function Problem() {
  return (
    <section className="py-32 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-8">
            1.35 Million Lives Lost Every Year. <br />
            <span className="text-text-muted">Most Were Preventable.</span>
          </h2>
          <div className="pl-6 border-l-2 border-primary-custom">
            <p className="text-xl text-text-muted leading-relaxed">
              Traditional safety systems react after impact. DDSH intervenes before danger begins — 
              in real time, every second, on every journey.
            </p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12">
          {problemStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group"
            >
              <div className="text-6xl md:text-8xl font-display font-extrabold text-primary-custom mb-4 group-hover:scale-110 transition-transform origin-left duration-500">
                {stat.value}
              </div>
              <p className="text-lg text-text-muted font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
