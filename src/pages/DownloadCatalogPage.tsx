import { useState } from "react";
import { motion } from "framer-motion";
import {
  Download,
  FileText,
  Mail,
  ArrowRight,
  CheckCircle,
  Shield,
  Globe,
  BookOpen,
  Package,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import catalogCover from "@/assets/arcopan-web/ARCOPAN-catalog-k.png";

const DownloadCatalogPage = () => {
  const [requested, setRequested] = useState(false);
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");

  const inputClass =
    "border border-border rounded-md px-3 py-2.5 text-sm w-full focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary bg-background text-foreground placeholder:text-muted-foreground transition-colors";

  const catalogContents = [
    "Insulated sandwich panels — PUR/PIR specifications",
    "Cold room & hygienic panel systems",
    "Cold room doors, accessories & turnkey solutions",
    "Industrial cooling & refrigeration systems",
    "Condensing units & evaporator specifications",
    "Industrial door systems — sectional, sliding, rapid",
    "Racking, dock levellers & storage systems",
    "Profiles, fixings & installation accessories",
  ];

  const certifications = ["ISO 9001", "EN 13165", "CE Marking", "HACCP", "GDP"];

  const productCategories = [
    { name: "Insulated Panels", href: "/products/panels" },
    { name: "Cold Room Systems", href: "/products/cold-room/turnkey" },
    {
      name: "Cooling & Refrigeration",
      href: "/products/cooling/industrial-cooling-systems",
    },
    { name: "Industrial Doors", href: "/products/industrial-doors/sectional" },
    { name: "Racking & Storage", href: "/products/racking/pallet-racking" },
    {
      name: "Accessories & Fixings",
      href: "/products/accessories/fasteners",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />

      {/* ── Hero Strip ── */}
      <section className="bg-navy pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            <p className="font-mono text-xs uppercase tracking-widest text-primary mb-4">
              Product Documentation
            </p>
            <h1 className="text-white font-extrabold text-4xl md:text-5xl leading-tight mb-4">
              ARCOPAN Product Catalogue
            </h1>
            <p className="text-white/70 max-w-2xl text-base md:text-lg leading-relaxed mb-8">
              Comprehensive technical reference for insulated panel systems,
              cold room solutions, industrial doors, cooling systems and storage
              infrastructure — formatted for EPC tender packages and engineering
              review.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-sm font-medium">
                📄 Full Technical Specifications
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-sm font-medium">
                🏭 EPC-Ready Documentation
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Main Content ── */}
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-5 gap-12">
          {/* ── LEFT COLUMN ── */}
          <div className="lg:col-span-3">
            {/* Catalog preview card */}
            <div className="rounded-xl border border-border bg-card overflow-hidden">
              <img
                src={catalogCover}
                alt="ARCOPAN Product Catalogue cover"
                className="w-full object-cover"
              />
              <div className="p-6">
                <h2 className="text-xl font-bold text-foreground">
                  ARCOPAN Industrial Product Catalogue
                </h2>
                <p className="text-sm text-muted-foreground mt-1 mb-6">
                  Cold chain engineering systems — insulated panels, cold rooms,
                  cooling, doors, racking &amp; accessories
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-border bg-background text-xs font-medium text-foreground">
                    <BookOpen className="w-3.5 h-3.5 text-primary" />
                    Full product range
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-border bg-background text-xs font-medium text-foreground">
                    <FileText className="w-3.5 h-3.5 text-primary" />
                    Technical specifications
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-border bg-background text-xs font-medium text-foreground">
                    <Globe className="w-3.5 h-3.5 text-primary" />
                    English / Multi-language
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-border bg-background text-xs font-medium text-foreground">
                    <Package className="w-3.5 h-3.5 text-primary" />
                    EPC &amp; B2B Edition
                  </span>
                </div>
              </div>
            </div>

            {/* Download section */}
            <div className="mt-8">
              {!requested ? (
                <>
                  <p className="text-sm font-semibold text-foreground mb-4">
                    Choose your download method:
                  </p>
                  <div className="space-y-3">
                    {/* Option A — Direct Download */}
                    <a
                      href="https://arcopan.com/wp-content/uploads/2024/catalog-arcopan.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between w-full bg-primary text-primary-foreground px-6 py-4 rounded-lg font-semibold text-sm hover:bg-primary-dark transition-colors group"
                    >
                      <span className="flex items-center">
                        <Download className="w-5 h-5 mr-3" />
                        Download PDF Catalogue
                      </span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>

                    {/* Option B — Email delivery */}
                    <div className="border border-border rounded-lg p-5">
                      <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-3">
                        Or receive it by email
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <input
                          type="text"
                          placeholder="Company name"
                          value={company}
                          onChange={(e) => setCompany(e.target.value)}
                          className={inputClass}
                        />
                        <input
                          type="email"
                          placeholder="Work email address"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className={inputClass}
                        />
                      </div>
                      <button
                        onClick={() => setRequested(true)}
                        className="w-full mt-3 bg-primary/10 text-primary border border-primary/20 hover:bg-primary hover:text-white transition rounded-md py-2.5 text-sm font-semibold"
                      >
                        Send to My Email
                      </button>
                      <p className="text-xs text-muted-foreground mt-2">
                        We send one email with the catalogue attachment. No
                        newsletters or follow-up unless you request them.
                      </p>
                    </div>
                  </div>
                </>
              ) : (
                <div className="bg-primary/5 border border-primary/20 rounded-xl p-8 text-center">
                  <CheckCircle className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-foreground">
                    Catalogue Sent
                  </h3>
                  <p className="text-sm text-muted-foreground mt-2 max-w-sm mx-auto">
                    We've sent the ARCOPAN product catalogue to your email. If
                    you need a specific product datasheet or technical submittal,
                    contact our engineering team directly.
                  </p>
                  <a
                    href="/contact"
                    className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary"
                  >
                    Request Technical Consultation →
                  </a>
                </div>
              )}
            </div>
          </div>

          {/* ── RIGHT COLUMN ── */}
          <div className="lg:col-span-2">
            <div className="sticky top-24 space-y-5">
              {/* Card 1 — What's Inside */}
              <div className="rounded-xl border border-border bg-card p-6">
                <p className="font-mono text-xs uppercase tracking-wider text-primary mb-4">
                  Catalogue Contents
                </p>
                <ul className="space-y-2.5">
                  {catalogContents.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-sm text-foreground"
                    >
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card 2 — Need a Specific Datasheet? */}
              <div className="rounded-xl border border-border bg-card p-6">
                <p className="font-mono text-xs uppercase tracking-wider text-primary mb-3">
                  Product-Specific Documentation
                </p>
                <p className="text-sm text-muted-foreground mb-5">
                  For individual product datasheets, CE declarations, thermal
                  performance certificates or EPC submittal packs, submit a
                  technical documentation request.
                </p>
                <a
                  href="/contact"
                  className="flex items-center justify-between w-full bg-background border border-border rounded-lg px-5 py-3.5 text-sm font-semibold text-foreground hover:border-primary hover:text-primary transition-colors group"
                >
                  <span className="flex items-center">
                    <FileText className="w-4 h-4 text-primary mr-2" />
                    Request Technical Datasheet
                  </span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="mailto:info@arcopan.com"
                  className="mt-3 flex items-center justify-between w-full bg-background border border-border rounded-lg px-5 py-3.5 text-sm font-semibold text-foreground hover:border-primary hover:text-primary transition-colors group"
                >
                  <span className="flex items-center">
                    <Mail className="w-4 h-4 text-primary mr-2" />
                    Email Engineering Team
                  </span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

              {/* Card 3 — Certifications */}
              <div className="rounded-xl border border-border bg-card p-6">
                <p className="font-mono text-xs uppercase tracking-wider text-primary mb-4">
                  Quality &amp; Compliance
                </p>
                <div className="flex flex-wrap gap-2">
                  {certifications.map((cert) => (
                    <span
                      key={cert}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-border bg-background text-xs font-mono font-medium text-foreground"
                    >
                      <Shield className="w-3 h-3 text-primary" />
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* ── Related Product Lines ── */}
      <section className="bg-card border-t border-border py-16">
        <div className="max-w-7xl mx-auto px-6">
          <p className="font-mono text-xs uppercase tracking-wider text-primary mb-3">
            Explore Products
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-10">
            Browse by Product Category
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {productCategories.map((cat) => (
              <a
                key={cat.name}
                href={cat.href}
                className="group flex items-center justify-between p-5 rounded-xl border border-border bg-background hover:border-primary/40 hover:bg-primary/5 transition-all"
              >
                <span className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                  {cat.name}
                </span>
                <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all" />
              </a>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DownloadCatalogPage;
