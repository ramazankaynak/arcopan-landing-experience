import { motion } from "framer-motion";
import { Globe } from "lucide-react";

const regions = [
  { name: "Balkanlar", x: "48%", y: "35%" },
  { name: "Türkiye", x: "55%", y: "40%" },
  { name: "Afrika", x: "45%", y: "60%" },
  { name: "Orta Asya", x: "65%", y: "35%" },
];

const ExportMapSection = () => {
  return (
    <section className="py-24 bg-section-dark text-primary-foreground">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <Globe className="w-10 h-10 text-glow mx-auto mb-4" />
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Küresel İhracat Ağı
          </h2>
          <p className="text-primary-foreground/60 text-lg max-w-xl mx-auto">
            Balkanlar'dan Afrika'ya 30+ ülkede aktif projeler.
          </p>
        </motion.div>

        {/* Regions grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {regions.map((region, i) => (
            <motion.div
              key={region.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-primary-foreground/5 border border-primary-foreground/10 rounded-xl p-6 backdrop-blur-sm"
            >
              <div className="w-3 h-3 rounded-full bg-glow box-glow mx-auto mb-3" />
              <span className="font-display font-semibold text-sm">
                {region.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExportMapSection;
