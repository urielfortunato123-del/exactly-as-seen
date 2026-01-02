import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, DollarSign } from "lucide-react";
import { useState } from "react";

interface EnergyCalculatorProps {
  category: string;
  onComplete: (data: EnergyData) => void;
  onSkip: () => void;
}

export interface EnergyData {
  currentWatts: number;
  newWatts: number;
  hoursPerDay: number;
  kwhPrice: number;
  currentMonthlyCost: number;
  newMonthlyCost: number;
  monthlySavings: number;
  yearlySavings: number;
}

const categoryLabels: Record<string, { power: string; unit: string }> = {
  "ar-condicionado": { power: "BTUs", unit: "BTU" },
  geladeira: { power: "Consumo (kWh/mês)", unit: "kWh/mês" },
  microondas: { power: "Potência (W)", unit: "W" },
  fogao: { power: "Potência (W)", unit: "W" },
  tv: { power: "Consumo (W)", unit: "W" },
};

const EnergyCalculator = ({ category, onComplete, onSkip }: EnergyCalculatorProps) => {
  const [currentWatts, setCurrentWatts] = useState<string>("");
  const [newWatts, setNewWatts] = useState<string>("");
  const [hoursPerDay, setHoursPerDay] = useState<string>("8");
  const [kwhPrice, setKwhPrice] = useState<string>("0.75");

  const labels = categoryLabels[category] || { power: "Potência (W)", unit: "W" };
  const isGeladeira = category === "geladeira";

  const calculateEnergy = () => {
    const current = parseFloat(currentWatts) || 0;
    const newVal = parseFloat(newWatts) || 0;
    const hours = parseFloat(hoursPerDay) || 8;
    const price = parseFloat(kwhPrice) || 0.75;

    let currentMonthlyCost: number;
    let newMonthlyCost: number;

    if (isGeladeira) {
      // For fridges, the value is already in kWh/month
      currentMonthlyCost = current * price;
      newMonthlyCost = newVal * price;
    } else if (category === "ar-condicionado") {
      // Convert BTUs to approximate watts (BTU/h ÷ 3.41 = W)
      const currentW = current / 3.41;
      const newW = newVal / 3.41;
      currentMonthlyCost = (currentW * hours * 30) / 1000 * price;
      newMonthlyCost = (newW * hours * 30) / 1000 * price;
    } else {
      // Standard watts calculation
      currentMonthlyCost = (current * hours * 30) / 1000 * price;
      newMonthlyCost = (newVal * hours * 30) / 1000 * price;
    }

    const monthlySavings = currentMonthlyCost - newMonthlyCost;
    const yearlySavings = monthlySavings * 12;

    const data: EnergyData = {
      currentWatts: current,
      newWatts: newVal,
      hoursPerDay: hours,
      kwhPrice: price,
      currentMonthlyCost,
      newMonthlyCost,
      monthlySavings,
      yearlySavings,
    };

    onComplete(data);
  };

  const isValid = currentWatts && newWatts;

  return (
    <section className="py-16 px-4">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center mx-auto mb-4">
            <Zap className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Calcular Consumo de Energia
          </h2>
          <p className="text-foreground/70 text-lg">
            Descubra quanto você pode economizar na conta de luz
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card variant="elevated" className="p-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <CardHeader className="p-0">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <span className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center text-sm">📦</span>
                    Produto Atual
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <Label htmlFor="currentWatts" className="text-muted-foreground text-sm">
                    {labels.power}
                  </Label>
                  <Input
                    id="currentWatts"
                    type="number"
                    placeholder={`Ex: ${category === "ar-condicionado" ? "9000" : category === "geladeira" ? "35" : "1000"}`}
                    value={currentWatts}
                    onChange={(e) => setCurrentWatts(e.target.value)}
                    className="mt-1"
                  />
                </CardContent>
              </div>

              <div className="space-y-4">
                <CardHeader className="p-0">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <span className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-sm">🆕</span>
                    Novo Produto
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <Label htmlFor="newWatts" className="text-muted-foreground text-sm">
                    {labels.power}
                  </Label>
                  <Input
                    id="newWatts"
                    type="number"
                    placeholder={`Ex: ${category === "ar-condicionado" ? "12000" : category === "geladeira" ? "25" : "800"}`}
                    value={newWatts}
                    onChange={(e) => setNewWatts(e.target.value)}
                    className="mt-1"
                  />
                </CardContent>
              </div>
            </div>

            {!isGeladeira && (
              <div className="mt-6">
                <Label htmlFor="hours" className="text-muted-foreground text-sm">
                  Horas de uso por dia
                </Label>
                <Input
                  id="hours"
                  type="number"
                  placeholder="8"
                  value={hoursPerDay}
                  onChange={(e) => setHoursPerDay(e.target.value)}
                  className="mt-1"
                />
              </div>
            )}

            <div className="mt-6">
              <Label htmlFor="price" className="text-muted-foreground text-sm flex items-center gap-2">
                <DollarSign className="w-4 h-4" />
                Preço do kWh na sua região (R$)
              </Label>
              <Input
                id="price"
                type="number"
                step="0.01"
                placeholder="0.75"
                value={kwhPrice}
                onChange={(e) => setKwhPrice(e.target.value)}
                className="mt-1"
              />
              <p className="text-xs text-muted-foreground mt-1">
                Consulte sua conta de luz. Média Brasil: R$ 0,70 a R$ 0,90
              </p>
            </div>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mt-10"
        >
          <Button variant="outline" size="lg" onClick={onSkip}>
            Pular esta etapa
          </Button>
          <Button
            variant="hero"
            size="lg"
            onClick={calculateEnergy}
            disabled={!isValid}
            className="gap-2"
          >
            Calcular e Continuar
            <ArrowRight className="w-5 h-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default EnergyCalculator;