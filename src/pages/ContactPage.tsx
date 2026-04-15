import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  MessageSquare,
  Globe,
  CheckCircle,
  Send,
  ExternalLink,
  ShieldCheck,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface FormData {
  company: string;
  fullName: string;
  jobTitle: string;
  country: string;
  email: string;
  phone: string;
  projectType: string;
  projectDescription: string;
  startDate: string;
  projectScale: string;
  hearAboutUs: string;
}

const initialForm: FormData = {
  company: "",
  fullName: "",
  jobTitle: "",
  country: "",
  email: "",
  phone: "",
  projectType: "",
  projectDescription: "",
  startDate: "",
  projectScale: "",
  hearAboutUs: "",
};

const inputClass =
  "rounded-md border border-border bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary w-full transition text-foreground placeholder:text-muted-foreground/60";

const labelClass = "block text-xs font-medium text-muted-foreground mb-1.5";

const processSteps = [
  {
    number: "01",
    title: "Engineering Review",
    body: "Your project brief is assessed by a cold chain engineer — thermal load context, product type, geography and timeline are all considered before we respond.",
  },
  {
    number: "02",
    title: "Structured Response",
    body: "Within 48 business hours you receive a tailored reply: clarifying questions where needed, preliminary technical direction, and a clear scope of what we can support.",
  },
  {
    number: "03",
    title: "Proposal & Documentation",
    body: "For qualified projects we issue a formal proposal with BOQ framework, compliance context and engineering documentation suitable for your EPC handover package.",
  },
];

const stats = [
  { value: "500+", label: "Projects Completed" },
  { value: "25+", label: "Countries Served" },
  { value: "30+", label: "Years of Experience" },
  { value: "48h", label: "Quote Response Time" },
];

const certifications = ["ISO 9001", "EN 13165", "CE Marking", "HACCP", "GDP"];

