import { Mail, Phone, MapPin } from "lucide-react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer id="contact" className="bg-navy-light border-t border-primary-foreground/10">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <span className="text-xl font-extrabold tracking-tight text-primary-foreground">
              ARCOPAN
            </span>
            <p className="text-sm text-primary-foreground/40 mt-3 max-w-xs leading-relaxed">
              {t("footer.description")}
            </p>
            <p className="text-xs text-primary-foreground/30 mt-4 font-mono">
              {t("footer.parent")}
            </p>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-xs font-semibold text-primary-foreground/60 uppercase tracking-wider mb-4">
              {t("footer.products_title")}
            </h4>
            <ul className="space-y-2.5">
              {["Cold Storage Panels", "Cooling Systems", "Warehouse Racking", "Cold Room Doors", "Dock Levellers"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-primary-foreground/40 hover:text-primary transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-xs font-semibold text-primary-foreground/60 uppercase tracking-wider mb-4">
              {t("footer.solutions_title")}
            </h4>
            <ul className="space-y-2.5">
              {["Chilled Storage", "Frozen Storage", "Blast Freezing", "Project-Based Systems", "Tailor-Made Solutions"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-primary-foreground/40 hover:text-primary transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold text-primary-foreground/60 uppercase tracking-wider mb-4">
              {t("footer.contact_title")}
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <a href="mailto:info@arcopan.com" className="text-sm text-primary-foreground/40 hover:text-primary transition-colors">
                  info@arcopan.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <a href="tel:+902622555640" className="text-sm text-primary-foreground/40 hover:text-primary transition-colors">
                  +90 262 255 56 40
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <a href="https://wa.me/+905438418507" target="_blank" rel="noopener noreferrer" className="text-sm text-primary-foreground/40 hover:text-primary transition-colors">
                  WhatsApp: +90 543 841 85 07
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <span className="text-sm text-primary-foreground/40">Kocaeli, Turkey</span>
              </li>
            </ul>
            <div className="flex items-center gap-3 mt-4">
              <a href="https://www.linkedin.com/in/arcopancooling/" target="_blank" rel="noopener noreferrer" className="text-xs font-mono text-primary-foreground/30 hover:text-primary transition-colors">LinkedIn</a>
              <a href="https://facebook.com/ArcopanCooling" target="_blank" rel="noopener noreferrer" className="text-xs font-mono text-primary-foreground/30 hover:text-primary transition-colors">Facebook</a>
              <a href="https://instagram.com/arcopancooling/" target="_blank" rel="noopener noreferrer" className="text-xs font-mono text-primary-foreground/30 hover:text-primary transition-colors">Instagram</a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-primary-foreground/10 py-5">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-xs text-primary-foreground/30">
            {t("footer.rights")}
          </span>
          <span className="text-xs text-primary-foreground/20 font-mono">
            Mon–Fri 9:00 AM – 18:00 PM
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
