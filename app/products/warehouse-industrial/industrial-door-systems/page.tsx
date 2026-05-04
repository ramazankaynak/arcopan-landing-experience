"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { 
  DoorOpen, 
  Zap, 
  Shield, 
  Wind,
  CheckCircle2,
  Download,
  Phone,
  ChevronRight
} from "lucide-react"

const doorTypes = [
  {
    name: "Sectional Doors",
    description: "Vertical opening industrial overhead doors",
    size: "Up to 10m x 8m",
    speed: "0.3 m/s"
  },
  {
    name: "High-Speed Doors",
    description: "Rapid opening for high traffic areas",
    size: "Up to 8m x 6m",
    speed: "Up to 3.0 m/s"
  },
  {
    name: "Rolling Shutters",
    description: "Compact vertical coiling doors",
    size: "Up to 12m x 8m",
    speed: "0.2 m/s"
  },
  {
    name: "Folding Doors",
    description: "Side-folding for large openings",
    size: "Up to 20m x 8m",
    speed: "0.5 m/s"
  },
]

const features = [
  {
    icon: Zap,
    title: "Energy Efficient",
    description: "Insulated panels and high-speed operation minimize heat loss"
  },
  {
    icon: Shield,
    title: "Safety Systems",
    description: "Photo sensors, safety edges, and emergency stop features"
  },
  {
    icon: Wind,
    title: "Wind Resistant",
    description: "Engineered to withstand high wind loads and extreme weather"
  },
  {
    icon: DoorOpen,
    title: "Automation Ready",
    description: "Compatible with all major access control systems"
  },
]

const applications = [
  "Warehouses",
  "Loading Bays",
  "Manufacturing",
  "Cold Storage",
  "Logistics Centers",
  "Fire Stations",
  "Aircraft Hangars",
  "Automotive"
]

export default function IndustrialDoorSystemsPage() {
  const [selectedImage, setSelectedImage] = useState(0)

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
            <Link href="/products/warehouse-industrial" className="hover:text-primary transition-colors">Warehouse & Industrial</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground font-medium">Industrial Door Systems</span>
          </nav>
        </div>
      </div>

      {/* Product Header */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-4">
              <div className="aspect-[4/3] relative rounded-xl overflow-hidden bg-muted border">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <DoorOpen className="h-24 w-24 mx-auto text-primary/20 mb-4" />
                    <p className="text-muted-foreground">Industrial Door System</p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-4 gap-3">
                {[0,1,2,3].map((index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`aspect-square rounded-lg overflow-hidden bg-muted border-2 transition-all ${
                      selectedImage === index ? "border-primary" : "border-transparent hover:border-primary/50"
                    }`}
                  >
                    <div className="w-full h-full flex items-center justify-center">
                      <DoorOpen className="h-8 w-8 text-primary/30" />
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <Badge className="mb-3 bg-primary/10 text-primary border-primary/20">Warehouse & Industrial</Badge>
                <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Industrial Door Systems
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Heavy-duty industrial doors for warehouses, loading bays, and manufacturing 
                  facilities. Our range includes sectional doors, high-speed doors, rolling 
                  shutters, and folding doors for all industrial applications.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Badge variant="outline" className="px-3 py-1">
                  <CheckCircle2 className="h-3.5 w-3.5 mr-1.5 text-green-500" />
                  CE Certified
                </Badge>
                <Badge variant="outline" className="px-3 py-1">
                  <CheckCircle2 className="h-3.5 w-3.5 mr-1.5 text-green-500" />
                  EN 13241
                </Badge>
                <Badge variant="outline" className="px-3 py-1">
                  <CheckCircle2 className="h-3.5 w-3.5 mr-1.5 text-green-500" />
                  ISO 9001
                </Badge>
              </div>

              <div className="grid grid-cols-2 gap-4 py-6 border-y">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Max Size</p>
                  <p className="text-xl font-semibold text-foreground">20m x 8m</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Max Speed</p>
                  <p className="text-xl font-semibold text-foreground">3.0 m/s</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Door Types</p>
                  <p className="text-xl font-semibold text-foreground">4+ Types</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Insulation</p>
                  <p className="text-xl font-semibold text-foreground">40-80mm</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="flex-1">
                  <Phone className="mr-2 h-5 w-5" />
                  Request Quote
                </Button>
                <Button size="lg" variant="outline" className="flex-1">
                  <Download className="mr-2 h-5 w-5" />
                  Download Brochure
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Door Types */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-foreground mb-8">Door Types</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {doorTypes.map((door, index) => (
              <Card key={index} className="border-none shadow-sm">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <DoorOpen className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{door.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{door.description}</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Size:</span>
                      <span className="font-medium">{door.size}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Speed:</span>
                      <span className="font-medium">{door.speed}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features & Applications */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="features" className="w-full">
            <TabsList className="w-full justify-start bg-muted/50 border rounded-lg p-1 h-auto flex-wrap">
              <TabsTrigger value="features" className="px-6 py-2.5">Features</TabsTrigger>
              <TabsTrigger value="applications" className="px-6 py-2.5">Applications</TabsTrigger>
              <TabsTrigger value="downloads" className="px-6 py-2.5">Downloads</TabsTrigger>
            </TabsList>

            <TabsContent value="features" className="mt-8">
              <div className="grid md:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <Card key={index} className="border-none shadow-sm">
                    <CardContent className="p-6">
                      <div className="flex gap-4">
                        <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                          <feature.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                          <p className="text-muted-foreground text-sm">{feature.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="applications" className="mt-8">
              <Card className="border-none shadow-sm">
                <CardContent className="p-6">
                  <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
                    {applications.map((app, index) => (
                      <div key={index} className="flex items-center gap-3 p-4 rounded-lg bg-muted/50">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="text-foreground">{app}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="downloads" className="mt-8">
              <Card className="border-none shadow-sm">
                <CardContent className="p-6">
                  <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {[
                      { name: "Sectional Doors", size: "4.5 MB" },
                      { name: "High-Speed Doors", size: "3.8 MB" },
                      { name: "Rolling Shutters", size: "3.2 MB" },
                      { name: "Folding Doors", size: "4.1 MB" },
                      { name: "Control Systems", size: "2.8 MB" },
                      { name: "Maintenance Guide", size: "2.1 MB" },
                    ].map((doc, index) => (
                      <Button key={index} variant="outline" className="h-auto p-4 justify-start">
                        <Download className="h-5 w-5 mr-3 text-primary" />
                        <div className="text-left">
                          <p className="font-medium">{doc.name}</p>
                          <p className="text-xs text-muted-foreground">PDF • {doc.size}</p>
                        </div>
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Need Industrial Door Solutions?
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Our team can help you select the right door system for your 
            specific operational requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Contact Our Experts
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
              View All Products
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
