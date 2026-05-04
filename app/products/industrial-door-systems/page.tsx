"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  DoorOpen, 
  Shield, 
  CheckCircle2, 
  ArrowRight,
  Download,
  Phone,
  Award,
  Zap,
  Wind,
  Lock,
  Gauge,
  Timer
} from "lucide-react"

const doorTypes = [
  {
    name: "High-Speed Roll-Up Doors",
    description: "Rapid opening doors for high-traffic areas minimizing temperature loss and energy costs",
    speed: "Up to 3m/s",
    dimensions: "Up to 10m x 8m",
    insulation: "R-value up to 1.5",
    features: ["Auto-repair", "Safety sensors", "Wind resistant"],
    icon: Zap
  },
  {
    name: "Insulated Sectional Doors",
    description: "Vertically opening doors with excellent thermal insulation for industrial buildings",
    speed: "0.3-0.5m/s",
    dimensions: "Up to 12m x 8m",
    insulation: "R-value up to 4.5",
    features: ["42-80mm panels", "Multiple window options", "Manual override"],
    icon: Shield
  },
  {
    name: "Spiral High-Speed Doors",
    description: "Premium high-speed doors combining speed with excellent insulation",
    speed: "Up to 2.5m/s",
    dimensions: "Up to 6m x 6m",
    insulation: "R-value up to 1.2",
    features: ["Spiral opening", "Compact design", "Low maintenance"],
    icon: Timer
  },
  {
    name: "Loading Dock Doors",
    description: "Heavy-duty doors designed specifically for loading bay applications",
    speed: "0.2-0.4m/s",
    dimensions: "Up to 4m x 4.5m",
    insulation: "R-value up to 3.5",
    features: ["Dock integration", "Weather seals", "Impact resistant"],
    icon: DoorOpen
  },
  {
    name: "Fire-Rated Rolling Shutters",
    description: "Fire compartmentalization doors with automatic closure on alarm",
    speed: "0.15m/s close",
    dimensions: "Up to 8m x 6m",
    insulation: "EI60/EI120",
    features: ["Auto-close on alarm", "Smoke containment", "Battery backup"],
    icon: Shield
  },
  {
    name: "Folding/Sliding Doors",
    description: "Large opening doors for aircraft hangars, workshops, and industrial facilities",
    speed: "Manual/Powered",
    dimensions: "Up to 40m wide",
    insulation: "R-value up to 2.5",
    features: ["Full opening", "Heavy-duty track", "Wind rated"],
    icon: Wind
  }
]

const features = [
  {
    icon: Zap,
    title: "High Speed Operation",
    description: "Minimize energy loss with rapid opening and closing cycles"
  },
  {
    icon: Shield,
    title: "Thermal Insulation",
    description: "Maintain temperature control with insulated door panels"
  },
  {
    icon: Lock,
    title: "Security",
    description: "Robust construction with multiple locking options"
  },
  {
    icon: Gauge,
    title: "Wind Resistance",
    description: "Engineered for high wind load conditions"
  },
  {
    icon: Timer,
    title: "Low Maintenance",
    description: "Durable components designed for long service intervals"
  },
  {
    icon: Wind,
    title: "Weather Sealing",
    description: "Complete perimeter seals for air-tight closure"
  }
]

const applications = [
  "Logistics Centers",
  "Manufacturing Plants",
  "Cold Storage Facilities",
  "Food Processing",
  "Pharmaceutical",
  "Automotive Industry",
  "Aircraft Hangars",
  "Retail Loading Bays"
]

export default function IndustrialDoorSystemsPage() {
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
                Industrial Door <span className="text-primary">Systems</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                High-performance industrial doors for warehouses, factories, and logistics 
                centers. From high-speed doors to insulated sectional systems, we provide 
                solutions that enhance operational efficiency and energy savings.
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
                  <span className="text-sm text-muted-foreground">EN 13241</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/products/industrial-doors-hero.jpg"
                  alt="Industrial Door Systems"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-card p-4 rounded-xl shadow-lg border">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Zap className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Opening Speed</p>
                    <p className="font-bold text-foreground">Up to 3m/s</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Door Types Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">Product Range</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Industrial Door Solutions
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {doorTypes.map((door, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <door.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors">
                    {door.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">{door.description}</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Speed:</span>
                      <span className="font-medium">{door.speed}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Max Size:</span>
                      <span className="font-medium">{door.dimensions}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Insulation:</span>
                      <span className="font-medium">{door.insulation}</span>
                    </div>
                  </div>
                  <div className="pt-2 space-y-1">
                    {door.features.map((feature, i) => (
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
            <Badge variant="outline" className="mb-4">Features & Benefits</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Built for Industrial Performance
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flex gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">Applications</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Industries We Serve
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {applications.map((app, index) => (
              <Badge key={index} variant="secondary" className="text-sm py-2 px-4">
                {app}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Need the Right Door for Your Facility?
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            Our technical team will help you select the optimal door system based on
            your traffic patterns, temperature requirements, and security needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="secondary" className="gap-2">
              <Phone className="h-4 w-4" />
              Get Expert Advice
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
                  <DoorOpen className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  Cold Room Doors
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Insulated doors for cold storage applications.
                </p>
                <Link href="/products/insulated-cold-room-doors" className="text-primary text-sm hover:underline">
                  Learn More →
                </Link>
              </CardContent>
            </Card>
            <Card className="group hover:shadow-lg transition-all">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Gauge className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  Dock Leveller Systems
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Loading dock equipment for efficient logistics.
                </p>
                <Link href="/products/dock-leveller-ramp-systems" className="text-primary text-sm hover:underline">
                  Learn More →
                </Link>
              </CardContent>
            </Card>
            <Card className="group hover:shadow-lg transition-all">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Wind className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  PVC Strip Curtains
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Flexible barriers for high-traffic doorways.
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
