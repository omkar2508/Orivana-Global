/** A list of "time / place / description" rows used for the two project locations. */
export function TravelRows({ rows }) {
  return (
    <ul className="divide-y divide-border/60 overflow-hidden rounded-2xl border border-border/60 bg-card">
      {rows.map((r, i) => (
        <li key={i} className="flex items-start gap-4 p-4 sm:p-5">
          <span className="w-20 flex-shrink-0 font-display text-xl font-bold text-gold-dark">{r.time}</span>
          <span>
            <span className="block font-semibold text-foreground">{r.name}</span>
            {r.desc && <span className="block text-sm text-muted-foreground">{r.desc}</span>}
          </span>
        </li>
      ))}
    </ul>
  );
}
