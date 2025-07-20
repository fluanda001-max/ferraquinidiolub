import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Target, Users, Star, Heart, Zap } from "lucide-react";
import heroStore from "@/assets/hero-store.jpg";

const values = [
  {
    icon: Shield,
    title: "Qualidade Inegável",
    description: "Produtos de origem Sul Africana com os mais altos padrões de qualidade."
  },
  {
    icon: Users,
    title: "Atendimento Personalizado",
    description: "Cada cliente é único e merece um atendimento especializado."
  },
  {
    icon: Heart,
    title: "Confiança",
    description: "Construímos relacionamentos duradouros baseados na confiança mútua."
  },
  {
    icon: Zap,
    title: "Inovação",
    description: "Sempre à procura das melhores soluções em lubrificação."
  },
  {
    icon: Target,
    title: "Disponibilidade",
    description: "Stock sempre disponível para atender às suas necessidades."
  },
  {
    icon: Star,
    title: "Integridade",
    description: "Transparência e honestidade em todas as nossas relações comerciais."
  }
];

const Sobre = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="slide-up">
                <h1 className="text-5xl font-bold text-primary mb-6">
                  Sobre a Ferraquinídio Lub
                </h1>
                <div className="space-y-6 text-lg text-muted-foreground">
                  <p>
                    A <strong className="text-primary">Ferraquinídio Lub</strong> é uma empresa especializada 
                    no comércio de lubrificantes de alta qualidade, estabelecida no coração do Lubango, 
                    no Bairro das Mangueiras.
                  </p>
                  <p>
                    Chegamos ao mercado angolano com o compromisso de oferecer produtos de origem Sul Africana, 
                    reconhecidos mundialmente pela sua excelência e performance superior.
                  </p>
                  <p>
                    Nossa missão é garantir que cada motor, cada equipamento, receba o cuidado que merece, 
                    através dos melhores lubrificantes disponíveis no mercado.
                  </p>
                </div>
              </div>
              <div className="fade-in">
                <img 
                  src={heroStore} 
                  alt="Loja Ferraquinídio Lub" 
                  className="rounded-lg shadow-elegant w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Vision and Mission */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <Card className="shadow-elegant slide-up">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold text-primary mb-6">Nossa Visão</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Ser a referência em lubrificantes no sul de Angola, reconhecida pela 
                    qualidade superior dos nossos produtos e pela excelência no atendimento 
                    ao cliente, contribuindo para a manutenção e longevidade dos equipamentos 
                    dos nossos clientes.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-elegant slide-up" style={{ animationDelay: "0.2s" }}>
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold text-primary mb-6">Nosso Compromisso</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Estamos comprometidos em oferecer não apenas produtos de qualidade, 
                    mas também conhecimento técnico especializado, garantindo que cada 
                    cliente encontre a solução ideal para as suas necessidades específicas 
                    de lubrificação.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 slide-up">
              <h2 className="text-4xl font-bold text-primary mb-4">
                Nossos Valores
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Os princípios que guiam a nossa empresa e definem a nossa forma de trabalhar
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <Card 
                  key={value.title} 
                  className="text-center hover-scale shadow-elegant fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full gradient-accent mb-6 shadow-glow">
                      <value.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-primary mb-4">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 gradient-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto slide-up">
              <h2 className="text-4xl font-bold mb-6">
                Pronto para Conhecer Nossos Produtos?
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Visite nossa loja no Bairro das Mangueiras ou entre em contacto connosco 
                para descobrir a gama completa de lubrificantes que temos à sua disposição.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/produtos" 
                  className="inline-flex items-center justify-center px-8 py-4 bg-accent text-primary font-semibold rounded-lg hover:shadow-glow transition-smooth"
                >
                  Ver Produtos
                </a>
                <a 
                  href="/contactos" 
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary transition-smooth"
                >
                  Contactar-nos
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Sobre;