import Link from "next/link";
import { business, nav, services } from "@/content/site";
import { GoogleG, Mail, Phone, WhatsApp } from "./Icons";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.brand}>
          <Link href="/" className={styles.logo}>
            {business.name}
          </Link>
          <p className={styles.tagline}>
            Painting Done Properly,
            <br />
            Built On Preparation.
          </p>
          <div className={styles.social}>
            <a href={business.googleReviews} target="_blank" rel="noopener noreferrer" aria-label="Google reviews">
              <GoogleG />
            </a>
            <a href={business.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <WhatsApp />
            </a>
            <a href={business.phoneHref} aria-label="Call">
              <Phone />
            </a>
            <a href={`mailto:${business.email}`} aria-label="Email">
              <Mail />
            </a>
          </div>
        </div>

        <nav className={styles.cols} aria-label="Footer">
          <div>
            <h4>Navigate</h4>
            <ul>
              {nav.map((n) => (
                <li key={n.href}>
                  <Link href={n.href}>{n.label}</Link>
                </li>
              ))}
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4>Services</h4>
            <ul>
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`}>{s.short}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Legal</h4>
            <ul>
              <li>
                <Link href="/privacy-policy">Privacy Policy</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <ul>
              <li>
                <a href={`mailto:${business.email}`}>{business.email}</a>
              </li>
              <li>
                <a href={business.phoneHref}>{business.phone}</a>
              </li>
              <li>Melbourne Wide</li>
              <li>ABN {business.abn}</li>
            </ul>
          </div>
        </nav>
      </div>

      <div className={styles.rule} />

      <div className={styles.bottom}>
        <span>Fully insured · $20M public liability · 7-year workmanship warranty</span>
        <span>
          © {new Date().getFullYear()} {business.name}. All Rights Reserved | {business.location}
        </span>
      </div>
    </footer>
  );
}
