"use client"

import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import {
  ChevronLeft,
  ChevronRight,
  Play,
  Heart,
  Share2,
  MessageCircle,
  Phone,
  Calendar,
  Gauge,
  Fuel,
  Settings,
  Award,
  CheckCircle,
  MapPin,
  Clock,
} from "lucide-react"

const VeiculoDetalhes = () => {
  const { id } = useParams()
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [showAllPhotos, setShowAllPhotos] = useState(false)
  const [showVideoModal, setShowVideoModal] = useState(false)

  // Mock data - em um app real, isso viria de uma API
  const vehicle = {
    id: Number.parseInt(id),
    name: "TOYOTA HILUX CD GR-S 4X4 2.8 TDI DIES. AUT.",
    price: 295900,
    km: "23.000",
    fuel: "Diesel",
    year: "2023",
    color: "Branco Perolizado",
    doors: "4",
    transmission: "Automática",
    engine: "2.8 Turbo Diesel",
    category: "Pickup",
    brand: "Toyota",
    model: "Hilux",
    version: "GR-S 4x4",
    plate: "ABC-1234",
    renavam: "12345678901",
    chassi: "9BWZZZ377VT004251",
    status: "disponivel",
    featured: true,
    description:
      "Toyota Hilux GR-S 4x4 2023 em excelente estado de conservação. Veículo revisado, com todos os opcionais de série. Ideal para quem busca robustez, conforto e tecnologia em um só veículo.",
    features: [
      "Ar condicionado digital",
      "Direção elétrica",
      "Vidros elétricos",
      "Travas elétricas",
      "Alarme",
      "Som premium",
      "Rodas de liga leve",
      "Faróis de LED",
      "Central multimídia",
      "Câmera de ré",
      "Sensores de estacionamento",
      "Controle de tração",
      "Freios ABS",
      "Airbags duplos",
      "Banco de couro",
      "Volante multifuncional",
    ],
    images: [
      "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    ],
    videos: [
      {
        id: 1,
        title: "Tour Completo - Exterior",
        thumbnail:
          "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      },
      {
        id: 2,
        title: "Interior e Tecnologia",
        thumbnail:
          "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      },
    ],
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % vehicle.images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + vehicle.images.length) % vehicle.images.length)
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div style={{ paddingTop: "90px", backgroundColor: "#f8fafc", minHeight: "100vh" }}>
      {/* Breadcrumb */}
      <div style={{ backgroundColor: "white", borderBottom: "1px solid #e2e8f0" }}>
        <div className="container" style={{ padding: "1rem 1rem" }}>
          <nav style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.875rem" }}>
            <Link to="/" style={{ color: "#64748b", textDecoration: "none" }}>
              Home
            </Link>
            <span style={{ color: "#cbd5e1" }}>›</span>
            <Link to="/estoque" style={{ color: "#64748b", textDecoration: "none" }}>
              Estoque
            </Link>
            <span style={{ color: "#cbd5e1" }}>›</span>
            <span style={{ color: "#1e293b", fontWeight: "500" }}>{vehicle.name}</span>
          </nav>
        </div>
      </div>

      <div className="container" style={{ padding: "2rem 2rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "2rem", alignItems: "start" }}>
          {/* Galeria Principal */}
          <div>
            {/* Imagem Principal */}
            <div
              style={{
                position: "relative",
                backgroundColor: "#f1f5f9",
                borderRadius: "12px",
                overflow: "hidden",
                marginBottom: "1rem",
                height: "500px",
              }}
            >
              <img
                src={vehicle.images[currentImageIndex] || "/placeholder.svg"}
                alt={vehicle.name}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />

              {/* Navegação da Galeria */}
              <button
                onClick={prevImage}
                style={{
                  position: "absolute",
                  left: "1rem",
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: "40px",
                  height: "40px",
                  backgroundColor: "rgba(255, 255, 255, 0.9)",
                  border: "none",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => (e.target.style.backgroundColor = "white")}
                onMouseLeave={(e) => (e.target.style.backgroundColor = "rgba(255, 255, 255, 0.9)")}
              >
                <ChevronLeft size={20} style={{ color: "#374151" }} />
              </button>

              <button
                onClick={nextImage}
                style={{
                  position: "absolute",
                  right: "1rem",
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: "40px",
                  height: "40px",
                  backgroundColor: "rgba(255, 255, 255, 0.9)",
                  border: "none",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => (e.target.style.backgroundColor = "white")}
                onMouseLeave={(e) => (e.target.style.backgroundColor = "rgba(255, 255, 255, 0.9)")}
              >
                <ChevronRight size={20} style={{ color: "#374151" }} />
              </button>

              {/* Botões de Ação sobre a Imagem */}
              <div
                style={{
                  position: "absolute",
                  bottom: "1rem",
                  left: "50%",
                  transform: "translateX(-50%)",
                  display: "flex",
                  gap: "0.75rem",
                }}
              >
                <button
                  onClick={() => setShowAllPhotos(true)}
                  style={{
                    padding: "0.75rem 1.5rem",
                    backgroundColor: "#22c55e",
                    color: "white",
                    border: "none",
                    borderRadius: "8px",
                    fontSize: "0.875rem",
                    fontWeight: "600",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => (e.target.style.backgroundColor = "#16a34a")}
                  onMouseLeave={(e) => (e.target.style.backgroundColor = "#22c55e")}
                >
                  Ver Todas as Fotos
                </button>

                <button
                  onClick={() => setShowVideoModal(true)}
                  style={{
                    padding: "0.75rem 1.5rem",
                    backgroundColor: "rgba(255, 255, 255, 0.95)",
                    color: "#374151",
                    border: "none",
                    borderRadius: "8px",
                    fontSize: "0.875rem",
                    fontWeight: "600",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => (e.target.style.backgroundColor = "white")}
                  onMouseLeave={(e) => (e.target.style.backgroundColor = "rgba(255, 255, 255, 0.95)")}
                >
                  <Play size={16} />
                  Vídeos
                </button>
              </div>
            </div>

            {/* Miniaturas */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(6, 1fr)",
                gap: "0.5rem",
              }}
            >
              {vehicle.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  style={{
                    height: "80px",
                    borderRadius: "8px",
                    overflow: "hidden",
                    border: currentImageIndex === index ? "3px solid var(--primary-orange)" : "2px solid #e2e8f0",
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                    padding: 0,
                    backgroundColor: "transparent",
                  }}
                >
                  <img
                    src={image || "/placeholder.svg"}
                    alt={`${vehicle.name} - Foto ${index + 1}`}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Informações do Veículo */}
          <div>
            <div
              style={{
                backgroundColor: "white",
                borderRadius: "12px",
                padding: "2rem",
                boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)",
                border: "1px solid #e2e8f0",
                position: "sticky",
                top: "110px",
              }}
            >
              {/* Cabeçalho */}
              <div style={{ marginBottom: "1.5rem" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    marginBottom: "1rem",
                  }}
                >
                  <div>
                    {vehicle.featured && (
                      <div
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "0.25rem",
                          backgroundColor: "var(--primary-orange)",
                          color: "white",
                          padding: "0.25rem 0.75rem",
                          borderRadius: "20px",
                          fontSize: "0.75rem",
                          fontWeight: "600",
                          marginBottom: "0.75rem",
                        }}
                      >
                        <Award size={12} />
                        Premium
                      </div>
                    )}
                    <h1
                      style={{
                        fontSize: "1.5rem",
                        fontWeight: "800",
                        color: "#1e293b",
                        lineHeight: "1.3",
                        marginBottom: "0.5rem",
                      }}
                    >
                      {vehicle.name}
                    </h1>
                    <p style={{ color: "#64748b", fontSize: "0.875rem" }}>
                      {vehicle.brand} • {vehicle.model} • {vehicle.version}
                    </p>
                  </div>

                  <div style={{ display: "flex", gap: "0.5rem" }}>
                    <button
                      style={{
                        width: "40px",
                        height: "40px",
                        backgroundColor: "#f8fafc",
                        border: "1px solid #e2e8f0",
                        borderRadius: "8px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: "pointer",
                        transition: "all 0.2s ease",
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.backgroundColor = "#fee2e2"
                        e.target.style.borderColor = "#fecaca"
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.backgroundColor = "#f8fafc"
                        e.target.style.borderColor = "#e2e8f0"
                      }}
                    >
                      <Heart size={18} style={{ color: "#ef4444" }} />
                    </button>
                    <button
                      style={{
                        width: "40px",
                        height: "40px",
                        backgroundColor: "#f8fafc",
                        border: "1px solid #e2e8f0",
                        borderRadius: "8px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: "pointer",
                        transition: "all 0.2s ease",
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.backgroundColor = "#eff6ff"
                        e.target.style.borderColor = "#bfdbfe"
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.backgroundColor = "#f8fafc"
                        e.target.style.borderColor = "#e2e8f0"
                      }}
                    >
                      <Share2 size={18} style={{ color: "#3b82f6" }} />
                    </button>
                  </div>
                </div>

                {/* Preço */}
                <div
                  style={{
                    backgroundColor: "#fef7ed",
                    border: "2px solid var(--primary-orange)",
                    borderRadius: "12px",
                    padding: "1.5rem",
                    textAlign: "center",
                    marginBottom: "1.5rem",
                  }}
                >
                  <div
                    style={{
                      fontSize: "2rem",
                      fontWeight: "900",
                      color: "var(--primary-orange)",
                      lineHeight: "1",
                    }}
                  >
                    R$ {vehicle.price.toLocaleString("pt-BR")}
                  </div>
                  <p style={{ color: "#92400e", fontSize: "0.875rem", marginTop: "0.5rem" }}>À vista ou financiado</p>
                </div>
              </div>

              {/* Especificações Principais */}
              <div style={{ marginBottom: "2rem" }}>
                <h3
                  style={{
                    fontSize: "1.125rem",
                    fontWeight: "700",
                    color: "#1e293b",
                    marginBottom: "1rem",
                  }}
                >
                  Especificações
                </h3>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.75rem",
                      padding: "0.75rem",
                      backgroundColor: "#f8fafc",
                      borderRadius: "8px",
                      border: "1px solid #e2e8f0",
                    }}
                  >
                    <Calendar size={18} style={{ color: "var(--primary-orange)" }} />
                    <div>
                      <div style={{ fontSize: "0.875rem", fontWeight: "600", color: "#1e293b" }}>{vehicle.year}</div>
                      <div style={{ fontSize: "0.75rem", color: "#64748b" }}>Ano</div>
                    </div>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.75rem",
                      padding: "0.75rem",
                      backgroundColor: "#f8fafc",
                      borderRadius: "8px",
                      border: "1px solid #e2e8f0",
                    }}
                  >
                    <Gauge size={18} style={{ color: "var(--primary-orange)" }} />
                    <div>
                      <div style={{ fontSize: "0.875rem", fontWeight: "600", color: "#1e293b" }}>{vehicle.km} km</div>
                      <div style={{ fontSize: "0.75rem", color: "#64748b" }}>Quilometragem</div>
                    </div>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.75rem",
                      padding: "0.75rem",
                      backgroundColor: "#f8fafc",
                      borderRadius: "8px",
                      border: "1px solid #e2e8f0",
                    }}
                  >
                    <Fuel size={18} style={{ color: "var(--primary-orange)" }} />
                    <div>
                      <div style={{ fontSize: "0.875rem", fontWeight: "600", color: "#1e293b" }}>{vehicle.fuel}</div>
                      <div style={{ fontSize: "0.75rem", color: "#64748b" }}>Combustível</div>
                    </div>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.75rem",
                      padding: "0.75rem",
                      backgroundColor: "#f8fafc",
                      borderRadius: "8px",
                      border: "1px solid #e2e8f0",
                    }}
                  >
                    <Settings size={18} style={{ color: "var(--primary-orange)" }} />
                    <div>
                      <div style={{ fontSize: "0.875rem", fontWeight: "600", color: "#1e293b" }}>
                        {vehicle.transmission}
                      </div>
                      <div style={{ fontSize: "0.75rem", color: "#64748b" }}>Transmissão</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Botões de Ação */}
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                <a
                  href="https://wa.me/5511999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    padding: "1rem",
                    backgroundColor: "var(--primary-orange)",
                    color: "white",
                    border: "none",
                    borderRadius: "8px",
                    fontSize: "0.875rem",
                    fontWeight: "600",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.5rem",
                    textDecoration: "none",
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => (e.target.style.backgroundColor = "var(--primary-orange-dark)")}
                  onMouseLeave={(e) => (e.target.style.backgroundColor = "var(--primary-orange)")}
                >
                  <MessageCircle size={18} />
                  Conversar no WhatsApp
                </a>

                <a
                  href="tel:1134567890"
                  style={{
                    padding: "1rem",
                    backgroundColor: "white",
                    color: "var(--primary-orange)",
                    border: "2px solid var(--primary-orange)",
                    borderRadius: "8px",
                    fontSize: "0.875rem",
                    fontWeight: "600",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.5rem",
                    textDecoration: "none",
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = "var(--primary-orange)"
                    e.target.style.color = "white"
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = "white"
                    e.target.style.color = "var(--primary-orange)"
                  }}
                >
                  <Phone size={18} />
                  Ligar Agora
                </a>
              </div>

              {/* Informações da Loja */}
              <div
                style={{
                  marginTop: "1.5rem",
                  paddingTop: "1.5rem",
                  borderTop: "1px solid #e2e8f0",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
                  <MapPin size={16} style={{ color: "var(--primary-orange)" }} />
                  <span style={{ fontSize: "0.875rem", color: "#64748b" }}>
                    Rua das Flores, 123 - Centro, São Paulo
                  </span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                  <Clock size={16} style={{ color: "var(--primary-orange)" }} />
                  <span style={{ fontSize: "0.875rem", color: "#64748b" }}>Seg-Sex: 8h às 18h | Sáb: 8h às 15h</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Seção de Detalhes Completos */}
        <div style={{ marginTop: "3rem" }}>
          <div
            style={{
              backgroundColor: "white",
              borderRadius: "12px",
              padding: "2rem",
              boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)",
              border: "1px solid #e2e8f0",
            }}
          >
            <h2
              style={{
                fontSize: "1.5rem",
                fontWeight: "800",
                color: "#1e293b",
                marginBottom: "1.5rem",
              }}
            >
              Detalhes Completos
            </h2>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}>
              {/* Descrição */}
              <div>
                <h3
                  style={{
                    fontSize: "1.125rem",
                    fontWeight: "700",
                    color: "#1e293b",
                    marginBottom: "1rem",
                  }}
                >
                  Descrição
                </h3>
                <p
                  style={{
                    color: "#64748b",
                    lineHeight: "1.6",
                    marginBottom: "1.5rem",
                  }}
                >
                  {vehicle.description}
                </p>

                <h4
                  style={{
                    fontSize: "1rem",
                    fontWeight: "600",
                    color: "#1e293b",
                    marginBottom: "0.75rem",
                  }}
                >
                  Opcionais e Equipamentos
                </h4>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.5rem" }}>
                  {vehicle.features.map((feature, index) => (
                    <div
                      key={index}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                        fontSize: "0.875rem",
                        color: "#64748b",
                      }}
                    >
                      <CheckCircle size={14} style={{ color: "#22c55e" }} />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              {/* Especificações Técnicas */}
              <div>
                <h3
                  style={{
                    fontSize: "1.125rem",
                    fontWeight: "700",
                    color: "#1e293b",
                    marginBottom: "1rem",
                  }}
                >
                  Especificações Técnicas
                </h3>

                <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                  {[
                    { label: "Marca", value: vehicle.brand },
                    { label: "Modelo", value: vehicle.model },
                    { label: "Versão", value: vehicle.version },
                    { label: "Ano/Modelo", value: vehicle.year },
                    { label: "Cor", value: vehicle.color },
                    { label: "Combustível", value: vehicle.fuel },
                    { label: "Motor", value: vehicle.engine },
                    { label: "Transmissão", value: vehicle.transmission },
                    { label: "Portas", value: vehicle.doors },
                    { label: "Quilometragem", value: `${vehicle.km} km` },
                    { label: "Placa", value: vehicle.plate },
                    { label: "RENAVAM", value: vehicle.renavam },
                    { label: "Chassi", value: vehicle.chassi },
                  ].map((spec, index) => (
                    <div
                      key={index}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        padding: "0.75rem",
                        backgroundColor: index % 2 === 0 ? "#f8fafc" : "transparent",
                        borderRadius: "6px",
                      }}
                    >
                      <span style={{ fontSize: "0.875rem", color: "#64748b", fontWeight: "500" }}>{spec.label}:</span>
                      <span style={{ fontSize: "0.875rem", color: "#1e293b", fontWeight: "600" }}>{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal de Todas as Fotos */}
      {showAllPhotos && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.9)",
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "2rem",
          }}
          onClick={() => setShowAllPhotos(false)}
        >
          <div
            style={{
              backgroundColor: "white",
              borderRadius: "12px",
              padding: "2rem",
              maxWidth: "90vw",
              maxHeight: "90vh",
              overflow: "auto",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }}
            >
              <h3 style={{ fontSize: "1.25rem", fontWeight: "700", color: "#1e293b" }}>
                Todas as Fotos - {vehicle.name}
              </h3>
              <button
                onClick={() => setShowAllPhotos(false)}
                style={{
                  width: "32px",
                  height: "32px",
                  backgroundColor: "#f1f5f9",
                  border: "none",
                  borderRadius: "50%",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                ✕
              </button>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1rem" }}>
              {vehicle.images.map((image, index) => (
                <img
                  key={index}
                  src={image || "/placeholder.svg"}
                  alt={`${vehicle.name} - Foto ${index + 1}`}
                  style={{
                    width: "100%",
                    height: "200px",
                    objectFit: "cover",
                    borderRadius: "8px",
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Modal de Vídeos */}
      {showVideoModal && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.9)",
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "2rem",
          }}
          onClick={() => setShowVideoModal(false)}
        >
          <div
            style={{
              backgroundColor: "white",
              borderRadius: "12px",
              padding: "2rem",
              maxWidth: "90vw",
              maxHeight: "90vh",
              overflow: "auto",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }}
            >
              <h3 style={{ fontSize: "1.25rem", fontWeight: "700", color: "#1e293b" }}>Vídeos - {vehicle.name}</h3>
              <button
                onClick={() => setShowVideoModal(false)}
                style={{
                  width: "32px",
                  height: "32px",
                  backgroundColor: "#f1f5f9",
                  border: "none",
                  borderRadius: "50%",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                ✕
              </button>
            </div>

            <div
              style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))", gap: "1.5rem" }}
            >
              {vehicle.videos.map((video) => (
                <div key={video.id}>
                  <h4 style={{ fontSize: "1rem", fontWeight: "600", color: "#1e293b", marginBottom: "0.75rem" }}>
                    {video.title}
                  </h4>
                  <iframe
                    src={video.url}
                    title={video.title}
                    style={{
                      width: "100%",
                      height: "250px",
                      borderRadius: "8px",
                      border: "none",
                    }}
                    allowFullScreen
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default VeiculoDetalhes
