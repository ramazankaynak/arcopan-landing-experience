"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  DoorClosed, 
  Shield, 
  Thermometer, 
  CheckCircle2, 
  ArrowRight,
  Download,
  Phone,
  Gauge,
  Award,
  Zap,
  Lock,
  Move,
  Wind
} from "lucide-react"

const doorTypes = [
  {
    name: "Hinged Cold Room Doors",
    description: "Traditional swing doors for cold rooms and freezers with excellent sealing",
    openingType: "Single/Double Swing",
    thickness: "60mm - 150mm",
    tempRange: "+10°C to -45°C",
    features: ["Cam-lift hinges", "Magnetic gaskets", "Self-closing option"],
    image: "/images/products/hinged-door.jpg"
  },
  {
    name: "Sliding Cold Room Doors",
    description: "Space-saving sliding doors for high-traffic cold storage areas",
    openingType: "Manual/Automatic",
    thickness: "80mm - 180mm",
    tempRange: "+10°C to -45°C",
    features: ["Bottom guide rail", "Anti-frost heaters", "Safety sensors"],
    image: "/images/products/sliding-door.jpg"
  },
  {
    name: "Service Doors",
    description: "Lightweight traffic doors for frequent pedestrian access",
    openingType: "Single/Double Swing",
    thickness: "50mm - 80mm",
    tempRange: "+5°C to -25°C",
    features: ["Impact resistant", "Porthole window", "Kick plates"],
    image: "/images/products/service-door.jpg"
  },
  {
    name: "High-Speed Doors",
    description: "Rapid opening doors minimizing temperature loss in busy environments",
    openingType: "Vertical Roll-up",
    thickness: "Flexible curtain",
    tempRange: "+15°C to -30°C",
    features: ["Opening speed 2m/s", "Auto-repair", "Motion sensors"],
    image: "/images/products/high-speed-door.jpg"
  },
  {
    name: "Fire-Rated Cold Doors",
    description: "Combined cold storage and fire protection performance",
    openingType: "Swing/Sliding",
    thickness: "100mm - 150mm",
    tempRange: "0°C to -25°C",
    features: ["EI60/EI90 rated", "Smoke seals", "Auto-closing"],
    image: "/images/products/fire-rated-door.jpg"
  },
  {
    name: "Industrial Sectional Doors",
    description: "Large opening doors for vehicle and goods access",
    openingType: "Vertical Sectional",
    thickness: "42mm - 80mm",
    tempRange: "+10°C to -25°C",
    features: ["Insulated sections", "Wind resistant", "Safety devices"],
    image: "/images/products/sectional-door.jpg"
  }
]

const specifications = [
  { label: "Door Leaf Thickness", value: "60mm - 180mm" },
  { label: "Maximum Width", value: "Up to 5,000mm" },
  { label: "Maximum Height", value: "Up to 6,000mm" },
  { label: "Core Material", value: "PIR / PUR Foam" },
  { label: "Facing Material", value: "Stainless Steel / Painted Steel" },
  { label: "Gasket Type", value: "Magnetic / Compression" },
  { label: "Frame Material", value: "Aluminum / Stainless Steel" },
  { label: "Heater Option", value: "Frame & Threshold Heating" }
]

const features = [
  {
    icon: Thermometer,
    title: "Thermal Efficiency",
    description: "Excellent U-values and minimal thermal bridging for energy-efficient operation"
  },
  {
    icon: Lock,
    title: "Secure Sealing",
    description: "Multiple sealing systems prevent air infiltration and maintain temperature"
  },
  {
    icon: Zap,
    title: "Anti-Frost Heating",
    description: "Integrated heaters prevent ice build-up on frames and thresholds"
  },
  {
    icon: Shield,
    title: "Hygienic Design",
    description: "Smooth surfaces and food-grade materials for easy cleaning"
  },
  {
    icon: Move,
    title: "Easy Operation",
    description: "Ergonomic handles and smooth operation even at extreme temperatures"
  },
  {
    icon: Wind,
    title: "Air Tight",
    description: "Certified air permeability ratings for controlled environments"
  }
]

