import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import "./globals.css";

const kanit = Kanit({
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  subsets: ["latin"],
  variable: "--font-kanit"
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
    <html lang="en" className="scroll-smooth bg-[#0C0C0C]">
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
      <body className={`${kanit.variable} font-['Kanit',sans-serif] bg-[#0C0C0C] text-[#D7E2EA] antialiased min-h-screen relative selection:bg-[#B600A8]/30 selection:text-white`} style={{ overflowX: 'clip' }}>
        {children}
      </body>
    </html>
  );
}
