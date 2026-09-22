import type { Metadata } from "next";
import { Inter, Space_Grotesk, IBM_Plex_Mono } from "next/font/google";
import { Providers } from "@/components/Providers";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-inter" 
});

const spaceGrotesk = Space_Grotesk({ 
  weight: ["400", "500", "600"], 
  subsets: ["latin"], 
  variable: "--font-space-grotesk" 
});

const ibmPlexMono = IBM_Plex_Mono({ 
  weight: ["400", "500"], 
  subsets: ["latin"], 
  variable: "--font-ibm-plex-mono" 
});

export const metadata: Metadata = {
  title: "Aayush Shelar | AI Engineer",
  description: "AI Engineer specializing in RAG, multi-agent orchestration, and edge AI deployed where connectivity fails.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${spaceGrotesk.variable} ${ibmPlexMono.variable} font-sans bg-background text-text antialiased min-h-screen relative selection:bg-signal-cyan selection:text-background`}>
        <Providers>
          <main className="w-full min-h-screen relative z-10 flex flex-col">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
