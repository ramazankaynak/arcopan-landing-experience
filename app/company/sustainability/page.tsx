import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Leaf, Recycle, Zap, Droplets, Wind, Sun, Factory, TreePine } from "lucide-react"

export const metadata: Metadata = {
  title: "Sustainability | ARCOPAN Environmental Commitment",
  description: "Learn about ARCOPAN's commitment to sustainability, eco-friendly products, and environmental initiatives in the cold storage industry.",
}

const initiatives = [
  {
    icon: Zap,
    title: "Energy Efficiency",
    description: "Our insulated panels achieve thermal conductivity as low as 0.022 W/mK, reducing energy consumption by up to 40% compared to traditional solutions.",
    metric: "40%",
    metricLabel: "Energy Savings",
  },
  {
    icon: Recycle,
    title: "Recyclable Materials",
    description: "We use materials that can be recycled at end of life. Our steel facings are 100% recyclable and our foam cores are increasingly sourced from recycled content.",
    metric: "85%",
    metricLabel: "Recyclable Content",
  },
  {
    icon: Droplets,
    title: "Water Conservation",
    description: "Our manufacturing processes incorporate closed-loop water systems, reducing freshwater consumption by 60% in our production facilities.",
    metric: "60%",
    metricLabel: "Water Reduction",
  },
  {
    icon: Wind,
    title: "Low-GWP Refrigerants",
    description: "We design systems compatible with natural and low-GWP refrigerants like CO2, ammonia, and propane, reducing climate impact.",
    metric: "90%",
    metricLabel: "GWP Reduction",
  },
]

const goals = [
  {
    year: "2025",
    title: "Carbon Neutral Manufacturing",
    description: "Achieve carbon neutrality in all manufacturing operations through renewable energy and offsets.",
    progress: 75,
  },
  {
    year: "2027",
    title: "Zero Waste to Landfill",
    description: "Eliminate all manufacturing waste sent to landfill through recycling and circular economy practices.",
    progress: 60,
  },
  {
    year: "2030",
    title: "Net Zero Supply Chain",
    description: "Work with suppliers to achieve net-zero emissions across our entire supply chain.",
    progress: 35,
  },
]

const certifications = [
  { name: "ISO 14001:2015", description: "Environmental Management System" },
  { name: "EPD Certified", description: "Environmental Product Declarations" },
  { name: "LEED Compatible", description: "Contributing to green building projects" },
  { name: "BREEAM Compatible", description: "Supporting sustainable construction" },
]

export default function SustainabilityPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-green-50 to-background dark:from-green-950/20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-green-100 dark:bg-green-900/30 rounded-full px-4 py-2 text-sm text-green-700 dark:text-green-400 font-medium mb-6">
              <Leaf className="h-4 w-4" />
              Environmental Commitment
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-balance">
              Engineering a Sustainable Future
            </h1>
            <p className="text-muted-foreground mt-6 text-lg leading-relaxed">
              At ARCOPAN, sustainability is integral to our engineering philosophy. We develop 
              cold storage solutions that minimize environmental impact while maximizing 
              efficiency and performance for our clients.
            </p>
          </div>
        </div>
      </section>

      {/* Key Initiatives */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl md:text-3xl font-bold">Our Sustainability Initiatives</h2>
            <p className="text-muted-foreground mt-2">
              Concrete actions driving meaningful environmental impact
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {initiatives.map((initiative) => (
              <div 
                key={initiative.title}
                className="bg-card rounded-xl border border-border p-6 hover:border-green-500/30 transition-all duration-300"
              >
                <div className="flex items-start justify-between">
                  <div className="w-14 h-14 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center">
                    <initiative.icon className="h-7 w-7 text-green-600 dark:text-green-400" />
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-green-600 dark:text-green-400">
                      {initiative.metric}
                    </div>
                    <div className="text-sm text-muted-foreground">{initiative.metricLabel}</div>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mt-4">{initiative.title}</h3>
                <p className="text-muted-foreground mt-2 leading-relaxed">
                  {initiative.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Goals & Progress */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl md:text-3xl font-bold">Our Sustainability Goals</h2>
            <p className="text-muted-foreground mt-2">
              Ambitious targets guiding our environmental journey
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-8">
            {goals.map((goal) => (
              <div 
                key={goal.year}
                className="bg-card rounded-xl border border-border p-6"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="text-sm text-green-600 dark:text-green-400 font-medium">
                      Target: {goal.year}
                    </div>
                    <h3 className="text-lg font-semibold mt-1">{goal.title}</h3>
                  </div>
                  <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                    {goal.progress}%
                  </div>
                </div>
                <p className="text-muted-foreground text-sm mb-4">{goal.description}</p>
                {/* Progress Bar */}
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-green-500 rounded-full transition-all duration-500"
                    style={{ width: `${goal.progress}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eco-Friendly Products */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-green-100 dark:bg-green-900/30 rounded-full px-4 py-2 text-sm text-green-700 dark:text-green-400 font-medium mb-4">
                <TreePine className="h-4 w-4" />
                Eco-Friendly Products
              </div>
              <h2 className="text-2xl md:text-3xl font-bold">
                Sustainable by Design
              </h2>
              <p className="text-muted-foreground mt-4 leading-relaxed">
                Our product range is engineered with sustainability in mind. From material 
                selection to manufacturing processes, every decision considers environmental 
                impact alongside performance requirements.
              </p>
              <ul className="mt-6 space-y-4">
                <li className="flex items-start gap-3">
                  <Sun className="h-5 w-5 text-green-600 dark:text-green-400 mt-0.5" />
                  <div>
                    <div className="font-medium">Solar-Ready Panel Systems</div>
                    <div className="text-sm text-muted-foreground">
                      Roof panels designed to support solar installations
                    </div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Factory className="h-5 w-5 text-green-600 dark:text-green-400 mt-0.5" />
                  <div>
                    <div className="font-medium">Low-Carbon Manufacturing</div>
                    <div className="text-sm text-muted-foreground">
                      Renewable energy powered production facilities
                    </div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Recycle className="h-5 w-5 text-green-600 dark:text-green-400 mt-0.5" />
                  <div>
                    <div className="font-medium">End-of-Life Recovery</div>
                    <div className="text-sm text-muted-foreground">
                      Panel take-back program for recycling
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            {/* Certifications */}
            <div className="bg-card rounded-2xl border border-border p-8">
              <h3 className="text-xl font-semibold mb-6">Environmental Certifications</h3>
              <div className="space-y-4">
                {certifications.map((cert) => (
                  <div 
                    key={cert.name}
                    className="flex items-center gap-4 p-4 bg-muted/50 rounded-xl"
                  >
                    <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
                      <Leaf className="h-6 w-6 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <div className="font-medium">{cert.name}</div>
                      <div className="text-sm text-muted-foreground">{cert.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-green-600 dark:bg-green-800">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Partner for a Greener Future
          </h2>
          <p className="text-white/80 mt-4 max-w-2xl mx-auto">
            Let us help you achieve your sustainability goals with energy-efficient cold 
            storage solutions that reduce environmental impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Button size="lg" variant="secondary" className="bg-white text-green-700 hover:bg-white/90">
              Download Sustainability Report
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Contact Sustainability Team
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
