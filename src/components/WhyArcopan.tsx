import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const WhyArcopan = () => {
  const { t } = useTranslation();

  const values = [
    { number: "01", title: t("why.v1_title"), description: t("why.v1_desc") },
    { number: "02", title: t("why.v2_title"), description: t("why.v2_desc") },
    { number: "03", title: t("why.v3_title"), description: t("why.v3_desc") },
    { number: "04", title: t("why.v4_title"), description: t("why.v4_desc") },
    { number: "05", title: t("why.v5_title"), description: t("why.v5_desc") },
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <span className="font-mono text-xs tracking-widest uppercase text-primary mb-3 block">
            {t("why.eyebrow")}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground max-w-lg">
            {t("why.title")}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-x-16 gap-y-10">
          {values.map((v, i) => (
            <motion.div
              key={v.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex gap-5"
            >
              <span className="font-mono text-3xl font-bold text-primary/20 leading-none shrink-0">
                {v.number}
              </span>
              <div>
                <h3 className="text-base font-bold text-foreground mb-1.5">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.description}</p>
              </div>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex items-end"
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-2 border-2 border-primary text-primary px-6 py-3 rounded-md text-sm font-semibold hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              {t("why.brochure")}
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyArcopan;
