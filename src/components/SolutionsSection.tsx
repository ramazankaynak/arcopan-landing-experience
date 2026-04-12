import { motion } from "framer-motion";
import { Thermometer, Snowflake, Zap, ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";

import solChilled from "@/assets/solution-chilled.jpg";
import solFrozen from "@/assets/solution-frozen.jpg";
import solBlast from "@/assets/solution-blast.jpg";

const SolutionsSection = () => {
  const { t } = useTranslation();

  const solutions = [
    { icon: Thermometer, title: t("solutions.chilled"), description: t("solutions.chilled_desc"), href: "#", image: solChilled },
    { icon: Snowflake, title: t("solutions.frozen"), description: t("solutions.frozen_desc"), href: "#", image: solFrozen },
    { icon: Zap, title: t("solutions.blast"), description: t("solutions.blast_desc"), href: "#", image: solBlast },
  ];

  return (
    <section id="solutions" className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <span className="font-mono text-xs tracking-widest uppercase text-primary mb-3 block">
            {t("solutions.eyebrow")}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground max-w-lg">
            {t("solutions.title")}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {solutions.map((sol, i) => (
            <motion.a
              key={i}
              href={sol.href}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative rounded-lg overflow-hidden"
            >
              {/* Background image */}
              <div className="relative aspect-[4/5]">
                <img
                  src={sol.image}
                  alt={sol.title}
                  loading="lazy"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/60 to-transparent" />
              </div>

              {/* Content overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <sol.icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-lg font-bold text-primary-foreground mb-2">
                  {sol.title}
                </h3>
                <p className="text-sm text-primary-foreground/70 leading-relaxed mb-4 line-clamp-3">
                  {sol.description}
                </p>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-all">
                  {t("solutions.explore")} <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
