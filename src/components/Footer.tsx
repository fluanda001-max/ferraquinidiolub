import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="gradient-primary text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 gradient-accent rounded-lg flex items-center justify-center">
                <span className="text-primary font-bold text-lg">FL</span>
              </div>
              <div>
                <span className="text-white font-bold text-lg">Ferraquinídio</span>
                <span className="text-accent font-bold text-lg ml-1">Lub</span>
              </div>
            </div>
            <p className="text-white/80 leading-relaxed">
              Seu parceiro de confiança em lubrificantes de qualidade superior 
              no Lubango. Produtos Sul Africanos das melhores marcas mundiais.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/80 hover:text-accent transition-smooth">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/80 hover:text-accent transition-smooth">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/80 hover:text-accent transition-smooth">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-accent">Navegação</h3>
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="text-white/80 hover:text-accent transition-smooth">
                Home
              </Link>
              <Link to="/sobre" className="text-white/80 hover:text-accent transition-smooth">
                Sobre Nós
              </Link>
              <Link to="/produtos" className="text-white/80 hover:text-accent transition-smooth">
                Produtos
              </Link>
              <Link to="/parceiros" className="text-white/80 hover:text-accent transition-smooth">
                Parceiros
              </Link>
              <Link to="/contactos" className="text-white/80 hover:text-accent transition-smooth">
                Contactos
              </Link>
            </nav>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-accent">Produtos</h3>
            <div className="flex flex-col space-y-2">
              <span className="text-white/80">Óleos para Motor</span>
              <span className="text-white/80">Óleos Industriais</span>
              <span className="text-white/80">Kits de Manutenção</span>
              <span className="text-white/80">Filtros</span>
              <span className="text-white/80">Lubrificantes Especiais</span>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-accent">Contacto</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-accent" />
                <span className="text-white/80">924 738 157</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-accent" />
                <span className="text-white/80">info@ferraquinidiolub.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-accent mt-1" />
                <span className="text-white/80">
                  Bairro das Mangueiras<br />
                  Lubango, Angola
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-8 text-center">
          <p className="text-white/80">
            © 2025 Ferraquinídio Lub. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;