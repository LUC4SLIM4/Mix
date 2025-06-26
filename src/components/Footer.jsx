"use client"

import { Link } from "react-router-dom"
import { Facebook, Instagram, MessageCircle, MapPin, Phone, Mail} from "lucide-react"

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
        padding: "5rem 2rem 2rem",
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
          gap: "3rem",
        }}
      >
        {/* LOGO + SOBRE */}
        <div style={{ flex: "1 1 350px", minWidth: "300px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
            <div>
              <h1
                style={{
                  fontSize: "2rem",
                  fontWeight: "900",
                  color: "#ffffff",
                  margin: 0,
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                }}
              >
                Mix
              </h1>
              <p
                style={{
                  fontSize: "0.875rem",
                  color: "var(--primary-orange)",
                  margin: 0,
                  fontWeight: "600",
                  textTransform: "uppercase",
                  letterSpacing: "2px",
                }}
              >
                Veículos
              </p>
            </div>
          </div>
          <p style={{ lineHeight: "1.7", opacity: 0.9, fontSize: "1.125rem", marginBottom: "2rem" }}>
            Sua concessionária de confiança com os melhores veículos e atendimento personalizado.
          </p>

          <div style={{ display: "flex", gap: "1.5rem" }}>
            <a
              href="https://www.facebook.com/mixveiculos"
              aria-label="Facebook"
              style={{
                ...linkStyle,
                width: "50px",
                height: "50px",
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
              <Facebook size={24} />
            </a>
            <a
              href="https://www.instagram.com/mixveiculos/"
              aria-label="Instagram"
              style={{
                ...linkStyle,
                width: "50px",
                height: "50px",
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
              <Instagram size={24} />
            </a>
            <a
              href="https://wa.me/5511999999999"
              aria-label="WhatsApp"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                ...linkStyle,
                width: "50px",
                height: "50px",
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
              <MessageCircle size={24} />
            </a>
          </div>
        </div>

        {/* LINKS RÁPIDOS */}
        <div style={{ flex: "1 1 200px", minWidth: "180px" }}>
          <h4
            style={{
              fontSize: "1.25rem",
              marginBottom: "1.5rem",
              fontWeight: "700",
              textTransform: "uppercase",
              letterSpacing: "1px",
              color: "var(--primary-orange)",
            }}
          >
            Links Rápidos
          </h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {[
              { path: "/", label: "Home" },
              { path: "/estoque", label: "Estoque" },
              { path: "/simulacao", label: "Financiamento" },
              { path: "/venda", label: "Venda seu Veículo" },
              { path: "/sobre", label: "Sobre Nós" },
            ].map((item) => (
              <li key={item.path} style={{ marginBottom: "0.75rem" }}>
                <Link to={item.path} style={linkStyle} onMouseEnter={linkHover} onMouseLeave={linkLeave}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* CONTATO */}
        <div style={{ flex: "1 1 280px", minWidth: "250px" }}>
          <h4
            style={{
              fontSize: "1.25rem",
              marginBottom: "1.5rem",
              fontWeight: "700",
              textTransform: "uppercase",
              letterSpacing: "1px",
              color: "var(--primary-orange)",
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
                padding: "0.75rem",
                background: "rgba(255, 107, 53, 0.1)",
                borderRadius: "12px",
                transition: "all 0.3s ease",
              }}
            >
              <MapPin size={20} style={{ color: "var(--primary-orange)" }} />
              <span style={{ fontSize: "0.875rem", fontWeight: "500" }}>Rua das Flores, 123 - Centro</span>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                padding: "0.75rem",
                background: "rgba(255, 107, 53, 0.1)",
                borderRadius: "12px",
                transition: "all 0.3s ease",
              }}
            >
              <Phone size={20} style={{ color: "var(--primary-orange)" }} />
              <span style={{ fontSize: "0.875rem", fontWeight: "500" }}>(11) 3456-7890</span>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                padding: "0.75rem",
                background: "rgba(255, 107, 53, 0.1)",
                borderRadius: "12px",
                transition: "all 0.3s ease",
              }}
            >
              <MessageCircle size={20} style={{ color: "var(--primary-orange)" }} />
              <span style={{ fontSize: "0.875rem", fontWeight: "500" }}>(11) 99999-9999</span>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                padding: "0.75rem",
                background: "rgba(255, 107, 53, 0.1)",
                borderRadius: "12px",
                transition: "all 0.3s ease",
              }}
            >
              <Mail size={20} style={{ color: "var(--primary-orange)" }} />
              <span style={{ fontSize: "0.875rem", fontWeight: "500" }}>contato@mixveiculos.com.br</span>
            </div>
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div
        style={{
          borderTop: "1px solid rgba(255, 255, 255, 0.2)",
          textAlign: "center",
          marginTop: "4rem",
          paddingTop: "2rem",
          fontSize: "0.875rem",
          opacity: 0.8,
        }}
      >
        <p>&copy; {new Date().getFullYear()} Mix Veículos. Todos os direitos reservados.</p>
      </div>
    </footer>
  )
}

export default Footer
