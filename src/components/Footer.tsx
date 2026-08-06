import Image from "next/image";
import Link from "next/link";
import { Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "var(--color-white)", borderTop: "1px solid var(--color-gray-200)", padding: "4rem 0 2rem" }}>
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "3rem", marginBottom: "3rem" }}>
          <div>
            <Image src="/logo-zarb.png" alt="ZARB DISTRIBUIDORA" width={140} height={50} style={{ objectFit: "contain", marginBottom: "1.5rem" }} />
            <p style={{ color: "var(--color-gray-600)", lineHeight: 1.6, marginBottom: "1rem" }}>
              Excelência e agilidade na distribuição de materiais médicos e hospitalares para todo o Brasil.
            </p>
            <p style={{ color: "var(--color-gray-500)", fontSize: "0.85rem", lineHeight: 1.5 }}>
              <strong>Sede:</strong> R. Boa Vista, 314 - Centro Histórico de São Paulo, São Paulo - SP, 01014-909
            </p>
          </div>
          
          <div>
            <h4 style={{ color: "var(--color-black)", fontSize: "1.1rem", marginBottom: "1.5rem" }}>Links Rápidos</h4>
            <ul style={{ listStyle: "none", padding: 0 }}>
              <li style={{ marginBottom: "0.75rem" }}><Link href="#inicio" style={{ color: "var(--color-gray-600)", textDecoration: "none" }}>Início</Link></li>
              <li style={{ marginBottom: "0.75rem" }}><Link href="#sobre" style={{ color: "var(--color-gray-600)", textDecoration: "none" }}>Sobre Nós</Link></li>
              <li style={{ marginBottom: "0.75rem" }}><Link href="#produtos" style={{ color: "var(--color-gray-600)", textDecoration: "none" }}>Produtos</Link></li>
              <li style={{ marginBottom: "0.75rem" }}><Link href="#diferenciais" style={{ color: "var(--color-gray-600)", textDecoration: "none" }}>Diferenciais</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 style={{ color: "var(--color-black)", fontSize: "1.1rem", marginBottom: "1.5rem" }}>Contato Rápido</h4>
            <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
              <a href="https://www.instagram.com/zarb_distribuidora/" target="_blank" rel="noopener noreferrer" className="footerSocialLink">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a href="https://wa.me/5511951615090" target="_blank" rel="noopener noreferrer" className="footerSocialLink">
                <Phone size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div style={{ borderTop: "1px solid var(--color-gray-200)", paddingTop: "2rem", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
          <p style={{ color: "var(--color-gray-500)", fontSize: "0.9rem" }}>
            &copy; {new Date().getFullYear()} ZARB DISTRIBUIDORA. Todos os direitos reservados.
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", flexWrap: "wrap" }}>
            <span style={{ color: "var(--color-gray-500)", fontSize: "0.9rem" }}>Desenvolvido por:</span>
            <a href="https://nexa-tecnologia-sp.vercel.app" target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: "0.5rem", textDecoration: "none", color: "var(--color-black)" }} className="nexaLogoLink">
              <Image src="/logo-nexa.png" alt="Logo Nexa" width={24} height={24} style={{ objectFit: "contain", mixBlendMode: "multiply" }} />
              <span style={{ fontSize: "0.9rem", fontWeight: 600 }}>Nexa | Tecnologia & IA</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
