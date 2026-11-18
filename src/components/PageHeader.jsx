import { motion } from "framer-motion";

/**
 * Shared banner used at the top of inner pages (About, Investment, Career, Contact).
 * `image` is the background; `alt` is empty by default because the image is decorative.
 */
export function PageHeader({ image, title, highlight, subtitle, alt = "" }) {
  return (
    <section className="grain relative flex min-h-[340px] h-[42vh] items-center justify-center overflow-hidden bg-navy">
      <div className="absolute inset-0">
        <img src={image} alt={alt} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-navy-dark/60 to-transparent" />
      </div>
      <div className="relative z-10 container mx-auto px-4 pt-16 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-4 text-4xl font-bold text-primary-foreground md:text-5xl lg:text-6xl"
        >
          {title} {highlight && <span className="text-gradient-gold italic">{highlight}</span>}
        </motion.h1>
        <div className="gold-line mx-auto mb-5" />
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mx-auto max-w-2xl text-base text-primary-foreground/80 md:text-lg"
        >
          {subtitle}
        </motion.p>
      </div>
    </section>
  );
}
