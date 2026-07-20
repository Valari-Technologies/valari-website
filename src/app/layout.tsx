import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Navbar, Footer } from "@/components/layout";
import { AnimationProvider } from "@/providers/AnimationProvider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Valari Technologies | Powering Digital Growth",
  description: "Delivering enterprise technology solutions, IT consulting, cloud infrastructure, and custom software development services.",
  keywords: [
    "Valari Technologies",
    "Enterprise Software",
    "IT Consulting",
    "Cloud Solutions",
    "Custom Software Development",
    "Chennai IT company",
  ],
  authors: [{ name: "Valari Technologies" }],
  creator: "Valari Technologies",
  publisher: "Valari Technologies",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Valari Technologies | Powering Digital Growth",
    description: "Enterprise technology solutions, IT consulting, cloud infrastructure, and custom software development.",
    url: "https://valari.co.in",
    siteName: "Valari Technologies",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Valari Technologies | Powering Digital Growth",
    description: "Enterprise technology solutions, IT consulting, cloud infrastructure, and custom software development.",
  },
};

export const viewport: Viewport = {
  themeColor: "#0b3d91",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

import { LazyMotion, domMax } from "framer-motion";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground selection:bg-primary/10 selection:text-primary">
        <LazyMotion features={domMax} strict>
          <Navbar />
          <main className="flex-grow flex flex-col">
            <AnimationProvider>{children}</AnimationProvider>
          </main>
          <Footer />
        </LazyMotion>
      </body>
    </html>
  );
}
