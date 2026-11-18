import { ShieldCheck, FileText, Landmark, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/Reveal";
import { CountUp } from "@/components/CountUp";
import { PageHeader } from "@/components/PageHeader";
import { SectionHeading, Note } from "@/components/Section";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/utils/translations";
import headerImage from "@/assets/invest-panvel.jpg";

const secIcons = [ShieldCheck, FileText, Landmark, LogOut];

export default function InvestmentPage() {
  const { language } = useLanguage();
  const t = translations[language].investmentPage;
  const r = t.returns;
  const s = t.security;
  const j = t.journey;
  const max = Math.max(...r.land.map((l) => l.mult));

  return (
    <main id="main">
      <PageHeader image={headerImage} title={t.header.title} highlight={t.header.highlight} subtitle={t.header.subtitle} />

      <section className="section-padding bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading badge={r.badge} title={r.title} />
          <div className="grid gap-6 lg:grid-cols-3">
            <Reveal>
              <div className="luxury-card h-full p-8">
                <h3 className="mb-6 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">{r.landTitle}</h3>
                <div className="flex h-44 items-end justify-around gap-4">
                  {r.land.map((l) => (
                    <div key={l.place} className="flex flex-1 flex-col items-center justify-end">
                      <div className="font-display text-2xl font-bold">{l.mult}x</div>
                      <div className="mt-1 w-full rounded-t bg-gold" style={{ height: `${(l.mult / max) * 110}px` }} />
                    </div>
                  ))}
                </div>
                <div className="mt-2 flex justify-around gap-2 text-center text-xs">
                  {r.land.map((l) => (
                    <div key={l.place} className="flex-1">
                      <div className="font-semibold">{l.place}</div>
                      <div className="text-muted-foreground">{l.note}</div>
                    </div>
                  ))}
                </div>
                <p className="mt-6 text-sm text-muted-foreground">{r.landText}</p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="luxury-card h-full p-8">
                <h3 className="mb-6 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">{r.propTitle}</h3>
                <div className="font-display text-8xl font-bold text-gold-dark">
                  <CountUp value={r.propMult} suffix="x" />
                </div>
                <p className="mt-4 text-muted-foreground">{r.propText}</p>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="navy-panel h-full rounded-2xl p-8 text-primary-foreground">
                <h3 className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-gold">{r.irrTitle}</h3>
                <p className="mb-5 text-xs font-semibold uppercase tracking-[0.14em] text-gold/80">{r.irrFlag}</p>
                <div className="space-y-4 rounded-lg border border-gold/30 p-5 text-sm">
                  <div>
                    <div className="mb-1 text-[11px] uppercase tracking-[0.18em] text-gold">{r.driversLabel}</div>
                    <p>{r.drivers}</p>
                  </div>
                  <div>
                    <div className="mb-1 text-[11px] uppercase tracking-[0.18em] text-gold">{r.exitLabel}</div>
                    <p>{r.exit}</p>
                  </div>
                </div>
                <p className="mt-4 text-xs text-primary-foreground/60">{r.irrNote}</p>
              </div>
            </Reveal>
          </div>
          <Note>{r.note}</Note>
        </div>
      </section>

      <section className="bg-muted/50 section-padding">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading badge={s.badge} title={s.title} intro={s.intro} />
          <Reveal className="mx-auto mb-10 max-w-md rounded-2xl border border-gold/40 bg-card p-8 text-center shadow-md">
            <div className="font-display text-7xl font-bold text-gold-dark">{s.extract}</div>
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">{s.extractLabel}</div>
          </Reveal>
          <h3 className="mb-6 text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">{s.structure}</h3>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {s.items.map((it, i) => {
              const Icon = secIcons[i];
              return (
                <Reveal key={it.title} delay={i * 0.08}>
                  <div className="luxury-card h-full p-6">
                    <Icon className="mb-4 h-8 w-8 text-gold-dark" aria-hidden="true" />
                    <h4 className="mb-2 text-lg font-bold">{it.title}</h4>
                    <p className="text-sm text-muted-foreground">{it.text}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="navy-panel grain section-padding">
        <div className="container relative z-10 mx-auto px-4 lg:px-8">
          <SectionHeading light badge={j.badge} title={j.title} intro={j.intro} />
          <h3 className="mb-8 text-center text-xs font-semibold uppercase tracking-[0.2em] text-gold">{j.receive}</h3>
          <ol className="mx-auto max-w-3xl space-y-4">
            {j.steps.map((st, i) => (
              <Reveal key={st.title} delay={i * 0.05}>
                <li className="flex items-start gap-5 rounded-xl border border-gold/20 bg-white/5 p-5">
                  <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-gold font-display text-xl font-bold text-navy">
                    {i + 1}
                  </span>
                  <div>
                    <div className="font-bold text-primary-foreground">{st.title}</div>
                    <div className="text-primary-foreground/70">{st.text}</div>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
          <Note light>{j.footnote}</Note>
          <div className="mt-8 text-center">
            <a href="mailto:sales@orivanagroup.com?subject=Information%20pack">
              <Button variant="hero" size="xl">{j.cta}</Button>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
