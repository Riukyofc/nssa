import { motion } from "motion/react";
import { LayoutDashboard, Globe, Settings, Wallet, Users, History, Activity, Terminal } from "lucide-react";

export function AppShowcase() {
  return (
    <section id="paineis" className="py-32 relative overflow-hidden bg-[#020202]">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-emerald-400/40 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/5 backdrop-blur-sm w-fit mb-2">
              <LayoutDashboard className="w-3 h-3 text-emerald-400" />
              <span className="text-[10px] font-bold text-emerald-300 uppercase tracking-widest">Painéis & Sites</span>
            </div>

            <h2 className="text-4xl md:text-6xl font-display font-bold leading-[1.1] text-white">
              Controle total, <br />
              <span className="text-gradient">dentro e fora do Discord.</span>
            </h2>
            
            <p className="text-lg text-gray-400 leading-relaxed max-w-lg">
              Oferecemos painéis interativos em botões para jogadores, staff e donos gerenciarem
              tudo sem digitar comandos. E para expandir sua marca, criamos dashboards web e
              landing pages exclusivas para sua organização.
            </p>
            
            <ul className="flex flex-col gap-5 mt-4">
              {[
                "Painéis segmentados: Jogador, Mediador, Staff e Dono",
                "Tudo clicável: perfil, carteira, loja, licenças e logs",
                "Dashboard Web complementar para a gestão da org",
                "Landing page personalizada para vender seus serviços VIP"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-gray-300">
                  <div className="w-7 h-7 rounded-full bg-emerald-500/15 border border-emerald-500/20 flex items-center justify-center shrink-0">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.8)]" />
                  </div>
                  <span className="font-medium text-white">{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <a href="https://discord.gg/vZqXX59NsA" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 h-14 px-8 rounded-2xl bg-white/10 text-white border border-white/10 hover:bg-emerald-500/10 hover:border-emerald-500/30 hover:text-emerald-400 transition-all duration-300">
                <Globe className="w-5 h-5" />
                <span className="font-bold">Ver Exemplo de Site</span>
              </a>
            </div>
          </motion.div>

          {/* Discord Panel Mockup & Web Preview */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative flex justify-center items-center h-[700px] mt-10 lg:mt-0"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/15 blur-[120px] rounded-full pointer-events-none" />
            
            <div className="relative w-full max-w-md">
              
              {/* Web Dashboard Preview (Background) */}
              <motion.div 
                animate={{ y: [-8, 8, -8], rotate: [-5, -5, -5] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -top-10 -right-10 w-[350px] h-[250px] rounded-2xl border border-white/10 bg-[#0a0a0a] shadow-2xl opacity-70 overflow-hidden"
              >
                {/* Browser Header */}
                <div className="h-8 bg-[#1a1a1a] border-b border-white/5 flex items-center px-4 gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
                  </div>
                  <div className="mx-auto h-4 w-32 bg-white/5 rounded" />
                </div>
                {/* Web Content */}
                <div className="p-4 flex flex-col gap-4">
                  <div className="flex gap-4">
                    <div className="w-16 h-16 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center">
                       <Activity className="w-6 h-6 text-emerald-400" />
                    </div>
                    <div className="flex-1 flex flex-col gap-2 justify-center">
                      <div className="h-4 w-1/2 bg-white/10 rounded" />
                      <div className="h-3 w-3/4 bg-white/5 rounded" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="h-16 bg-white/5 rounded-lg" />
                    <div className="h-16 bg-white/5 rounded-lg" />
                  </div>
                  <div className="h-20 bg-white/5 rounded-lg" />
                </div>
              </motion.div>
              
              {/* Discord Bot Panel (Foreground) */}
              <motion.div 
                animate={{ y: [5, -8, 5] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10 w-full rounded-xl border border-white/10 bg-[#313338] shadow-2xl overflow-hidden p-4"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-gray-400 text-sm font-semibold">Painel de Controle - Dono</span>
                </div>

                <div className="bg-[#2b2d31] rounded-lg border-l-4 border-emerald-500 p-4">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center border border-emerald-500/30">
                       <Settings className="w-5 h-5 text-emerald-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold">NSSA Bot — Central de Gestão</h4>
                      <p className="text-[11px] text-gray-400 mt-0.5">Clique nos botões abaixo para gerenciar o bot.</p>
                    </div>
                  </div>

                  {/* Buttons Grid */}
                  <div className="flex flex-col gap-2 mt-4">
                    <div className="grid grid-cols-2 gap-2">
                      <button className="flex items-center justify-center gap-2 py-2 bg-[#4e5058] hover:bg-[#5865f2] text-white rounded-[4px] text-[13px] font-medium transition-colors">
                        <Terminal className="w-4 h-4" /> Configurar Bot
                      </button>
                      <button className="flex items-center justify-center gap-2 py-2 bg-[#4e5058] hover:bg-[#5865f2] text-white rounded-[4px] text-[13px] font-medium transition-colors">
                        <Wallet className="w-4 h-4" /> Dar Moedas
                      </button>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-2">
                      <button className="flex items-center justify-center gap-2 py-2 bg-[#4e5058] hover:bg-[#5865f2] text-white rounded-[4px] text-[13px] font-medium transition-colors">
                        <Users className="w-4 h-4" /> Mediadores
                      </button>
                      <button className="flex items-center justify-center gap-2 py-2 bg-[#4e5058] hover:bg-[#5865f2] text-white rounded-[4px] text-[13px] font-medium transition-colors">
                        <History className="w-4 h-4" /> Extrair Logs
                      </button>
                    </div>

                    <button className="w-full flex items-center justify-center gap-2 py-2 bg-[#248046] hover:bg-[#1a6334] text-white rounded-[4px] text-[13px] font-medium transition-colors mt-1">
                      👑 Ver Pacote de Salas (PIX)
                    </button>
                    
                    <button className="w-full flex items-center justify-center gap-2 py-2 bg-[#da373c] hover:bg-[#a1282b] text-white rounded-[4px] text-[13px] font-medium transition-colors mt-1">
                      ⚠️ Blacklist Global
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
