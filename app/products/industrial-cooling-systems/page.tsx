"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  Snowflake, 
  Shield, 
  Thermometer, 
  CheckCircle2, 
  ArrowRight,
  Download,
  Phone,
  Gauge,
  Award,
  Zap,
  Fan,
  Settings,
  Cpu
} from "lucide-react"

const systemTypes = [
  {
    name: "Freon Refrigeration Systems",
    description: "Complete R404A, R449A, R448A refrigeration systems for commercial and industrial applications",
    capacity: "5kW - 500kW",
    tempRange: "+10°C to -40°C",
    refrigerants: ["R404A", "R449A", "R448A", "R507A"],
    applications: ["Cold Rooms", "Freezers", "Display Cases"],
    icon: Snowflake
  },
  {
    name: "Ammonia (NH3) Systems",
    description: "Industrial ammonia refrigeration for large-scale cold storage and food processing",
    capacity: "100kW - 5MW",
    tempRange: "+5°C to -45°C",
    refrigerants: ["R717 (NH3)"],
    applications: ["Industrial Cold Stores", "Food Processing", "Ice Plants"],
    icon: Zap
  },
  {
    name: "CO2 Refrigeration Systems",
    description: "Environmentally friendly transcritical and subcritical CO2 systems",
    capacity: "20kW - 1MW",
    tempRange: "+5°C to -45°C",
    refrigerants: ["R744 (CO2)"],
    applications: ["Supermarkets", "Cold Stores", "Logistics"],
    icon: Fan
  },
  {
    name: "Cascade Refrigeration",
    description: "Multi-stage systems for ultra-low temperature applications",
    capacity: "50kW - 2MW",
    tempRange: "-40°C to -80°C",
    refrigerants: ["CO2/NH3", "Freon/CO2"],
    applications: ["Blast Freezers", "Pharma", "Research"],
    icon: Settings
  }
]

const components = [
  {
    name: "Compressor Racks",
    description: "Multi-compressor systems with intelligent load management",
    brands: ["Bitzer", "Copeland", "Danfoss", "Frascold"]
  },
  {
    name: "Condensers",
    description: "Air-cooled and evaporative condensers for all climates",
    brands: ["Guntner", "Alfa Laval", "LU-VE", "Thermokey"]
  },
  {
    name: "Evaporators",
    description: "Unit coolers optimized for each application",
    brands: ["Guntner", "Alfa Laval", "Searle", "Helpman"]
  },
  {
    name: "Control Systems",
    description: "PLC-based automation with remote monitoring",
    brands: ["Danfoss", "Carel", "Dixell", "Siemens"]
  }
]

const specifications = [
  { label: "Cooling Capacity", value: "5kW - 5,000kW" },
  { label: "Temperature Range", value: "+15°C to -80°C" },
  { label: "COP Rating", value: "Up to 4.5" },
  { label: "Energy Class", value: "A++ Available" },
  { label: "Refrigerants", value: "HFC / Natural / Low-GWP" },
  { label: "Control", value: "PLC / SCADA / BMS" },
  { label: "Voltage", value: "400V 3-Phase / 50Hz" },
  { label: "Compliance", value: "PED / F-Gas / EN378" }
]

const features = [
  {
    icon: Gauge,
    title: "High Efficiency",
    description: "Industry-leading COP values with variable speed technology and heat recovery options"
  },
  {
    icon: Cpu,
    title: "Smart Controls",
    description: "Advanced PLC systems with remote monitoring, data logging, and predictive maintenance"
  },
  {
    icon: Shield,
    title: "Reliability",
    description: "Premium components from leading manufacturers ensure long service life"
  },
  {
    icon: Zap,
    title: "Energy Saving",
    description: "VFD compressors, EC fans, and intelligent defrost reduce energy consumption"
  },
  {
    icon: Fan,
    title: "Low Noise",
    description: "Optimized acoustic design for installation in noise-sensitive areas"
  },
  {
    icon: Settings,
    title: "Custom Design",
    description: "Systems engineered to your specific capacity and application requirements"
  }
]

const applications = [
  { name: "Cold Storage Warehouses", description: "Large-scale food distribution centers" },
  { name: "Food Processing Plants", description: "Meat, dairy, seafood, and produce facilities" },
  { name: "Supermarket Refrigeration", description: "Display cases and back-of-house storage" },
  { name: "Pharmaceutical Storage", description: "GDP-compliant temperature control" },
  { name: "Blast Freezing", description: "Rapid product freezing lines" },
  { name: "Ice Production", description: "Tube, flake, and block ice plants" }
]

export default function IndustrialCoolingSystemsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary/10 via-background to-accent/5">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <Badge variant="secondary" className="text-xs">Products</Badge>
                <span className="text-muted-foreground">/</span>
                <Badge variant="outline" className="text-xs">Cooling & Refrigeration</Badge>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
                Industrial Cooling <span className="text-primary">Systems</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Complete refrigeration solutions from small cold rooms to large-scale industrial 
                facilities. Our systems combine premium components with expert engineering to 
                deliver reliable, energy-efficient cooling for any application.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="gap-2">
                  <Phone className="h-4 w-4" />
                  Request Quote
                </Button>
                <Button size="lg" variant="outline" className="gap-2">
                  <Download className="h-4 w-4" />
                  System Brochure
                </Button>
              </div>
              <div className="flex items-center gap-6 pt-4">
                <div className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-primary" />
                  <span className="text-sm text-muted-foreground">CE Certified</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-primary" />
                  <span className="text-sm text-muted-foreground">F-Gas Compliant</span>
                </div>
                <div className="flex items-center gap-2">
                  <Gauge className="h-5 w-5 text-primary" />
                  <span className="text-sm text-muted-foreground">EN378</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/products/cooling-systems-hero.jpg"
                  alt="Industrial Cooling Systems"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-card p-4 rounded-xl shadow-lg border">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Thermometer className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Capacity Range</p>
                    <p className="font-bold text-foreground">5kW - 5MW</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* System Types Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">System Types</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Refrigeration Technologies
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We offer multiple refrigeration technologies to meet specific requirements
              for capacity, efficiency, and environmental considerations.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {systemTypes.map((system, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <system.icon className="h-7 w-7 text-primary" />
                    </div>
                    <div className="flex-1 space-y-3">
                      <h3 className="font-bold text-xl text-foreground group-hover:text-primary transition-colors">
                        {system.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">{system.description}</p>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-muted-foreground">Capacity:</span>
                          <span className="font-medium ml-2">{system.capacity}</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Temp:</span>
                          <span className="font-medium ml-2">{system.tempRange}</span>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-1 pt-2">
                        {system.refrigerants.map((ref, i) => (
                          <Badge key={i} variant="secondary" className="text-xs">{ref}</Badge>
                        ))}
                      </div>
                      <div className="flex flex-wrap gap-2 pt-2">
                        {system.applications.map((app, i) => (
                          <span key={i} className="text-xs text-muted-foreground flex items-center gap-1">
                            <CheckCircle2 className="h-3 w-3 text-primary" />{app}
                          </span>
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

      {/* Components Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">Premium Components</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Quality You Can Trust
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We partner with leading manufacturers to deliver systems built with the
              best components in the industry.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {components.map((comp, index) => (
              <Card key={index}>
                <CardContent className="p-6 space-y-4">
                  <h3 className="font-bold text-foreground">{comp.name}</h3>
                  <p className="text-sm text-muted-foreground">{comp.description}</p>
                  <div className="pt-2 border-t">
                    <p className="text-xs text-muted-foreground mb-2">Partner Brands:</p>
                    <div className="flex flex-wrap gap-1">
                      {comp.brands.map((brand, i) => (
                        <Badge key={i} variant="outline" className="text-xs">{brand}</Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">Features & Benefits</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose ARCOPAN Systems?
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flex gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <Tabs defaultValue="specifications" className="space-y-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <Badge variant="outline" className="mb-4">Technical Data</Badge>
                <h2 className="text-3xl font-bold text-foreground">Specifications & Applications</h2>
              </div>
              <TabsList>
                <TabsTrigger value="specifications">Specifications</TabsTrigger>
                <TabsTrigger value="applications">Applications</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="specifications" className="mt-8">
              <Card>
                <CardContent className="p-6">
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {specifications.map((spec, index) => (
                      <div key={index} className="space-y-1">
                        <p className="text-sm text-muted-foreground">{spec.label}</p>
                        <p className="font-semibold text-foreground">{spec.value}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="applications" className="mt-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {applications.map((app, index) => (
                  <Card key={index}>
                    <CardContent className="p-4 flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-medium text-foreground">{app.name}</h4>
                        <p className="text-sm text-muted-foreground">{app.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Need a Custom Refrigeration Solution?
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            Our engineering team will design a system tailored to your specific requirements,
            ensuring optimal performance and energy efficiency.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="secondary" className="gap-2">
              <Phone className="h-4 w-4" />
              Speak to an Engineer
            </Button>
            <Button size="lg" variant="outline" className="gap-2 bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
              <ArrowRight className="h-4 w-4" />
              View Our Projects
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
                  <Snowflake className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  Condensing Units
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Compact refrigeration units for smaller applications.
                </p>
                <Link href="/products/condensing-units" className="text-primary text-sm hover:underline">
                  Learn More →
                </Link>
              </CardContent>
            </Card>
            <Card className="group hover:shadow-lg transition-all">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Fan className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  Evaporators
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Unit coolers for cold rooms and freezers.
                </p>
                <Link href="/products/evaporators" className="text-primary text-sm hover:underline">
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
                  Cold Storage Panels
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Insulated panels for your cold room construction.
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
