"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/button"
import { 
  Hammer, 
  Plug, 
  Thermometer, 
  Settings,
  CheckCircle2,
  Download,
  Phone,
  ChevronRight
} from "lucide-react"

const productTypes = [
  {
    name: "Sealants & Adhesives",
    description: "Specialized cold storage sealants",
    type: "Silicone/PU",
    use: "Joint sealing"
  },
  {
    name: "Electrical Fittings",
    description: "Waterproof conduits and fittings",
    type: "IP65/IP67",
    use: "Wiring systems"
  },
  {
    name: "Thermometers & Sensors",
    description: "Temperature monitoring devices",
    type: "Digital/Analog",
    use: "Temperature control"
  },
  {
    name: "Mounting Hardware",
    description: "Brackets, anchors, and fixings",
    type: "Stainless/Galvanized",
    use: "Equipment mounting"
  },
]

const features = [
  {
    icon: Hammer,
    title: "Professional Grade",
    description: "Industrial quality accessories for reliable installations"
  },
  {
    icon: Thermometer,
    title: "Cold Environment Rated",
    description: "Designed to perform in extreme low temperatures"
  },
  {
    icon: Plug,
    title: "Complete Range",
    description: "Everything needed for professional cold room installations"
  },
  {
    icon: Settings,
    title: "Easy Installation",
    description: "Designed for efficient and trouble-free installation"
  },
]

const applications = [
  "Cold Room Installation",
  "Panel System Assembly",
  "Refrigeration Setup",
  "Electrical Installation",
  "Maintenance & Repair",
  "Temperature Monitoring",
  "Sealing & Insulation",
  "Equipment Mounting"
]

export default function InstallationAccessoriesPage() {
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
            <span className="text-foreground font-medium">Installation Accessories</span>
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
                    <Hammer className="h-24 w-24 mx-auto text-primary/20 mb-4" />
                    <p className="text-muted-foreground">Installation Accessories</p>
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
                      <Hammer className="h-8 w-8 text-primary/30" />
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <span className="inline-flex items-center rounded-md bg-primary/10 px-2.5 py-0.5 text-sm font-medium text-primary border border-primary/20 mb-3">Components & Accessories</span>
                <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Installation Accessories
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Complete range of installation accessories for cold storage projects. 
                  From sealants and electrical fittings to temperature sensors and mounting 
                  hardware - everything you need for professional installations.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <span className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-sm font-medium">
                  <CheckCircle2 className="h-3.5 w-3.5 mr-1.5 text-green-500" />
                  Cold Rated
                </span>
                <span className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-sm font-medium">
                  <CheckCircle2 className="h-3.5 w-3.5 mr-1.5 text-green-500" />
                  Professional Grade
                </span>
                <span className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-sm font-medium">
                  <CheckCircle2 className="h-3.5 w-3.5 mr-1.5 text-green-500" />
                  Full Range
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4 py-6 border-y">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Product Range</p>
                  <p className="text-xl font-semibold text-foreground">100+ Items</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Categories</p>
                  <p className="text-xl font-semibold text-foreground">4 Types</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Temperature</p>
                  <p className="text-xl font-semibold text-foreground">-50°C to +80°C</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Quality</p>
                  <p className="text-xl font-semibold text-foreground">Industrial Grade</p>
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

      {/* Product Types */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-foreground mb-8">Product Categories</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {productTypes.map((product, index) => (
              <Card key={index} className="border-none shadow-sm">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Hammer className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{product.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{product.description}</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Type:</span>
                      <span className="font-medium">{product.type}</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Use: </span>
                      <span className="text-foreground">{product.use}</span>
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
                      { name: "Full Catalog", size: "8.5 MB" },
                      { name: "Sealants Guide", size: "2.8 MB" },
                      { name: "Electrical Fittings", size: "3.2 MB" },
                      { name: "Sensors & Monitors", size: "2.5 MB" },
                      { name: "Hardware Selection", size: "3.8 MB" },
                      { name: "Technical Data", size: "4.1 MB" },
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
            Need Installation Supplies?
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Contact us for the complete range of installation accessories for your cold storage project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Request Parts List
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
