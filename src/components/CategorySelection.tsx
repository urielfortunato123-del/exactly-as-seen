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
  Sofa,
  WashingMachine,
  Headphones,
  Watch,
  Camera,
  Gamepad2,
  Monitor
} from "lucide-react";

interface CategorySelectionProps {
  onSelect: (category: string) => void;
  selectedCategory: string | null;
}

const categories = [
  { id: "celular", name: "Celulares", icon: Smartphone, description: "Smartphones e tablets", color: "from-pink-500 to-purple-600" },
  { id: "notebook", name: "Notebooks", icon: Laptop, description: "Notebooks e ultrabooks", color: "from-blue-500 to-cyan-500" },
  { id: "tv", name: "TVs", icon: Tv, description: "Smart TVs e monitores", color: "from-violet-500 to-purple-600" },
  { id: "ar-condicionado", name: "Ar-Condicionado", icon: Wind, description: "Climatizadores e splits", color: "from-cyan-400 to-blue-500" },
  { id: "geladeira", name: "Geladeiras", icon: Refrigerator, description: "Refrigeradores e freezers", color: "from-emerald-400 to-teal-500" },
  { id: "maquina-lavar", name: "Máq. de Lavar", icon: WashingMachine, description: "Lavadoras e secadoras", color: "from-blue-400 to-indigo-500" },
  { id: "fogao", name: "Fogões", icon: CookingPot, description: "Fogões e cooktops", color: "from-orange-400 to-red-500" },
  { id: "microondas", name: "Micro-ondas", icon: Microwave, description: "Micro-ondas e fornos", color: "from-amber-400 to-orange-500" },
  { id: "fone", name: "Fones", icon: Headphones, description: "Fones e headsets", color: "from-purple-400 to-pink-500" },
  { id: "smartwatch", name: "Smartwatches", icon: Watch, description: "Relógios inteligentes", color: "from-green-400 to-emerald-500" },
  { id: "camera", name: "Câmeras", icon: Camera, description: "Câmeras e filmadoras", color: "from-rose-400 to-pink-500" },
  { id: "videogame", name: "Video Games", icon: Gamepad2, description: "Consoles e acessórios", color: "from-indigo-400 to-purple-500" },
  { id: "monitor", name: "Monitores", icon: Monitor, description: "Monitores para PC", color: "from-slate-400 to-zinc-500" },
  { id: "moveis", name: "Móveis", icon: Sofa, description: "Móveis e decoração", color: "from-amber-500 to-yellow-600" },
];

const CategorySelection = ({ onSelect, selectedCategory }: CategorySelectionProps) => {
  return (
    <section className="py-12 px-4 min-h-screen flex items-center">
      <div className="max-w-5xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 border border-primary/20">
            Passo 1 de 4
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Qual categoria de <span className="text-gradient">produto</span>?
          </h2>
          <p className="text-muted-foreground text-lg">
            Selecione a categoria para começar sua análise
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4"
        >
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.05 * index }}
            >
              <Card
                variant={selectedCategory === category.id ? "glow" : "interactive"}
                className={`p-4 md:p-5 flex flex-col items-center text-center cursor-pointer group relative overflow-hidden ${
                  selectedCategory === category.id ? "border-primary ring-2 ring-primary/20" : ""
                }`}
                onClick={() => onSelect(category.id)}
              >
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${category.color}`} style={{ opacity: selectedCategory === category.id ? 0.15 : undefined }} />
                
                <div className={`w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center mb-3 transition-all duration-300 relative z-10 ${
                  selectedCategory === category.id 
                    ? `bg-gradient-to-br ${category.color} text-white shadow-lg` 
                    : "bg-secondary text-muted-foreground group-hover:scale-110"
                }`}>
                  <category.icon className="w-6 h-6 md:w-7 md:h-7" />
                </div>
                <h3 className="font-semibold text-sm md:text-base mb-0.5 relative z-10">{category.name}</h3>
                <p className="text-[10px] md:text-xs text-muted-foreground relative z-10 line-clamp-1">{category.description}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CategorySelection;