"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { 
  Layers, 
  ThermometerSnowflake, 
  Eye, 
  Shield,
  CheckCircle2,
  Download,
  Phone,
  ChevronRight
} from "lucide-react"

const curtainTypes = [
  {
    name: "Standard PVC",
    description: "General purpose strip curtains",
    temp: "-20°C to +50°C",
    use: "Warehouses, factories"
  },
  {
    name: "Polar Grade PVC",
    description: "For cold storage applications",
    temp: "-40°C to +20°C",
    use: "Freezers, cold rooms"
  },
  {
    name: "Anti-Static PVC",
    description: "Electrostatic discharge protection",
    temp: "-10°C to +50°C",
    use: "Electronics, clean rooms"
  },
  {
    name: "Welding Grade PVC",
    description: "Tinted for welding areas",
    temp: "-10°C to +50°C",
    use: "Welding bays"
  },
]

const features = [
  {
    icon: ThermometerSnowflake,
    title: "Temperature Control",
    description: "Effective barrier against temperature loss in controlled environments"
  },
  {
    icon: Eye,
    title: "High Visibility",
    description: "Clear strips maintain visibility for safe forklift operation"
  },
  {
    icon: Shield,
    title: "Contamination Barrier",
    description: "Prevents dust, insects, and contaminants from entering"
  },
  {
    icon: Layers,
    title: "Easy Passage",
    description: "Allows personnel and equipment to pass through freely"
  },
]

const applications = [
  "Cold Storage Doors",
  "Warehouse Openings",
  "Food Processing",
  "Clean Rooms",
  "Loading Bays",
  "Manufacturing",
  "Retail Back Areas",
  "Pharmaceutical"
]

export default function PVCStripCurtainsPage() {
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
            <Link href="/products/components-accessories" className="hover:text-primary transition-colors">Components & Accessories</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground font-medium">PVC Strip Curtains</span>
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
                    <Layers className="h-24 w-24 mx-auto text-primary/20 mb-4" />
                    <p className="text-muted-foreground">PVC Strip Curtain</p>
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
                      <Layers className="h-8 w-8 text-primary/30" />
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <Badge className="mb-3 bg-primary/10 text-primary border-primary/20">Components & Accessories</Badge>
                <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  PVC Strip Curtains
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Flexible PVC strip curtains for temperature control, contamination prevention, 
                  and energy savings. Available in standard, polar, anti-static, and welding 
                  grades for various industrial applications.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Badge variant="outline" className="px-3 py-1">
                  <CheckCircle2 className="h-3.5 w-3.5 mr-1.5 text-green-500" />
                  Food Safe
                </Badge>
                <Badge variant="outline" className="px-3 py-1">
                  <CheckCircle2 className="h-3.5 w-3.5 mr-1.5 text-green-500" />
                  EU Compliant
                </Badge>
                <Badge variant="outline" className="px-3 py-1">
                  <CheckCircle2 className="h-3.5 w-3.5 mr-1.5 text-green-500" />
                  UV Stabilized
                </Badge>
              </div>

              <div className="grid grid-cols-2 gap-4 py-6 border-y">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Strip Width</p>
                  <p className="text-xl font-semibold text-foreground">200mm - 400mm</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Thickness</p>
                  <p className="text-xl font-semibold text-foreground">2mm - 4mm</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Temperature</p>
                  <p className="text-xl font-semibold text-foreground">-40°C to +50°C</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Grades</p>
                  <p className="text-xl font-semibold text-foreground">4 Types</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="flex-1">
                  <Phone className="mr-2 h-5 w-5" />
                  Request Quote
                </Button>
                <Button size="lg" variant="outline" className="flex-1">
                  <Download className="mr-2 h-5 w-5" />
                  Download Datasheet
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Curtain Types */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-foreground mb-8">Curtain Types</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {curtainTypes.map((curtain, index) => (
              <Card key={index} className="border-none shadow-sm">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Layers className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{curtain.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{curtain.description}</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Temp:</span>
                      <span className="font-medium text-xs">{curtain.temp}</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Use: </span>
                      <span className="text-foreground">{curtain.use}</span>
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
                      { name: "Product Catalog", size: "3.5 MB" },
                      { name: "Polar Grade Specs", size: "1.8 MB" },
                      { name: "Anti-Static Guide", size: "1.5 MB" },
                      { name: "Hardware Options", size: "2.2 MB" },
                      { name: "Installation Guide", size: "2.8 MB" },
                      { name: "Energy Savings Report", size: "1.2 MB" },
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
            Need Strip Curtain Solutions?
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Contact us for custom strip curtain configurations to fit your specific doorway requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Get Custom Quote
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
              View All Accessories
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
