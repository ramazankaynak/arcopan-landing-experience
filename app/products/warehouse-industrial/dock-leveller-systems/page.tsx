"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { 
  ArrowUpDown, 
  Truck, 
  Shield, 
  Gauge,
  CheckCircle2,
  Download,
  Phone,
  ChevronRight
} from "lucide-react"

const equipmentTypes = [
  {
    name: "Hydraulic Dock Levellers",
    description: "Push-button operated, smooth operation",
    capacity: "6,000 - 15,000 kg",
    working: "±400mm"
  },
  {
    name: "Mechanical Dock Levellers",
    description: "Spring-assisted, manual operation",
    capacity: "6,000 - 9,000 kg",
    working: "±300mm"
  },
  {
    name: "Loading Ramps",
    description: "Mobile and fixed loading solutions",
    capacity: "6,000 - 10,000 kg",
    working: "Variable"
  },
  {
    name: "Dock Shelters & Seals",
    description: "Weather protection at loading bays",
    type: "Cushion / Inflatable",
    working: "Full perimeter"
  },
]

const features = [
  {
    icon: ArrowUpDown,
    title: "Working Range",
    description: "Bridge height differences between dock and truck bed"
  },
  {
    icon: Truck,
    title: "Heavy Duty",
    description: "Designed for intensive forklift traffic and heavy loads"
  },
  {
    icon: Shield,
    title: "Safety Features",
    description: "Toe guards, safety lips, and anti-slip surfaces"
  },
  {
    icon: Gauge,
    title: "Reliable Operation",
    description: "Robust construction for years of trouble-free service"
  },
]

const applications = [
  "Distribution Centers",
  "Manufacturing Plants",
  "Cold Storage",
  "Logistics Hubs",
  "Retail Distribution",
  "Food Processing",
  "Pharmaceutical",
  "E-commerce Fulfillment"
]

export default function DockLevellerSystemsPage() {
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
            <span className="text-foreground font-medium">Dock Leveller & Ramp Systems</span>
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
                    <ArrowUpDown className="h-24 w-24 mx-auto text-primary/20 mb-4" />
                    <p className="text-muted-foreground">Dock Leveller System</p>
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
                      <ArrowUpDown className="h-8 w-8 text-primary/30" />
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <Badge className="mb-3 bg-primary/10 text-primary border-primary/20">Warehouse & Industrial</Badge>
                <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Dock Leveller & Ramp Systems
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Professional loading dock equipment for efficient goods handling. Our range 
                  includes hydraulic and mechanical dock levellers, loading ramps, and dock 
                  shelters for safe and productive loading operations.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Badge variant="outline" className="px-3 py-1">
                  <CheckCircle2 className="h-3.5 w-3.5 mr-1.5 text-green-500" />
                  CE Certified
                </Badge>
                <Badge variant="outline" className="px-3 py-1">
                  <CheckCircle2 className="h-3.5 w-3.5 mr-1.5 text-green-500" />
                  EN 1398
                </Badge>
                <Badge variant="outline" className="px-3 py-1">
                  <CheckCircle2 className="h-3.5 w-3.5 mr-1.5 text-green-500" />
                  ISO 9001
                </Badge>
              </div>

              <div className="grid grid-cols-2 gap-4 py-6 border-y">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Load Capacity</p>
                  <p className="text-xl font-semibold text-foreground">Up to 15,000 kg</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Working Range</p>
                  <p className="text-xl font-semibold text-foreground">±400mm</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Platform Width</p>
                  <p className="text-xl font-semibold text-foreground">1.8m - 2.5m</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Operation</p>
                  <p className="text-xl font-semibold text-foreground">Hydraulic/Manual</p>
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

      {/* Equipment Types */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-foreground mb-8">Equipment Types</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {equipmentTypes.map((equip, index) => (
              <Card key={index} className="border-none shadow-sm">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <ArrowUpDown className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{equip.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{equip.description}</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">{equip.capacity ? "Capacity:" : "Type:"}</span>
                      <span className="font-medium text-xs">{equip.capacity || equip.type}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Range:</span>
                      <span className="font-medium">{equip.working}</span>
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
                      { name: "Hydraulic Levellers", size: "3.5 MB" },
                      { name: "Mechanical Levellers", size: "2.8 MB" },
                      { name: "Loading Ramps", size: "3.1 MB" },
                      { name: "Dock Shelters", size: "2.5 MB" },
                      { name: "Installation Guide", size: "4.2 MB" },
                      { name: "Maintenance Manual", size: "2.1 MB" },
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
            Planning Loading Bay Equipment?
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Our team can help you design the optimal loading dock configuration 
            for your facility.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Request Consultation
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
