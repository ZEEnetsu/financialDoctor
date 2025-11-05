"use client";

import { Award, Users, Target, Clock } from "lucide-react";
import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function AboutSection() {
  const achievements = [
    {
      icon: Award,
      title: "Certified Expert",
      description: "LIC Certified Advisor with advanced credentials",
    },
    {
      icon: Users,
      title: "500+ Families",
      description: "Helped secure financial futures across India",
    },
    {
      icon: Target,
      title: "Personalized Plans",
      description: "Tailored solutions for each family's needs",
    },
    {
      icon: Clock,
      title: "15+ Years",
      description: "Proven track record in financial advisory",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1521870749737-92928aafcc21?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBpbmRpYW4lMjBidXNpbmVzc21hbnxlbnwxfHx8fDE3NjIzMDY3NDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Professional financial advisor"
                  className="w-full h-auto object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#D4AF37]/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#0A2540]/10 rounded-full blur-2xl" />
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-2 bg-[#D4AF37]/10 rounded-full mb-4">
              <span className="text-[#D4AF37]" style={{ fontSize: "0.875rem", fontWeight: 600 }}>About Me</span>
            </div>

            <h2 className="text-[#0A2540] mb-6" style={{ fontSize: "2.5rem", fontWeight: 700 }}>
              Meet Your <span className="text-[#D4AF37]">Financial Doctor</span>
            </h2>

            <p className="text-gray-600 mb-6" style={{ fontSize: "1.125rem", lineHeight: 1.7 }}>
              With over 15 years of experience in financial planning and life insurance, I've dedicated my career 
              to helping middle-class and upper-middle-class Indian families achieve financial security and build 
              lasting wealth.
            </p>

            <p className="text-gray-600 mb-8" style={{ lineHeight: 1.7 }}>
              As a certified LIC advisor, I specialize in creating personalized insurance and investment solutions 
              that protect your family's future. I also mentor aspiring professionals who want to build a rewarding 
              career as LIC agents, empowering them with the knowledge and support they need to succeed.
            </p>

            {/* Achievements Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-4 bg-gray-50 rounded-xl hover:bg-[#0A2540] hover:text-white transition-all duration-300 group"
                >
                  <achievement.icon className="w-8 h-8 text-[#D4AF37] mb-3" />
                  <h4 className="mb-1 group-hover:text-white" style={{ fontWeight: 600 }}>{achievement.title}</h4>
                  <p className="text-gray-500 group-hover:text-gray-200" style={{ fontSize: "0.875rem" }}>
                    {achievement.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Video Placeholder */}
            <div className="bg-[#0A2540] p-6 rounded-xl flex items-center gap-4">
              <div className="w-12 h-12 bg-[#D4AF37] rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-[#0A2540]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                </svg>
              </div>
              <div className="flex-1">
                <p className="text-white" style={{ fontWeight: 600 }}>Watch My Story</p>
                <p className="text-gray-300" style={{ fontSize: "0.875rem" }}>2 min introduction video</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
