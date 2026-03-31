import { motion } from "framer-motion";

const values = [
  {
    number: "01",
    title: "End-to-End Cold Chain Coordination",
    description: "Single point of contact from feasibility and specification through procurement, installation, and commissioning.",
  },
  {
    number: "02",
    title: "Engineering Authority & Technical Depth",
    description: "PE-stamped specifications, compliance documentation, and thermal load engineering across all product lines.",
  },
  {
    number: "03",
    title: "International Project Experience",
    description: "Delivered projects across Europe, Middle East, Africa and the Caucasus with proven logistics capability.",
  },
  {
    number: "04",
    title: "Speed-to-Quote with Full Traceability",
    description: "RFQ response within 48 hours with full BOQ traceability and engineering documentation.",
  },
  {
    number: "05",
    title: "Integrated Industrial Cooling Systems",
    description: "Turnkey solutions integrating refrigeration, insulation, structural steel and logistics infrastructure.",
  },
];

const WhyArcopan = () => {
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
            Why ARCOPAN
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground max-w-lg">
            Built on Engineering Expertise. Trusted Across Industries.
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
                <h3 className="text-base font-bold text-foreground mb-1.5">
                  {v.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {v.description}
                </p>
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
              Download Capability Brochure
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyArcopan;
