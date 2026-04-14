import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Thermometer, Clock, ShieldCheck, Headphones } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import B2bProductDetailLayout from "@/components/B2bProductDetailLayout";
import NotFound from "@/pages/NotFound";
import { panelProductDetails, resolvePanelSlug } from "@/content/b2bProductRegistry";
import productPanels from "@/assets/product-panels.jpg";
import industryLogistics from "@/assets/industry-logistics.jpg";
import productCooling from "@/assets/product-cooling.jpg";
import solBlast from "@/assets/solution-blast.jpg";

const subcategories = [
  {
    title: "Roof Sandwich Panels",
    slug: "roof-panels",
    description: "Trapezoidal and flat-profile roof panels with PUR/PIR core insulation for industrial and commercial roofing.",
    benefit: "Superior thermal performance with U-values as low as 0.18 W/m²K",
    image: productPanels,
    imageAlt: "Roof sandwich panels on industrial building",
  },
  {
    title: "Wall & Facade Panels",
    slug: "wall-facade-panels",
    description: "Micro-ribbed and flat wall panels for building envelopes, cladding systems and architectural facades.",
    benefit: "Clean architectural lines with integrated weather sealing",
    image: industryLogistics,
    imageAlt: "Facade with insulated wall panels",
  },
  {
    title: "Cold Room & Hygienic Panels",
    slug: "coldroom-hygienic-panels",
    description: "Food-grade and pharma-grade insulated panels for cold rooms, clean rooms and controlled environments.",
    benefit: "HACCP & GDP compliant surfaces with cam-lock assembly",
    image: productCooling,
    imageAlt: "Hygienic cold room panels",
  },
  {
    title: "Fire & Performance Panels",
    slug: "fire-performance-panels",
    description: "Mineral wool and fire-rated sandwich panels for applications requiring enhanced fire resistance and acoustic insulation.",
    benefit: "Up to EI 120 fire rating with non-combustible core",
    image: solBlast,
    imageAlt: "Industrial building fire performance envelope",
  },
];

const whyFeatures = [
  { icon: Thermometer, title: "Thermal Efficiency", desc: "PUR/PIR cores delivering industry-leading U-values across all panel types." },
  { icon: Clock, title: "Fast Installation", desc: "Pre-engineered panel systems reducing on-site build time by up to 60%." },
  { icon: ShieldCheck, title: "Hygienic Suitability", desc: "Food-grade and pharma-grade finishes meeting HACCP and GDP requirements." },
  { icon: Headphones, title: "Engineering Support", desc: "Dedicated project engineering from specification through commissioning." },
];

const applications = [
  "Food Processing",
  "Cold Storage",
  "Logistics & Warehousing",
  "Pharma & Medical",
  "Industrial Buildings",
];

const InsulatedPanelsPage = () => {
  const { slug } = useParams();

  if (slug) {
    const canonical = resolvePanelSlug(slug);
    const detail = canonical ? panelProductDetails[canonical] : undefined;
    if (!detail) return <NotFound />;
    return (
      <B2bProductDetailLayout
        detail={detail}
        secondaryCrumb={{ label: "Insulated panels", to: "/products/panels" }}
      />
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-24 pb-16 md:pb-20 bg-navy">
        <div className="max-w-7xl mx-auto px-6 pt-12 md:pt-16">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-sm text-primary-foreground/60 hover:text-primary transition-colors mb-6"
          >
            ← All Products
          </Link>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="font-mono text-xs tracking-widest uppercase text-primary mb-3 block">
              Product Category
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold text-primary-foreground tracking-tight mb-4">
              Insulated Sandwich Panels
            </h1>
            <p className="text-base md:text-lg text-primary-foreground/70 max-w-2xl mb-3">
              High-performance insulated panel systems for roof, wall, facade, cold room and hygienic applications.
            </p>
            <p className="text-sm text-primary-foreground/50 max-w-2xl mb-8">
              Engineered for thermal efficiency, structural integrity and rapid installation — backed by full technical documentation and project-level support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 rounded-md font-semibold text-sm hover:bg-primary-dark transition-colors"
              >
                Request a Quote
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 border border-primary-foreground/20 text-primary-foreground/70 px-7 py-3.5 rounded-md font-medium text-sm hover:border-primary-foreground/40 transition-colors"
              >
                Talk to Engineering
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <span className="font-mono text-xs tracking-widest uppercase text-primary mb-3 block">
              Overview
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              Panel Systems for Every Application
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              ARCOPAN supplies insulated sandwich panel solutions engineered for industrial buildings, cold storage facilities, food processing plants, logistics centres and temperature-controlled environments. Our panel range covers PUR, PIR and mineral wool cores with steel, aluminium and food-grade facings — specified to meet thermal, structural, fire and hygiene requirements across diverse sectors and climates.
            </p>
          </div>
        </div>
      </section>

      {/* Subcategory Cards */}
      <section className="py-16 md:py-20 bg-card border-t border-border">
        <div className="max-w-7xl mx-auto px-6">
          <span className="font-mono text-xs tracking-widest uppercase text-primary mb-3 block">
            Panel Categories
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-10">
            Explore Our Panel Range
          </h2>
          <div className="grid sm:grid-cols-2 gap-5">
            {subcategories.map((cat) => (
              <Link
                key={cat.slug}
                to={`/products/panels/${cat.slug}`}
                className="group rounded-lg border border-border bg-background overflow-hidden hover:border-primary/30 transition-colors flex flex-col sm:flex-row"
              >
                <div className="sm:w-[42%] shrink-0 aspect-[4/3] sm:aspect-auto sm:min-h-[200px]">
                  <img
                    src={cat.image}
                    alt={cat.imageAlt}
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                    width={640}
                    height={480}
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {cat.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3 flex-1">
                    {cat.description}
                  </p>
                  <p className="text-xs text-primary font-mono mb-4">{cat.benefit}</p>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary">
                    Explore <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why ARCOPAN */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <span className="font-mono text-xs tracking-widest uppercase text-primary mb-3 block">
            Why ARCOPAN
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-10">
            Engineered Panel Solutions You Can Trust
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyFeatures.map((f, i) => (
              <div key={i}>
                <f.icon className="w-8 h-8 text-primary mb-4" strokeWidth={1.5} />
                <h3 className="text-base font-bold text-foreground mb-1.5">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-16 md:py-20 bg-card border-t border-border">
        <div className="max-w-7xl mx-auto px-6">
          <span className="font-mono text-xs tracking-widest uppercase text-primary mb-3 block">
            Applications
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
            Industries We Serve
          </h2>
          <div className="flex flex-wrap gap-3">
            {applications.map((app) => (
              <span
                key={app}
                className="px-5 py-2.5 rounded-md border border-border bg-background text-sm font-medium text-foreground"
              >
                {app}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-navy">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Specifying Panels for Your Next Project?
          </h2>
          <p className="text-primary-foreground/50 text-base mb-8 max-w-xl mx-auto">
            Whether you're an EPC contractor, architect or facility owner — submit your project requirements and our engineering team will respond within 48 hours.
          </p>
          <a
            href="/#contact"
            className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 rounded-md font-semibold text-sm hover:bg-primary-dark transition-colors"
          >
            Submit Project Requirements
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default InsulatedPanelsPage;
