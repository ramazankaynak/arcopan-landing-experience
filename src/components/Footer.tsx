import { Mail, Phone, MapPin } from "lucide-react";
import { useTranslation } from "react-i18next";

const products = [
  { label: "Insulated Panels", href: "/products/panels" },
  { label: "Cold Room Systems", href: "/products/cold-room/turnkey" },
  {
    label: "Cooling Systems",
    href: "/products/cooling/industrial-cooling-systems",
  },
  { label: "Industrial Doors", href: "/products/industrial-doors/sectional" },
  { label: "Racking & Storage", href: "/products/racking/pallet-racking" },
];

const solutions = [
  { label: "Chilled Storage", href: "/#solutions" },
  { label: "Frozen Storage", href: "/#solutions" },
  { label: "Blast Freezing", href: "/#solutions" },
  { label: "Request Consultation", href: "/contact" },
];

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer
      id="contact"
      className="bg-navy-light border-t border-primary-foreground/10"
    >
      {/* Main row */}
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-wrap items-start justify-between gap-x-10 gap-y-4">
        {/* Brand */}
        <div className="shrink-0">
          <span className="text-lg font-extrabold tracking-tight text-primary-foreground">
            ARCOPAN
          </span>
          <p className="text-[11px] text-primary-foreground/30 font-mono mt-1 max-w-[220px]">
            End-to-end cold chain engineering — EMEA &amp; Beyond
          </p>
          <p className="text-[11px] text-primary-foreground/30 font-mono mt-1">
            {t("footer.parent")}
          </p>
        </div>

        {/* Products */}
        <div>
          <h4 className="text-[10px] font-semibold text-primary-foreground/50 uppercase tracking-wider mb-1.5">
            {t("footer.products_title")}
          </h4>
          <ul className="flex flex-wrap gap-x-4 gap-y-0.5">
            {products.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-[11px] text-primary-foreground/40 hover:text-primary transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Solutions */}
        <div>
          <h4 className="text-[10px] font-semibold text-primary-foreground/50 uppercase tracking-wider mb-1.5">
            {t("footer.solutions_title")}
          </h4>
          <ul className="flex flex-wrap gap-x-4 gap-y-0.5">
            {solutions.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="text-[11px] text-primary-foreground/40 hover:text-primary transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-[10px] font-semibold text-primary-foreground/50 uppercase tracking-wider mb-1.5">
            {t("footer.contact_title")}
          </h4>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px] text-primary-foreground/40">
            <a
              href="mailto:info@arcopan.com"
              className="inline-flex items-center gap-1 hover:text-primary transition-colors"
            >
              <Mail className="w-3 h-3 text-primary" />
              info@arcopan.com
            </a>
            <a
              href="tel:+902622555640"
              className="inline-flex items-center gap-1 hover:text-primary transition-colors"
            >
              <Phone className="w-3 h-3 text-primary" />
              +90 262 255 56 40
            </a>
            <a
              href="https://wa.me/905072617200"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:text-primary transition-colors"
            >
              <Phone className="w-3 h-3 text-primary" />
              WhatsApp
            </a>
            <span className="inline-flex items-center gap-1">
              <MapPin className="w-3 h-3 text-primary" />
              Kocaeli, Turkey
            </span>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-primary-foreground/10 py-3">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap items-center justify-between gap-2 text-[10px] text-primary-foreground/25">
          <span>{t("footer.rights")}</span>
          <div className="flex items-center gap-3">
            <a
              href="https://www.linkedin.com/in/arcopancooling/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono hover:text-primary transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://facebook.com/ArcopanCooling"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono hover:text-primary transition-colors"
            >
              Facebook
            </a>
            <a
              href="https://instagram.com/arcopancooling/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono hover:text-primary transition-colors"
            >
              Instagram
            </a>
            <span className="font-mono">Mon–Fri 9:00–18:00</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
