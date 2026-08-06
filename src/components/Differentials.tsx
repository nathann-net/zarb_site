import { Award, Clock, Truck, Layers, ShieldCheck, HeartHandshake } from "lucide-react";
import styles from "./Differentials.module.css";

const differentials = [
  {
    id: 1,
    title: "Produtos de qualidade",
    description: "Trabalhamos exclusivamente com as melhores e mais confiáveis marcas do mercado médico.",
    icon: <Award size={24} />
  },
  {
    id: 2,
    title: "Atendimento especializado",
    description: "Equipe preparada para entender sua demanda e oferecer a solução mais adequada.",
    icon: <HeartHandshake size={24} />
  },
  {
    id: 3,
    title: "Agilidade nas entregas",
    description: "Logística eficiente projetada para garantir que nunca falte insumo no seu estabelecimento.",
    icon: <Truck size={24} />
  },
  {
    id: 4,
    title: "Variedade de produtos",
    description: "Catálogo completo, permitindo que você centralize suas compras em um único parceiro.",
    icon: <Layers size={24} />
  },
  {
    id: 5,
    title: "Compromisso e confiança",
    description: "Relações duradouras construídas com transparência, pontualidade e dedicação.",
    icon: <ShieldCheck size={24} />
  },
  {
    id: 6,
    title: "Soluções sob medida",
    description: "Entendemos que cada hospital e clínica possui um fluxo diferente, e nos adaptamos a isso.",
    icon: <Clock size={24} />
  }
];

export default function Differentials() {
  return (
    <section id="diferenciais" className={`section-padding ${styles.differentials}`}>
      <div className="container">
        <h2 className={styles.title}>
          Por que escolher a <span className={styles.highlight}>ZARB DISTRIBUIDORA?</span>
        </h2>
        
        <div className={styles.grid}>
          {differentials.map((item) => (
            <div key={item.id} className={styles.feature}>
              <div className={styles.iconWrapper}>
                {item.icon}
              </div>
              <div>
                <h3 className={styles.featureTitle}>{item.title}</h3>
                <p className={styles.featureDesc}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
