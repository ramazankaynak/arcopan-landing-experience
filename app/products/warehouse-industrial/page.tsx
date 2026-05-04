import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, LayoutGrid, ShoppingCart, DoorOpen, ArrowUpDown, ChevronRight } from "lucide-react"

const products = [
  {
    name: "Warehouse Racking Systems",
    description: "Professional pallet racking solutions for cold storage and industrial warehouses",
    href: "/products/warehouse-industrial/warehouse-racking-systems",
    icon: LayoutGrid,
    specs: "Up to 4000 kg | -40°C rated"
  },
  {
    name: "Market Racking Systems",
    description: "Retail shelving solutions for supermarkets and convenience stores",
    href: "/products/warehouse-industrial/market-racking-systems",
    icon: ShoppingCart,
    specs: "Gondola | Wall | End Cap"
  },
  {
    name: "Industrial Door Systems",
    description: "Heavy-duty industrial doors for warehouses and loading bays",
    href: "/products/warehouse-industrial/industrial-door-systems",
    icon: DoorOpen,
    specs: "Up to 20m x 8m | 3.0 m/s"
  },
  {
    name: "Dock Leveller & Ramp Systems",
    description: "Professional loading dock equipment for efficient goods handling",
    href: "/products/warehouse-industrial/dock-leveller-systems",
    icon: ArrowUpDown,
    specs: "Up to 15,000 kg | ±400mm"
  },
]

export default function WarehouseIndustrialPage() {
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
            <span className="text-foreground font-medium">Warehouse & Industrial</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Warehouse & Industrial Systems
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Complete warehouse solutions including racking systems, industrial doors, 
            and loading dock equipment. Designed for cold storage environments and 
            high-volume logistics operations.
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
          <h2 className="text-3xl font-bold mb-4">Planning a Warehouse Project?</h2>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Our engineering team can design the optimal warehouse layout and equipment for your facility.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">Request Free Design</Button>
            <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
              View Case Studies
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
