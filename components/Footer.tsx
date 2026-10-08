const links = [
  { href: "#vision", label: "Our Vision" },
  { href: "#philosophy", label: "Our Philosophy" },
  { href: "https://www.frontierkidsclub.com/", label: "Frontier Kids Club", external: true },
  { href: "https://www.dayofaisingapore.com/", label: "Day of AI Singapore", external: true },
  { href: "#invitation", label: "Get Involved" },
];

export function Footer() {
  return (
    <footer className="dark-sec bg-ink text-paper">
      <div className="wrap pb-10 pt-20">
        <div className="flex flex-col gap-12 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="display text-[clamp(2.5rem,9vw,8rem)]">Frontier EdTech</p>
            <p className="mt-4 italic text-paper/60">Raising thinkers, makers, and explorers.</p>
          </div>
          <nav aria-label="Footer">
            <ul className="space-y-2 text-[15px]">
              {links.map((l) => (
                <li key={l.label} className="py-0.5">
                  <a href={l.href} {...(l.external ? { target: "_blank", rel: "noopener noreferrer" } : {})} className="ulink inline-block py-2 text-paper/80 hover:text-lime">
                    {l.label}{l.external && <><span aria-hidden> ↗</span><span className="sr-only"> (opens in a new tab)</span></>}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <p className="mt-16 border-t border-paper/15 pt-6 text-sm text-paper/50">© 2026 Frontier EdTech</p>
      </div>
    </footer>
  );
}
