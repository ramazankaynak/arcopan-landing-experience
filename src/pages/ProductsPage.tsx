import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const categories = [
  {
    title: "Insulated Cold Storage Panel Systems",
    description:
      "PIR, PUR and EPS-core sandwich panels for cold rooms, controlled-atmosphere facilities and temperature-sensitive industrial zones. Includes cam-locked systems, floor panels, modular room configurations and full cold storage door range.",
    href: "/products/cold-storage-panels",
    tag: "01 — Insulation Systems",
    subcategories: [
      "Cam-Locked Cold Storage Panels",
      "Cold Storage Floor Panels",
      "Modular Cold Room Systems",
      "Cold Storage Doors",
    ],
  },
  {
    title: "Insulated Sandwich Panel & Cladding Systems",
    description:
      "Facade, roof and structural cladding panels for industrial buildings, logistics facilities and EPC project envelopes. Includes standard and hidden-screw wall panels, multi-ribbed roof systems, solar-compatible options and trapezoidal profiled sheets.",
    href: "/products/sandwich-panels",
    tag: "02 — Cladding Systems",
    subcategories: [
      "Standard & Hidden-Screw Facade Panels",
      "3-Ribbed & 5-Ribbed Roof Panels",
      "Solar-Compatible Roof Panels",
      "Trapezoidal Sheets",
    ],
  },
  {
    title: "Cooling & Refrigeration Systems",
    description:
      "Industrial refrigeration units for cold chain infrastructure: condensing units, central systems, chiller units, evaporators and monoblock configurations. Suitable for cold storage rooms, process cooling and large-scale facility installations.",
    href: "/products/refrigeration",
    tag: "03 — Refrigeration",
    subcategories: [
      "Condensing Units",
      "Central Refrigeration Systems",
      "Chiller Units",
      "Evaporators & Monoblock Units",
    ],
  },
  {
    title: "Warehouse & Industrial Systems",
    description:
      "Logistics-grade warehouse racking systems, industrial door solutions and dock leveller / loading ramp systems. Engineered for cold storage logistics facilities, distribution centers and industrial warehousing environments.",
    href: "/products/warehouse-systems",
    tag: "04 — Warehouse Systems",
    subcategories: [
      "Warehouse Racking Systems",
      "Market Racking Systems",
      "Industrial Door Systems",
      "Dock Levellers & Loading Ramps",
    ],
  },
  {
    title: "Technical Components & Accessories",
    description:
      "Structural profiles, panel fixings, PVC strip curtains, safety hardware and installation accessories. All components are selected for compatibility with cold storage and industrial panel construction standards.",
    href: "/products/components",
    tag: "05 — Components",
    subcategories: [
      "Profiles & Fixings",
      "PVC Strip Curtains",
      "Safety Accessories",
      "Installation Accessories",
    ],
  },
];

const ProductsPage = () => {
  return (
    <main className="bg-background text-foreground">
      <Navbar />
      <section className="mx-auto max-w-7xl px-6 pb-16 pt-36">
        <span className="font-mono text-xs uppercase tracking-widest text-primary">
          Products
        </span>
        <h1 className="mt-3 text-4xl font-bold md:text-5xl">
          ARCOPAN Product Categories
        </h1>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Browse our portfolio of insulated construction products and supporting
          systems designed for industrial performance.
        </p>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <Link
              key={category.title}
              to={category.href}
              className="group rounded-lg border border-border bg-card p-6 transition-colors hover:border-primary"
            >
              <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                {category.tag}
              </span>
              <h2 className="mt-2 text-xl font-semibold">{category.title}</h2>
              <p className="mt-3 text-sm text-muted-foreground">
                {category.description}
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {category.subcategories.map((sub) => (
                  <li
                    key={sub}
                    className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
                  >
                    {sub}
                  </li>
                ))}
              </ul>
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
