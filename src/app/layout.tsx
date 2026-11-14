import type { Metadata } from "next";
import { Anton, Archivo } from "next/font/google";
import "./globals.css";
import ChatWidget from "@/components/ChatWidget";
import Footer from "@/components/Footer";
import SiteNav from "@/components/SiteNav";
import { business } from "@/content/site";

const anton = Anton({ subsets: ["latin"], weight: "400", variable: "--font-anton", display: "swap" });
const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
  variable: "--font-archivo",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://elitemasterpainting.com.au"),
  title: {
    default: `House Painters Melbourne | Real Estate & Rent Roll Painting | ${business.name}`,
    template: `%s | ${business.name}`,
  },
  description:
    "Premium interior and exterior painting across Melbourne for homeowners, real estate agencies and rent rolls. Digital quotes, photo reporting, fixed prices and $20M public liability.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-AU" className={`${anton.variable} ${archivo.variable}`}>
      <body>
        <SiteNav />
        <main>{children}</main>
        <Footer />
        <ChatWidget />
      </body>
    </html>
  );
}
