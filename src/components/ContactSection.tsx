"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Phone, Mail, MapPin, MessageCircle, Send } from "lucide-react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission (would integrate with backend in production)
    console.log("Form submitted:", formData);
    alert("Thank you for your interest! We'll contact you within 24 hours.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      interest: "",
      message: "",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      content: "+91 98765 43210",
      link: "tel:+919876543210",
    },
    {
      icon: Mail,
      title: "Email",
      content: "contact@financialdoctor.com",
      link: "mailto:contact@financialdoctor.com",
    },
    {
      icon: MapPin,
      title: "Office",
      content: "Mumbai, Maharashtra, India",
      link: "#",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      content: "Chat with us instantly",
      link: "https://wa.me/919876543210",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-[#D4AF37]/10 rounded-full mb-4">
            <span className="text-[#D4AF37]" style={{ fontSize: "0.875rem", fontWeight: 600 }}>Get In Touch</span>
          </div>
          <h2 className="text-[#0A2540] mb-4" style={{ fontSize: "2.5rem", fontWeight: 700 }}>
            Book Your <span className="text-[#D4AF37]">Free Consultation</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto" style={{ fontSize: "1.125rem" }}>
            Let's discuss your financial goals and create a personalized plan for your future
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="hover:shadow-lg transition-shadow duration-300 border-0 bg-gray-50">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-[#0A2540] rounded-lg flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-6 h-6 text-[#D4AF37]" />
                      </div>
                      <div>
                        <h4 className="text-[#0A2540] mb-1" style={{ fontWeight: 600 }}>{info.title}</h4>
                        <a
                          href={info.link}
                          className="text-gray-600 hover:text-[#D4AF37] transition-colors"
                        >
                          {info.content}
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}

            {/* WhatsApp CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-green-600 text-white p-6 rounded-xl"
            >
              <div className="flex items-center gap-3 mb-4">
                <MessageCircle className="w-8 h-8" />
                <div>
                  <h4 style={{ fontWeight: 600, fontSize: "1.125rem" }}>Quick Response</h4>
                  <p style={{ fontSize: "0.875rem" }}>Usually replies within minutes</p>
                </div>
              </div>
              <Button
                className="w-full bg-white text-green-600 hover:bg-gray-100"
                asChild
              >
                <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
                  Chat on WhatsApp
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <Card className="border-0 shadow-xl">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="border-gray-300"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="border-gray-300"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="border-gray-300"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="interest">I'm Interested In *</Label>
                    <Input
                      id="interest"
                      name="interest"
                      placeholder="e.g., Life Insurance, Investment Planning, LIC Career"
                      value={formData.interest}
                      onChange={handleChange}
                      required
                      className="border-gray-300"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us more about your requirements..."
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="border-gray-300 resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-[#0A2540] hover:bg-[#0A2540]/90 text-white group"
                  >
                    <Send className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                    Send Message
                  </Button>

                  <p className="text-center text-gray-500" style={{ fontSize: "0.875rem" }}>
                    We respect your privacy. Your information is secure and will never be shared.
                  </p>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Additional CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-[#0A2540] to-[#1a3a5c] rounded-2xl p-8 md:p-12 text-center text-white"
        >
          <h3 className="mb-4" style={{ fontSize: "2rem", fontWeight: 700 }}>
            Ready to Take the Next Step?
          </h3>
          <p className="text-gray-200 mb-8 max-w-2xl mx-auto" style={{ fontSize: "1.125rem" }}>
            Schedule a free 30-minute consultation to discuss your financial goals and get expert advice
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-[#D4AF37] hover:bg-[#D4AF37]/90 text-[#0A2540]"
            >
              Schedule Free Consultation
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#0A2540]"
            >
              Download Brochure
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
