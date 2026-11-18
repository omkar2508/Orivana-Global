import { Reveal } from "@/components/Reveal";

/** Standard section heading block: eyebrow, gold line, title and optional intro. */
export function SectionHeading({ badge, title, intro, light = false, align = "center" }) {
  const alignCls = align === "center" ? "mx-auto text-center" : "";
  return (
    <Reveal className={`mb-12 max-w-3xl ${alignCls}`}>
      {badge && <span className="eyebrow">{badge}</span>}
      <h2 className={`mb-4 text-3xl font-bold md:text-4xl ${light ? "text-primary-foreground" : "text-foreground"}`}>
        {title}
      </h2>
      <div className={`gold-line mb-5 ${align === "center" ? "mx-auto" : ""}`} />
      {intro && (
        <p className={`text-base md:text-lg ${light ? "text-primary-foreground/75" : "text-muted-foreground"}`}>
          {intro}
        </p>
      )}
    </Reveal>
  );
}

export function Note({ children, light = false }) {
  return (
    <p className={`mx-auto mt-8 max-w-4xl text-center text-xs leading-relaxed ${light ? "text-primary-foreground/50" : "text-muted-foreground"}`}>
      {children}
    </p>
  );
}
