import { motion } from 'framer-motion';
import { Lightbulb, Hammer, Send, CheckCircle2 } from 'lucide-react';

const steps = [
  { icon: Lightbulb, title: 'Discovery', desc: 'We map your goals, users, and constraints to define success.' },
  { icon: Hammer, title: 'Build', desc: 'Design sprints and engineering in tight, transparent loops.' },
  { icon: Send, title: 'Launch', desc: 'We deploy, monitor, and polish the experience together.' },
  { icon: CheckCircle2, title: 'Grow', desc: 'Iterate with data to reach product-market fit faster.' },
];

export default function Process() {
  return (
    <section id="process" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(34,197,94,0.12),transparent_50%)]"></div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-white tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          How we work
        </motion.h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              <div className="h-12 w-12 grid place-items-center rounded-xl bg-gradient-to-br from-green-400 to-emerald-500">
                <Icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-white/70 text-sm">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
