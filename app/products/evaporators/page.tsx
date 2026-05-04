"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  Fan, 
  Shield, 
  Thermometer, 
  CheckCircle2, 
  ArrowRight,
  Download,
  Phone,
  Gauge,
  Award,
  Zap,
  Snowflake,
  Volume2,
  Droplets
} from "lucide-react"

const evaporatorTypes = [
  {
    name: "Dual Discharge Unit Coolers",
    description: "Standard unit coolers with dual-direction air throw for optimal air distribution in cold rooms",
    capacity: "1kW - 50kW",
    finSpacing: "4mm - 12mm",
    defrost: "Electric / Hot Gas / Air",
    applications: ["Cold Rooms", "Freezers", "Process Areas"],
    icon: Fan
  },
  {
    name: "Single Discharge Unit Coolers",
    description: "Directional air throw for specific cooling patterns and narrow room applications",
    capacity: "0.5kW - 30kW",
    finSpacing: "4mm - 10mm",
    defrost: "Electric / Hot Gas",
    applications: ["Narrow Rooms", "Corridors", "Display Areas"],
    icon: Fan
  },
  {
    name: "Cubic Evaporators",
    description: "Compact cubic design for small cold rooms and modular installations",
    capacity: "0.3kW - 8kW",
    finSpacing: "5mm - 9mm",
    defrost: "Electric / Natural",
    applications: ["Mini Cold Rooms", "Walk-in Coolers", "Retail"],
    icon: Snowflake
  },
  {
    name: "Floor-Standing Unit Coolers",
    description: "Heavy-duty floor-mounted evaporators for large industrial cold stores",
    capacity: "20kW - 200kW",
    finSpacing: "6mm - 12mm",
    defrost: "Hot Gas / Water",
    applications: ["Large Cold Stores", "Distribution Centers", "Food Processing"],
    icon: Zap
  },
  {
    name: "Blast Freezer Evaporators",
    description: "High-capacity evaporators designed for rapid product freezing applications",
    capacity: "10kW - 150kW",
    finSpacing: "8mm - 12mm",
    defrost: "Hot Gas / Water",
    applications: ["Blast Freezers", "IQF Systems", "Shock Cooling"],
    icon: Thermometer
  },
  {
    name: "Brine/Glycol Coolers",
    description: "Secondary refrigerant evaporators for indirect cooling systems",
    capacity: "5kW - 100kW",
    finSpacing: "4mm - 8mm",
    defrost: "Electric / Glycol",
    applications: ["Process Cooling", "Dairy", "Beverage"],
    icon: Droplets
  }
]

const specifications = [
  { label: "Cooling Capacity", value: "0.3kW - 200kW" },
  { label: "Fin Spacing", value: "4mm - 12mm" },
  { label: "Operating Temp", value: "-45°C to +15°C" },
  { label: "Fan Types", value: "Axial / EC Motor" },
  { label: "Coil Material", value: "Copper / Aluminum" },
  { label: "Casing Material", value: "Epoxy / Stainless Steel" },
  { label: "Defrost Options", value: "Electric / Hot Gas / Water" },
  { label: "Refrigerants", value: "All Common Types" }
]

const features = [
  {
    icon: Gauge,
    title: "High Efficiency",
    description: "Optimized coil geometry and fin patterns for maximum heat transfer"
  },
  {
    icon: Volume2,
    title: "Quiet Operation",
    description: "EC fans with low noise levels suitable for retail and office environments"
  },
  {
    icon: Droplets,
    title: "Effective Defrost",
    description: "Multiple defrost options ensuring efficient ice removal and drainage"
  },
  {
    icon: Shield,
    title: "Corrosion Resistant",
    description: "Epoxy-coated or stainless steel construction for harsh environments"
  },
  {
    icon: Zap,
    title: "Energy Efficient Fans",
    description: "EC motor technology reducing energy consumption by up to 50%"
  },
  {
    icon: Thermometer,
    title: "Wide Temperature Range",
    description: "Suitable for chilling, freezing, and blast freezing applications"
  }
]

const brands = ["Guntner", "Alfa Laval", "LU-VE", "Searle", "Helpman", "Thermokey", "Kelvion", "ECO"]

