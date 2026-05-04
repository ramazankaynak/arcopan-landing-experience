"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Shield, 
  CheckCircle2, 
  ArrowRight,
  Download,
  Phone,
  Award,
  AlertTriangle,
  Eye,
  Bell,
  Lock,
  Thermometer
} from "lucide-react"

const productCategories = [
  {
    name: "Cold Room Safety Equipment",
    description: "Essential safety devices for cold storage environments",
    items: ["Emergency Release Handles", "Internal Door Releases", "Alarm Systems", "Emergency Lighting"],
    icon: Bell
  },
  {
    name: "Personal Protective Equipment",
    description: "PPE for working in cold storage environments",
    items: ["Thermal Gloves", "Insulated Clothing", "Face Protection", "Safety Footwear"],
    icon: Shield
  },
  {
    name: "Warning & Signage",
    description: "Safety signs and visual warning systems",
    items: ["Temperature Warning Signs", "Hazard Labels", "Emergency Exit Signs", "Floor Markings"],
    icon: AlertTriangle
  },
  {
    name: "Monitoring Systems",
    description: "Temperature and personnel monitoring equipment",
    items: ["Temperature Alarms", "Door Alarms", "Personnel Counters", "CCTV Systems"],
    icon: Eye
  },
  {
    name: "Access Control",
    description: "Security and access management systems",
    items: ["Card Readers", "Keypad Locks", "Interlock Systems", "Time & Attendance"],
    icon: Lock
  },
  {
    name: "Environmental Monitoring",
    description: "Continuous monitoring of storage conditions",
    items: ["Data Loggers", "Remote Monitoring", "Alert Systems", "Compliance Recording"],
    icon: Thermometer
  }
]

const applications = [
  "Cold Storage Facilities",
  "Freezer Rooms",
  "Food Processing",
  "Pharmaceutical Storage",
  "Distribution Centers",
  "Retail Back-of-House"
]

export default function SafetyAccessoriesPage() {
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
              Safety <span className="text-primary">Accessories</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Comprehensive safety equipment and accessories for cold storage facilities.
              Protect your personnel and ensure compliance with health and safety regulations.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="gap-2">
                <Phone className="h-4 w-4" />
                Request Quote
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                <Download className="h-4 w-4" />
                Safety Guide
              </Button>
            </div>
            <div className="flex items-center gap-6 pt-6">
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5 text-primary" />
                <span className="text-sm text-muted-foreground">CE Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                <span className="text-sm text-muted-foreground">H&S Compliant</span>
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
              Safety Solutions
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
            Need a Safety Assessment?
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            Our team can review your facility and recommend the appropriate safety equipment
            to meet regulatory requirements.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="secondary" className="gap-2">
              <Phone className="h-4 w-4" />
              Request Safety Review
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
                  Insulated doors with safety features.
                </p>
                <Link href="/products/insulated-cold-room-doors" className="text-primary text-sm hover:underline">
                  Learn More →
                </Link>
              </CardContent>
            </Card>
            <Card className="group hover:shadow-lg transition-all">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <AlertTriangle className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  Profiles & Fixings
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Installation accessories for panels.
                </p>
                <Link href="/products/profiles-fixings" className="text-primary text-sm hover:underline">
                  Learn More →
                </Link>
              </CardContent>
            </Card>
            <Card className="group hover:shadow-lg transition-all">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Thermometer className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  Cooling Systems
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Refrigeration with monitoring integration.
                </p>
                <Link href="/products/industrial-cooling-systems" className="text-primary text-sm hover:underline">
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
