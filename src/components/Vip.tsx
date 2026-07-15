import { motion } from "motion/react";
import { User, Home, CircleDollarSign, Trophy, ArrowRight, Star, Check, Crosshair, Shield } from "lucide-react";

export function Vip() {
  return (
    <section id="vip" className="py-32 relative overflow-hidden bg-[#020202]">
      {/* Background gradients */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-500/8 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-emerald-500/8 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 backdrop-blur-sm w-fit">
              <Star className="w-3 h-3 text-emerald-400" />
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest">Acesso Exclusivo</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-display font-bold leading-tight text-white">
              Área <span className="text-gradient">VIP</span>
            </h2>
            <p className="text-lg text-gray-400">
              Tenha acesso às melhores odds, picks exclusivos de analistas profissionais e a interface de apostas mais rápida do mercado. O painel VIP foi desenhado para quem leva os esports a sério.
            </p>
            
            <ul className="flex flex-col gap-5 mt-4">
              {[
                "Sinais de apostas em tempo real",
                "Interface 1v1 Matches otimizada",
                "Alertas de surebets e value bets",
                "Gestão de banca integrada"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-gray-300">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/15 border border-emerald-500/20 flex items-center justify-center shrink-0">
                    <Check className="w-4 h-4 text-emerald-400" />
                  </div>
                  <span className="font-medium text-white">{item}</span>
                </li>
              ))}
            </ul>

            <div className="relative inline-flex mt-8 w-fit group">
              <span className="absolute inset-0 rounded-full animate-pulse-ring bg-emerald-500/20" />
              <button className="relative h-14 px-10 rounded-full bg-gradient-to-r from-emerald-500 to-green-500 text-black font-bold flex items-center justify-center gap-2 hover:brightness-110 transition-all animate-glow-pulse z-10 shadow-xl">
                Assinar VIP Agora
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>

          {/* Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative flex justify-center lg:justify-end perspective-1000 mt-10 lg:mt-0"
          >
            <div 
              className="w-[320px] h-[700px] rounded-[3rem] border-[8px] border-[#1a1a1a] bg-[#121415] shadow-2xl overflow-hidden relative shadow-emerald-500/20"
              style={{ transformStyle: "preserve-3d", transform: "rotateY(-5deg) rotateX(3deg)" }}
            >
              {/* Diagonal Light Sweep */}
              <motion.div 
                animate={{ x: [-500, 500], y: [-200, 700] }}
                transition={{ duration: 7, repeat: Infinity, repeatDelay: 3, ease: "linear" }}
                className="absolute w-[200%] h-40 bg-gradient-to-r from-transparent via-white/5 to-transparent -rotate-45 pointer-events-none z-40"
              />

              <div className="px-5 h-full flex flex-col pt-10">
                {/* Header */}
                <div className="flex items-center justify-between mb-8 z-10">
                  <div className="flex flex-col">
                    <div className="text-2xl font-black italic tracking-tighter text-white flex items-center">
                      N<span className="text-emerald-500">SS</span>A
                    </div>
                    <div className="text-[8px] tracking-[0.2em] text-white mt-0.5">E-SPORTS APP</div>
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <div className="w-8 h-8 rounded-full bg-[#1e2022] flex items-center justify-center border border-gray-700">
                      <User className="w-4 h-4 text-gray-400" />
                    </div>
                    <span className="text-emerald-500 font-bold text-sm tracking-wide">$1,250.50</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-white font-bold tracking-wide text-xs mb-4 uppercase flex items-center gap-2 z-10">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Upcoming 1V1 Matches
                </h3>

                {/* Cards Container */}
                <div className="flex flex-col gap-4 flex-1 overflow-y-auto pb-24 hide-scrollbar z-10">
                  
                  {/* Card 1 */}
                  <div className="bg-[#1a1c1e] rounded-xl border border-gray-800/50 p-4 relative overflow-hidden shadow-lg">
                    {/* Top Left Green Triangle */}
                    <div className="absolute top-0 left-0 w-0 h-0 border-t-[30px] border-t-emerald-500 border-r-[30px] border-r-transparent">
                      <span className="absolute -top-[28px] left-[4px] text-[10px] font-black text-black">1</span>
                    </div>

                    <div className="flex justify-between items-center mt-2 px-2">
                      <div className="flex flex-col items-center gap-2">
                        <div className="w-12 h-12 rounded-full border-2 border-emerald-500 flex items-center justify-center bg-[#121415]">
                          <User className="w-6 h-6 text-emerald-500" />
                        </div>
                        <span className="text-gray-300 text-[10px] uppercase font-bold">Player A</span>
                      </div>
                      
                      <div className="flex flex-col items-center gap-2">
                        <div className="w-8 h-8 rounded bg-[#101420] flex items-center justify-center border border-gray-800">
                           <Crosshair className="w-4 h-4 text-rose-500" />
                        </div>
                        <span className="text-gray-500 text-[10px] font-black italic">VS</span>
                      </div>

                      <div className="flex flex-col items-center gap-2">
                        <div className="w-12 h-12 rounded-full border-2 border-emerald-500 flex items-center justify-center bg-[#121415]">
                          <User className="w-6 h-6 text-emerald-500" />
                        </div>
                        <span className="text-gray-300 text-[10px] uppercase font-bold">Player B</span>
                      </div>
                    </div>

                    <div className="flex gap-3 mt-5">
                      <div className="flex-1 bg-[#121415] border border-gray-800 rounded-lg py-2 text-center shadow-inner">
                        <span className="text-emerald-400 font-black text-sm">1.85</span>
                      </div>
                      <div className="flex-1 bg-[#121415] border border-gray-800 rounded-lg py-2 text-center shadow-inner">
                        <span className="text-emerald-400 font-black text-sm">2.10</span>
                      </div>
                    </div>

                    <button className="w-full mt-3 py-2.5 rounded-lg border-2 border-emerald-500 text-emerald-500 font-black text-xs hover:bg-emerald-500 hover:text-black transition-all tracking-wider uppercase">
                      Bet Now
                    </button>
                    {/* Bottom Glow */}
                    <div className="absolute bottom-0 left-8 right-8 h-[2px] bg-emerald-500/50 shadow-[0_0_15px_rgba(16,185,129,0.8)]" />
                  </div>

                  {/* Card 2 */}
                  <div className="bg-[#1a1c1e] rounded-xl border border-gray-800/50 p-4 relative overflow-hidden shadow-lg">
                    <div className="absolute top-0 left-0 w-0 h-0 border-t-[30px] border-t-emerald-500 border-r-[30px] border-r-transparent">
                      <span className="absolute -top-[28px] left-[4px] text-[10px] font-black text-black">2</span>
                    </div>

                    <div className="flex justify-between items-center mt-2 px-2">
                      <div className="flex flex-col items-center gap-2">
                        <div className="w-12 h-12 rounded-full border-2 border-emerald-500 flex items-center justify-center bg-[#121415]">
                          <User className="w-6 h-6 text-emerald-500" />
                        </div>
                        <span className="text-gray-300 text-[10px] uppercase font-bold">Player C</span>
                      </div>
                      
                      <div className="flex flex-col items-center gap-2">
                        <div className="w-8 h-8 rounded bg-[#101420] flex items-center justify-center border border-gray-800">
                          <Shield className="w-4 h-4 text-amber-500" />
                        </div>
                        <span className="text-gray-500 text-[10px] font-black italic">VS</span>
                      </div>

                      <div className="flex flex-col items-center gap-2">
                        <div className="w-12 h-12 rounded-full border-2 border-emerald-500 flex items-center justify-center bg-[#121415]">
                          <User className="w-6 h-6 text-emerald-500" />
                        </div>
                        <span className="text-gray-300 text-[10px] uppercase font-bold">Player D</span>
                      </div>
                    </div>

                    <div className="flex gap-3 mt-5">
                      <div className="flex-1 bg-[#121415] border border-gray-800 rounded-lg py-2 text-center shadow-inner">
                        <span className="text-emerald-400 font-black text-sm">1.95</span>
                      </div>
                      <div className="flex-1 bg-[#121415] border border-gray-800 rounded-lg py-2 text-center shadow-inner">
                        <span className="text-emerald-400 font-black text-sm">2.05</span>
                      </div>
                    </div>

                    <button className="w-full mt-3 py-2.5 rounded-lg border-2 border-emerald-500 text-emerald-500 font-black text-xs hover:bg-emerald-500 hover:text-black transition-all tracking-wider uppercase">
                      Bet Now
                    </button>
                    <div className="absolute bottom-0 left-8 right-8 h-[2px] bg-emerald-500/50 shadow-[0_0_15px_rgba(16,185,129,0.8)]" />
                  </div>
                  
                  {/* Card 3 (Partial) */}
                  <div className="bg-[#1a1c1e] rounded-xl border border-gray-800/50 p-4 relative overflow-hidden shadow-lg opacity-40">
                    <div className="absolute top-0 left-0 w-0 h-0 border-t-[30px] border-t-emerald-500 border-r-[30px] border-r-transparent">
                      <span className="absolute -top-[28px] left-[4px] text-[10px] font-black text-black">3</span>
                    </div>
                  </div>

                </div>

                {/* Bottom Navigation */}
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-[#1a1c1e] border-t border-gray-800 flex justify-around items-center px-4 rounded-b-[2.5rem] z-20">
                  <div className="flex flex-col items-center gap-1 cursor-pointer">
                    <Home className="w-5 h-5 text-emerald-500" />
                    <span className="text-[9px] text-emerald-500 font-bold uppercase">Home</span>
                  </div>
                  <div className="flex flex-col items-center gap-1 opacity-50 hover:opacity-100 transition-opacity cursor-pointer">
                    <Trophy className="w-5 h-5 text-white" />
                    <span className="text-[9px] text-white font-medium uppercase">Matches</span>
                  </div>
                  <div className="flex flex-col items-center gap-1 opacity-50 hover:opacity-100 transition-opacity cursor-pointer">
                    <CircleDollarSign className="w-5 h-5 text-white" />
                    <span className="text-[9px] text-white font-medium uppercase">Bets</span>
                  </div>
                  <div className="flex flex-col items-center gap-1 opacity-50 hover:opacity-100 transition-opacity cursor-pointer">
                    <User className="w-5 h-5 text-white" />
                    <span className="text-[9px] text-white font-medium uppercase">Profile</span>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
