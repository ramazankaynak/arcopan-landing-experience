import { motion } from "framer-motion";
import { UtensilsCrossed, Beef, Milk, Pill, Truck, Store } from "lucide-react";
import { useTranslation } from "react-i18next";

const IndustriesSection = () => {
  const { t } = useTranslation();

  const industries = [
    { icon: UtensilsCrossed, name: t("industries.food"), href: "#" },
    { icon: Beef, name: t("industries.meat"), href: "#" },
    { icon: Milk, name: t("industries.dairy"), href: "#" },
    { icon: Pill, name: t("industries.pharma"), href: "#" },
    { icon: Truck, name: t("industries.logistics"), href: "#" },
    { icon: Store, name: t("industries.retail"), href: "#" },
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

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {industries.map((ind, i) => (
            <motion.a
              key={i}
              href={ind.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="group flex flex-col items-center gap-3 p-6 rounded-lg border border-border hover:border-primary hover:bg-primary/5 transition-all"
            >
              <ind.icon className="w-7 h-7 text-muted-foreground group-hover:text-primary transition-colors" />
              <span className="text-xs font-semibold text-foreground text-center leading-tight">{ind.name}</span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
