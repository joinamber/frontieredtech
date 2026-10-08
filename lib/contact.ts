export const ROLES = ["Parent", "Educator", "Researcher", "Other"] as const;
export type Role = (typeof ROLES)[number];

export type ContactInput = { name: string; email: string; role: string; message: string; consent: boolean };
export type FieldErrors = Partial<Record<keyof ContactInput, string>>;

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function validate(v: ContactInput): FieldErrors {
  const e: FieldErrors = {};
  if (v.name.trim().length < 2) e.name = "Please enter your name.";
  if (!EMAIL.test(v.email.trim())) e.email = "Please enter a valid email address.";
  if (!(ROLES as readonly string[]).includes(v.role)) e.role = "Please choose one.";
  if (v.message.length > 2000) e.message = "Please keep your message under 2000 characters.";
  if (!v.consent) e.consent = "Please agree so we can reply to you.";
  return e;
}
