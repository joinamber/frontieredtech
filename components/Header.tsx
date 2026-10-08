"use client";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#idea", label: "The Idea" },
  { href: "#vision", label: "Our Vision" },
  { href: "#philosophy", label: "Our Philosophy" },
  { href: "#experiments", label: "Experiments" },
  { href: "#invitation", label: "Get Involved" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${scrolled || open ? "bg-paper/90 backdrop-blur border-b border-ink/10" : "bg-transparent"}`}>
      <div className="wrap flex h-16 items-center justify-between">
        <a href="#idea" className="text-[15px] font-semibold tracking-tight">Frontier EdTech</a>

        <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="ulink pb-0.5 text-[14px] text-muted transition-colors hover:text-ink">{l.label}</a>
          ))}
          <a href="#invitation" className="rounded-full bg-ink px-4 py-2 text-[13px] font-medium text-paper transition-colors hover:bg-lime hover:text-ink">
            Join the Conversation ↗
          </a>
        </nav>

        <button
          type="button" className="-mr-2 grid size-11 place-items-center lg:hidden" aria-expanded={open} aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen((o) => !o)}
        >
          {open ? <X aria-hidden className="size-6" /> : <Menu aria-hidden className="size-6" />}
        </button>
      </div>

      {open && (
        <nav id="mobile-menu" aria-label="Mobile" className="wrap border-t border-ink/10 pb-8 pt-4 lg:hidden">
          <ul>
            {links.map((l) => (
              <li key={l.href} className="border-b border-ink/10">
                <a href={l.href} onClick={() => setOpen(false)} className="block py-4 text-2xl font-semibold tracking-tight">{l.label}</a>
              </li>
            ))}
          </ul>
          <a href="#invitation" onClick={() => setOpen(false)} className="mt-6 inline-block rounded-full bg-lime px-5 py-3 text-sm font-medium">
            Join the Conversation ↗
          </a>
        </nav>
      )}
    </header>
  );
}
