"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { Menu, X, Shield } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Success Stories", href: "#testimonials" },
    { name: "Join LIC", href: "#lic-career" },
    { name: "IC38 Prep", href: "#ic38-prep" },
    { name: "Blog", href: "#blog" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="bg-[#0A2540] p-2 rounded-lg">
              <Shield className="w-6 h-6 text-[#D4AF37]" />
            </div>
            <span className="text-[#0A2540]" style={{ fontSize: "1.25rem", fontWeight: 700 }}>
              Financial Doctor
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-[#0A2540] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <Button
              className="bg-[#0A2540] hover:bg-[#0A2540]/90 text-white"
              asChild
            >
              <a href="#contact">Get Started</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-[#0A2540]"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-200"
          >
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block py-2 text-gray-700 hover:text-[#0A2540] transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <Button
                className="w-full bg-[#0A2540] hover:bg-[#0A2540]/90 text-white"
                asChild
              >
                <a href="#contact">Get Started</a>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
