import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Snowflake, Building2, Warehouse, Package } from "lucide-react"

const productCategories = [
  {
    icon: Snowflake,
    title: "Cold Storage & Insulation",
    description: "High-performance insulated panels and cold room solutions for temperature-controlled environments.",
    products: ["Insulated Cold Storage Panels", "Wall & Roof Panels", "Cold Room Doors"],
    href: "/products#cold-storage",
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    icon: Building2,
    title: "Cooling & Refrigeration",
    description: "Industrial cooling systems, condensing units, and evaporators for efficient refrigeration.",
    products: ["Industrial Cooling Systems", "Condensing Units", "Evaporators"],
    href: "/products#cooling",
    color: "from-cyan-500/20 to-teal-500/20",
  },
  {
    icon: Warehouse,
    title: "Warehouse & Racking",
    description: "Complete warehouse solutions including racking systems, industrial doors, and dock equipment.",
    products: ["Racking Systems", "Industrial Doors", "Dock Levellers"],
    href: "/products#warehouse",
    color: "from-teal-500/20 to-emerald-500/20",
  },
  {
    icon: Package,
    title: "Components",
    description: "Essential components including profiles, fixings, PVC curtains, and safety accessories.",
    products: ["Profiles & Fixings", "PVC Strip Curtains", "Safety Accessories"],
    href: "/products#components",
    color: "from-emerald-500/20 to-green-500/20",
  },
]

export function ProductsSection() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Our Products</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 text-balance">
              Complete Cold Storage Product Range
            </h2>
            <p className="text-muted-foreground mt-4 text-lg">
              From insulated panels to complete refrigeration systems, we offer everything 
              you need for your cold storage facility.
            </p>
          </div>
          <Button variant="outline" asChild>
            <Link href="/products">
              View All Products
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {productCategories.map((category) => (
            <Link 
              key={category.title}
              href={category.href}
              className="group relative bg-card rounded-2xl p-8 border border-border hover:border-primary/30 transition-all duration-300 overflow-hidden"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              
              <div className="relative">
                {/* Icon */}
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <category.icon className="h-8 w-8 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-semibold mb-3">{category.title}</h3>
                <p className="text-muted-foreground mb-6">{category.description}</p>

                {/* Product List */}
                <ul className="space-y-2 mb-6">
                  {category.products.map((product) => (
                    <li key={product} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                      <span className="text-muted-foreground">{product}</span>
                    </li>
                  ))}
                </ul>

                {/* Link */}
                <div className="flex items-center gap-2 text-primary font-medium">
                  <span>Explore Category</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
