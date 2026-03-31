import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

const certifications = ["ISO 9001", "EN 13165", "CE", "HACCP", "GDP"];

const TrustBar = () => {
  return (
    <section className="py-10 bg-card border-y border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14">
          <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
            Certified & Compliant
          </span>
          <div className="h-6 w-px bg-border hidden md:block" />
          {certifications.map((cert, i) => (
            <motion.div
              key={cert}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex items-center gap-2"
            >
              <ShieldCheck className="w-4 h-4 text-primary" />
              <span className="font-mono text-sm font-medium text-foreground">
                {cert}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
