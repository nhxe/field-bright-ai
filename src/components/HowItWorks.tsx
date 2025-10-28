import { Card, CardContent } from "@/components/ui/card";
import { Satellite, Brain, TrendingUp } from "lucide-react";

export const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Scan via Satellite",
      description: "Collect free satellite images (Sentinel, Landsat)",
      icon: Satellite,
      color: "primary",
    },
    {
      number: "02",
      title: "Analyze with AI",
      description: "The model identifies crop type, area, and yield",
      icon: Brain,
      color: "secondary",
    },
    {
      number: "03",
      title: "Predict Market Price",
      description: "AI predicts market trends based on expected supply",
      icon: TrendingUp,
      color: "accent",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A simple three-step process that brings space technology to your farm
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <Card 
                key={index} 
                className="relative overflow-hidden border-2 hover:border-primary transition-all hover:shadow-xl group animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-8 space-y-6">
                  {/* Number badge */}
                  <div className="absolute top-4 right-4 text-6xl font-bold text-muted/20 group-hover:text-primary/20 transition-colors">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-full bg-${step.color}/10 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <step.icon className={`w-8 h-8 text-${step.color}`} />
                  </div>

                  {/* Content */}
                  <div className="space-y-3">
                    <h3 className="text-2xl font-semibold text-foreground">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Decorative line */}
                  <div className="h-1 w-16 bg-gradient-to-r from-primary to-accent rounded-full" />
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Connection lines for desktop */}
          <div className="hidden md:flex justify-center items-center gap-8 mt-8">
            <div className="flex-1 h-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
};
