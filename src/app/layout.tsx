import type { Metadata } from "next";
import { Inter, Space_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceMono = Space_Mono({ weight: ["400", "700"], subsets: ["latin"], variable: "--font-space-mono" });

export const metadata: Metadata = {
  title: "Aayush Shelar | AI Engineer",
  description: "AI Engineer Portfolio - Phantom Theme",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body className={`${inter.variable} ${spaceMono.variable} font-sans bg-[#0A0A0E] text-white antialiased min-h-screen relative`}>
        {/* Glow Effects in Background */}
        <div className="fixed top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-[#AB9FF2]/10 blur-[120px] pointer-events-none z-0"></div>
        <div className="fixed bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-[#7F56D9]/10 blur-[120px] pointer-events-none z-0"></div>
        
        <main className="w-full min-h-screen relative z-10">
          {children}
        </main>
      </body>
    </html>
  );
}
