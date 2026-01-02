import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Heart, 
  Target, 
  Lightbulb, 
  ArrowLeft,
  Leaf,
  Users,
  Code2
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Sobre = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Sobre o <span className="text-gradient">CompraInteligente</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Uma ferramenta criada para ajudar você a tomar decisões de compra mais conscientes e econômicas.
            </p>
          </motion.div>

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-8"
          >
            <Card variant="gradient" className="p-8">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center shrink-0">
                  <Target className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-3">Nossa Missão</h2>
                  <p className="text-foreground/80 leading-relaxed">
                    Ajudar consumidores a fazerem escolhas mais inteligentes, evitando compras por impulso 
                    e garantindo que cada investimento faça sentido para o seu perfil de uso e orçamento.
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Values */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Card variant="elevated" className="p-6 h-full text-center">
                <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center mx-auto mb-4">
                  <Leaf className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="font-bold mb-2">Sustentabilidade</h3>
                <p className="text-sm text-muted-foreground">
                  Incentivamos escolhas que considerem eficiência energética e durabilidade.
                </p>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Card variant="elevated" className="p-6 h-full text-center">
                <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="font-bold mb-2">Educação</h3>
                <p className="text-sm text-muted-foreground">
                  Fornecemos informações para você entender o que realmente precisa.
                </p>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Card variant="elevated" className="p-6 h-full text-center">
                <div className="w-12 h-12 rounded-xl bg-pink-500/20 flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-pink-400" />
                </div>
                <h3 className="font-bold mb-2">Acessibilidade</h3>
                <p className="text-sm text-muted-foreground">
                  Ferramenta 100% gratuita e fácil de usar para todos.
                </p>
              </Card>
            </motion.div>
          </div>

          {/* Developer Credit */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mb-12"
          >
            <Card variant="glass" className="p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center mx-auto mb-4">
                <Code2 className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold mb-2">Desenvolvedor</h2>
              <p className="text-xl text-primary font-semibold mb-2">
                Uriel da Fonseca Fortunato
              </p>
              <p className="text-muted-foreground flex items-center justify-center gap-2">
                Feito com <Heart className="w-4 h-4 text-red-500 fill-red-500" /> no Brasil
              </p>
            </Card>
          </motion.div>

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

export default Sobre;
