import { MapPin, Mail, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/Reveal";
import { PageHeader } from "@/components/PageHeader";
import { SectionHeading } from "@/components/Section";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/utils/translations";
import headerImage from "@/assets/invest-panvel.jpg";

const SALES = "sales@orivanagroup.com";
const KOLHAPUR = "Avishkarinfrakop@gmail.com";
const WEBSITE = "www.orivanaglobal.com";

export default function ContactPage() {
  const { language } = useLanguage();
  const t = translations[language].contactPage;
  const o = t.offices;
  const mail = (subject) => `mailto:${SALES}?subject=${encodeURIComponent(subject)}`;
  const requests = [t.requests.subject.visit, t.requests.subject.pack, t.requests.subject.term, t.requests.subject.preview];

  return (
    <main id="main">
      <PageHeader image={headerImage} title={t.header.title} highlight={t.header.highlight} subtitle={t.header.subtitle} />

      <section className="section-padding bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading badge={t.invitation.badge} title={t.requests.title} intro={t.requests.text} />
          <div className="mx-auto flex max-w-3xl flex-wrap justify-center gap-4">
            {requests.map((r, i) => (
              <a key={r} href={mail(r)}>
                <Button variant={i === 0 ? "gold" : "goldOutline"} size="lg">{r}</Button>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted/50 section-padding">
        <div className="container mx-auto grid gap-8 px-4 md:grid-cols-2 lg:px-8">
          <Reveal>
            <div className="luxury-card h-full p-8">
              <MapPin className="mb-4 h-8 w-8 text-gold-dark" aria-hidden="true" />
              <div className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">{o.corporate}</div>
              <h3 className="mb-2 text-xl font-bold">{o.corporateName}</h3>
              <p className="text-muted-foreground">{o.corporateAddress}</p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="luxury-card h-full p-8">
              <MapPin className="mb-4 h-8 w-8 text-gold-dark" aria-hidden="true" />
              <div className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">{o.kolhapur}</div>
              <h3 className="mb-2 text-xl font-bold">{o.kolhapurName}</h3>
              <p className="text-muted-foreground">{o.kolhapurAddress}</p>
            </div>
          </Reveal>
        </div>
        <div className="container mx-auto mt-8 flex flex-wrap justify-center gap-x-10 gap-y-3 px-4">
          <a className="flex items-center gap-2 hover:text-gold-dark" href={`mailto:${SALES}`}>
            <Mail className="h-5 w-5 text-gold-dark" aria-hidden="true" /> {SALES}
          </a>
          <a className="flex items-center gap-2 hover:text-gold-dark" href={`mailto:${KOLHAPUR}`}>
            <Mail className="h-5 w-5 text-gold-dark" aria-hidden="true" /> {KOLHAPUR}
          </a>
          <a className="flex items-center gap-2 hover:text-gold-dark" href={`https://${WEBSITE}`} target="_blank" rel="noopener noreferrer">
            <Globe className="h-5 w-5 text-gold-dark" aria-hidden="true" /> {WEBSITE}
          </a>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-4xl px-4 lg:px-8">
          <p className="mb-6 text-center text-lg">{t.invitation.text}</p>
          <h3 className="mb-3 mt-10 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">{t.disclaimerTitle}</h3>
          <p className="text-xs leading-relaxed text-muted-foreground">{t.disclaimer}</p>
        </div>
      </section>
    </main>
  );
}
