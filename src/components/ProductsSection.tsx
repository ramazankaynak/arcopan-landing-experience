import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import productPanels from "@/assets/product-panels.jpg";
import productDoors from "@/assets/product-doors.jpg";
import productCooling from "@/assets/product-cooling.jpg";
import productRacking from "@/assets/product-racking.jpg";
import productColdroomDoors from "@/assets/product-coldroom-doors.jpg";
import productModularColdroom from "@/assets/product-modular-coldroom.jpg";

const ProductsSection = () => {
  const { t } = useTranslation();

  const categories = [
    { label: t("products.cat1_label"), title: t("products.cat1_title"), count: "4 products", image: productPanels, href: "#" },
    { label: t("products.cat5_label"), title: t("products.cat5_title"), count: "5 products", image: productColdroomDoors, href: "#" },
    { label: t("products.cat6_label"), title: t("products.cat6_title"), count: "2 products", image: productModularColdroom, href: "#" },
    { label: t("products.cat2_label"), title: t("products.cat2_title"), count: "5 products", image: productCooling, href: "#" },
    { label: t("products.cat3_label"), title: t("products.cat3_title"), count: "4 products", image: productRacking, href: "#" },
    { label: t("products.cat4_label"), title: t("products.cat4_title"), count: "4 products", image: productDoors, href: "#" },
  ];

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
            {t("products.eyebrow")}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground max-w-lg">
            {t("products.title")}
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((cat, i) => (
            <motion.a
              key={i}
              href={cat.href}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative rounded-lg overflow-hidden aspect-[3/4] cursor-pointer"
            >
              <img src={cat.image} alt={cat.title} loading="lazy" width={800} height={600} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <span className="font-mono text-[10px] tracking-widest uppercase text-primary block mb-1">{cat.label}</span>
                <h3 className="text-lg font-bold text-primary-foreground mb-1">{cat.title}</h3>
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
