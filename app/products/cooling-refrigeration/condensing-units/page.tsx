"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { 
  Fan, 
  Gauge, 
  Zap, 
  ThermometerSnowflake,
  CheckCircle2,
  ArrowRight,
  Download,
  Phone,
  ChevronRight
} from "lucide-react"

const unitTypes = [
  {
    name: "Semi-Hermetic Units",
    description: "Medium to large capacity applications",
    capacity: "5 - 150 kW",
    refrigerant: "R448A, R449A, R407F"
  },
  {
    name: "Scroll Condensing Units",
    description: "Small to medium capacity, quiet operation",
    capacity: "2 - 40 kW",
    refrigerant: "R448A, R449A, R407A"
  },
  {
    name: "Inverter Units",
    description: "Variable capacity for optimal efficiency",
    capacity: "3 - 80 kW",
    refrigerant: "R448A, R449A, R407F"
  },
  {
    name: "Low-Temp Units",
    description: "Deep freeze applications",
    capacity: "3 - 100 kW",
    refrigerant: "R448A, R449A, R407F"
  },
]

const features = [
  {
    icon: Zap,
    title: "High Efficiency",
    description: "EC fans and high-efficiency compressors for reduced energy consumption"
  },
  {
    icon: ThermometerSnowflake,
    title: "Wide Temperature Range",
    description: "Suitable for medium and low temperature applications"
  },
  {
    icon: Gauge,
    title: "Smart Controls",
    description: "Integrated electronic controllers with remote monitoring capability"
  },
  {
    icon: Fan,
    title: "Low Noise Operation",
    description: "Optimized fan design for reduced noise levels"
  },
]

const applications = [
  "Cold Rooms",
  "Walk-in Freezers",
  "Display Cabinets",
  "Process Cooling",
  "Food Processing",
  "Supermarkets",
  "Distribution Centers",
  "Restaurants"
]

export default function CondensingUnitsPage() {
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
            <Link href="/products/cooling-refrigeration" className="hover:text-primary transition-colors">Cooling & Refrigeration</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground font-medium">Condensing Units</span>
          </nav>
        </div>
      </div>

      {/* Product Header */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="aspect-[4/3] relative rounded-xl overflow-hidden bg-muted border">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <Fan className="h-24 w-24 mx-auto text-primary/20 mb-4" />
                    <p className="text-muted-foreground">Condensing Unit</p>
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
                      <Fan className="h-8 w-8 text-primary/30" />
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <Badge className="mb-3 bg-primary/10 text-primary border-primary/20">Cooling & Refrigeration</Badge>
                <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Condensing Units
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  High-performance condensing units for commercial and industrial refrigeration. 
                  Our range includes semi-hermetic, scroll, and inverter-driven units designed 
                  for reliability, efficiency, and environmental compliance.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Badge variant="outline" className="px-3 py-1">
                  <CheckCircle2 className="h-3.5 w-3.5 mr-1.5 text-green-500" />
                  CE Certified
                </Badge>
                <Badge variant="outline" className="px-3 py-1">
                  <CheckCircle2 className="h-3.5 w-3.5 mr-1.5 text-green-500" />
                  F-Gas Compliant
                </Badge>
                <Badge variant="outline" className="px-3 py-1">
                  <CheckCircle2 className="h-3.5 w-3.5 mr-1.5 text-green-500" />
                  ErP Ready
                </Badge>
              </div>

              <div className="grid grid-cols-2 gap-4 py-6 border-y">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Capacity Range</p>
                  <p className="text-xl font-semibold text-foreground">2 - 150 kW</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Temperature Range</p>
                  <p className="text-xl font-semibold text-foreground">-40°C to +10°C</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Refrigerants</p>
                  <p className="text-xl font-semibold text-foreground">R448A/R449A</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Compressor Types</p>
                  <p className="text-xl font-semibold text-foreground">Multiple</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="flex-1">
                  <Phone className="mr-2 h-5 w-5" />
                  Request Quote
                </Button>
                <Button size="lg" variant="outline" className="flex-1">
                  <Download className="mr-2 h-5 w-5" />
                  Download Catalog
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Unit Types */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-foreground mb-8">Unit Types</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {unitTypes.map((unit, index) => (
              <Card key={index} className="border-none shadow-sm">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Fan className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{unit.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{unit.description}</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Capacity:</span>
                      <span className="font-medium">{unit.capacity}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Refrigerant:</span>
                      <span className="font-medium text-xs">{unit.refrigerant}</span>
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
                      { name: "Product Catalog", size: "8.5 MB" },
                      { name: "Technical Specifications", size: "4.2 MB" },
                      { name: "Selection Software", size: "25 MB" },
                      { name: "Installation Manual", size: "6.1 MB" },
                      { name: "Wiring Diagrams", size: "3.4 MB" },
                      { name: "Spare Parts List", size: "2.8 MB" },
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

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Need Help Selecting the Right Unit?
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Our refrigeration experts can help you choose the optimal condensing unit 
            for your specific application requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Contact Our Experts
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
              View All Cooling Products
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
