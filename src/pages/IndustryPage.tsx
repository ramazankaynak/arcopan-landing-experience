import { useParams, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import foodImg from "@/assets/industry-food.jpg";
import meatImg from "@/assets/industry-meat.jpg";
import dairyImg from "@/assets/industry-dairy.jpg";
import pharmaImg from "@/assets/industry-pharma.jpg";
import logisticsImg from "@/assets/industry-logistics.jpg";
import retailImg from "@/assets/industry-retail.jpg";

const industryImages: Record<string, string> = {
  food: foodImg,
  meat: meatImg,
  dairy: dairyImg,
  pharma: pharmaImg,
  logistics: logisticsImg,
  retail: retailImg,
};

const industryKeys = ["food", "meat", "dairy", "pharma", "logistics", "retail"];

const IndustryPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const { t } = useTranslation();

  const key = slug || "food";
  const image = industryImages[key];

  const features = [
    t(`industry_page.${key}.feature1`),
    t(`industry_page.${key}.feature2`),
    t(`industry_page.${key}.feature3`),
    t(`industry_page.${key}.feature4`),
  ];

  const products = [
    t(`industry_page.${key}.product1`),
    t(`industry_page.${key}.product2`),
    t(`industry_page.${key}.product3`),
  ];

  const currentIndex = industryKeys.indexOf(key);
  const otherIndustries = industryKeys.filter((k) => k !== key);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-24 pb-0">
        <div className="relative h-[50vh] min-h-[400px] overflow-hidden">
          <img
            src={image}
            alt={t(`industries.${key}`)}
            className="w-full h-full object-cover"
            width={1280}
            height={720}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/50 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 max-w-7xl mx-auto">
            <Link
              to="/#industries"
              className="inline-flex items-center gap-2 text-sm text-primary-foreground/60 hover:text-primary transition-colors mb-4"
            >
              <ArrowLeft className="w-4 h-4" />
              {t("industry_page.back")}
            </Link>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl md:text-5xl font-extrabold text-primary-foreground tracking-tight"
            >
              {t(`industries.${key}`)}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-base md:text-lg text-primary-foreground/70 mt-3 max-w-2xl"
            >
              {t(`industry_page.${key}.subtitle`)}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Description */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="font-mono text-xs tracking-widest uppercase text-primary mb-3 block">
                {t("industry_page.overview")}
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                {t(`industry_page.${key}.title`)}
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                {t(`industry_page.${key}.description`)}
              </p>

              <div className="space-y-3">
                {features.map((f, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">{f}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Products */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="font-mono text-xs tracking-widest uppercase text-primary mb-3 block">
                {t("industry_page.products_label")}
              </span>
              <h3 className="text-xl font-bold text-foreground mb-6">
                {t("industry_page.products_title")}
              </h3>

              <div className="space-y-4">
                {products.map((p, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-lg border border-border bg-card hover:border-primary/30 transition-colors"
                  >
                    <span className="text-sm font-semibold text-foreground">{p}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <span className="font-mono text-xs tracking-widest uppercase text-primary mb-3 block">
                  {t("industry_page.temp_label")}
                </span>
                <p className="text-sm text-muted-foreground font-mono">
                  {t(`industry_page.${key}.temp_range`)}
                </p>
              </div>

              <a
                href="#contact"
                className="mt-8 inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-md font-semibold text-sm hover:bg-primary-dark transition-colors"
              >
                {t("industry_page.cta")}
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Other Industries */}
      <section className="py-16 bg-card border-t border-border">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-xl font-bold text-foreground mb-8">
            {t("industry_page.other_industries")}
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {otherIndustries.map((k) => (
              <Link
                key={k}
                to={`/industries/${k}`}
                className="group relative overflow-hidden rounded-lg aspect-[4/3]"
              >
                <img
                  src={industryImages[k]}
                  alt={t(`industries.${k}`)}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                  width={400}
                  height={300}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent" />
                <span className="absolute bottom-3 left-3 text-xs font-semibold text-primary-foreground">
                  {t(`industries.${k}`)}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default IndustryPage;
