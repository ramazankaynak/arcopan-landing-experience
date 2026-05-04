import { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Snowflake, Building2, Warehouse, Package, CheckCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Products | ARCOPAN Cold Storage Solutions",
  description: "Explore our complete range of cold storage products including insulated panels, cooling systems, warehouse solutions, and components.",
}

const productCategories = [
  {
    id: "cold-storage",
    icon: Snowflake,
    title: "Cold Storage & Insulation",
    description: "High-performance insulated panels and cold room solutions engineered for maximum thermal efficiency and durability.",
    products: [
      {
        title: "Insulated Cold Storage Panels",
        description: "PIR and PUR core panels with thermal conductivity as low as 0.022 W/mK. Available in various thicknesses from 50mm to 200mm.",
        features: ["Superior thermal insulation", "Food-safe surfaces", "Fire-resistant options", "Easy installation"],
        href: "/products/insulated-cold-storage-panels",
      },
      {
        title: "Insulated Wall & Roof Panels",
        description: "Comprehensive wall and roof panel systems for industrial buildings, warehouses, and cold storage facilities.",
        features: ["Weather-resistant", "Structural strength", "Multiple finishes", "Custom lengths"],
        href: "/products/insulated-wall-roof-panels",
      },
      {
        title: "Insulated Cold Room Doors",
        description: "Hinged, sliding, and sectional doors designed for temperature-controlled environments with optimal sealing.",
        features: ["Airtight sealing", "Heavy-duty hinges", "Automated options", "Safety features"],
        href: "/products/insulated-cold-room-doors",
      },
    ],
  },
  {
    id: "cooling",
    icon: Building2,
    title: "Cooling & Refrigeration",
    description: "Industrial-grade refrigeration equipment designed for efficiency, reliability, and long-term performance.",
    products: [
      {
        title: "Industrial Cooling Systems",
        description: "Complete cooling solutions including chillers, compressor racks, and central refrigeration systems for large-scale facilities.",
        features: ["Energy efficient", "Low noise operation", "Remote monitoring", "Redundant systems"],
        href: "/products/industrial-cooling-systems",
      },
      {
        title: "Condensing Units",
        description: "Air-cooled and water-cooled condensing units for various temperature applications from +10°C to -40°C.",
        features: ["Compact design", "High COP values", "R448A/R449A compatible", "Quick installation"],
        href: "/products/condensing-units",
      },
      {
        title: "Evaporators",
        description: "Ceiling-mounted, wall-mounted, and floor-standing evaporators optimized for cold room applications.",
        features: ["Uniform air distribution", "Electric/hot gas defrost", "Stainless steel options", "Low temperature models"],
        href: "/products/evaporators",
      },
    ],
  },
  {
    id: "warehouse",
    icon: Warehouse,
    title: "Warehouse & Racking",
    description: "Complete warehouse infrastructure solutions from racking systems to loading dock equipment.",
    products: [
      {
        title: "Warehouse Racking Systems",
        description: "Heavy-duty pallet racking, drive-in racking, and mobile racking systems for cold storage environments.",
        features: ["Cold storage compatible", "High load capacity", "Flexible configurations", "FIFO/LIFO options"],
        href: "/products/warehouse-racking-systems",
      },
      {
        title: "Market Racking Systems",
        description: "Display and storage solutions for retail environments including supermarket cold rooms and display cases.",
        features: ["Retail-focused design", "Easy product access", "Modular systems", "Brand customization"],
        href: "/products/market-racking-systems",
      },
      {
        title: "Industrial Door Systems",
        description: "High-speed doors, sectional doors, and strip curtains for efficient traffic flow and temperature control.",
        features: ["Fast operation", "Energy saving", "Crash recovery", "Safety sensors"],
        href: "/products/industrial-door-systems",
      },
      {
        title: "Dock Leveller & Ramp Systems",
        description: "Hydraulic dock levellers, loading ramps, and dock shelters for efficient goods handling.",
        features: ["Smooth transitions", "Safety features", "Weather sealing", "Heavy load capacity"],
        href: "/products/dock-leveller-ramp-systems",
      },
    ],
  },
  {
    id: "components",
    icon: Package,
    title: "Components",
    description: "Essential accessories and components for cold storage construction and maintenance.",
    products: [
      {
        title: "Profiles & Fixings",
        description: "Aluminum profiles, corner pieces, flashings, and fixing systems for panel installation.",
        features: ["Corrosion resistant", "Thermal breaks", "Easy assembly", "Complete systems"],
        href: "/products/profiles-fixings",
      },
      {
        title: "PVC Strip Curtains",
        description: "Clear and colored PVC strip curtains for doorways, providing visual access while maintaining temperature.",
        features: ["Temperature barrier", "Clear visibility", "Easy replacement", "Various widths"],
        href: "/products/pvc-strip-curtains",
      },
      {
        title: "Safety Accessories",
        description: "Safety equipment including impact protectors, warning signs, temperature alarms, and emergency releases.",
        features: ["Personnel safety", "Equipment protection", "Regulatory compliance", "Easy installation"],
        href: "/products/safety-accessories",
      },
    ],
  },
]

export default function ProductsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-muted/50 to-background">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Our Products</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-4 text-balance">
              Complete Cold Storage Product Range
            </h1>
            <p className="text-muted-foreground mt-6 text-lg leading-relaxed">
              From insulated panels to complete refrigeration systems, ARCOPAN offers a comprehensive 
              range of products engineered for the cold storage industry. All products meet European 
              quality standards and come with our commitment to excellence.
            </p>
          </div>

          {/* Quick Navigation */}
          <div className="flex flex-wrap gap-4 mt-8">
            {productCategories.map((category) => (
              <a
                key={category.id}
                href={`#${category.id}`}
                className="inline-flex items-center gap-2 bg-card border border-border rounded-full px-4 py-2 text-sm font-medium hover:border-primary/50 hover:bg-primary/5 transition-colors"
              >
                <category.icon className="h-4 w-4 text-primary" />
                {category.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories */}
      {productCategories.map((category, categoryIndex) => (
        <section 
          key={category.id} 
          id={category.id}
          className={`py-20 ${categoryIndex % 2 === 1 ? 'bg-muted/30' : ''}`}
        >
          <div className="container mx-auto px-6">
            {/* Category Header */}
            <div className="flex items-start gap-6 mb-12">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center shrink-0">
                <category.icon className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold">{category.title}</h2>
                <p className="text-muted-foreground mt-2 max-w-2xl">{category.description}</p>
              </div>
            </div>

            {/* Products Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.products.map((product) => (
                <div 
                  key={product.title}
                  className="bg-card rounded-xl border border-border hover:border-primary/30 transition-all duration-300 overflow-hidden group"
                >
                  {/* Product Image Placeholder */}
                  <div className="h-48 bg-gradient-to-br from-primary/5 to-accent/5 flex items-center justify-center">
                    <category.icon className="h-16 w-16 text-primary/30" />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                      {product.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-2 mb-6">
                      {product.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-primary shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Link */}
                    <Link 
                      href={product.href}
                      className="inline-flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all"
                    >
                      Learn More
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">
            Need Help Choosing the Right Products?
          </h2>
          <p className="text-primary-foreground/80 mt-4 max-w-2xl mx-auto">
            Our engineering team can help you select the optimal products for your specific 
            application and provide technical specifications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Button size="lg" variant="secondary" className="bg-background text-foreground hover:bg-background/90">
              Request Product Catalog
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
              Talk to an Engineer
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
