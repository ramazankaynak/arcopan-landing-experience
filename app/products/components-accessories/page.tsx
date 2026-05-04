import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Wrench, Layers, ShieldAlert, Hammer, ChevronRight } from "lucide-react"

const products = [
  {
    name: "Profiles & Fixings",
    description: "Complete range of profiles, channels, and fixing systems for panel installations",
    href: "/products/components-accessories/profiles-fixings",
    icon: Wrench,
    specs: "ALU/PVC/Steel | 50+ SKUs"
  },
  {
    name: "PVC Strip Curtains",
    description: "Flexible PVC strip curtains for temperature control and contamination prevention",
    href: "/products/components-accessories/pvc-strip-curtains",
    icon: Layers,
    specs: "Standard | Polar | Anti-Static"
  },
  {
    name: "Safety Accessories",
    description: "Essential safety equipment for cold storage and warehouse operations",
    href: "/products/components-accessories/safety-accessories",
    icon: ShieldAlert,
    specs: "EN Certified | 30+ Items"
  },
  {
    name: "Installation Accessories",
    description: "Complete installation accessories from sealants to temperature sensors",
    href: "/products/components-accessories/installation-accessories",
    icon: Hammer,
    specs: "Cold Rated | 100+ Items"
  },
]

export default function ComponentsAccessoriesPage() {
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
            <span className="text-foreground font-medium">Components & Accessories</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Components & Accessories
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Complete range of accessories, components, and installation materials 
            for cold storage projects. Everything you need for professional 
            installations and maintenance.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {products.map((product, index) => (
              <Link key={index} href={product.href}>
                <Card className="group h-full hover:shadow-xl transition-all duration-300 border-none shadow-md overflow-hidden">
                  <div className="aspect-[16/9] bg-muted flex items-center justify-center">
                    <product.icon className="h-24 w-24 text-primary/20 group-hover:text-primary/40 transition-colors" />
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
          <h2 className="text-3xl font-bold mb-4">Need Installation Supplies?</h2>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Contact us for the complete range of components and accessories for your cold storage project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">Request Parts List</Button>
            <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
              Download Catalog
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
