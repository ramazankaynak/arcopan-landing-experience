import Link from "next/link"
import { Snowflake, Phone, Mail, MapPin, Linkedin, Twitter, Youtube } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const footerLinks = {
  products: [
    { title: "Insulated Panels", href: "/products/insulated-cold-storage-panels" },
    { title: "Cooling Systems", href: "/products/industrial-cooling-systems" },
    { title: "Warehouse Solutions", href: "/products/warehouse-racking-systems" },
    { title: "Cold Room Doors", href: "/products/insulated-cold-room-doors" },
    { title: "All Products", href: "/products" },
  ],
  solutions: [
    { title: "Chilled Storage", href: "/solutions/chilled-storage" },
    { title: "Frozen Storage", href: "/solutions/frozen-storage" },
    { title: "Blast Freezing", href: "/solutions/blast-freezing" },
    { title: "Custom Solutions", href: "/solutions/tailor-made" },
  ],
  company: [
    { title: "About Us", href: "/company/about" },
    { title: "Our Team", href: "/company/team" },
    { title: "Quality & Certifications", href: "/company/quality" },
    { title: "Sustainability", href: "/company/sustainability" },
    { title: "Projects", href: "/projects" },
  ],
  industries: [
    { title: "Food & Beverage", href: "/industries/food-beverage" },
    { title: "Pharmaceuticals", href: "/industries/pharmaceuticals" },
    { title: "Logistics", href: "/industries/logistics" },
    { title: "Retail", href: "/industries/retail" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      {/* CTA Section */}
      <div className="bg-primary">
        <div className="container mx-auto px-6 py-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold text-primary-foreground">Ready to Start Your Project?</h3>
              <p className="text-primary-foreground/80 mt-2">
                Contact our engineering team for a customized cold storage solution.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="secondary" size="lg" className="bg-background text-foreground hover:bg-background/90">
                Get a Free Quote
              </Button>
              <Button variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
                Schedule a Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Snowflake className="h-6 w-6 text-primary-foreground" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight">ARCOPAN</span>
                <span className="text-[10px] font-mono uppercase tracking-widest text-background/60">Cooling Partner</span>
              </div>
            </Link>
            <p className="text-background/70 text-sm leading-relaxed">
              ARCOPAN is a leading EU EPC company specializing in turnkey cold storage solutions. 
              With decades of experience, we deliver innovative refrigeration and insulation systems 
              for the food, pharmaceutical, and logistics industries.
            </p>
            <div className="space-y-3 text-sm">
              <a href="tel:+902123456789" className="flex items-center gap-3 text-background/70 hover:text-background transition-colors">
                <Phone className="h-4 w-4" />
                +90 212 345 67 89
              </a>
              <a href="mailto:info@arcopan.com" className="flex items-center gap-3 text-background/70 hover:text-background transition-colors">
                <Mail className="h-4 w-4" />
                info@arcopan.com
              </a>
              <div className="flex items-start gap-3 text-background/70">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                <span>Istanbul, Turkey<br />European Union Operations</span>
              </div>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold mb-4">Products</h4>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.title}>
                  <Link href={link.href} className="text-sm text-background/70 hover:text-background transition-colors">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="font-semibold mb-4">Solutions</h4>
            <ul className="space-y-3">
              {footerLinks.solutions.map((link) => (
                <li key={link.title}>
                  <Link href={link.href} className="text-sm text-background/70 hover:text-background transition-colors">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.title}>
                  <Link href={link.href} className="text-sm text-background/70 hover:text-background transition-colors">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold mb-4">Stay Updated</h4>
            <p className="text-sm text-background/70 mb-4">
              Subscribe to our newsletter for industry insights and updates.
            </p>
            <div className="space-y-3">
              <Input 
                type="email" 
                placeholder="Your email" 
                className="bg-background/10 border-background/20 text-background placeholder:text-background/50"
              />
              <Button className="w-full">Subscribe</Button>
            </div>
            <div className="flex items-center gap-4 mt-6">
              <a href="#" className="text-background/70 hover:text-background transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-background/70 hover:text-background transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-background/70 hover:text-background transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-background/60">
            <p>&copy; {new Date().getFullYear()} ARCOPAN. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <Link href="/privacy" className="hover:text-background transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-background transition-colors">Terms of Service</Link>
              <Link href="/cookies" className="hover:text-background transition-colors">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
