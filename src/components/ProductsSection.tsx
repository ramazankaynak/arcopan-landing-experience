import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import productPanels from "@/assets/product-panels.jpg";
import productDoors from "@/assets/product-doors.jpg";
import productCooling from "@/assets/product-cooling.jpg";
import productRacking from "@/assets/product-racking.jpg";

const categories = [
  {
    label: "Cold Storage & Insulation",
    title: "Insulated Panels & Doors",
    count: "3 products",
    image: productPanels,
    href: "#",
  },
  {
    label: "Cooling & Refrigeration",
    title: "Industrial Cooling Systems",
    count: "3 products",
    image: productCooling,
    href: "#",
  },
  {
    label: "Warehouse & Racking",
    title: "Racking & Dock Systems",
    count: "4 products",
    image: productRacking,
    href: "#",
  },
  {
    label: "Components & Accessories",
    title: "Profiles, Curtains & Safety",
    count: "3 products",
    image: productDoors,
    href: "#",
  },
];

const ProductsSection = () => {
  return (
    <section id="products" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <span className="font-mono text-xs tracking-widest uppercase text-primary mb-3 block">
            Products
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground max-w-lg">
            Industrial Cold Storage & Refrigeration Products
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {categories.map((cat, i) => (
            <motion.a
              key={cat.title}
              href={cat.href}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative rounded-lg overflow-hidden aspect-[3/4] cursor-pointer"
            >
              <img
                src={cat.image}
                alt={cat.title}
                loading="lazy"
                width={800}
                height={600}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <span className="font-mono text-[10px] tracking-widest uppercase text-primary block mb-1">
                  {cat.label}
                </span>
                <h3 className="text-lg font-bold text-primary-foreground mb-1">
                  {cat.title}
                </h3>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-primary-foreground/50">{cat.count}</span>
                  <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
