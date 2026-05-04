import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Thermometer, Snowflake, Zap, Truck, Settings, Wrench } from "lucide-react"

const solutions = [
  {
    icon: Thermometer,
    title: "Chilled Storage (0/+4°C)",
    description: "Fresh food storage with precise temperature control for dairy, produce, and beverages.",
    href: "/solutions/chilled-storage",
  },
  {
    icon: Snowflake,
    title: "Frozen Storage (-18/-25°C)",
    description: "Deep freeze solutions for meat, seafood, ice cream, and frozen food products.",
    href: "/solutions/frozen-storage",
  },
  {
    icon: Zap,
    title: "Shock/Blast Freezing",
    description: "Rapid freezing technology to preserve food quality and extend shelf life.",
    href: "/solutions/blast-freezing",
  },
  {
    icon: Truck,
    title: "Food Logistics Cold Stores",
    description: "Temperature-controlled distribution centers for the food supply chain.",
    href: "/solutions/food-logistics",
  },
  {
    icon: Settings,
    title: "Project-Based Systems",
    description: "Custom-engineered solutions tailored to your specific project requirements.",
    href: "/solutions/project-based",
  },
  {
    icon: Wrench,
    title: "Tailor-Made Solutions",
    description: "Bespoke cold storage systems designed for unique operational needs.",
    href: "/solutions/tailor-made",
  },
]

export function SolutionsSection() {
  return (
    <section className="py-24 bg-foreground text-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Solutions</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 text-balance">
            Temperature-Controlled Solutions for Every Need
          </h2>
          <p className="text-background/70 mt-4 text-lg">
            From chilled storage to blast freezing, we provide comprehensive cold chain 
            solutions for diverse industry requirements.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((solution) => (
            <Link
              key={solution.title}
              href={solution.href}
              className="group bg-background/5 backdrop-blur-sm rounded-xl p-6 border border-background/10 hover:bg-background/10 hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
                <solution.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{solution.title}</h3>
              <p className="text-background/60 text-sm mb-4">{solution.description}</p>
              <div className="flex items-center gap-2 text-primary text-sm font-medium">
                <span>Learn More</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button size="lg" variant="secondary" asChild className="bg-background text-foreground hover:bg-background/90">
            <Link href="/solutions">
              Explore All Solutions
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
