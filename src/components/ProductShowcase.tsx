import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Droplet, Cog, Package, Wrench } from "lucide-react";

const products = [
  {
    title: "Óleos para Motor",
    description: "Lubrificantes premium para máxima proteção do motor",
    icon: Droplet,
    image: "bg-gradient-to-br from-primary to-primary/80"
  },
  {
    title: "Óleos Industriais",
    description: "Soluções para equipamentos pesados e maquinário",
    icon: Cog,
    image: "bg-gradient-to-br from-accent to-accent/80"
  },
  {
    title: "Kits de Filtros",
    description: "Conjuntos completos para manutenção preventiva",
    icon: Package,
    image: "bg-gradient-to-br from-primary to-accent"
  },
  {
    title: "Manutenção Completa",
    description: "Tudo para a revisão do seu veículo",
    icon: Wrench,
    image: "bg-gradient-to-br from-accent to-primary"
  }
];

const ProductShowcase = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 slide-up">
          <h2 className="text-4xl font-bold text-primary mb-4">
            Nossos Produtos em Destaque
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Oferecemos uma gama completa de lubrificantes e produtos de manutenção 
            das melhores marcas mundiais
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <Card 
              key={product.title} 
              className="group hover-scale cursor-pointer shadow-elegant hover:shadow-glow transition-smooth"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-0">
                <div className={`h-48 ${product.image} rounded-t-lg flex items-center justify-center`}>
                  <product.icon className="w-16 h-16 text-white" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-primary mb-2">
                    {product.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {product.description}
                  </p>
                  <Button 
                    variant="outline" 
                    className="w-full group-hover:bg-accent group-hover:text-white transition-smooth"
                  >
                    Ver Produtos
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;