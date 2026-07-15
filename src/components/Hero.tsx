import { motion } from "motion/react";
import { ArrowRight, Trophy, Users, ShieldAlert, Crosshair } from "lucide-react";
import { useEffect, useRef, useState } from "react";

function useAnimatedCounter(end: number, duration: number = 2000, prefix: string = '', suffix: string = '') {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);
  const nodeRef = useRef<HTMLDivElement>(null);
  const startTime = useRef<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && countRef.current !== end) {
          requestAnimationFrame(animate);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (nodeRef.current) {
      observer.observe(nodeRef.current);
    }

    const animate = (timestamp: number) => {
      if (!startTime.current) startTime.current = timestamp;
      const progress = timestamp - startTime.current;
      const percentage = Math.min(progress / duration, 1);
      
      // Easing function (easeOutExpo)
      const easeOut = percentage === 1 ? 1 : 1 - Math.pow(2, -10 * percentage);
      const currentCount = end * easeOut;
      
      countRef.current = currentCount;
      setCount(currentCount);

      if (progress < duration) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    return () => observer.disconnect();
  }, [end, duration]);

  // Format the number depending on if it has decimals
  const formattedCount = end % 1 !== 0 
    ? count.toFixed(1) 
    : Math.round(count).toString();

  return (
    <div ref={nodeRef} className="text-3xl font-display font-bold text-white">
      {prefix}<span className={end > 100 ? "" : "text-emerald-400"}>{formattedCount}</span>{suffix}
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative min-h-screen pt-32 pb-20 overflow-hidden flex items-center bg-[#050505]">
      {/* Background Effects */}
      <div className="absolute inset-0 nssa-grid-bg opacity-40 mix-blend-screen" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-emerald-500/8 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/5 blur-[100px] rounded-full pointer-events-none" />
      
      {/* Floating Particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          animate={{ 
            y: [0, -30, 0], 
            x: [0, Math.random() * 20 - 10, 0], 
            opacity: [0.2, 0.6, 0.2] 
          }}
          transition={{ 
            duration: 8 + Math.random() * 7, 
            repeat: Infinity,
            delay: Math.random() * 5
          }}
          className={`absolute rounded-full bg-emerald-500/30 ${i % 2 === 0 ? 'w-2 h-2' : 'w-1 h-1'}`}
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
        />
      ))}

      <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/5 backdrop-blur-sm w-fit">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-medium text-emerald-300/80 uppercase tracking-wider">O sistema definitivo para orgs de esports</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-display font-bold leading-[1.05] tracking-tight">
            Domine as apostas com <br />
            <span className="text-gradient">gestão de elite.</span>
          </h1>
          
          <p className="text-lg text-gray-400 max-w-lg leading-relaxed">
            A plataforma completa para organizações de Valorant, CS2 e Free Fire. 
            Controle finanças, gerencie squads e maximize seus lucros com dados em tempo real, 
            tudo no seu celular.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <div className="relative inline-flex group">
              <span className="absolute inset-0 rounded-full animate-pulse-ring bg-emerald-500/30 group-hover:bg-emerald-500/40 transition-colors" />
              <button className="relative h-14 px-8 w-full sm:w-auto rounded-full bg-gradient-to-r from-emerald-500 to-green-500 text-black font-bold flex items-center justify-center gap-2 hover:shadow-[0_0_30px_rgba(16,185,129,0.4)] transition-all z-10 hover:scale-105">
                Começar Agora
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
            
            <button className="h-14 px-8 rounded-full border border-white/10 bg-white/5 text-white font-medium flex items-center justify-center hover:bg-white/10 hover:border-emerald-500/30 transition-all hover:shadow-[0_0_20px_rgba(16,185,129,0.15)]">
              Ver Demonstração
            </button>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap items-center gap-x-8 gap-y-4 pt-8 mt-4 border-t border-white/10">
            <div className="flex flex-col">
              {useAnimatedCounter(500, 2000, '', '+')}
              <span className="text-xs text-gray-500 uppercase tracking-wider mt-1">Orgs Ativas</span>
            </div>
            <div className="w-px h-10 bg-white/10 hidden sm:block" />
            <div className="flex flex-col">
              {useAnimatedCounter(2, 2000, 'R$ ', 'M+')}
              <span className="text-xs text-gray-500 uppercase tracking-wider mt-1">Movimentados</span>
            </div>
            <div className="w-px h-10 bg-white/10 hidden sm:block" />
            <div className="flex flex-col">
              {useAnimatedCounter(68.5, 2000, '', '%')}
              <span className="text-xs text-gray-500 uppercase tracking-wider mt-1">Win Rate Médio</span>
            </div>
          </div>
        </motion.div>

        {/* Mobile App Presentation (CSS Mockup) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative h-[650px] flex justify-center lg:justify-end perspective-1000 mt-10 lg:mt-0"
        >
          <motion.div
            animate={{ 
              y: [0, -15, 0]
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-[300px] sm:w-[340px] h-[680px] rounded-[3rem] border-[8px] border-zinc-800 bg-[#0a0a0a] shadow-2xl overflow-hidden animate-glow-pulse-strong z-20"
          >
            {/* Glass Shine Effect */}
            <motion.div 
              animate={{ 
                x: [-500, 500], 
                y: [-200, 600] 
              }}
              transition={{ 
                duration: 8, 
                repeat: Infinity, 
                repeatDelay: 4,
                ease: "linear"
              }}
              className="absolute w-[200%] h-32 bg-gradient-to-r from-transparent via-white/10 to-transparent -rotate-[35deg] pointer-events-none z-40"
            />

            {/* Phone Notch */}
            <div className="absolute top-0 inset-x-0 h-7 flex justify-center z-30">
              <div className="w-32 h-7 bg-zinc-800 rounded-b-2xl" />
            </div>

            {/* App UI Simulation */}
            <div className="w-full h-full flex flex-col p-5 pt-12 gap-4 relative z-10">
              <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-500/20 blur-3xl rounded-full" />
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-emerald-500/10 blur-3xl rounded-full" />

              {/* Header */}
              <div className="flex items-center justify-between mt-2">
                <div>
                  <h3 className="text-gray-500 text-xs uppercase tracking-wider font-medium">Saldo Total</h3>
                  <div className="text-2xl font-display font-bold text-white">R$ 45.230,00</div>
                </div>
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-emerald-500 to-green-400 p-[2px] shadow-[0_0_15px_rgba(16,185,129,0.3)]">
                  <div className="w-full h-full bg-[#0a0a0a] rounded-full flex items-center justify-center overflow-hidden">
                    <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix&backgroundColor=0a0a0a" alt="Avatar" className="w-full h-full object-cover opacity-80" />
                  </div>
                </div>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-2 gap-3 mt-4">
                <div className="bg-white/[0.03] rounded-2xl p-4 border border-white/5 backdrop-blur-md">
                  <Trophy className="w-5 h-5 text-emerald-400 mb-2" />
                  <div className="text-[11px] text-gray-400 uppercase tracking-wider">Win Rate</div>
                  <div className="text-lg font-bold text-white mt-1">68.5%</div>
                </div>
                <div className="bg-emerald-500/10 rounded-2xl p-4 border border-emerald-500/20 backdrop-blur-md">
                  <Users className="w-5 h-5 text-emerald-400 mb-2" />
                  <div className="text-[11px] text-emerald-200/60 uppercase tracking-wider">Membros</div>
                  <div className="text-lg font-bold text-emerald-400 mt-1">14 Ativos</div>
                </div>
              </div>

              {/* Match List */}
              <div className="mt-4 flex-1">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="text-sm font-medium text-white">Partidas ao vivo</h4>
                  <span className="text-[10px] text-emerald-500 font-bold">VER TODAS</span>
                </div>
                
                <div className="flex flex-col gap-3">
                  {[
                    { game: "Valorant", teams: "LOUD vs NRG", odd: "1.85", status: "Ao vivo", icon: Crosshair, color: "text-rose-400", bg: "bg-red-500/20 text-red-400 animate-pulse border-red-500/20" },
                    { game: "CS2", teams: "FURIA vs NAVI", odd: "2.10", status: "15:00", icon: ShieldAlert, color: "text-amber-400", bg: "bg-white/10 text-gray-300 border-white/5" },
                  ].map((match, i) => (
                    <div key={i} className="bg-white/[0.03] rounded-xl p-3.5 border border-white/5 flex flex-col gap-3 backdrop-blur-md hover:bg-white/[0.06] transition-colors cursor-pointer">
                      <div className="flex justify-between items-center">
                        <span className="text-[10px] text-gray-400 flex items-center gap-1.5 uppercase tracking-wider font-medium">
                          <match.icon className={`w-3.5 h-3.5 ${match.color}`} /> {match.game}
                        </span>
                        <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full border ${match.bg}`}>
                          {match.status}
                        </span>
                      </div>
                      <div className="flex justify-between items-end">
                        <span className="text-sm font-medium text-gray-200">{match.teams}</span>
                        <div className="flex flex-col items-end">
                          <span className="text-[9px] text-gray-500 mb-0.5">ODD</span>
                          <span className="text-emerald-400 font-display font-bold text-sm leading-none">{match.odd}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Bottom Nav */}
              <div className="absolute bottom-5 left-5 right-5 h-16 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/10 flex items-center justify-around px-2 shadow-2xl">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shadow-inner"><Crosshair className="w-5 h-5 text-emerald-400" /></div>
                <div className="w-12 h-12 flex items-center justify-center opacity-40 hover:opacity-100 transition-opacity"><Trophy className="w-5 h-5 text-white" /></div>
                <div className="w-12 h-12 flex items-center justify-center opacity-40 hover:opacity-100 transition-opacity"><Users className="w-5 h-5 text-white" /></div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
