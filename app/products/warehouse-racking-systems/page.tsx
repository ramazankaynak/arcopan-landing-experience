"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  Warehouse, 
  Shield, 
  CheckCircle2, 
  ArrowRight,
  Download,
  Phone,
  Gauge,
  Award,
  Package,
  Layers,
  Grid3X3,
  MoveHorizontal
} from "lucide-react"

const rackingTypes = [
  {
    name: "Selective Pallet Racking",
    description: "Direct access to every pallet position for maximum flexibility and FIFO/LIFO management",
    loadCapacity: "Up to 4,000kg per level",
    beamLength: "1,350mm - 3,600mm",
    height: "Up to 12m",
    applications: ["General Storage", "Distribution", "Cold Storage"],
    icon: Grid3X3
  },
  {
    name: "Drive-In/Drive-Through Racking",
    description: "High-density storage with forklift access lanes for maximum space utilization",
    loadCapacity: "Up to 1,500kg per pallet",
    beamLength: "Custom widths",
    height: "Up to 10m",
    applications: ["Bulk Storage", "Cold Stores", "LIFO Operations"],
    icon: MoveHorizontal
  },
  {
    name: "Mobile Pallet Racking",
    description: "Powered mobile bases eliminate aisles for up to 100% more storage capacity",
    loadCapacity: "Up to 3,500kg per level",
    beamLength: "Standard sizes",
    height: "Up to 14m",
    applications: ["Cold Storage", "Archives", "High-Value Goods"],
    icon: Package
  },
  {
    name: "Push-Back Racking",
    description: "Dynamic LIFO system with gravity-fed cart storage for high throughput",
    loadCapacity: "Up to 1,200kg per pallet",
    beamLength: "2-6 pallets deep",
    height: "Up to 10m",
    applications: ["Fast-Moving Goods", "Buffer Storage", "Distribution"],
    icon: Layers
  },
  {
    name: "Shuttle Racking Systems",
    description: "Semi-automated storage with pallet shuttles for maximum density and efficiency",
    loadCapacity: "Up to 1,500kg per pallet",
    beamLength: "10-40 pallets deep",
    height: "Up to 15m",
    applications: ["High-Density Storage", "Cold Stores", "Automation"],
    icon: Warehouse
  },
  {
    name: "Cantilever Racking",
    description: "Open-front storage for long and bulky items without vertical obstructions",
    loadCapacity: "Up to 2,500kg per arm",
    beamLength: "600mm - 1,500mm arms",
    height: "Up to 8m",
    applications: ["Long Goods", "Pipes", "Timber", "Profiles"],
    icon: Grid3X3
  }
]

const specifications = [
  { label: "Upright Heights", value: "2m - 15m" },
  { label: "Bay Widths", value: "900mm - 3,600mm" },
  { label: "Frame Depths", value: "800mm - 1,200mm" },
  { label: "Beam Capacity", value: "Up to 4,000kg" },
  { label: "Steel Grade", value: "S355 / S235" },
  { label: "Finish", value: "Powder Coated / Galvanized" },
  { label: "Seismic Design", value: "EN 16681 Compliant" },
  { label: "Fire Rating", value: "EN 15512" }
]

const features = [
  {
    icon: Gauge,
    title: "Engineered Design",
    description: "FEM/FEA calculations ensure structural integrity and optimal load distribution"
  },
  {
    icon: Shield,
    title: "Safety Compliant",
    description: "Designed to EN 15512, EN 15620, EN 15635, and EN 16681 standards"
  },
  {
    icon: Package,
    title: "Modular System",
    description: "Adjustable beam levels and expandable configurations for future flexibility"
  },
  {
    icon: Layers,
    title: "Cold Store Compatible",
    description: "Galvanized and specially treated finishes for freezer environments"
  },
  {
    icon: Warehouse,
    title: "Space Optimization",
    description: "Maximize cubic storage capacity with optimized aisle widths"
  },
  {
    icon: Award,
    title: "Quality Materials",
    description: "Premium grade steel with consistent quality and dimensional accuracy"
  }
]

