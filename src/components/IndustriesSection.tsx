import { motion } from "framer-motion";
import { UtensilsCrossed, Beef, Milk, Pill, Truck, Store } from "lucide-react";

const industries = [
  { icon: UtensilsCrossed, name: "Food & Beverage", href: "#" },
  { icon: Beef, name: "Meat & Poultry", href: "#" },
  { icon: Milk, name: "Dairy", href: "#" },
  { icon: Pill, name: "Pharmaceuticals", href: "#" },
  { icon: Truck, name: "Logistics & Cold Chain", href: "#" },
  { icon: Store, name: "Retail & Supermarkets", href: "#" },
];

const IndustriesSection = () => {
  return (
    <section id="industries" className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="font-mono text-xs tracking-widest uppercase text-primary mb-3 block">
            Industries We Serve
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Sector-Specific Cold Chain Solutions
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {industries.map((ind, i) => (
            <motion.a
              key={ind.name}
              href={ind.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="group flex flex-col items-center gap-3 p-6 rounded-lg border border-border hover:border-primary hover:bg-primary/5 transition-all"
            >
              <ind.icon className="w-7 h-7 text-muted-foreground group-hover:text-primary transition-colors" />
              <span className="text-xs font-semibold text-foreground text-center leading-tight">
                {ind.name}
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
