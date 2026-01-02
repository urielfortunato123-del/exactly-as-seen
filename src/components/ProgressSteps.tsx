import { motion } from "framer-motion";
import { ChevronLeft, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProgressStepsProps {
  currentStep: number;
  totalSteps: number;
  onBack: () => void;
  onClose: () => void;
}

const stepLabels = ["Categoria", "Produtos", "Perfil", "Resultado"];

const ProgressSteps = ({ currentStep, totalSteps, onBack, onClose }: ProgressStepsProps) => {
  const progress = ((currentStep) / (totalSteps - 1)) * 100;

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 left-0 right-0 z-50 glass"
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between mb-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={onBack}
            disabled={currentStep === 0}
            className="gap-1"
          >
            <ChevronLeft className="w-4 h-4" />
            Voltar
          </Button>
          <span className="text-sm text-muted-foreground">
            Passo {currentStep + 1} de {totalSteps}
          </span>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="w-4 h-4" />
          </Button>
        </div>
        
        <div className="flex items-center gap-2">
          {stepLabels.map((label, index) => (
            <div key={label} className="flex-1">
              <div className="flex items-center gap-2">
                <div
                  className={`h-1 flex-1 rounded-full transition-all duration-500 ${
                    index <= currentStep ? "bg-primary" : "bg-secondary"
                  }`}
                />
              </div>
              <span
                className={`text-xs mt-1 block text-center transition-colors ${
                  index <= currentStep ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProgressSteps;