import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Smartphone, 
  Laptop, 
  Wind, 
  Refrigerator, 
  Tv, 
  WashingMachine,
  Headphones,
  Watch,
  Camera,
  Gamepad2,
  Monitor,
  ArrowLeft
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const categories = [
  { id: "celular", name: "Celulares", icon: Smartphone, color: "from-blue-500 to-cyan-500", description: "Compare smartphones de todas as marcas" },
  { id: "notebook", name: "Notebooks", icon: Laptop, color: "from-purple-500 to-pink-500", description: "Notebooks para trabalho, jogos e uso pessoal" },
  { id: "ar-condicionado", name: "Ar-Condicionado", icon: Wind, color: "from-cyan-500 to-teal-500", description: "Calcule a economia de energia na troca" },
  { id: "geladeira", name: "Geladeiras", icon: Refrigerator, color: "from-teal-500 to-emerald-500", description: "Geladeiras e freezers com análise de consumo" },
  { id: "tv", name: "TVs", icon: Tv, color: "from-orange-500 to-red-500", description: "Smart TVs de todos os tamanhos" },
  { id: "maquina-lavar", name: "Máquina de Lavar", icon: WashingMachine, color: "from-indigo-500 to-purple-500", description: "Lavadoras e lava e seca" },
  { id: "fone", name: "Fones de Ouvido", icon: Headphones, color: "from-pink-500 to-rose-500", description: "Fones in-ear, over-ear e mais" },
  { id: "smartwatch", name: "Smartwatches", icon: Watch, color: "from-amber-500 to-orange-500", description: "Relógios inteligentes para todos os perfis" },
  { id: "camera", name: "Câmeras", icon: Camera, color: "from-emerald-500 to-green-500", description: "Câmeras fotográficas e filmadoras" },
  { id: "videogame", name: "Videogames", icon: Gamepad2, color: "from-violet-500 to-purple-500", description: "Consoles e acessórios" },
  { id: "monitor", name: "Monitores", icon: Monitor, color: "from-sky-500 to-blue-500", description: "Monitores para trabalho e games" },
];

const Categorias = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Nossas <span className="text-gradient">Categorias</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Escolha a categoria do produto que você quer comparar e receba uma análise personalizada.
            </p>
          </motion.div>

          {/* Categories Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {categories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <Card 
                  variant="interactive" 
                  className="p-6 cursor-pointer h-full group"
                  onClick={() => navigate("/")}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                      <category.icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-1 group-hover:text-primary transition-colors">
                        {category.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {category.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-center"
          >
            <Link to="/">
              <Button variant="hero" size="lg" className="gap-2">
                <ArrowLeft className="w-5 h-5" />
                Voltar ao Início
              </Button>
            </Link>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Categorias;
