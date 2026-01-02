import { motion } from "framer-motion";
import { Zap, TrendingUp, Calculator, Shield, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  onStart: () => void;
}

const HeroSection = ({ onStart }: HeroSectionProps) => {
  const features = [
    { icon: Calculator, text: "Custo total calculado", color: "from-purple-500 to-pink-500" },
    { icon: TrendingUp, text: "Análise personalizada", color: "from-cyan-500 to-blue-500" },
    { icon: Shield, text: "Decisão consciente", color: "from-green-500 to-emerald-500" },
    { icon: Zap, text: "Economia de energia", color: "from-yellow-500 to-orange-500" },
  ];

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-4 py-20">
      {/* Background effects */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Animated orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent/15 rounded-full blur-[100px] animate-pulse-slow" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-glow/10 rounded-full blur-[150px] animate-pulse-slow" style={{ animationDelay: "4s" }} />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
      
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20 backdrop-blur-sm">
            <Sparkles className="w-4 h-4" />
            Consultor Inteligente de Compras
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight tracking-tight"
        >
          A troca <span className="text-gradient">realmente</span><br />
          <span className="text-gradient-secondary">vale a pena</span>?
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          Compare seu produto atual com o que você quer comprar. 
          Receba uma análise completa baseada no seu perfil de uso, 
          custo de energia e necessidades reais.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <Button variant="hero" size="xl" onClick={onStart} className="group">
            Começar Comparação
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button variant="outline" size="xl" className="backdrop-blur-sm">
            Como Funciona
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.text}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
              className="group"
            >
              <div className="flex flex-col items-center gap-3 p-5 rounded-2xl glass hover:bg-card/60 transition-all duration-300 border border-border/30 hover:border-primary/30">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <span className="text-sm text-foreground/80 text-center font-medium">{feature.text}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;