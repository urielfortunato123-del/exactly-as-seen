import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CategorySelection from "@/components/CategorySelection";
import ProductInput from "@/components/ProductInput";
import Questionnaire from "@/components/Questionnaire";
import ResultDisplay from "@/components/ResultDisplay";
import ProgressSteps from "@/components/ProgressSteps";

type Step = "hero" | "category" | "products" | "questionnaire" | "result";

const Index = () => {
  const [step, setStep] = useState<Step>("hero");
  const [category, setCategory] = useState<string | null>(null);
  const [currentProduct, setCurrentProduct] = useState("");
  const [newProduct, setNewProduct] = useState("");
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const stepOrder: Step[] = ["hero", "category", "products", "questionnaire", "result"];
  const currentStepIndex = stepOrder.indexOf(step);
  const showProgress = step !== "hero";

  const handleStart = () => setStep("category");

  const handleCategorySelect = (cat: string) => {
    setCategory(cat);
    setStep("products");
  };

  const handleProductsNext = () => setStep("questionnaire");

  const handleAnswer = (question: string, answer: string) => {
    setAnswers((prev) => ({ ...prev, [question]: answer }));
  };

  const handleQuestionnaireComplete = () => setStep("result");

  const handleBack = () => {
    const currentIndex = stepOrder.indexOf(step);
    if (currentIndex > 0) {
      setStep(stepOrder[currentIndex - 1]);
    }
  };

  const handleRestart = () => {
    setStep("hero");
    setCategory(null);
    setCurrentProduct("");
    setNewProduct("");
    setAnswers({});
  };

  return (
    <div className="min-h-screen bg-background">
      {step === "hero" && <Header />}
      {showProgress && (
        <ProgressSteps
          currentStep={currentStepIndex - 1}
          totalSteps={4}
          onBack={handleBack}
          onClose={handleRestart}
        />
      )}

      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          className={showProgress ? "pt-24" : ""}
        >
          {step === "hero" && <HeroSection onStart={handleStart} />}

          {step === "category" && (
            <CategorySelection
              onSelect={handleCategorySelect}
              selectedCategory={category}
            />
          )}

          {step === "products" && category && (
            <ProductInput
              category={category}
              currentProduct={currentProduct}
              newProduct={newProduct}
              onCurrentChange={setCurrentProduct}
              onNewChange={setNewProduct}
              onNext={handleProductsNext}
            />
          )}

          {step === "questionnaire" && (
            <Questionnaire
              answers={answers}
              onAnswer={handleAnswer}
              onComplete={handleQuestionnaireComplete}
            />
          )}

          {step === "result" && category && (
            <ResultDisplay
              currentProduct={currentProduct}
              newProduct={newProduct}
              category={category}
              answers={answers}
              onRestart={handleRestart}
            />
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Index;