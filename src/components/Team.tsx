import { motion } from 'motion/react';
import { Github, Linkedin } from 'lucide-react';

export default function Team() {
  return (
    <section id="team" className="py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Built by a <span className="text-primary-custom">Builder.</span>
          </motion.h2>
        </div>

        <div className="max-w-xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass p-10 rounded-[3rem] text-center relative group"
          >
            <div className="w-40 h-40 mx-auto mb-8 rounded-full border-2 border-primary-custom p-1 relative">
              <div className="absolute inset-0 rounded-full bg-primary-custom/20 blur-xl group-hover:blur-2xl transition-all" />
              <img 
                src="https://media.licdn.com/dms/image/v2/D5603AQGislH2aubnmw/profile-displayphoto-scale_400_400/B56ZufCR3YGwAg-/0/1767899738763?e=1773273600&v=beta&t=NixtDsPGo4QAookeyzKr3gKkM3R4dzGMYUnp05YZdRM" 
                alt="Vivek Ranjan Sahoo" 
                className="w-full h-full rounded-full object-cover relative z-10"
                referrerPolicy="no-referrer"
              />
            </div>
            
            <h3 className="text-3xl font-bold mb-2">Vivek Ranjan Sahoo</h3>
            <p className="text-primary-custom font-bold mb-6">AI/ML Engineer & Project Lead</p>
            
            <p className="text-text-muted mb-8">
              B.Tech CSE, ITER — SOA University. <br />
              Passionate about computer vision and real-time safety intelligence.
            </p>

            <div className="flex flex-wrap justify-center gap-2 mb-10">
              {['AI/ML', 'Computer Vision', 'Cloud', 'Full Stack'].map(tag => (
                <span key={tag} className="px-4 py-1.5 rounded-full bg-surface border border-border-custom text-xs font-bold text-text-muted">
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex justify-center gap-4">
              <a href="https://github.com/msVivekRanjan" className="w-12 h-12 rounded-full bg-surface border border-border-custom flex items-center justify-center text-text-primary hover:bg-primary-custom hover:border-primary-custom transition-all">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/vivekranjansahoo7/" className="w-12 h-12 rounded-full bg-surface border border-border-custom flex items-center justify-center text-text-primary hover:bg-primary-custom hover:border-primary-custom transition-all">
                <Linkedin size={20} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-12 text-center space-y-4"
          >
            <p className="text-text-muted text-sm">
              Mentored under the guidance of <span className="text-text-primary font-bold">faculty</span>, <br />
              Department of CSE, ITER SOA University
            </p>
            <div className="inline-flex px-4 py-2 rounded-full bg-accent-custom/10 border border-accent-custom/20 text-accent-custom text-xs font-bold uppercase tracking-widest">
              Selected for Innovation Expo — Hackfrost 2025
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
