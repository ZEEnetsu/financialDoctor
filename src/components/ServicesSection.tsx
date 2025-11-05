"use client";

import { Shield, TrendingUp, PiggyBank, Briefcase, CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";

export function ServicesSection() {
  const services = [
    {
      icon: Shield,
      title: "Life Insurance",
      description: "Comprehensive life insurance plans to protect your family's future and provide financial security.",
      features: [
        "Term Life Insurance",
        "Whole Life Coverage",
        "Child Education Plans",
        "Pension Plans",
      ],
      color: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      icon: TrendingUp,
      title: "Investment Planning",
      description: "Strategic investment solutions designed to grow your wealth and achieve your financial goals.",
      features: [
        "Mutual Funds",
        "ULIP Plans",
        "Tax-Saving Investments",
        "Portfolio Management",
      ],
      color: "bg-green-100",
      iconColor: "text-green-600",
    },
    {
      icon: PiggyBank,
      title: "Retirement Plans",
      description: "Secure your golden years with smart retirement planning and pension solutions.",
      features: [
        "Pension Plans",
        "Retirement Corpus Building",
        "Annuity Solutions",
        "Senior Citizen Plans",
      ],
      color: "bg-purple-100",
      iconColor: "text-purple-600",
    },
    {
      icon: Briefcase,
      title: "LIC Career Mentorship",
      description: "Start your journey as a successful LIC agent with comprehensive training and support.",
      features: [
        "Complete Training Program",
        "Sales Strategy Guidance",
        "Business Development Support",
        "Ongoing Mentorship",
      ],
      color: "bg-amber-100",
      iconColor: "text-amber-600",
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-[#D4AF37]/10 rounded-full mb-4">
            <span className="text-[#D4AF37]" style={{ fontSize: "0.875rem", fontWeight: 600 }}>Our Services</span>
          </div>
          <h2 className="text-[#0A2540] mb-4" style={{ fontSize: "2.5rem", fontWeight: 700 }}>
            Comprehensive Financial Solutions
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto" style={{ fontSize: "1.125rem" }}>
            From life insurance to career guidance, we provide everything you need for financial success
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-xl transition-shadow duration-300 border-0 overflow-hidden group">
                <CardContent className="p-8">
                  <div className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className={`w-8 h-8 ${service.iconColor}`} />
                  </div>

                  <h3 className="text-[#0A2540] mb-3" style={{ fontSize: "1.5rem", fontWeight: 700 }}>
                    {service.title}
                  </h3>

                  <p className="text-gray-600 mb-6" style={{ lineHeight: 1.7 }}>
                    {service.description}
                  </p>

                  <div className="space-y-3 mb-6">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button
                    variant="outline"
                    className="w-full border-[#0A2540] text-[#0A2540] hover:bg-[#0A2540] hover:text-white"
                    asChild
                  >
                    <a href="#contact">Learn More</a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-[#0A2540] to-[#1a3a5c] rounded-2xl p-8 md:p-12 text-center"
        >
          <h3 className="text-white mb-4" style={{ fontSize: "2rem", fontWeight: 700 }}>
            Ready to Secure Your Financial Future?
          </h3>
          <p className="text-gray-200 mb-8 max-w-2xl mx-auto" style={{ fontSize: "1.125rem" }}>
            Get a personalized financial plan tailored to your family's needs. Book your free consultation today.
          </p>
          <Button
            size="lg"
            className="bg-[#D4AF37] hover:bg-[#D4AF37]/90 text-[#0A2540]"
            asChild
          >
            <a href="#contact">Book Free Consultation</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
