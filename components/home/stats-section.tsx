import { Building, Users, Globe, Award } from "lucide-react"

const stats = [
  {
    icon: Building,
    value: "500+",
    label: "Projects Delivered",
    description: "Successfully completed installations",
  },
  {
    icon: Users,
    value: "200+",
    label: "Expert Engineers",
    description: "Dedicated professionals",
  },
  {
    icon: Globe,
    value: "25+",
    label: "Countries Served",
    description: "Global presence in Europe",
  },
  {
    icon: Award,
    value: "30+",
    label: "Years Experience",
    description: "Industry leadership",
  },
]

export function StatsSection() {
  return (
    <section className="py-24 bg-primary">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground text-balance">
            Delivering Excellence at Scale
          </h2>
          <p className="text-primary-foreground/80 mt-4 text-lg">
            Our track record speaks for itself. Trusted by industry leaders across Europe.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="w-16 h-16 bg-primary-foreground/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <stat.icon className="h-8 w-8 text-primary-foreground" />
              </div>
              <div className="text-4xl md:text-5xl font-bold text-primary-foreground mb-2">
                {stat.value}
              </div>
              <div className="text-lg font-semibold text-primary-foreground mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-primary-foreground/70">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
