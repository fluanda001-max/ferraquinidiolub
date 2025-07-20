import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Sobre Nós", href: "/sobre" },
    { name: "Produtos", href: "/produtos" },
    { name: "Parceiros", href: "/parceiros" },
    { name: "Contactos", href: "/contactos" },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50 shadow-elegant">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 hover-scale">
            <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">FL</span>
            </div>
            <div className="hidden md:block">
              <span className="text-primary font-bold text-xl">Ferraquinídio</span>
              <span className="text-accent font-bold text-xl ml-1">Lub</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "font-medium transition-smooth hover:text-accent",
                  isActive(item.href) ? "text-accent" : "text-foreground"
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-primary">
              <Phone className="w-4 h-4" />
              <span className="font-semibold">924 738 157</span>
            </div>
            <Button variant="default" size="sm" className="gradient-accent text-white hover:shadow-glow">
              Contactar
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border">
            <nav className="flex flex-col space-y-2 py-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    "px-4 py-2 font-medium transition-smooth hover:text-accent",
                    isActive(item.href) ? "text-accent" : "text-foreground"
                  )}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-4 py-2 border-t border-border">
                <div className="flex items-center space-x-2 text-primary mb-2">
                  <Phone className="w-4 h-4" />
                  <span className="font-semibold">924 738 157</span>
                </div>
                <Button variant="default" size="sm" className="gradient-accent text-white w-full">
                  Contactar
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;