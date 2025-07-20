import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const Contactos = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: "Mensagem enviada com sucesso!",
      description: "Entraremos em contacto consigo brevemente.",
    });
    
    // Reset form
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 gradient-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-6 slide-up">
              Entre em Contacto
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto slide-up">
              Estamos aqui para ajudá-lo a encontrar a solução ideal em lubrificantes. 
              Visite nossa loja ou entre em contacto connosco.
            </p>
          </div>
        </section>

        {/* Contact Info and Form */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div className="space-y-8 slide-up">
                <div>
                  <h2 className="text-3xl font-bold text-primary mb-6">
                    As Nossas Instalações
                  </h2>
                  <p className="text-lg text-muted-foreground mb-8">
                    Visite nossa loja no coração do Lubango, onde terá acesso a toda 
                    nossa gama de produtos e ao atendimento especializado da nossa equipa.
                  </p>
                </div>

                {/* Contact Cards */}
                <div className="space-y-6">
                  <Card className="shadow-elegant">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 gradient-accent rounded-lg flex items-center justify-center">
                          <MapPin className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-primary mb-2">Localização</h3>
                          <p className="text-muted-foreground">
                            Bairro das Mangueiras<br />
                            Lubango, Província da Huíla<br />
                            Angola
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="shadow-elegant">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 gradient-accent rounded-lg flex items-center justify-center">
                          <Phone className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-primary mb-2">Telefone</h3>
                          <p className="text-muted-foreground text-xl font-semibold">
                            924 738 157
                          </p>
                          <p className="text-sm text-muted-foreground mt-1">
                            Ligue ou envie WhatsApp
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="shadow-elegant">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 gradient-accent rounded-lg flex items-center justify-center">
                          <Mail className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-primary mb-2">Email</h3>
                          <p className="text-muted-foreground">
                            info@ferraquinidiolub.com
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="shadow-elegant">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 gradient-accent rounded-lg flex items-center justify-center">
                          <Clock className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-primary mb-2">Horário de Funcionamento</h3>
                          <div className="text-muted-foreground space-y-1">
                            <p>Segunda a Sexta: 8:00 - 17:30</p>
                            <p>Sábado: 8:00 - 13:00</p>
                            <p>Domingo: Fechado</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Contact Form */}
              <div className="fade-in">
                <Card className="shadow-elegant">
                  <CardHeader>
                    <CardTitle className="text-2xl text-primary flex items-center gap-2">
                      <MessageCircle className="w-6 h-6" />
                      Envie-nos uma Mensagem
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Nome Completo *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="O seu nome"
                          required
                        />
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="email">Email *</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="seuemail@exemplo.com"
                            required
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="phone">Contacto *</Label>
                          <Input
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="924 738 157"
                            required
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="subject">Assunto</Label>
                        <Input
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          placeholder="Ex: Orçamento para óleo de motor"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="message">Mensagem *</Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Descreva o tipo de óleo ou serviço que procura, marca do veículo, modelo, ano, etc."
                          rows={6}
                          required
                        />
                      </div>
                      
                      <Button 
                        type="submit" 
                        className="w-full gradient-accent text-white font-semibold hover:shadow-glow transition-smooth"
                        size="lg"
                      >
                        <Send className="w-4 h-4 mr-2" />
                        Enviar Mensagem
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 slide-up">
              <h2 className="text-4xl font-bold text-primary mb-4">
                Como Chegar
              </h2>
              <p className="text-xl text-muted-foreground">
                Encontre-nos facilmente no Bairro das Mangueiras, Lubango
              </p>
            </div>
            
            {/* Map Placeholder */}
            <div className="bg-gradient-to-br from-primary to-accent rounded-lg h-96 flex items-center justify-center shadow-elegant">
              <div className="text-center text-white">
                <MapPin className="w-16 h-16 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">Mapa Interativo</h3>
                <p className="text-white/90">
                  Bairro das Mangueiras, Lubango
                </p>
                <Button 
                  variant="outline" 
                  className="mt-4 border-white text-white hover:bg-white hover:text-primary"
                >
                  Abrir no Google Maps
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* WhatsApp CTA */}
        <section className="py-20 gradient-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto slide-up">
              <h2 className="text-4xl font-bold mb-6">
                Precisa de Ajuda Imediata?
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Entre em contacto connosco via WhatsApp para resposta rápida 
                sobre produtos, preços e disponibilidade.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-green-600 hover:bg-green-700 text-white font-semibold shadow-glow"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp: 924 738 157
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-primary"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Ligar Agora
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contactos;