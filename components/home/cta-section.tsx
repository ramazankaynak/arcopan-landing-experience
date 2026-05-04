import { Button } from "@/components/ui/button"
import { ArrowRight, Phone, Calendar } from "lucide-react"
import Link from "next/link"

export function CTASection() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="relative bg-gradient-to-br from-primary to-primary/80 rounded-3xl overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48ZyBmaWxsPSIjZmZmZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiPjxwYXRoIGQ9Ik01MCA1MGwyNS0yNXY1MEw1MCA1MHpNNTAgNTBMMjUgMjV2NTBsMjUtMjV6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-50" />
          
          <div className="relative px-8 py-16 md:px-16 md:py-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground text-balance">
                  Ready to Start Your Cold Storage Project?
                </h2>
                <p className="text-primary-foreground/80 mt-4 text-lg max-w-xl">
                  Our engineering team is ready to design and deliver a customized cold storage 
                  solution that meets your specific requirements and budget.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                  <Button size="lg" variant="secondary" asChild className="bg-background text-foreground hover:bg-background/90">
                    <Link href="/contact">
                      Request a Quote
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
                    <Calendar className="mr-2 h-4 w-4" />
                    Schedule Consultation
                  </Button>
                </div>
              </div>

              {/* Contact Info */}
              <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-primary-foreground mb-6">
                  Get in Touch
                </h3>
                <div className="space-y-4">
                  <a 
                    href="tel:+902123456789" 
                    className="flex items-center gap-4 text-primary-foreground/90 hover:text-primary-foreground transition-colors"
                  >
                    <div className="w-12 h-12 bg-primary-foreground/10 rounded-lg flex items-center justify-center">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-sm text-primary-foreground/70">Call Us</div>
                      <div className="font-medium">+90 212 345 67 89</div>
                    </div>
                  </a>
                  <div className="h-px bg-primary-foreground/10" />
                  <div className="text-sm text-primary-foreground/70">
                    <p>Our team is available Monday to Friday</p>
                    <p>9:00 AM - 6:00 PM CET</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
