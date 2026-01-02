// Price ranges by category and budget tier
export interface PriceRange {
  min: number;
  max: number;
  typical: number;
}

export interface CategoryPrices {
  economico: PriceRange;
  intermediario: PriceRange;
  premium: PriceRange;
}

export const categoryPriceRanges: Record<string, CategoryPrices> = {
  celular: {
    economico: { min: 800, max: 1500, typical: 1200 },
    intermediario: { min: 1500, max: 4000, typical: 2500 },
    premium: { min: 4000, max: 10000, typical: 6000 },
  },
  notebook: {
    economico: { min: 1800, max: 3000, typical: 2500 },
    intermediario: { min: 3000, max: 6000, typical: 4500 },
    premium: { min: 6000, max: 15000, typical: 9000 },
  },
  "ar-condicionado": {
    economico: { min: 1200, max: 2000, typical: 1600 },
    intermediario: { min: 2000, max: 3500, typical: 2800 },
    premium: { min: 3500, max: 7000, typical: 5000 },
  },
  geladeira: {
    economico: { min: 1500, max: 2500, typical: 2000 },
    intermediario: { min: 2500, max: 4500, typical: 3500 },
    premium: { min: 4500, max: 10000, typical: 6500 },
  },
  tv: {
    economico: { min: 1200, max: 2500, typical: 1800 },
    intermediario: { min: 2500, max: 5000, typical: 3500 },
    premium: { min: 5000, max: 15000, typical: 8000 },
  },
  "maquina-lavar": {
    economico: { min: 1200, max: 2000, typical: 1600 },
    intermediario: { min: 2000, max: 4000, typical: 3000 },
    premium: { min: 4000, max: 8000, typical: 5500 },
  },
  fone: {
    economico: { min: 100, max: 300, typical: 200 },
    intermediario: { min: 300, max: 1000, typical: 600 },
    premium: { min: 1000, max: 3500, typical: 2000 },
  },
  smartwatch: {
    economico: { min: 200, max: 500, typical: 350 },
    intermediario: { min: 500, max: 2000, typical: 1200 },
    premium: { min: 2000, max: 6000, typical: 3500 },
  },
  camera: {
    economico: { min: 1500, max: 3000, typical: 2200 },
    intermediario: { min: 3000, max: 8000, typical: 5000 },
    premium: { min: 8000, max: 25000, typical: 15000 },
  },
  videogame: {
    economico: { min: 1500, max: 2500, typical: 2000 },
    intermediario: { min: 2500, max: 4000, typical: 3200 },
    premium: { min: 4000, max: 7000, typical: 5000 },
  },
  monitor: {
    economico: { min: 600, max: 1000, typical: 800 },
    intermediario: { min: 1000, max: 3000, typical: 1800 },
    premium: { min: 3000, max: 8000, typical: 5000 },
  },
};

// Default prices for categories not explicitly defined
const defaultPrices: CategoryPrices = {
  economico: { min: 500, max: 1500, typical: 1000 },
  intermediario: { min: 1500, max: 4000, typical: 2500 },
  premium: { min: 4000, max: 10000, typical: 6000 },
};

export type BudgetTier = "economico" | "intermediario" | "premium";

export function getPriceRange(category: string, budget: BudgetTier): PriceRange {
  const categoryPrices = categoryPriceRanges[category] || defaultPrices;
  return categoryPrices[budget] || categoryPrices.intermediario;
}

export function formatPrice(value: number): string {
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

export function getPriceSuggestion(category: string, answers: Record<string, string>): {
  range: PriceRange;
  tier: BudgetTier;
  recommendation: string;
} {
  // Determine budget tier from answers
  const budgetAnswer = answers.budget || answers.energy_concern || "intermediario";
  
  let tier: BudgetTier;
  if (budgetAnswer === "economico" || budgetAnswer === "baixa") {
    tier = "economico";
  } else if (budgetAnswer === "premium" || budgetAnswer === "alta" || budgetAnswer === "aberto") {
    tier = "premium";
  } else {
    tier = "intermediario";
  }

  const range = getPriceRange(category, tier);

  // Generate recommendation based on usage intensity and other answers
  const usageIntensity = answers.usage || answers.usage_hours || "moderado";
  let recommendation: string;

  if (usageIntensity === "intenso" || usageIntensity === "muito" || usageIntensity === "profissional" || usageIntensity === "hardcore") {
    recommendation = "Para seu perfil de uso intenso, investir em modelos de maior qualidade tende a compensar a longo prazo.";
  } else if (usageIntensity === "basico" || usageIntensity === "leve" || usageIntensity === "casual" || usageIntensity === "pouco") {
    recommendation = "Seu perfil de uso permite economizar com modelos mais básicos sem perder qualidade perceptível.";
  } else {
    recommendation = "Modelos intermediários oferecem o melhor custo-benefício para seu perfil.";
  }

  return { range, tier, recommendation };
}
