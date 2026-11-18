import { Mail, MapPin, Globe, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/utils/translations";
import assets from "@/assets/assets";

const socialLinks = [
  { icon: Facebook, href: "https://www.facebook.com/profile.php?id=61586054604234", label: "Facebook" },
  { icon: Linkedin, href: "https://www.linkedin.com/company/orivana-global-pvt-ltd/?viewAsMember=true", label: "LinkedIn" },
  { icon: Instagram, href: "https://www.instagram.com/orivanapvtltd/", label: "Instagram" },
];

export function Footer() {
  const { language } = useLanguage();
  const t = translations[language].footer;
  const nav = translations[language].nav;

  const quickLinks = [
    { name: nav.home, href: "/" },
    { name: nav.location, href: "/location" },
    { name: nav.projects, href: "/projects" },
    { name: nav.investment, href: "/investment" },
    { name: nav.about, href: "/about" },
    { name: nav.contact, href: "/contact" },
  ];

  return (
    <footer className="navy-panel grain pt-20 pb-8 border-t-2 border-gold/40">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12 ">
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center">
              <img loading="lazy"
                src={assets.OrivanaLogo}
                alt="Orivana Logo"
                className="h-16 w-auto object-contain pb-4"
              />
            </Link>
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-6">
              {t.description}
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a 
                  key={social.label} 
                  href={social.href} 
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label} 
                  className="w-10 h-10 rounded-full bg-navy-light flex items-center justify-center text-primary-foreground/60 hover:bg-gold hover:text-navy transition-all"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-primary-foreground font-bold text-lg mb-6">{t.quickLinks}</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-primary-foreground/70 hover:text-gold transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-primary-foreground font-bold text-lg mb-6">{t.contactInfo}</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <span className="text-primary-foreground/70 text-sm whitespace-pre-line">{t.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gold flex-shrink-0" />
                <a href="mailto:sales@orivanagroup.com" className="text-primary-foreground/70 hover:text-gold text-sm">sales@orivanagroup.com</a>
              </li>
              <li className="flex items-center gap-3">
                <Globe className="w-5 h-5 text-gold flex-shrink-0" />
                <span className="text-primary-foreground/70 text-sm">www.orivanaglobal.com</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-gold/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/50 text-sm text-center md:text-left">
              {t.copyright}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}