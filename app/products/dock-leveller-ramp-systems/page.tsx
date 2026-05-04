"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Container, 
  Shield, 
  CheckCircle2, 
  ArrowRight,
  Download,
  Phone,
  Award,
  Gauge,
  Truck,
  ArrowUpDown,
  Settings
} from "lucide-react"

const products = [
  {
    name: "Hydraulic Dock Levellers",
    description: "Fully hydraulic operation with push-button control for smooth, efficient loading",
    capacity: "6,000kg - 15,000kg",
    platform: "2,000mm x 2,500mm standard",
    range: "+/- 400mm",
    features: ["One-touch operation", "Auto-return", "Emergency stop"],
    icon: ArrowUpDown
  },
  {
    name: "Mechanical Dock Levellers",
    description: "Spring-assisted mechanical operation for cost-effective loading bay solutions",
    capacity: "6,000kg - 9,000kg",
    platform: "1,800mm x 2,000mm standard",
    range: "+/- 300mm",
    features: ["Pull-chain release", "Walk-down return", "Low maintenance"],
    icon: Settings
  },
  {
    name: "Air-Powered Dock Levellers",
    description: "Airbag-operated levellers combining simplicity with smooth operation",
    capacity: "6,000kg - 10,000kg",
    platform: "2,000mm x 2,500mm standard",
    range: "+/- 350mm",
    features: ["Soft operation", "Energy efficient", "Quiet running"],
    icon: Gauge
  },
  {
    name: "Telescopic Lip Levellers",
    description: "Extended lip reach for loading vehicles with large gaps",
    capacity: "6,000kg - 12,000kg",
    platform: "2,000mm x 3,000mm",
    range: "+/- 400mm + 500mm lip",
    features: ["Extended reach", "Gap bridging", "Versatile loading"],
    icon: Container
  },
  {
    name: "Loading Ramps",
    description: "Portable and fixed ramps for ground-level loading operations",
    capacity: "Up to 15,000kg",
    platform: "Various sizes",
    range: "Ground to truck bed",
    features: ["Mobile options", "Adjustable height", "Safety rails"],
    icon: Truck
  },
  {
    name: "Dock Shelters & Seals",
    description: "Weather protection systems for loading bays to maintain temperature control",
    capacity: "N/A",
    platform: "Custom sized",
    range: "All vehicle types",
    features: ["Inflatable seals", "Retractable shelters", "Foam pads"],
    icon: Shield
  }
]

const features = [
  {
    icon: Gauge,
    title: "High Load Capacity",
    description: "Handle heavy forklift traffic with capacities up to 15,000kg"
  },
  {
    icon: Shield,
    title: "Safety Features",
    description: "Emergency stops, toe guards, and safety lip systems as standard"
  },
  {
    icon: ArrowUpDown,
    title: "Wide Operating Range",
    description: "Accommodate different truck heights with generous adjustment range"
  },
  {
    icon: Settings,
    title: "Easy Maintenance",
    description: "Accessible components and simple servicing requirements"
  }
]

const accessories = [
  "Dock Bumpers",
  "Wheel Guides",
  "Traffic Lights",
  "Interlock Systems",
  "Vehicle Restraints",
  "Dock Houses",
  "Dock Lights",
  "Communication Systems"
]

export default function DockLevellerRampSystemsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary/10 via-background to-accent/5">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <Badge variant="secondary" className="text-xs">Products</Badge>
                <span className="text-muted-foreground">/</span>
                <Badge variant="outline" className="text-xs">Warehouse & Racking</Badge>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
                Dock Leveller & <span className="text-primary">Ramp Systems</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Complete loading dock solutions for warehouses and distribution centers.
                Our dock levellers and ramp systems ensure safe, efficient loading and 
                unloading operations for all vehicle types.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="gap-2">
                  <Phone className="h-4 w-4" />
                  Request Quote
                </Button>
                <Button size="lg" variant="outline" className="gap-2">
                  <Download className="h-4 w-4" />
                  Product Catalog
                </Button>
              </div>
              <div className="flex items-center gap-6 pt-4">
                <div className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-primary" />
                  <span className="text-sm text-muted-foreground">CE Certified</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-primary" />
                  <span className="text-sm text-muted-foreground">EN 1398</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/products/dock-leveller-hero.jpg"
                  alt="Dock Leveller Systems"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-card p-4 rounded-xl shadow-lg border">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Gauge className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Load Capacity</p>
                    <p className="font-bold text-foreground">Up to 15,000kg</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">Product Range</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Loading Dock Solutions
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <product.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">{product.description}</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Capacity:</span>
                      <span className="font-medium">{product.capacity}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Platform:</span>
                      <span className="font-medium">{product.platform}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Range:</span>
                      <span className="font-medium">{product.range}</span>
                    </div>
                  </div>
                  <div className="pt-2 space-y-1">
                    {product.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="h-3.5 w-3.5 text-primary" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">Features</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Built for Heavy Duty Use
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accessories Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">Accessories</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Complete Your Loading Bay
            </h2>
          </div>
          <Card>
            <CardContent className="p-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {accessories.map((accessory, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-sm text-foreground">{accessory}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Need a Complete Loading Dock Solution?
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            Our team will design a loading bay configuration optimized for your
            vehicle types, traffic patterns, and operational requirements.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="secondary" className="gap-2">
              <Phone className="h-4 w-4" />
              Get Free Loading Bay Design
            </Button>
            <Button size="lg" variant="outline" className="gap-2 bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
              <ArrowRight className="h-4 w-4" />
              View All Products
            </Button>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-foreground">Related Products</h2>
            <Link href="/products" className="text-primary hover:underline flex items-center gap-1">
              View All <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="group hover:shadow-lg transition-all">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Container className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  Industrial Door Systems
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  High-speed and sectional doors for loading bays.
                </p>
                <Link href="/products/industrial-door-systems" className="text-primary text-sm hover:underline">
                  Learn More →
                </Link>
              </CardContent>
            </Card>
            <Card className="group hover:shadow-lg transition-all">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Truck className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  Warehouse Racking
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Pallet racking systems for efficient storage.
                </p>
                <Link href="/products/warehouse-racking-systems" className="text-primary text-sm hover:underline">
                  Learn More →
                </Link>
              </CardContent>
            </Card>
            <Card className="group hover:shadow-lg transition-all">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  Safety Accessories
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Barriers, guards, and safety equipment.
                </p>
                <Link href="/products/safety-accessories" className="text-primary text-sm hover:underline">
                  Learn More →
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
