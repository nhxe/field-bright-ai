import { Satellite, Brain, User } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const About = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6 mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            What is AgriSense AI?
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            AgriSense AI is a platform that uses freely available satellite images and machine learning to detect which crops are grown, estimate cultivation areas, and forecast supply-demand balance to predict prices before harvest.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Unlike other agri-data services, AgriSense AI uses open-source technology and radar-based data — meaning it even works during cloudy monsoon seasons when most satellites can't capture clear images.
          </p>
        </div>

        {/* Visual journey illustration */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-5xl mx-auto mb-12">
          <Card className="flex-1 border-2 border-primary/20 hover:border-primary transition-all hover:shadow-lg">
            <CardContent className="p-8 text-center space-y-4">
              <div className="w-20 h-20 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                <Satellite className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Satellite Data</h3>
              <p className="text-muted-foreground">Free satellite images from space</p>
            </CardContent>
          </Card>

          <div className="hidden md:block text-4xl text-primary animate-pulse">→</div>

          <Card className="flex-1 border-2 border-secondary/20 hover:border-secondary transition-all hover:shadow-lg">
            <CardContent className="p-8 text-center space-y-4">
              <div className="w-20 h-20 mx-auto bg-secondary/10 rounded-full flex items-center justify-center">
                <Brain className="w-10 h-10 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">AI Analysis</h3>
              <p className="text-muted-foreground">Machine learning identifies crops</p>
            </CardContent>
          </Card>

          <div className="hidden md:block text-4xl text-primary animate-pulse">→</div>

          <Card className="flex-1 border-2 border-accent/20 hover:border-accent transition-all hover:shadow-lg">
            <CardContent className="p-8 text-center space-y-4">
              <div className="w-20 h-20 mx-auto bg-accent/10 rounded-full flex items-center justify-center">
                <User className="w-10 h-10 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Farmer Insights</h3>
              <p className="text-muted-foreground">Actionable predictions for farmers</p>
            </CardContent>
          </Card>
        </div>

        {/* Quote */}
        <div className="max-w-2xl mx-auto text-center">
          <blockquote className="text-2xl font-medium text-primary italic border-l-4 border-accent pl-6 py-4">
            "We believe every farmer deserves access to data that can change their future."
          </blockquote>
        </div>
      </div>
    </section>
  );
};
