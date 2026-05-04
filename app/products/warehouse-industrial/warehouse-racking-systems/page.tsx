"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { 
  LayoutGrid, 
  Shield, 
  Maximize, 
  Truck,
  CheckCircle2,
  Download,
  Phone,
  ChevronRight
} from "lucide-react"

const rackingTypes = [
  {
    name: "Selective Pallet Racking",
    description: "Direct access to all pallets, most versatile system",
    capacity: "Up to 4000 kg/level",
    application: "General warehousing"
  },
  {
    name: "Drive-In Racking",
    description: "High-density storage with LIFO access",
    capacity: "Up to 1500 kg/pallet",
    application: "Bulk storage"
  },
  {
    name: "Push-Back Racking",
    description: "Dynamic storage with LIFO principle",
    capacity: "Up to 1200 kg/pallet",
    application: "Medium turnover"
  },
  {
    name: "Mobile Racking",
    description: "Maximize space with movable bases",
    capacity: "Up to 1500 kg/pallet",
    application: "Cold storage"
  },
]

const features = [
  {
    icon: Maximize,
    title: "Space Optimization",
    description: "Maximize storage capacity with efficient racking designs"
  },
  {
    icon: Shield,
    title: "Heavy-Duty Construction",
    description: "High-strength steel components for demanding environments"
  },
  {
    icon: Truck,
    title: "Forklift Compatible",
    description: "Designed for all standard forklift and reach truck operations"
  },
  {
    icon: LayoutGrid,
    title: "Modular Design",
    description: "Flexible configurations to match your specific needs"
  },
]

const applications = [
  "Cold Storage Warehouses",
  "Distribution Centers",
  "Manufacturing Plants",
  "Logistics Hubs",
  "Food Processing",
  "Pharmaceutical Storage",
  "Retail Distribution",
  "E-commerce Fulfillment"
]

export default function WarehouseRackingSystemsPage() {
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
            <span className="text-foreground font-medium">Warehouse Racking Systems</span>
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
                    <LayoutGrid className="h-24 w-24 mx-auto text-primary/20 mb-4" />
                    <p className="text-muted-foreground">Warehouse Racking System</p>
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
                      <LayoutGrid className="h-8 w-8 text-primary/30" />
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <Badge className="mb-3 bg-primary/10 text-primary border-primary/20">Warehouse & Industrial</Badge>
                <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Warehouse Racking Systems
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Professional pallet racking solutions for cold storage and industrial warehouses. 
                  Our systems are engineered for maximum storage density, durability in low-temperature 
                  environments, and efficient material handling operations.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Badge variant="outline" className="px-3 py-1">
                  <CheckCircle2 className="h-3.5 w-3.5 mr-1.5 text-green-500" />
                  EN 15512 Certified
                </Badge>
                <Badge variant="outline" className="px-3 py-1">
                  <CheckCircle2 className="h-3.5 w-3.5 mr-1.5 text-green-500" />
                  FEM Compliant
                </Badge>
                <Badge variant="outline" className="px-3 py-1">
                  <CheckCircle2 className="h-3.5 w-3.5 mr-1.5 text-green-500" />
                  Cold Storage Ready
                </Badge>
              </div>

              <div className="grid grid-cols-2 gap-4 py-6 border-y">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Load Capacity</p>
                  <p className="text-xl font-semibold text-foreground">Up to 4000 kg</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Height</p>
                  <p className="text-xl font-semibold text-foreground">Up to 12m</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Systems</p>
                  <p className="text-xl font-semibold text-foreground">4+ Types</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Temperature</p>
                  <p className="text-xl font-semibold text-foreground">-40°C to +40°C</p>
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

      {/* Racking Types */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-foreground mb-8">Racking Systems</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {rackingTypes.map((rack, index) => (
              <Card key={index} className="border-none shadow-sm">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <LayoutGrid className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{rack.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{rack.description}</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Capacity:</span>
                      <span className="font-medium text-xs">{rack.capacity}</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Use: </span>
                      <span className="text-foreground">{rack.application}</span>
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
                      { name: "Selective Racking", size: "4.5 MB" },
                      { name: "Drive-In Systems", size: "3.8 MB" },
                      { name: "Mobile Racking", size: "5.2 MB" },
                      { name: "Design Guide", size: "6.1 MB" },
                      { name: "Load Tables", size: "2.4 MB" },
                      { name: "Safety Guidelines", size: "1.8 MB" },
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
            Need Warehouse Layout Design?
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Our engineering team can design the optimal racking layout for your 
            warehouse to maximize storage capacity and operational efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Request Free Design
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
              View All Warehouse Products
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
