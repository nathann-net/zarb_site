import { ArrowRight, Stethoscope, Syringe, Activity, ShieldPlus, Box, HeartPulse } from "lucide-react";
import styles from "./Categories.module.css";
import Link from "next/link";

const categories = [
  {
    id: 1,
    title: "Materiais Hospitalares",
    description: "Ampla linha de produtos essenciais para o dia a dia de hospitais e clínicas.",
    icon: <Activity size={28} />
  },
  {
    id: 2,
    title: "Produtos Descartáveis",
    description: "Seringas, luvas, gazes e outros descartáveis com as melhores certificações.",
    icon: <Syringe size={28} />
  },
  {
    id: 3,
    title: "Equipamentos Médicos",
    description: "Aparelhos de alta precisão e tecnologia para diagnósticos e procedimentos.",
    icon: <Stethoscope size={28} />
  },
  {
    id: 4,
    title: "Clínicas e Consultórios",
    description: "Tudo o que você precisa para equipar e manter o seu espaço de atendimento.",
    icon: <HeartPulse size={28} />
  },
  {
    id: 5,
    title: "Higiene e Proteção",
    description: "EPIs, aventais, máscaras e soluções completas para biossegurança.",
    icon: <ShieldPlus size={28} />
  },
  {
    id: 6,
    title: "Outros Suprimentos",
    description: "Soluções completas e personalizadas para diferentes demandas de saúde.",
    icon: <Box size={28} />
  }
];

export default function Categories() {
  return (
    <section id="produtos" className={`section-padding ${styles.categories}`}>
      <div className="container">
        <h2 className={styles.title}>Nossas Linhas de Produtos</h2>
        
        <div className={styles.grid}>
          {categories.map((cat) => (
            <div key={cat.id} className={styles.card}>
              <div className={styles.iconWrapper}>
                {cat.icon}
              </div>
              <h3 className={styles.cardTitle}>{cat.title}</h3>
              <p className={styles.cardDesc}>{cat.description}</p>
              <Link href="#contato" className={styles.cardBtn}>
                Saiba mais <ArrowRight size={16} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
