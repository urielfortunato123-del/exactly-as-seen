import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { ArrowRight, Package, ShoppingBag } from "lucide-react";

interface ProductInputProps {
  category: string;
  currentProduct: string;
  newProduct: string;
  onCurrentChange: (value: string) => void;
  onNewChange: (value: string) => void;
  onNext: () => void;
}

const getCategoryLabel = (category: string) => {
  const labels: Record<string, string> = {
    "celular": "celular",
    "ar-condicionado": "ar-condicionado",
    "geladeira": "geladeira",
    "tv": "TV",
    "fogao": "fogão",
    "microondas": "micro-ondas",
    "computador": "computador",
    "moveis": "móvel",
  };
  return labels[category] || "produto";
};

const ProductInput = ({ 
  category, 
  currentProduct, 
  newProduct, 
  onCurrentChange, 
  onNewChange, 
  onNext 
}: ProductInputProps) => {
  const categoryLabel = getCategoryLabel(category);
  const isValid = currentProduct.trim().length > 2 && newProduct.trim().length > 2;

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
            Quais produtos comparar?
          </h2>
          <p className="text-muted-foreground text-lg">
            Informe o {categoryLabel} que você tem e o que deseja comprar
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <Card variant="elevated" className="h-full">
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-2">
                  <Package className="w-6 h-6 text-muted-foreground" />
                </div>
                <CardTitle className="text-lg">Produto Atual</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Label htmlFor="current" className="text-muted-foreground">
                    Modelo do seu {categoryLabel} atual
                  </Label>
                  <Input
                    id="current"
                    placeholder={`Ex: iPhone 13 Pro, Samsung Galaxy S21...`}
                    value={currentProduct}
                    onChange={(e) => onCurrentChange(e.target.value)}
                  />
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <Card variant="elevated" className="h-full border-primary/20">
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-2">
                  <ShoppingBag className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Novo Produto</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Label htmlFor="new" className="text-muted-foreground">
                    Modelo que você quer comprar
                  </Label>
                  <Input
                    id="new"
                    placeholder={`Ex: iPhone 15 Pro Max, Galaxy S24...`}
                    value={newProduct}
                    onChange={(e) => onNewChange(e.target.value)}
                  />
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="flex justify-center mt-10"
        >
          <Button 
            variant="hero" 
            size="lg" 
            onClick={onNext}
            disabled={!isValid}
            className="gap-2"
          >
            Próximo: Seu Perfil
            <ArrowRight className="w-5 h-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductInput;