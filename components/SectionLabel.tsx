export function SectionLabel({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return <p className={`label ${dark ? "text-paper/60" : "text-muted"}`}>{children}</p>;
}
