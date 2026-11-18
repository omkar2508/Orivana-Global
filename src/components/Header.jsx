import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { LanguageSelector } from "@/components/LanguageSelector";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/utils/translations";
import assets from "@/assets/assets";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { language } = useLanguage();
  const t = translations[language].nav;


  const navLinks = [
    { name: t.home, href: "/" },
    { name: t.location, href: "/location" },
    { name: t.projects, href: "/projects" },
    { name: t.investment, href: "/investment" },
    { name: t.about, href: "/about" },
    { name: t.contact, href: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-navy/85 backdrop-blur-xl shadow-lg border-b border-gold/20 py-2"
          : "bg-gradient-to-b from-black/50 to-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <nav aria-label="Main" className="flex items-center justify-between">
          <Link to="/" className="flex items-center flex-shrink-0">
            <img
              src={assets.OrivanaLogo}
              alt="Orivana Logo"
              className={`object-contain transition-all duration-300 ${
                isScrolled
                  ? "h-10 w-auto sm:h-12 md:h-14"
                  : "h-12 w-auto sm:h-14 md:h-16 lg:h-[72px]"
              }`}
            />
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                aria-current={location.pathname === link.href ? "page" : undefined}
                className={`px-3 py-2 text-sm font-medium transition-colors duration-300 animated-underline ${
                  location.pathname === link.href
                    ? "text-gold"
                    : "text-primary-foreground/80 hover:text-gold"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <LanguageSelector />
            <Link to="/contact">
              <Button variant="gold" size="sm">
                {t.enquireNow}
              </Button>
            </Link>
          </div>

          <button
            className="lg:hidden p-2 text-primary-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            id="mobile-menu"
            className="lg:hidden bg-navy border-t border-gold/20 max-h-[calc(100vh-4rem)] overflow-y-auto"
          >
            <div className="container mx-auto px-4 py-6">
              <div className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    className={`px-4 py-3 rounded-lg transition-colors font-medium ${
                      location.pathname === link.href
                        ? "text-gold bg-gold/5"
                        : "text-primary-foreground/90 hover:text-gold hover:bg-gold/5"
                    }`}
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="mt-4 pt-4 border-t border-gold/10 space-y-3 gap-2 flex flex-col">
                  <LanguageSelector inline />
                  <Link to="/contact">
                    <Button variant="gold" size="lg" className="w-full">
                      {t.enquireNow}
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}