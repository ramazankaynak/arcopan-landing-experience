"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  Building2, 
  Shield, 
  Thermometer, 
  Layers, 
  CheckCircle2, 
  ArrowRight,
  Download,
  Phone,
  Ruler,
  Gauge,
  Wind,
  Award,
  Paintbrush,
  Factory
} from "lucide-react"

const wallPanelTypes = [
  {
    name: "Micro-Rib Wall Panels",
    description: "Clean aesthetic finish with micro-ribbed surface for modern industrial buildings",
    profile: "Micro-Rib 5mm",
    thickness: "40mm - 150mm",
    coating: "Polyester / PVDF",
    applications: ["Industrial Buildings", "Commercial Facades", "Clean Rooms"]
  },
  {
    name: "Flat Wall Panels",
    description: "Smooth surface panels ideal for hygienic and clean room environments",
    profile: "Flat Surface",
    thickness: "50mm - 120mm",
    coating: "Food-grade Plastisol",
    applications: ["Food Processing", "Pharmaceutical", "Hospitals"]
  },
  {
    name: "Secret-Fix Wall Panels",
    description: "Hidden fastener system for seamless exterior appearance",
    profile: "Secret-Fix",
    thickness: "60mm - 150mm",
    coating: "PVDF / HDP",
    applications: ["Architectural", "Commercial", "Retail"]
  }
]

const roofPanelTypes = [
  {
    name: "3-Rib Roof Panels",
    description: "Classic trapezoidal profile with excellent water drainage",
    profile: "3-Rib 333mm",
    thickness: "40mm - 120mm",
    span: "Up to 4.5m",
    applications: ["Industrial Roofs", "Warehouses", "Workshops"]
  },
  {
    name: "5-Rib Roof Panels",
    description: "Enhanced structural performance for longer spans",
    profile: "5-Rib 1000mm",
    thickness: "50mm - 150mm",
    span: "Up to 6m",
    applications: ["Large Warehouses", "Distribution Centers", "Factories"]
  },
  {
    name: "Standing Seam Roof Panels",
    description: "Premium architectural roofing with hidden fasteners",
    profile: "Standing Seam",
    thickness: "60mm - 120mm",
    span: "Up to 5m",
    applications: ["Commercial Buildings", "Retail", "Sports Facilities"]
  }
]

const specifications = {
  wall: [
    { label: "Panel Width", value: "1000mm / 1150mm" },
    { label: "Panel Length", value: "2,000mm - 12,000mm" },
    { label: "Core Material", value: "PIR / PUR / Mineral Wool" },
    { label: "Steel Thickness", value: "0.4mm - 0.7mm (both sides)" },
    { label: "U-Value", value: "From 0.15 W/m²K" },
    { label: "Fire Rating", value: "Up to A2-s1, d0" },
    { label: "Air Permeability", value: "< 0.5 m³/h/m² at 50 Pa" },
    { label: "Wind Load", value: "Up to 3.0 kN/m²" }
  ],
  roof: [
    { label: "Panel Width", value: "1000mm" },
    { label: "Panel Length", value: "2,000mm - 16,000mm" },
    { label: "Core Material", value: "PIR / PUR / EPS" },
    { label: "Steel Thickness", value: "0.5mm - 0.7mm external" },
    { label: "U-Value", value: "From 0.18 W/m²K" },
    { label: "Fire Rating", value: "Up to B-s1, d0" },
    { label: "Snow Load", value: "Up to 2.5 kN/m²" },
    { label: "Slope Minimum", value: "5° (9%)" }
  ]
}

const features = [
  {
    icon: Thermometer,
    title: "Excellent Thermal Performance",
    description: "Low U-values meeting and exceeding current building regulations"
  },
  {
    icon: Shield,
    title: "Fire Safety",
    description: "Range of fire ratings available including non-combustible options"
  },
  {
    icon: Wind,
    title: "Weather Resistant",
    description: "Designed to withstand extreme weather conditions and UV exposure"
  },
  {
    icon: Paintbrush,
    title: "Aesthetic Options",
    description: "Wide range of colors, profiles, and finishes available"
  },
  {
    icon: Factory,
    title: "Fast Installation",
    description: "Pre-fabricated panels reduce on-site construction time significantly"
  },
  {
    icon: Gauge,
    title: "Structural Integrity",
    description: "High load-bearing capacity with long spanning capabilities"
  }
]

const colorOptions = [
  { name: "Pure White", code: "RAL 9010" },
  { name: "Traffic White", code: "RAL 9016" },
  { name: "Light Grey", code: "RAL 7035" },
  { name: "Anthracite Grey", code: "RAL 7016" },
  { name: "Silver Metallic", code: "RAL 9006" },
  { name: "Signal Blue", code: "RAL 5005" },
  { name: "Moss Green", code: "RAL 6005" },
  { name: "Brick Red", code: "RAL 8004" }
]

const certifications = [
  { name: "CE Marking", description: "EN 14509 Compliance" },
  { name: "FM Approved", description: "Factory Mutual" },
  { name: "LPCB", description: "Loss Prevention" },
  { name: "BBA Certified", description: "British Board of Agrément" },
  { name: "EPD", description: "Environmental Product Declaration" },
  { name: "ISO 14001", description: "Environmental Management" }
]

