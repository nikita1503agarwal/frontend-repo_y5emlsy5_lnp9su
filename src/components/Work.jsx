import { motion } from 'framer-motion';

const items = [
  {
    title: 'Fintech Dashboard',
    tags: ['React', 'Node', 'Stripe'],
    img: 'https://images.unsplash.com/photo-1553729784-e91953dec042?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Wellness Mobile App',
    tags: ['Flutter', 'Firebase'],
    img: 'https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'AI SaaS Landing',
    tags: ['Next.js', 'OpenAI'],
    img: 'https://images.unsplash.com/photo-1551281044-8afcb9f760c4?q=80&w=1600&auto=format&fit=crop',
  },
];

export default function Work() {
  return (
    <section id="work" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.12),transparent_50%)]"></div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-white tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          Selected work
        </motion.h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((p, i) => (
            <motion.div
              key={p.title}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img src={p.img} alt={p.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <h3 className="text-white font-semibold">{p.title}</h3>
                  <div className="flex gap-2">
                    {p.tags.map((t) => (
                      <span key={t} className="rounded-md bg-white/10 text-white/80 text-xs px-2 py-1 border border-white/10">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
