import { Snowflake, Settings, Shield, Leaf, Clock, Wrench } from "lucide-react"

const features = [
  {
    icon: Snowflake,
    title: "Advanced Insulation",
    description: "High-performance PIR and PUR panels with superior thermal efficiency for optimal temperature control.",
  },
  {
    icon: Settings,
    title: "Turnkey Solutions",
    description: "Complete EPC services from engineering design to installation and commissioning.",
  },
  {
    icon: Shield,
    title: "Quality Certified",
    description: "ISO 9001:2015 and CE certified products meeting the highest European standards.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly",
    description: "Sustainable solutions with reduced environmental impact and energy-efficient systems.",
  },
  {
    icon: Clock,
    title: "Fast Delivery",
    description: "Efficient project management ensuring on-time delivery across European markets.",
  },
  {
    icon: Wrench,
    title: "After-Sales Support",
    description: "Comprehensive maintenance and technical support throughout product lifecycle.",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Why Choose ARCOPAN</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 text-balance">
            Engineering Excellence Meets Innovation
          </h2>
          <p className="text-muted-foreground mt-4 text-lg">
            We combine decades of expertise with cutting-edge technology to deliver 
            cold storage solutions that exceed industry standards.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="group bg-card rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-border hover:border-primary/20"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
