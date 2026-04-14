import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const categories = [
  {
    title: "Insulated Panels",
    description: "Roof, wall and cold room panel systems for industrial projects.",
    href: "/products/panels",
  },
  {
    title: "Cold Room Systems",
    description: "Integrated cold room solutions for food, pharma and logistics.",
    href: "/products",
  },
  {
    title: "Industrial Doors",
    description: "Durable high-performance door options for demanding operations.",
    href: "/products",
  },
  {
    title: "Racking & Storage",
    description: "Flexible storage systems tailored to warehouse workflows.",
    href: "/products",
  },
  {
    title: "Accessories",
    description: "Installation components and finishing elements for full systems.",
    href: "/products",
  },
  {
    title: "Technical Support",
    description: "Engineering guidance and documentation across product lines.",
    href: "/products",
  },
];

const ProductsPage = () => {
  return (
    <main className="bg-background text-foreground">
      <Navbar />
      <section className="mx-auto max-w-7xl px-6 pb-16 pt-36">
        <span className="font-mono text-xs uppercase tracking-widest text-primary">Products</span>
        <h1 className="mt-3 text-4xl font-bold md:text-5xl">ARCOPAN Product Categories</h1>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Browse our portfolio of insulated construction products and supporting systems designed for industrial performance.
        </p>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <Link
              key={category.title}
              to={category.href}
              className="group rounded-lg border border-border bg-card p-6 transition-colors hover:border-primary"
            >
              <h2 className="text-xl font-semibold">{category.title}</h2>
              <p className="mt-3 text-sm text-muted-foreground">{category.description}</p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary">
                Explore
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default ProductsPage;
