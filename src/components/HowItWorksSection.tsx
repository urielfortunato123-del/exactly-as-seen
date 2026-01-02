import { motion } from "framer-motion";
import { ArrowRight, Search, ClipboardList, BarChart3, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HowItWorksSectionProps {
  onStart: () => void;
}

const steps = [
  {
    icon: Search,
    title: "1. Escolha a Categoria",
    description: "Selecione o tipo de produto que deseja comparar: celular, eletrodoméstico, eletrônico ou móvel.",
  },
  {
    icon: ClipboardList,
    title: "2. Informe os Produtos",
    description: "Diga qual produto você tem atualmente e qual está pensando em comprar.",
  },
  {
    icon: BarChart3,
    title: "3. Responda o Questionário",
    description: "Perguntas rápidas sobre seu perfil de uso, prioridades e orçamento.",
  },
  {
    icon: Zap,
    title: "4. Receba a Análise",
    description: "Veja a pontuação de decisão, economia de energia e recomendações personalizadas.",
  },
];

const HowItWorksSection = ({ onStart }: HowItWorksSectionProps) => {
  return (
    <section className="py-20 px-4 bg-gradient-card">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 border border-primary/20">
            Simples e Rápido
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Como Funciona
          </h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            Em poucos minutos, descubra se vale a pena trocar seu produto
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 * index }}
              className="relative"
            >
              <div className="bg-card border border-border rounded-xl p-6 h-full hover:border-primary/30 transition-colors">
                <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mb-4">
                  <step.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                  <ArrowRight className="w-6 h-6 text-border" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center"
        >
          <Button variant="hero" size="lg" onClick={onStart} className="gap-2">
            Começar Agora
            <ArrowRight className="w-5 h-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksSection;