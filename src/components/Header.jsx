"use client"

import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { Menu, X, MessageCircle } from "lucide-react"
import logo from "../assets/logo.png"
import logoLaranja from "../assets/logoPreta.png"

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isTransparent, setIsTransparent] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const isHomePage = location.pathname === "/"

      // Para a home, o header fica transparente até passar do banner (aproximadamente 80vh)
      if (isHomePage) {
        const bannerHeight = window.innerHeight * 0.8
        setIsTransparent(scrollY < bannerHeight - 100)
        setIsScrolled(scrollY > 50)
      } else {
        setIsTransparent(false)
        setIsScrolled(scrollY > 50)
      }
    }

    handleScroll() // Executa na montagem
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [location.pathname])

  const navItems = [
    { path: "/", label: "Início" },
    { path: "/estoque", label: "Veículos" },
    { path: "/simulacao", label: "Financiamento" },
    { path: "/venda", label: "Venda" },
    { path: "/sobre", label: "Sobre" },
    { path: "/contato", label: "Contato" },
  ]

  return (
    <>
      {/* Main Header */}
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          background: isTransparent ? "transparent" : "rgba(255, 255, 255, 0.95)",
          backdropFilter: isTransparent ? "none" : "blur(20px)",
          transition: "all 0.3s ease",
          boxShadow: isTransparent ? "none" : "var(--shadow-lg)",
          border: isTransparent ? "none" : "1px solid rgba(0, 0, 0, 0.05)",
        }}
      >

        <div className="container">
          <nav
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "0.75rem 0",
              minHeight: "70px",
            }}
          >
            {/* Logo com imagem */}
            <Link
              to="/"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                textDecoration: "none",
                flexShrink: 0,
              }}
            >
              <img
                src={isTransparent ? logo : logoLaranja}
                alt="Logo MIX Veículos"
                style={{
                  height: "64px",
                  objectFit: "contain",
                  transition: "filter 0.3s ease",
                  filter: isTransparent ? "drop-shadow(0 2px 4px rgba(0, 0, 0, 0.5))" : "none",
                }}
              />

            </Link>



            {/* Navigation Desktop */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "clamp(1rem, 3vw, 2.5rem)",
              }}
              className="desktop-menu"
            >
              <ul
                style={{
                  display: "flex",
                  listStyle: "none",
                  gap: "clamp(0.75rem, 2vw, 1.75rem)",
                  margin: 0,
                  padding: 0,
                }}
              >
                {navItems.map((item) => (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      style={{
                        color: isTransparent
                          ? location.pathname === item.path
                            ? "var(--primary-orange)"
                            : "var(--accent-white)"
                          : location.pathname === item.path
                            ? "var(--primary-orange)"
                            : "var(--gray-700)",
                        textDecoration: "none",
                        fontWeight: "600",
                        fontSize: "clamp(0.7rem, 1.5vw, 0.8rem)",
                        transition: "all 0.3s ease",
                        padding: "0.5rem 0",
                        position: "relative",
                        textTransform: "uppercase",
                        letterSpacing: "0.5px",
                        textShadow: isTransparent ? "0 2px 4px rgba(0, 0, 0, 0.3)" : "none",
                        whiteSpace: "nowrap",
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.color = "var(--primary-orange)"
                        e.target.style.transform = "translateY(-1px)"
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.color = isTransparent
                          ? location.pathname === item.path
                            ? "var(--primary-orange)"
                            : "var(--accent-white)"
                          : location.pathname === item.path
                            ? "var(--primary-orange)"
                            : "var(--gray-700)"
                        e.target.style.transform = "translateY(0)"
                      }}
                    >
                      {item.label}
                      {location.pathname === item.path && (
                        <div
                          style={{
                            position: "absolute",
                            bottom: "-6px",
                            left: "50%",
                            transform: "translateX(-50%)",
                            width: "5px",
                            height: "5px",
                            background: "var(--primary-orange)",
                            borderRadius: "50%",
                            boxShadow: "0 0 6px var(--primary-orange)",
                          }}
                        />
                      )}
                    </Link>
                  </li>
                ))}
              </ul>

              <button
                className="btn"
                style={{
                  background: isTransparent ? "rgba(255, 107, 53, 0.9)" : "var(--primary-orange)",
                  color: "var(--accent-white)",
                  border: isTransparent ? "1px solid rgba(255, 255, 255, 0.2)" : "none",
                  transition: "all 0.3s ease",
                  padding: "clamp(0.5rem, 1.5vw, 0.75rem) clamp(1rem, 2vw, 1.5rem)",
                  fontSize: "clamp(0.7rem, 1.5vw, 0.8rem)",
                  gap: "0.5rem",
                  whiteSpace: "nowrap",
                }}
              >
                <MessageCircle size={16} />
                <span className="btn-text">Fale Conosco</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="mobile-menu-btn"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              style={{
                display: "none",
                background: isTransparent ? "rgba(255, 107, 53, 0.9)" : "var(--primary-orange)",
                border: "none",
                color: "var(--accent-white)",
                cursor: "pointer",
                padding: "0.6rem",
                borderRadius: "10px",
                boxShadow: isTransparent ? "0 8px 32px rgba(255, 107, 53, 0.3)" : "var(--shadow)",
                transition: "all 0.3s ease",
                flexShrink: 0,
              }}
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </nav>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div
              className="mobile-menu"
              style={{
                position: "absolute",
                top: "100%",
                left: 0,
                right: 0,
                backgroundColor: isTransparent ? "rgba(0, 0, 0, 0.95)" : "var(--accent-white)",
                backdropFilter: "blur(20px)",
                boxShadow: "var(--shadow-xl)",
                borderRadius: "0 0 14px 14px",
                padding: "1.5rem",
                border: isTransparent ? "1px solid rgba(255, 255, 255, 0.1)" : "1px solid var(--gray-200)",
                borderTop: "none",
                maxHeight: "80vh",
                overflowY: "auto",
              }}
            >
              <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
                {navItems.map((item) => (
                  <li key={item.path} style={{ marginBottom: "0.4rem" }}>
                    <Link
                      to={item.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      style={{
                        display: "block",
                        color: isTransparent ? "var(--accent-white)" : "var(--gray-700)",
                        textDecoration: "none",
                        padding: "0.875rem",
                        borderRadius: "10px",
                        fontWeight: "600",
                        backgroundColor:
                          location.pathname === item.path
                            ? isTransparent
                              ? "rgba(255, 107, 53, 0.2)"
                              : "var(--gray-100)"
                            : "transparent",
                        transition: "all 0.2s ease",
                        textTransform: "uppercase",
                        letterSpacing: "0.5px",
                        fontSize: "0.9rem",
                      }}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <div
                style={{
                  marginTop: "1.25rem",
                  paddingTop: "1.25rem",
                  borderTop: `1px solid ${isTransparent ? "rgba(255, 255, 255, 0.1)" : "var(--gray-200)"}`,
                }}
              >
                <button
                  className="btn"
                  style={{
                    width: "100%",
                    background: isTransparent ? "rgba(255, 107, 53, 0.9)" : "var(--primary-orange)",
                    color: "var(--accent-white)",
                    padding: "1rem",
                    fontSize: "0.9rem",
                  }}
                >
                  <MessageCircle size={16} />
                  Fale Conosco
                </button>
              </div>
            </div>
          )}
        </div>

        <style jsx>{`
          @media (max-width: 1024px) {
            .btn-text {
              display: none;
            }
          }

          @media (max-width: 768px) {
            .desktop-menu {
              display: none !important;
            }
            .mobile-menu-btn {
              display: block !important;
            }
          }

          @media (max-width: 480px) {
            .container {
              padding-inline: 1rem;
            }
          }
        `}</style>
      </header>
    </>
  )
}

export default Header
