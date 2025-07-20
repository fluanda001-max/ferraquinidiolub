import Header from "@/components/Header";
import HeroSlider from "@/components/HeroSlider";
import ProductShowcase from "@/components/ProductShowcase";
import ValuesSection from "@/components/ValuesSection";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        <HeroSlider />
        <ProductShowcase />
        <ValuesSection />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
