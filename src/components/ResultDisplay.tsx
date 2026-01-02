import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
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
  Leaf,
  Target,
  ThumbsUp
} from "lucide-react";
import { EnergyData } from "./EnergyCalculator";
import { getQuestionsForCategory } from "@/data/categoryQuestions";

interface ResultProps {
  currentProduct: string;
  newProduct: string;
  category: string;
  answers: Record<string, string>;
  energyData: EnergyData | null;
  onRestart: () => void;
}

const ResultDisplay = ({ currentProduct, newProduct, category, answers, energyData, onRestart }: ResultProps) => {
  const questions = getQuestionsForCategory(category);
  
  // Calculate score based on answers and category
  const calculateScore = () => {
    let score = 50;
    const answerValues = Object.values(answers);
    
    // Add points based on intensity of needs
    answerValues.forEach((answer) => {
      if (answer === "intenso" || answer === "muito" || answer === "alta" || answer === "premium" || answer === "grande") {
        score += 12;
      } else if (answer === "moderado" || answer === "media" || answer === "intermediario" || answer === "medio") {
        score += 6;
      } else if (answer === "urgente" || answer === "completo") {
        score += 8;
      }
    });

    // Energy savings bonus
    if (energyData && energyData.monthlySavings > 0) {
      if (energyData.yearlySavings > 200) score += 15;
      else if (energyData.yearlySavings > 100) score += 10;
      else score += 5;
    }
    
    return Math.min(100, Math.max(0, score));
  };

  const score = calculateScore();
  
  const getRecommendation = () => {
    if (score >= 70) return { 
      type: "positive", 
      label: "Vale a pena trocar!", 
      message: "Baseado no seu perfil, a troca trará benefícios significativos.",
      color: "text-green-400",
      bgColor: "bg-green-400/20"
    };
    if (score >= 45) return { 
      type: "neutral", 
      label: "Depende de você", 
      message: "A troca pode valer se o preço estiver bom e você puder esperar uma promoção.",
      color: "text-yellow-400",
      bgColor: "bg-yellow-400/20"
    };
    return { 
      type: "negative", 
      label: "Talvez não valha a pena", 
      message: "Seu produto atual ainda atende bem suas necessidades. Considere esperar.",
      color: "text-red-400",
      bgColor: "bg-red-400/20"
    };
  };

  const recommendation = getRecommendation();

  const getIcon = () => {
    if (recommendation.type === "positive") return CheckCircle2;
    if (recommendation.type === "neutral") return AlertCircle;
    return XCircle;
  };

  const Icon = getIcon();

  // Generate insights based on category and answers
  const generateInsights = () => {
    const insights = [];

    // Performance insight
    const performanceAnswer = answers.usage || answers.usage_hours;
    insights.push({
      icon: TrendingUp,
      title: "Ganho de desempenho",
      value: performanceAnswer === "intenso" || performanceAnswer === "muito" ? "Alto impacto" : 
             performanceAnswer === "moderado" ? "Impacto moderado" : "Baixo impacto",
      description: "Baseado no seu perfil de uso diário",
      positive: performanceAnswer === "intenso" || performanceAnswer === "muito"
    });

    // Energy insight (if applicable)
    if (energyData) {
      const savingsPerYear = energyData.yearlySavings;
      insights.push({
        icon: Zap,
        title: "Economia de energia",
        value: savingsPerYear > 0 ? `R$ ${savingsPerYear.toFixed(0)}/ano` : "Sem economia",
        description: savingsPerYear > 0 ? "Economia estimada na conta de luz" : "O novo consome igual ou mais",
        positive: savingsPerYear > 0
      });
    }

    // Timing insight
    const timelineAnswer = answers.timeline || answers.urgency;
    insights.push({
      icon: Clock,
      title: "Momento da compra",
      value: timelineAnswer === "urgente" ? "Compre agora" : 
             timelineAnswer === "planejado" ? "Pode planejar" : "Sem pressa",
      description: "Considere aguardar promoções se não for urgente",
      positive: timelineAnswer !== "urgente"
    });

    // Budget insight
    const budgetAnswer = answers.budget || answers.energy_concern;
    insights.push({
      icon: DollarSign,
      title: "Custo-benefício",
      value: budgetAnswer === "aberto" || budgetAnswer === "premium" ? "Invista no melhor" :
             budgetAnswer === "flexivel" || budgetAnswer === "intermediario" ? "Bom equilíbrio" : "Priorize preço",
      description: "Recomendação baseada no seu orçamento",
      positive: true
    });

    return insights;
  };

  const insights = generateInsights();

  // Generate specific tips
  const getTips = () => {
    const tips = [];
    
    if (score >= 70) {
      tips.push({ icon: Target, text: "Pesquise preços em diferentes lojas antes de comprar" });
      tips.push({ icon: ThumbsUp, text: "Considere vender seu produto atual para compensar parte do investimento" });
    } else if (score >= 45) {
      tips.push({ icon: Clock, text: "Aguarde Black Friday ou promoções sazonais" });
      tips.push({ icon: DollarSign, text: "Compare se o investimento se paga ao longo do tempo" });
    } else {
      tips.push({ icon: Leaf, text: "Mantenha seu produto atual e economize recursos" });
      tips.push({ icon: Target, text: "Reavalie em 6 meses se suas necessidades mudarem" });
    }
    
    return tips;
  };

  const tips = getTips();

  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Result Header */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className={`inline-flex items-center justify-center w-24 h-24 rounded-full mb-6 ${recommendation.bgColor}`}>
            <Icon className={`w-12 h-12 ${recommendation.color}`} />
          </div>
          
          <h2 className={`text-3xl md:text-5xl font-bold mb-4 ${recommendation.color}`}>
            {recommendation.label}
          </h2>
          
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto mb-2">
            {recommendation.message}
          </p>
          
          <p className="text-muted-foreground">
            <span className="font-medium text-foreground">{currentProduct}</span> → <span className="font-medium text-foreground">{newProduct}</span>
          </p>
        </motion.div>

        {/* Score Circle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12"
        >
          <Card variant="glow" className="p-8 max-w-md mx-auto">
            <div className="flex flex-col items-center">
              <span className="text-sm text-muted-foreground mb-2">Pontuação de Decisão</span>
              <div className="relative w-40 h-40 mb-4">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="42"
                    fill="none"
                    stroke="hsl(var(--secondary))"
                    strokeWidth="8"
                  />
                  <motion.circle
                    cx="50"
                    cy="50"
                    r="42"
                    fill="none"
                    stroke="hsl(var(--primary))"
                    strokeWidth="8"
                    strokeLinecap="round"
                    strokeDasharray={`${score * 2.64} 264`}
                    initial={{ strokeDasharray: "0 264" }}
                    animate={{ strokeDasharray: `${score * 2.64} 264` }}
                    transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
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
              <p className="text-center text-muted-foreground text-sm">
                Quanto maior, mais vantajosa é a troca
              </p>
            </div>
          </Card>
        </motion.div>

        {/* Energy Savings (if available) */}
        {energyData && energyData.monthlySavings !== 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-12"
          >
            <Card variant="elevated" className={`p-6 ${energyData.monthlySavings > 0 ? 'border-green-500/30' : 'border-red-500/30'}`}>
              <div className="flex items-center gap-4">
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${energyData.monthlySavings > 0 ? 'bg-green-500/20' : 'bg-red-500/20'}`}>
                  <Zap className={`w-7 h-7 ${energyData.monthlySavings > 0 ? 'text-green-400' : 'text-red-400'}`} />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg mb-1">
                    {energyData.monthlySavings > 0 ? 'Economia de Energia' : 'Atenção: Consumo Maior'}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {energyData.monthlySavings > 0 
                      ? `Você economizará R$ ${energyData.monthlySavings.toFixed(2)}/mês ou R$ ${energyData.yearlySavings.toFixed(2)}/ano`
                      : `O novo produto consome R$ ${Math.abs(energyData.monthlySavings).toFixed(2)}/mês a mais`
                    }
                  </p>
                </div>
                <div className="text-right">
                  <span className={`text-2xl font-bold ${energyData.monthlySavings > 0 ? 'text-green-400' : 'text-red-400'}`}>
                    {energyData.monthlySavings > 0 ? '+' : '-'}R$ {Math.abs(energyData.yearlySavings).toFixed(0)}
                  </span>
                  <p className="text-xs text-muted-foreground">por ano</p>
                </div>
              </div>
            </Card>
          </motion.div>
        )}

        {/* Insights Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-12"
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
                <Card variant="elevated" className="p-5 h-full">
                  <div className="flex items-start gap-4">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${insight.positive ? 'bg-primary/20' : 'bg-secondary'}`}>
                      <insight.icon className={`w-5 h-5 ${insight.positive ? 'text-primary' : 'text-muted-foreground'}`} />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{insight.title}</h4>
                      <p className="text-primary font-medium text-sm mb-1">{insight.value}</p>
                      <p className="text-xs text-muted-foreground">{insight.description}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tips */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mb-12"
        >
          <Card variant="glass" className="p-6">
            <h3 className="font-bold mb-4 flex items-center gap-2">
              <ThumbsUp className="w-5 h-5 text-primary" />
              Nossas Dicas
            </h3>
            <div className="space-y-3">
              {tips.map((tip, index) => (
                <div key={index} className="flex items-center gap-3">
                  <tip.icon className="w-4 h-4 text-muted-foreground shrink-0" />
                  <span className="text-sm text-foreground/80">{tip.text}</span>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button variant="outline" size="lg" onClick={onRestart} className="gap-2">
            <RotateCcw className="w-4 h-4" />
            Nova Comparação
          </Button>
          <Button variant="hero" size="lg" className="gap-2">
            <DollarSign className="w-4 h-4" />
            Pesquisar Preços
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ResultDisplay;