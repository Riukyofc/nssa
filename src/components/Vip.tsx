import { motion } from "motion/react";
import { Check, Infinity, ArrowRight, Sparkles } from "lucide-react";

const packages = [
  { name: "Starter", rooms: "100", price: "R$ 4,00", discount: null, popular: false },
  { name: "Basic", rooms: "500", price: "R$ 18,00", discount: "10% off", popular: false },
  { name: "Pro", rooms: "1.000", price: "R$ 32,00", discount: "20% off", popular: true },
  { name: "Elite", rooms: "5.000", price: "R$ 140,00", discount: "30% off", popular: false },
  { name: "Master", rooms: "10.000", price: "R$ 240,00", discount: "40% off", popular: false },
  { name: "Infinito", rooms: "∞", price: "R$ 300,00", discount: "/mês", popular: false, isInfinity: true }
];

export function Vip() {
  return (
    <section id="pacotes" className="py-32 relative overflow-hidden bg-[#020202]">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-500/8 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-emerald-500/8 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 backdrop-blur-sm mb-6"
          >
            <Sparkles className="w-3 h-3 text-emerald-400" />
            <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest">Pacotes de Salas</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-display font-bold leading-tight text-white mb-6"
          >
            Escale seu servidor com{' '}<br className="hidden md:block" />
            <span className="text-gradient">pacotes de salas</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-400 leading-relaxed"
          >
            Compre pacotes de salas com +comprar-salas. Pagamento via PIX com QR Code automático.
            Quanto maior o pacote, maior o desconto.
          </motion.p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className={`relative rounded-2xl p-6 flex flex-col items-center text-center border group cursor-pointer transition-all duration-500 ${
                pkg.popular
                  ? 'bg-emerald-500/10 border-emerald-500/40 shadow-[0_0_30px_rgba(16,185,129,0.15)]'
                  : 'bg-[#0a0a0a] border-white/[0.06] hover:border-emerald-500/30'
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-emerald-500 text-black text-[10px] font-black uppercase tracking-wider">
                  Popular
                </div>
              )}

              <h3 className="text-lg font-display font-bold text-white mb-2 mt-1">{pkg.name}</h3>

              <div className="flex items-center justify-center mb-3">
                {pkg.isInfinity ? (
                  <Infinity className="w-10 h-10 text-emerald-400" />
                ) : (
                  <span className="text-3xl font-display font-black text-emerald-400">{pkg.rooms}</span>
                )}
              </div>
              <span className="text-[10px] text-gray-500 uppercase tracking-wider mb-4">salas</span>

              <div className="text-xl font-bold text-white mb-1">{pkg.price}</div>
              {pkg.discount && (
                <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${
                  pkg.isInfinity
                    ? 'text-emerald-400 bg-emerald-500/10'
                    : 'text-emerald-400 bg-emerald-500/10'
                }`}>
                  {pkg.discount}
                </span>
              )}

              <div className="mt-auto pt-4 w-full">
                <a href="https://discord.gg/6vV6GJszww" target="_blank" rel="noopener noreferrer" className={`w-full flex items-center justify-center py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                  pkg.popular
                    ? 'bg-emerald-500 text-black hover:bg-emerald-400'
                    : 'bg-white/5 text-white border border-white/10 hover:bg-emerald-500/10 hover:border-emerald-500/30 hover:text-emerald-400'
                }`}>
                  Comprar
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Features below pricing */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {[
            "Pagamento via PIX com QR Code",
            "Salas criadas automaticamente",
            "Suporte confirma em minutos",
            "Compre múltiplos pacotes"
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/5">
              <div className="w-7 h-7 rounded-lg bg-emerald-500/15 border border-emerald-500/20 flex items-center justify-center shrink-0">
                <Check className="w-4 h-4 text-emerald-400" />
              </div>
              <span className="text-sm text-gray-300 font-medium">{item}</span>
            </div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="relative inline-flex group">
            <span className="absolute inset-0 rounded-full animate-pulse-ring bg-emerald-500/20" />
            <a href="https://discord.gg/6vV6GJszww" target="_blank" rel="noopener noreferrer" className="relative h-14 px-10 rounded-full bg-gradient-to-r from-emerald-500 to-green-500 text-black font-bold flex items-center justify-center gap-2 hover:brightness-110 transition-all animate-glow-pulse z-10">
              Começar com Starter — R$ 4,00
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
