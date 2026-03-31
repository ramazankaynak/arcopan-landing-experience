import { motion } from "framer-motion";
import { Thermometer, Snowflake, Zap, ArrowRight } from "lucide-react";

const solutions = [
  {
    icon: Thermometer,
    title: "Chilled Storage (0/+4°C)",
    description: "Temperature-controlled environments for fresh produce, dairy, and pharmaceutical storage with precision monitoring.",
    href: "#",
  },
  {
    icon: Snowflake,
    title: "Frozen Storage (-18/-25°C)",
    description: "Full cold chain frozen storage systems for meat, seafood, and industrial food processing facilities.",
    href: "#",
  },
  {
    icon: Zap,
    title: "Shock & Blast Freezing",
    description: "Rapid freeze technology for high-throughput processing lines with automated temperature profiling.",
    href: "#",
  },
];

const SolutionsSection = () => {
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
            Solutions
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground max-w-lg">
            Cold Storage Systems Engineered for Performance
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {solutions.map((sol, i) => (
            <motion.a
              key={sol.title}
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
                Explore Solution <ArrowRight className="w-4 h-4" />
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
