"use client";

import { useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import styles from "./Contact.module.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [error, setError] = useState("");

  const validateEmail = (email: string) => {
    // Comprehensive regex for email validation
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value.replace(/\D/g, "");
    if (val.length > 11) val = val.slice(0, 11);
    
    let formatted = val;
    if (val.length > 2) {
      formatted = `(${val.slice(0, 2)}) `;
      if (val.length > 7) {
        formatted += `${val.slice(2, 7)}-${val.slice(7)}`;
      } else {
        formatted += val.slice(2);
      }
    }
    
    setFormData({ ...formData, phone: formatted });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!validateEmail(formData.email)) {
      setError("Por favor, insira um e-mail válido existente.");
      return;
    }

    const rawPhone = formData.phone.replace(/\D/g, "");
    if (rawPhone.length < 10) {
      setError("O telefone deve ter DDD + número (mínimo 10 dígitos).");
      return;
    }

    // Construct WhatsApp message
    const whatsappNumber = "5511951615090";
    const text = `Olá, gostaria de solicitar um orçamento!%0A%0A*Nome/Empresa:* ${formData.name}%0A*E-mail:* ${formData.email}%0A*Telefone:* ${formData.phone}%0A*Detalhes:* ${formData.message}`;
    
    // Redirect to WhatsApp
    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, '_blank');
    
    // Clear form
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="contato" className={`section-padding ${styles.contact}`}>
      <div className={`container ${styles.contactContainer}`}>
        <div className={styles.contactInfo}>
          <h2>Fale com nossos especialistas</h2>
          <p>
            Estamos prontos para atender a sua demanda com agilidade e eficiência. Solicite um orçamento ou tire suas dúvidas através de nossos canais de atendimento.
          </p>
          
          <div className={styles.infoItem}>
            <div className={styles.iconWrapper}>
              <Phone size={24} />
            </div>
            <div className={styles.infoContent}>
              <h4>Telefone / WhatsApp</h4>
              <span>(11) 95161-5090</span>
            </div>
          </div>
          
          <div className={styles.infoItem}>
            <div className={styles.iconWrapper}>
              <Mail size={24} />
            </div>
            <div className={styles.infoContent}>
              <h4>E-mail</h4>
              <span>contato@zarbdistribuidora.com.br</span>
            </div>
          </div>
          
          <div className={styles.infoItem}>
            <div className={styles.iconWrapper}>
              <MapPin size={24} />
            </div>
            <div className={styles.infoContent}>
              <h4>Endereço</h4>
              <span>R. Boa Vista, 314 - Centro Histórico de São Paulo, São Paulo - SP, 01014-909</span>
            </div>
          </div>

          <div style={{ marginTop: "2.5rem", borderRadius: "12px", overflow: "hidden", boxShadow: "0 4px 15px rgba(0,0,0,0.05)" }}>
            <iframe
              width="100%"
              height="250"
              frameBorder="0"
              style={{ border: 0, display: "block" }}
              src="https://maps.google.com/maps?q=R.%20Boa%20Vista,%20314%20-%20Centro%20Histórico%20de%20São%20Paulo,%20SP&t=&z=16&ie=UTF8&iwloc=&output=embed"
              allowFullScreen
              aria-hidden="false"
              tabIndex={0}
              title="Localização ZARB Distribuidora"
            ></iframe>
          </div>
        </div>
        
        <div className={styles.contactForm}>
          <h3>Solicitar Orçamento</h3>
          <form onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="name">Nome / Empresa</label>
              <input 
                type="text" 
                id="name" 
                placeholder="Digite seu nome ou empresa" 
                required 
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="email">E-mail Corporativo</label>
              <input 
                type="email" 
                id="email" 
                placeholder="email@empresa.com.br" 
                required 
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="phone">Telefone / WhatsApp (Apenas números)</label>
              <input 
                type="tel" 
                id="phone" 
                placeholder="Ex: 11999999999" 
                required 
                value={formData.phone}
                onChange={handlePhoneChange}
              />
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="message">Produtos ou Dúvidas</label>
              <textarea 
                id="message" 
                placeholder="Descreva os produtos que precisa cotar..." 
                required
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
              ></textarea>
            </div>

            {error && <div style={{ color: "red", marginBottom: "1rem", fontSize: "0.9rem" }}>{error}</div>}
            
            <button type="submit" className={styles.submitBtn}>Enviar Solicitação</button>
          </form>
        </div>
      </div>
    </section>
  );
}
