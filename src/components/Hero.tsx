import { motion } from "motion/react";
import { ArrowRight, Bot, Server, Swords, Trophy } from "lucide-react";
import { useEffect, useRef, useState } from "react";

function AnimatedCounter({ end, duration = 2000, prefix = '', suffix = '' }: { end: number, duration?: number, prefix?: string, suffix?: string }) {
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
    if (nodeRef.current) observer.observe(nodeRef.current);

    const animate = (timestamp: number) => {
      if (!startTime.current) startTime.current = timestamp;
      const progress = timestamp - startTime.current;
      const percentage = Math.min(progress / duration, 1);
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

  const formattedCount = end % 1 !== 0 ? count.toFixed(1) : Math.round(count).toString();
  return (
    <div ref={nodeRef} className="text-3xl font-display font-bold text-white">
      {prefix}<span className={end > 100 ? "" : "text-emerald-400"}>{formattedCount}</span>{suffix}
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative min-h-screen pt-32 pb-20 overflow-hidden flex items-center bg-[#050505]">
      <div className="absolute inset-0 nssa-grid-bg opacity-40 mix-blend-screen" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-emerald-500/8 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/5 blur-[100px] rounded-full pointer-events-none" />

      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          animate={{ y: [0, -30, 0], x: [0, Math.random() * 20 - 10, 0], opacity: [0.2, 0.6, 0.2] }}
          transition={{ duration: 8 + Math.random() * 7, repeat: Infinity, delay: Math.random() * 5 }}
          className={`absolute rounded-full bg-emerald-500/30 ${i % 2 === 0 ? 'w-2 h-2' : 'w-1 h-1'}`}
          style={{ top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%` }}
        />
      ))}

      <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/5 backdrop-blur-sm w-fit">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-medium text-emerald-300/80 uppercase tracking-wider">🤖 Bot #1 para orgs de Free Fire</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-display font-bold leading-[1.05] tracking-tight">
            O bot definitivo para{' '}<br />
            <span className="text-gradient">apostas no Discord.</span>
          </h1>

          <p className="text-lg text-gray-400 max-w-lg leading-relaxed">
            Gestão completa de apostas 1v1 a 4v4, filas interativas com slots,
            mediadores, salas automáticas, carteira com PIX e painéis clicáveis.
            Tudo direto no seu servidor Discord.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <div className="relative inline-flex group">
              <span className="absolute inset-0 rounded-full animate-pulse-ring bg-emerald-500/30" />
              <a href="https://discord.gg/vZqXX59NsA" target="_blank" rel="noopener noreferrer" className="relative h-14 px-8 w-full sm:w-auto rounded-full bg-gradient-to-r from-emerald-500 to-green-500 text-black font-bold flex items-center justify-center gap-2 hover:shadow-[0_0_30px_rgba(16,185,129,0.4)] transition-all z-10 hover:scale-105">
                <Bot className="w-5 h-5" />
                Adicionar ao Discord
              </a>
            </div>
            <a href="https://discord.gg/vZqXX59NsA" target="_blank" rel="noopener noreferrer" className="h-14 px-8 rounded-full border border-white/10 bg-white/5 text-white font-medium flex items-center justify-center hover:bg-white/10 hover:border-emerald-500/30 transition-all hover:shadow-[0_0_20px_rgba(16,185,129,0.15)]">
              Ver Comandos
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-x-8 gap-y-4 pt-8 mt-4 border-t border-white/10">
            <div className="flex flex-col">
              <AnimatedCounter end={200} duration={2000} suffix="+" />
              <span className="text-xs text-gray-500 uppercase tracking-wider mt-1">Servidores</span>
            </div>
            <div className="w-px h-10 bg-white/10 hidden sm:block" />
            <div className="flex flex-col">
              <AnimatedCounter end={50} duration={2000} suffix="K+" />
              <span className="text-xs text-gray-500 uppercase tracking-wider mt-1">Partidas</span>
            </div>
            <div className="w-px h-10 bg-white/10 hidden sm:block" />
            <div className="flex flex-col">
              <AnimatedCounter end={500} duration={2000} prefix="R$ " suffix="K+" />
              <span className="text-xs text-gray-500 uppercase tracking-wider mt-1">Movimentados</span>
            </div>
          </div>
        </motion.div>

        {/* Discord Server Mockup */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative flex justify-center lg:justify-end mt-10 lg:mt-0"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-full max-w-[420px] rounded-2xl border border-white/10 bg-[#2b2d31] shadow-2xl overflow-hidden animate-glow-pulse-strong"
          >
            {/* Glass shine */}
            <motion.div
              animate={{ x: [-500, 500], y: [-200, 600] }}
              transition={{ duration: 8, repeat: Infinity, repeatDelay: 4, ease: "linear" }}
              className="absolute w-[200%] h-32 bg-gradient-to-r from-transparent via-white/5 to-transparent -rotate-[35deg] pointer-events-none z-40"
            />

            {/* Discord Header */}
            <div className="h-12 bg-[#1e1f22] flex items-center px-4 gap-2 border-b border-white/5">
              <span className="text-gray-400 text-lg">#</span>
              <span className="text-white text-sm font-semibold">apostas-1v1</span>
              <div className="ml-auto flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[10px] text-gray-400">12 online</span>
              </div>
            </div>

            {/* Sidebar + Chat */}
            <div className="flex h-[420px]">
              {/* Sidebar */}
              <div className="w-[160px] bg-[#2b2d31] border-r border-white/5 p-3 flex flex-col gap-1 shrink-0">
                <div className="text-[9px] uppercase tracking-widest text-gray-500 font-bold mb-1 mt-2">Apostas</div>
                {['# fila-1v1', '# fila-2v2', '# apostas-1v1', '# resultados'].map((ch, i) => (
                  <div key={i} className={`text-[11px] px-2 py-1.5 rounded-md cursor-pointer transition-colors ${i === 2 ? 'bg-white/10 text-white font-medium' : 'text-gray-400 hover:text-gray-200'}`}>
                    {ch}
                  </div>
                ))}
                <div className="text-[9px] uppercase tracking-widest text-gray-500 font-bold mb-1 mt-4">VIP</div>
                {['# tips-vip', '# ranking', '# mediadores'].map((ch, i) => (
                  <div key={i} className="text-[11px] px-2 py-1.5 rounded-md text-gray-400 hover:text-gray-200 cursor-pointer transition-colors">
                    {ch}
                  </div>
                ))}
                <div className="text-[9px] uppercase tracking-widest text-gray-500 font-bold mb-1 mt-4">Staff</div>
                {['# logs', '# bo-tickets'].map((ch, i) => (
                  <div key={i} className="text-[11px] px-2 py-1.5 rounded-md text-gray-400 hover:text-gray-200 cursor-pointer transition-colors">
                    {ch}
                  </div>
                ))}
              </div>

              {/* Chat Area */}
              <div className="flex-1 bg-[#313338] p-4 flex flex-col gap-4 overflow-hidden relative">
                {/* Bot message - Match Embed */}
                <div className="flex gap-3">
                  <div className="w-9 h-9 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0 border border-emerald-500/30">
                    <Bot className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-sm font-semibold text-emerald-400">NSSA Bot</span>
                      <span className="text-[9px] bg-emerald-500/20 text-emerald-300 px-1.5 py-0.5 rounded font-bold uppercase">Bot</span>
                      <span className="text-[10px] text-gray-500">Hoje 19:45</span>
                    </div>
                    {/* Embed */}
                    <div className="bg-[#2b2d31] rounded-lg border-l-4 border-emerald-500 p-4 max-w-[280px]">
                      <div className="text-[10px] text-emerald-400 font-bold uppercase tracking-wider mb-2">⚔️ Nova Partida • 1v1 Mobile</div>
                      <div className="flex justify-between items-center mb-3">
                        <div className="flex flex-col items-center gap-1">
                          <div className="w-10 h-10 rounded-full bg-emerald-500/20 border-2 border-emerald-500/50 flex items-center justify-center">
                            <Swords className="w-5 h-5 text-emerald-400" />
                          </div>
                          <span className="text-[10px] text-white font-bold">xDark</span>
                        </div>
                        <div className="flex flex-col items-center">
                          <span className="text-gray-500 text-xs font-black italic">VS</span>
                          <span className="text-emerald-400 font-bold text-sm mt-1">R$ 50</span>
                        </div>
                        <div className="flex flex-col items-center gap-1">
                          <div className="w-10 h-10 rounded-full bg-emerald-500/20 border-2 border-emerald-500/50 flex items-center justify-center">
                            <Swords className="w-5 h-5 text-emerald-400" />
                          </div>
                          <span className="text-[10px] text-white font-bold">KillZz</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-[10px] text-gray-400 mb-3">
                        <span>🗺️ Gelo Infinito</span>
                        <span>•</span>
                        <span>🎮 Free Fire</span>
                      </div>
                      <div className="flex gap-2">
                        <button className="flex-1 py-1.5 rounded bg-emerald-500 text-black text-[10px] font-black uppercase tracking-wider">✅ Confirmar</button>
                        <button className="flex-1 py-1.5 rounded bg-white/10 text-white text-[10px] font-bold uppercase tracking-wider">❌ Cancelar</button>
                      </div>
                      <div className="mt-2 pt-2 border-t border-white/5">
                        <div className="flex items-center gap-1.5">
                          <Server className="w-3 h-3 text-gray-500" />
                          <span className="text-[9px] text-gray-500">ID: #4821 • Mediador: aguardando</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bot message - Victory */}
                <div className="flex gap-3">
                  <div className="w-9 h-9 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0 border border-emerald-500/30">
                    <Bot className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-sm font-semibold text-emerald-400">NSSA Bot</span>
                      <span className="text-[9px] bg-emerald-500/20 text-emerald-300 px-1.5 py-0.5 rounded font-bold uppercase">Bot</span>
                    </div>
                    <div className="bg-[#2b2d31] rounded-lg border-l-4 border-green-500 p-3 max-w-[280px]">
                      <div className="text-[10px] text-green-400 font-bold mb-1">🏆 Vitória Registrada!</div>
                      <div className="text-[11px] text-gray-300">
                        <span className="text-white font-bold">xDark</span> venceu e recebeu{' '}
                        <span className="text-emerald-400 font-bold">+R$ 50,00</span>
                      </div>
                      <div className="flex items-center gap-2 mt-2">
                        <Trophy className="w-3 h-3 text-amber-400" />
                        <span className="text-[10px] text-gray-500">Win Streak: 5 🔥</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Command input */}
                <div className="mt-auto bg-[#383a40] rounded-lg px-4 py-3 flex items-center gap-2">
                  <span className="text-gray-400 text-sm">+</span>
                  <span className="text-gray-500 text-sm">Mensagem em #apostas-1v1</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
