import { useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import CategorySelection from "@/components/CategorySelection";
import ProductInput from "@/components/ProductInput";
import Questionnaire from "@/components/Questionnaire";
import EnergyCalculator, { EnergyData } from "@/components/EnergyCalculator";
import ResultDisplay from "@/components/ResultDisplay";
import ProgressSteps from "@/components/ProgressSteps";

type Step = "hero" | "category" | "products" | "questionnaire" | "energy" | "result";

// Categories that have energy consumption calculations
const energyCategories = ["ar-condicionado", "geladeira", "microondas", "tv"];

const Index = () => {
  const [step, setStep] = useState<Step>("hero");
  const [category, setCategory] = useState<string | null>(null);
  const [currentProduct, setCurrentProduct] = useState("");
  const [newProduct, setNewProduct] = useState("");
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [energyData, setEnergyData] = useState<EnergyData | null>(null);
  
  const comparisonRef = useRef<HTMLDivElement>(null);

  const stepOrder: Step[] = ["hero", "category", "products", "questionnaire", "energy", "result"];
  const currentStepIndex = stepOrder.indexOf(step);
  const showProgress = step !== "hero" && step !== "result";

  // Calculate progress steps (excluding energy for non-energy categories)
  const getProgressSteps = () => {
    if (category && !energyCategories.includes(category)) {
      return 3; // category, products, questionnaire
    }
    return 4; // category, products, questionnaire, energy
  };

  const getCurrentProgressIndex = () => {
    const baseIndex = currentStepIndex - 1; // Subtract 1 for hero
    if (category && !energyCategories.includes(category) && step === "result") {
      return 3;
    }
    return baseIndex;
  };

  const handleStart = () => {
    setStep("category");
    setTimeout(() => {
      comparisonRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const handleCategorySelect = (cat: string) => {
    setCategory(cat);
    setStep("products");
  };

  const handleProductsNext = () => setStep("questionnaire");

  const handleAnswer = (question: string, answer: string) => {
    setAnswers((prev) => ({ ...prev, [question]: answer }));
  };

  const handleQuestionnaireComplete = () => {
    if (category && energyCategories.includes(category)) {
      setStep("energy");
    } else {
      setStep("result");
    }
  };

  const handleEnergyComplete = (data: EnergyData) => {
    setEnergyData(data);
    setStep("result");
  };

  const handleEnergySkip = () => {
    setStep("result");
  };

  const handleBack = () => {
    const currentIndex = stepOrder.indexOf(step);
    if (currentIndex > 1) {
      // Skip energy step when going back if category doesn't need it
      if (step === "result" && category && !energyCategories.includes(category)) {
        setStep("questionnaire");
      } else {
        setStep(stepOrder[currentIndex - 1]);
      }
    } else if (currentIndex === 1) {
      setStep("hero");
    }
  };

  const handleRestart = () => {
    setStep("hero");
    setCategory(null);
    setCurrentProduct("");
    setNewProduct("");
    setAnswers({});
    setEnergyData(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      {step === "hero" && <Header />}
      {showProgress && (
        <ProgressSteps
          currentStep={getCurrentProgressIndex()}
          totalSteps={getProgressSteps()}
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
          {step === "hero" && (
            <>
              <HeroSection onStart={handleStart} />
              <div ref={comparisonRef}>
                <HowItWorksSection onStart={handleStart} />
              </div>
            </>
          )}

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

          {step === "questionnaire" && category && (
            <Questionnaire
              category={category}
              answers={answers}
              onAnswer={handleAnswer}
              onComplete={handleQuestionnaireComplete}
            />
          )}

          {step === "energy" && category && (
            <EnergyCalculator
              category={category}
              onComplete={handleEnergyComplete}
              onSkip={handleEnergySkip}
            />
          )}

          {step === "result" && category && (
            <ResultDisplay
              currentProduct={currentProduct}
              newProduct={newProduct}
              category={category}
              answers={answers}
              energyData={energyData}
              onRestart={handleRestart}
            />
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Index;