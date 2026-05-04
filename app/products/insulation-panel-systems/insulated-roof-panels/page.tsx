"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { 
  Home, 
  Shield, 
  Droplets, 
  Sun,
  CheckCircle2,
  ArrowRight,
  Download,
  Phone,
  ChevronRight
} from "lucide-react"

const specifications = [
  { label: "Panel Thickness", value: "30mm - 200mm" },
  { label: "Panel Width", value: "1000mm" },
  { label: "Panel Length", value: "Up to 16000mm" },
  { label: "Core Material", value: "PIR / PUR / Mineral Wool" },
  { label: "External Sheet", value: "0.5mm - 0.7mm Steel" },
  { label: "Internal Sheet", value: "0.4mm - 0.5mm Steel" },
  { label: "Roof Pitch", value: "Min. 5°" },
  { label: "Wind Load Resistance", value: "Up to 3.0 kN/m²" },
]

const features = [
  {
    icon: Home,
    title: "Superior Spanning",
    description: "High load-bearing capacity allows for longer spans and fewer supports"
  },
  {
    icon: Droplets,
    title: "Watertight System",
    description: "Advanced joint design ensures complete water tightness in all conditions"
  },
  {
    icon: Sun,
    title: "Solar Reflective",
    description: "Optional solar reflective coatings reduce heat absorption and cooling costs"
  },
  {
    icon: Shield,
    title: "Fire Resistant",
    description: "Available with mineral wool core for enhanced fire resistance (A2 rating)"
  },
]

const applications = [
  "Industrial Warehouses",
  "Distribution Centers",
  "Manufacturing Plants",
  "Cold Storage Roofs",
  "Commercial Buildings",
  "Sports Facilities",
  "Agricultural Buildings",
  "Retail Complexes"
]

const relatedProducts = [
  {
    name: "Insulated Wall Panels",
    href: "/products/insulation-panel-systems/insulated-wall-panels",
  },
  {
    name: "Insulated Cold Storage Panels",
    href: "/products/insulation-panel-systems/insulated-cold-storage-panels",
  },
  {
    name: "Modular Cold Rooms",
    href: "/products/insulation-panel-systems/modular-cold-rooms",
  },
]

export default function InsulatedRoofPanelsPage() {
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
            <Link href="/products/insulation-panel-systems" className="hover:text-primary transition-colors">Insulation & Panel Systems</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground font-medium">Insulated Roof Panels</span>
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
                    <Home className="h-24 w-24 mx-auto text-primary/20 mb-4" />
                    <p className="text-muted-foreground">Insulated Roof Panel</p>
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
                      <Home className="h-8 w-8 text-primary/30" />
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <Badge className="mb-3 bg-primary/10 text-primary border-primary/20">Insulation & Panel Systems</Badge>
                <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Insulated Roof Panels
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  High-performance insulated roof panels engineered for industrial, commercial, 
                  and cold storage buildings. Combining structural strength with excellent 
                  thermal insulation for energy-efficient roofing solutions.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Badge variant="outline" className="px-3 py-1">
                  <CheckCircle2 className="h-3.5 w-3.5 mr-1.5 text-green-500" />
                  CE Certified
                </Badge>
                <Badge variant="outline" className="px-3 py-1">
                  <CheckCircle2 className="h-3.5 w-3.5 mr-1.5 text-green-500" />
                  FM Approved
                </Badge>
                <Badge variant="outline" className="px-3 py-1">
                  <CheckCircle2 className="h-3.5 w-3.5 mr-1.5 text-green-500" />
                  ISO 9001
                </Badge>
              </div>

              <div className="grid grid-cols-2 gap-4 py-6 border-y">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Thickness Range</p>
                  <p className="text-xl font-semibold text-foreground">30mm - 200mm</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Max Length</p>
                  <p className="text-xl font-semibold text-foreground">16000mm</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Core Material</p>
                  <p className="text-xl font-semibold text-foreground">PIR / MW</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Min. Roof Pitch</p>
                  <p className="text-xl font-semibold text-foreground">5°</p>
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

      {/* Product Details Tabs */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="features" className="w-full">
            <TabsList className="w-full justify-start bg-background border rounded-lg p-1 h-auto flex-wrap">
              <TabsTrigger value="features" className="px-6 py-2.5">Features</TabsTrigger>
              <TabsTrigger value="specifications" className="px-6 py-2.5">Specifications</TabsTrigger>
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

            <TabsContent value="specifications" className="mt-8">
              <Card className="border-none shadow-sm">
                <CardContent className="p-6">
                  <div className="grid md:grid-cols-2 gap-x-12 gap-y-4">
                    {specifications.map((spec, index) => (
                      <div key={index} className="flex justify-between py-3 border-b last:border-0">
                        <span className="text-muted-foreground">{spec.label}</span>
                        <span className="font-medium text-foreground">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
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
                      { name: "Technical Datasheet", size: "2.5 MB" },
                      { name: "Installation Guide", size: "6.2 MB" },
                      { name: "Load Span Tables", size: "1.8 MB" },
                      { name: "CE Certificate", size: "1.0 MB" },
                      { name: "CAD Drawings", size: "11.2 MB" },
                      { name: "Flashing Details", size: "3.5 MB" },
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

      {/* Related Products */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-foreground mb-8">Related Products</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {relatedProducts.map((product, index) => (
              <Link key={index} href={product.href}>
                <Card className="group hover:shadow-lg transition-all duration-300 border-none shadow-sm overflow-hidden">
                  <div className="aspect-[4/3] bg-muted flex items-center justify-center">
                    <Home className="h-16 w-16 text-primary/20 group-hover:text-primary/40 transition-colors" />
                  </div>
                  <CardContent className="p-5">
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors flex items-center gap-2">
                      {product.name}
                      <ArrowRight className="h-4 w-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </h3>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Need Roofing Solutions?
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Our technical team can help you design the perfect roofing system 
            for your building project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Contact Our Experts
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
              View All Panel Systems
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
