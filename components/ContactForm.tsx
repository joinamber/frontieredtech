"use client";
import { useState } from "react";
import { Loader2 } from "lucide-react";
import { ROLES, validate, type ContactInput, type FieldErrors } from "@/lib/contact";

type Status = "idle" | "loading" | "success" | "error";
const empty: ContactInput = { name: "", email: "", role: "", message: "", consent: false };

const field = "w-full border-0 border-b border-ink/30 bg-transparent py-3 text-lg outline-none transition-colors placeholder:text-muted/60 focus:border-ink focus-visible:outline-none";

export function ContactForm() {
  const [v, setV] = useState<ContactInput>(empty);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [serverError, setServerError] = useState("");
  const [honey, setHoney] = useState("");

  const set = <K extends keyof ContactInput>(k: K, val: ContactInput[K]) => {
    setV((p) => ({ ...p, [k]: val }));
    if (errors[k]) setErrors((p) => ({ ...p, [k]: undefined }));
  };

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate(v);
    setErrors(errs);
    if (Object.keys(errs).length) {
      document.getElementById(`f-${Object.keys(errs)[0]}`)?.focus();
      return;
    }
    setStatus("loading");
    setServerError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...v, website: honey }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        if (data.errors) setErrors(data.errors);
        setServerError(data.error ?? "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }
      setStatus("success");
      setV(empty);
    } catch {
      setServerError("Network error. Please check your connection and try again.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div role="status" className="border-t border-ink/20 py-10">
        <p className="display text-[clamp(1.75rem,3.4vw,2.75rem)]">Thank you. <span className="hl">We&apos;ll be in touch.</span></p>
        <p className="mt-4 text-lg text-muted">Your message has been received.</p>
        <button type="button" onClick={() => setStatus("idle")} className="ulink mt-8 pb-0.5 font-medium">Send another</button>
      </div>
    );
  }

  const err = (k: keyof ContactInput) => errors[k] && <p id={`e-${k}`} className="mt-2 text-sm text-[#b42318]">{errors[k]}</p>;
  const aria = (k: keyof ContactInput) => ({ "aria-invalid": !!errors[k], "aria-describedby": errors[k] ? `e-${k}` : undefined });

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-8" aria-label="Join the conversation">
      <div className="absolute -left-[9999px]" aria-hidden>
        <label>Website<input tabIndex={-1} autoComplete="off" value={honey} onChange={(e) => setHoney(e.target.value)} /></label>
      </div>

      <div>
        <label htmlFor="f-name" className="label text-muted">Name</label>
        <input id="f-name" className={field} autoComplete="name" value={v.name} onChange={(e) => set("name", e.target.value)} {...aria("name")} />
        {err("name")}
      </div>
      <div>
        <label htmlFor="f-email" className="label text-muted">Email</label>
        <input id="f-email" type="email" className={field} autoComplete="email" value={v.email} onChange={(e) => set("email", e.target.value)} {...aria("email")} />
        {err("email")}
      </div>
      <fieldset>
        <legend className="label text-muted">I am a</legend>
        <div id="f-role" tabIndex={-1} className="mt-3 flex flex-wrap gap-3" {...aria("role")}>
          {ROLES.map((r) => (
            <label key={r} className={`cursor-pointer rounded-full border px-5 py-3 text-[15px] transition-colors has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 ${v.role === r ? "border-ink bg-lime" : "border-ink/30 hover:border-ink"}`}>
              <input type="radio" name="role" value={r} checked={v.role === r} onChange={() => set("role", r)} className="sr-only" />
              {r}
            </label>
          ))}
        </div>
        {err("role")}
      </fieldset>
      <div>
        <label htmlFor="f-message" className="label text-muted">Message <span className="normal-case tracking-normal">(optional)</span></label>
        <textarea id="f-message" rows={4} className={`${field} resize-y`} value={v.message} onChange={(e) => set("message", e.target.value)} {...aria("message")} />
        {err("message")}
      </div>
      <div>
        <label className="flex min-h-11 cursor-pointer items-start gap-3 text-[15px] leading-relaxed text-muted">
          <input id="f-consent" type="checkbox" checked={v.consent} onChange={(e) => set("consent", e.target.checked)} className="mt-0.5 size-5 accent-ink" {...aria("consent")} />
          <span>I agree that Frontier EdTech may store my details and contact me about this conversation.</span>
        </label>
        {err("consent")}
      </div>

      <div aria-live="polite">
        {status === "error" && <p role="alert" className="border-l-2 border-[#b42318] pl-4 text-[#b42318]">{serverError}</p>}
      </div>

      <button type="submit" disabled={status === "loading"} className="group inline-flex items-center gap-3 rounded-full bg-ink px-8 py-4 text-base font-medium text-paper transition-colors hover:bg-lime hover:text-ink disabled:opacity-60">
        {status === "loading" ? (<><Loader2 aria-hidden className="size-5 animate-spin" />Sending…</>) : (<>Join the Conversation <span aria-hidden className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span></>)}
      </button>
    </form>
  );
}
