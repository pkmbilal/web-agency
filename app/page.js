import Navbar from "@/components/Navbar";
import HeroSlider from "@/components/HeroSlider";
import ServicesSection from "@/components/ServicesSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <main className="min-h-screen">
      <div className="bg-grid">
        <Navbar />
        <HeroSlider />
      </div>

      <ServicesSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </main>
  );
}