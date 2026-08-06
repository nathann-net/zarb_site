"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X, ArrowRight } from "lucide-react";
import styles from "./Header.module.css";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`${styles.header} ${scrolled ? styles.headerScrolled : ""}`}>
      <div className={`container ${styles.headerContainer}`}>
        <a href="#inicio" className={styles.logoLink} onClick={closeMenu}>
          <Image 
            src="/logo-zarb.png" 
            alt="ZARB" 
            width={180} 
            height={72} 
            className={styles.logoImage}
            priority
          />
        </a>

        <nav className={`${styles.nav} ${isMobileMenuOpen ? styles.mobileNavOpen : ""}`}>
          <a href="#inicio" className={`${styles.navLink} ${styles.activeLink}`} onClick={closeMenu}>Início</a>
          <a href="#sobre" className={styles.navLink} onClick={closeMenu}>Sobre Nós</a>
          <a href="#produtos" className={styles.navLink} onClick={closeMenu}>Produtos</a>
          <a href="#diferenciais" className={styles.navLink} onClick={closeMenu}>Diferenciais</a>
          <a href="#contato" className={styles.navLink} onClick={closeMenu}>Contato</a>
          
          {/* Mobile only quote button inside menu */}
          {isMobileMenuOpen && (
            <a href="#contato" className="btn-primary" style={{ padding: "0.6rem 1.5rem", borderRadius: "6px", marginTop: "1rem" }} onClick={closeMenu}>
              Solicitar Orçamento
            </a>
          )}
        </nav>

        <a href="#contato" className={`btn-primary ${styles.quoteBtn}`} style={{ padding: "0.6rem 1.5rem", borderRadius: "6px" }}>
          Solicitar Orçamento <ArrowRight size={16} style={{ display: "inline", marginLeft: "4px" }} />
        </a>

        <button className={styles.mobileMenuBtn} onClick={toggleMenu} aria-label="Abrir menu">
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
    </header>
  );
}
