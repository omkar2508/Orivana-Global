import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/utils/translations";
import heroVideo from "@/assets/Futuristic_Township_Drone_Flythrough.mp4";
import heroPoster from "@/assets/hero-township.jpg";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] },
});

export function HeroSection() {
  const { language } = useLanguage();
  const t = translations[language].hero;
  const partner = translations[language].common.partnership;

  // The 12 MB drone video is skipped on phones and data-saver connections; the poster image is shown instead.
  const [playVideo, setPlayVideo] = useState(false);
  useEffect(() => {
    const small = window.matchMedia("(max-width: 767px)").matches;
    const saveData = navigator.connection?.saveData === true;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setPlayVideo(!small && !saveData && !reduce);
  }, []);

  return (
    <section className="grain relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video background with slow zoom */}
      <div className="absolute inset-0">
        <motion.video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster={heroPoster}
          className="w-full h-full object-cover"
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 12, ease: "easeOut" }}
        >
          {playVideo && <source src={heroVideo} type="video/mp4" />}
        </motion.video>
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 bg-[radial-gradient(70%_55%_at_50%_40%,hsl(var(--gold)/0.16),transparent_70%)]" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-navy-dark to-transparent" />
      </div>

      <div className="relative z-10 container mx-auto px-4 lg:px-8 pt-28 pb-24">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div {...fadeUp(0)}>
            <span className="inline-flex items-center gap-2 px-5 py-2 mb-8 text-xs sm:text-sm font-semibold uppercase tracking-[0.18em] text-gold bg-gold/10 rounded-full border border-gold/30 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-gold opacity-75 animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-gold" />
              </span>
              {t.badge}
            </span>
          </motion.div>

          <motion.h1
            {...fadeUp(0.1)}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-[1.1] drop-shadow-lg"
          >
            {t.title} <span className="text-gradient-gold italic">{t.titleHighlight}</span> {t.titleEnd}
          </motion.h1>

          <motion.p
            {...fadeUp(0.2)}
            className="text-base sm:text-lg md:text-xl text-primary-foreground/85 mb-10 max-w-2xl mx-auto leading-relaxed drop-shadow-md"
          >
            {t.description}
          </motion.p>

          <motion.p {...fadeUp(0.25)} className="mb-10 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            {partner}
          </motion.p>

          <motion.div {...fadeUp(0.3)} className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link to="/contact">
              <Button variant="hero" size="xl" className="w-full sm:w-auto shadow-gold">
                {t.primary}
              </Button>
            </Link>
            <Link to="/projects">
              <Button variant="heroOutline" size="xl" className="w-full sm:w-auto">
                {t.secondary}
              </Button>
            </Link>
          </motion.div>

        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden sm:block"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-primary-foreground/50"
        >
          <span className="text-xs tracking-widest uppercase">{t.scroll}</span>
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  );
}
