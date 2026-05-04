import { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Linkedin, Mail, Users, GraduationCap, Award } from "lucide-react"

export const metadata: Metadata = {
  title: "Our Team | ARCOPAN Engineering Experts",
  description: "Meet the ARCOPAN engineering team - 200+ professionals with expertise in cold storage design, manufacturing, and installation.",
}

const leadership = [
  {
    name: "Mehmet Yilmaz",
    role: "Chief Executive Officer",
    bio: "30+ years in cold storage industry. Led ARCOPAN's transformation from manufacturer to full EPC provider.",
    linkedin: "#",
    email: "m.yilmaz@arcopan.com",
  },
  {
    name: "Hans Weber",
    role: "Chief Technical Officer",
    bio: "PhD in Thermal Engineering. Expert in refrigeration system design and energy optimization.",
    linkedin: "#",
    email: "h.weber@arcopan.com",
  },
  {
    name: "Maria Andersson",
    role: "Chief Operations Officer",
    bio: "20+ years in project management. Oversees all European operations and project delivery.",
    linkedin: "#",
    email: "m.andersson@arcopan.com",
  },
  {
    name: "Pierre Laurent",
    role: "Director of Engineering",
    bio: "15+ years in cold storage engineering. Leads the technical design and R&D teams.",
    linkedin: "#",
    email: "p.laurent@arcopan.com",
  },
]

const departments = [
  {
    name: "Engineering & Design",
    count: 45,
    description: "Mechanical, electrical, and structural engineers specializing in cold storage systems.",
    skills: ["Thermal calculations", "3D modeling", "System integration", "Energy simulation"],
  },
  {
    name: "Project Management",
    count: 30,
    description: "Certified project managers ensuring on-time, on-budget delivery across Europe.",
    skills: ["PMP certified", "Multi-site coordination", "Risk management", "Client liaison"],
  },
  {
    name: "Manufacturing",
    count: 80,
    description: "Skilled technicians operating state-of-the-art panel production facilities.",
    skills: ["CNC operation", "Quality control", "Lean manufacturing", "Safety certified"],
  },
  {
    name: "Installation",
    count: 35,
    description: "Field teams specialized in cold room assembly and refrigeration installation.",
    skills: ["Panel installation", "Refrigeration", "Commissioning", "Safety trained"],
  },
  {
    name: "Service & Support",
    count: 20,
    description: "Dedicated after-sales team providing maintenance and technical support.",
    skills: ["Preventive maintenance", "Emergency response", "Remote monitoring", "Training"],
  },
]

const stats = [
  { icon: Users, value: "200+", label: "Team Members" },
  { icon: GraduationCap, value: "45", label: "Engineers" },
  { icon: Award, value: "15+", label: "Avg. Years Experience" },
]

export default function TeamPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-muted/50 to-background">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Our Team</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-4 text-balance">
              Expert Engineers, Dedicated Professionals
            </h1>
            <p className="text-muted-foreground mt-6 text-lg leading-relaxed">
              Behind every ARCOPAN project is a team of 200+ skilled professionals united by 
              a passion for engineering excellence. From design to installation, our experts 
              bring decades of combined experience to every challenge.
            </p>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 mt-12">
            {stats.map((stat) => (
              <div key={stat.label} className="flex items-center gap-4">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
                  <stat.icon className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold">Leadership Team</h2>
            <p className="text-muted-foreground mt-2">
              Experienced leaders guiding ARCOPAN&apos;s strategic vision and operations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadership.map((person) => (
              <div 
                key={person.name}
                className="bg-card rounded-xl border border-border overflow-hidden hover:border-primary/30 transition-all duration-300"
              >
                {/* Photo Placeholder */}
                <div className="h-48 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                  <Users className="h-16 w-16 text-primary/30" />
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-semibold">{person.name}</h3>
                  <p className="text-sm text-primary">{person.role}</p>
                  <p className="text-muted-foreground text-sm mt-3 leading-relaxed">
                    {person.bio}
                  </p>
                  <div className="flex gap-3 mt-4">
                    <a 
                      href={person.linkedin}
                      className="w-8 h-8 bg-muted rounded-full flex items-center justify-center hover:bg-primary/10 transition-colors"
                    >
                      <Linkedin className="h-4 w-4 text-muted-foreground" />
                    </a>
                    <a 
                      href={`mailto:${person.email}`}
                      className="w-8 h-8 bg-muted rounded-full flex items-center justify-center hover:bg-primary/10 transition-colors"
                    >
                      <Mail className="h-4 w-4 text-muted-foreground" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold">Our Departments</h2>
            <p className="text-muted-foreground mt-2">
              Specialized teams working together to deliver exceptional results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {departments.map((dept) => (
              <div 
                key={dept.name}
                className="bg-card rounded-xl border border-border p-6 hover:border-primary/30 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold">{dept.name}</h3>
                  <span className="text-2xl font-bold text-primary">{dept.count}</span>
                </div>
                <p className="text-muted-foreground text-sm mb-4">{dept.description}</p>
                <div className="flex flex-wrap gap-2">
                  {dept.skills.map((skill) => (
                    <span 
                      key={skill}
                      className="text-xs bg-muted px-2 py-1 rounded text-muted-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">
            Join Our Team
          </h2>
          <p className="text-primary-foreground/80 mt-4 max-w-2xl mx-auto">
            We are always looking for talented engineers, project managers, and technicians 
            to join our growing team. Build your career with a leader in cold storage solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Button size="lg" variant="secondary" className="bg-background text-foreground hover:bg-background/90">
              View Open Positions
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
              Send Your CV
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
