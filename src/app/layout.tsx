import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-fm-2026.vercel.app"),
  title: "Florencia Méndez Quintana | Portfolio",
  description:
    "Java developer student in Stockholm, former talent acquisition coordinator. Projects, skills and contact.",
  openGraph: {
    title: "Florencia Méndez Quintana | Portfolio",
    description:
      "Java developer student in Stockholm with a talent acquisition background. Projects, skills and contact.",
    type: "website",
    images: [{ url: "/florencia-dark.png", alt: "Florencia Méndez Quintana" }],
  },
  icons: {
    icon: "/fm-dark.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${sora.variable} bg-slate-50 text-slate-900 antialiased dark:bg-slate-950 dark:text-slate-100`}
      >
        {children}
      </body>
    </html>
  );
}
