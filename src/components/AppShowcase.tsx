import { motion } from "motion/react";
import { Apple, Play, Shield, Smartphone } from "lucide-react";

export function AppShowcase() {
  return (
    <section id="o-app" className="py-32 relative overflow-hidden bg-[#020202]">
      {/* Top and Bottom Glow Lines */}
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
              <Smartphone className="w-3 h-3 text-emerald-400" />
              <span className="text-[10px] font-bold text-emerald-300 uppercase tracking-widest">App Nativo</span>
            </div>

            <h2 className="text-4xl md:text-6xl font-display font-bold leading-[1.1] text-white">
              O poder do NSSA <br />
              <span className="text-gradient">no seu bolso.</span>
            </h2>
            <p className="text-lg text-gray-400 leading-relaxed max-w-lg">
              Nosso aplicativo nativo foi desenhado do zero para velocidade. 
              Receba alertas de picks, gerencie o caixa da org e envie pagamentos para os analistas
              com um clique, direto do celular.
            </p>
            
            <ul className="flex flex-col gap-5 mt-4">
              {[
                "Notificações ultra-rápidas (Push)",
                "Modo escuro otimizado para OLED",
                "Biometria para aprovar transações",
                "Chat interno seguro para a Org"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-gray-300">
                  <div className="w-7 h-7 rounded-full bg-emerald-500/15 border border-emerald-500/20 flex items-center justify-center shrink-0">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.8)]" />
                  </div>
                  <span className="font-medium text-white">{item}</span>
                </li>
              ))}
            </ul>

            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <button className="flex items-center justify-center gap-3 h-14 px-8 rounded-2xl bg-white text-black hover:bg-gray-200 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:scale-105 transition-all duration-300">
                <Apple className="w-6 h-6" />
                <div className="flex flex-col items-start">
                  <span className="text-[10px] leading-none text-gray-600 font-medium">Baixar na</span>
                  <span className="font-bold leading-none mt-0.5">App Store</span>
                </div>
              </button>
              
              <button className="flex items-center justify-center gap-3 h-14 px-8 rounded-2xl bg-white/5 border border-white/10 text-white hover:border-emerald-500/30 hover:bg-emerald-500/10 hover:shadow-[0_0_30px_rgba(16,185,129,0.15)] transition-all duration-300 group">
                <Play className="w-5 h-5 text-gray-300 group-hover:text-emerald-400 transition-colors" />
                <div className="flex flex-col items-start">
                  <span className="text-[10px] leading-none text-gray-400 font-medium group-hover:text-emerald-200/70">Disponível no</span>
                  <span className="font-bold leading-none mt-0.5">Google Play</span>
                </div>
              </button>
            </div>
          </motion.div>

          {/* Dual Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative flex justify-center items-center h-[700px] mt-10 lg:mt-0"
          >
            {/* Massive Glow behind phones */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/15 blur-[120px] rounded-full pointer-events-none" />
            
            <div className="relative flex items-center justify-center w-full max-w-sm">
              {/* Back Phone */}
              <motion.div 
                animate={{ y: [-8, 8, -8] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="w-[240px] h-[520px] rounded-[2.5rem] border-[6px] border-zinc-800 bg-[#0a0a0a] rotate-[-12deg] absolute -left-4 sm:left-4 shadow-2xl opacity-50 scale-90"
              >
                <div className="w-full h-full rounded-[2rem] bg-gradient-to-b from-emerald-900/40 to-[#0a0a0a] p-4 flex flex-col gap-4 overflow-hidden border border-white/5">
                  <div className="w-full h-24 rounded-xl bg-white/5 border border-white/5" />
                  <div className="w-full h-12 rounded-xl bg-white/5 border border-white/5" />
                  <div className="w-full h-12 rounded-xl bg-white/5 border border-white/5" />
                  <div className="w-full h-12 rounded-xl bg-white/5 border border-white/5" />
                </div>
              </motion.div>
              
              {/* Front Phone */}
              <motion.div 
                animate={{ y: [5, -8, 5] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="w-[290px] h-[620px] rounded-[3rem] border-[8px] border-zinc-700 bg-black rotate-[5deg] relative z-10 shadow-2xl shadow-emerald-500/20 overflow-hidden ml-16"
              >
                {/* Notch */}
                <div className="absolute top-0 inset-x-0 h-7 flex justify-center z-30">
                  <div className="w-28 h-7 bg-zinc-700 rounded-b-xl" />
                </div>
                
                {/* Screen Content */}
                <div className="w-full h-full relative border border-white/5 rounded-[2.2rem] overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-900/40 via-[#0a0a0a] to-[#0a0a0a]" />
                  
                  <div className="relative z-10 pt-20 p-6 flex flex-col items-center h-full">
                    
                    <div className="relative mb-6 mt-10">
                      <div className="absolute inset-0 bg-emerald-500/30 rounded-full animate-pulse-ring" />
                      <div className="w-20 h-20 rounded-full bg-emerald-500/15 border border-emerald-500/40 shadow-[0_0_30px_rgba(16,185,129,0.4)] flex items-center justify-center relative z-10 animate-glow-pulse">
                        <Shield className="w-10 h-10 text-emerald-400" />
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-display font-bold mb-2 text-white">Acesso Aprovado</h3>
                    <p className="text-sm text-gray-400 text-center mb-auto">Bem-vindo de volta, LOUD Admin</p>
                    
                    {/* Animated Notification Card */}
                    <motion.div 
                      initial={{ y: 50, opacity: 0, scale: 0.9 }}
                      whileInView={{ y: 0, opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5, duration: 0.6, type: "spring" }}
                      className="w-full glass-card p-5 rounded-2xl mb-4 border-emerald-500/20 shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                        <div className="text-xs text-amber-400/80 font-bold uppercase tracking-wider">Pendente de aprovação</div>
                      </div>
                      <div className="text-xl font-display font-bold text-white mb-4">Saque R$ 4.500,00</div>
                      <div className="flex gap-2">
                        <button className="flex-1 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-green-500 text-black font-bold text-sm shadow-[0_0_15px_rgba(16,185,129,0.3)] hover:brightness-110 transition-all">
                          Aprovar
                        </button>
                        <button className="flex-1 py-2.5 rounded-xl bg-white/10 text-white font-bold text-sm border border-white/10 hover:bg-white/20 transition-all">
                          Recusar
                        </button>
                      </div>
                    </motion.div>
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
