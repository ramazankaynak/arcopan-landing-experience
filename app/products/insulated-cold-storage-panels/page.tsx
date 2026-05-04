"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  Snowflake, 
  Shield, 
  Thermometer, 
  Layers, 
  CheckCircle2, 
  ArrowRight,
  Download,
  Phone,
  Ruler,
  Gauge,
  Clock,
  Award
} from "lucide-react"

const panelTypes = [
  {
    name: "PIR Insulated Panels",
    description: "Polyisocyanurate core panels with excellent fire resistance and thermal performance",
    thickness: "40mm - 200mm",
    rValue: "R-6 to R-30",
    fireRating: "B-s1, d0",
    applications: ["Cold Rooms", "Freezer Rooms", "Food Processing"],
    image: "/images/products/pir-panel.jpg"
  },
  {
    name: "PUR Insulated Panels",
    description: "Polyurethane foam core panels offering superior insulation for extreme temperatures",
    thickness: "50mm - 250mm",
    rValue: "R-7 to R-38",
    fireRating: "B-s2, d0",
    applications: ["Deep Freezers", "Blast Freezers", "Pharmaceutical Storage"],
    image: "/images/products/pur-panel.jpg"
  },
  {
    name: "EPS Insulated Panels",
    description: "Expanded polystyrene core panels for cost-effective cold storage solutions",
    thickness: "50mm - 200mm",
    rValue: "R-4 to R-25",
    fireRating: "E",
    applications: ["Chilled Storage", "Warehouses", "Distribution Centers"],
    image: "/images/products/eps-panel.jpg"
  },
  {
    name: "Mineral Wool Panels",
    description: "Non-combustible panels with excellent acoustic and fire performance",
    thickness: "50mm - 150mm",
    rValue: "R-3 to R-20",
    fireRating: "A2-s1, d0",
    applications: ["Fire-rated Areas", "Clean Rooms", "Pharmaceutical"],
    image: "/images/products/mineral-wool-panel.jpg"
  }
]

const specifications = [
  { label: "Panel Width", value: "1000mm / 1150mm" },
  { label: "Panel Length", value: "Up to 16,000mm" },
  { label: "Core Density", value: "38-42 kg/m³" },
  { label: "Steel Thickness", value: "0.4mm - 0.7mm" },
  { label: "Coating", value: "Polyester / PVDF / Plastisol" },
  { label: "Joint System", value: "Cam-lock / Tongue & Groove" },
  { label: "Temperature Range", value: "-50°C to +80°C" },
  { label: "Thermal Conductivity", value: "0.020 - 0.024 W/mK" }
]

const features = [
  {
    icon: Thermometer,
    title: "Superior Thermal Insulation",
    description: "Industry-leading R-values ensuring minimal heat transfer and maximum energy efficiency"
  },
  {
    icon: Shield,
    title: "Fire Resistant",
    description: "Euroclass fire ratings from A2 to B, meeting the strictest safety standards"
  },
  {
    icon: Snowflake,
    title: "Extreme Temperature Performance",
    description: "Designed for temperatures from -50°C to +80°C without degradation"
  },
  {
    icon: Layers,
    title: "Hygienic Surface",
    description: "Food-grade coatings suitable for HACCP and FDA compliant facilities"
  },
  {
    icon: Ruler,
    title: "Custom Dimensions",
    description: "Panels manufactured to exact specifications for perfect fit installation"
  },
  {
    icon: Clock,
    title: "Quick Installation",
    description: "Interlocking joint systems enable rapid assembly and reduced labor costs"
  }
]

const applications = [
  { name: "Cold Rooms (0°C to +8°C)", description: "Fresh food storage and distribution" },
  { name: "Freezer Rooms (-18°C to -25°C)", description: "Frozen food and ice cream storage" },
  { name: "Blast Freezers (-35°C to -45°C)", description: "Rapid freezing applications" },
  { name: "Pharmaceutical Storage", description: "GDP compliant temperature-controlled storage" },
  { name: "Food Processing Plants", description: "Hygienic production environments" },
  { name: "Logistics Centers", description: "Temperature-controlled distribution hubs" }
]

