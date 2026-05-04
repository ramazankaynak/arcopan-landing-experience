import { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Award, Globe, Users, Target, Eye, Heart } from "lucide-react"

export const metadata: Metadata = {
  title: "About ARCOPAN | EU EPC Cold Storage Company",
  description: "Learn about ARCOPAN, a leading EU EPC company with over 30 years of experience in cold storage solutions, serving clients across Europe.",
}

const timeline = [
  { year: "1994", title: "Company Founded", description: "ARCOPAN was established in Istanbul with a focus on insulated panel manufacturing." },
  { year: "2000", title: "European Expansion", description: "Opened first European sales office in Germany to serve the growing EU market." },
  { year: "2008", title: "EPC Services Launch", description: "Expanded from manufacturing to full turnkey EPC project delivery." },
  { year: "2015", title: "ISO Certification", description: "Achieved ISO 9001:2015 certification for quality management systems." },
  { year: "2020", title: "Sustainability Focus", description: "Launched eco-friendly product lines and sustainable manufacturing practices." },
  { year: "2024", title: "500+ Projects", description: "Celebrated completion of 500th cold storage project across Europe." },
]

const values = [
  {
    icon: Target,
    title: "Excellence",
    description: "We pursue engineering excellence in every project, delivering solutions that exceed industry standards.",
  },
  {
    icon: Heart,
    title: "Integrity",
    description: "We build lasting relationships through transparency, honesty, and commitment to our promises.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We work closely with clients, partners, and communities to create shared success.",
  },
  {
    icon: Eye,
    title: "Innovation",
    description: "We continuously improve our products and processes to stay ahead of industry needs.",
  },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-muted/50 to-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary font-medium text-sm uppercase tracking-wider">About ARCOPAN</span>
              <h1 className="text-4xl md:text-5xl font-bold mt-4 text-balance">
                30 Years of Engineering Excellence
              </h1>
              <p className="text-muted-foreground mt-6 text-lg leading-relaxed">
                ARCOPAN is a leading EU EPC company specializing in turnkey cold storage solutions. 
                From our roots in panel manufacturing to becoming a full-service engineering partner, 
                we have built a reputation for quality, reliability, and innovation.
              </p>
              <div className="flex gap-4 mt-8">
                <Button asChild>
                  <Link href="/company/team">
                    Meet Our Team
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/projects">View Our Projects</Link>
                </Button>
              </div>
            </div>

            {/* Stats Card */}
            <div className="bg-card rounded-2xl border border-border p-8 shadow-sm">
              <h3 className="text-xl font-semibold mb-6">ARCOPAN at a Glance</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-muted/50 rounded-xl">
                  <div className="text-3xl font-bold text-primary">30+</div>
                  <div className="text-sm text-muted-foreground mt-1">Years Experience</div>
                </div>
                <div className="text-center p-4 bg-muted/50 rounded-xl">
                  <div className="text-3xl font-bold text-primary">500+</div>
                  <div className="text-sm text-muted-foreground mt-1">Projects Delivered</div>
                </div>
                <div className="text-center p-4 bg-muted/50 rounded-xl">
                  <div className="text-3xl font-bold text-primary">200+</div>
                  <div className="text-sm text-muted-foreground mt-1">Team Members</div>
                </div>
                <div className="text-center p-4 bg-muted/50 rounded-xl">
                  <div className="text-3xl font-bold text-primary">25+</div>
                  <div className="text-sm text-muted-foreground mt-1">Countries</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-primary rounded-2xl p-8 text-primary-foreground">
              <div className="w-14 h-14 bg-primary-foreground/10 rounded-xl flex items-center justify-center mb-6">
                <Target className="h-7 w-7" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-primary-foreground/80 leading-relaxed">
                To deliver innovative, sustainable, and reliable cold storage solutions that help 
                our clients protect their products, optimize operations, and achieve their business goals.
              </p>
            </div>
            <div className="bg-card rounded-2xl border border-border p-8">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Eye className="h-7 w-7 text-primary" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
              <p className="text-muted-foreground leading-relaxed">
                To be the most trusted cold storage partner in Europe, recognized for engineering 
                excellence, environmental responsibility, and unwavering commitment to client success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Our Values</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4">What Drives Us Forward</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value.title} className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Our Journey</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4">Three Decades of Growth</h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div key={item.year} className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">
                      {item.year.slice(2)}
                    </div>
                    {index < timeline.length - 1 && (
                      <div className="w-0.5 h-full bg-border mt-2" />
                    )}
                  </div>
                  <div className="pb-8">
                    <div className="text-sm text-primary font-medium">{item.year}</div>
                    <h3 className="text-lg font-semibold mt-1">{item.title}</h3>
                    <p className="text-muted-foreground mt-1">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Quality Assurance</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4">Certified Excellence</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-card rounded-xl border border-border p-6 text-center">
              <Award className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">ISO 9001:2015</h3>
              <p className="text-sm text-muted-foreground">Quality Management System</p>
            </div>
            <div className="bg-card rounded-xl border border-border p-6 text-center">
              <Globe className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">CE Marking</h3>
              <p className="text-sm text-muted-foreground">European Conformity</p>
            </div>
            <div className="bg-card rounded-xl border border-border p-6 text-center">
              <Award className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">ISO 14001</h3>
              <p className="text-sm text-muted-foreground">Environmental Management</p>
            </div>
          </div>
          <div className="text-center mt-8">
            <Button variant="outline" asChild>
              <Link href="/company/quality">
                View All Certifications
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
