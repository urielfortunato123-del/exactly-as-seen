import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { ArrowRight, User, Briefcase, Clock, Wallet } from "lucide-react";

interface QuestionnaireProps {
  answers: Record<string, string>;
  onAnswer: (question: string, answer: string) => void;
  onComplete: () => void;
}

const questions = [
  {
    id: "usage",
    icon: User,
    question: "Qual é o seu perfil de uso?",
    options: [
      { value: "leve", label: "Leve", description: "Uso básico, ocasional" },
      { value: "moderado", label: "Moderado", description: "Uso diário regular" },
      { value: "intenso", label: "Intenso", description: "Uso profissional/intensivo" },
    ],
  },
  {
    id: "priority",
    icon: Briefcase,
    question: "O que é mais importante para você?",
    options: [
      { value: "desempenho", label: "Desempenho", description: "Velocidade e potência" },
      { value: "durabilidade", label: "Durabilidade", description: "Vida útil longa" },
      { value: "economia", label: "Economia", description: "Menor custo total" },
    ],
  },
  {
    id: "timeline",
    icon: Clock,
    question: "Qual a urgência da troca?",
    options: [
      { value: "urgente", label: "Urgente", description: "Preciso trocar agora" },
      { value: "planejado", label: "Planejado", description: "Nos próximos meses" },
      { value: "pesquisa", label: "Pesquisando", description: "Sem pressa, só analisando" },
    ],
  },
  {
    id: "budget",
    icon: Wallet,
    question: "Como está seu orçamento?",
    options: [
      { value: "limitado", label: "Limitado", description: "Preço é prioridade" },
      { value: "flexivel", label: "Flexível", description: "Posso investir mais se valer" },
      { value: "aberto", label: "Aberto", description: "Busco o melhor, sem limite" },
    ],
  },
];

const Questionnaire = ({ answers, onAnswer, onComplete }: QuestionnaireProps) => {
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Entenda seu perfil
          </h2>
          <p className="text-muted-foreground text-lg">
            Responda algumas perguntas para personalizar a análise
          </p>
        </motion.div>

        <div className="space-y-8">
          {questions.map((q, qIndex) => (
            <motion.div
              key={q.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 * qIndex }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                  <q.icon className="w-5 h-5 text-primary" />
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