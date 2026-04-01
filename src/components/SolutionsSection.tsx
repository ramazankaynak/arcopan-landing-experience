import { motion } from "framer-motion";
import { Thermometer, Snowflake, Zap, ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";

const SolutionsSection = () => {
  const { t } = useTranslation();

  const solutions = [
    { icon: Thermometer, title: t("solutions.chilled"), description: t("solutions.chilled_desc"), href: "#" },
    { icon: Snowflake, title: t("solutions.frozen"), description: t("solutions.frozen_desc"), href: "#" },
    { icon: Zap, title: t("solutions.blast"), description: t("solutions.blast_desc"), href: "#" },
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
              className="group bg-primary/5 border border-primary/10 rounded-lg p-8 hover:bg-primary hover:border-primary transition-all duration-300"
            >
              <sol.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground mb-5 transition-colors" />
              <h3 className="text-lg font-bold text-foreground group-hover:text-primary-foreground mb-2 transition-colors">
                {sol.title}
              </h3>
              <p className="text-sm text-muted-foreground group-hover:text-primary-foreground/70 leading-relaxed mb-4 transition-colors">
                {sol.description}
              </p>
              <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:text-primary-foreground transition-colors">
                {t("solutions.explore")} <ArrowRight className="w-4 h-4" />
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
