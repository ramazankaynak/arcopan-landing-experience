import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";

const CTABanner = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-navy">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            {t("cta.title")}
          </h2>
          <p className="text-primary-foreground/50 text-base mb-8 max-w-xl mx-auto">
            {t("cta.subtitle")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 rounded-md font-semibold text-sm hover:bg-primary-dark transition-colors"
            >
              {t("cta.primary")}
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 border border-primary-foreground/20 text-primary-foreground/70 px-7 py-3.5 rounded-md font-medium text-sm hover:border-primary-foreground/40 transition-colors"
            >
              {t("cta.secondary")}
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTABanner;
