"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '../ui/Button';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Journey', href: '#journey' },
    { name: 'Work', href: '#work' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'py-4' : 'py-6'
        } px-6 md:px-12 flex justify-center`}
      >
        <div
          className={`flex items-center justify-between w-full max-w-6xl transition-all duration-300 ${
            scrolled
              ? 'bg-paper/80 backdrop-blur-md border border-ink/5 shadow-sm rounded-2xl px-6 py-3'
              : 'bg-transparent px-2'
          }`}
        >
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-3 relative z-50">
            <div className="w-10 h-10 rounded-full bg-ink text-paper flex items-center justify-center font-display font-medium text-lg transition-transform group-hover:scale-105">
              AS
            </div>
            <span className="font-display font-medium text-ink hidden sm:block text-lg">
              Aayush Shelar
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-ink/70 hover:text-electric transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <div className="h-4 w-px bg-ink/10" />
            <Button href="#contact" variant="primary" className="!px-5 !py-2.5">
              Let&apos;s talk ↗
            </Button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden relative z-50 p-2 text-ink"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-paper/95 backdrop-blur-md flex flex-col items-center justify-center pt-20 px-6"
          >
            <nav className="flex flex-col items-center gap-8 w-full">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-display text-3xl font-medium text-ink hover:text-electric transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <div className="w-12 h-px bg-ink/10 my-4" />
              <Button
                href="#contact"
                variant="primary"
                className="w-full max-w-xs !py-4 text-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                Let&apos;s talk ↗
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