const applications = [
  { name: "Cold Storage Facilities", temp: "0°C to +8°C" },
  { name: "Freezer Rooms", temp: "-18°C to -25°C" },
  { name: "Blast Freezers", temp: "-35°C to -45°C" },
  { name: "Food Processing", temp: "Various" },
  { name: "Pharmaceutical Storage", temp: "+2°C to +8°C" },
  { name: "Distribution Centers", temp: "Multi-temp" }
]

const accessories = [
  "Porthole Windows",
  "Kick Plates",
  "Safety Bumpers",
  "Traffic Lights",
  "Proximity Sensors",
  "Remote Controls",
  "Emergency Release",
  "Digital Thermometers"
]

export default function InsulatedColdRoomDoorsPage() {
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
                Insulated Cold Room <span className="text-primary">Doors</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                High-performance insulated doors engineered for cold storage, freezer rooms, 
                and temperature-controlled environments. Our doors deliver exceptional thermal 
                insulation, reliable sealing, and smooth operation even at extreme temperatures.
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
                  <span className="text-sm text-muted-foreground">5 Year Warranty</span>
                </div>
                <div className="flex items-center gap-2">
                  <Gauge className="h-5 w-5 text-primary" />
                  <span className="text-sm text-muted-foreground">EN 14509</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/products/cold-room-doors-hero.jpg"
                  alt="Insulated Cold Room Doors"
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
                    <p className="font-bold text-foreground">+10°C to -45°C</p>
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
            <Badge variant="outline" className="mb-4">Door Range</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Complete Door Solutions
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From standard hinged doors to high-speed automatic systems, we offer a comprehensive
              range of cold room doors for every application.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {doorTypes.map((door, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
                <div className="aspect-[16/10] relative bg-muted">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <DoorClosed className="h-16 w-16 text-muted-foreground/30" />
                  </div>
                </div>
                <CardContent className="p-6 space-y-4">
                  <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors">
                    {door.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">{door.description}</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Opening:</span>
                      <span className="font-medium">{door.openingType}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Thickness:</span>
                      <span className="font-medium">{door.thickness}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Temp Range:</span>
                      <span className="font-medium">{door.tempRange}</span>
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
              Engineered for Performance
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
                <h2 className="text-3xl font-bold text-foreground">Specifications & Options</h2>
              </div>
              <TabsList>
                <TabsTrigger value="specifications">Specifications</TabsTrigger>
                <TabsTrigger value="applications">Applications</TabsTrigger>
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

            <TabsContent value="applications" className="mt-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {applications.map((app, index) => (
                  <Card key={index}>
                    <CardContent className="p-4 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="font-medium text-foreground">{app.name}</span>
                      </div>
                      <Badge variant="secondary">{app.temp}</Badge>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="accessories" className="mt-8">
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
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Find the Right Door for Your Application
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            Our technical team can help you select the optimal door solution based on your
            temperature requirements, traffic patterns, and space constraints.
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
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  Cold Storage Panels
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  High-performance insulated panels for cold rooms.
                </p>
                <Link href="/products/insulated-cold-storage-panels" className="text-primary text-sm hover:underline">
                  Learn More →
                </Link>
              </CardContent>
            </Card>
            <Card className="group hover:shadow-lg transition-all">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  Industrial Cooling Systems
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Complete refrigeration solutions for your facility.
                </p>
                <Link href="/products/industrial-cooling-systems" className="text-primary text-sm hover:underline">
                  Learn More →
                </Link>
              </CardContent>
            </Card>
            <Card className="group hover:shadow-lg transition-all">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Move className="h-6 w-6 text-primary" />
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
          </div>
        </div>
      </section>
    </div>
  )
}
