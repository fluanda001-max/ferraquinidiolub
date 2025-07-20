import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const partners = [
  {
    name: "Valvoline",
    description: "Marca americana líder mundial em lubrificantes automotivos, com mais de 150 anos de experiência.",
    specialty: "Óleos sintéticos e semi-sintéticos premium",
    color: "from-red-500 to-red-600"
  },
  {
    name: "Shell Helix",
    description: "Tecnologia Shell PurePlus para máxima proteção e performance do motor.",
    specialty: "Óleos sintéticos de alta tecnologia",
    color: "from-yellow-500 to-red-500"
  },
  {
    name: "Castrol",
    description: "Inovação britânica em lubrificantes, pioneira em tecnologias de proteção do motor.",
    specialty: "Soluções para todos os tipos de motores",
    color: "from-green-500 to-green-600"
  },
  {
    name: "Total Rubia",
    description: "Excelência francesa em lubrificantes para veículos pesados e industriais.",
    specialty: "Óleos para camiões e equipamentos pesados",
    color: "from-blue-500 to-blue-600"
  },
  {
    name: "Fuchs",
    description: "Tecnologia alemã de precisão em lubrificantes especializados.",
    specialty: "Lubrificantes especiais e industriais",
    color: "from-purple-500 to-purple-600"
  },
  {
    name: "Puma Energy",
    description: "Rede global de energia com forte presença em África.",
    specialty: "Combustíveis e lubrificantes premium",
    color: "from-orange-500 to-red-500"
  },
  {
    name: "Petronas",
    description: "Tecnologia malaia avançada em lubrificantes de alta performance.",
    specialty: "Óleos sintéticos de competição",
    color: "from-teal-500 to-green-500"
  },
  {
    name: "Engen",
    description: "Marca Sul Africana especializada em produtos para o mercado africano.",
    specialty: "Adaptados ao clima e condições africanas",
    color: "from-emerald-500 to-emerald-600"
  },
  {
    name: "Indy Oil",
    description: "Qualidade Sul Africana com foco em eficiência e durabilidade.",
    specialty: "Lubrificantes económicos e eficientes",
    color: "from-indigo-500 to-blue-600"
  }
];

const Parceiros = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 gradient-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-6 slide-up">
              Nossos Parceiros
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto slide-up">
              Trabalhamos exclusivamente com as melhores marcas mundiais em lubrificantes, 
              garantindo qualidade superior e tecnologia de ponta para nossos clientes.
            </p>
          </div>
        </section>

        {/* Quality Assurance */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 slide-up">
              <h2 className="text-4xl font-bold text-primary mb-6">
                Qualidade Sul Africana 🇿🇦
              </h2>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
                Todos os nossos produtos são de origem Sul Africana, país reconhecido 
                pela excelência em refinação e produção de lubrificantes. Esta origem 
                garante não apenas qualidade superior, mas também produtos adaptados às 
                condições climáticas e operacionais de África.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center shadow-elegant fade-in">
                <CardContent className="p-8">
                  <div className="text-4xl mb-4">🏭</div>
                  <h3 className="text-xl font-semibold text-primary mb-4">
                    Refinarias Avançadas
                  </h3>
                  <p className="text-muted-foreground">
                    Produtos refinados com tecnologia de ponta em instalações certificadas internacionalmente.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="text-center shadow-elegant fade-in" style={{ animationDelay: "0.2s" }}>
                <CardContent className="p-8">
                  <div className="text-4xl mb-4">🌡️</div>
                  <h3 className="text-xl font-semibold text-primary mb-4">
                    Adaptado ao Clima
                  </h3>
                  <p className="text-muted-foreground">
                    Formulações específicas para suportar as condições climáticas africanas.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="text-center shadow-elegant fade-in" style={{ animationDelay: "0.4s" }}>
                <CardContent className="p-8">
                  <div className="text-4xl mb-4">✅</div>
                  <h3 className="text-xl font-semibold text-primary mb-4">
                    Certificações Globais
                  </h3>
                  <p className="text-muted-foreground">
                    Atende aos mais rigorosos padrões internacionais de qualidade e performance.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Partners Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 slide-up">
              <h2 className="text-4xl font-bold text-primary mb-4">
                Marcas de Confiança
              </h2>
              <p className="text-xl text-muted-foreground">
                Cada marca representa décadas de inovação e excelência em lubrificação
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {partners.map((partner, index) => (
                <Card 
                  key={partner.name} 
                  className="group hover-scale shadow-elegant hover:shadow-glow transition-smooth fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-0">
                    <div className={`h-32 bg-gradient-to-br ${partner.color} rounded-t-lg flex items-center justify-center`}>
                      <h3 className="text-2xl font-bold text-white text-center">
                        {partner.name}
                      </h3>
                    </div>
                    <div className="p-6">
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {partner.description}
                      </p>
                      <div className="border-t pt-4">
                        <h4 className="font-semibold text-primary mb-2">Especialidade:</h4>
                        <p className="text-sm text-muted-foreground">
                          {partner.specialty}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Our Partners */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center slide-up">
              <h2 className="text-4xl font-bold text-primary mb-8">
                Por que Escolhemos Essas Marcas?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-primary">Tecnologia Avançada</h4>
                      <p className="text-muted-foreground">Investimento contínuo em I&D para melhores fórmulas</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-primary">Certificações Internacionais</h4>
                      <p className="text-muted-foreground">Conformidade com API, ACEA e outras normas globais</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-primary">Presença Global</h4>
                      <p className="text-muted-foreground">Reconhecimento e confiança em todo o mundo</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-primary">Adaptabilidade Local</h4>
                      <p className="text-muted-foreground">Produtos adequados às condições africanas</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-primary">Suporte Técnico</h4>
                      <p className="text-muted-foreground">Assistência especializada e conhecimento técnico</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-primary">Disponibilidade Garantida</h4>
                      <p className="text-muted-foreground">Stock consistente e entrega confiável</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 gradient-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto slide-up">
              <h2 className="text-4xl font-bold mb-6">
                Descubra a Diferença da Qualidade Premium
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Visite nossa loja e conheça pessoalmente a qualidade dos produtos que oferecemos. 
                Nossa equipa especializada está pronta para orientá-lo na escolha ideal.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/produtos" 
                  className="inline-flex items-center justify-center px-8 py-4 bg-accent text-primary font-semibold rounded-lg hover:shadow-glow transition-smooth"
                >
                  Ver Produtos Disponíveis
                </a>
                <a 
                  href="/contactos" 
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary transition-smooth"
                >
                  Visitar Nossa Loja
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

export default Parceiros;