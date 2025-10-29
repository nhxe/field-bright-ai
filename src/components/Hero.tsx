import { Button } from "@/components/ui/button";
import { Satellite, Sprout } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

export const Hero = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-primary/10 via-background to-background pt-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-secondary/10 rounded-full blur-2xl animate-float" style={{ animationDelay: "2s" }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-8 animate-fade-in">
          {/* Satellite icon with animation */}
          <div className="flex justify-center mb-6">
            <div className="relative">
              <Satellite className="w-16 h-16 text-primary animate-float" />
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
                <Sprout className="w-10 h-10 text-accent animate-grow" style={{ animationDelay: "0.5s" }} />
              </div>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            {t('heroTitle')}
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t('heroDescription')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105"
            >
              {t('exploreInsights')}
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => navigate('/login')}
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-8 py-6 text-lg rounded-xl transition-all hover:scale-105"
            >
              {t('learnMore')}
            </Button>
          </div>

          {/* Decorative wave */}
          <div className="pt-12">
            <svg className="w-full h-24 text-primary/20" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M0,50 Q300,0 600,50 T1200,50 L1200,120 L0,120 Z" fill="currentColor" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};
