import { motion } from "motion/react";
import { Swords, Zap, Shield, Wallet, LayoutDashboard, Globe, Diamond } from "lucide-react";

const features = [
  {
    title: "Sistema de Apostas",
    description: "Crie partidas 1v1 a 4v4 com filas interativas, slots por modo (Gelo, Normal, Ump) e embeds atualizados em tempo real. Comandos rápidos como +gp e /apostas.",
    icon: Swords,
    color: "from-emerald-500/20 to-transparent",
    tint: "text-emerald-400",
    border: "group-hover:border-emerald-500/30",
    bgIcon: "bg-emerald-500/10 border-emerald-500/20",
    shadow: "group-hover:shadow-[0_0_20px_rgba(16,185,129,0.3)]"
  },
  {
    title: "Salas Automáticas",
    description: "Fila completa → cobra da carteira → cria canal privado com ID/senha → timer de 5min ou todos digitam 'go' e inicia na hora. Recriação com taxa.",
    icon: Zap,
    color: "from-teal-500/20 to-transparent",
    tint: "text-teal-400",
    border: "group-hover:border-teal-500/30",
    bgIcon: "bg-teal-500/10 border-teal-500/20",
    shadow: "group-hover:shadow-[0_0_20px_rgba(20,184,166,0.3)]"
  },
  {
    title: "Mediadores & B.O.",
    description: "Sistema completo de mediadores com fila, PIX integrado e Boletim de Ocorrência com prints. Staff analisa e aprova/rejeita com motivo.",
    icon: Shield,
    color: "from-green-500/20 to-transparent",
    tint: "text-green-400",
    border: "group-hover:border-green-500/30",
    bgIcon: "bg-green-500/10 border-green-500/20",
    shadow: "group-hover:shadow-[0_0_20px_rgba(34,197,94,0.3)]"
  },
  {
    title: "Carteira & Moedas",
    description: "Saldo, transferência, extrato, loja interna, caixas, roleta e QR Code PIX. Economia completa dentro do servidor com codiguins resgatáveis.",
    icon: Wallet,
    color: "from-lime-500/20 to-transparent",
    tint: "text-lime-400",
    border: "group-hover:border-lime-500/30",
    bgIcon: "bg-lime-500/10 border-lime-500/20",
    shadow: "group-hover:shadow-[0_0_20px_rgba(132,204,22,0.3)]"
  },
  {
    title: "Painéis Interativos",
    description: "Painéis com botões para Jogador, Mediador, Staff, Gerente e Dono. Tudo clicável, zero digitação. Perfil, ranking, histórico e configurações.",
    icon: LayoutDashboard,
    color: "from-emerald-300/20 to-transparent",
    tint: "text-emerald-300",
    border: "group-hover:border-emerald-400/30",
    bgIcon: "bg-emerald-400/10 border-emerald-400/20",
    shadow: "group-hover:shadow-[0_0_20px_rgba(52,211,153,0.3)]"
  },
  {
    title: "Sites Exclusivos",
    description: "Dashboard web para a org gerenciar apostas + landing page personalizada para vender seus serviços de tips com a sua marca.",
    icon: Globe,
    color: "from-green-300/20 to-transparent",
    tint: "text-green-300",
    border: "group-hover:border-green-400/30",
    bgIcon: "bg-green-400/10 border-green-400/20",
    shadow: "group-hover:shadow-[0_0_20px_rgba(74,222,128,0.3)]"
  }
];

export function Features() {
  return (
    <section id="recursos" className="py-32 relative bg-[#020202]">
      <div className="absolute inset-0 nssa-grid-bg opacity-30 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/5 backdrop-blur-sm mb-6"
          >
            <Diamond className="w-3 h-3 text-emerald-400" />
            <span className="text-[10px] font-bold text-emerald-300 uppercase tracking-widest">Recursos do Bot</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-bold mb-6 tracking-tight text-white"
          >
            Tudo que sua <span className="text-emerald-400">Org</span> precisa.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg leading-relaxed"
          >
            Mais de 80 comandos, painéis interativos e automações que transformam
            seu servidor Discord numa máquina de apostas profissional.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5, ease: "easeOut" }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className={`bg-[#0a0a0a] rounded-3xl p-8 relative overflow-hidden group cursor-pointer border-glow-card border border-white/[0.06] ${feat.border} transition-colors duration-500`}
            >
              <div className={`absolute inset-0 bg-gradient-to-b ${feat.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />
              <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-transparent via-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 animate-scan-line pointer-events-none" />

              <div className="relative z-10 h-full flex flex-col">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 bg-black/50 border ${feat.bgIcon} ${feat.tint} group-hover:scale-110 ${feat.shadow} transition-all duration-500`}>
                  <feat.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold font-display mb-3 text-white">{feat.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">{feat.description}</p>
                <div className="absolute bottom-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-white/5 to-transparent group-hover:via-emerald-500/40 transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
