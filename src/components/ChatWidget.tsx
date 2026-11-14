"use client";

import { AnimatePresence, motion } from "framer-motion";
import { FormEvent, useEffect, useRef, useState } from "react";
import styles from "./ChatWidget.module.css";

type Msg = { role: "user" | "assistant"; content: string };

const QUICK_STARTS = ["Get a quote", "Book a job", "Rent roll enquiry"];
const GREETING: Msg = {
  role: "assistant",
  content: "Hi! I can help you get a quote, book a job, or set up painting across your rent roll. What do you need?",
};

/** Any element can open the widget: window.dispatchEvent(new CustomEvent("open-chat", { detail: "Get a quote" })) */
export function openChat(prompt?: string) {
  window.dispatchEvent(new CustomEvent("open-chat", { detail: prompt }));
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([GREETING]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const [sessionId] = useState(() =>
    typeof crypto !== "undefined" && "randomUUID" in crypto ? crypto.randomUUID() : String(Date.now()),
  );
  const listRef = useRef<HTMLDivElement>(null);

  async function send(text: string) {
    const content = text.trim();
    if (!content || busy) return;
    const next = [...messages, { role: "user" as const, content }];
    setMessages(next);
    setInput("");
    setBusy(true);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sessionId, messages: next }),
      });
      const data = (await res.json()) as { reply?: string };
      setMessages((m) => [...m, { role: "assistant", content: data.reply ?? "Sorry, something went wrong. Please try again." }]);
    } catch {
      setMessages((m) => [...m, { role: "assistant", content: "Sorry, I couldn't connect. Please try again." }]);
    } finally {
      setBusy(false);
    }
  }

  useEffect(() => {
    const onOpen = (e: Event) => {
      setOpen(true);
      const prompt = (e as CustomEvent<string | undefined>).detail;
      if (prompt) void send(prompt);
    };
    window.addEventListener("open-chat", onOpen);
    return () => window.removeEventListener("open-chat", onOpen);
  });

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, open]);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    void send(input);
  }

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            className={styles.panel}
            role="dialog"
            aria-label="Chat with Elite Master Painting"
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.98 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <header className={styles.header}>
              <span className={styles.title}>Elite Master Painting<small>Usually replies in minutes</small></span>
              <button className={styles.close} onClick={() => setOpen(false)} aria-label="Close chat">×</button>
            </header>
            <div className={styles.list} ref={listRef} aria-live="polite">
              {messages.map((m, i) => (
                <div key={i} className={m.role === "user" ? styles.user : styles.bot}>{m.content}</div>
              ))}
              {busy && <div className={`${styles.bot} ${styles.typing}`}>…</div>}
              {messages.length === 1 && (
                <div className={styles.quick}>
                  {QUICK_STARTS.map((q) => (
                    <button key={q} className={styles.chip} onClick={() => void send(q)}>{q}</button>
                  ))}
                </div>
              )}
            </div>
            <form className={styles.form} onSubmit={onSubmit}>
              <input
                className={styles.input}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type a message…"
                aria-label="Message"
              />
              <button className="btn btn--primary" type="submit" disabled={busy}>Send</button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        className={styles.launcher}
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "Close chat" : "Open chat"}
        aria-expanded={open}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.95 }}
      >
        {open ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18" /></svg>
        ) : (
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M4 5h16v11H9l-5 4z" /><path d="M8 10h8M8 13h5" /></svg>
        )}
      </motion.button>
    </>
  );
}
