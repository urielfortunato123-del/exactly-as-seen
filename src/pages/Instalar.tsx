import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Download, 
  Smartphone, 
  Share, 
  PlusSquare,
  ArrowLeft,
  Check,
  Apple,
  Chrome
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

const Instalar = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [isInstalled, setIsInstalled] = useState(false);
  const [isIOS, setIsIOS] = useState(false);

  useEffect(() => {
    // Check if already installed
    if (window.matchMedia("(display-mode: standalone)").matches) {
      setIsInstalled(true);
    }

    // Check if iOS
    const isIOSDevice = /iPad|iPhone|iPod/.test(navigator.userAgent);
    setIsIOS(isIOSDevice);

    // Listen for install prompt
    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
    };

    window.addEventListener("beforeinstallprompt", handler);

    return () => {
      window.removeEventListener("beforeinstallprompt", handler);
    };
  }, []);

  const handleInstall = async () => {
    if (deferredPrompt) {
      await deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === "accepted") {
        setIsInstalled(true);
      }
      setDeferredPrompt(null);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16 px-4">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <div className="w-20 h-20 rounded-2xl bg-gradient-primary flex items-center justify-center mx-auto mb-6">
              <Download className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Instale o <span className="text-gradient">App</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Tenha o CompraInteligente sempre à mão no seu celular!
            </p>
          </motion.div>

          {isInstalled ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <Card variant="gradient" className="p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4">
                  <Check className="w-8 h-8 text-green-400" />
                </div>
                <h2 className="text-2xl font-bold mb-2">App Instalado!</h2>
                <p className="text-muted-foreground mb-6">
                  O CompraInteligente já está instalado no seu dispositivo.
                </p>
                <Link to="/">
                  <Button variant="hero">Ir para o App</Button>
                </Link>
              </Card>
            </motion.div>
          ) : (
            <>
              {/* Android / Chrome */}
              {deferredPrompt && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-8"
                >
                  <Card variant="glow" className="p-6 text-center">
                    <Chrome className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h2 className="text-xl font-bold mb-2">Instalar Agora</h2>
                    <p className="text-muted-foreground mb-4">
                      Clique no botão abaixo para instalar o app.
                    </p>
                    <Button variant="hero" size="lg" onClick={handleInstall} className="gap-2">
                      <Download className="w-5 h-5" />
                      Instalar App
                    </Button>
                  </Card>
                </motion.div>
              )}

              {/* iOS Instructions */}
              {isIOS && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-8"
                >
                  <Card variant="gradient" className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Apple className="w-8 h-8 text-foreground" />
                      <h2 className="text-xl font-bold">iPhone / iPad</h2>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                          <span className="text-sm font-bold text-primary">1</span>
                        </div>
                        <div>
                          <p className="font-medium">Toque no botão Compartilhar</p>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Share className="w-4 h-4" />
                            <span>No Safari, na parte inferior da tela</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                          <span className="text-sm font-bold text-primary">2</span>
                        </div>
                        <div>
                          <p className="font-medium">Selecione "Adicionar à Tela de Início"</p>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <PlusSquare className="w-4 h-4" />
                            <span>Role para baixo se necessário</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                          <span className="text-sm font-bold text-primary">3</span>
                        </div>
                        <div>
                          <p className="font-medium">Toque em "Adicionar"</p>
                          <p className="text-sm text-muted-foreground">Pronto! O app aparecerá na sua tela inicial</p>
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              )}

              {/* Android Manual Instructions */}
              {!isIOS && !deferredPrompt && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-8"
                >
                  <Card variant="gradient" className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Smartphone className="w-8 h-8 text-foreground" />
                      <h2 className="text-xl font-bold">Android</h2>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                          <span className="text-sm font-bold text-primary">1</span>
                        </div>
                        <p className="font-medium">Abra o menu do navegador (3 pontos)</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                          <span className="text-sm font-bold text-primary">2</span>
                        </div>
                        <p className="font-medium">Selecione "Instalar app" ou "Adicionar à tela inicial"</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                          <span className="text-sm font-bold text-primary">3</span>
                        </div>
                        <p className="font-medium">Confirme a instalação</p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              )}

              {/* Benefits */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mb-12"
              >
                <h3 className="text-lg font-bold mb-4 text-center">Por que instalar?</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    "Acesso rápido",
                    "Funciona offline",
                    "Carrega mais rápido",
                    "Sem ocupar memória"
                  ].map((benefit) => (
                    <Card key={benefit} variant="elevated" className="p-4 text-center">
                      <Check className="w-5 h-5 text-primary mx-auto mb-2" />
                      <p className="text-sm font-medium">{benefit}</p>
                    </Card>
                  ))}
                </div>
              </motion.div>
            </>
          )}

          {/* Back */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-center"
          >
            <Link to="/">
              <Button variant="outline" size="lg" className="gap-2">
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

export default Instalar;
