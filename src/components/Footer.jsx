"use client"

import { Link } from "react-router-dom"
import { Facebook, Instagram, MessageCircle, MapPin, Phone, Mail } from "lucide-react"
import logo from "../assets/logo.png"

const Footer = () => {
  const linkStyle = {
    color: "#ffffff",
    textDecoration: "none",
    opacity: 0.9,
    transition: "all 0.3s ease",
    fontWeight: "500",
  }

  const linkHover = (e) => {
    e.target.style.opacity = "1"
    e.target.style.color = "var(--primary-orange)"
  }
  const linkLeave = (e) => {
    e.target.style.opacity = "0.9"
    e.target.style.color = "#ffffff"
  }

  return (
    <footer
      style={{
        background: "var(--secondary-black)",
        color: "#ffffff",
        padding: "clamp(3rem, 8vw, 5rem) clamp(1rem, 4vw, 2rem) 2rem",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "flex-start",
          gap: "clamp(2rem, 5vw, 3rem)",
        }}
      >

        {/* LOGO + SOBRE */}
        <div style={{ flex: "1 1 300px", minWidth: "280px", maxWidth: "400px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              marginBottom: "1.5rem",
              justifyContent: window.innerWidth <= 768 ? "center" : "flex-start",
            }}
          >
            <div style={{ textAlign: window.innerWidth <= 768 ? "center" : "left" }}>
              <img
                src={logo}
                alt="Logo Mix Automóveis"
                style={{
                  height: "clamp(40px, 10vw, 60px)",
                  objectFit: "contain",
                  marginBottom: "0.5rem",
                  filter: "brightness(1.1)",
                }}
              />
              <p
                style={{
                  fontSize: "clamp(0.75rem, 2vw, 0.875rem)",
                  color: "var(--primary-orange)",
                  margin: 0,
                  fontWeight: "600",
                  textTransform: "uppercase",
                  letterSpacing: "2px",
                }}
              >
              </p>
            </div>

          </div>
          <p
            style={{
              lineHeight: "1.7",
              opacity: 0.9,
              fontSize: "clamp(1rem, 2.5vw, 1.125rem)",
              marginBottom: "2rem",
              textAlign: window.innerWidth <= 768 ? "center" : "left",
              maxWidth: "600px",
              margin: window.innerWidth <= 768 ? "0 auto 2rem" : "0 0 2rem 0",
            }}
          >
            Sua concessionária de confiança com os melhores veículos e atendimento personalizado.
          </p>

          <div
            style={{
              display: "flex",
              gap: "1.5rem",
              justifyContent: window.innerWidth <= 768 ? "center" : "flex-start",
              flexWrap: "wrap",
            }}
          >
            <a
              href="https://www.facebook.com/mixveiculos"
              aria-label="Facebook"
              style={{
                ...linkStyle,
                width: "clamp(45px, 8vw, 50px)",
                height: "clamp(45px, 8vw, 50px)",
                background: "rgba(255, 107, 53, 0.2)",
                borderRadius: "15px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all 0.3s ease",
              }}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={(e) => {
                e.target.style.background = "var(--primary-orange)"
                e.target.style.transform = "translateY(-3px)"
              }}
              onMouseLeave={(e) => {
                e.target.style.background = "rgba(255, 107, 53, 0.2)"
                e.target.style.transform = "translateY(0)"
              }}
            >
              <Facebook size={window.innerWidth <= 480 ? 20 : 24} />
            </a>
            <a
              href="https://www.instagram.com/mixveiculos/"
              aria-label="Instagram"
              style={{
                ...linkStyle,
                width: "clamp(45px, 8vw, 50px)",
                height: "clamp(45px, 8vw, 50px)",
                background: "rgba(255, 107, 53, 0.2)",
                borderRadius: "15px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all 0.3s ease",
              }}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={(e) => {
                e.target.style.background = "var(--primary-orange)"
                e.target.style.transform = "translateY(-3px)"
              }}
              onMouseLeave={(e) => {
                e.target.style.background = "rgba(255, 107, 53, 0.2)"
                e.target.style.transform = "translateY(0)"
              }}
            >
              <Instagram size={window.innerWidth <= 480 ? 20 : 24} />
            </a>
            <a
              href="https://wa.me/5511999999999"
              aria-label="WhatsApp"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                ...linkStyle,
                width: "clamp(45px, 8vw, 50px)",
                height: "clamp(45px, 8vw, 50px)",
                background: "rgba(255, 107, 53, 0.2)",
                borderRadius: "15px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.target.style.background = "var(--primary-orange)"
                e.target.style.transform = "translateY(-3px)"
              }}
              onMouseLeave={(e) => {
                e.target.style.background = "rgba(255, 107, 53, 0.2)"
                e.target.style.transform = "translateY(0)"
              }}
            >
              <MessageCircle size={window.innerWidth <= 480 ? 20 : 24} />
            </a>
          </div>
        </div>

        {/* LINKS RÁPIDOS */}
        <div style={{ flex: "1 1 200px", minWidth: "200px" }}>
          <h4
            style={{
              fontSize: "clamp(1rem, 3vw, 1.25rem)",
              marginBottom: "1.5rem",
              fontWeight: "700",
              textTransform: "uppercase",
              letterSpacing: "1px",
              color: "var(--primary-orange)",
              textAlign: window.innerWidth <= 768 ? "center" : "left",
            }}
          >
            Links Rápidos
          </h4>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              textAlign: window.innerWidth <= 768 ? "center" : "left",
            }}
          >
            {[
              { path: "/", label: "Home" },
              { path: "/estoque", label: "Estoque" },
              { path: "/simulacao", label: "Financiamento" },
              { path: "/venda", label: "Venda seu Veículo" },
              { path: "/sobre", label: "Sobre Nós" },
            ].map((item) => (
              <li key={item.path} style={{ marginBottom: "0.75rem" }}>
                <Link
                  to={item.path}
                  style={{
                    ...linkStyle,
                    fontSize: "clamp(0.875rem, 2vw, 1rem)",
                  }}
                  onMouseEnter={linkHover}
                  onMouseLeave={linkLeave}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* CONTATO */}
        <div style={{ flex: "1 1 200px", minWidth: "200px" }}>
          <h4
            style={{
              fontSize: "clamp(1rem, 3vw, 1.25rem)",
              marginBottom: "1.5rem",
              fontWeight: "700",
              textTransform: "uppercase",
              letterSpacing: "1px",
              color: "var(--primary-orange)",
              textAlign: window.innerWidth <= 768 ? "center" : "left",
            }}
          >
            Contato
          </h4>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                padding: "clamp(0.5rem, 2vw, 0.75rem)",
                background: "rgba(255, 107, 53, 0.1)",
                borderRadius: "12px",
                transition: "all 0.3s ease",
                flexWrap: "wrap",
              }}
            >
              <MapPin size={20} style={{ color: "var(--primary-orange)", flexShrink: 0 }} />
              <span
                style={{
                  fontSize: "clamp(0.75rem, 2vw, 0.875rem)",
                  fontWeight: "500",
                  wordBreak: "break-word",
                }}
              >
                Rua das Flores, 123 - Centro
              </span>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                padding: "clamp(0.5rem, 2vw, 0.75rem)",
                background: "rgba(255, 107, 53, 0.1)",
                borderRadius: "12px",
                transition: "all 0.3s ease",
                flexWrap: "wrap",
              }}
            >
              <Phone size={20} style={{ color: "var(--primary-orange)", flexShrink: 0 }} />
              <span
                style={{
                  fontSize: "clamp(0.75rem, 2vw, 0.875rem)",
                  fontWeight: "500",
                  wordBreak: "break-word",
                }}
              >
                (11) 3456-7890
              </span>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                padding: "clamp(0.5rem, 2vw, 0.75rem)",
                background: "rgba(255, 107, 53, 0.1)",
                borderRadius: "12px",
                transition: "all 0.3s ease",
                flexWrap: "wrap",
              }}
            >
              <MessageCircle size={20} style={{ color: "var(--primary-orange)", flexShrink: 0 }} />
              <span
                style={{
                  fontSize: "clamp(0.75rem, 2vw, 0.875rem)",
                  fontWeight: "500",
                  wordBreak: "break-word",
                }}
              >
                (11) 99999-9999
              </span>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                padding: "clamp(0.5rem, 2vw, 0.75rem)",
                background: "rgba(255, 107, 53, 0.1)",
                borderRadius: "12px",
                transition: "all 0.3s ease",
                flexWrap: "wrap",
              }}
            >
              <Mail size={20} style={{ color: "var(--primary-orange)", flexShrink: 0 }} />
              <span
                style={{
                  fontSize: "clamp(0.75rem, 2vw, 0.875rem)",
                  fontWeight: "500",
                  wordBreak: "break-word",
                }}
              >
                contato@mixveiculos.com.br
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div
        style={{
          borderTop: "1px solid rgba(255, 255, 255, 0.2)",
          textAlign: "center",
          marginTop: "clamp(2rem, 6vw, 4rem)",
          paddingTop: "2rem",
          fontSize: "clamp(0.75rem, 2vw, 0.875rem)",
          opacity: 0.8,
        }}
      >
        <p>&copy; {new Date().getFullYear()} Mix Automóveis. Todos os direitos reservados.</p>
      </div>
    </footer>
  )
}

export default Footer
