import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronDown } from "lucide-react";

import imgPanels from "@/assets/arcopan-web/insulated-panels-cold-rooms-01.jpg";
import imgColdRoom from "@/assets/arcopan-web/Cold-room.jpg";
import imgDoors from "@/assets/arcopan-web/cold-room-doors.webp";
import imgCooling from "@/assets/arcopan-web/CoolingUnits1.png";

const megaCategories = [
  {
    title: "Insulated Panels",
    description:
      "PUR/PIR sandwich panels for roof, wall, cold room and hygienic applications.",
    image: imgPanels,
    href: "/products/panels",
    links: [
      { label: "Roof Panels", href: "/products/panels/roof-panels" },
      { label: "Wall Panels", href: "/products/panels/wall-facade-panels" },
      {
        label: "Cold Room Panels",
        href: "/products/panels/coldroom-hygienic-panels",
      },
      {
        label: "Cold Storage Floor",
        href: "/products/panels/cold-storage-floor-panels",
      },
      {
        label: "Fire & Performance",
        href: "/products/panels/fire-performance-panels",
      },
    ],
  },
  {
    title: "Cold Room Systems",
    description:
      "Turnkey cold storage — design, supply, installation and commissioning.",
    image: imgColdRoom,
    href: "/products/cold-room/turnkey",
    links: [
      { label: "Cold Room Doors", href: "/products/cold-room/doors" },
      { label: "Accessories", href: "/products/cold-room/accessories" },
      { label: "Turnkey Solutions", href: "/products/cold-room/turnkey" },
    ],
  },
  {
    title: "Industrial Doors",
    description:
      "Sectional, sliding and rapid doors for high-traffic industrial operations.",
    image: imgDoors,
    href: "/products/industrial-doors/sectional",
    links: [
      {
        label: "Sectional Doors",
        href: "/products/industrial-doors/sectional",
      },
      { label: "Sliding Doors", href: "/products/industrial-doors/sliding" },
      { label: "Rapid Roll Doors", href: "/products/industrial-doors/rapid" },
    ],
  },
  {
    title: "Cooling Systems",
    description:
      "Condensing units, evaporators and integrated refrigeration for cold chain.",
    image: imgCooling,
    href: "/products/cooling/industrial-cooling-systems",
    links: [
      {
        label: "Industrial Cooling",
        href: "/products/cooling/industrial-cooling-systems",
      },
      { label: "Condensing Units", href: "/products/cooling/condensing-units" },
      { label: "Evaporators", href: "/products/cooling/evaporators" },
      {
        label: "Refrigeration Accessories",
        href: "/products/cooling/refrigeration-accessories",
      },
    ],
  },
];

type ProductsMegaMenuProps = {
  triggerClassName?: string;
};

const ProductsMegaMenu = ({
  triggerClassName = "text-foreground",
}: ProductsMegaMenuProps) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {/* Trigger */}
      <Link
        to="/products"
        className={`inline-flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary ${triggerClassName}`}
      >
        Products
        <ChevronDown
          className={`w-3.5 h-3.5 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </Link>

      {/* Dropdown panel */}
      {open && (
        <div className="absolute top-full left-1/2 mt-3 w-[860px] max-w-[92vw] -translate-x-1/2 rounded-xl border border-border bg-background shadow-2xl overflow-hidden z-50">
          {/* Header strip */}
          <div className="px-6 py-3 border-b border-border bg-muted/40 flex items-center justify-between">
            <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
              Product Categories
            </span>
            <Link
              to="/products"
              className="text-[10px] font-mono text-primary hover:underline inline-flex items-center gap-1"
            >
              View all products <ArrowRight className="w-3 h-3" />
            </Link>
          </div>

          {/* 4-column grid */}
          <div className="grid grid-cols-4">
            {megaCategories.map((cat, i) => (
              <div
                key={cat.title}
                className={`group ${
                  i < megaCategories.length - 1 ? "border-r border-border" : ""
                }`}
              >
                {/* Image thumbnail */}
                <Link
                  to={cat.href}
                  className="block overflow-hidden h-32 relative"
                >
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                  <div className="absolute bottom-2 left-3">
                    <span className="text-xs font-bold text-foreground">
                      {cat.title}
                    </span>
                  </div>
                </Link>

                {/* Description + links */}
                <div className="p-4">
                  <p className="text-[11px] text-muted-foreground leading-relaxed mb-3">
                    {cat.description}
                  </p>
                  <ul className="space-y-1.5">
                    {cat.links.map((link) => (
                      <li key={link.label}>
                        <Link
                          to={link.href}
                          className="text-[12px] text-foreground/75 hover:text-primary transition-colors flex items-center gap-1 group/link"
                        >
                          <span className="w-1 h-1 rounded-full bg-primary/40 group-hover/link:bg-primary transition-colors shrink-0" />
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={cat.href}
                    className="mt-3 inline-flex items-center gap-1 text-[11px] font-semibold text-primary hover:gap-2 transition-all"
                  >
                    Explore all <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Footer strip */}
          <div className="px-6 py-3 border-t border-border bg-muted/40 flex items-center gap-6">
            <Link
              to="/contact"
              className="text-[11px] font-semibold text-primary hover:underline"
            >
              → Request Engineering Consultation
            </Link>
            <Link
              to="/catalog"
              className="text-[11px] text-muted-foreground hover:text-primary transition-colors"
            >
              Download Product Catalogue
            </Link>
            <Link
              to="/products/support/technical-documents"
              className="text-[11px] text-muted-foreground hover:text-primary transition-colors"
            >
              Technical Documents
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductsMegaMenu;
