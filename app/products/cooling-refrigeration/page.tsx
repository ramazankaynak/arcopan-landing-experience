import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Fan, Server, Droplets, Wind, Package, ChevronRight } from "lucide-react"

const products = [
  {
    name: "Condensing Units",
    description: "High-performance condensing units for commercial and industrial refrigeration",
    href: "/products/cooling-refrigeration/condensing-units",
    icon: Fan,
    specs: "2-150 kW | R448A/R449A"
  },
  {
    name: "Central Systems",
    description: "Advanced central refrigeration systems including rack and CO2 solutions",
    href: "/products/cooling-refrigeration/central-systems",
    icon: Server,
    specs: "20-2000 kW | HFC/CO2/NH3"
  },
  {
    name: "Chiller Units",
    description: "Industrial and process chillers for precise temperature control",
    href: "/products/cooling-refrigeration/chiller-units",
    icon: Droplets,
    specs: "5-2000 kW | ±0.5°C"
  },
  {
    name: "Evaporators",
    description: "High-performance evaporators for commercial and industrial cooling",
    href: "/products/cooling-refrigeration/evaporators",
    icon: Wind,
    specs: "1-300 kW | EC/AC Fans"
  },
  {
    name: "Monoblock Units",
    description: "Compact all-in-one refrigeration units for small to medium cold rooms",
    href: "/products/cooling-refrigeration/monoblock-units",
    icon: Package,
    specs: "0.5-20 kW | Plug & Play"
  },
]

export default function CoolingRefrigerationPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumb */}
      <div className="border-b bg-muted/30">
        <div className="container mx-auto px-4 py-3">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/products" className="hover:text-primary transition-colors">Products</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground font-medium">Cooling & Refrigeration</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Cooling & Refrigeration
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Complete refrigeration solutions from condensing units to central systems. 
            Energy-efficient cooling equipment for commercial and industrial applications 
            with modern refrigerants.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Link key={index} href={product.href}>
                <Card className="group h-full hover:shadow-xl transition-all duration-300 border-none shadow-md overflow-hidden">
                  <div className="aspect-[4/3] bg-muted flex items-center justify-center">
                    <product.icon className="h-20 w-20 text-primary/20 group-hover:text-primary/40 transition-colors" />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors flex items-center gap-2">
                      {product.name}
                      <ArrowRight className="h-5 w-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </h3>
                    <p className="text-muted-foreground mb-4">{product.description}</p>
                    <p className="text-sm font-medium text-primary">{product.specs}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Refrigeration Solutions?</h2>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Our refrigeration specialists can help you design the optimal cooling system for your application.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">Contact Our Experts</Button>
            <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
              Request Catalog
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
