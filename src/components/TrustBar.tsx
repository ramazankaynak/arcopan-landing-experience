import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import { useTranslation } from "react-i18next";

const certifications = [
  { label: "ISO 9001", title: "ISO 9001 — Quality Management System" },
  {
    label: "EN 13165",
    title: "EN 13165 — Factory-made rigid polyurethane foam (PUR)",
  },
  {
    label: "CE",
    title: "CE Marking — EU Construction Products Regulation compliance",
  },
  {
    label: "HACCP",
    title: "HACCP — Hazard Analysis & Critical Control Points food safety",
  },
  {
    label: "GDP",
    title: "GDP — Good Distribution Practice pharmaceutical cold chain",
  },
];

const stats = [
  "500+ Projects Completed",
  "25+ Countries Served",
  "30+ Years Engineering Experience",
  "48h Quote Response",
];

const TrustBar = () => {
  const { t } = useTranslation();

  return (
    <section className="py-10 bg-card border-y border-border">
      <div className="max-w-7xl mx-auto px-6">
        {/* Eyebrow */}
        <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground block text-center mb-6">
          Certified &amp; Compliant — EU Market Ready
        </span>

        {/* Certifications row */}
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14">
          <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
            {t("trust.label")}
          </span>
          <div className="h-6 w-px bg-border hidden md:block" />
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.label}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex items-center gap-2 cursor-default"
              title={cert.title}
            >
              <ShieldCheck className="w-5 h-5 text-primary flex-shrink-0" />
              <span className="font-mono text-sm font-semibold text-foreground">
                {cert.label}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Stats strip */}
        <div className="flex flex-wrap items-center justify-center gap-10 mt-8 pt-8 border-t border-border">
          {stats.map((stat) => (
            <span
              key={stat}
              className="text-xs text-muted-foreground font-mono"
            >
              {stat}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
