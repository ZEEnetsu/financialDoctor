"use client";

import { Button } from "./ui/button";
import { ArrowRight, Shield, TrendingUp } from "lucide-react";
import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden bg-gradient-to-br from-[#0A2540] via-[#0A2540] to-[#1a3a5c]">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4AF37' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-[#D4AF37]/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-[#D4AF37]/30"
            >
              <Shield className="w-4 h-4 text-[#D4AF37]" />
              <span className="text-[#D4AF37]" style={{ fontSize: "0.875rem" }}>Certified LIC Advisor</span>
            </motion.div>

            <h1 className="text-white mb-6" style={{ fontSize: "3rem", fontWeight: 800, lineHeight: 1.1 }}>
              Your Life, Your Wealth —{" "}
              <span className="text-[#D4AF37]">Secured by Financial Doctor</span>
            </h1>

            <p className="text-gray-300 mb-8" style={{ fontSize: "1.125rem", lineHeight: 1.7 }}>
              Certified LIC Advisor helping families grow wealth & future LIC leaders rise. 
              Your trusted partner in life insurance, investment planning, and financial freedom.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-[#D4AF37] hover:bg-[#D4AF37]/90 text-[#0A2540] group"
                asChild
              >
                <a href="#contact" className="flex items-center gap-2">
                  Get Insured
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#0A2540]"
                asChild
              >
                <a href="#lic-career">Start Your LIC Journey</a>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-12 border-t border-white/20">
              <div>
                <div className="text-[#D4AF37]" style={{ fontSize: "2rem", fontWeight: 700 }}>500+</div>
                <div className="text-gray-300" style={{ fontSize: "0.875rem" }}>Families Insured</div>
              </div>
              <div>
                <div className="text-[#D4AF37]" style={{ fontSize: "2rem", fontWeight: 700 }}>₹50Cr+</div>
                <div className="text-gray-300" style={{ fontSize: "0.875rem" }}>Coverage Secured</div>
              </div>
              <div>
                <div className="text-[#D4AF37]" style={{ fontSize: "2rem", fontWeight: 700 }}>15+</div>
                <div className="text-gray-300" style={{ fontSize: "0.875rem" }}>Years Experience</div>
              </div>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1761891915873-4d5cfb454dc9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBmaW5hbmNpYWwlMjBhZHZpc29yJTIwZmFtaWx5fGVufDF8fHx8MTc2MjMwNjc0MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Financial advisor helping family"
                className="w-full h-auto object-cover"
              />
              {/* Floating Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute bottom-6 left-6 bg-white p-4 rounded-xl shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <TrendingUp className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <div className="text-gray-500" style={{ fontSize: "0.75rem" }}>Portfolio Growth</div>
                    <div className="text-green-600" style={{ fontSize: "1.25rem", fontWeight: 700 }}>+24.5%</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
