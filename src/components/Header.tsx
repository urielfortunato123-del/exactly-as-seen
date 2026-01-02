import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 glass"
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">CI</span>
          </div>
          <span className="font-bold text-lg">
            Compra<span className="text-primary">Inteligente</span>
          </span>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Como Funciona
          </a>
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Categorias
          </a>
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Sobre
          </a>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;