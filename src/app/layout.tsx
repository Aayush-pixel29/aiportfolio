import type { Metadata } from "next";
import { Inter, Space_Grotesk, DM_Mono } from "next/font/google";
import { Providers } from "@/components/Providers";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-inter" 
});

const spaceGrotesk = Space_Grotesk({ 
  weight: ["400", "500", "600", "700"], 
  subsets: ["latin"], 
  variable: "--font-space-grotesk" 
});

const dmMono = DM_Mono({ 
  weight: ["400", "500"], 
  subsets: ["latin"], 
  variable: "--font-dm-mono" 
});

export const metadata: Metadata = {
  title: "Aayush Shelar — Software Engineer · AI Builder",
  description: "Software engineer and AI builder building AI systems, full-stack products, developer tools and intelligent applications.",
  openGraph: {
    title: "Aayush Shelar — Software Engineer · AI Builder",
    description: "Software engineer and AI builder building AI systems, full-stack products, developer tools and intelligent applications.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aayush Shelar — Software Engineer · AI Builder",
    description: "Software engineer and AI builder building AI systems, full-stack products, developer tools and intelligent applications.",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${spaceGrotesk.variable} ${dmMono.variable} font-sans bg-background text-ink antialiased min-h-screen relative selection:bg-electric selection:text-white`}>
        <Providers>
          <main className="w-full min-h-screen relative z-10 flex flex-col">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
