import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Award, Shield, CheckCircle, FileCheck, Microscope, ClipboardCheck } from "lucide-react"

export const metadata: Metadata = {
  title: "Quality & Certifications | ARCOPAN",
  description: "ARCOPAN is committed to the highest quality standards. Learn about our ISO certifications, CE marking, and quality management systems.",
}

const certifications = [
  {
    icon: Award,
    title: "ISO 9001:2015",
    category: "Quality Management",
    description: "Internationally recognized standard for quality management systems, ensuring consistent product quality and customer satisfaction.",
    validUntil: "2027",
    scope: "Design, manufacturing, and installation of cold storage systems",
  },
  {
    icon: Shield,
    title: "CE Marking",
    category: "European Conformity",
    description: "Our products meet EU safety, health, and environmental protection requirements, allowing free movement across the European market.",
    validUntil: "Ongoing",
    scope: "All insulated panel products and cold room doors",
  },
  {
    icon: Award,
    title: "ISO 14001:2015",
    category: "Environmental Management",
    description: "Demonstrates our commitment to minimizing environmental impact through effective environmental management practices.",
    validUntil: "2026",
    scope: "Manufacturing facilities and operations",
  },
  {
    icon: Award,
    title: "ISO 45001:2018",
    category: "Occupational Health & Safety",
    description: "International standard for occupational health and safety management systems, protecting our employees and stakeholders.",
    validUntil: "2026",
    scope: "All operations and project sites",
  },
]

const qualityProcesses = [
  {
    icon: Microscope,
    title: "Incoming Material Inspection",
    description: "All raw materials undergo rigorous testing before entering production, including chemical analysis and physical property verification.",
  },
  {
    icon: ClipboardCheck,
    title: "In-Process Quality Control",
    description: "Multiple checkpoints throughout manufacturing ensure each product meets exact specifications at every stage.",
  },
  {
    icon: FileCheck,
    title: "Final Product Testing",
    description: "Comprehensive testing including thermal conductivity, fire resistance, and structural integrity before shipment.",
  },
  {
    icon: CheckCircle,
    title: "Installation Verification",
    description: "On-site quality checks ensure proper installation according to design specifications and industry standards.",
  },
]

const testingCapabilities = [
  "Thermal conductivity testing (EN 12667)",
  "Fire reaction testing (EN 13501-1)",
  "Compressive strength testing",
  "Dimensional accuracy verification",
  "Surface quality inspection",
  "Joint tightness testing",
  "Door operation testing",
  "Refrigeration system commissioning",
]

export default function QualityPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-muted/50 to-background">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Quality & Certifications</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-4 text-balance">
              Uncompromising Quality Standards
            </h1>
            <p className="text-muted-foreground mt-6 text-lg leading-relaxed">
              At ARCOPAN, quality is not just a department – it is embedded in our culture. 
              From raw materials to final installation, every step is guided by rigorous 
              standards and continuous improvement.
            </p>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold">Our Certifications</h2>
            <p className="text-muted-foreground mt-2">
              Internationally recognized certifications validating our commitment to excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {certifications.map((cert) => (
              <div 
                key={cert.title}
                className="bg-card rounded-xl border border-border p-6 hover:border-primary/30 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                    <cert.icon className="h-7 w-7 text-primary" />
                  </div>
                  <div>
                    <div className="text-xs text-primary font-medium uppercase tracking-wider">
                      {cert.category}
                    </div>
                    <h3 className="text-xl font-semibold mt-1">{cert.title}</h3>
                  </div>
                </div>
                <p className="text-muted-foreground mt-4 leading-relaxed">
                  {cert.description}
                </p>
                <div className="mt-4 pt-4 border-t border-border grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="text-muted-foreground">Valid Until</div>
                    <div className="font-medium">{cert.validUntil}</div>
                  </div>
                  <div>
                    <div className="text-muted-foreground">Scope</div>
                    <div className="font-medium">{cert.scope}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Processes */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl md:text-3xl font-bold">Quality Control Process</h2>
            <p className="text-muted-foreground mt-2">
              Our multi-stage quality control ensures excellence at every step
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {qualityProcesses.map((process, index) => (
              <div key={process.title} className="text-center">
                <div className="relative">
                  <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <process.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center text-sm font-bold text-primary">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2">{process.title}</h3>
                <p className="text-muted-foreground text-sm">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testing Capabilities */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold">Testing Capabilities</h2>
              <p className="text-muted-foreground mt-4 leading-relaxed">
                Our in-house laboratory and testing facilities allow us to verify product 
                performance against European and international standards. We conduct 
                comprehensive testing to ensure every product meets its specifications.
              </p>
              <ul className="mt-6 space-y-3">
                {testingCapabilities.map((capability) => (
                  <li key={capability} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                    <span className="text-muted-foreground">{capability}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Visual Element */}
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 aspect-square flex items-center justify-center">
              <div className="text-center">
                <div className="text-5xl font-bold text-primary mb-2">99.7%</div>
                <div className="text-lg font-medium mb-1">Quality Pass Rate</div>
                <div className="text-sm text-muted-foreground">First-time inspection success</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">
            Request Certification Documents
          </h2>
          <p className="text-primary-foreground/80 mt-4 max-w-2xl mx-auto">
            Need copies of our certifications or test reports? Contact our quality team 
            for documentation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Button size="lg" variant="secondary" className="bg-background text-foreground hover:bg-background/90">
              Download Certificates
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
              Contact Quality Team
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