const accessories = [
  "Upright Protectors",
  "Row End Barriers",
  "Mesh Decking",
  "Timber Decking",
  "Steel Decking",
  "Pallet Supports",
  "Safety Netting",
  "Column Guards",
  "Rack Labeling",
  "Anti-Collapse Mesh",
  "Load Notices",
  "Guide Rails"
]

export default function WarehouseRackingSystemsPage() {
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
                Warehouse Racking <span className="text-primary">Systems</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Industrial-grade pallet racking solutions for warehouses, distribution centers, 
                and cold storage facilities. Our systems are engineered for maximum space utilization, 
                load capacity, and operational efficiency.
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
                  <span className="text-sm text-muted-foreground">EN 15512</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-primary" />
                  <span className="text-sm text-muted-foreground">FEM Certified</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/products/warehouse-racking-hero.jpg"
                  alt="Warehouse Racking Systems"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-card p-4 rounded-xl shadow-lg border">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Warehouse className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Height Capacity</p>
                    <p className="font-bold text-foreground">Up to 15m</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Racking Types Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">Racking Solutions</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Racking System Types
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Choose from our comprehensive range of racking systems designed to optimize 
              your warehouse space and operational efficiency.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rackingTypes.map((rack, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <rack.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors">
                    {rack.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">{rack.description}</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Load Capacity:</span>
                      <span className="font-medium">{rack.loadCapacity}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Bay Size:</span>
                      <span className="font-medium">{rack.beamLength}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Max Height:</span>
                      <span className="font-medium">{rack.height}</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1 pt-2">
                    {rack.applications.map((app, i) => (
                      <Badge key={i} variant="secondary" className="text-xs">{app}</Badge>
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
              Why Choose ARCOPAN Racking?
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

      {/* Technical Specifications */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <Tabs defaultValue="specifications" className="space-y-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <Badge variant="outline" className="mb-4">Technical Data</Badge>
                <h2 className="text-3xl font-bold text-foreground">Specifications & Accessories</h2>
              </div>
              <TabsList>
                <TabsTrigger value="specifications">Technical Specs</TabsTrigger>
                <TabsTrigger value="accessories">Accessories</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="specifications" className="mt-8">
              <Card>
                <CardContent className="p-6">
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {specifications.map((spec, index) => (
                      <div key={index} className="space-y-1">
                        <p className="text-sm text-muted-foreground">{spec.label}</p>
                        <p className="font-semibold text-foreground">{spec.value}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="accessories" className="mt-8">
              <Card>
                <CardContent className="p-6">
                  <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    {accessories.map((accessory, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-sm text-foreground">{accessory}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Need a Custom Racking Solution?
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            Our engineering team will design a racking system optimized for your warehouse 
            layout, product types, and operational requirements.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="secondary" className="gap-2">
              <Phone className="h-4 w-4" />
              Get Free Design Consultation
            </Button>
            <Button size="lg" variant="outline" className="gap-2 bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
              <ArrowRight className="h-4 w-4" />
              View Projects
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
                  <Package className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  Market Racking Systems
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Retail shelving and display racking for supermarkets.
                </p>
                <Link href="/products/market-racking-systems" className="text-primary text-sm hover:underline">
                  Learn More →
                </Link>
              </CardContent>
            </Card>
            <Card className="group hover:shadow-lg transition-all">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <MoveHorizontal className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  Industrial Door Systems
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  High-speed and sectional doors for warehouses.
                </p>
                <Link href="/products/industrial-door-systems" className="text-primary text-sm hover:underline">
                  Learn More →
                </Link>
              </CardContent>
            </Card>
            <Card className="group hover:shadow-lg transition-all">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Layers className="h-6 w-6 text-primary" />
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
          </div>
        </div>
      </section>
    </div>
  )
}
