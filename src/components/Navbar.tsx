import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useLanguage } from "@/contexts/LanguageContext";
import { Sprout } from "lucide-react";

export const Navbar = () => {
  const { language, setLanguage, t } = useLanguage();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Sprout className="w-8 h-8 text-primary" />
          <span className="text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            {t('appName')}
          </span>
        </div>

        <Select value={language} onValueChange={(val) => setLanguage(val as 'en' | 'hi' | 'kn')}>
          <SelectTrigger className="w-[140px] bg-card">
            <SelectValue />
          </SelectTrigger>
          <SelectContent className="bg-popover border-border z-50">
            <SelectItem value="en" className="cursor-pointer hover:bg-accent">
              🇬🇧 English
            </SelectItem>
            <SelectItem value="hi" className="cursor-pointer hover:bg-accent">
              🇮🇳 हिंदी
            </SelectItem>
            <SelectItem value="kn" className="cursor-pointer hover:bg-accent">
              🇮🇳 ಕನ್ನಡ
            </SelectItem>
          </SelectContent>
        </Select>
      </div>
    </nav>
  );
};
