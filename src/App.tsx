import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { ServicesSection } from "./components/ServicesSection";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { LICCareerSection } from "./components/LICCareerSection";
import { IC38ExamSection } from "./components/IC38ExamSection";
import { BlogSection } from "./components/BlogSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { Toaster } from "./components/ui/sonner";

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <TestimonialsSection />
      <LICCareerSection />
      <IC38ExamSection />
      <BlogSection />
      <ContactSection />
      <Footer />
      <Toaster />
    </div>
  );
}
