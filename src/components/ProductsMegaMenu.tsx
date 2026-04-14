import { useState } from "react";
import { Link } from "react-router-dom";

type ProductLink = {
  label: string;
  href: string;
};

type ProductGroup = {
  title: string;
  links: ProductLink[];
};

const productGroups: ProductGroup[] = [
  {
    title: "Insulated Panels",
    links: [
      { label: "Roof Panels", href: "/products/panels/roof-panels" },
      { label: "Wall Panels", href: "/products/panels/wall-panels" },
      { label: "Cold Room Panels", href: "/products/panels/cold-room-panels" },
      { label: "Fire & Performance", href: "/products/panels/fire-performance-panels" },
    ],
  },
  {
    title: "Cold Room Systems",
    links: [
      { label: "Cold Room Doors", href: "/products/cold-room/doors" },
      { label: "Cold Room Accessories", href: "/products/cold-room/accessories" },
      { label: "Turnkey Solutions", href: "/products/cold-room/turnkey" },
    ],
  },
  {
    title: "Industrial Doors",
    links: [
      { label: "Sectional Doors", href: "/products/industrial-doors/sectional" },
      { label: "Sliding Doors", href: "/products/industrial-doors/sliding" },
      { label: "Rapid Doors", href: "/products/industrial-doors/rapid" },
    ],
  },
  {
    title: "Racking & Storage",
    links: [
      { label: "Pallet Racking", href: "/products/racking/pallet-racking" },
      { label: "Shelving Systems", href: "/products/racking/shelving" },
      { label: "Warehouse Planning", href: "/products/racking/warehouse-planning" },
    ],
  },
  {
    title: "Accessories",
    links: [
      { label: "Fasteners", href: "/products/accessories/fasteners" },
      { label: "Sealants", href: "/products/accessories/sealants" },
      { label: "Flashings", href: "/products/accessories/flashings" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Technical Documents", href: "/products/support/technical-documents" },
      { label: "Installation Guides", href: "/products/support/installation-guides" },
      { label: "Request Consultation", href: "/products/support/request-consultation" },
    ],
  },
];

type ProductsMegaMenuProps = {
  triggerClassName?: string;
};

const ProductsMegaMenu = ({ triggerClassName = "text-foreground" }: ProductsMegaMenuProps) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <Link
        to="/products"
        onClick={() => setOpen((current) => !current)}
        className={`text-sm font-medium transition-colors hover:text-primary ${triggerClassName}`}
      >
        Products
      </Link>

      {open && (
        <div className="absolute top-full left-1/2 mt-4 w-[72rem] max-w-[90vw] -translate-x-1/2 rounded-lg border border-border bg-background p-6 shadow-2xl">
          <div className="grid grid-cols-2 gap-6 xl:grid-cols-6">
            {productGroups.map((group) => (
              <div key={group.title}>
                <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-primary">
                  {group.title}
                </h4>
                <ul className="space-y-2">
                  {group.links.map((item) => (
                    <li key={item.label}>
                      <Link
                        to={item.href}
                        className="text-sm text-foreground/80 transition-colors hover:text-primary"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductsMegaMenu;
