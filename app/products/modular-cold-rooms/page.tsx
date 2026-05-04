import { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  Snowflake, 
  ArrowRight, 
  CheckCircle2, 
  Thermometer, 
  Shield, 
  Zap, 
  Clock, 
  Settings,
  Box,
  Layers,
  Timer,
  Wrench,
  Building2,
  Ruler,
  Package,
  Star
} from "lucide-react"

export const metadata: Metadata = {
  title: "Modular Cold Rooms | ARCOPAN",
  description: "Pre-fabricated modular cold room solutions for chilled and frozen storage. Quick installation, customizable designs, and energy-efficient performance for food, pharma, and logistics industries.",
}

const coldRoomTypes = [
  {
    name: "Chiller Rooms",
    temperature: "0°C to +10°C",
    description: "Ideal for fresh produce, dairy products, beverages, and short-term food storage requiring controlled positive temperatures.",
    applications: ["Fresh Vegetables & Fruits", "Dairy Products", "Beverages", "Bakery Products", "Floral Storage"],
    image: "/images/products/chiller-room.jpg",
    popular: true
  },
  {
    name: "Freezer Rooms",
    temperature: "-18°C to -25°C",
    description: "Deep freeze storage solutions for long-term preservation of meat, seafood, ice cream, and frozen food products.",
    applications: ["Frozen Meat & Poultry", "Seafood Storage", "Ice Cream", "Frozen Vegetables", "Ready Meals"],
    image: "/images/products/freezer-room.jpg",
    popular: true
  },
  {
    name: "Blast Freezers",
    temperature: "-35°C to -45°C",
    description: "Rapid freezing chambers designed to quickly freeze products while preserving quality, texture, and nutritional value.",
    applications: ["Quick Freezing", "IQF Products", "Bakery Shock Freezing", "Seafood Processing", "Meat Processing"],
    image: "/images/products/blast-freezer.jpg",
    popular: false
  },
  {
    name: "Ripening Chambers",
    temperature: "+12°C to +18°C",
    description: "Controlled atmosphere rooms for fruit ripening with precise temperature, humidity, and ethylene gas control.",
    applications: ["Banana Ripening", "Mango Ripening", "Avocado Ripening", "Tomato Ripening", "Citrus Degreening"],
    image: "/images/products/ripening-chamber.jpg",
    popular: false
  },
  {
    name: "Pharmaceutical Cold Rooms",
    temperature: "+2°C to +8°C",
    description: "GMP-compliant cold storage for vaccines, medicines, and pharmaceutical products with precise temperature control and monitoring.",
    applications: ["Vaccine Storage", "Medicine Storage", "Blood Bank", "Laboratory Samples", "Clinical Trials"],
    image: "/images/products/pharma-cold-room.jpg",
    popular: true
  },
  {
    name: "Clean Room Cold Storage",
    temperature: "Custom Range",
    description: "Combined cleanroom and cold storage solutions for industries requiring both contamination control and temperature management.",
    applications: ["Pharmaceutical Manufacturing", "Biotech", "Medical Devices", "Electronics", "Research Labs"],
    image: "/images/products/cleanroom-cold.jpg",
    popular: false
  }
]

const features = [
  {
    icon: Timer,
    title: "Quick Installation",
    description: "Pre-fabricated modular design allows rapid on-site assembly, reducing installation time by up to 60% compared to traditional construction."
  },
  {
    icon: Ruler,
    title: "Custom Dimensions",
    description: "Fully customizable sizes from small walk-in coolers (6m³) to large industrial cold stores (10,000+ m³) to match your exact requirements."
  },
  {
    icon: Thermometer,
    title: "Wide Temperature Range",
    description: "Operating temperatures from +15°C to -45°C with precise control (±0.5°C) for any application from chilling to deep freezing."
  },
  {
    icon: Zap,
    title: "Energy Efficient",
    description: "High-performance insulation (PIR/PUR panels) with thermal conductivity as low as 0.022 W/mK, reducing energy consumption by up to 30%."
  },
  {
    icon: Shield,
    title: "Hygienic Design",
    description: "Food-grade materials, seamless joints, and easy-to-clean surfaces meeting HACCP, FDA, and EU food safety regulations."
  },
  {
    icon: Wrench,
    title: "Relocatable",
    description: "Modular construction allows easy disassembly and relocation if your business needs change or you move to a new facility."
  }
]

