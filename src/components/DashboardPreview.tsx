import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, PieChart, TrendingUp, Map } from "lucide-react";

export const DashboardPreview = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Dashboard Preview
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From space to soil — real insights made simple
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Crop Heatmap */}
          <Card className="border-2 hover:border-primary/50 transition-all hover:shadow-xl animate-fade-in">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Map className="w-6 h-6 text-primary" />
                Crop Heatmap
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="aspect-video bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 rounded-lg relative overflow-hidden">
                {/* Simulated heatmap */}
                <div className="absolute inset-0 grid grid-cols-8 grid-rows-6 gap-1 p-2">
                  {Array.from({ length: 48 }).map((_, i) => (
                    <div
                      key={i}
                      className="rounded animate-pulse"
                      style={{
                        backgroundColor: `hsl(${145 + (i % 3) * 30}, ${35 + (i % 4) * 10}%, ${50 + (i % 5) * 10}%)`,
                        animationDelay: `${i * 0.05}s`,
                      }}
                    />
                  ))}
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                District-level crop distribution across regions
              </p>
            </CardContent>
          </Card>

          {/* Price Prediction Chart */}
          <Card className="border-2 hover:border-secondary/50 transition-all hover:shadow-xl animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <TrendingUp className="w-6 h-6 text-secondary" />
                Price Prediction
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="aspect-video bg-card rounded-lg p-4 relative">
                {/* Simulated line chart */}
                <svg className="w-full h-full" viewBox="0 0 400 200">
                  <defs>
                    <linearGradient id="priceGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="hsl(var(--accent))" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  {/* Grid lines */}
                  {[0, 50, 100, 150, 200].map((y) => (
                    <line key={y} x1="0" y1={y} x2="400" y2={y} stroke="hsl(var(--border))" strokeWidth="1" />
                  ))}
                  {/* Actual price line */}
                  <polyline
                    points="0,150 50,140 100,145 150,130 200,135 250,120 300,125 350,115 400,110"
                    fill="none"
                    stroke="hsl(var(--secondary))"
                    strokeWidth="3"
                  />
                  {/* Predicted price line */}
                  <polyline
                    points="200,135 250,125 300,130 350,120 400,115"
                    fill="url(#priceGradient)"
                    stroke="hsl(var(--accent))"
                    strokeWidth="3"
                    strokeDasharray="5,5"
                  />
                </svg>
              </div>
              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-1 bg-secondary rounded" />
                  <span className="text-muted-foreground">Actual Price</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-1 bg-accent rounded border-dashed border" />
                  <span className="text-muted-foreground">Predicted Price</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Crop Distribution */}
          <Card className="border-2 hover:border-accent/50 transition-all hover:shadow-xl animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <PieChart className="w-6 h-6 text-accent" />
                Crop Distribution
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="aspect-square max-w-xs mx-auto relative">
                {/* Simulated pie chart */}
                <svg className="w-full h-full" viewBox="0 0 200 200">
                  <circle cx="100" cy="100" r="80" fill="hsl(var(--primary))" />
                  <path d="M 100,100 L 100,20 A 80,80 0 0,1 160,70 Z" fill="hsl(var(--secondary))" />
                  <path d="M 100,100 L 160,70 A 80,80 0 0,1 170,140 Z" fill="hsl(var(--accent))" />
                  <circle cx="100" cy="100" r="50" fill="hsl(var(--background))" />
                </svg>
              </div>
              <div className="grid grid-cols-3 gap-2 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-primary" />
                  <span className="text-muted-foreground">Wheat</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-secondary" />
                  <span className="text-muted-foreground">Rice</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-accent" />
                  <span className="text-muted-foreground">Corn</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Supply Forecast */}
          <Card className="border-2 hover:border-primary/50 transition-all hover:shadow-xl animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <BarChart3 className="w-6 h-6 text-primary" />
                Supply Forecast
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="aspect-video bg-card rounded-lg p-4">
                {/* Simulated bar chart */}
                <div className="h-full flex items-end justify-around gap-2">
                  {[65, 80, 55, 90, 70, 85, 75, 95].map((height, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center gap-1">
                      <div
                        className="w-full bg-gradient-to-t from-primary to-accent rounded-t animate-grow"
                        style={{
                          height: `${height}%`,
                          animationDelay: `${i * 0.1}s`,
                        }}
                      />
                      <span className="text-xs text-muted-foreground">Q{i + 1}</span>
                    </div>
                  ))}
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Quarterly supply forecast based on cultivation data
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
