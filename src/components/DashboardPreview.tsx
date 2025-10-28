import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, PieChart as PieChartIcon, TrendingUp, Map } from "lucide-react";
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

// Sample data
const priceData = [
  { month: "Jan", actual: 45, predicted: 45 },
  { month: "Feb", actual: 48, predicted: 47 },
  { month: "Mar", actual: 52, predicted: 51 },
  { month: "Apr", actual: 49, predicted: 50 },
  { month: "May", actual: 55, predicted: 54 },
  { month: "Jun", actual: 58, predicted: 59 },
  { month: "Jul", actual: null, predicted: 62 },
  { month: "Aug", actual: null, predicted: 65 },
];

const cropDistribution = [
  { name: "Wheat", value: 45, color: "hsl(var(--primary))" },
  { name: "Rice", value: 30, color: "hsl(var(--secondary))" },
  { name: "Corn", value: 15, color: "hsl(var(--accent))" },
  { name: "Others", value: 10, color: "hsl(var(--muted-foreground))" },
];

const supplyForecast = [
  { quarter: "Q1", supply: 6500, demand: 6000 },
  { quarter: "Q2", supply: 8000, demand: 7500 },
  { quarter: "Q3", supply: 5500, demand: 6500 },
  { quarter: "Q4", supply: 9000, demand: 8500 },
  { quarter: "Q1'25", supply: 7000, demand: 7200 },
  { quarter: "Q2'25", supply: 8500, demand: 8000 },
];

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
              <ResponsiveContainer width="100%" height={250}>
                <LineChart data={priceData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
                  <YAxis stroke="hsl(var(--muted-foreground))" label={{ value: '₹/Quintal', angle: -90, position: 'insideLeft' }} />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'hsl(var(--card))', 
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px'
                    }}
                  />
                  <Legend />
                  <Line 
                    type="monotone" 
                    dataKey="actual" 
                    stroke="hsl(var(--secondary))" 
                    strokeWidth={3}
                    dot={{ fill: 'hsl(var(--secondary))', r: 4 }}
                    name="Actual Price"
                  />
                  <Line 
                    type="monotone" 
                    dataKey="predicted" 
                    stroke="hsl(var(--accent))" 
                    strokeWidth={3}
                    strokeDasharray="5 5"
                    dot={{ fill: 'hsl(var(--accent))', r: 4 }}
                    name="Predicted Price"
                  />
                </LineChart>
              </ResponsiveContainer>
              <p className="text-sm text-muted-foreground text-center">
                Predicted vs Actual market prices (₹ per quintal)
              </p>
            </CardContent>
          </Card>

          {/* Crop Distribution */}
          <Card className="border-2 hover:border-accent/50 transition-all hover:shadow-xl animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <PieChartIcon className="w-6 h-6 text-accent" />
                Crop Distribution
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={cropDistribution}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    outerRadius={100}
                    innerRadius={60}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {cropDistribution.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'hsl(var(--card))', 
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px'
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
              <p className="text-sm text-muted-foreground text-center">
                Regional crop distribution by area (in %)
              </p>
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
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={supplyForecast}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="quarter" stroke="hsl(var(--muted-foreground))" />
                  <YAxis stroke="hsl(var(--muted-foreground))" label={{ value: 'Tonnes (000s)', angle: -90, position: 'insideLeft' }} />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'hsl(var(--card))', 
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px'
                    }}
                  />
                  <Legend />
                  <Bar dataKey="supply" fill="hsl(var(--primary))" name="Supply" radius={[8, 8, 0, 0]} />
                  <Bar dataKey="demand" fill="hsl(var(--accent))" name="Demand" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
              <p className="text-sm text-muted-foreground text-center">
                Quarterly supply vs demand forecast (in thousands of tonnes)
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
