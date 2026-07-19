import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Bot } from "lucide-react";
import { useState, useEffect, MouseEvent } from "react";

const NAV_LINKS = [
  { label: 'Recursos', href: '#recursos', id: 'recursos' },
  { label: 'Modos', href: '#modos', id: 'modos' },
  { label: 'Pacotes', href: '#pacotes', id: 'pacotes' },
  { label: 'Painéis', href: '#paineis', id: 'paineis' }
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-50% 0px -50% 0px' }
    );
    NAV_LINKS.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });
    return () => observer.disconnect();
  }, []);

  const handleScrollTo = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-xl ${
        isScrolled
          ? 'bg-[#050505]/95 border-b border-emerald-500/10 shadow-lg shadow-black/50'
          : 'bg-[#050505]/70 border-b border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex flex-col cursor-pointer"
        >
          <div className="text-2xl font-black italic tracking-tighter text-white flex items-center font-display">
            N<span className="text-emerald-500" style={{ textShadow: '0 0 20px rgba(16,185,129,0.5)' }}>SS</span>A
          </div>
          <div className="text-[8px] tracking-[0.2em] text-gray-400 mt-0.5 uppercase">Discord Bot</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="hidden md:flex items-center gap-8"
        >
          {NAV_LINKS.map(({ label, href, id }) => (
            <a
              key={id}
              href={href}
              onClick={(e) => handleScrollTo(e, href)}
              className={`text-sm font-medium transition-colors hover-underline pb-1 ${
                activeSection === id ? 'text-emerald-400' : 'text-gray-400 hover:text-white'
              }`}
            >
              {label}
            </a>
          ))}
          <a href="https://discord.gg/vZqXX59NsA" target="_blank" rel="noopener noreferrer" className="h-10 px-6 rounded-full bg-gradient-to-r from-emerald-500 to-green-500 text-black font-bold text-sm hover:brightness-110 transition-all animate-glow-pulse flex items-center gap-2">
            <Bot className="w-4 h-4" />
            Adicionar ao Discord
          </a>
        </motion.div>

        <button
          className="md:hidden text-white p-2 hover:bg-white/5 rounded-lg transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-b border-emerald-500/10 bg-[#050505]/95 backdrop-blur-xl overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {NAV_LINKS.map(({ label, href, id }) => (
                <a
                  key={id}
                  href={href}
                  onClick={(e) => handleScrollTo(e, href)}
                  className={`text-sm font-medium py-2 border-b border-white/5 transition-colors ${
                    activeSection === id ? 'text-emerald-400' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {label}
                </a>
              ))}
              <a href="https://discord.gg/vZqXX59NsA" target="_blank" rel="noopener noreferrer" className="h-12 w-full rounded-full bg-gradient-to-r from-emerald-500 to-green-500 text-black font-bold text-sm mt-4 animate-glow-pulse flex items-center justify-center gap-2">
                <Bot className="w-4 h-4" />
                Adicionar ao Discord
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
