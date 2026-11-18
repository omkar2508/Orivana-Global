import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/Reveal";
import { CountUp } from "@/components/CountUp";
import { SectionHeading, Note } from "@/components/Section";
import { HeroSection } from "@/components/HeroSection";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/utils/translations";

const Index = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const { glance, vision, quickLocation: q, homeCta } = t;

  return (
    <main id="main">
      <HeroSection />

      <section className="section-padding bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading badge={glance.badge} title={glance.title} intro={glance.text} />
          <div className="grid gap-6 md:grid-cols-3">
            {glance.points.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.1}>
                <div className="luxury-card h-full p-8 text-center">
                  <h3 className="mb-3 text-xl font-bold">{p.title}</h3>
                  <p className="text-muted-foreground">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="navy-panel grain section-padding">
        <div className="container relative z-10 mx-auto px-4 lg:px-8">
          <SectionHeading light badge={vision.badge} title={vision.title} intro={vision.intro} />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {vision.stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.08}>
                <div className="h-full rounded-2xl border border-gold/25 bg-white/5 p-6 text-center">
                  <div className="font-display text-4xl font-bold text-gold">
                    <CountUp value={s.num} prefix={s.prefix} suffix={s.suffix} />
                  </div>
                  {s.unit && <div className="text-sm uppercase tracking-widest text-gold/80">{s.unit}</div>}
                  <div className="mt-3 text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground">{s.label}</div>
                  <div className="mt-1 text-sm text-primary-foreground/65">{s.sub}</div>
                </div>
              </Reveal>
            ))}
          </div>
          <Note light>{vision.note}</Note>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading badge={q.badge} title={q.title} intro={q.intro} />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {q.times.map((x, i) => (
              <Reveal key={x.label} delay={i * 0.08}>
                <div className="luxury-card h-full p-6 text-center">
                  <div className="font-display text-5xl font-bold text-gold-dark">{x.value}</div>
                  <div className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">{q.min}</div>
                  <p className="font-medium">{x.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <ul className="mx-auto mt-8 max-w-2xl space-y-2 text-center text-muted-foreground">
            {q.corridors.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
          <Note>{q.note}</Note>
          <div className="mt-8 text-center">
            <Link to="/location">
              <Button variant="goldOutline" size="lg">{q.cta}</Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="navy-panel grain section-padding text-center">
        <div className="container relative z-10 mx-auto px-4">
          <SectionHeading light title={homeCta.title} intro={homeCta.text} />
          <Link to="/contact">
            <Button variant="hero" size="xl">{homeCta.button}</Button>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Index;
