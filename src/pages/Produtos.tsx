import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, Car, Truck, Wrench, Cog } from "lucide-react";
import valvolineImg from "@/assets/valvoline.jpg";
import shellImg from "@/assets/shell.jpg";
import castrolImg from "@/assets/castrol.jpg";
import totalImg from "@/assets/total.jpg";
import fuchsImg from "@/assets/fuchs.jpg";
import kitImg from "@/assets/kit.jpg";
import petronasImg from "@/assets/petronas.jpg";
import engenImg from "@/assets/engen.jpg";


const categories = [
  { id: "all", name: "Todos os Produtos", icon: null },
  { id: "motor", name: "Óleo Motor", icon: Car },
  { id: "industrial", name: "Óleo Industrial", icon: Cog },
  { id: "kits", name: "Kits de Manutenção", icon: Wrench },
  { id: "pesados", name: "Veículos Pesados", icon: Truck },
];

const brands = [
  "Valvoline", "Shell Helix", "Castrol", "Total Rubia", "Fuchs", 
  "Puma", "Petronas", "Engen", "Indy Oil"
];

const products = [
  {
    id: 1,
    name: "Valvoline MaxLife 10W-40",
    category: "motor",
    brand: "Valvoline",
    description: "Óleo motor semi-sintético para veículos com alta quilometragem",
    specifications: "API SN, ACEA A3/B4, SAE 10W-40",
    applications: "Veículos ligeiros com mais de 75.000 km",
    image: valvolineImg
  },
  {
    id: 2,
    name: "Shell Helix Ultra 5W-30",
    category: "motor",
    brand: "Shell Helix",
    description: "Óleo motor sintético de alta performance",
    specifications: "API SP, ACEA C3, SAE 5W-30",
    applications: "Motores modernos a gasolina e diesel",
    image: shellImg
  },
  {
    id: 3,
    name: "Castrol GTX 20W-50",
    category: "motor",
    brand: "Castrol",
    description: "Óleo motor convencional para máxima proteção",
    specifications: "API SN, SAE 20W-50",
    applications: "Veículos mais antigos e climas quentes",
    image: castrolImg
  },
  {
    id: 4,
    name: "Total Rubia TIR 8600 10W-40",
    category: "pesados",
    brand: "Total Rubia",
    description: "Óleo para motores diesel de veículos pesados",
    specifications: "API CI-4/SL, ACEA E7, SAE 10W-40",
    applications: "Camiões, autocarros e equipamentos pesados",
    image: totalImg
  },
  {
    id: 5,
    name: "Fuchs Titan GT1 PRO C-3 5W-30",
    category: "motor",
    brand: "Fuchs",
    description: "Óleo motor sintético premium",
    specifications: "API SN, ACEA C3, SAE 5W-30",
    applications: "Veículos BMW, Mercedes-Benz, VW Group",
    image: fuchsImg
  },
  {
    id: 6,
    name: "Kit Manutenção Completa",
    category: "kits",
    brand: "Ferraquinídio",
    description: "Kit completo com óleo, filtros e acessórios",
    specifications: "Filtro óleo + Filtro ar + Filtro combustível + 5L óleo",
    applications: "Manutenção preventiva completa",
    image: kitImg
  },
  {
    id: 7,
    name: "Óleo Hidráulico Industrial",
    category: "industrial",
    brand: "Petronas",
    description: "Fluido hidráulico para equipamentos industriais",
    specifications: "ISO VG 46, DIN 51524 HLP",
    applications: "Sistemas hidráulicos industriais",
    image: petronasImg
  },
  {
    id: 8,
    name: "Engen Multigrade 15W-40",
    category: "pesados",
    brand: "Engen",
    description: "Óleo diesel para equipamentos pesados",
    specifications: "API CI-4, ACEA E7, SAE 15W-40",
    applications: "Máquinas agrícolas e de construção",
    image: engenImg
  }
];


const Produtos = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedBrand, setSelectedBrand] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
    const matchesBrand = selectedBrand === "all" || product.brand === selectedBrand;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesCategory && matchesBrand && matchesSearch;
  });

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 gradient-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-6 slide-up">
              Nossos Produtos
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto slide-up">
              Descubra nossa gama completa de lubrificantes premium de origem Sul Africana. 
              Das melhores marcas mundiais para todas as suas necessidades.
            </p>
          </div>
        </section>

        {/* Filters Section */}
        <section className="py-8 bg-muted/30 sticky top-16 z-40 border-b">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-6 items-center">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Procurar produtos..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>

              {/* Category Filters */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category.id}
                    variant={selectedCategory === category.id ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category.id)}
                    className="flex items-center gap-2"
                  >
                    {category.icon && <category.icon className="w-4 h-4" />}
                    {category.name}
                  </Button>
                ))}
              </div>

              {/* Brand Filter */}
              <select 
                value={selectedBrand}
                onChange={(e) => setSelectedBrand(e.target.value)}
                className="px-3 py-2 border border-border rounded-md bg-background"
              >
                <option value="all">Todas as Marcas</option>
                {brands.map(brand => (
                  <option key={brand} value={brand}>{brand}</option>
                ))}
              </select>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <Filter className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-2xl font-semibold text-muted-foreground mb-2">
                  Nenhum produto encontrado
                </h3>
                <p className="text-muted-foreground">
                  Tente ajustar os filtros ou termo de pesquisa
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredProducts.map((product, index) => (
                  <Card 
                    key={product.id} 
                    className="group hover-scale shadow-elegant hover:shadow-glow transition-smooth cursor-pointer fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardContent className="p-0">
                    <div className="h-48 w-full overflow-hidden rounded-t-lg bg-white flex items-center justify-center">
  <img
    src={product.image}
    alt={product.name}
    className="max-h-full max-w-full object-contain"
  />
</div>


                      <div className="p-6">
                        <div className="flex items-center justify-between mb-2">
                          <Badge variant="secondary" className="text-xs">
                            {product.brand}
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            {categories.find(c => c.id === product.category)?.name}
                          </Badge>
                        </div>
                        <h3 className="text-lg font-semibold text-primary mb-2 group-hover:text-accent transition-smooth">
                          {product.name}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-3">
                          {product.description}
                        </p>
                        <div className="space-y-2 text-xs text-muted-foreground mb-4">
                          <div>
                            <strong>Especificações:</strong> {product.specifications}
                          </div>
                          <div>
                            <strong>Aplicações:</strong> {product.applications}
                          </div>
                        </div>
                        <Button 
                          className="w-full group-hover:bg-accent group-hover:text-white transition-smooth"
                          variant="outline"
                        >
                          Solicitar Orçamento
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto slide-up">
              <h2 className="text-4xl font-bold text-primary mb-6">
                Não encontrou o que procura?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Entre em contacto connosco. Temos uma vasta gama de produtos e 
                podemos ajudá-lo a encontrar a solução ideal para as suas necessidades.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="gradient-accent text-white font-semibold">
                  Contactar Especialista
                </Button>
                <Button size="lg" variant="outline">
                  Ver Todos os Parceiros
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

export default Produtos;