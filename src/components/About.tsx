import Image from "next/image";
import { ShieldCheck, ClipboardList, Headset, ShieldPlus, Truck, Users, Award } from "lucide-react";
import styles from "./About.module.css";

export default function About() {
  return (
    <section id="sobre" className={`section-padding ${styles.about}`}>
      <div className={`container`}>
        <div className={styles.container}>
          
          {/* Left Column */}
          <div className={styles.content}>
            <div className={styles.tag}>
              <span className={styles.dot}></span> SOBRE A ZARB DISTRIBUIDORA
            </div>
            
            <h2 className={styles.title}>
              Compromisso com <br/> a saúde em <span className={styles.highlight}>cada entrega.</span>
            </h2>
            
            <p className={styles.description}>
              A <span className={styles.boldPrimary}>ZARB DISTRIBUIDORA</span> é especializada no fornecimento de produtos hospitalares e materiais para a área da saúde. Nosso foco é garantir excelência, segurança e agilidade no abastecimento de hospitais, clínicas, consultórios e laboratórios.
            </p>
            
            <p className={styles.description}>
              Mais do que fornecer insumos, trabalhamos para ser um parceiro estratégico, oferecendo um catálogo de alto padrão e soluções eficientes e adaptadas para as necessidades de cada profissional da saúde.
            </p>

            <div className={styles.featuresGrid}>
              <div className={styles.featureItem}>
                <div className={styles.featureIcon}>
                  <ShieldCheck size={24} />
                </div>
                <h4 className={styles.featureTitle}>Qualidade<br/>Garantida</h4>
                <p className={styles.featureDesc}>Produtos selecionados com alto padrão.</p>
              </div>

              <div className={styles.featureItem}>
                <div className={styles.featureIcon}>
                  <Truck size={24} />
                </div>
                <h4 className={styles.featureTitle}>Entrega<br/>Ágil</h4>
                <p className={styles.featureDesc}>Logística eficiente para todo o Brasil.</p>
              </div>

              <div className={styles.featureItem}>
                <div className={styles.featureIcon}>
                  <Users size={24} />
                </div>
                <h4 className={styles.featureTitle}>Atendimento<br/>Especializado</h4>
                <p className={styles.featureDesc}>Equipe preparada para entender suas necessidades.</p>
              </div>

              <div className={styles.featureItem}>
                <div className={styles.featureIcon}>
                  <Award size={24} />
                </div>
                <h4 className={styles.featureTitle}>Segurança em<br/>Cada Processo</h4>
                <p className={styles.featureDesc}>Compromisso com normas e boas práticas.</p>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className={styles.visual}>
            <div className={styles.imageWrapper}>
              <Image 
                src="/about-warehouse.jpg"
                alt="Galpão ZARB DISTRIBUIDORA"
                fill
                className={styles.image}
              />
            </div>

            <div className={styles.floatingCards}>
              <div className={styles.card}>
                <div className={styles.cardIcon}>
                  <ShieldCheck size={20} />
                </div>
                <div className={styles.cardContent}>
                  <h4>Confiabilidade</h4>
                  <p>Marcas reconhecidas e procedência garantida.</p>
                </div>
              </div>

              <div className={styles.card}>
                <div className={styles.cardIcon}>
                  <ClipboardList size={20} />
                </div>
                <div className={styles.cardContent}>
                  <h4>Soluções Completas</h4>
                  <p>Diversidade de produtos para todas as áreas da saúde.</p>
                </div>
              </div>

              <div className={styles.card}>
                <div className={styles.cardIcon}>
                  <Headset size={20} />
                </div>
                <div className={styles.cardContent}>
                  <h4>Parceria de Verdade</h4>
                  <p>Relacionamento próximo e suporte contínuo.</p>
                </div>
              </div>
            </div>
          </div>
          
        </div>

        {/* Bottom Pill */}
        <div className={styles.bottomPill}>
          <div className={styles.pillIconWrapper}>
            <ShieldPlus className={styles.pillIcon} />
          </div>
          <p className={styles.pillText}>
            Nosso propósito é contribuir para <span className={styles.highlight}>uma saúde mais segura, eficiente e humana,</span> todos os dias.
          </p>
        </div>

      </div>
    </section>
  );
}
