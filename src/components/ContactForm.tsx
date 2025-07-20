import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Send } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contacto consigo brevemente.",
    });
    
    // Reset form
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="slide-up">
            <h2 className="text-4xl font-bold text-primary mb-6">
              Solicitar Orçamento ou Informações
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Entre em contacto connosco para obter o melhor aconselhamento sobre 
              lubrificantes para o seu veículo ou equipamento. Nossa equipa está 
              pronta para ajudá-lo a escolher o produto ideal.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 rounded-full bg-accent"></div>
                <span className="text-foreground">Atendimento personalizado</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 rounded-full bg-accent"></div>
                <span className="text-foreground">Resposta rápida</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 rounded-full bg-accent"></div>
                <span className="text-foreground">Produtos sempre em stock</span>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <Card className="shadow-elegant fade-in">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">
                Entre em Contacto
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Nome Completo</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="O seu nome"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
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
                  <Label htmlFor="phone">Contacto</Label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="924 738 157"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Mensagem / Produto de Interesse</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Descreva o tipo de óleo ou produto que procura..."
                    rows={4}
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
    </section>
  );
};

export default ContactForm;