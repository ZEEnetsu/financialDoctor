"use client";

import { Shield, Facebook, Twitter, Linkedin, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Success Stories", href: "#testimonials" },
    { name: "Join LIC", href: "#lic-career" },
  ];

  const services = [
    { name: "Life Insurance", href: "#services" },
    { name: "Investment Planning", href: "#services" },
    { name: "Retirement Plans", href: "#services" },
    { name: "LIC Career", href: "#lic-career" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ];

  return (
    <footer className="bg-[#0A2540] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-white p-2 rounded-lg">
                <Shield className="w-6 h-6 text-[#D4AF37]" />
              </div>
              <span className="text-white" style={{ fontSize: "1.25rem", fontWeight: 700 }}>
                Financial Doctor
              </span>
            </div>
            <p className="text-gray-300 mb-6" style={{ lineHeight: 1.7 }}>
              Your trusted partner in life insurance, investment planning, and financial freedom.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-white/10 hover:bg-[#D4AF37] rounded-full flex items-center justify-center transition-colors duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white mb-4" style={{ fontSize: "1.125rem", fontWeight: 600 }}>
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-[#D4AF37] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white mb-4" style={{ fontSize: "1.125rem", fontWeight: 600 }}>
              Services
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <a
                    href={service.href}
                    className="text-gray-300 hover:text-[#D4AF37] transition-colors"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white mb-4" style={{ fontSize: "1.125rem", fontWeight: 600 }}>
              Contact Us
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                <a href="tel:+919876543210" className="text-gray-300 hover:text-[#D4AF37] transition-colors">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                <a href="mailto:contact@financialdoctor.com" className="text-gray-300 hover:text-[#D4AF37] transition-colors">
                  contact@financialdoctor.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">
                  Mumbai, Maharashtra, India
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-300 text-center md:text-left">
              © {currentYear} Financial Doctor. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-300 hover:text-[#D4AF37] transition-colors" style={{ fontSize: "0.875rem" }}>
                Privacy Policy
              </a>
              <a href="#" className="text-gray-300 hover:text-[#D4AF37] transition-colors" style={{ fontSize: "0.875rem" }}>
                Terms of Service
              </a>
              <a href="#" className="text-gray-300 hover:text-[#D4AF37] transition-colors" style={{ fontSize: "0.875rem" }}>
                Disclaimer
              </a>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mt-6 pt-6 border-t border-white/10">
            <p className="text-gray-400 text-center" style={{ fontSize: "0.75rem", lineHeight: 1.6 }}>
              Disclaimer: Financial Doctor is an authorized LIC agent. All insurance products are subject to terms and conditions. 
              Please read all scheme-related documents carefully before investing. Past performance is not indicative of future results.
            </p>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/919876543210"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg z-50 transition-all duration-300 hover:scale-110"
        aria-label="Chat on WhatsApp"
      >
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      </a>
    </footer>
  );
}
