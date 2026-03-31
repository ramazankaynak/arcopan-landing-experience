import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

const certs = ["CE", "ISO 9001", "PIR B-s1, d0", "GOST-R"];

const CertificatesSection = () => {
  return (
    <section className="py-16 bg-secondary">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16">
          {certs.map((cert, i) => (
            <motion.div
              key={cert}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-2 text-muted-foreground"
            >
              <ShieldCheck className="w-5 h-5 text-primary" />
              <span className="font-display font-semibold text-sm tracking-wider uppercase">
                {cert}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;
