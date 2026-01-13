import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AppProvider from "@/provider";
import { LayoutWrapper } from "@/components/layout/layout-wrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Jejomar Baldoza | Full-Stack Developer & Designer",
    template: "%s | Jejomar Baldoza",
  },
  description:
    "Jejomar Baldoza is a full-stack developer specializing in Next.js, React, TypeScript, and UI design. Building scalable web and mobile applications for startups and businesses worldwide.",
  keywords: [
    "Jejomar Baldoza",
    "Full-Stack Developer",
    "Frontend Developer",
    "Next.js Developer",
    "React Developer",
    "TypeScript",
    "UI Designer",
    "Remote Developer",
    "Philippines",
    "Web Developer",
    "Mobile App Developer",
  ],
  authors: [{ name: "Jejomar Baldoza" }],
  creator: "Jejomar Baldoza",
  publisher: "Jejomar Baldoza",
  metadataBase: new URL("https://jejo.stackhaven.tech"),
  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Jejomar Baldoza | Full-Stack Developer & UI Designer",
    description:
      "Portfolio of Jejomar Baldoza — building modern web and mobile apps using Next.js, React, and TypeScript. Available for remote and project-based work.",
    url: "https://jejo.stackhaven.tech",
    siteName: "Jejomar Baldoza Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Jejomar Baldoza - Full-Stack Developer",
      },
    ],
    locale: "en_US",
    type: "profile",
  },

  twitter: {
    card: "summary_large_image",
    title: "Jejomar Baldoza | Full-Stack Developer",
    description:
      "Full-stack developer specializing in Next.js, React, and UI. Building scalable, production-ready applications.",
    images: ["/og-image.png"],
    creator: "@yourtwitter",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      <AppProvider>
        <LayoutWrapper>
          {children}
        </LayoutWrapper>
      </AppProvider>
      </body>
    </html>
  );
}