export default function InsulatedWallRoofPanelsPage() {
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
                <Badge variant="outline" className="text-xs">Building Envelope</Badge>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
                Insulated Wall & <span className="text-primary">Roof Panels</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Complete building envelope solutions combining superior thermal insulation with 
                architectural aesthetics. Our panels deliver energy efficiency, weather protection, 
                and design flexibility for industrial, commercial, and cold storage applications.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="gap-2">
                  <Phone className="h-4 w-4" />
                  Request Quote
                </Button>
                <Button size="lg" variant="outline" className="gap-2">
                  <Download className="h-4 w-4" />
                  Technical Brochure
                </Button>
              </div>
              <div className="flex items-center gap-6 pt-4">
                <div className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-primary" />
                  <span className="text-sm text-muted-foreground">CE Certified</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-primary" />
                  <span className="text-sm text-muted-foreground">25 Year Warranty</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/products/wall-roof-panels-hero.jpg"
                  alt="Insulated Wall and Roof Panels"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-card p-4 rounded-xl shadow-lg border">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Ruler className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Panel Length</p>
                    <p className="font-bold text-foreground">Up to 16m</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wall Panels Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">Wall Panel Systems</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Insulated Wall Panels
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our wall panels combine exceptional thermal performance with attractive facades,
              suitable for industrial, commercial, and architectural applications.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {wallPanelTypes.map((panel, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Building2 className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors">
                    {panel.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">{panel.description}</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Profile:</span>
                      <span className="font-medium">{panel.profile}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Thickness:</span>
                      <span className="font-medium">{panel.thickness}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Coating:</span>
                      <span className="font-medium">{panel.coating}</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1 pt-2">
                    {panel.applications.map((app, i) => (
                      <Badge key={i} variant="secondary" className="text-xs">{app}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Roof Panels Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">Roof Panel Systems</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Insulated Roof Panels
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              High-performance roofing solutions designed for durability, weather resistance,
              and excellent thermal insulation with long spanning capabilities.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {roofPanelTypes.map((panel, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                    <Layers className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors">
                    {panel.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">{panel.description}</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Profile:</span>
                      <span className="font-medium">{panel.profile}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Thickness:</span>
                      <span className="font-medium">{panel.thickness}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Max Span:</span>
                      <span className="font-medium">{panel.span}</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1 pt-2">
                    {panel.applications.map((app, i) => (
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
      <section className="py-20">
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

      {/* Color Options */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">Finishes</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Color & Coating Options
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Choose from our extensive range of standard colors or specify custom RAL colors
              to match your architectural vision.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {colorOptions.map((color, index) => (
              <div key={index} className="text-center">
                <div className="aspect-square rounded-lg bg-muted border-2 border-border mb-2 flex items-center justify-center">
                  <Paintbrush className="h-8 w-8 text-muted-foreground/50" />
                </div>
                <p className="text-sm font-medium text-foreground">{color.name}</p>
                <p className="text-xs text-muted-foreground">{color.code}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <Tabs defaultValue="wall" className="space-y-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <Badge variant="outline" className="mb-4">Technical Data</Badge>
                <h2 className="text-3xl font-bold text-foreground">Specifications</h2>
              </div>
              <TabsList>
                <TabsTrigger value="wall">Wall Panels</TabsTrigger>
                <TabsTrigger value="roof">Roof Panels</TabsTrigger>
                <TabsTrigger value="certifications">Certifications</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="wall" className="mt-8">
              <Card>
                <CardContent className="p-6">
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {specifications.wall.map((spec, index) => (
                      <div key={index} className="space-y-1">
                        <p className="text-sm text-muted-foreground">{spec.label}</p>
                        <p className="font-semibold text-foreground">{spec.value}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="roof" className="mt-8">
              <Card>
                <CardContent className="p-6">
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {specifications.roof.map((spec, index) => (
                      <div key={index} className="space-y-1">
                        <p className="text-sm text-muted-foreground">{spec.label}</p>
                        <p className="font-semibold text-foreground">{spec.value}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="certifications" className="mt-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {certifications.map((cert, index) => (
                  <Card key={index}>
                    <CardContent className="p-4 flex items-center gap-3">
                      <Award className="h-8 w-8 text-primary flex-shrink-0" />
                      <div>
                        <h4 className="font-medium text-foreground">{cert.name}</h4>
                        <p className="text-sm text-muted-foreground">{cert.description}</p>
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
            Need Custom Panel Solutions?
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            Our technical team can help you select the optimal panel system for your
            specific project requirements. Contact us for expert guidance.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="secondary" className="gap-2">
              <Phone className="h-4 w-4" />
              Speak to an Expert
            </Button>
            <Button size="lg" variant="outline" className="gap-2 bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
              <Download className="h-4 w-4" />
              Download Specifications
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
                  Cold Storage Panels
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Specialized panels for cold rooms and freezer applications.
                </p>
                <Link href="/products/insulated-cold-storage-panels" className="text-primary text-sm hover:underline">
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
                  Insulated doors to complete your panel system.
                </p>
                <Link href="/products/insulated-cold-room-doors" className="text-primary text-sm hover:underline">
                  Learn More →
                </Link>
              </CardContent>
            </Card>
            <Card className="group hover:shadow-lg transition-all">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle2 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  Profiles & Fixings
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Complete range of accessories for panel installation.
                </p>
                <Link href="/products/profiles-fixings" className="text-primary text-sm hover:underline">
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
