import { motion } from "framer-motion";
import { UtensilsCrossed, Beef, Milk, Pill, Truck, Store } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import foodImg from "@/assets/industry-food.jpg";
import meatImg from "@/assets/industry-meat.jpg";
import dairyImg from "@/assets/industry-dairy.jpg";
import pharmaImg from "@/assets/industry-pharma.jpg";
import logisticsImg from "@/assets/industry-logistics.jpg";
import retailImg from "@/assets/industry-retail.jpg";

const IndustriesSection = () => {
  const { t } = useTranslation();

  const industries = [
    { icon: UtensilsCrossed, name: t("industries.food"), slug: "food", img: foodImg, desc: t("industry_page.food.short") },
    { icon: Beef, name: t("industries.meat"), slug: "meat", img: meatImg, desc: t("industry_page.meat.short") },
    { icon: Milk, name: t("industries.dairy"), slug: "dairy", img: dairyImg, desc: t("industry_page.dairy.short") },
    { icon: Pill, name: t("industries.pharma"), slug: "pharma", img: pharmaImg, desc: t("industry_page.pharma.short") },
    { icon: Truck, name: t("industries.logistics"), slug: "logistics", img: logisticsImg, desc: t("industry_page.logistics.short") },
    { icon: Store, name: t("industries.retail"), slug: "retail", img: retailImg, desc: t("industry_page.retail.short") },
  ];

  return (
    <section id="industries" className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="font-mono text-xs tracking-widest uppercase text-primary mb-3 block">
            {t("industries.eyebrow")}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            {t("industries.title")}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {industries.map((ind, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
            >
              <Link
                to={`/industries/${ind.slug}`}
                className="group block overflow-hidden rounded-lg border border-border hover:border-primary/40 transition-all bg-background"
              >
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={ind.img}
                    alt={ind.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    width={640}
                    height={360}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
                  <div className="absolute bottom-3 left-3 flex items-center gap-2">
                    <ind.icon className="w-5 h-5 text-primary-foreground" />
                    <span className="text-sm font-bold text-primary-foreground">{ind.name}</span>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">{ind.desc}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
