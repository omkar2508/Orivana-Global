import { useState } from "react";
import { Globe } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";

const languages = [
  { code: "en", name: "English", nativeName: "English" },
  { code: "hi", name: "Hindi", nativeName: "हिंदी" },
  { code: "mr", name: "Marathi", nativeName: "मराठी" },
  { code: "bn", name: "Bengali", nativeName: "বাংলা" },
  { code: "gu", name: "Gujarati", nativeName: "ગુજરાતી" },
];

export function LanguageSelector({ alwaysShowLabel = false, align = "right", inline = false }) {
  const [isOpen, setIsOpen] = useState(false);
  const { language, changeLanguage } = useLanguage();

  const currentLanguage = languages.find((lang) => lang.code === language);

  const handleLanguageChange = (langCode) => {
    changeLanguage(langCode);
    setIsOpen(false);
  };

  // Inline mode (used inside the mobile menu, where an absolute dropdown would be clipped)
  if (inline) {
    return (
      <div role="group" aria-label="Select language" className="flex flex-wrap items-center gap-2">
        <Globe className="mr-1 h-4 w-4 text-primary-foreground/60" aria-hidden="true" />
        {languages.map((lang) => (
          <button
            key={lang.code}
            type="button"
            onClick={() => changeLanguage(lang.code)}
            aria-pressed={language === lang.code}
            className={`rounded-full border px-3 py-1.5 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
              language === lang.code
                ? "border-gold bg-gold/10 font-medium text-gold"
                : "border-white/15 text-primary-foreground/80 hover:border-gold/50 hover:text-gold"
            }`}
          >
            {lang.nativeName}
          </button>
        ))}
      </div>
    );
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-primary-foreground/80 hover:text-gold transition-colors rounded-lg hover:bg-gold/5"
        aria-label="Select language"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <Globe className="w-4 h-4" />
        <span className={alwaysShowLabel ? "inline" : "hidden sm:inline"}>{currentLanguage?.nativeName}</span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <div
              className="fixed inset-0 z-40"
              onClick={() => setIsOpen(false)}
            />
            
            {/* Dropdown */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className={`absolute ${align === "left" ? "left-0" : "right-0"} top-full mt-2 w-40 bg-navy/95 backdrop-blur-md border border-gold/20 rounded-lg shadow-lg overflow-hidden z-50 max-h-64 overflow-y-auto`}
            >
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => handleLanguageChange(lang.code)}
                  className={`w-full px-4 py-3 text-left text-sm transition-colors ${
                    language === lang.code
                      ? "bg-gold/10 text-gold font-medium"
                      : "text-primary-foreground/80 hover:bg-gold/5 hover:text-gold"
                  }`}
                >
                  {lang.nativeName}
                </button>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}