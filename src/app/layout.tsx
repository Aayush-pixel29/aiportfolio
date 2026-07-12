import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { Code, User, Mail } from "lucide-react";

const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

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
      <body className={`${outfit.variable} font-sans antialiased bg-background text-foreground flex flex-col min-h-screen`}>
        
        {/* Navigation */}
        <header className="sticky top-0 z-50 glass-panel border-b border-border/40">
          <div className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full border-2 border-foreground flex items-center justify-center font-bold text-sm">
                AS
              </div>
              <span className="font-semibold tracking-wider uppercase text-sm">Aayush Shelar</span>
            </div>
            
            <nav className="hidden md:flex items-center gap-8 text-xs font-bold tracking-[0.2em] uppercase">
              <Link href="#about" className="hover:text-primary transition-colors">About</Link>
              <Link href="#work" className="hover:text-primary transition-colors">Work</Link>
              <Link href="#toolkit" className="hover:text-primary transition-colors">Toolkit</Link>
              <Link href="#experience" className="hover:text-primary transition-colors">Experience</Link>
            </nav>

            <div className="flex items-center gap-4">
              <a href="https://github.com/Aayush-pixel29" target="_blank" rel="noreferrer" className="text-muted hover:text-foreground transition-colors">
                <Code size={20} />
              </a>
              <a href="https://www.linkedin.com/in/aayush-shelar-166b99249/" target="_blank" rel="noreferrer" className="text-muted hover:text-foreground transition-colors">
                <User size={20} />
              </a>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1">
          {children}
        </main>

        {/* Footer */}
        <footer className="border-t border-border py-8 mt-20">
          <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted">
              © {new Date().getFullYear()} Aayush Shelar. All rights reserved.
            </p>
            <div className="flex gap-4">
              <a href="mailto:aayushshelar@gmail.com" className="text-muted hover:text-foreground transition-colors">
                <Mail size={20} />
              </a>
              <a href="https://github.com/Aayush-pixel29" target="_blank" rel="noreferrer" className="text-muted hover:text-foreground transition-colors">
                <Code size={20} />
              </a>
              <a href="https://www.linkedin.com/in/aayush-shelar-166b99249/" target="_blank" rel="noreferrer" className="text-muted hover:text-foreground transition-colors">
                <User size={20} />
              </a>
            </div>
          </div>
        </footer>

      </body>
    </html>
  );
}
