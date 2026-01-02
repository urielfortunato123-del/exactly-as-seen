import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { 
  Smartphone, 
  Wind, 
  Refrigerator, 
  Tv, 
  CookingPot, 
  Microwave,
  Laptop,
  Sofa
} from "lucide-react";

interface CategorySelectionProps {
  onSelect: (category: string) => void;
  selectedCategory: string | null;
}

const categories = [
  { id: "celular", name: "Celulares", icon: Smartphone, description: "Smartphones e tablets" },
  { id: "ar-condicionado", name: "Ar-Condicionado", icon: Wind, description: "Climatizadores e splits" },
  { id: "geladeira", name: "Geladeiras", icon: Refrigerator, description: "Refrigeradores e freezers" },
  { id: "tv", name: "TVs", icon: Tv, description: "Smart TVs e monitores" },
  { id: "fogao", name: "Fogões", icon: CookingPot, description: "Fogões e cooktops" },
  { id: "microondas", name: "Micro-ondas", icon: Microwave, description: "Micro-ondas e fornos" },
  { id: "computador", name: "Computadores", icon: Laptop, description: "Notebooks e desktops" },
  { id: "moveis", name: "Móveis", icon: Sofa, description: "Móveis e decoração" },
];

const CategorySelection = ({ onSelect, selectedCategory }: CategorySelectionProps) => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Qual categoria de produto?
          </h2>
          <p className="text-muted-foreground text-lg">
            Selecione a categoria do produto que deseja comparar
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.1 * index }}
            >
              <Card
                variant={selectedCategory === category.id ? "glow" : "interactive"}
                className={`p-6 flex flex-col items-center text-center cursor-pointer group ${
                  selectedCategory === category.id ? "border-primary" : ""
                }`}
                onClick={() => onSelect(category.id)}
              >
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 ${
                  selectedCategory === category.id 
                    ? "bg-primary text-primary-foreground" 
                    : "bg-secondary text-muted-foreground group-hover:bg-primary/20 group-hover:text-primary"
                }`}>
                  <category.icon className="w-7 h-7" />
                </div>
                <h3 className="font-semibold mb-1">{category.name}</h3>
                <p className="text-xs text-muted-foreground">{category.description}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CategorySelection;