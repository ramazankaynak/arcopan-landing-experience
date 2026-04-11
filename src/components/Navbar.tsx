import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Globe } from "lucide-react";
import logo from "@/assets/logo.svg";
import { useTranslation } from "react-i18next";

const languages = [
  { code: "en", label: "EN" },
  { code: "tr", label: "TR" },
  { code: "fr", label: "FR" },
  { code: "de", label: "DE" },
  { code: "ru", label: "RU" },
];

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: t("nav.home"), href: "#" },
    { label: t("nav.company"), href: "#about" },
    { label: t("nav.products"), href: "#products" },
    { label: t("nav.solutions"), href: "#solutions" },
    { label: t("nav.industries"), href: "#industries" },
    { label: t("nav.projects"), href: "#projects" },
    { label: t("nav.contact"), href: "#contact" },
  ];

  const currentLang = (i18n.language || "en").substring(0, 2).toUpperCase();

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm border-b border-border"
          : "bg-transparent"
      }`}
    >
      {/* Top contact bar */}
      <div className={`transition-all duration-300 overflow-hidden ${scrolled ? "h-0" : "h-8"}`}>
        <div className="max-w-7xl mx-auto px-6 h-8 flex items-center justify-end gap-6 text-xs text-primary-foreground/60">
          <a href="mailto:info@arcopan.com" className="font-mono hover:text-primary transition-colors">info@arcopan.com</a>
          <a href="tel:+902622555640" className="font-mono hover:text-primary transition-colors">+90 262 255 56 40</a>
          <div className="relative hidden md:block">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1 font-mono hover:text-primary transition-colors"
            >
              <Globe className="w-3 h-3" />
              {currentLang}
            </button>
            {langOpen && (
              <div className="absolute top-full right-0 mt-1 bg-background border border-border rounded-md shadow-lg py-1 min-w-[80px]">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      i18n.changeLanguage(lang.code);
                      setLangOpen(false);
                    }}
                    className={`block w-full text-left px-3 py-1.5 text-xs font-mono hover:bg-muted transition-colors ${
                      i18n.language?.startsWith(lang.code) ? "text-primary font-bold" : "text-foreground"
                    }`}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <img
            src={logo}
            alt="ARCOPAN"
            className={`h-8 w-auto transition-all ${
              scrolled ? "brightness-0" : "brightness-0 invert"
            }`}
          />
        </a>

        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                scrolled ? "text-foreground" : "text-primary-foreground/80"
              }`}
            >
              {item.label}
            </a>
          ))}
          <div className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary ${
                scrolled ? "text-foreground" : "text-primary-foreground/80"
              }`}
            >
              <Globe className="w-4 h-4" />
              {currentLang}
            </button>
            {langOpen && (
              <div className="absolute top-full right-0 mt-2 bg-background border border-border rounded-md shadow-lg py-1 min-w-[80px]">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      i18n.changeLanguage(lang.code);
                      setLangOpen(false);
                    }}
                    className={`block w-full text-left px-3 py-1.5 text-xs font-mono hover:bg-muted transition-colors ${
                      i18n.language?.startsWith(lang.code) ? "text-primary font-bold" : "text-foreground"
                    }`}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
            )}
          </div>
          <a
            href="#contact"
            className="bg-primary text-primary-foreground px-5 py-2.5 rounded-md text-sm font-semibold hover:bg-primary-dark transition-colors"
          >
            {t("nav.quote")}
          </a>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`lg:hidden ${scrolled ? "text-foreground" : "text-primary-foreground"}`}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden bg-background border-t border-border px-6 pb-6 pt-2"
        >
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="block py-3 text-sm font-medium text-foreground border-b border-border/50"
            >
              {item.label}
            </a>
          ))}
          <div className="flex items-center gap-2 py-3 border-b border-border/50">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  i18n.changeLanguage(lang.code);
                }}
                className={`text-xs font-mono px-2 py-1 rounded transition-colors ${
                  i18n.language?.startsWith(lang.code)
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-primary"
                }`}
              >
                {lang.label}
              </button>
            ))}
          </div>
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="mt-4 block text-center bg-primary text-primary-foreground px-5 py-3 rounded-md text-sm font-semibold"
          >
            {t("nav.quote")}
          </a>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Navbar;
