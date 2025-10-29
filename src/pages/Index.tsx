import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { HowItWorks } from "@/components/HowItWorks";
import { Features } from "@/components/Features";
import { DashboardPreview } from "@/components/DashboardPreview";
import { Contact } from "@/components/Contact";
import { Navbar } from "@/components/Navbar";
import { useLanguage } from "@/contexts/LanguageContext";

const Index = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <HowItWorks />
      <Features />
      <DashboardPreview />
      <Contact />
      
      {/* Footer */}
      <footer className="bg-foreground text-background py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm opacity-80">
            {t('footer')}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
