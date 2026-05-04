import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Snowflake, Layers, Home, DoorOpen, Box, ChevronRight } from "lucide-react"

const products = [
  {
    name: "Insulated Cold Storage Panels",
    description: "High-performance panels with PIR/PUR core for cold storage applications",
    href: "/products/insulation-panel-systems/insulated-cold-storage-panels",
    icon: Snowflake,
    specs: "50-200mm | -45°C to +10°C"
  },
  {
    name: "Insulated Wall Panels",
    description: "Premium wall panels for industrial and commercial buildings",
    href: "/products/insulation-panel-systems/insulated-wall-panels",
    icon: Layers,
    specs: "40-150mm | A2 Fire Rating"
  },
  {
    name: "Insulated Roof Panels",
    description: "High-performance roof panels with superior spanning capabilities",
    href: "/products/insulation-panel-systems/insulated-roof-panels",
    icon: Home,
    specs: "30-200mm | Up to 16m"
  },
  {
    name: "Cold Room Doors",
    description: "Professional-grade doors for cold storage environments",
    href: "/products/insulation-panel-systems/cold-room-doors",
    icon: DoorOpen,
    specs: "Hinged | Sliding | Vertical"
  },
  {
    name: "Modular Cold Rooms",
    description: "Complete prefabricated cold room solutions",
    href: "/products/insulation-panel-systems/modular-cold-rooms",
    icon: Box,
    specs: "Turnkey | Custom Sizes"
  },
]

export default function InsulationPanelSystemsPage() {
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
            <span className="text-foreground font-medium">Insulation & Panel Systems</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Insulation & Panel Systems
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Complete range of insulated panels, cold room doors, and modular solutions 
            for temperature-controlled environments. Engineered for maximum thermal 
            efficiency and durability.
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
          <h2 className="text-3xl font-bold mb-4">Need Technical Assistance?</h2>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Our engineering team can help you select the right panel system for your project requirements.
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
