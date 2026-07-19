import { motion } from "motion/react";
import { MessageCircle, ShoppingBag, Shield } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative bg-[#050505] pt-24 pb-8 border-t border-white/5">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
            
            {/* Brand Column */}
            <div className="md:col-span-5">
              <div className="flex flex-col mb-6">
                <div className="text-3xl font-black italic tracking-tighter text-white flex items-center font-display">
                  N<span className="text-emerald-500" style={{ textShadow: '0 0 20px rgba(16,185,129,0.5)' }}>SS</span>A
                </div>
                <div className="text-[10px] tracking-[0.2em] text-emerald-500/80 mt-0.5 uppercase font-bold">DISCORD BOT</div>
              </div>
              <p className="text-sm text-gray-500 leading-relaxed max-w-sm">
                O bot definitivo para gestão de apostas e salas automáticas no Discord.
                Transforme sua comunidade de Free Fire em uma organização profissional.
              </p>
            </div>
            
            {/* Produto Column */}
            <div className="md:col-span-2">
              <h4 className="font-bold mb-6 text-white text-sm uppercase tracking-wider">Produto</h4>
              <ul className="flex flex-col gap-4">
                {['Recursos', 'Modos suportados', 'Pacotes de Salas', 'Sites Exclusivos'].map(item => (
                  <li key={item}>
                    <a href="https://discord.gg/vZqXX59NsA" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-500 hover:text-emerald-400 transition-colors hover-underline pb-1 w-fit">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Legal Column */}
            <div className="md:col-span-2">
              <h4 className="font-bold mb-6 text-white text-sm uppercase tracking-wider">Legal</h4>
              <ul className="flex flex-col gap-4">
                {['Termos de Uso', 'Privacidade', 'Reembolsos'].map(item => (
                  <li key={item}>
                    <a href="https://discord.gg/vZqXX59NsA" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-500 hover:text-emerald-400 transition-colors hover-underline pb-1 w-fit">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Suporte Column */}
            <div className="md:col-span-3">
              <h4 className="font-bold mb-6 text-white text-sm uppercase tracking-wider">Suporte</h4>
              <div className="flex gap-4">
                <a href="https://discord.gg/vZqXX59NsA" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-white/5 border border-white/[0.06] flex items-center justify-center text-gray-400 hover:text-emerald-400 hover:bg-emerald-500/10 hover:border-emerald-500/30 transition-all duration-300">
                  <Shield className="w-5 h-5" />
                </a>
                <a href="https://discord.gg/vZqXX59NsA" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-white/5 border border-white/[0.06] flex items-center justify-center text-gray-400 hover:text-emerald-400 hover:bg-emerald-500/10 hover:border-emerald-500/30 transition-all duration-300">
                  <ShoppingBag className="w-5 h-5" />
                </a>
                <a href="https://discord.gg/vZqXX59NsA" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-white/5 border border-white/[0.06] flex items-center justify-center text-gray-400 hover:text-emerald-400 hover:bg-emerald-500/10 hover:border-emerald-500/30 transition-all duration-300">
                  <MessageCircle className="w-5 h-5" />
                </a>
              </div>
            </div>
            
          </div>
          
          {/* Bottom Bar */}
          <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-sm text-gray-600 font-medium">© 2026 NSSA Bot. Todos os direitos reservados.</p>
            
            {/* Uptime Indicator */}
            <div className="flex items-center gap-4 bg-white/5 px-4 py-2 rounded-full border border-white/5">
              <div className="flex items-center gap-3">
                <div className="relative flex items-center justify-center w-2.5 h-2.5">
                  <span className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-75" />
                  <span className="relative rounded-full w-2 h-2 bg-emerald-400" />
                </div>
                <span className="text-xs text-gray-400 font-bold uppercase tracking-wider">Bot 100% Online</span>
              </div>
              <div className="w-16 h-1 rounded-full bg-white/10 overflow-hidden">
                <div className="w-[99%] h-full bg-gradient-to-r from-emerald-500 to-green-400 rounded-full" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
