import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
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
              End-to-end cold chain engineering — from feasibility and specification through procurement, installation, and commissioning.
            </p>
            <p className="text-xs text-primary-foreground/30 mt-4 font-mono">
              A brand of METKON ÇELİK YAPI VE LOJİSTİK AŞ
            </p>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-xs font-semibold text-primary-foreground/60 uppercase tracking-wider mb-4">
              Products
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
              Solutions
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
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <a href="mailto:sales@arcopan.com" className="text-sm text-primary-foreground/40 hover:text-primary transition-colors">
                  sales@arcopan.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <span className="text-sm text-primary-foreground/40">+90 332 XXX XX XX</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <span className="text-sm text-primary-foreground/40">Konya, Turkey</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-primary-foreground/10 py-5">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-xs text-primary-foreground/30">
            © 2026 ARCOPAN. All rights reserved.
          </span>
          <div className="flex items-center gap-4">
            {["EN", "TR", "FR", "DE", "RU"].map((lang) => (
              <button
                key={lang}
                className="text-xs font-mono text-primary-foreground/30 hover:text-primary transition-colors"
              >
                {lang}
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
