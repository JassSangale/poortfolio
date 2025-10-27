import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import { Providers } from "./providers";
import Starfield from "@/components/Starfield"; // <-- add this import

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Neon UI",
  description: "Futuristic cyber UI with Tailwind + Geist",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
      style={{ "--background": "#000000", "--foreground": "#E6EEFF" }}
    >
      {/* Tailwind fallback classes ensure black background immediately */}
      <body className="antialiased bg-black text-[var(--foreground)]">
        {/* Stars canvas behind all content */}
        <Starfield
          density={0.0015}        // adjust 0.001–0.002 for more/less stars
          speed={0.06}            // 0.04–0.08 for gentle drift
          color="200,120,255"     // soft violet tint to match your theme
          maxAlpha={0.85}         // peak twinkle brightness
        />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
