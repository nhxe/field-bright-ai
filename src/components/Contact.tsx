import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const Contact = () => {
  const { t } = useLanguage();
  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Let's Grow Smarter Together
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have questions? Want to learn more? We're here to help farmers succeed.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <Card className="border-2 hover:border-primary/50 transition-all hover:shadow-xl">
            <CardContent className="p-8 space-y-6">
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Name</label>
                  <Input 
                    placeholder="Your name" 
                    className="border-2 focus:border-primary transition-colors"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Email</label>
                  <Input 
                    type="email" 
                    placeholder="your@email.com" 
                    className="border-2 focus:border-primary transition-colors"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Message</label>
                  <Textarea 
                    placeholder="Tell us how we can help..." 
                    rows={5}
                    className="border-2 focus:border-primary transition-colors resize-none"
                  />
                </div>
              </div>
              <Button 
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold py-6 text-lg"
              >
                Send Message
              </Button>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="border-2 hover:border-primary/50 transition-all hover:shadow-lg animate-fade-in">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Email Us</h3>
                  <p className="text-muted-foreground">{t('supportEmail')}</p>
                  <p className="text-muted-foreground">{t('infoEmail')}</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-secondary/50 transition-all hover:shadow-lg animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <CardContent className="p-6 flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Call Us</h3>
                  <p className="text-muted-foreground">+1 (555) 123-4567</p>
                  <p className="text-sm text-muted-foreground">Mon-Fri 9am-6pm</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-accent/50 transition-all hover:shadow-lg animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <CardContent className="p-6 flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Visit Us</h3>
                  <p className="text-muted-foreground">
                    123 Innovation Drive<br />
                    AgriTech Park, CA 94000
                  </p>
                </div>
              </CardContent>
            </Card>

            <div className="bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 rounded-2xl p-8 text-center space-y-4">
              <h3 className="text-2xl font-bold text-foreground">
                Join Our Community
              </h3>
              <p className="text-muted-foreground">
                Connect with thousands of farmers using AI for smarter agriculture
              </p>
              <Button 
                variant="outline" 
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                Join Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
