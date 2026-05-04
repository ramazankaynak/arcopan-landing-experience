import { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Thermometer, Snowflake, Zap, Truck, Settings, Wrench, CheckCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Solutions | ARCOPAN Cold Storage Systems",
  description: "Explore our cold storage solutions including chilled storage, frozen storage, blast freezing, and custom project-based systems.",
}

const coldStorageSolutions = [
  {
    icon: Thermometer,
    title: "Chilled Storage (0/+4°C)",
    description: "Precision-controlled chilled environments for fresh food preservation, maintaining optimal temperatures for dairy, produce, and beverages.",
    features: [
      "Precise temperature control ±0.5°C",
      "High humidity management",
      "Energy-efficient cooling systems",
      "HACCP compliant design",
      "Real-time monitoring",
    ],
    applications: ["Fresh produce", "Dairy products", "Beverages", "Bakery items", "Prepared meals"],
    href: "/solutions/chilled-storage",
  },
  {
    icon: Snowflake,
    title: "Frozen Storage (-18/-25°C)",
    description: "Deep freeze storage solutions for long-term preservation of frozen goods, meat, seafood, and ice cream with consistent temperature maintenance.",
    features: [
      "Consistent -18°C to -25°C range",
      "Frost-free evaporator design",
      "Rapid temperature recovery",
      "Energy monitoring systems",
      "Backup cooling redundancy",
    ],
    applications: ["Frozen meat", "Seafood", "Ice cream", "Frozen vegetables", "Ready meals"],
    href: "/solutions/frozen-storage",
  },
  {
    icon: Zap,
    title: "Shock/Blast Freezing",
    description: "Rapid freezing technology that quickly reduces product temperature to preserve texture, nutritional value, and extend shelf life.",
    features: [
      "Temperatures down to -40°C",
      "Rapid freezing in hours",
      "Preserves product quality",
      "Batch and continuous systems",
      "Automated control systems",
    ],
    applications: ["Fresh meat processing", "Seafood processing", "Bakery products", "Ready meals", "Fruit & vegetables"],
    href: "/solutions/blast-freezing",
  },
  {
    icon: Truck,
    title: "Food Logistics Cold Stores",
    description: "Temperature-controlled distribution centers designed for high-throughput operations with multiple temperature zones.",
    features: [
      "Multi-temperature zones",
      "High-speed dock doors",
      "Cross-docking capabilities",
      "WMS integration ready",
      "24/7 monitoring systems",
    ],
    applications: ["Distribution centers", "Cross-docking facilities", "3PL warehouses", "Retail fulfillment", "E-commerce logistics"],
    href: "/solutions/food-logistics",
  },
]

const customSolutions = [
  {
    icon: Settings,
    title: "Project-Based Systems",
    description: "Complete turnkey solutions from concept to commissioning, tailored to your specific project requirements and site conditions.",
    process: [
      { step: "1", title: "Consultation", description: "Understanding your requirements and site conditions" },
      { step: "2", title: "Engineering", description: "Detailed design and technical specifications" },
      { step: "3", title: "Manufacturing", description: "Production of components to exact specifications" },
      { step: "4", title: "Installation", description: "Professional installation by certified teams" },
      { step: "5", title: "Commissioning", description: "Testing, validation, and handover" },
    ],
    href: "/solutions/project-based",
  },
  {
    icon: Wrench,
    title: "Tailor-Made Solutions",
    description: "When standard solutions do not fit, we engineer custom systems designed specifically for your unique operational needs.",
    capabilities: [
      "Non-standard dimensions",
      "Special temperature requirements",
      "Integration with existing systems",
      "Unique workflow requirements",
      "Regulatory compliance solutions",
      "Retrofit and renovation projects",
    ],
    href: "/solutions/tailor-made",
  },
]

