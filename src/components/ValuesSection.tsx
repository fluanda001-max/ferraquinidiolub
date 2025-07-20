import { Shield, Package, MapPin } from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "QUALIDADE SUPERIOR",
    description: "Produtos de origem Sul Africana, garantindo o melhor para o seu motor."
  },
  {
    icon: Package,
    title: "VASTO STOCK",
    description: "Tudo o que você precisa, disponível para pronta entrega."
  },
  {
    icon: MapPin,
    title: "ATENDIMENTO NO LUBANGO",
    description: "Estamos no Bairro das Mangueiras, prontos para atendê-lo."
  }
];

const ValuesSection = () => {
  return (
    <section className="py-20 gradient-primary">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div 
              key={value.title}
              className="text-center text-white fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent mb-6 shadow-glow">
                <value.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">{value.title}</h3>
              <p className="text-white/90 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;