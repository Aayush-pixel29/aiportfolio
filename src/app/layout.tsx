import type { Metadata } from "next";
import { Inter, Space_Grotesk, DM_Mono } from "next/font/google";
import { Providers } from "@/components/Providers";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-inter" 
});

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"], 
  variable: "--font-space-grotesk" 
});

const dmMono = DM_Mono({ 
  weight: "400", 
  subsets: ["latin"], 
  variable: "--font-dm-mono" 
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aiportfolio-kappa.vercel.app"),
  title: "Aayush Shelar — Software Engineer · AI Builder",
  description: "Software engineer and AI builder building AI systems, full-stack products, developer tools and intelligent applications.",
  openGraph: {
    title: "Aayush Shelar — Software Engineer · AI Builder",
    description: "Software engineer and AI builder building AI systems, full-stack products, developer tools and intelligent applications.",
    type: "website",
    url: "https://aiportfolio-kappa.vercel.app",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Aayush Shelar - Software Engineer & AI Builder",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aayush Shelar — Software Engineer · AI Builder",
    description: "Software engineer and AI builder building AI systems, full-stack products, developer tools and intelligent applications.",
    images: ["/opengraph-image.png"],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Aayush Shelar",
              "jobTitle": "Software Engineer / AI Builder",
              "url": "https://aiportfolio-kappa.vercel.app/",
              "sameAs": [
                "https://github.com/Aayush-pixel29",
                "https://www.linkedin.com/in/aayush-shelar-166b99249/"
              ]
            })
          }}
        />
      </head>
      <body className={`${inter.variable} ${spaceGrotesk.variable} ${dmMono.variable} font-sans bg-bg text-ink antialiased min-h-screen relative selection:bg-blue selection:text-white`}>
        <Providers>
          <main className="w-full min-h-screen relative z-10 flex flex-col">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
