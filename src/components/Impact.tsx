import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

export default function Impact() {
  return (
    <section id="impact" className="py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Not a Prototype. <br />
            <span className="text-primary-custom">A Platform Ready to Scale.</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Technical Feasibility */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-10 rounded-[2.5rem]"
          >
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              Technical Feasibility
            </h3>
            <ul className="space-y-6">
              {[
                'Runs on standard CPU (no GPU required)',
                '8GB RAM minimum — works on Raspberry Pi 4',
                'Edge-deployable for offline dashcam integration',
                '30 FPS real-time processing validated',
                'Paper-replicated metrics: 90% accuracy',
                'Modular architecture — add/remove detection layers',
              ].map((item) => (
                <li key={item} className="flex items-start gap-4 text-text-muted">
                  <CheckCircle2 className="text-secondary-custom shrink-0 mt-1" size={20} />
                  <span className="text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Market Opportunity */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            <div className="glass p-10 rounded-[2.5rem] flex-1">
              <h3 className="text-2xl font-bold mb-6">Market Opportunity</h3>
              <div className="space-y-8">
                <div>
                  <div className="text-5xl font-display font-extrabold text-text-primary mb-2">$42.9 Billion</div>
                  <p className="text-text-muted">Global Advanced Driver Assistance Systems market (2024)</p>
                </div>
                <div>
                  <div className="text-5xl font-display font-extrabold text-text-primary mb-2">$5.3B</div>
                  <p className="text-text-muted">Drowsy driving economic loss (India alone, estimated)</p>
                </div>
              </div>
            </div>
            <div className="glass p-10 rounded-[2.5rem] bg-primary-custom/5 border-primary-custom/20">
              <p className="text-lg text-text-primary leading-relaxed italic">
                "With 300M+ registered vehicles in India and mandatory safety regulations incoming under Bharat NCAP, 
                DDSH is positioned at the intersection of regulation and technology."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
