"use client";

import { FormEvent, useState } from "react";
import styles from "./QuoteForm.module.css";

const TYPES = ["Real estate / rent roll", "Interior painting", "Exterior painting", "Roofs & floors", "Commercial", "Other"];

/** Quote request form → /api/quote (forwards to GoHighLevel when configured). */
export default function QuoteForm() {
  const [state, setState] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setState("sending");
    try {
      const res = await fetch("/api/quote", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
      if (!res.ok) throw new Error();
      setState("sent");
      form.reset();
    } catch {
      setState("error");
    }
  }

  if (state === "sent") {
    return (
      <div className={styles.done} role="status">
        <h3 className="h3">Request Sent</h3>
        <p className="lead">Thanks — we&apos;ll get back to you, usually within a day, with a fixed, no-surprises quote.</p>
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <div className={styles.grid}>
        <label>
          <span>First Name</span>
          <input name="firstName" required autoComplete="given-name" placeholder="Jane" />
        </label>
        <label>
          <span>Last Name</span>
          <input name="lastName" autoComplete="family-name" placeholder="Smith" />
        </label>
        <label>
          <span>Email</span>
          <input name="email" type="email" required autoComplete="email" placeholder="jane@agency.com.au" />
        </label>
        <label>
          <span>Phone Number</span>
          <input name="phone" type="tel" autoComplete="tel" placeholder="04xx xxx xxx" />
        </label>
        <label className={styles.half}>
          <span>Project Type</span>
          <select name="projectType" defaultValue={TYPES[0]}>
            {TYPES.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </label>
        <label className={styles.half}>
          <span>Property Address (optional)</span>
          <input name="address" autoComplete="street-address" placeholder="Suburb or full address" />
        </label>
        <label className={styles.full}>
          <span>Tell Us About Your Project</span>
          <textarea name="message" rows={5} required placeholder="Rooms, surfaces, timing, vacancy dates, number of properties…" />
        </label>
        <input name="company" tabIndex={-1} autoComplete="off" className="visually-hidden" aria-hidden="true" />
      </div>
      <div className={styles.actions}>
        <button className="btn btn--secondary" type="submit" disabled={state === "sending"}>
          {state === "sending" ? "Sending…" : "Send Request"}
        </button>
        {state === "error" && <p className={styles.err}>Something went wrong. Please call or WhatsApp us instead.</p>}
      </div>
    </form>
  );
}
