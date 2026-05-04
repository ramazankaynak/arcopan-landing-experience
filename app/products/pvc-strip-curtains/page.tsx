"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Wind, 
  Shield, 
  CheckCircle2, 
  ArrowRight,
  Download,
  Phone,
  Award,
  Thermometer,
  Eye,
  Snowflake
} from "lucide-react"

const curtainTypes = [
  {
    name: "Standard PVC Strips",
    description: "General purpose strips for ambient temperature doorways",
    tempRange: "-5°C to +50°C",
    thickness: "2mm - 4mm",
    width: "200mm - 400mm",
    applications: ["Warehouse Doors", "Factory Entrances", "Loading Bays"],
    icon: Wind
  },
  {
    name: "Polar Grade PVC",
    description: "Flexible at extreme low temperatures for freezer applications",
    tempRange: "-40°C to +30°C",
    thickness: "2mm - 3mm",
    width: "200mm - 300mm",
    applications: ["Freezer Rooms", "Cold Stores", "Blast Freezers"],
    icon: Snowflake
  },
  {
    name: "Anti-Static PVC",
    description: "ESD-safe strips for electronics and cleanroom environments",
    tempRange: "0°C to +40°C",
    thickness: "2mm - 3mm",
    width: "200mm - 300mm",
    applications: ["Electronics", "Cleanrooms", "Assembly Areas"],
    icon: Shield
  },
  {
    name: "Ribbed PVC Strips",
    description: "Textured surface for reduced visibility and privacy",
    tempRange: "-5°C to +50°C",
    thickness: "3mm - 4mm",
    width: "200mm - 400mm",
    applications: ["Privacy Screens", "Welding Areas", "Process Zones"],
    icon: Eye
  }
]

const features = [
  {
    icon: Thermometer,
    title: "Temperature Control",
    description: "Maintain temperature zones while allowing easy pedestrian and forklift access"
  },
  {
    icon: Wind,
    title: "Draft Prevention",
    description: "Reduce air infiltration and energy costs in climate-controlled areas"
  },
  {
    icon: Shield,
    title: "Contamination Barrier",
    description: "Keep out dust, insects, and debris while maintaining visibility"
  },
  {
    icon: Eye,
    title: "High Visibility",
    description: "Transparent strips allow full visibility for safe traffic flow"
  }
]

const mountingOptions = [
  "Stainless Steel Rail",
  "Galvanized Rail",
  "Fixed Mounting",
  "Sliding Mounting",
  "Overlap Configuration",
  "Single Strip Configuration"
]

export default function PVCStripCurtainsPage() {
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
              PVC Strip <span className="text-primary">Curtains</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Flexible PVC strip curtains for temperature control, contamination prevention, 
              and energy savings. Available in standard, polar, and specialty grades for all 
              industrial applications.
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
                <span className="text-sm text-muted-foreground">Food Safe</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                <span className="text-sm text-muted-foreground">EN Compliant</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Curtain Types Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">Product Range</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              PVC Strip Types
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {curtainTypes.map((curtain, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <curtain.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors mb-2">
                        {curtain.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3">{curtain.description}</p>
                      <div className="grid grid-cols-2 gap-2 text-sm mb-3">
                        <div>
                          <span className="text-muted-foreground">Temp:</span>
                          <span className="font-medium ml-1">{curtain.tempRange}</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Thickness:</span>
                          <span className="font-medium ml-1">{curtain.thickness}</span>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {curtain.applications.map((app, i) => (
                          <Badge key={i} variant="secondary" className="text-xs">{app}</Badge>
                        ))}
                      </div>
                    </div>
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
            <Badge variant="outline" className="mb-4">Benefits</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why PVC Strip Curtains?
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mounting Options */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">Installation</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Mounting Options
            </h2>
          </div>
          <Card>
            <CardContent className="p-6">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {mountingOptions.map((option, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-sm text-foreground">{option}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Need Custom Strip Curtains?
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            Provide your doorway dimensions and application requirements for a custom quote.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="secondary" className="gap-2">
              <Phone className="h-4 w-4" />
              Get Custom Quote
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
                  Cold Room Doors
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Insulated doors for cold storage facilities.
                </p>
                <Link href="/products/insulated-cold-room-doors" className="text-primary text-sm hover:underline">
                  Learn More →
                </Link>
              </CardContent>
            </Card>
            <Card className="group hover:shadow-lg transition-all">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Wind className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  Industrial Doors
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  High-speed doors for warehouses.
                </p>
                <Link href="/products/industrial-door-systems" className="text-primary text-sm hover:underline">
                  Learn More →
                </Link>
              </CardContent>
            </Card>
            <Card className="group hover:shadow-lg transition-all">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Snowflake className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  Cold Storage Panels
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Insulated panels for cold rooms.
                </p>
                <Link href="/products/insulated-cold-storage-panels" className="text-primary text-sm hover:underline">
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
