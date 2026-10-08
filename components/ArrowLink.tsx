import { ArrowUpRight, ArrowRight } from "lucide-react";

export function ArrowLink({
  href, children, external = false, className = "", direction = "up-right",
}: { href: string; children: React.ReactNode; external?: boolean; className?: string; direction?: "up-right" | "right" }) {
  const Icon = direction === "right" ? ArrowRight : ArrowUpRight;
  const move = direction === "right" ? "group-hover:translate-x-1" : "group-hover:translate-x-0.5 group-hover:-translate-y-0.5";
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`group inline-flex min-h-11 items-center gap-2 font-medium ${className}`}
    >
      <span className="ulink pb-0.5">{children}</span>
      <Icon aria-hidden className={`size-[1.1em] transition-transform duration-300 ${move}`} />
      {external && <span className="sr-only">(opens in a new tab)</span>}
    </a>
  );
}
