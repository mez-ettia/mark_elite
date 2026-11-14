"use client";

import { openChat } from "./ChatWidget";

type Props = { label: string; prompt?: string; variant?: "primary" | "secondary"; block?: boolean; className?: string };

/** A button that opens the chat widget (quotes, bookings, rent roll enquiries). */
export default function ChatButton({ label, prompt, variant = "primary", block, className = "" }: Props) {
  return (
    <button
      type="button"
      className={`btn btn--${variant}${block ? " btn--block" : ""} ${className}`}
      onClick={() => openChat(prompt ?? label)}
    >
      {label}
    </button>
  );
}
