import { motion } from "framer-motion";

const stats = [
  { value: "500+", label: "Projects Completed" },
  { value: "25+", label: "Countries Served" },
  { value: "30+", label: "Years Experience" },
  { value: "48h", label: "Quote Response" },
];

const StatsBar = () => {
  return (
    <section className="bg-navy py-6">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x divide-primary-foreground/10">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center px-4"
            >
              <span className="block font-mono text-2xl md:text-3xl font-bold text-primary">
                {stat.value}
              </span>
              <span className="text-xs text-primary-foreground/50 uppercase tracking-wider mt-1 block">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsBar;
