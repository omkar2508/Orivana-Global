import { Building2, Hotel, HeartPulse, Building, Home } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { CountUp } from "@/components/CountUp";
import { PageHeader } from "@/components/PageHeader";
import { SectionHeading, Note } from "@/components/Section";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/utils/translations";
import headerImage from "@/assets/projects-hero.jpg";

const buildIcons = [Building2, Hotel, HeartPulse, Building, Home];

export default function ProjectsPage() {
  const { language } = useLanguage();
  const p = translations[language].projectsPage;

  return (
    <main id="main">
      <PageHeader image={headerImage} title={p.header.title} highlight={p.header.highlight} subtitle={p.header.subtitle} />

      <section className="section-padding bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading badge={p.build.badge} title={p.build.title} />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {p.build.items.map((it, i) => {
              const Icon = buildIcons[i];
              return (
                <Reveal key={it.title} delay={i * 0.07}>
                  <div className="luxury-card h-full p-8">
                    <Icon className="mb-4 h-9 w-9 text-gold-dark" aria-hidden="true" />
                    <h3 className="mb-2 text-xl font-bold">{it.title}</h3>
                    <p className="text-muted-foreground">{it.text}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
          <Note>{p.build.public}</Note>
        </div>
      </section>

      <section className="bg-muted/50 section-padding">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading badge={p.projects.badge} title={p.projects.title} />
          <div className="grid gap-8 lg:grid-cols-2">
            {p.projects.items.map((pr, i) => (
              <Reveal key={pr.tag} delay={i * 0.1}>
                <div className="luxury-card h-full overflow-hidden">
                  <div className="navy-panel p-8 text-primary-foreground">
                    <div className="eyebrow !text-gold">{pr.tag}</div>
                    <h3 className="font-display text-3xl font-bold">{pr.name}</h3>
                    <div className="text-gold">{pr.acres}</div>
                  </div>
                  <div className="p-8">
                    <div
                      className="mb-4 flex h-4 overflow-hidden rounded-full bg-muted"
                      role="img"
                      aria-label={`${p.projects.commercialLabel} ${pr.commercialPct}, ${p.projects.residentialLabel} ${pr.residentialPct}`}
                    >
                      <div className="bg-gold" style={{ width: `${pr.pctC}%` }} />
                      <div className="bg-navy" style={{ width: `${100 - pr.pctC}%` }} />
                    </div>
                    <dl className="grid grid-cols-2 gap-4">
                      <div>
                        <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                          {p.projects.commercialLabel} · {pr.commercialPct}
                        </dt>
                        <dd className="font-display text-2xl font-bold text-gold-dark">{pr.commercial}</dd>
                      </div>
                      <div>
                        <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                          {p.projects.residentialLabel} · {pr.residentialPct}
                        </dt>
                        <dd className="font-display text-2xl font-bold">{pr.residential}</dd>
                      </div>
                    </dl>
                    <p className="mt-6 border-t border-border/60 pt-4 font-semibold">{pr.saleable}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mx-auto mt-8 max-w-3xl space-y-1 text-center text-sm text-muted-foreground">
            <p>{p.projects.commercialDesc}</p>
            <p>{p.projects.residentialDesc}</p>
          </div>
        </div>
      </section>

      <section className="navy-panel grain section-padding">
        <div className="container relative z-10 mx-auto px-4 lg:px-8">
          <SectionHeading light badge={p.overview.badge} title={p.overview.title} intro={p.overview.intro} />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {p.overview.stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.08}>
                <div className="h-full rounded-2xl border border-gold/25 bg-white/5 p-6 text-center">
                  <div className="font-display text-4xl font-bold text-gold">
                    <CountUp value={s.num} decimals={s.decimals} suffix={s.suffix} />
                  </div>
                  <div className="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground/80">{s.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
          <h3 className="mb-6 mt-14 text-center text-2xl font-bold text-primary-foreground">{p.overview.mixTitle}</h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {p.overview.mix.map((m, i) => (
              <Reveal key={m.title} delay={i * 0.05}>
                <div className="h-full rounded-xl border border-gold/20 bg-white/5 p-5">
                  <div className="text-[11px] uppercase tracking-[0.18em] text-gold/80">{m.group}</div>
                  <div className="mt-1 text-lg font-bold text-primary-foreground">{m.title}</div>
                  <div className="text-sm text-primary-foreground/65">{m.text}</div>
                </div>
              </Reveal>
            ))}
          </div>
          <Note light>{p.overview.note}</Note>
        </div>
      </section>
    </main>
  );
}
