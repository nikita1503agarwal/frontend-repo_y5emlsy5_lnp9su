import { motion } from 'framer-motion';

export default function CTA() {
  return (
    <section id="contact" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.12),transparent_55%)]"></div>
      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-10 text-center backdrop-blur-xl">
          <motion.h3
            className="text-3xl font-bold text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            Ready to build something great?
          </motion.h3>
          <motion.p
            className="mt-3 text-white/80"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.05 }}
          >
            Tell us about your project and we’ll reply within 24 hours.
          </motion.p>
          <motion.form
            className="mt-8 grid gap-4 sm:grid-cols-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            onSubmit={(e) => e.preventDefault()}
          >
            <input className="sm:col-span-1 rounded-xl bg-white/10 px-4 py-3 text-white placeholder-white/50 outline-none border border-white/10" placeholder="Name" />
            <input className="sm:col-span-1 rounded-xl bg-white/10 px-4 py-3 text-white placeholder-white/50 outline-none border border-white/10" placeholder="Email" type="email" />
            <textarea className="sm:col-span-2 rounded-xl bg-white/10 px-4 py-3 text-white placeholder-white/50 outline-none border border-white/10" placeholder="Tell us about your project" rows={4} />
            <div className="sm:col-span-2 flex justify-center">
              <button className="inline-flex items-center justify-center rounded-xl bg-white text-slate-900 px-5 py-3 font-medium shadow/10 hover:shadow-lg">
                Send Message
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