const specifications = {
  panels: [
    { spec: "Panel Thickness", value: "60mm, 80mm, 100mm, 120mm, 150mm, 200mm" },
    { spec: "Core Material", value: "PIR (Polyisocyanurate) / PUR (Polyurethane)" },
    { spec: "Thermal Conductivity", value: "0.022 - 0.024 W/mK" },
    { spec: "Panel Width", value: "1000mm / 1150mm standard" },
    { spec: "Panel Length", value: "Up to 12,000mm" },
    { spec: "External Facing", value: "Pre-painted galvanized steel (0.5mm)" },
    { spec: "Internal Facing", value: "Food-grade coated steel / Stainless steel" },
    { spec: "Fire Rating", value: "B-s1, d0 (Euroclass)" },
    { spec: "Joint System", value: "Cam-lock / Tongue & Groove / Hook & Pin" }
  ],
  dimensions: [
    { spec: "Minimum Size", value: "1.5m x 1.5m x 2.2m (internal)" },
    { spec: "Maximum Size", value: "Unlimited (modular expansion)" },
    { spec: "Standard Heights", value: "2.2m, 2.5m, 3.0m, 3.5m, 4.0m (internal)" },
    { spec: "Floor Load Capacity", value: "Up to 5,000 kg/m² (with reinforced floor)" },
    { spec: "Ceiling Load", value: "Up to 50 kg/m² (standard)" }
  ],
  temperature: [
    { spec: "Chiller Range", value: "0°C to +15°C" },
    { spec: "Freezer Range", value: "-18°C to -25°C" },
    { spec: "Deep Freeze Range", value: "-30°C to -45°C" },
    { spec: "Temperature Accuracy", value: "±0.5°C" },
    { spec: "Temperature Uniformity", value: "±1°C throughout chamber" },
    { spec: "Pull-Down Time", value: "Varies by size and application" }
  ],
  compliance: [
    { spec: "Food Safety", value: "HACCP, FDA 21 CFR, EU 852/2004" },
    { spec: "Quality Management", value: "ISO 9001:2015" },
    { spec: "Environmental", value: "ISO 14001:2015" },
    { spec: "Pharmaceutical", value: "EU GMP, WHO Guidelines (for pharma rooms)" },
    { spec: "Fire Safety", value: "EN 13501-1, FM Approved options" },
    { spec: "Structural", value: "EN 14509" }
  ]
}

const applications = [
  {
    industry: "Food & Beverage",
    icon: "🍎",
    uses: ["Fresh produce storage", "Dairy & cheese aging", "Beverage cooling", "Bakery products", "Restaurant walk-in coolers"]
  },
  {
    industry: "Meat & Seafood",
    icon: "🥩",
    uses: ["Meat processing plants", "Seafood storage", "Abattoirs", "Butcher shops", "Fish markets"]
  },
  {
    industry: "Pharmaceutical",
    icon: "💊",
    uses: ["Vaccine storage", "Medicine warehousing", "Blood banks", "Clinical trial storage", "Hospital pharmacies"]
  },
  {
    industry: "Logistics",
    icon: "🚛",
    uses: ["Distribution centers", "Cross-docking facilities", "3PL warehouses", "Airport cargo", "Port cold stores"]
  },
  {
    industry: "Retail",
    icon: "🛒",
    uses: ["Supermarket back stores", "Convenience stores", "Hotel kitchens", "Catering companies", "Food service"]
  },
  {
    industry: "Agriculture",
    icon: "🌾",
    uses: ["Fruit ripening", "Seed storage", "Flower preservation", "Vegetable pre-cooling", "Farm cold stores"]
  }
]

const relatedProducts = [
  {
    title: "Insulated Cold Storage Panels",
    href: "/products/insulated-cold-storage-panels",
    description: "High-performance PIR/PUR panels for cold room construction"
  },
  {
    title: "Insulated Cold Room Doors",
    href: "/products/insulated-cold-room-doors",
    description: "Hinged, sliding, and high-speed doors for cold rooms"
  },
  {
    title: "Industrial Cooling Systems",
    href: "/products/industrial-cooling-systems",
    description: "Complete refrigeration systems for cold rooms"
  },
  {
    title: "Evaporators",
    href: "/products/evaporators",
    description: "Unit coolers and evaporators for cold room applications"
  }
]

