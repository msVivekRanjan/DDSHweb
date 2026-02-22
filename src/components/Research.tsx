import { motion } from 'motion/react';
import { ExternalLink, Quote } from 'lucide-react';

const papers = [
  {
    title: 'DDSH: Driver Drowsiness Shield Platform',
    authors: 'Bhanja et al.',
    journal: 'ROBOMECH 2025',
    metric: '87% Accuracy',
    doi: '10.1186/s40648-025-00307-4',
    link: 'https://link.springer.com/content/pdf/10.1186/s40648-025-00307-4.pdf',
  },
  {
    title: 'Whole-body Pose Estimation via Adaptive Gaussian Factor',
    authors: 'Fan Wei et al.',
    journal: 'Complex & Intelligent Systems (2025)',
    metric: '133 Keypoints',
    doi: '10.1007/s40747-025-02054-w',
    link: 'https://link.springer.com/content/pdf/10.1007/s40747-025-02054-w.pdf',
  },
];

export default function Research() {
  return (
    <section className="py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Peer-Reviewed. <br />
            <span className="text-text-muted">Validated. Trusted.</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {papers.map((paper, index) => (
            <motion.div
              key={paper.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="glass p-10 rounded-[2.5rem] flex flex-col justify-between group"
            >
              <div>
                <div className="text-xs font-bold tracking-[0.15em] uppercase text-primary-custom mb-4">{paper.journal}</div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary-custom transition-colors">{paper.title}</h3>
                <p className="text-text-muted mb-8">{paper.authors}</p>
                <div className="flex items-center gap-4">
                  <div className="px-4 py-2 rounded-xl bg-surface border border-border-custom text-text-primary font-bold">
                    {paper.metric}
                  </div>
                  <div className="text-xs text-text-muted font-mono">DOI: {paper.doi}</div>
                </div>
              </div>
              <a href={paper.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 flex items-center gap-2 text-primary-custom font-bold hover:gap-3 transition-all"
              >
                Read Paper <ExternalLink size={16} />
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="inline-block p-4 rounded-full bg-primary-custom/10 text-primary-custom mb-8">
            <Quote size={32} />
          </div>
          <p className="text-3xl md:text-4xl font-display font-medium text-text-primary leading-tight italic">
            "Built on the shoulders of published research — every algorithm has a citation."
          </p>
        </motion.div>
      </div>
    </section>
  );
}
