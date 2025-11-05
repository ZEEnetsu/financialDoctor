"use client";

import { Star, Quote } from "lucide-react";
import { motion } from "motion/react";
import { Card, CardContent } from "./ui/card";
import { Avatar, AvatarFallback } from "./ui/avatar";

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "Software Engineer",
      location: "Mumbai",
      content: "Financial Doctor helped me secure a comprehensive life insurance plan that perfectly fits my family's needs. His expertise and personalized approach made the entire process smooth and transparent.",
      rating: 5,
      transformation: "₹50L Coverage Secured",
      initials: "RK",
    },
    {
      name: "Priya Sharma",
      role: "Teacher",
      location: "Delhi",
      content: "I started my LIC career under his mentorship 2 years ago. Today, I'm earning ₹80,000/month and have built a strong client base. His training and support were invaluable.",
      rating: 5,
      transformation: "₹80K Monthly Income",
      initials: "PS",
    },
    {
      name: "Amit Patel",
      role: "Business Owner",
      location: "Ahmedabad",
      content: "The investment planning advice I received was exceptional. My portfolio has grown by 24% in just 18 months. I now have a clear retirement strategy and peace of mind.",
      rating: 5,
      transformation: "24% Portfolio Growth",
      initials: "AP",
    },
    {
      name: "Meera Iyer",
      role: "HR Manager",
      location: "Bangalore",
      content: "As a single parent, financial security was my top priority. Financial Doctor created a perfect child education plan and term insurance that ensures my daughter's future is secure.",
      rating: 5,
      transformation: "Child's Future Secured",
      initials: "MI",
    },
    {
      name: "Suresh Reddy",
      role: "Retired Govt. Employee",
      location: "Hyderabad",
      content: "The pension planning service helped me structure my retirement corpus efficiently. I now receive a steady monthly income and can enjoy my retirement without financial stress.",
      rating: 5,
      transformation: "₹40K Monthly Pension",
      initials: "SR",
    },
    {
      name: "Neha Gupta",
      role: "New LIC Agent",
      location: "Pune",
      content: "Just 6 months into my LIC career and I'm already earning ₹50,000 monthly! The comprehensive training and continuous support made all the difference. Highly recommend!",
      rating: 5,
      transformation: "₹50K Monthly in 6 Months",
      initials: "NG",
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-[#D4AF37]/10 rounded-full mb-4">
            <span className="text-[#D4AF37]" style={{ fontSize: "0.875rem", fontWeight: 600 }}>Success Stories</span>
          </div>
          <h2 className="text-[#0A2540] mb-4" style={{ fontSize: "2.5rem", fontWeight: 700 }}>
            Transforming Lives, <span className="text-[#D4AF37]">Building Futures</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto" style={{ fontSize: "1.125rem" }}>
            Real stories from families and professionals who achieved financial success
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-xl transition-shadow duration-300 border-0 bg-gray-50">
                <CardContent className="p-6">
                  {/* Quote Icon */}
                  <div className="w-10 h-10 bg-[#D4AF37]/10 rounded-full flex items-center justify-center mb-4">
                    <Quote className="w-5 h-5 text-[#D4AF37]" />
                  </div>

                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37]" />
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-gray-700 mb-6" style={{ lineHeight: 1.7 }}>
                    "{testimonial.content}"
                  </p>

                  {/* Transformation Badge */}
                  <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-4">
                    <div className="text-green-700" style={{ fontSize: "0.875rem", fontWeight: 600 }}>
                      ✓ {testimonial.transformation}
                    </div>
                  </div>

                  {/* Author */}
                  <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                    <Avatar className="w-12 h-12 bg-[#0A2540] text-white">
                      <AvatarFallback className="bg-[#0A2540] text-white">
                        {testimonial.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-[#0A2540]" style={{ fontWeight: 600 }}>{testimonial.name}</p>
                      <p className="text-gray-500" style={{ fontSize: "0.875rem" }}>
                        {testimonial.role} • {testimonial.location}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          <div className="text-center">
            <div className="text-[#0A2540]" style={{ fontSize: "2.5rem", fontWeight: 700 }}>500+</div>
            <div className="text-gray-600">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-[#0A2540]" style={{ fontSize: "2.5rem", fontWeight: 700 }}>₹50Cr+</div>
            <div className="text-gray-600">Insurance Secured</div>
          </div>
          <div className="text-center">
            <div className="text-[#0A2540]" style={{ fontSize: "2.5rem", fontWeight: 700 }}>100+</div>
            <div className="text-gray-600">LIC Agents Trained</div>
          </div>
          <div className="text-center">
            <div className="text-[#0A2540]" style={{ fontSize: "2.5rem", fontWeight: 700 }}>98%</div>
            <div className="text-gray-600">Client Satisfaction</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
