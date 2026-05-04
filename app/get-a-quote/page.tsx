"use client"

import React, { useState } from "react"
import Link from "next/link"
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  FileText,
  Shield,
  Wrench,
  Globe,
  ChevronRight,
  Upload,
  CheckSquare,
  Square,
  ArrowRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { cn } from "@/lib/utils"

const whyWorkWithUs = [
  {
    icon: Clock,
    title: "24hr Response",
    desc: "Technical & commercial proposal within one business day",
  },
  {
    icon: FileText,
    title: "BOQ / Drawing Upload",
    desc: "Submit your bill of quantities or CAD drawings directly",
  },
  {
    icon: Globe,
    title: "Flexible Export Terms",
    desc: "EXW, FOB, CIF, DDP — adapted to your procurement process",
  },
  {
    icon: Shield,
    title: "CE / ISO Certified",
    desc: "CE marking, ISO 9001:2015, EN 14509 compliant products",
  },
  {
    icon: Wrench,
    title: "Engineering Support",
    desc: "Full HACCP, thermal calculation, and BIM design support",
  },
]

const exportTerms = ["EXW", "FOB", "CIF", "DDP", "DAP"]

const certifications = ["CE Marking", "ISO 9001:2015", "EN 14509", "EN 10346"]

const productOptions = [
  { id: "cold-panels", label: "Cold Storage Panels" },
  { id: "wall-roof-panels", label: "Wall Panels / Roof Panels" },
  { id: "condensing-units", label: "Condensing Units" },
  { id: "evaporators", label: "Evaporators" },
  { id: "industrial-cooling", label: "Industrial Cooling Systems" },
  { id: "racking-systems", label: "Racking Systems" },
  { id: "industrial-doors", label: "Industrial Doors" },
  { id: "dock-systems", label: "Dock Systems" },
  { id: "components", label: "Components & Accessories" },
  { id: "turnkey", label: "Turnkey EPC Project" },
]

