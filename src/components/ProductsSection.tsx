import { motion } from "framer-motion";
import productPanels from "@/assets/product-panels.jpg";
import productDoors from "@/assets/product-doors.jpg";
import productCooling from "@/assets/product-cooling.jpg";

const products = [
  {
    title: "PUR/PIR Paneller",
    description: "Maksimum ısı yalıtımı ve yangın dayanımı sunan endüstriyel çözümler.",
    image: productPanels,
  },
  {
    title: "Sızdırmaz Kapılar",
    description: "Isı köprüsü oluşturmayan, sızdırmaz sürgülü ve menteşeli sistemler.",
    image: productDoors,
  },
  {
    title: "Soğutma Grupları",
    description: "Enerji tasarruflu, yüksek performanslı split ve monoblok üniteler.",
    image: productCooling,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: "easeOut" as const },
  }),
};

const ProductsSection = () => {
  return (
    <section id="products" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-4xl md:text-5xl font-bold text-foreground mb-16 text-center"
        >
          Ürün Gruplarımız
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, i) => (
            <motion.div
              key={product.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className="bg-card rounded-2xl overflow-hidden shadow-lg shadow-foreground/5 group cursor-pointer border border-border"
            >
              <div className="overflow-hidden h-56">
                <img
                  src={product.image}
                  alt={product.title}
                  loading="lazy"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-7">
                <h3 className="font-display text-xl font-semibold text-primary mb-2">
                  {product.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {product.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