const certifications = [
  { name: "CE Marking", description: "European conformity" },
  { name: "FM Approved", description: "Factory Mutual certification" },
  { name: "ISO 9001:2015", description: "Quality management" },
  { name: "HACCP Compatible", description: "Food safety standards" },
  { name: "EN 14509", description: "European panel standard" },
  { name: "BRC Compliant", description: "Food industry certification" }
]

export default function InsulatedColdStoragePanelsPage() {
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
                <Badge variant="outline" className="text-xs">Cold Storage & Insulation</Badge>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
                Insulated Cold Storage <span className="text-primary">Panels</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                High-performance sandwich panels engineered for cold storage, freezer rooms, and 
                temperature-controlled environments. Our panels deliver exceptional thermal insulation, 
                structural integrity, and hygienic surfaces for demanding applications.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="gap-2">
                  <Phone className="h-4 w-4" />
                  Request Quote
                </Button>
                <Button size="lg" variant="outline" className="gap-2">
                  <Download className="h-4 w-4" />
                  Download Catalog
                </Button>
              </div>
              <div className="flex items-center gap-6 pt-4">
                <div className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-primary" />
                  <span className="text-sm text-muted-foreground">CE Certified</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-primary" />
                  <span className="text-sm text-muted-foreground">10 Year Warranty</span>
                </div>
                <div className="flex items-center gap-2">
                  <Gauge className="h-5 w-5 text-primary" />
                  <span className="text-sm text-muted-foreground">ISO 9001</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/products/cold-storage-panels-hero.jpg"
                  alt="Insulated Cold Storage Panels"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-card p-4 rounded-xl shadow-lg border">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Thermometer className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Temperature Range</p>
                    <p className="font-bold text-foreground">-50°C to +80°C</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Panel Types Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">Panel Types</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Choose the Right Panel for Your Application
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We offer a comprehensive range of insulated panels with different core materials
              to meet specific thermal, fire, and budget requirements.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {panelTypes.map((panel, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
                <div className="aspect-[4/3] relative bg-muted">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Layers className="h-16 w-16 text-muted-foreground/30" />
                  </div>
                </div>
                <CardContent className="p-6 space-y-4">
                  <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors">
                    {panel.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">{panel.description}</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Thickness:</span>
                      <span className="font-medium">{panel.thickness}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">R-Value:</span>
                      <span className="font-medium">{panel.rValue}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Fire Rating:</span>
                      <span className="font-medium">{panel.fireRating}</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1">
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
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">Features & Benefits</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose ARCOPAN Panels?
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
                <h2 className="text-3xl font-bold text-foreground">Specifications & Standards</h2>
              </div>
              <TabsList>
                <TabsTrigger value="specifications">Specifications</TabsTrigger>
                <TabsTrigger value="applications">Applications</TabsTrigger>
                <TabsTrigger value="certifications">Certifications</TabsTrigger>
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
            Ready to Start Your Cold Storage Project?
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            Contact our engineering team for expert consultation and custom panel solutions 
            tailored to your specific requirements.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="secondary" className="gap-2">
              <Phone className="h-4 w-4" />
              Contact Sales Team
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
                  Insulated Wall & Roof Panels
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Complete building envelope solutions for industrial and commercial applications.
                </p>
                <Link href="/products/insulated-wall-roof-panels" className="text-primary text-sm hover:underline">
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
                  Insulated hinged and sliding doors for cold storage applications.
                </p>
                <Link href="/products/insulated-cold-room-doors" className="text-primary text-sm hover:underline">
                  Learn More →
                </Link>
              </CardContent>
            </Card>
            <Card className="group hover:shadow-lg transition-all">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Snowflake className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  Industrial Cooling Systems
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Complete refrigeration solutions for your cold storage facility.
                </p>
                <Link href="/products/industrial-cooling-systems" className="text-primary text-sm hover:underline">
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
