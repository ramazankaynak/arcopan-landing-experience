"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Store, 
  Shield, 
  CheckCircle2, 
  ArrowRight,
  Download,
  Phone,
  Award,
  ShoppingCart,
  Layers,
  Paintbrush
} from "lucide-react"

const shelvingTypes = [
  {
    name: "Gondola Shelving",
    description: "Double-sided central display units for maximum retail floor utilization",
    shelfDepth: "300mm - 600mm",
    height: "1,400mm - 2,200mm",
    loadCapacity: "Up to 150kg per shelf",
    applications: ["Supermarkets", "Convenience Stores", "DIY Stores"],
    icon: Store
  },
  {
    name: "Wall Shelving",
    description: "Single-sided wall-mounted units for perimeter display",
    shelfDepth: "300mm - 500mm",
    height: "1,800mm - 2,400mm",
    loadCapacity: "Up to 120kg per shelf",
    applications: ["Grocery", "Pharmacy", "Electronics"],
    icon: Layers
  },
  {
    name: "End Cap Displays",
    description: "Promotional end-of-aisle units for high-visibility product placement",
    shelfDepth: "400mm - 600mm",
    height: "1,400mm - 1,800mm",
    loadCapacity: "Up to 100kg per shelf",
    applications: ["Promotions", "New Products", "Seasonal Items"],
    icon: ShoppingCart
  },
  {
    name: "Checkout Counters",
    description: "Integrated checkout systems with impulse buy shelving",
    shelfDepth: "Custom",
    height: "900mm - 1,200mm",
    loadCapacity: "Up to 80kg per shelf",
    applications: ["Checkout Areas", "Service Counters", "POS Displays"],
    icon: Store
  }
]

const features = [
  {
    icon: Paintbrush,
    title: "Custom Finishes",
    description: "Wide range of colors and finishes to match your brand identity"
  },
  {
    icon: Shield,
    title: "Durable Construction",
    description: "Heavy-gauge steel construction for long-lasting performance"
  },
  {
    icon: Layers,
    title: "Adjustable Shelves",
    description: "25mm pitch adjustment for flexible product merchandising"
  },
  {
    icon: ShoppingCart,
    title: "Accessory Compatible",
    description: "Wide range of hooks, baskets, and display accessories available"
  }
]

const accessories = [
  "Shelf Dividers",
  "Price Tag Holders",
  "Wire Baskets",
  "Pegboard Panels",
  "Display Hooks",
  "Shelf Fronts",
  "LED Lighting",
  "Sign Holders"
]

export default function MarketRackingSystemsPage() {
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
                Market Racking <span className="text-primary">Systems</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Professional retail shelving and display solutions for supermarkets, 
                convenience stores, and retail environments. Maximize your selling space 
                with our modular, customizable shelving systems.
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
                  <span className="text-sm text-muted-foreground">Quality Assured</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-primary" />
                  <span className="text-sm text-muted-foreground">5 Year Warranty</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/products/market-racking-hero.jpg"
                  alt="Market Racking Systems"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shelving Types Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">Product Range</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Retail Shelving Solutions
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {shelvingTypes.map((shelf, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <shelf.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors mb-2">
                        {shelf.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3">{shelf.description}</p>
                      <div className="grid grid-cols-2 gap-2 text-sm mb-3">
                        <div>
                          <span className="text-muted-foreground">Depth:</span>
                          <span className="font-medium ml-1">{shelf.shelfDepth}</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Height:</span>
                          <span className="font-medium ml-1">{shelf.height}</span>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {shelf.applications.map((app, i) => (
                          <Badge key={i} variant="secondary" className="text-xs">{app}</Badge>
                        ))}
                      </div>
                    </div>
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
              Why Choose Our Retail Shelving?
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
              Complete Your Display
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
            Ready to Transform Your Retail Space?
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            Our team will help you design the perfect shelving layout for your store.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="secondary" className="gap-2">
              <Phone className="h-4 w-4" />
              Get Free Store Layout Design
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
                  <Layers className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  Warehouse Racking
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Industrial pallet racking for back-of-house storage.
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
                  Cold Room Doors
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Insulated doors for retail cold storage areas.
                </p>
                <Link href="/products/insulated-cold-room-doors" className="text-primary text-sm hover:underline">
                  Learn More →
                </Link>
              </CardContent>
            </Card>
            <Card className="group hover:shadow-lg transition-all">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <ShoppingCart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  PVC Strip Curtains
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Temperature barriers for retail cold zones.
                </p>
                <Link href="/products/pvc-strip-curtains" className="text-primary text-sm hover:underline">
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
