import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Process from './components/Process';
import Work from './components/Work';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Background accents */}
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(56,189,248,0.15),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(168,85,247,0.15),transparent_40%),radial-gradient(circle_at_50%_100%,rgba(34,197,94,0.15),transparent_40%)]" />

      <Navbar />
      <main className="relative">
        <Hero />
        <Services />
        <Process />
        <Work />
        <Testimonials />
        <CTA />
      </main>

      <footer className="relative border-t border-white/10 py-10 text-center text-white/60">
        © {new Date().getFullYear()} NovaSoft Studio — Mobile & Web App Development
      </footer>
    </div>
  );
}

export default App;
