import { Card, CardContent } from "@/components/ui/card";
import { Globe, Cloud, TrendingUp, Users } from "lucide-react";

export const Features = () => {
  const features = [
    {
      icon: Globe,
      title: "Free & Open Source",
      description: "Built entirely using open tools and public satellite data.",
      gradient: "from-primary to-primary/70",
    },
    {
      icon: Cloud,
      title: "Works in All Seasons",
      description: "Uses radar imagery to function even during monsoons and cloudy conditions.",
      gradient: "from-secondary to-secondary/70",
    },
    {
      icon: TrendingUp,
      title: "Price Prediction Intelligence",
      description: "Anticipates crop supply and predicts prices before the market reacts.",
      gradient: "from-accent to-accent/70",
    },
    {
      icon: Users,
      title: "Farmer-Centric Design",
      description: "Built to be simple, accessible, and multilingual.",
      gradient: "from-primary to-accent",
    },
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            What Makes AgriSense AI Unique
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Revolutionary features that put farmers first
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="group border-2 hover:border-primary/50 transition-all hover:shadow-xl hover:-translate-y-2 duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 space-y-4">
                {/* Icon with gradient background */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg`}>
                  <feature.icon className="w-7 h-7 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-foreground">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Radar animation visualization */}
        <div className="mt-16 flex justify-center">
          <div className="relative w-48 h-48">
            <div className="absolute inset-0 rounded-full border-4 border-primary/20" />
            <div className="absolute inset-4 rounded-full border-4 border-primary/30 animate-ping" />
            <div className="absolute inset-8 rounded-full border-4 border-primary/40" />
            <div className="absolute inset-0 flex items-center justify-center">
              <Cloud className="w-12 h-12 text-primary animate-float" />
            </div>
          </div>
        </div>

        <p className="text-center text-sm text-muted-foreground mt-8 italic">
          Radar waves scanning clouds — capturing data in any weather
        </p>
      </div>
    </section>
  );
};
