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
  title: "Aayush Shelar — AI Engineer | Agentic Systems · Computer Vision · Full-Stack",
  description: "AI Engineer building agentic AI systems, computer vision applications, developer tools, and full-stack products — from architecture to deployment. Based in Mumbai, India.",
  keywords: [
    "AI Engineer",
    "Machine Learning Engineer",
    "Agentic AI",
    "Multi-Agent Systems",
    "Computer Vision",
    "Full Stack AI",
    "PyTorch",
    "LangGraph",
    "Next.js",
    "FastAPI",
    "Aayush Shelar",
    "Portfolio"
  ],
  authors: [{ name: "Aayush Shelar", url: "https://aiportfolio-kappa.vercel.app" }],
  creator: "Aayush Shelar",
  openGraph: {
    title: "Aayush Shelar — AI Engineer | Agentic Systems · Computer Vision · Full-Stack",
    description: "AI Engineer building agentic AI systems, computer vision applications, developer tools, and full-stack products — from architecture to deployment.",
    type: "website",
    url: "https://aiportfolio-kappa.vercel.app",
    siteName: "Aayush Shelar Portfolio",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Aayush Shelar - AI Engineer | Agentic Systems · Computer Vision · Full-Stack",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aayush Shelar — AI Engineer | Agentic Systems · Computer Vision · Full-Stack",
    description: "AI Engineer building agentic AI systems, computer vision applications, developer tools, and full-stack products — from architecture to deployment.",
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
              "jobTitle": "AI Engineer / AI & Software Builder",
              "url": "https://aiportfolio-kappa.vercel.app/",
              "sameAs": [
                "https://github.com/Aayush-pixel29",
                "https://www.linkedin.com/in/aayush-shelar-166b99249/"
              ],
              "knowsAbout": [
                "Agentic AI",
                "Computer Vision",
                "Multi-Agent Systems",
                "Machine Learning",
                "Full Stack Web Development",
                "PyTorch",
                "LangGraph",
                "FastAPI",
                "Next.js"
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