export default function ModularColdRoomsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
        <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-6 relative">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <span>/</span>
            <Link href="/products" className="hover:text-primary transition-colors">Products</Link>
            <span>/</span>
            <span className="text-foreground">Modular Cold Rooms</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="secondary" className="mb-4">
                <Snowflake className="w-3 h-3 mr-1" />
                Pre-Fabricated Solutions
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
                Modular Cold Rooms
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Complete pre-fabricated cold room solutions for chilled, frozen, and controlled atmosphere storage. 
                Quick installation, customizable designs, and superior energy efficiency for food, pharmaceutical, 
                and logistics applications.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="gap-2">
                  Request a Quote
                  <ArrowRight className="w-4 h-4" />
                </Button>
                <Button size="lg" variant="outline" className="gap-2">
                  Download Brochure
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-border">
                <div>
                  <div className="text-3xl font-bold text-primary">-45°C</div>
                  <div className="text-sm text-muted-foreground">to +15°C Range</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">60%</div>
                  <div className="text-sm text-muted-foreground">Faster Installation</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">30%</div>
                  <div className="text-sm text-muted-foreground">Energy Savings</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 overflow-hidden border border-border">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <Box className="w-24 h-24 text-primary/40 mx-auto mb-4" />
                    <p className="text-muted-foreground">Modular Cold Room Visualization</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-card rounded-xl p-4 shadow-lg border border-border">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">CE Certified</div>
                    <div className="text-sm text-muted-foreground">EU Standards Compliant</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cold Room Types */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Product Range</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Cold Room Solutions for Every Application
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              From small walk-in coolers to large industrial cold stores, we offer complete modular solutions 
              tailored to your specific temperature and storage requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coldRoomTypes.map((room, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-primary/5 to-accent/5 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Snowflake className="w-16 h-16 text-primary/20" />
                  </div>
                  {room.popular && (
                    <Badge className="absolute top-4 right-4 bg-primary">
                      <Star className="w-3 h-3 mr-1" />
                      Popular
                    </Badge>
                  )}
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-semibold text-foreground">{room.name}</h3>
                    <Badge variant="secondary" className="font-mono">
                      <Thermometer className="w-3 h-3 mr-1" />
                      {room.temperature}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {room.description}
                  </p>
                  <div className="space-y-2">
                    <div className="text-sm font-medium text-foreground">Applications:</div>
                    <div className="flex flex-wrap gap-1">
                      {room.applications.slice(0, 3).map((app, i) => (
                        <Badge key={i} variant="outline" className="text-xs">
                          {app}
                        </Badge>
                      ))}
                      {room.applications.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{room.applications.length - 3} more
                        </Badge>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Why Choose Us</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Key Features & Benefits
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our modular cold rooms combine advanced engineering with practical benefits 
              for maximum efficiency and value.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group p-6 rounded-xl border border-border bg-card hover:shadow-lg hover:border-primary/20 transition-all duration-300">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Technical Data</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Technical Specifications
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Detailed specifications for our modular cold room systems
            </p>
          </div>

          <Tabs defaultValue="panels" className="w-full">
            <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-4 mb-8">
              <TabsTrigger value="panels">Panels</TabsTrigger>
              <TabsTrigger value="dimensions">Dimensions</TabsTrigger>
              <TabsTrigger value="temperature">Temperature</TabsTrigger>
              <TabsTrigger value="compliance">Compliance</TabsTrigger>
            </TabsList>

            <TabsContent value="panels">
              <Card>
                <CardContent className="p-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    {specifications.panels.map((item, index) => (
                      <div key={index} className="flex justify-between items-center py-3 border-b border-border last:border-0">
                        <span className="text-muted-foreground">{item.spec}</span>
                        <span className="font-medium text-foreground text-right">{item.value}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="dimensions">
              <Card>
                <CardContent className="p-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    {specifications.dimensions.map((item, index) => (
                      <div key={index} className="flex justify-between items-center py-3 border-b border-border last:border-0">
                        <span className="text-muted-foreground">{item.spec}</span>
                        <span className="font-medium text-foreground text-right">{item.value}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="temperature">
              <Card>
                <CardContent className="p-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    {specifications.temperature.map((item, index) => (
                      <div key={index} className="flex justify-between items-center py-3 border-b border-border last:border-0">
                        <span className="text-muted-foreground">{item.spec}</span>
                        <span className="font-medium text-foreground text-right">{item.value}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="compliance">
              <Card>
                <CardContent className="p-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    {specifications.compliance.map((item, index) => (
                      <div key={index} className="flex justify-between items-center py-3 border-b border-border last:border-0">
                        <span className="text-muted-foreground">{item.spec}</span>
                        <span className="font-medium text-foreground text-right">{item.value}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Applications by Industry */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Industries</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Applications by Industry
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our modular cold rooms serve diverse industries with specialized solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {applications.map((app, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl">{app.icon}</span>
                    <h3 className="text-lg font-semibold text-foreground">{app.industry}</h3>
                  </div>
                  <ul className="space-y-2">
                    {app.uses.map((use, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                        {use}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Our Process</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              From Consultation to Commissioning
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We guide you through every step of your cold room project
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Consultation", desc: "Understanding your requirements, site conditions, and operational needs" },
              { step: "02", title: "Design & Engineering", desc: "Custom design with thermal calculations, 3D modeling, and specification sheets" },
              { step: "03", title: "Manufacturing", desc: "Precision manufacturing of panels, doors, and components in our EU facility" },
              { step: "04", title: "Installation & Support", desc: "Professional installation, commissioning, and ongoing technical support" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Related Products</h2>
            <p className="text-muted-foreground">Complete your cold room with these complementary products</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((product, index) => (
              <Link key={index} href={product.href}>
                <Card className="h-full hover:shadow-lg hover:border-primary/20 transition-all duration-300">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-foreground mb-2">{product.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{product.description}</p>
                    <span className="text-primary text-sm font-medium inline-flex items-center gap-1">
                      Learn More <ArrowRight className="w-4 h-4" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Design Your Cold Room?
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Contact our engineering team for a free consultation and customized proposal 
            tailored to your specific requirements.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="secondary" className="gap-2">
              Get a Free Quote
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Call: +90 212 345 67 89
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