export default function SolutionsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-muted/50 to-background">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Our Solutions</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-4 text-balance">
              Temperature-Controlled Solutions for Every Need
            </h1>
            <p className="text-muted-foreground mt-6 text-lg leading-relaxed">
              From standard chilled storage to complex multi-temperature facilities, ARCOPAN 
              delivers complete cold chain solutions engineered for reliability, efficiency, 
              and compliance with industry standards.
            </p>
          </div>
        </div>
      </section>

      {/* Cold Storage Systems */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold">Cold Storage Systems</h2>
            <p className="text-muted-foreground mt-2">
              Standard temperature-controlled environments for various applications
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {coldStorageSolutions.map((solution) => (
              <div 
                key={solution.title}
                className="bg-card rounded-2xl border border-border overflow-hidden hover:border-primary/30 transition-all duration-300"
              >
                {/* Header */}
                <div className="p-6 pb-0">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                      <solution.icon className="h-7 w-7 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">{solution.title}</h3>
                      <p className="text-muted-foreground mt-1 text-sm leading-relaxed">
                        {solution.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Features */}
                    <div>
                      <h4 className="text-sm font-semibold mb-3">Key Features</h4>
                      <ul className="space-y-2">
                        {solution.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-2 text-sm">
                            <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                            <span className="text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Applications */}
                    <div>
                      <h4 className="text-sm font-semibold mb-3">Applications</h4>
                      <div className="flex flex-wrap gap-2">
                        {solution.applications.map((app) => (
                          <span 
                            key={app}
                            className="text-xs bg-muted px-3 py-1 rounded-full text-muted-foreground"
                          >
                            {app}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Link */}
                  <div className="mt-6 pt-4 border-t border-border">
                    <Link 
                      href={solution.href}
                      className="inline-flex items-center gap-2 text-primary font-medium text-sm hover:gap-3 transition-all"
                    >
                      Learn More About This Solution
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Solutions */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold">Custom Solutions</h2>
            <p className="text-muted-foreground mt-2">
              When standard is not enough, we engineer solutions tailored to your needs
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Project-Based Systems */}
            <div className="bg-card rounded-2xl border border-border p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Settings className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{customSolutions[0].title}</h3>
                </div>
              </div>
              <p className="text-muted-foreground mb-6">
                {customSolutions[0].description}
              </p>

              {/* Process Steps */}
              <div className="space-y-4">
                <h4 className="text-sm font-semibold">Our Process</h4>
                {customSolutions[0].process?.map((item) => (
                  <div key={item.step} className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center shrink-0 text-sm font-semibold text-primary">
                      {item.step}
                    </div>
                    <div>
                      <div className="font-medium text-sm">{item.title}</div>
                      <div className="text-muted-foreground text-sm">{item.description}</div>
                    </div>
                  </div>
                ))}
              </div>

              <Link 
                href={customSolutions[0].href}
                className="inline-flex items-center gap-2 text-primary font-medium text-sm mt-6 hover:gap-3 transition-all"
              >
                Start Your Project
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Tailor-Made Solutions */}
            <div className="bg-card rounded-2xl border border-border p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Wrench className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{customSolutions[1].title}</h3>
                </div>
              </div>
              <p className="text-muted-foreground mb-6">
                {customSolutions[1].description}
              </p>

              {/* Capabilities */}
              <div className="space-y-3">
                <h4 className="text-sm font-semibold">Our Capabilities</h4>
                <ul className="grid grid-cols-2 gap-2">
                  {customSolutions[1].capabilities?.map((capability) => (
                    <li key={capability} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-primary shrink-0" />
                      <span className="text-muted-foreground">{capability}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link 
                href={customSolutions[1].href}
                className="inline-flex items-center gap-2 text-primary font-medium text-sm mt-6 hover:gap-3 transition-all"
              >
                Discuss Your Requirements
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">
            Not Sure Which Solution Fits Your Needs?
          </h2>
          <p className="text-primary-foreground/80 mt-4 max-w-2xl mx-auto">
            Our engineering team can assess your requirements and recommend the optimal 
            cold storage solution for your application.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Button size="lg" variant="secondary" className="bg-background text-foreground hover:bg-background/90">
              Schedule a Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
              Download Solutions Guide
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
