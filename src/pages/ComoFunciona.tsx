import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Search, 
  ClipboardList, 
  Zap, 
  TrendingUp, 
  ArrowLeft,
  CheckCircle2,
  Target,
  DollarSign
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const steps = [
  {
    icon: Search,
    title: "1. Escolha a Categoria",
    description: "Selecione entre celulares, notebooks, TVs, eletrodomésticos e muito mais. Cada categoria tem perguntas personalizadas.",
  },
  {
    icon: ClipboardList,
    title: "2. Informe os Produtos",
    description: "Digite o nome do seu produto atual e do produto que deseja comprar para uma comparação precisa.",
  },
  {
    icon: Target,
    title: "3. Responda o Questionário",
    description: "Perguntas rápidas sobre seu perfil de uso, necessidades e orçamento para entender sua situação.",
  },
  {
    icon: Zap,
    title: "4. Calcule a Energia (opcional)",
    description: "Para eletrodomésticos, calcule a economia de energia entre os produtos.",
  },
  {
    icon: TrendingUp,
    title: "5. Receba sua Análise",
    description: "Veja uma pontuação personalizada, faixas de preço sugeridas e dicas para sua decisão.",
  },
];

const benefits = [
  "Análise personalizada baseada no seu perfil",
  "Faixas de preço sugeridas por categoria",
  "Cálculo de economia de energia",
  "Dicas práticas para economizar",
  "Completamente gratuito",
];

const ComoFunciona = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Como o <span className="text-gradient">CompraInteligente</span> Funciona
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Um processo simples e rápido para ajudar você a tomar decisões de compra mais conscientes.
            </p>
          </motion.div>

          {/* Steps */}
          <div className="space-y-6 mb-16">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card variant="elevated" className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center shrink-0">
                      <step.icon className="w-7 h-7 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mb-16"
          >
            <Card variant="gradient" className="p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <DollarSign className="w-6 h-6 text-primary" />
                Benefícios
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-center"
          >
            <Link to="/">
              <Button variant="hero" size="lg" className="gap-2">
                <ArrowLeft className="w-5 h-5" />
                Começar Agora
              </Button>
            </Link>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ComoFunciona;