export default function EvaporatorsPage() {
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
                <Badge variant="outline" className="text-xs">Cooling & Refrigeration</Badge>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
                Industrial <span className="text-primary">Evaporators</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                High-performance unit coolers and evaporators for cold storage, food processing, 
                and industrial refrigeration. Our range covers all applications from small cold 
                rooms to large distribution centers.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="gap-2">
                  <Phone className="h-4 w-4" />
                  Request Quote
                </Button>
                <Button size="lg" variant="outline" className="gap-2">
                  <Download className="h-4 w-4" />
                  Selection Software
                </Button>
              </div>
              <div className="flex items-center gap-6 pt-4">
                <div className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-primary" />
                  <span className="text-sm text-muted-foreground">CE Certified</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-primary" />
                  <span className="text-sm text-muted-foreground">Premium Brands</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/products/evaporators-hero.jpg"
                  alt="Industrial Evaporators"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-card p-4 rounded-xl shadow-lg border">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Fan className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Capacity Range</p>
                    <p className="font-bold text-foreground">0.3kW - 200kW</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Evaporator Types Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">Product Range</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Evaporator Types
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From compact unit coolers to large industrial evaporators, we supply the right
              solution for every cold storage application.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {evaporatorTypes.map((evap, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <evap.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors">
                    {evap.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">{evap.description}</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Capacity:</span>
                      <span className="font-medium">{evap.capacity}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Fin Spacing:</span>
                      <span className="font-medium">{evap.finSpacing}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Defrost:</span>
                      <span className="font-medium">{evap.defrost}</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1 pt-2">
                    {evap.applications.map((app, i) => (
                      <Badge key={i} variant="secondary" className="text-xs">{app}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Brands */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-8">
            <Badge variant="outline" className="mb-4">Partner Brands</Badge>
            <h2 className="text-2xl font-bold text-foreground">Premium Manufacturers</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {brands.map((brand, index) => (
              <Badge key={index} variant="outline" className="text-base py-2 px-4">
                {brand}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">Features & Benefits</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Engineered for Excellence
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
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <Tabs defaultValue="specifications" className="space-y-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <Badge variant="outline" className="mb-4">Technical Data</Badge>
                <h2 className="text-3xl font-bold text-foreground">Specifications</h2>
              </div>
              <TabsList>
                <TabsTrigger value="specifications">Technical Specs</TabsTrigger>
                <TabsTrigger value="selection">Selection Guide</TabsTrigger>
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

            <TabsContent value="selection" className="mt-8">
              <Card>
                <CardContent className="p-6 space-y-4">
                  <h3 className="font-bold text-lg text-foreground">How to Select the Right Evaporator</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium">Cooling Capacity</p>
                          <p className="text-sm text-muted-foreground">Match to your heat load calculation</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium">Fin Spacing</p>
                          <p className="text-sm text-muted-foreground">Wider spacing for lower temperatures</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium">Air Throw Distance</p>
                          <p className="text-sm text-muted-foreground">Consider room dimensions</p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium">Defrost Method</p>
                          <p className="text-sm text-muted-foreground">Electric, hot gas, or water defrost</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium">Environment</p>
                          <p className="text-sm text-muted-foreground">Corrosive or hygienic requirements</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium">Noise Level</p>
                          <p className="text-sm text-muted-foreground">EC fans for quiet operation</p>
                        </div>
                      </div>
                    </div>
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
            Need Help with Evaporator Selection?
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            Our technical team can assist with product selection, sizing calculations, 
            and system design for your specific application.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="secondary" className="gap-2">
              <Phone className="h-4 w-4" />
              Contact Technical Support
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
                  <Snowflake className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  Condensing Units
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Complete condensing units to pair with evaporators.
                </p>
                <Link href="/products/condensing-units" className="text-primary text-sm hover:underline">
                  Learn More →
                </Link>
              </CardContent>
            </Card>
            <Card className="group hover:shadow-lg transition-all">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Thermometer className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  Industrial Cooling Systems
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Complete refrigeration systems for large facilities.
                </p>
                <Link href="/products/industrial-cooling-systems" className="text-primary text-sm hover:underline">
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
                  Cold Storage Panels
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Insulated panels for cold room construction.
                </p>
                <Link href="/products/insulated-cold-storage-panels" className="text-primary text-sm hover:underline">
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
