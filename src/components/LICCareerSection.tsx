"use client";

import { Rocket, IndianRupee, Users, TrendingUp, CheckCircle2, ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function LICCareerSection() {
  const benefits = [
    {
      icon: IndianRupee,
      title: "High Income Potential",
      description: "Earn ₹50,000 - ₹2,00,000+ per month based on your performance",
    },
    {
      icon: Users,
      title: "Work-Life Balance",
      description: "Flexible working hours and be your own boss",
    },
    {
      icon: TrendingUp,
      title: "Unlimited Growth",
      description: "Career advancement opportunities with no ceiling",
    },
    {
      icon: Rocket,
      title: "Complete Training",
      description: "Comprehensive training and ongoing mentorship support",
    },
  ];

  const growthSteps = [
    {
      step: "1",
      title: "Register & Training",
      description: "Complete LIC agent registration and join our comprehensive training program",
    },
    {
      step: "2",
      title: "Start Earning",
      description: "Begin serving clients with our support and earn your first commission",
    },
    {
      step: "3",
      title: "Build Your Team",
      description: "Recruit and train your own team to multiply your income",
    },
    {
      step: "4",
      title: "Achieve Success",
      description: "Reach leadership levels and earn ₹2L+ monthly with passive income",
    },
  ];

  return (
    <section id="lic-career" className="py-20 bg-gradient-to-br from-[#0A2540] via-[#0A2540] to-[#1a3a5c] text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4AF37' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-[#D4AF37]/20 backdrop-blur-sm rounded-full mb-4 border border-[#D4AF37]/30">
            <span className="text-[#D4AF37]" style={{ fontSize: "0.875rem", fontWeight: 600 }}>Start Your Career</span>
          </div>
          <h2 className="text-white mb-4" style={{ fontSize: "2.5rem", fontWeight: 700 }}>
            Become a <span className="text-[#D4AF37]">Successful LIC Agent</span>
          </h2>
          <p className="text-gray-200 max-w-2xl mx-auto" style={{ fontSize: "1.125rem" }}>
            Join India's most trusted insurance company and build a rewarding career with unlimited income potential
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-[#D4AF37]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-[#D4AF37]" />
                  </div>
                  <h3 className="text-white mb-2" style={{ fontWeight: 600 }}>{benefit.title}</h3>
                  <p className="text-gray-300" style={{ fontSize: "0.875rem" }}>
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Growth Roadmap */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-white mb-8" style={{ fontSize: "2rem", fontWeight: 700 }}>
              Your Journey to <span className="text-[#D4AF37]">Financial Freedom</span>
            </h3>

            <div className="space-y-6">
              {growthSteps.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-[#D4AF37] rounded-full flex items-center justify-center" style={{ fontWeight: 700, fontSize: "1.25rem" }}>
                    {step.step}
                  </div>
                  <div>
                    <h4 className="text-white mb-1" style={{ fontWeight: 600, fontSize: "1.125rem" }}>
                      {step.title}
                    </h4>
                    <p className="text-gray-300" style={{ fontSize: "0.875rem" }}>
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1730382624761-af8112d26209?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGdyb3d0aCUyMHN1Y2Nlc3N8ZW58MXx8fHwxNzYyMjQ0Nzc2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Business growth and success"
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>
        </div>

        {/* Requirements & CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/20"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-white mb-4" style={{ fontSize: "1.75rem", fontWeight: 700 }}>
                Basic Requirements
              </h3>
              <div className="space-y-3">
                {[
                  "Minimum 10th Pass (12th preferred)",
                  "Age: 18-60 years",
                  "Good communication skills",
                  "Willingness to learn and grow",
                  "Self-motivated and goal-oriented",
                ].map((requirement) => (
                  <div key={requirement} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#D4AF37] flex-shrink-0" />
                    <span className="text-gray-200">{requirement}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center md:text-right">
              <p className="text-[#D4AF37] mb-2" style={{ fontSize: "0.875rem", fontWeight: 600 }}>
                Limited Spots Available
              </p>
              <h4 className="text-white mb-4" style={{ fontSize: "2rem", fontWeight: 700 }}>
                Join Our Next Batch
              </h4>
              <p className="text-gray-200 mb-6">
                Start your journey to financial independence today
              </p>
              <Button
                size="lg"
                className="bg-[#D4AF37] hover:bg-[#D4AF37]/90 text-[#0A2540] group"
                asChild
              >
                <a href="#contact" className="inline-flex items-center gap-2">
                  Register Now
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <p className="text-gray-300 mt-4" style={{ fontSize: "0.875rem" }}>
                ✓ Free consultation • ✓ No hidden charges
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
