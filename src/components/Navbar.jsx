import { Menu, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <div className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl">
          <div className="flex items-center justify-between px-4 py-3">
            <motion.a
              href="#"
              className="inline-flex items-center gap-2 text-white"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="grid place-items-center h-10 w-10 rounded-xl bg-gradient-to-br from-fuchsia-500 to-cyan-400">
                <Sparkles className="h-5 w-5 text-white" />
              </div>
              <span className="text-lg font-semibold tracking-tight">NovaSoft</span>
            </motion.a>

            <div className="hidden md:flex items-center gap-8 text-sm text-white/90">
              {[
                ["Services", "#services"],
                ["Process", "#process"],
                ["Work", "#work"],
                ["Testimonials", "#testimonials"],
              ].map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  className="hover:text-white transition-colors"
                >
                  {label}
                </a>
              ))}
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-xl bg-white text-slate-900 px-4 py-2 font-medium shadow/10 hover:shadow-lg transition-all"
              >
                Start a Project
              </a>
            </div>

            <button className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white">
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
