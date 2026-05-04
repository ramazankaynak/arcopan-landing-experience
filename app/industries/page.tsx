import { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, UtensilsCrossed, Beef, Milk, Pill, Truck, ShoppingCart, CheckCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Industries | ARCOPAN Cold Storage Solutions",
  description: "ARCOPAN serves diverse industries including food & beverage, meat processing, dairy, pharmaceuticals, logistics, and retail with specialized cold storage solutions.",
}

const industries = [
  {
    icon: UtensilsCrossed,
    title: "Food & Beverage",
    slug: "food-beverage",
    description: "Complete cold storage solutions for food processing plants, beverage production facilities, and catering operations. We understand the unique requirements of the food industry including HACCP compliance and food safety regulations.",
    stats: { projects: "150+", experience: "25+ years", clients: "80+" },
    requirements: [
      "HACCP compliant design",
      "Food-safe surfaces and materials",
      "Hygienic construction standards",
      "Temperature validation systems",
      "Easy cleaning and maintenance",
    ],
    solutions: ["Production cold rooms", "Ingredient storage", "Finished goods warehouses", "Blast chillers"],
  },
  {
    icon: Beef,
    title: "Meat & Poultry",
    slug: "meat-poultry",
    description: "Specialized freezing and storage systems for slaughterhouses, meat processing plants, and poultry facilities. Our solutions ensure optimal preservation and compliance with industry regulations.",
    stats: { projects: "80+", experience: "20+ years", clients: "45+" },
    requirements: [
      "Carcass chilling systems",
      "Blast freezing capabilities",
      "Multi-temperature zones",
      "Hanging rail systems",
      "Stainless steel construction",
    ],
    solutions: ["Chill rooms", "Blast freezers", "Cutting room cooling", "Maturation chambers"],
  },
  {
    icon: Milk,
    title: "Dairy",
    slug: "dairy",
    description: "Temperature-controlled environments for milk processing, cheese production, and dairy product storage. We deliver solutions that maintain product quality throughout the production and storage process.",
    stats: { projects: "60+", experience: "18+ years", clients: "35+" },
    requirements: [
      "Precise temperature control",
      "Humidity management",
      "Clean room conditions",
      "Cheese aging environments",
      "Rapid cooling systems",
    ],
    solutions: ["Milk storage tanks", "Cheese maturation rooms", "Yogurt production facilities", "Butter cold rooms"],
  },
  {
    icon: Pill,
    title: "Pharmaceuticals",
    slug: "pharmaceuticals",
    description: "GMP-compliant cold storage for vaccines, medications, and sensitive medical supplies. Our pharmaceutical solutions meet the strictest regulatory requirements for temperature-sensitive products.",
    stats: { projects: "40+", experience: "15+ years", clients: "25+" },
    requirements: [
      "GMP/GDP compliance",
      "Temperature mapping and validation",
      "Redundant cooling systems",
      "24/7 monitoring and alarms",
      "Clean room integration",
    ],
    solutions: ["Vaccine storage", "Clinical trial storage", "API cold rooms", "Blood bank facilities"],
  },
  {
    icon: Truck,
    title: "Logistics & Cold Chain",
    slug: "logistics",
    description: "Distribution centers and cross-docking facilities designed for efficient cold chain logistics. Our solutions support high-throughput operations with multiple temperature zones.",
    stats: { projects: "100+", experience: "22+ years", clients: "55+" },
    requirements: [
      "Multi-temperature zones",
      "High-speed dock doors",
      "Automated systems integration",
      "WMS compatibility",
      "Energy efficiency",
    ],
    solutions: ["Distribution centers", "Cross-docking facilities", "3PL warehouses", "E-commerce fulfillment"],
  },
  {
    icon: ShoppingCart,
    title: "Retail & Supermarkets",
    slug: "retail",
    description: "Display coolers, walk-in freezers, and back-of-house cold storage for retail operations. We help retailers maintain product quality while optimizing energy consumption.",
    stats: { projects: "120+", experience: "20+ years", clients: "70+" },
    requirements: [
      "Energy-efficient systems",
      "Display-ready design",
      "Easy product access",
      "Minimal noise operation",
      "Aesthetic integration",
    ],
    solutions: ["Walk-in coolers", "Display cold rooms", "Back-of-house storage", "Receiving coolers"],
  },
]

export default function IndustriesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-muted/50 to-background">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Industries We Serve</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-4 text-balance">
              Specialized Solutions for Every Industry
            </h1>
            <p className="text-muted-foreground mt-6 text-lg leading-relaxed">
              Each industry has unique cold storage requirements. ARCOPAN brings decades of 
              experience across diverse sectors, delivering solutions that meet specific 
              regulatory standards and operational needs.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="space-y-16">
            {industries.map((industry, index) => (
              <div 
                key={industry.slug}
                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
                      <industry.icon className="h-7 w-7 text-primary" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold">{industry.title}</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {industry.description}
                  </p>

                  {/* Stats */}
                  <div className="flex gap-8 mb-6">
                    <div>
                      <div className="text-2xl font-bold text-primary">{industry.stats.projects}</div>
                      <div className="text-sm text-muted-foreground">Projects</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary">{industry.stats.experience}</div>
                      <div className="text-sm text-muted-foreground">Experience</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary">{industry.stats.clients}</div>
                      <div className="text-sm text-muted-foreground">Clients</div>
                    </div>
                  </div>

                  <Link 
                    href={`/industries/${industry.slug}`}
                    className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
                  >
                    View Industry Solutions
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>

                {/* Info Cards */}
                <div className={`grid gap-6 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  {/* Requirements Card */}
                  <div className="bg-card rounded-xl border border-border p-6">
                    <h3 className="font-semibold mb-4">Industry Requirements</h3>
                    <ul className="space-y-2">
                      {industry.requirements.map((req) => (
                        <li key={req} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-primary shrink-0" />
                          <span className="text-muted-foreground">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Solutions Card */}
                  <div className="bg-muted/50 rounded-xl p-6">
                    <h3 className="font-semibold mb-4">Our Solutions</h3>
                    <div className="flex flex-wrap gap-2">
                      {industry.solutions.map((solution) => (
                        <span 
                          key={solution}
                          className="text-sm bg-background px-3 py-1 rounded-full text-muted-foreground"
                        >
                          {solution}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">
            Industry-Specific Expertise
          </h2>
          <p className="text-primary-foreground/80 mt-4 max-w-2xl mx-auto">
            Our engineers have deep experience in your industry. Let us show you how we can 
            address your specific cold storage challenges.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Button size="lg" variant="secondary" className="bg-background text-foreground hover:bg-background/90">
              Schedule Industry Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
              Download Case Studies
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
