import Link from "next/link"
import { ArrowRight, UtensilsCrossed, Beef, Milk, Pill, Truck, ShoppingCart } from "lucide-react"

const industries = [
  {
    icon: UtensilsCrossed,
    title: "Food & Beverage",
    description: "Complete cold storage solutions for food processing, beverage production, and catering facilities.",
    stats: "150+ Projects",
    href: "/industries/food-beverage",
  },
  {
    icon: Beef,
    title: "Meat & Poultry",
    description: "Specialized freezing and storage systems for slaughterhouses and meat processing plants.",
    stats: "80+ Projects",
    href: "/industries/meat-poultry",
  },
  {
    icon: Milk,
    title: "Dairy",
    description: "Temperature-controlled environments for milk processing, cheese aging, and dairy products.",
    stats: "60+ Projects",
    href: "/industries/dairy",
  },
  {
    icon: Pill,
    title: "Pharmaceuticals",
    description: "GMP-compliant cold storage for vaccines, medications, and sensitive medical supplies.",
    stats: "40+ Projects",
    href: "/industries/pharmaceuticals",
  },
  {
    icon: Truck,
    title: "Logistics & Cold Chain",
    description: "Distribution centers and cross-docking facilities for the cold chain logistics industry.",
    stats: "100+ Projects",
    href: "/industries/logistics",
  },
  {
    icon: ShoppingCart,
    title: "Retail & Supermarkets",
    description: "Display coolers, walk-in freezers, and back-of-house cold storage for retail operations.",
    stats: "120+ Projects",
    href: "/industries/retail",
  },
]

export function IndustriesSection() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Industries We Serve</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 text-balance">
            Trusted Partner Across Industries
          </h2>
          <p className="text-muted-foreground mt-4 text-lg">
            We serve a diverse range of industries, each with unique cold storage requirements 
            and regulatory standards.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry) => (
            <Link
              key={industry.title}
              href={industry.href}
              className="group relative bg-card rounded-xl overflow-hidden border border-border hover:border-primary/30 transition-all duration-300"
            >
              {/* Top Section */}
              <div className="p-6 pb-4">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <industry.icon className="h-7 w-7 text-primary" />
                  </div>
                  <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {industry.stats}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{industry.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{industry.description}</p>
              </div>

              {/* Bottom Section */}
              <div className="px-6 py-4 bg-muted/30 flex items-center justify-between">
                <span className="text-sm font-medium text-foreground">View Projects</span>
                <ArrowRight className="h-4 w-4 text-primary group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
