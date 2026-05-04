import { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, MapPin, Calendar, Ruler, Thermometer } from "lucide-react"

export const metadata: Metadata = {
  title: "Projects | ARCOPAN Cold Storage Solutions",
  description: "Explore our portfolio of cold storage projects across Europe including distribution centers, food processing facilities, and pharmaceutical cold rooms.",
}

const projects = [
  {
    id: 1,
    title: "Nordic Foods Distribution Center",
    location: "Hamburg, Germany",
    year: "2024",
    industry: "Food & Beverage",
    size: "12,000 m²",
    temperature: "-25°C to +4°C",
    description: "Multi-temperature distribution center with automated storage and retrieval systems, featuring 5 temperature zones and high-speed dock doors.",
    highlights: ["5 temperature zones", "ASRS integration", "40 dock positions", "Solar panel installation"],
  },
  {
    id: 2,
    title: "EuroPharma Cold Chain Facility",
    location: "Vienna, Austria",
    year: "2024",
    industry: "Pharmaceuticals",
    size: "4,500 m²",
    temperature: "-80°C to +8°C",
    description: "GDP-compliant pharmaceutical storage facility with ultra-low temperature storage for vaccines and biological materials.",
    highlights: ["GDP compliant", "Ultra-low freezers", "24/7 monitoring", "Backup power systems"],
  },
  {
    id: 3,
    title: "Fresh Dairy Processing Plant",
    location: "Rotterdam, Netherlands",
    year: "2023",
    industry: "Dairy",
    size: "8,000 m²",
    temperature: "0°C to +12°C",
    description: "Complete cold storage solution for a modern dairy processing facility including milk reception, processing areas, and finished goods storage.",
    highlights: ["Hygienic design", "CIP integration", "Cheese maturation", "Automated palletizing"],
  },
  {
    id: 4,
    title: "Premium Meat Processing Center",
    location: "Warsaw, Poland",
    year: "2023",
    industry: "Meat & Poultry",
    size: "6,500 m²",
    temperature: "-35°C to +4°C",
    description: "State-of-the-art meat processing facility with carcass chilling, cutting rooms, and blast freezing capabilities.",
    highlights: ["Carcass rails", "Blast freezers", "Cutting room cooling", "EU export certified"],
  },
  {
    id: 5,
    title: "Retail Cold Chain Hub",
    location: "Milan, Italy",
    year: "2023",
    industry: "Retail & Supermarkets",
    size: "15,000 m²",
    temperature: "-25°C to +8°C",
    description: "Regional distribution hub serving 200+ retail locations with cross-docking capabilities and order picking areas.",
    highlights: ["200+ retail served", "Pick-to-light systems", "Voice picking", "Electric truck charging"],
  },
  {
    id: 6,
    title: "Seafood Export Terminal",
    location: "Oslo, Norway",
    year: "2022",
    industry: "Food & Beverage",
    size: "5,000 m²",
    temperature: "-30°C to 0°C",
    description: "Cold storage facility for fresh and frozen seafood exports with rapid chilling and blast freezing systems.",
    highlights: ["Rapid chilling", "Export documentation", "Air cargo ready", "Traceability systems"],
  },
]

const filters = [
  "All Projects",
  "Food & Beverage",
  "Meat & Poultry",
  "Dairy",
  "Pharmaceuticals",
  "Logistics",
  "Retail",
]

export default function ProjectsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-muted/50 to-background">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Our Projects</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-4 text-balance">
              500+ Projects Delivered Across Europe
            </h1>
            <p className="text-muted-foreground mt-6 text-lg leading-relaxed">
              Explore our portfolio of cold storage installations spanning from small cold rooms 
              to large-scale distribution centers. Each project reflects our commitment to 
              engineering excellence and client satisfaction.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
            <div>
              <div className="text-3xl font-bold text-primary">500+</div>
              <div className="text-muted-foreground">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">25+</div>
              <div className="text-muted-foreground">Countries</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">2M+</div>
              <div className="text-muted-foreground">Square Meters Built</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">99%</div>
              <div className="text-muted-foreground">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 border-b border-border sticky top-20 bg-background/95 backdrop-blur-md z-40">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap gap-2">
            {filters.map((filter, index) => (
              <button
                key={filter}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  index === 0 
                    ? 'bg-primary text-primary-foreground' 
                    : 'bg-muted text-muted-foreground hover:bg-muted/80'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <article 
                key={project.id}
                className="group bg-card rounded-xl border border-border overflow-hidden hover:border-primary/30 transition-all duration-300"
              >
                {/* Project Image Placeholder */}
                <div className="h-48 bg-gradient-to-br from-primary/10 to-accent/10 relative">
                  <div className="absolute top-4 left-4">
                    <span className="text-xs font-medium bg-primary text-primary-foreground px-3 py-1 rounded-full">
                      {project.industry}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  {/* Meta Info */}
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {project.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {project.year}
                    </div>
                  </div>

                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Specs */}
                  <div className="flex gap-4 text-sm mb-4">
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Ruler className="h-4 w-4 text-primary" />
                      {project.size}
                    </div>
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Thermometer className="h-4 w-4 text-primary" />
                      {project.temperature}
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.highlights.slice(0, 3).map((highlight) => (
                      <span 
                        key={highlight}
                        className="text-xs bg-muted px-2 py-1 rounded text-muted-foreground"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>

                  {/* Link */}
                  <Link 
                    href={`/projects/${project.id}`}
                    className="inline-flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all"
                  >
                    View Project Details
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Projects
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">
            Ready to Start Your Project?
          </h2>
          <p className="text-primary-foreground/80 mt-4 max-w-2xl mx-auto">
            Join our portfolio of successful projects. Our engineering team is ready to bring 
            your cold storage vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Button size="lg" variant="secondary" className="bg-background text-foreground hover:bg-background/90">
              Request a Quote
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
              Download Project Portfolio
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
