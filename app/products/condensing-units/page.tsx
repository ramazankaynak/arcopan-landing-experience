"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  Snowflake, 
  Shield, 
  Thermometer, 
  CheckCircle2, 
  ArrowRight,
  Download,
  Phone,
  Gauge,
  Award,
  Zap,
  Fan,
  Volume2,
  Settings
} from "lucide-react"

const unitTypes = [
  {
    name: "Semi-Hermetic Condensing Units",
    description: "Heavy-duty units with serviceable compressors for commercial and industrial cold rooms",
    capacity: "5kW - 100kW",
    tempRange: "-40°C to +10°C",
    compressors: ["Bitzer", "Copeland", "Frascold"],
    features: ["Serviceable compressor", "High reliability", "Long service life"],
    image: "/images/products/semi-hermetic-unit.jpg"
  },
  {
    name: "Scroll Condensing Units",
    description: "Efficient scroll compressor units ideal for medium temperature applications",
    capacity: "3kW - 40kW",
    tempRange: "-25°C to +10°C",
    compressors: ["Copeland", "Danfoss", "Invotech"],
    features: ["High efficiency", "Low vibration", "Compact design"],
    image: "/images/products/scroll-unit.jpg"
  },
  {
    name: "Hermetic Condensing Units",
    description: "Compact sealed units for small to medium cold rooms and display cases",
    capacity: "0.5kW - 10kW",
    tempRange: "-25°C to +10°C",
    compressors: ["Tecumseh", "Embraco", "Secop"],
    features: ["Maintenance-free", "Quiet operation", "Economical"],
    image: "/images/products/hermetic-unit.jpg"
  },
  {
    name: "Inverter Condensing Units",
    description: "Variable speed units with optimal efficiency at partial load conditions",
    capacity: "2kW - 50kW",
    tempRange: "-35°C to +10°C",
    compressors: ["Bitzer Varispeed", "Copeland Digital"],
    features: ["30% energy savings", "Precise control", "Soft start"],
    image: "/images/products/inverter-unit.jpg"
  }
]

const specifications = [
  { label: "Cooling Capacity", value: "0.5kW - 100kW" },
  { label: "Refrigerants", value: "R404A, R449A, R448A, R290" },
  { label: "Evaporating Temp", value: "-45°C to +10°C" },
  { label: "Ambient Temp", value: "Up to +45°C" },
  { label: "Voltage Options", value: "230V/400V - 50Hz" },
  { label: "Condenser Type", value: "Air-cooled / Water-cooled" },
  { label: "Control", value: "Electronic / Digital" },
  { label: "Certification", value: "CE, PED, EN378" }
]

const features = [
  {
    icon: Gauge,
    title: "High Efficiency",
    description: "Optimized design with premium components for maximum COP and low energy consumption"
  },
  {
    icon: Volume2,
    title: "Low Noise",
    description: "Acoustic optimization with low-noise fans and vibration dampening mounts"
  },
  {
    icon: Shield,
    title: "Built to Last",
    description: "Robust construction with corrosion-resistant housing and high-quality components"
  },
  {
    icon: Zap,
    title: "Easy Installation",
    description: "Pre-charged and factory tested, ready for quick on-site connection"
  },
  {
    icon: Settings,
    title: "Smart Controls",
    description: "Integrated electronic controllers with monitoring and alarm functions"
  },
  {
    icon: Fan,
    title: "Optimal Airflow",
    description: "Precisely engineered condenser coils and fans for efficient heat rejection"
  }
]

const applications = [
  { name: "Cold Rooms (+2°C to +8°C)", description: "Fresh food storage" },
  { name: "Freezer Rooms (-18°C to -25°C)", description: "Frozen food storage" },
  { name: "Display Refrigerators", description: "Retail applications" },
  { name: "Process Cooling", description: "Industrial cooling" },
  { name: "Dairy & Beverage", description: "Product cooling" },
  { name: "Pharmaceutical", description: "Controlled storage" }
]

export default function CondensingUnitsPage() {
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
                Condensing <span className="text-primary">Units</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                High-efficiency condensing units for commercial and industrial refrigeration 
                applications. From compact hermetic units to heavy-duty semi-hermetic systems,
                we offer solutions for every cooling requirement.
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
                  <span className="text-sm text-muted-foreground">2 Year Warranty</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/products/condensing-units-hero.jpg"
                  alt="Condensing Units"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-card p-4 rounded-xl shadow-lg border">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Snowflake className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Capacity Range</p>
                    <p className="font-bold text-foreground">0.5kW - 100kW</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Unit Types Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">Product Range</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Condensing Unit Types
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Choose from our comprehensive range of condensing units featuring compressors
              from leading manufacturers.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {unitTypes.map((unit, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Snowflake className="h-7 w-7 text-primary" />
                    </div>
                    <div className="flex-1 space-y-3">
                      <h3 className="font-bold text-xl text-foreground group-hover:text-primary transition-colors">
                        {unit.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">{unit.description}</p>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-muted-foreground">Capacity:</span>
                          <span className="font-medium ml-2">{unit.capacity}</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Temp:</span>
                          <span className="font-medium ml-2">{unit.tempRange}</span>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-1 pt-2">
                        {unit.compressors.map((comp, i) => (
                          <Badge key={i} variant="secondary" className="text-xs">{comp}</Badge>
                        ))}
                      </div>
                      <div className="pt-2 space-y-1">
                        {unit.features.map((feature, i) => (
                          <div key={i} className="flex items-center gap-2 text-sm">
                            <CheckCircle2 className="h-3.5 w-3.5 text-primary" />
                            <span className="text-muted-foreground">{feature}</span>
                          </div>
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
            <Badge variant="outline" className="mb-4">Features & Benefits</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Built for Performance
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
                <h2 className="text-3xl font-bold text-foreground">Specifications & Applications</h2>
              </div>
              <TabsList>
                <TabsTrigger value="specifications">Specifications</TabsTrigger>
                <TabsTrigger value="applications">Applications</TabsTrigger>
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

            <TabsContent value="applications" className="mt-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {applications.map((app, index) => (
                  <Card key={index}>
                    <CardContent className="p-4 flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-medium text-foreground">{app.name}</h4>
                        <p className="text-sm text-muted-foreground">{app.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Need Help Selecting the Right Unit?
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            Our technical team can help you choose the optimal condensing unit based on your
            cooling capacity, temperature requirements, and application.
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
                  <Fan className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  Evaporators
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Unit coolers to pair with your condensing unit.
                </p>
                <Link href="/products/evaporators" className="text-primary text-sm hover:underline">
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
                  Complete refrigeration systems for larger applications.
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
                  Insulated panels for your cold room construction.
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
