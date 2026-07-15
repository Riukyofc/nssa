import { motion } from "motion/react";
import { Crosshair, Shield, Flame, Target, Activity } from "lucide-react";

const games = [
  {
    name: "Valorant",
    icon: Crosshair,
    theme: "rose",
    bg: "from-rose-500/10 to-[#0a0a0a]",
    border: "border-rose-500/20",
    hoverBorder: "group-hover:border-rose-500/50",
    text: "text-rose-400",
    glow: "bg-rose-500/20",
    leagues: "Challengers • Game Changers • Open Quals",
    stats: "1.2K+ partidas rastreadas",
    description: "Foco total em ligas de acesso, torneios regionais e off-season, onde as linhas das casas costumam errar mais."
  },
  {
    name: "Counter-Strike 2",
    icon: Shield,
    theme: "amber",
    bg: "from-amber-500/10 to-[#0a0a0a]",
    border: "border-amber-500/20",
    hoverBorder: "group-hover:border-amber-500/50",
    text: "text-amber-400",
    glow: "bg-amber-500/20",
    leagues: "Academy • ESL Challenger • ESEA",
    stats: "890+ partidas rastreadas",
    description: "Monitoramento constante do cenário T2/T3, campeonatos Academy e qualificatórias abertas para picks de alto valor."
  },
  {
    name: "Free Fire",
    icon: Flame,
    theme: "orange",
    bg: "from-orange-500/10 to-[#0a0a0a]",
    border: "border-orange-500/20",
    hoverBorder: "group-hover:border-orange-500/50",
    text: "text-orange-400",
    glow: "bg-orange-500/20",
    leagues: "NFA • Liga Independente • Cups",
    stats: "650+ partidas rastreadas",
    description: "Análise profunda da NFA, campeonatos independentes e ligas da comunidade com radar de oportunidades ao vivo."
  }
];

export function Games() {
  return (
    <section id="jogos" className="py-32 relative overflow-hidden bg-[#050505]">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#10b98108_1px,transparent_1px),linear-gradient(to_bottom,#10b98108_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col gap-4 mb-16 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/5 backdrop-blur-sm w-fit"
          >
            <Target className="w-3 h-3 text-emerald-400" />
            <span className="text-[10px] font-bold text-emerald-300 uppercase tracking-widest">Nicho Exclusivo</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-bold tracking-tight text-white"
          >
            Foco cirúrgico no <span className="text-gradient">T2 e T3</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg leading-relaxed"
          >
            Nós sabemos que o verdadeiro green está nas ligas menores. 
            Por isso, cobrimos os torneios e ligas de acesso que as casas demoram para ajustar,
            entregando odds desreguladas direto no seu painel.
          </motion.p>
        </div>

        {/* Game Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {games.map((game, i) => (
            <motion.div
              key={game.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, ease: "easeOut", duration: 0.5 }}
              whileHover={{ y: -10, rotateX: 2, rotateY: -2, transition: { duration: 0.4 } }}
              className={`relative group rounded-3xl p-8 pb-10 min-h-[380px] flex flex-col border bg-gradient-to-b ${game.bg} ${game.border} ${game.hoverBorder} overflow-hidden cursor-pointer bg-[#0a0a0a] transition-colors duration-500`}
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Hover Glow Blob */}
              <div className={`absolute top-0 right-0 w-56 h-56 blur-[100px] rounded-full ${game.glow} opacity-0 group-hover:opacity-60 transition-opacity duration-700 pointer-events-none`} />
              
              {/* Scan Line on hover */}
              <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 animate-scan-line pointer-events-none" />
              
              {/* Icon Container */}
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center bg-white/5 border border-white/10 mb-6 ${game.text} backdrop-blur-md group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-black/50 transition-all duration-500`}>
                <game.icon className="w-8 h-8" />
              </div>
              
              <h3 className="text-3xl font-display font-bold mb-4 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-colors">
                {game.name}
              </h3>
              
              {/* League Badges */}
              <div className="flex flex-wrap gap-2 mb-4">
                {game.leagues.split(' • ').map(league => {
                  // Generate custom classes based on theme for the pill
                  const pillColors = {
                    rose: "bg-rose-500/10 text-rose-400 border-rose-500/10",
                    amber: "bg-amber-500/10 text-amber-400 border-amber-500/10",
                    orange: "bg-orange-500/10 text-orange-400 border-orange-500/10"
                  }[game.theme];
                  
                  return (
                    <span key={league} className={`px-2.5 py-1 rounded-full text-[11px] font-medium border ${pillColors}`}>
                      {league}
                    </span>
                  );
                })}
              </div>
              
              <p className="text-sm text-gray-400 leading-relaxed font-medium mb-8 flex-grow">
                {game.description}
              </p>

              {/* Stats Line */}
              <div className={`flex items-center gap-2 mt-auto pt-4 border-t border-white/5 ${game.text}`}>
                <Activity className="w-4 h-4" />
                <span className="text-sm font-medium">{game.stats}</span>
              </div>

              {/* Decorative line */}
              <div className="absolute bottom-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
