import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { ArrowRight } from "lucide-react";
import { getQuestionsForCategory, Question } from "@/data/categoryQuestions";

interface QuestionnaireProps {
  category: string;
  answers: Record<string, string>;
  onAnswer: (question: string, answer: string) => void;
  onComplete: () => void;
}

const getCategoryIcon = (category: string) => {
  const icons: Record<string, string> = {
    celular: "📱",
    "ar-condicionado": "❄️",
    geladeira: "🧊",
    tv: "📺",
    fogao: "🔥",
    microondas: "🍳",
    computador: "💻",
    moveis: "🛋️",
  };
  return icons[category] || "📦";
};

const Questionnaire = ({ category, answers, onAnswer, onComplete }: QuestionnaireProps) => {
  const questions = getQuestionsForCategory(category);
  const isComplete = questions.every((q) => answers[q.id]);

  return (
    <section className="py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-4xl mb-4 block">{getCategoryIcon(category)}</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Sobre seu uso
          </h2>
          <p className="text-foreground/70 text-lg">
            Responda para personalizar a análise da sua categoria
          </p>
        </motion.div>

        <div className="space-y-8">
          {questions.map((q: Question, qIndex: number) => (
            <motion.div
              key={q.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 * qIndex }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                  {qIndex + 1}
                </div>
                <Label className="text-lg font-medium">{q.question}</Label>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {q.options.map((option) => (
                  <Card
                    key={option.value}
                    variant={answers[q.id] === option.value ? "glow" : "interactive"}
                    className={`p-4 cursor-pointer transition-all ${
                      answers[q.id] === option.value ? "border-primary" : ""
                    }`}
                    onClick={() => onAnswer(q.id, option.value)}
                  >
                    <h4 className="font-semibold mb-1">{option.label}</h4>
                    <p className="text-xs text-muted-foreground">{option.description}</p>
                  </Card>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="flex justify-center mt-12"
        >
          <Button
            variant="hero"
            size="lg"
            onClick={onComplete}
            disabled={!isComplete}
            className="gap-2"
          >
            Ver Resultado
            <ArrowRight className="w-5 h-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Questionnaire;