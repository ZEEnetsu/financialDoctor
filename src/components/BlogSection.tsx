"use client";

import { Calendar, Clock, ArrowRight, BookOpen } from "lucide-react";
import { motion } from "motion/react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function BlogSection() {
  const articles = [
    {
      title: "5 Essential Life Insurance Plans Every Family Should Consider",
      excerpt: "Discover the must-have life insurance policies that provide comprehensive coverage for your family's future security and peace of mind.",
      category: "Life Insurance",
      readTime: "5 min read",
      date: "Oct 15, 2024",
      image: "https://images.unsplash.com/photo-1589169011402-8b2cbd1ee593?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGluZGlhbiUyMGZhbWlseXxlbnwxfHx8fDE3NjIzMDY3NDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      title: "How to Build a Retirement Corpus of ₹1 Crore in 20 Years",
      excerpt: "A step-by-step guide to creating a solid retirement plan that ensures financial independence in your golden years.",
      category: "Retirement Planning",
      readTime: "7 min read",
      date: "Oct 10, 2024",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNpYWwlMjBwbGFubmluZ3xlbnwxfHx8fDE3NjIyNDE3NjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      title: "Tax-Saving Investment Options Under Section 80C",
      excerpt: "Learn about the best tax-saving investment instruments that help you save money while building wealth for the future.",
      category: "Tax Planning",
      readTime: "6 min read",
      date: "Oct 5, 2024",
      image: "https://images.unsplash.com/photo-1730382624761-af8112d26209?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnZlc3RtZW50JTIwZ3Jvd3RoJTIwY2hhcnR8ZW58MXx8fHwxNzYyMjg4NzY1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
  ];

  return (
    <section id="blog" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-[#D4AF37]/10 rounded-full mb-4">
            <span className="text-[#D4AF37]" style={{ fontSize: "0.875rem", fontWeight: 600 }}>Financial Tips</span>
          </div>
          <h2 className="text-[#0A2540] mb-4" style={{ fontSize: "2.5rem", fontWeight: 700 }}>
            Latest <span className="text-[#D4AF37]">Insights & Articles</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto" style={{ fontSize: "1.125rem" }}>
            Expert advice and educational content to help you make informed financial decisions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {articles.map((article, index) => (
            <motion.div
              key={article.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 overflow-hidden group cursor-pointer">
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-[#D4AF37] text-[#0A2540] px-3 py-1 rounded-full" style={{ fontSize: "0.75rem", fontWeight: 600 }}>
                    {article.category}
                  </div>
                </div>

                <CardContent className="p-6">
                  <div className="flex items-center gap-4 text-gray-500 mb-3" style={{ fontSize: "0.875rem" }}>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {article.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {article.readTime}
                    </div>
                  </div>

                  <h3 className="text-[#0A2540] mb-3 group-hover:text-[#D4AF37] transition-colors" style={{ fontSize: "1.25rem", fontWeight: 600, lineHeight: 1.4 }}>
                    {article.title}
                  </h3>

                  <p className="text-gray-600 mb-4" style={{ lineHeight: 1.7 }}>
                    {article.excerpt}
                  </p>

                  <div className="flex items-center gap-2 text-[#0A2540] group-hover:text-[#D4AF37] transition-colors" style={{ fontWeight: 600 }}>
                    Read More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Video Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-8 md:p-12 shadow-lg"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-red-100 px-3 py-1 rounded-full mb-4">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                <span className="text-red-600" style={{ fontSize: "0.75rem", fontWeight: 600 }}>Live on YouTube</span>
              </div>

              <h3 className="text-[#0A2540] mb-4" style={{ fontSize: "2rem", fontWeight: 700 }}>
                Watch Our Educational Videos
              </h3>

              <p className="text-gray-600 mb-6" style={{ lineHeight: 1.7 }}>
                Subscribe to our YouTube channel for weekly videos on financial planning, investment strategies, 
                and success stories from our community.
              </p>

              <div className="space-y-3 mb-6">
                {[
                  "Weekly financial tips and advice",
                  "Client success story interviews",
                  "LIC agent training sessions",
                  "Investment strategy breakdowns",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-[#D4AF37]/20 rounded-full flex items-center justify-center">
                      <BookOpen className="w-4 h-4 text-[#D4AF37]" />
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>

              <Button
                className="bg-red-600 hover:bg-red-700 text-white"
              >
                Subscribe on YouTube
              </Button>
            </div>

            <div className="relative">
              <div className="aspect-video bg-gradient-to-br from-[#0A2540] to-[#1a3a5c] rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                    </svg>
                  </div>
                  <p className="text-white" style={{ fontSize: "0.875rem" }}>Video Placeholder</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
