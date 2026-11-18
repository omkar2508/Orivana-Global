import { Reveal } from "@/components/Reveal";
import { PageHeader } from "@/components/PageHeader";
import { SectionHeading } from "@/components/Section";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/utils/translations";
import headerImage from "@/assets/projects-hero.jpg";

function Person({ m, i }) {
  return (
    <Reveal delay={(i % 3) * 0.08}>
      <div className="luxury-card flex h-full gap-4 p-6">
        <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-navy font-display text-xl font-bold text-gold">
          {m.initials}
        </div>
        <div>
          <h4 className="text-lg font-bold">{m.name}</h4>
          <div className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-gold-dark">{m.role}</div>
          <p className="text-sm text-muted-foreground">{m.text}</p>
        </div>
      </div>
    </Reveal>
  );
}

export default function AboutPage() {
  const { language } = useLanguage();
  const t = translations[language];
  const p = t.aboutPage;

  return (
    <main id="main">
      <PageHeader image={headerImage} title={p.header.title} highlight={p.header.highlight} subtitle={p.header.subtitle} />

      <section className="section-padding bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading badge={p.board.badge} title={p.board.title} intro={p.board.intro} />
          <h3 className="mb-6 text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">{p.board.boardTitle}</h3>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {p.board.members.map((m, i) => (
              <Person key={m.name} m={m} i={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted/50 section-padding">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading title={p.advisors.title} intro={p.advisors.subtitle} />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {p.advisors.members.map((m, i) => (
              <Person key={m.name} m={m} i={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading title={p.partners.title} />
          <Reveal className="mx-auto max-w-3xl overflow-x-auto rounded-2xl border border-border/60 bg-card">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-border/60 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  <th className="p-4">{p.partners.company}</th>
                  <th className="p-4">{p.partners.role}</th>
                  <th className="p-4">{p.partners.office}</th>
                </tr>
              </thead>
              <tbody>
                {p.partners.rows.map((r) => (
                  <tr key={r.name}>
                    <td className="p-4 font-bold">{r.name}</td>
                    <td className="p-4">{r.role}</td>
                    <td className="p-4">{r.office}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
