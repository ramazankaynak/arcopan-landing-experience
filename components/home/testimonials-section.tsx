import { Quote } from "lucide-react"

const testimonials = [
  {
    quote: "ARCOPAN delivered our 10,000m² cold storage facility on time and within budget. Their engineering expertise and attention to detail exceeded our expectations.",
    author: "Hans Mueller",
    role: "Operations Director",
    company: "Nordic Foods GmbH",
  },
  {
    quote: "The pharmaceutical-grade cold rooms ARCOPAN built for us meet all GMP requirements. Their team understood our compliance needs from day one.",
    author: "Dr. Maria Santos",
    role: "Quality Assurance Manager",
    company: "EuroPharma S.A.",
  },
  {
    quote: "We have worked with ARCOPAN on multiple logistics centers across Europe. Consistent quality, reliable delivery, and excellent after-sales support.",
    author: "Pierre Dubois",
    role: "Facilities Manager",
    company: "ColdChain Logistics EU",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 text-balance">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground mt-4 text-lg">
            Hear from industry leaders who have trusted ARCOPAN with their cold storage projects.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-card rounded-xl p-8 shadow-sm border border-border relative"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 left-8">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Quote className="h-4 w-4 text-primary-foreground" />
                </div>
              </div>

              {/* Quote Text */}
              <p className="text-muted-foreground leading-relaxed mt-4 mb-6">
                &quot;{testimonial.quote}&quot;
              </p>

              {/* Author */}
              <div className="border-t border-border pt-4">
                <div className="font-semibold">{testimonial.author}</div>
                <div className="text-sm text-muted-foreground">
                  {testimonial.role}, {testimonial.company}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
