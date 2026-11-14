type P = { size?: number; className?: string };

export const ArrowRight = ({ size = 16, className }: P) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
    <path d="M4 12h16M14 6l6 6-6 6" />
  </svg>
);

export const ChevronLeft = ({ size = 20, className }: P) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
    <path d="M15 5l-7 7 7 7" />
  </svg>
);

export const ChevronRight = ({ size = 20, className }: P) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
    <path d="M9 5l7 7-7 7" />
  </svg>
);

export const Plus = ({ size = 20, className }: P) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
    <path d="M12 3v18M3 12h18" />
  </svg>
);

export const Cross = ({ size = 20, className }: P) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
    <path d="M5 5l14 14M19 5L5 19" />
  </svg>
);

export const CheckCircle = ({ size = 16, className }: P) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
    <circle cx="12" cy="12" r="9.5" />
    <path d="M8 12.5l2.7 2.7L16 9.8" />
  </svg>
);

export const Star = ({ size = 22, className }: P) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2.5l2.9 6.1 6.6.8-4.9 4.6 1.3 6.6L12 17.3l-5.9 3.3 1.3-6.6L2.5 9.4l6.6-.8z" />
  </svg>
);

export const Quote = ({ size = 28, className, flip }: P & { flip?: boolean }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 28 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true" style={flip ? { transform: "rotate(180deg)" } : undefined}>
    <path d="M11 3C6 4.5 3 8.5 3 14v7h8v-8H6.5C6.8 9.5 8.6 7.3 11.5 6.2zM25 3c-5 1.5-8 5.5-8 11v7h8v-8h-4.5c.3-3.5 2.1-5.7 5-6.8z" />
  </svg>
);

export const Phone = ({ size = 22, className }: P) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
    <path d="M5 3h4l2 5-2.5 1.5a11 11 0 005 5L15 12l5 2v4a2 2 0 01-2 2A16 16 0 013 5a2 2 0 012-2z" />
  </svg>
);

export const WhatsApp = ({ size = 22, className }: P) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
    <path d="M4 20l1.3-4A8.5 8.5 0 1112 20.5a8.4 8.4 0 01-4-1z" />
    <path d="M9 8.5c0 3.5 3 6.5 6.5 6.5l1-1.5-2-1-1 .8a4.5 4.5 0 01-2.3-2.3l.8-1-1-2z" />
  </svg>
);

export const Mail = ({ size = 22, className }: P) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="M3.5 6l8.5 7 8.5-7" />
  </svg>
);

export const GoogleG = ({ size = 22, className }: P) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
    <path d="M20 12.2c0-.6-.1-1.2-.2-1.7H12v3.3h4.5a4.6 4.6 0 01-4.5 3.4 5.2 5.2 0 110-10.4c1.3 0 2.5.5 3.4 1.3l2.4-2.4A8.6 8.6 0 1020 12.2z" />
  </svg>
);