const ContactPage = () => {
  const [formData, setFormData] = useState<FormData>(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData(initialForm);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* ─────────────────────────────────────────────
          1. HERO STRIP
      ───────────────────────────────────────────── */}
      <section className="bg-navy pt-28 pb-14">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <p className="font-mono text-primary text-xs uppercase tracking-widest mb-4">
              Engineering Enquiries &amp; Project Consultation
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight tracking-tight mb-5">
              Work With Our Engineering Team
            </h1>
            <p className="text-white/70 text-base max-w-2xl mb-7 leading-relaxed">
              Submit your project brief and receive a structured engineering
              response within 48 hours. We work directly with EPC contractors,
              industrial investors and cold chain operators across Europe, MENA
              and beyond.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="inline-flex items-center border border-primary/30 rounded-full px-4 py-1.5 text-xs font-mono text-primary">
                ⚡ 48h Response Commitment
              </span>
              <span className="inline-flex items-center border border-primary/30 rounded-full px-4 py-1.5 text-xs font-mono text-primary">
                🌍 EMEA &amp; Beyond
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          2. MAIN CONTENT — 2-column split
      ───────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* ── LEFT COLUMN: RFQ Form (3 cols) ── */}
          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1 }}
            >
              <p className="font-mono text-xs uppercase tracking-wider text-primary mb-2">
                Project Enquiry Form
              </p>
              <h2 className="text-2xl font-bold text-foreground mb-2">
                Tell Us About Your Project
              </h2>
              <p className="text-sm text-muted-foreground mb-8 leading-relaxed">
                The more detail you share, the more precisely we can respond.
                All enquiries are handled by our engineering team — not a sales
                call centre.
              </p>

              {submitted ? (
                /* ── Success State ── */
                <motion.div
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="rounded-xl border border-border bg-card p-10 text-center"
                >
                  <CheckCircle className="w-12 h-12 text-primary mx-auto mb-5" />
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    Enquiry Received
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed max-w-md mx-auto mb-6">
                    Thank you. Our engineering team will review your project
                    brief and respond within 48 business hours. For urgent
                    matters, contact us directly at{" "}
                    <a
                      href="mailto:info@arcopan.com"
                      className="text-primary hover:underline font-medium"
                    >
                      info@arcopan.com
                    </a>{" "}
                    or call{" "}
                    <a
                      href="tel:+902622555640"
                      className="text-primary hover:underline font-medium"
                    >
                      +90 262 255 56 40
                    </a>
                    .
                  </p>
                  <button
                    onClick={handleReset}
                    className="text-primary underline text-sm font-medium hover:text-primary-dark transition-colors"
                  >
                    Submit another enquiry
                  </button>
                </motion.div>
              ) : (
                /* ── RFQ Form ── */
                <form
                  onSubmit={handleSubmit}
                  className="space-y-5"
                  noValidate={false}
                >
                  {/* Row 1: Company / Full Name */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="company" className={labelClass}>
                        Company / Organisation{" "}
                        <span className="text-primary">*</span>
                      </label>
                      <input
                        id="company"
                        name="company"
                        type="text"
                        required
                        placeholder="Company or project owner name"
                        value={formData.company}
                        onChange={handleChange}
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label htmlFor="fullName" className={labelClass}>
                        Your Full Name <span className="text-primary">*</span>
                      </label>
                      <input
                        id="fullName"
                        name="fullName"
                        type="text"
                        required
                        placeholder="First and last name"
                        value={formData.fullName}
                        onChange={handleChange}
                        className={inputClass}
                      />
                    </div>
                  </div>

                  {/* Row 2: Job Title / Country */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="jobTitle" className={labelClass}>
                        Job Title / Role <span className="text-primary">*</span>
                      </label>
                      <input
                        id="jobTitle"
                        name="jobTitle"
                        type="text"
                        required
                        placeholder="e.g. Project Manager, Technical Director"
                        value={formData.jobTitle}
                        onChange={handleChange}
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label htmlFor="country" className={labelClass}>
                        Country / Region <span className="text-primary">*</span>
                      </label>
                      <input
                        id="country"
                        name="country"
                        type="text"
                        required
                        placeholder="e.g. France, Saudi Arabia, Romania"
                        value={formData.country}
                        onChange={handleChange}
                        className={inputClass}
                      />
                    </div>
                  </div>

                  {/* Row 3: Email / Phone */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className={labelClass}>
                        Email Address <span className="text-primary">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="your@company.com"
                        value={formData.email}
                        onChange={handleChange}
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className={labelClass}>
                        Phone / WhatsApp
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+XX XXX XXX XXXX"
                        value={formData.phone}
                        onChange={handleChange}
                        className={inputClass}
                      />
                    </div>
                  </div>

                  {/* Row 4: Project Type */}
                  <div>
                    <label htmlFor="projectType" className={labelClass}>
                      Project Type <span className="text-primary">*</span>
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      required
                      value={formData.projectType}
                      onChange={handleChange}
                      className={inputClass}
                    >
                      <option value="">Select project type...</option>
                      <option value="cold-room-design-build">
                        Cold Room Design &amp; Build (Turnkey)
                      </option>
                      <option value="insulated-panels">
                        Insulated Panel Supply — Roof / Wall / Cold Room
                      </option>
                      <option value="industrial-doors">
                        Industrial Door Supply &amp; Installation
                      </option>
                      <option value="cooling-systems">
                        Cooling &amp; Refrigeration Systems
                      </option>
                      <option value="racking-storage">
                        Racking &amp; Cold Storage Infrastructure
                      </option>
                      <option value="technical-consultation">
                        Technical Consultation / Feasibility Study
                      </option>
                      <option value="other">Other / Multi-scope</option>
                    </select>
                  </div>

                  {/* Row 5: Project Description */}
                  <div>
                    <label htmlFor="projectDescription" className={labelClass}>
                      Project Description{" "}
                      <span className="text-primary">*</span>
                    </label>
                    <textarea
                      id="projectDescription"
                      name="projectDescription"
                      required
                      rows={5}
                      placeholder="Describe the project: application, location, temperature requirements, approximate floor area, timeline, and any specific technical constraints or standards to meet."
                      value={formData.projectDescription}
                      onChange={handleChange}
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  {/* Row 6: Start Date / Project Scale */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="startDate" className={labelClass}>
                        Estimated Start Date
                      </label>
                      <input
                        id="startDate"
                        name="startDate"
                        type="text"
                        placeholder="e.g. Q3 2025, January 2026"
                        value={formData.startDate}
                        onChange={handleChange}
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label htmlFor="projectScale" className={labelClass}>
                        Estimated Project Scale
                      </label>
                      <input
                        id="projectScale"
                        name="projectScale"
                        type="text"
                        placeholder="e.g. 500 m² cold store, 2,000 m² logistics building"
                        value={formData.projectScale}
                        onChange={handleChange}
                        className={inputClass}
                      />
                    </div>
                  </div>

                  {/* Row 7: How did you hear */}
                  <div>
                    <label htmlFor="hearAboutUs" className={labelClass}>
                      How did you hear about us?
                    </label>
                    <select
                      id="hearAboutUs"
                      name="hearAboutUs"
                      value={formData.hearAboutUs}
                      onChange={handleChange}
                      className={inputClass}
                    >
                      <option value="">Select...</option>
                      <option value="linkedin">LinkedIn</option>
                      <option value="referral">Referral / Word of mouth</option>
                      <option value="google">Google / Web search</option>
                      <option value="exhibition">Trade exhibition</option>
                      <option value="existing-client">Existing client</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  {/* Submit */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground py-3.5 px-8 rounded-md font-semibold text-sm hover:bg-primary-dark transition-colors"
                    >
                      <Send className="w-4 h-4" />
                      Submit Project Enquiry
                    </button>
                    <p className="text-xs text-muted-foreground mt-3 text-center leading-relaxed">
                      Your information is used solely to respond to your
                      enquiry. We do not share data with third parties. Response
                      time: within 48 business hours.
                    </p>
                  </div>
                </form>
              )}
            </motion.div>
          </div>

          {/* ── RIGHT COLUMN: Sticky Contact Details (2 cols) ── */}
          <div className="lg:col-span-2">
            <div className="sticky top-24 space-y-6">
              {/* Card 1 — Direct Contact */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.55, delay: 0.15 }}
                className="rounded-xl border border-border bg-card p-6"
              >
                <p className="font-mono text-xs uppercase tracking-wider text-primary mb-4">
                  Direct Contact
                </p>
                <div className="space-y-4">
                  {/* Email */}
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <div>
                      <p className="text-xs text-muted-foreground mb-0.5">
                        Email
                      </p>
                      <a
                        href="mailto:info@arcopan.com"
                        className="text-sm font-semibold text-foreground hover:text-primary transition-colors"
                      >
                        info@arcopan.com
                      </a>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <div>
                      <p className="text-xs text-muted-foreground mb-0.5">
                        Office Phone
                      </p>
                      <a
                        href="tel:+902622555640"
                        className="text-sm font-semibold text-foreground hover:text-primary transition-colors"
                      >
                        +90 262 255 56 40
                      </a>
                    </div>
                  </div>

                  {/* WhatsApp */}
                  <div className="flex items-start gap-3">
                    <MessageSquare className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <div>
                      <p className="text-xs text-muted-foreground mb-0.5">
                        WhatsApp
                      </p>
                      <a
                        href="https://wa.me/905072617200"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-semibold text-foreground hover:text-primary transition-colors inline-flex items-center flex-wrap gap-x-1.5"
                      >
                        +90 507 261 72 00
                        <span className="text-[10px] bg-primary/10 text-primary px-2 py-0.5 rounded-full font-mono">
                          Preferred for quick queries
                        </span>
                      </a>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <div>
                      <p className="text-xs text-muted-foreground mb-0.5">
                        Business Hours
                      </p>
                      <p className="text-sm font-semibold text-foreground">
                        Monday – Friday
                      </p>
                      <p className="text-sm text-foreground">
                        09:00 – 18:00 (UTC+3)
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Card 2 — Office Location */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.55, delay: 0.22 }}
                className="rounded-xl border border-border bg-card p-6"
              >
                <p className="font-mono text-xs uppercase tracking-wider text-primary mb-4">
                  Our Office
                </p>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      ARCOPAN / METKON ÇELİK
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Osman Yılmaz Mah. 641. Sk.
                    </p>
                    <p className="text-sm text-muted-foreground">
                      No:10 D.1, 41400 Gebze
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Kocaeli, Türkiye
                    </p>
                  </div>
                </div>
                <a
                  href="https://maps.google.com/?q=Osman+Yilmaz+Mahallesi+641+Sk+No+10+Gebze+Kocaeli+Turkey"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                >
                  View on Google Maps
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </motion.div>

              {/* Card 3 — Connect */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.55, delay: 0.29 }}
                className="rounded-xl border border-border bg-card p-6"
              >
                <p className="font-mono text-xs uppercase tracking-wider text-primary mb-4">
                  Follow &amp; Connect
                </p>
                <div className="space-y-0.5">
                  <a
                    href="https://www.linkedin.com/in/arcopancooling/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors py-1.5"
                  >
                    <Globe className="w-4 h-4 shrink-0" />
                    LinkedIn — ARCOPAN Cooling
                  </a>
                  <a
                    href="https://www.arcopan.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors py-1.5"
                  >
                    <Globe className="w-4 h-4 shrink-0" />
                    arcopan.com
                  </a>
                  <a
                    href="https://instagram.com/arcopancooling/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors py-1.5"
                  >
                    <Globe className="w-4 h-4 shrink-0" />
                    Instagram — @arcopancooling
                  </a>
                  <a
                    href="https://facebook.com/ArcopanCooling"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors py-1.5"
                  >
                    <Globe className="w-4 h-4 shrink-0" />
                    Facebook — ArcopanCooling
                  </a>
                </div>
              </motion.div>

              {/* Card 4 — Certifications */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.55, delay: 0.36 }}
                className="rounded-xl border border-border bg-card p-6"
              >
                <p className="font-mono text-xs uppercase tracking-wider text-primary mb-4">
                  Quality &amp; Compliance
                </p>
                <div className="flex flex-wrap gap-2">
                  {certifications.map((cert) => (
                    <span
                      key={cert}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-border bg-background text-xs font-mono font-medium text-foreground"
                    >
                      <ShieldCheck className="w-3 h-3 text-primary" />
                      {cert}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          3. WHAT HAPPENS NEXT — 3-step process
      ───────────────────────────────────────────── */}
      <section className="bg-card border-t border-border py-16">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="font-mono text-xs uppercase tracking-wider text-primary mb-3">
              Process
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
              What Happens After You Submit
            </h2>
            <p className="text-sm text-muted-foreground max-w-2xl leading-relaxed">
              Every enquiry is reviewed by an engineer, not a sales team. We
              commit to a structured response, not a generic brochure.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="relative"
              >
                <span className="font-mono text-4xl font-bold text-primary/20 select-none">
                  {step.number}
                </span>
                <h3 className="text-base font-bold text-foreground mt-3 mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          4. STATS STRIP
      ───────────────────────────────────────────── */}
      <section className="bg-navy py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-primary-foreground/10">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="text-center px-4"
              >
                <span className="block font-mono text-3xl font-bold text-primary">
                  {stat.value}
                </span>
                <span className="text-xs text-primary-foreground/50 uppercase tracking-wider mt-1 block">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;
