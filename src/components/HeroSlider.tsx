import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import heroLubricants from "@/assets/hero-lubricants.jpg";
import heroKits from "@/assets/hero-kits.jpg";
import heroStore from "@/assets/hero-store.jpg";

const slides = [
  {
    id: 1,
    title: "BEM-VINDO À FERRAQUINÍDIO LUB",
    subtitle: "Seu parceiro em lubrificantes de qualidade no Lubango.",
    image: heroStore,
    cta: "VER PRODUTOS",
    ctaLink: "/produtos"
  },
  {
    id: 2,
    title: "ÓLEO DE QUALIDADE É INVESTIMENTO, NÃO GASTO.",
    subtitle: "Garanta a longevidade e performance do seu motor com os melhores lubrificantes.",
    image: heroLubricants,
    cta: "FALE COM UM ESPECIALISTA",
    ctaLink: "/contactos"
  },
  {
    id: 3,
    title: "KITS DE MANUTENÇÃO PARA LUBRIFICAÇÃO COMPLETA E EM STOCK!",
    subtitle: "Tudo o que você precisa para a revisão do seu veículo em um só lugar.",
    image: heroKits,
    cta: "CONHEÇA NOSSOS KITS",
    ctaLink: "/produtos"
  },
  {
    id: 4,
    title: "QUALIDADE SUL AFRICANA 🇿🇦 COM AS MELHORES MARCAS.",
    subtitle: "Valvoline, Shell Helix, Castrol, Total Rubia, Fuchs e muito mais à sua disposição.",
    image: heroLubricants,
    cta: "VER MARCAS",
    ctaLink: "/parceiros"
  }
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={cn(
            "absolute inset-0 transition-opacity duration-1000",
            index === currentSlide ? "opacity-100" : "opacity-0"
          )}
        >
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 gradient-hero" />
            <div className="relative z-10 h-full flex items-center justify-center">
              <div className="text-center max-w-4xl mx-auto px-4 fade-in">
                <h1 className="hero-text mb-6">{slide.title}</h1>
                <p className="hero-subtitle mb-8 max-w-2xl mx-auto">{slide.subtitle}</p>
                <Link to={slide.ctaLink}>
                  <Button
                    size="lg"
                    className="gradient-accent text-white font-semibold px-8 py-4 text-lg hover:shadow-glow transition-smooth"
                  >
                    {slide.cta}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-smooth"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-smooth"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={cn(
              "w-3 h-3 rounded-full transition-smooth",
              index === currentSlide ? "bg-accent" : "bg-white/50"
            )}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;