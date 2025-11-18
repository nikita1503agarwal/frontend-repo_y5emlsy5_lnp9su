import { motion } from 'framer-motion';
import { Smartphone, Globe, Palette, Rocket, Code2, Cloud } from 'lucide-react';

const services = [
  { icon: Smartphone, title: 'Mobile Apps', desc: 'iOS and Android apps with native performance and delightful UX.' },
  { icon: Globe, title: 'Web Apps', desc: 'Fast, responsive web apps powered by modern frameworks.' },
  { icon: Cloud, title: 'Backend & APIs', desc: 'Scalable architectures, cloud-native, and secure by default.' },
  { icon: Code2, title: 'MVP Development', desc: 'Ship quickly with lean, validated product foundations.' },
  { icon: Palette, title: 'Design & Branding', desc: 'Brand systems, design systems, and product design.' },
  { icon: Rocket, title: 'Growth Engineering', desc: 'Analytics, A/B testing, and performance optimization.' },
];

export default function Services() {
  return (
    <section id="services" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(168,85,247,0.12),transparent_50%)]"></div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-white tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          What we do
        </motion.h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              <div className="h-12 w-12 grid place-items-center rounded-xl bg-gradient-to-br from-fuchsia-500 to-cyan-400">
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
