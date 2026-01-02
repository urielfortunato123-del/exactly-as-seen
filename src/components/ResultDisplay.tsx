import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  CheckCircle2, 
  XCircle, 
  AlertCircle, 
  Zap, 
  TrendingUp, 
  Clock, 
  DollarSign,
  RotateCcw,
  ArrowRight
} from "lucide-react";

interface ResultProps {
  currentProduct: string;
  newProduct: string;
  category: string;
  answers: Record<string, string>;
  onRestart: () => void;
}

const ResultDisplay = ({ currentProduct, newProduct, category, answers, onRestart }: ResultProps) => {
  // Simulated analysis based on user answers
  const calculateScore = () => {
    let score = 50;
    
    if (answers.usage === "intenso") score += 20;
    else if (answers.usage === "moderado") score += 10;
    
    if (answers.priority === "desempenho") score += 15;
    else if (answers.priority === "economia") score -= 5;
    
    if (answers.timeline === "urgente") score += 10;
    else if (answers.timeline === "pesquisa") score -= 10;
    
    if (answers.budget === "aberto") score += 10;
    else if (answers.budget === "limitado") score -= 10;
    
    return Math.min(100, Math.max(0, score));
  };

  const score = calculateScore();
  
  const getRecommendation = () => {
    if (score >= 70) return { type: "positive", label: "Vale a pena trocar!", color: "text-success" };
    if (score >= 40) return { type: "neutral", label: "Depende de você", color: "text-warning" };
    return { type: "negative", label: "Talvez não valha a pena", color: "text-destructive" };
  };

  const recommendation = getRecommendation();

  const getIcon = () => {
    if (recommendation.type === "positive") return CheckCircle2;
    if (recommendation.type === "neutral") return AlertCircle;
    return XCircle;
  };

  const Icon = getIcon();

  const insights = [
    {
      icon: TrendingUp,
      title: "Ganho de desempenho",
      value: answers.usage === "intenso" ? "Alto" : answers.usage === "moderado" ? "Médio" : "Baixo",
      description: "Baseado no seu perfil de uso"
    },
    {
      icon: Zap,
      title: "Impacto energético",
      value: category === "ar-condicionado" || category === "geladeira" ? "Significativo" : "Moderado",
      description: "Economia estimada de energia"
    },
    {
      icon: Clock,
      title: "Momento da compra",
      value: answers.timeline === "planejado" ? "Ideal" : answers.timeline === "pesquisa" ? "Pode esperar" : "Agora",
      description: "Considerando ciclos de preço"
    },
    {
      icon: DollarSign,
      title: "Custo-benefício",
      value: answers.budget === "flexivel" ? "Favorável" : answers.budget === "aberto" ? "Excelente" : "Avaliar",
      description: "Relação investimento x retorno"
    }
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className={`inline-flex items-center justify-center w-24 h-24 rounded-full mb-6 ${
            recommendation.type === "positive" ? "bg-success/20" :
            recommendation.type === "neutral" ? "bg-warning/20" : "bg-destructive/20"
          }`}>
            <Icon className={`w-12 h-12 ${recommendation.color}`} />
          </div>
          
          <h2 className={`text-3xl md:text-5xl font-bold mb-4 ${recommendation.color}`}>
            {recommendation.label}
          </h2>
          
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Com base na sua análise de <span className="text-foreground font-medium">{currentProduct}</span> vs{" "}
            <span className="text-foreground font-medium">{newProduct}</span>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12"
        >
          <Card variant="glow" className="p-8">
            <div className="flex flex-col items-center">
              <span className="text-sm text-muted-foreground mb-2">Pontuação de Decisão</span>
              <div className="relative w-48 h-48 mb-4">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="hsl(var(--secondary))"
                    strokeWidth="8"
                  />
                  <motion.circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="hsl(var(--primary))"
                    strokeWidth="8"
                    strokeLinecap="round"
                    strokeDasharray={`${score * 2.83} 283`}
                    initial={{ strokeDasharray: "0 283" }}
                    animate={{ strokeDasharray: `${score * 2.83} 283` }}
                    transition={{ duration: 1, delay: 0.5 }}
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.span
                    className="text-5xl font-bold"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                  >
                    {score}
                  </motion.span>
                </div>
              </div>
              <p className="text-center text-muted-foreground max-w-md">
                Quanto maior a pontuação, mais vantajosa é a troca considerando seu perfil
              </p>
            </div>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3 className="text-xl font-bold mb-6 text-center">Análise Detalhada</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {insights.map((insight, index) => (
              <motion.div
                key={insight.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
              >
                <Card variant="elevated" className="p-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center shrink-0">
                      <insight.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{insight.title}</h4>
                      <p className="text-primary font-medium mb-1">{insight.value}</p>
                      <p className="text-xs text-muted-foreground">{insight.description}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mt-12"
        >
          <Button variant="outline" size="lg" onClick={onRestart} className="gap-2">
            <RotateCcw className="w-4 h-4" />
            Nova Comparação
          </Button>
          <Button variant="hero" size="lg" className="gap-2">
            Ver Preços Atuais
            <ArrowRight className="w-4 h-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ResultDisplay;