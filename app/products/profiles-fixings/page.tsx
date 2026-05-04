"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Wrench, 
  Shield, 
  CheckCircle2, 
  ArrowRight,
  Download,
  Phone,
  Award,
  Layers,
  Package,
  Settings
} from "lucide-react"

const productCategories = [
  {
    name: "Aluminum Profiles",
    description: "Complete range of aluminum extrusions for panel joints, corners, and transitions",
    items: ["Floor Profiles", "Wall Profiles", "Ceiling Profiles", "Corner Profiles", "Connection Profiles"],
    material: "Anodized Aluminum",
    icon: Layers
  },
  {
    name: "Steel Profiles",
    description: "Heavy-duty steel profiles for structural connections and reinforcements",
    items: ["Base Channels", "Top Rails", "Support Brackets", "Reinforcement Bars"],
    material: "Galvanized / Stainless Steel",
    icon: Shield
  },
  {
    name: "Fixing Systems",
    description: "Comprehensive fastening solutions for panel installation",
    items: ["Cam-Lock Fixings", "Self-Drilling Screws", "Rivets", "Anchor Bolts", "Sealant Tapes"],
    material: "Stainless Steel / Zinc Plated",
    icon: Wrench
  },
  {
    name: "Sealing Products",
    description: "Gaskets, seals, and tapes for airtight panel joints",
    items: ["Foam Tapes", "Silicone Sealants", "EPDM Gaskets", "Expansion Joints"],
    material: "EPDM / Silicone / PU",
    icon: Package
  },
  {
    name: "Finishing Accessories",
    description: "Trim pieces and covers for professional panel installation finish",
    items: ["Cover Strips", "Corner Caps", "End Caps", "Threshold Strips"],
    material: "PVC / Aluminum",
    icon: Settings
  }
]

const applications = [
  "Cold Room Installation",
  "Cleanroom Construction",
  "Panel Cladding",
  "Modular Buildings",
  "Industrial Partitions",
  "Food Processing Facilities"
]

export default function ProfilesFixingsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary/10 via-background to-accent/5">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-6">
              <Badge variant="secondary" className="text-xs">Products</Badge>
              <span className="text-muted-foreground">/</span>
              <Badge variant="outline" className="text-xs">Components</Badge>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight mb-6">
              Profiles & <span className="text-primary">Fixings</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Complete range of aluminum profiles, steel sections, and fixing systems for 
              professional panel installation. Our accessories ensure secure, airtight, and 
              aesthetically pleasing joints.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="gap-2">
                <Phone className="h-4 w-4" />
                Request Quote
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                <Download className="h-4 w-4" />
                Product Catalog
              </Button>
            </div>
            <div className="flex items-center gap-6 pt-6">
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5 text-primary" />
                <span className="text-sm text-muted-foreground">Quality Assured</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                <span className="text-sm text-muted-foreground">Compatible Systems</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">Product Range</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Installation Accessories
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {productCategories.map((category, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <category.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">{category.description}</p>
                  <div className="pt-2 space-y-1">
                    {category.items.map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="h-3.5 w-3.5 text-primary" />
                        <span className="text-muted-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                  <div className="pt-2 border-t">
                    <span className="text-xs text-muted-foreground">Material: </span>
                    <span className="text-xs font-medium">{category.material}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">Applications</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Suitable For
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {applications.map((app, index) => (
              <Badge key={index} variant="secondary" className="text-sm py-2 px-4">
                {app}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Need Accessories for Your Project?
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            Contact us with your panel specifications and we will provide a complete
            list of required profiles and fixings.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="secondary" className="gap-2">
              <Phone className="h-4 w-4" />
              Get Accessory List
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
                  Cold Storage Panels
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Insulated panels for cold room construction.
                </p>
                <Link href="/products/insulated-cold-storage-panels" className="text-primary text-sm hover:underline">
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
                  Safety Accessories
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Safety equipment for cold storage facilities.
                </p>
                <Link href="/products/safety-accessories" className="text-primary text-sm hover:underline">
                  Learn More →
                </Link>
              </CardContent>
            </Card>
            <Card className="group hover:shadow-lg transition-all">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Package className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  PVC Strip Curtains
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Temperature barrier solutions.
                </p>
                <Link href="/products/pvc-strip-curtains" className="text-primary text-sm hover:underline">
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
