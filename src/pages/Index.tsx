import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import TourExperience from "@/components/TourExperience";
import SocialSection from "@/components/SocialSection";
import BookingSection from "@/components/BookingSection";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <div id="about">
        <AboutSection />
      </div>
      <WhyChooseSection />
      <div id="experience">
        <TourExperience />
      </div>
      <SocialSection />
      <BookingSection />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
