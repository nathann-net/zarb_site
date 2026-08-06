"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, ArrowRight } from "lucide-react";
import styles from "./Header.module.css";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.headerScrolled : ""}`}>
      <div className={`container ${styles.headerContainer}`}>
        <Link href="/" className={styles.logoLink}>
          <Image 
            src="/logo-zarb.png" 
            alt="ZARB" 
            width={180} 
            height={72} 
            className={styles.logoImage}
            priority
          />
        </Link>

        <nav className={styles.nav}>
          <a href="#inicio" className={`${styles.navLink} ${styles.activeLink}`}>Início</a>
          <a href="#sobre" className={styles.navLink}>Sobre Nós</a>
          <a href="#produtos" className={styles.navLink}>Produtos</a>
          <a href="#diferenciais" className={styles.navLink}>Diferenciais</a>
          <a href="#contato" className={styles.navLink}>Contato</a>
        </nav>

        <a href="#contato" className="btn-primary" style={{ padding: "0.6rem 1.5rem", borderRadius: "6px" }}>
          Solicitar Orçamento <ArrowRight size={16} style={{ display: "inline", marginLeft: "4px" }} />
        </a>

        <button className={styles.mobileMenuBtn}>
          <Menu size={28} />
        </button>
      </div>
    </header>
  );
}
