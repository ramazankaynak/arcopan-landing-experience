import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, FileText } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { B2BProductDetail } from "@/content/b2bProductTypes";

type Props = {
  detail: B2BProductDetail;
  /** First link after Products — e.g. { label: "Insulated panels", to: "/products/panels" } */
  secondaryCrumb?: { label: string; to?: string };
};

const B2bProductDetailLayout = ({ detail, secondaryCrumb }: Props) => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero with image */}
      <section className="relative min-h-[320px] md:min-h-[420px] bg-navy">
        <img
          src={detail.heroImage}
          alt={detail.heroAlt}
          className="absolute inset-0 h-full w-full object-cover opacity-50"
          width={1920}
          height={800}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/85 to-navy/40" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-14 md:pt-32 md:pb-20">
          <nav className="text-xs font-mono text-primary-foreground/60 mb-6 flex flex-wrap gap-x-2 gap-y-1 items-center">
            <Link to="/products" className="hover:text-primary transition-colors">
              Products
            </Link>
            {secondaryCrumb && (
              <>
                <span aria-hidden>/</span>
                {secondaryCrumb.to ? (
                  <Link to={secondaryCrumb.to} className="hover:text-primary transition-colors">
                    {secondaryCrumb.label}
                  </Link>
                ) : (
                  <span className="text-primary-foreground/70">{secondaryCrumb.label}</span>
                )}
              </>
            )}
            <span aria-hidden>/</span>
            <span className="text-primary-foreground/80">{detail.title}</span>
          </nav>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
            <span className="font-mono text-xs tracking-widest uppercase text-primary mb-3 block">
              {detail.eyebrow}
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold text-primary-foreground tracking-tight mb-4 max-w-4xl">
              {detail.title}
            </h1>
            <p className="text-base md:text-lg text-primary-foreground/80 max-w-3xl leading-relaxed">
              {detail.lead}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 rounded-md font-semibold text-sm hover:bg-primary-dark transition-colors"
              >
                Request quotation
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="mailto:info@arcopan.com?subject=ARCOPAN%20technical%20enquiry"
                className="inline-flex items-center justify-center gap-2 border border-primary-foreground/25 text-primary-foreground px-7 py-3.5 rounded-md font-medium text-sm hover:border-primary-foreground/45 transition-colors"
              >
                <FileText className="w-4 h-4" />
                Email engineering
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-14 md:py-18 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-5">
            {detail.body.map((p, i) => (
              <p key={i} className="text-muted-foreground leading-relaxed">
                {p}
              </p>
            ))}
          </div>
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-primary mb-4">
              Key benefits
            </h2>
            <ul className="space-y-3">
              {detail.keyBenefits.map((b, i) => (
                <li key={i} className="flex gap-3 text-sm text-foreground">
                  <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" strokeWidth={1.5} />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {detail.technicalSections && detail.technicalSections.length > 0 && (
        <section className="py-14 md:py-18 bg-muted/25 border-y border-border">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-primary mb-8">
              System scope
            </h2>
            <div className="grid gap-10 md:grid-cols-2">
              {detail.technicalSections.map((block) => (
                <div key={block.heading} className="rounded-lg border border-border bg-background p-6">
                  <h3 className="text-base font-bold text-foreground mb-4">{block.heading}</h3>
                  <div className="space-y-3">
                    {block.paragraphs.map((p, i) => (
                      <p key={i} className="text-sm text-muted-foreground leading-relaxed">
                        {p}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-14 md:py-18 bg-card">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-primary mb-6">
            Technical parameters
          </h2>
          <div className="overflow-x-auto rounded-lg border border-border bg-background">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-muted/40">
                  <th className="text-left py-3 px-4 font-semibold text-foreground">Parameter</th>
                  <th className="text-left py-3 px-4 font-semibold text-foreground">Typical scope</th>
                </tr>
              </thead>
              <tbody>
                {detail.specifications.map((row) => (
                  <tr key={row.parameter} className="border-b border-border last:border-0">
                    <td className="py-3 px-4 text-muted-foreground align-top w-[40%]">{row.parameter}</td>
                    <td className="py-3 px-4 text-foreground align-top">{row.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-18 border-t border-border">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-primary mb-6">
            Applications
          </h2>
          <div className="flex flex-wrap gap-2">
            {detail.applications.map((a) => (
              <span
                key={a}
                className="px-4 py-2 rounded-md border border-border bg-background text-sm font-medium text-foreground"
              >
                {a}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 md:py-18 bg-navy/5 border-t border-border">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-primary mb-4">
            EU market documentation
          </h2>
          <ul className="space-y-3 max-w-4xl">
            {detail.complianceNotes.map((n, i) => (
              <li key={i} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
                <span className="text-primary font-mono shrink-0">{String(i + 1).padStart(2, "0")}</span>
                {n}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {detail.relatedInternal.length > 0 && (
        <section className="py-14 md:py-18 border-t border-border">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-primary mb-6">
              Related products
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {detail.relatedInternal.map((r) => (
                <Link
                  key={r.to}
                  to={r.to}
                  className="group p-5 rounded-lg border border-border bg-card hover:border-primary/40 transition-colors"
                >
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-foreground group-hover:text-primary">
                    {r.label}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-16 bg-navy">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-3">
            EPC / owner technical package
          </h2>
          <p className="text-primary-foreground/60 text-sm mb-8">
            Share your performance brief, location and programme — we will respond with a structured proposal and documentation roadmap.
          </p>
          <Link
            to="/products/support/request-consultation"
            className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 rounded-md font-semibold text-sm hover:bg-primary-dark transition-colors"
          >
            Book consultation
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default B2bProductDetailLayout;
