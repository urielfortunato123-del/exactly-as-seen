import { Link } from "react-router-dom";
import { Heart, Code2 } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border/50 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">CI</span>
            </div>
            <span className="font-bold text-lg">
              Compra<span className="text-primary">Inteligente</span>
            </span>
          </div>

          {/* Navigation */}
          <nav className="flex items-center gap-6">
            <Link 
              to="/como-funciona" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Como Funciona
            </Link>
            <Link 
              to="/categorias" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Categorias
            </Link>
            <Link 
              to="/sobre" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Sobre
            </Link>
          </nav>

          {/* Developer Credit */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Code2 className="w-4 h-4" />
            <span>Desenvolvido por</span>
            <span className="text-primary font-medium">Uriel da Fonseca Fortunato</span>
            <Heart className="w-3 h-3 text-red-500 fill-red-500" />
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-border/30 text-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} CompraInteligente. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
