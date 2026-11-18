import { Reveal } from "@/components/Reveal";
import { PageHeader } from "@/components/PageHeader";
import { SectionHeading, Note } from "@/components/Section";
import { TravelRows } from "@/components/TravelRows";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/utils/translations";
import { Plane, Waves, Route, Truck, TrainFront, Anchor } from "lucide-react";
import headerImage from "@/assets/invest-panvel.jpg";

const infraIcons = [Plane, Waves, Route, Truck, TrainFront, Anchor];

export default function LocationPage() {
  const { language } = useLanguage();
  const t = translations[language];
  const p = t.locationPage;
  const q = t.quickLocation;

  return (
    <main id="main">
      <PageHeader image={headerImage} title={p.header.title} highlight={p.header.highlight} subtitle={p.header.subtitle} />

      <section className="section-padding bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading badge={p.connectivity.badge} title={p.connectivity.title} intro={p.connectivity.intro} />
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
        </div>
      </section>

      <section className="bg-muted/50 section-padding">
        <div className="container mx-auto grid gap-12 px-4 lg:grid-cols-2 lg:px-8">
          {[p.project1, p.project2].map((proj) => (
            <Reveal key={proj.badge}>
              <span className="eyebrow">{proj.badge}</span>
              <h2 className="mb-3 text-2xl font-bold md:text-3xl">{proj.title}</h2>
              <div className="gold-line mb-4" />
              <p className="mb-6 text-muted-foreground">{proj.text}</p>
              <TravelRows rows={proj.rows} />
              <p className="mt-4 text-xs text-muted-foreground">{proj.site}</p>
            </Reveal>
          ))}
        </div>
        <Note>{p.mapNote}</Note>
      </section>

      <section className="navy-panel grain section-padding">
        <div className="container relative z-10 mx-auto px-4 lg:px-8">
          <SectionHeading light badge={p.infra.badge} title={p.infra.title} intro={p.infra.intro} />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {p.infra.items.map((it, i) => {
              const Icon = infraIcons[i];
              return (
                <Reveal key={it.title} delay={i * 0.07}>
                  <div className="h-full rounded-2xl border border-gold/25 bg-white/5 p-6">
                    <Icon className="mb-4 h-8 w-8 text-gold" aria-hidden="true" />
                    <h3 className="mb-2 text-lg font-bold text-primary-foreground">{it.title}</h3>
                    <p className="text-primary-foreground/70">{it.text}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
          <Note light>{p.infra.note}</Note>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading badge={p.third.badge} title={p.third.title} intro={p.third.intro} />
          <Reveal className="mx-auto mb-10 max-w-xl rounded-2xl border border-gold/40 bg-card p-8 text-center shadow-md">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">{p.third.landLabel}</div>
            <div className="my-2 font-display text-5xl font-bold text-gold-dark">{p.third.land}</div>
            <p className="text-muted-foreground">{p.third.landSub}</p>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {p.third.sectors.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.06}>
                <div className="luxury-card h-full p-6">
                  <h3 className="mb-2 text-lg font-bold">{s.title}</h3>
                  <p className="text-muted-foreground">{s.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Note>{p.third.note}</Note>
        </div>
      </section>
    </main>
  );
}