export default function GetAQuotePage() {
  const [selectedProducts, setSelectedProducts] = useState<string[]>([])
  const [submitted, setSubmitted] = useState(false)
  const [fileName, setFileName] = useState<string | null>(null)

  const toggleProduct = (id: string) => {
    setSelectedProducts((prev) =>
      prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id]
    )
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) setFileName(file.name)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="bg-foreground text-primary-foreground pt-40 pb-16">
        <div className="container mx-auto px-6">
          {/* breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-white/50 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-white/80">Get a Quote</span>
          </div>

          <div className="inline-flex items-center gap-2 border border-white/20 rounded-full px-4 py-1.5 text-xs tracking-widest uppercase text-white/70 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block" />
            Get in Touch
          </div>

          <h1 className="font-serif text-5xl lg:text-6xl font-bold leading-tight text-balance mb-4">
            Start Your Project
            <br />
            <span className="text-accent">Request a Quote</span>
          </h1>
          <p className="text-white/60 text-lg max-w-xl leading-relaxed">
            Share your project requirements and our engineering team will respond
            within 24 hours with a detailed technical and commercial proposal.
          </p>
        </div>
      </section>

      {/* ── Contact Info Bar ─────────────────────────────────────────── */}
      <section className="border-b border-border bg-card">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border">
            <a
              href="mailto:info@arcopan.com"
              className="flex items-center gap-4 py-6 px-4 hover:bg-muted/50 transition-colors group"
            >
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                <Mail className="h-4.5 w-4.5 text-primary" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-0.5">Email</p>
                <p className="font-medium text-foreground">info@arcopan.com</p>
              </div>
            </a>
            <a
              href="tel:+902123456789"
              className="flex items-center gap-4 py-6 px-4 hover:bg-muted/50 transition-colors group"
            >
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                <Phone className="h-4.5 w-4.5 text-primary" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-0.5">Phone / WhatsApp</p>
                <p className="font-medium text-foreground">+90 212 345 67 89</p>
              </div>
            </a>
            <div className="flex items-center gap-4 py-6 px-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="h-4.5 w-4.5 text-primary" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-0.5">Office</p>
                <p className="font-medium text-foreground">Istanbul, Turkey &mdash; Export Worldwide</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Main Content ─────────────────────────────────────────────── */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-[380px_1fr] gap-12 items-start">

            {/* Left: Why Work With Us */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">Why Work With Us</h2>
                <div className="space-y-5">
                  {whyWorkWithUs.map(({ icon: Icon, title, desc }) => (
                    <div key={title} className="flex items-start gap-4">
                      <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Icon className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold text-sm text-foreground mb-0.5">{title}</p>
                        <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Export Terms */}
              <div className="border border-border rounded-xl p-5 bg-card">
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3">Export Terms We Support</p>
                <div className="flex flex-wrap gap-2">
                  {exportTerms.map((term) => (
                    <span
                      key={term}
                      className="px-3 py-1 rounded-md bg-primary/10 text-primary text-sm font-medium"
                    >
                      {term}
                    </span>
                  ))}
                </div>
              </div>

              {/* Certifications */}
              <div className="border border-border rounded-xl p-5 bg-card">
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3">Certifications</p>
                <div className="flex flex-wrap gap-2">
                  {certifications.map((cert) => (
                    <span
                      key={cert}
                      className="px-3 py-1.5 rounded-md border border-primary/30 text-primary text-xs font-semibold"
                    >
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div className="bg-card border border-border rounded-2xl p-8 lg:p-10 shadow-sm">
              {submitted ? (
                <div className="flex flex-col items-center justify-center text-center py-16 gap-4">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <CheckSquare className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Inquiry Received</h3>
                  <p className="text-muted-foreground max-w-sm leading-relaxed">
                    Thank you for your inquiry. Our engineering team will prepare a detailed
                    technical and commercial proposal and respond within 24 business hours.
                  </p>
                  <Button variant="outline" className="mt-2" onClick={() => setSubmitted(false)}>
                    Submit Another Inquiry
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <h3 className="text-xl font-bold text-foreground">Project Inquiry Form</h3>

                  {/* Contact Details */}
                  <fieldset className="space-y-4">
                    <legend className="text-xs font-semibold uppercase tracking-widest text-muted-foreground pb-2 border-b border-border w-full block">
                      Contact Details
                    </legend>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <Label htmlFor="fullName">Full Name <span className="text-destructive">*</span></Label>
                        <Input id="fullName" placeholder="Your full name" required />
                      </div>
                      <div className="space-y-1.5">
                        <Label htmlFor="company">Company <span className="text-destructive">*</span></Label>
                        <Input id="company" placeholder="Company name" required />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <Label htmlFor="email">Email <span className="text-destructive">*</span></Label>
                        <Input id="email" type="email" placeholder="your@email.com" required />
                      </div>
                      <div className="space-y-1.5">
                        <Label htmlFor="phone">Phone / WhatsApp</Label>
                        <Input id="phone" type="tel" placeholder="+1 234 567 89 00" />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <Label htmlFor="country">Country / Region <span className="text-destructive">*</span></Label>
                      <Input id="country" placeholder="e.g. United Kingdom, UAE, Germany" required />
                    </div>
                  </fieldset>

                  {/* Project Details */}
                  <fieldset className="space-y-4">
                    <legend className="text-xs font-semibold uppercase tracking-widest text-muted-foreground pb-2 border-b border-border w-full block">
                      Project Details
                    </legend>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <Label htmlFor="projectName">Project Name</Label>
                        <Input id="projectName" placeholder="e.g. Dubai Cold Hub Phase 2" />
                      </div>
                      <div className="space-y-1.5">
                        <Label htmlFor="projectSize">Project Size</Label>
                        <Input id="projectSize" placeholder="e.g. 2,500 m² / 5,000 pallets" />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <Label htmlFor="tempRange">Temperature Range</Label>
                        <Select>
                          <SelectTrigger id="tempRange">
                            <SelectValue placeholder="Select temperature range" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="chilled">Chilled: 0°C to +4°C</SelectItem>
                            <SelectItem value="frozen">Frozen: -18°C to -25°C</SelectItem>
                            <SelectItem value="blast">Blast Freezing: -35°C to -40°C</SelectItem>
                            <SelectItem value="ripening">Ripening: +8°C to +14°C</SelectItem>
                            <SelectItem value="pharma">Pharmaceutical: +2°C to +8°C</SelectItem>
                            <SelectItem value="ambient">Ambient / Controlled</SelectItem>
                            <SelectItem value="custom">Custom Range</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-1.5">
                        <Label htmlFor="exportTerms">Preferred Export Terms</Label>
                        <Select>
                          <SelectTrigger id="exportTerms">
                            <SelectValue placeholder="Select export terms" />
                          </SelectTrigger>
                          <SelectContent>
                            {exportTerms.map((t) => (
                              <SelectItem key={t} value={t.toLowerCase()}>{t}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </fieldset>

                  {/* Products Required */}
                  <fieldset className="space-y-3">
                    <legend className="text-xs font-semibold uppercase tracking-widest text-muted-foreground pb-2 border-b border-border w-full block">
                      Products Required
                    </legend>
                    <div className="grid sm:grid-cols-2 gap-2">
                      {productOptions.map(({ id, label }) => {
                        const checked = selectedProducts.includes(id)
                        return (
                          <button
                            key={id}
                            type="button"
                            onClick={() => toggleProduct(id)}
                            className={cn(
                              "flex items-center gap-2.5 rounded-lg border px-3.5 py-2.5 text-sm transition-colors text-left",
                              checked
                                ? "border-primary bg-primary/8 text-primary font-medium"
                                : "border-border text-muted-foreground hover:border-primary/50 hover:text-foreground"
                            )}
                          >
                            {checked
                              ? <CheckSquare className="h-4 w-4 flex-shrink-0 text-primary" />
                              : <Square className="h-4 w-4 flex-shrink-0 text-muted-foreground/50" />
                            }
                            {label}
                          </button>
                        )
                      })}
                    </div>
                  </fieldset>

                  {/* Additional Information */}
                  <fieldset className="space-y-4">
                    <legend className="text-xs font-semibold uppercase tracking-widest text-muted-foreground pb-2 border-b border-border w-full block">
                      Additional Information
                    </legend>

                    <div className="space-y-1.5">
                      <Label htmlFor="message">Message / Project Description</Label>
                      <Textarea
                        id="message"
                        rows={5}
                        placeholder="Describe your project requirements, timeline, or any specific technical needs..."
                        className="resize-none"
                      />
                    </div>

                    {/* File Upload */}
                    <div className="space-y-1.5">
                      <Label>Upload BOQ / Drawings (Optional)</Label>
                      <label
                        htmlFor="fileUpload"
                        className="flex flex-col items-center justify-center gap-2 border-2 border-dashed border-border rounded-xl p-6 cursor-pointer hover:border-primary/50 hover:bg-muted/30 transition-colors"
                      >
                        <Upload className="h-5 w-5 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">
                          {fileName
                            ? <span className="text-primary font-medium">{fileName}</span>
                            : "Attach PDF, DWG, or Excel files"}
                        </span>
                        <span className="text-xs text-muted-foreground/60">Max 25 MB</span>
                        <input
                          id="fileUpload"
                          type="file"
                          accept=".pdf,.dwg,.xls,.xlsx,.dxf"
                          className="sr-only"
                          onChange={handleFileChange}
                        />
                      </label>
                    </div>
                  </fieldset>

                  <Button type="submit" size="lg" className="w-full gap-2 text-base">
                    Send Inquiry
                    <ArrowRight className="h-4 w-4" />
                  </Button>

                  <p className="text-center text-xs text-muted-foreground">
                    We respond within 24 business hours &nbsp;&middot;&nbsp; All inquiries are confidential
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── Location ─────────────────────────────────────────────────── */}
      <section className="pb-20">
        <div className="container mx-auto px-6">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-1">Our Location</h2>
            <p className="text-muted-foreground text-sm">
              Istanbul, Turkey &mdash; Manufacturing &amp; Export Hub for EU, UK, Middle East, and Africa
            </p>
          </div>

          {/* Map Embed */}
          <div className="rounded-2xl overflow-hidden border border-border h-[400px] bg-muted relative">
            <iframe
              title="ARCOPAN Office Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d192406.31559348442!2d28.731994!3d41.0053215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa7040068086b%3A0xe1ccfe98bc01b0d0!2sIstanbul%2C%20Turkey!5e0!3m2!1sen!2suk!4v1681000000000!5m2!1sen!2suk"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Location Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
            {[
              { label: "Headquarters", value: "Istanbul, Turkey" },
              { label: "Export Regions", value: "EU · UK · Middle East · Africa" },
              { label: "Response Time", value: "Within 24 business hours" },
            ].map(({ label, value }) => (
              <div
                key={label}
                className="bg-card border border-border rounded-xl p-5 text-center"
              >
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">{label}</p>
                <p className="font-semibold text-foreground">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
