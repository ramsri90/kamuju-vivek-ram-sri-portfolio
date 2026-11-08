import type { Metadata } from "next";
import { Syne, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "KAMUJU VIVEK RAM SRI // AI-NATIVE FULL-STACK ARCHITECT",
  description:
    "Portfolio of Kamuju Vivek Ram Sri. B.Tech Data Science & Full-Stack Developer at WebbHeads. Shipped 5+ live AI & web products.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${jetbrainsMono.variable} ${spaceGrotesk.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[#F0F7FF] text-[#0B1528] selection:bg-sky-200 selection:text-sky-900 font-body">
        {children}
      </body>
    </html>
  );
}
