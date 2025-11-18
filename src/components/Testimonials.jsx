import { motion } from 'framer-motion';

const quotes = [
  {
    quote: 'They shipped our MVP in six weeks. The quality blew us away.',
    author: 'Maya Patel, COO at Lendly',
  },
  {
    quote: 'Truly a partner. Sharp product sense and flawless execution.',
    author: 'Daniel Kim, Founder at Bloom',
  },
  {
    quote: 'Our conversion rate doubled after their redesign.',
    author: 'Sara López, PM at Flowly',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(236,72,153,0.12),transparent_50%)]"></div>
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-white tracking-tight text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          Loved by founders
        </motion.h2>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {quotes.map((q, i) => (
            <motion.blockquote
              key={q.author}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white/90 backdrop-blur-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              “{q.quote}”
              <footer className="mt-4 text-sm text-white/60">— {q.author}</footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
