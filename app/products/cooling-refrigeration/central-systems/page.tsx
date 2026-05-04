"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { 
  Server, 
  Gauge, 
  Zap, 
  Settings,
  CheckCircle2,
  Download,
  Phone,
  ChevronRight
} from "lucide-react"

const systemTypes = [
  {
    name: "Rack Systems",
    description: "Multi-compressor systems for large installations",
    capacity: "50 - 500 kW",
    application: "Supermarkets, Distribution Centers"
  },
  {
    name: "CO2 Transcritical",
    description: "Natural refrigerant for sustainable cooling",
    capacity: "30 - 400 kW",
    application: "Supermarkets, Food Retail"
  },
  {
    name: "Cascade Systems",
    description: "Two-stage systems for ultra-low temperatures",
    capacity: "20 - 300 kW",
    application: "Deep Freeze, Pharmaceutical"
  },
  {
    name: "Ammonia Systems",
    description: "Industrial-grade natural refrigerant systems",
    capacity: "100 - 2000 kW",
    application: "Industrial, Food Processing"
  },
]

const features = [
  {
    icon: Server,
    title: "Centralized Control",
    description: "Single point of management for multiple evaporators and zones"
  },
  {
    icon: Zap,
    title: "Energy Recovery",
    description: "Heat recovery options for hot water generation and space heating"
  },
  {
    icon: Gauge,
    title: "Variable Capacity",
    description: "Inverter-driven compressors for precise capacity matching"
  },
  {
    icon: Settings,
    title: "Remote Monitoring",
    description: "Cloud-based monitoring and alarm management systems"
  },
]

const applications = [
  "Supermarkets",
  "Distribution Centers",
  "Food Processing Plants",
  "Cold Storage Warehouses",
  "Pharmaceutical Facilities",
  "Industrial Kitchens",
  "Logistics Centers",
  "Retail Chains"
]

export default function CentralSystemsPage() {
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
            <span className="text-foreground font-medium">Central Systems</span>
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
                    <Server className="h-24 w-24 mx-auto text-primary/20 mb-4" />
                    <p className="text-muted-foreground">Central Refrigeration System</p>
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
                      <Server className="h-8 w-8 text-primary/30" />
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
                  Central Systems
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Advanced central refrigeration systems for large-scale commercial and industrial 
                  applications. Our systems include rack configurations, CO2 transcritical, cascade, 
                  and ammonia solutions for maximum efficiency and sustainability.
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
                  Natural Refrigerants
                </Badge>
              </div>

              <div className="grid grid-cols-2 gap-4 py-6 border-y">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Capacity Range</p>
                  <p className="text-xl font-semibold text-foreground">20 - 2000 kW</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">System Types</p>
                  <p className="text-xl font-semibold text-foreground">4 Types</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Refrigerants</p>
                  <p className="text-xl font-semibold text-foreground">HFC/CO2/NH3</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Heat Recovery</p>
                  <p className="text-xl font-semibold text-foreground">Available</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="flex-1">
                  <Phone className="mr-2 h-5 w-5" />
                  Request Consultation
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

      {/* System Types */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-foreground mb-8">System Types</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {systemTypes.map((system, index) => (
              <Card key={index} className="border-none shadow-sm">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Server className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{system.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{system.description}</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Capacity:</span>
                      <span className="font-medium">{system.capacity}</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Application: </span>
                      <span className="text-foreground text-xs">{system.application}</span>
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
                      { name: "Rack Systems Brochure", size: "6.2 MB" },
                      { name: "CO2 Systems Guide", size: "4.8 MB" },
                      { name: "Cascade Systems", size: "5.1 MB" },
                      { name: "Ammonia Systems", size: "7.3 MB" },
                      { name: "Control Systems", size: "3.9 MB" },
                      { name: "Case Studies", size: "8.5 MB" },
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
            Planning a Large-Scale Project?
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Our engineering team specializes in designing and implementing central 
            refrigeration systems for complex commercial and industrial applications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Schedule Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
              View Reference Projects
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
