import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section id="inicio" className={`section-padding ${styles.hero}`}>
      <div className={styles.videoOverlay}></div>
      <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        className={styles.heroVideo}
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>
      <div className={`container ${styles.heroContainer} animate-fade-in`}>
        
        <div className={styles.heroContent}>
          <span className={styles.heroTag}>Distribuidora de Produtos Hospitalares</span>
          
          <h1 className={styles.heroTitle}>
            Soluções hospitalares <br/>
            para quem cuida de <span className={styles.highlight}>vidas.</span>
          </h1>
          
          <p className={styles.heroSubtitle}>
            Produtos hospitalares selecionados para atender clínicas, hospitais, consultórios e profissionais da saúde com qualidade, segurança e agilidade.
          </p>

          <div className={styles.heroActions}>
            <a href="#contato" className={styles.btnSolid}>
              Solicitar orçamento <ArrowRight size={18} />
            </a>
            <a href="#produtos" className={styles.btnOutline}>
              Conhecer produtos
            </a>
          </div>

          <div className={styles.heroTrustIndicators}>
            <div className={styles.trustItem}>
              <Check size={16} strokeWidth={3} />
              <span>Qualidade</span>
            </div>
            <span className={styles.trustDivider}>|</span>
            <div className={styles.trustItem}>
              <Check size={16} strokeWidth={3} />
              <span>Segurança</span>
            </div>
            <span className={styles.trustDivider}>|</span>
            <div className={styles.trustItem}>
              <Check size={16} strokeWidth={3} />
              <span>Agilidade</span>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
}
