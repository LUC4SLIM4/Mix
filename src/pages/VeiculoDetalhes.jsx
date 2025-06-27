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
    <div style={{ paddingTop: "clamp(70px, 15vw, 102px)", backgroundColor: "#f8fafc", minHeight: "100vh" }}>
      {/* Breadcrumb */}
      <div style={{ backgroundColor: "white", borderBottom: "1px solid #e2e8f0" }}>
        <div
          className="container"
          style={{
            padding: "clamp(0.75rem, 2vw, 1rem)",
            maxWidth: "min(1200px, 95%)",
            margin: "0 auto",
          }}
        >
          <nav
            style={{
              display: "flex",
              alignItems: "center",
              gap: "clamp(0.25rem, 1vw, 0.5rem)",
              fontSize: "clamp(0.75rem, 2vw, 0.875rem)",
              flexWrap: "wrap",
            }}
          >
            <Link to="/" style={{ color: "#64748b", textDecoration: "none" }}>
              Home
            </Link>
            <span style={{ color: "#cbd5e1" }}>›</span>
            <Link to="/estoque" style={{ color: "#64748b", textDecoration: "none" }}>
              Estoque
            </Link>
            <span style={{ color: "#cbd5e1" }}>›</span>
            <span
              style={{
                color: "#1e293b",
                fontWeight: "500",
                wordBreak: "break-word",
                lineHeight: "1.4",
              }}
            >
              {vehicle.name}
            </span>
          </nav>
        </div>
      </div>

      <div
        className="container"
        style={{
          padding: "clamp(1rem, 3vw, 2rem)",
          maxWidth: "min(1200px, 95%)",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "clamp(1.5rem, 4vw, 2rem)",
            alignItems: "start",
          }}
        >
          {/* Galeria Principal */}
          <div style={{ order: 1 }}>
            {/* Imagem Principal */}
            <div
              style={{
                position: "relative",
                backgroundColor: "#f1f5f9",
                borderRadius: "clamp(8px, 2vw, 12px)",
                overflow: "hidden",
                marginBottom: "clamp(0.75rem, 2vw, 1rem)",
                height: "clamp(250px, 50vw, 500px)",
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
                  left: "clamp(0.5rem, 2vw, 1rem)",
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: "clamp(32px, 8vw, 40px)",
                  height: "clamp(32px, 8vw, 40px)",
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
                <ChevronLeft size={window.innerWidth <= 480 ? 16 : 20} style={{ color: "#374151" }} />
              </button>

              <button
                onClick={nextImage}
                style={{
                  position: "absolute",
                  right: "clamp(0.5rem, 2vw, 1rem)",
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: "clamp(32px, 8vw, 40px)",
                  height: "clamp(32px, 8vw, 40px)",
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
                <ChevronRight size={window.innerWidth <= 480 ? 16 : 20} style={{ color: "#374151" }} />
              </button>

              {/* Botões de Ação sobre a Imagem */}
              <div
                style={{
                  position: "absolute",
                  bottom: "clamp(0.5rem, 2vw, 1rem)",
                  left: "50%",
                  transform: "translateX(-50%)",
                  display: "flex",
                  gap: "clamp(0.5rem, 1.5vw, 0.75rem)",
                  flexWrap: "wrap",
                  justifyContent: "center",
                }}
              >
                <button
                  onClick={() => setShowAllPhotos(true)}
                  style={{
                    padding: "clamp(0.5rem, 1.5vw, 0.75rem) clamp(0.75rem, 2vw, 1.5rem)",
                    backgroundColor: "#22c55e",
                    color: "white",
                    border: "none",
                    borderRadius: "clamp(6px, 1.5vw, 8px)",
                    fontSize: "clamp(0.7rem, 1.8vw, 0.875rem)",
                    fontWeight: "600",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: "clamp(0.25rem, 1vw, 0.5rem)",
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
                    transition: "all 0.2s ease",
                    whiteSpace: "nowrap",
                  }}
                  onMouseEnter={(e) => (e.target.style.backgroundColor = "#16a34a")}
                  onMouseLeave={(e) => (e.target.style.backgroundColor = "#22c55e")}
                >
                  {window.innerWidth <= 480 ? "Fotos" : "Ver Todas as Fotos"}
                </button>

                <button
                  onClick={() => setShowVideoModal(true)}
                  style={{
                    padding: "clamp(0.5rem, 1.5vw, 0.75rem) clamp(0.75rem, 2vw, 1.5rem)",
                    backgroundColor: "rgba(255, 255, 255, 0.95)",
                    color: "#374151",
                    border: "none",
                    borderRadius: "clamp(6px, 1.5vw, 8px)",
                    fontSize: "clamp(0.7rem, 1.8vw, 0.875rem)",
                    fontWeight: "600",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: "clamp(0.25rem, 1vw, 0.5rem)",
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
                    transition: "all 0.2s ease",
                    whiteSpace: "nowrap",
                  }}
                  onMouseEnter={(e) => (e.target.style.backgroundColor = "white")}
                  onMouseLeave={(e) => (e.target.style.backgroundColor = "rgba(255, 255, 255, 0.95)")}
                >
                  <Play size={window.innerWidth <= 480 ? 12 : 16} />
                  Vídeos
                </button>
              </div>
            </div>

            {/* Miniaturas */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(clamp(60px, 15vw, 100px), 1fr))",
                gap: "clamp(0.25rem, 1vw, 0.5rem)",
                marginBottom: "clamp(1.5rem, 4vw, 2rem)",
              }}
            >
              {vehicle.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  style={{
                    height: "clamp(50px, 12vw, 80px)",
                    borderRadius: "clamp(4px, 1vw, 8px)",
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
          <div style={{ order: 2 }}>
            <div
              style={{
                backgroundColor: "white",
                borderRadius: "clamp(8px, 2vw, 12px)",
                padding: "clamp(1.25rem, 4vw, 2rem)",
                boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)",
                border: "1px solid #e2e8f0",
                marginBottom: "clamp(1.5rem, 4vw, 2rem)",
              }}
            >
              {/* Cabeçalho */}
              <div style={{ marginBottom: "clamp(1rem, 3vw, 1.5rem)" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    marginBottom: "clamp(0.75rem, 2vw, 1rem)",
                    flexDirection: window.innerWidth <= 640 ? "column" : "row",
                    gap: window.innerWidth <= 640 ? "1rem" : "0",
                  }}
                >
                  <div style={{ flex: 1 }}>
                    {vehicle.featured && (
                      <div
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "clamp(0.125rem, 0.5vw, 0.25rem)",
                          backgroundColor: "var(--primary-orange)",
                          color: "white",
                          padding: "clamp(0.125rem, 0.5vw, 0.25rem) clamp(0.5rem, 1.5vw, 0.75rem)",
                          borderRadius: "clamp(10px, 3vw, 20px)",
                          fontSize: "clamp(0.625rem, 1.5vw, 0.75rem)",
                          fontWeight: "600",
                          marginBottom: "clamp(0.5rem, 1.5vw, 0.75rem)",
                        }}
                      >
                        <Award size={window.innerWidth <= 480 ? 10 : 12} />
                        Premium
                      </div>
                    )}
                    <h1
                      style={{
                        fontSize: "clamp(1.125rem, 4vw, 1.5rem)",
                        fontWeight: "800",
                        color: "#1e293b",
                        lineHeight: "1.3",
                        marginBottom: "clamp(0.25rem, 1vw, 0.5rem)",
                        wordBreak: "break-word",
                      }}
                    >
                      {vehicle.name}
                    </h1>
                    <p
                      style={{
                        color: "#64748b",
                        fontSize: "clamp(0.75rem, 2vw, 0.875rem)",
                        lineHeight: "1.4",
                      }}
                    >
                      {vehicle.brand} • {vehicle.model} • {vehicle.version}
                    </p>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      gap: "clamp(0.25rem, 1vw, 0.5rem)",
                      flexShrink: 0,
                      alignSelf: window.innerWidth <= 640 ? "center" : "flex-start",
                    }}
                  >
                    <button
                      style={{
                        width: "clamp(32px, 8vw, 40px)",
                        height: "clamp(32px, 8vw, 40px)",
                        backgroundColor: "#f8fafc",
                        border: "1px solid #e2e8f0",
                        borderRadius: "clamp(6px, 1.5vw, 8px)",
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
                      <Heart size={window.innerWidth <= 480 ? 14 : 18} style={{ color: "#ef4444" }} />
                    </button>
                    <button
                      style={{
                        width: "clamp(32px, 8vw, 40px)",
                        height: "clamp(32px, 8vw, 40px)",
                        backgroundColor: "#f8fafc",
                        border: "1px solid #e2e8f0",
                        borderRadius: "clamp(6px, 1.5vw, 8px)",
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
                      <Share2 size={window.innerWidth <= 480 ? 14 : 18} style={{ color: "#3b82f6" }} />
                    </button>
                  </div>
                </div>

                {/* Preço */}
                <div
                  style={{
                    backgroundColor: "#fef7ed",
                    border: "2px solid var(--primary-orange)",
                    borderRadius: "clamp(8px, 2vw, 12px)",
                    padding: "clamp(1rem, 3vw, 1.5rem)",
                    textAlign: "center",
                    marginBottom: "clamp(1rem, 3vw, 1.5rem)",
                  }}
                >
                  <div
                    style={{
                      fontSize: "clamp(1.5rem, 5vw, 2rem)",
                      fontWeight: "900",
                      color: "var(--primary-orange)",
                      lineHeight: "1",
                    }}
                  >
                    R$ {vehicle.price.toLocaleString("pt-BR")}
                  </div>
                  <p
                    style={{
                      color: "#92400e",
                      fontSize: "clamp(0.75rem, 2vw, 0.875rem)",
                      marginTop: "clamp(0.25rem, 1vw, 0.5rem)",
                    }}
                  >
                    À vista ou financiado
                  </p>
                </div>
              </div>

              {/* Especificações Principais */}
              <div style={{ marginBottom: "clamp(1.5rem, 4vw, 2rem)" }}>
                <h3
                  style={{
                    fontSize: "clamp(1rem, 3vw, 1.125rem)",
                    fontWeight: "700",
                    color: "#1e293b",
                    marginBottom: "clamp(0.75rem, 2vw, 1rem)",
                  }}
                >
                  Especificações
                </h3>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(clamp(140px, 40vw, 180px), 1fr))",
                    gap: "clamp(0.5rem, 1.5vw, 1rem)",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "clamp(0.5rem, 1.5vw, 0.75rem)",
                      padding: "clamp(0.5rem, 1.5vw, 0.75rem)",
                      backgroundColor: "#f8fafc",
                      borderRadius: "clamp(6px, 1.5vw, 8px)",
                      border: "1px solid #e2e8f0",
                    }}
                  >
                    <Calendar size={window.innerWidth <= 480 ? 14 : 18} style={{ color: "var(--primary-orange)" }} />
                    <div>
                      <div
                        style={{
                          fontSize: "clamp(0.75rem, 2vw, 0.875rem)",
                          fontWeight: "600",
                          color: "#1e293b",
                        }}
                      >
                        {vehicle.year}
                      </div>
                      <div
                        style={{
                          fontSize: "clamp(0.625rem, 1.5vw, 0.75rem)",
                          color: "#64748b",
                        }}
                      >
                        Ano
                      </div>
                    </div>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "clamp(0.5rem, 1.5vw, 0.75rem)",
                      padding: "clamp(0.5rem, 1.5vw, 0.75rem)",
                      backgroundColor: "#f8fafc",
                      borderRadius: "clamp(6px, 1.5vw, 8px)",
                      border: "1px solid #e2e8f0",
                    }}
                  >
                    <Gauge size={window.innerWidth <= 480 ? 14 : 18} style={{ color: "var(--primary-orange)" }} />
                    <div>
                      <div
                        style={{
                          fontSize: "clamp(0.75rem, 2vw, 0.875rem)",
                          fontWeight: "600",
                          color: "#1e293b",
                        }}
                      >
                        {vehicle.km} km
                      </div>
                      <div
                        style={{
                          fontSize: "clamp(0.625rem, 1.5vw, 0.75rem)",
                          color: "#64748b",
                        }}
                      >
                        Quilometragem
                      </div>
                    </div>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "clamp(0.5rem, 1.5vw, 0.75rem)",
                      padding: "clamp(0.5rem, 1.5vw, 0.75rem)",
                      backgroundColor: "#f8fafc",
                      borderRadius: "clamp(6px, 1.5vw, 8px)",
                      border: "1px solid #e2e8f0",
                    }}
                  >
                    <Fuel size={window.innerWidth <= 480 ? 14 : 18} style={{ color: "var(--primary-orange)" }} />
                    <div>
                      <div
                        style={{
                          fontSize: "clamp(0.75rem, 2vw, 0.875rem)",
                          fontWeight: "600",
                          color: "#1e293b",
                        }}
                      >
                        {vehicle.fuel}
                      </div>
                      <div
                        style={{
                          fontSize: "clamp(0.625rem, 1.5vw, 0.75rem)",
                          color: "#64748b",
                        }}
                      >
                        Combustível
                      </div>
                    </div>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "clamp(0.5rem, 1.5vw, 0.75rem)",
                      padding: "clamp(0.5rem, 1.5vw, 0.75rem)",
                      backgroundColor: "#f8fafc",
                      borderRadius: "clamp(6px, 1.5vw, 8px)",
                      border: "1px solid #e2e8f0",
                    }}
                  >
                    <Settings size={window.innerWidth <= 480 ? 14 : 18} style={{ color: "var(--primary-orange)" }} />
                    <div>
                      <div
                        style={{
                          fontSize: "clamp(0.75rem, 2vw, 0.875rem)",
                          fontWeight: "600",
                          color: "#1e293b",
                        }}
                      >
                        {vehicle.transmission}
                      </div>
                      <div
                        style={{
                          fontSize: "clamp(0.625rem, 1.5vw, 0.75rem)",
                          color: "#64748b",
                        }}
                      >
                        Transmissão
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Botões de Ação */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "clamp(0.5rem, 1.5vw, 0.75rem)",
                }}
              >
                <a
                  href="https://wa.me/5511999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    padding: "clamp(0.75rem, 2vw, 1rem)",
                    backgroundColor: "var(--primary-orange)",
                    color: "white",
                    border: "none",
                    borderRadius: "clamp(6px, 1.5vw, 8px)",
                    fontSize: "clamp(0.75rem, 2vw, 0.875rem)",
                    fontWeight: "600",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "clamp(0.25rem, 1vw, 0.5rem)",
                    textDecoration: "none",
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => (e.target.style.backgroundColor = "var(--primary-orange-dark)")}
                  onMouseLeave={(e) => (e.target.style.backgroundColor = "var(--primary-orange)")}
                >
                  <MessageCircle size={window.innerWidth <= 480 ? 16 : 18} />
                  Conversar no WhatsApp
                </a>

                <a
                  href="tel:1134567890"
                  style={{
                    padding: "clamp(0.75rem, 2vw, 1rem)",
                    backgroundColor: "white",
                    color: "var(--primary-orange)",
                    border: "2px solid var(--primary-orange)",
                    borderRadius: "clamp(6px, 1.5vw, 8px)",
                    fontSize: "clamp(0.75rem, 2vw, 0.875rem)",
                    fontWeight: "600",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "clamp(0.25rem, 1vw, 0.5rem)",
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
                  <Phone size={window.innerWidth <= 480 ? 16 : 18} />
                  Ligar Agora
                </a>
              </div>

              {/* Informações da Loja */}
              <div
                style={{
                  marginTop: "clamp(1rem, 3vw, 1.5rem)",
                  paddingTop: "clamp(1rem, 3vw, 1.5rem)",
                  borderTop: "1px solid #e2e8f0",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "clamp(0.5rem, 1.5vw, 0.75rem)",
                    marginBottom: "clamp(0.5rem, 1.5vw, 0.75rem)",
                    flexDirection: window.innerWidth <= 480 ? "column" : "row",
                  }}
                >
                  <MapPin
                    size={window.innerWidth <= 480 ? 14 : 16}
                    style={{
                      color: "var(--primary-orange)",
                      flexShrink: 0,
                      marginTop: window.innerWidth <= 480 ? "0" : "2px",
                    }}
                  />
                  <span
                    style={{
                      fontSize: "clamp(0.75rem, 2vw, 0.875rem)",
                      color: "#64748b",
                      lineHeight: "1.4",
                    }}
                  >
                    Rua das Flores, 123 - Centro, São Paulo
                  </span>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "clamp(0.5rem, 1.5vw, 0.75rem)",
                    flexDirection: window.innerWidth <= 480 ? "column" : "row",
                  }}
                >
                  <Clock
                    size={window.innerWidth <= 480 ? 14 : 16}
                    style={{
                      color: "var(--primary-orange)",
                      flexShrink: 0,
                      marginTop: window.innerWidth <= 480 ? "0" : "2px",
                    }}
                  />
                  <span
                    style={{
                      fontSize: "clamp(0.75rem, 2vw, 0.875rem)",
                      color: "#64748b",
                      lineHeight: "1.4",
                    }}
                  >
                    Seg-Sex: 8h às 18h | Sáb: 8h às 15h
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Seção de Detalhes Completos */}
        <div style={{ marginTop: "clamp(2rem, 5vw, 3rem)" }}>
          <div
            style={{
              backgroundColor: "white",
              borderRadius: "clamp(8px, 2vw, 12px)",
              padding: "clamp(1.25rem, 4vw, 2rem)",
              boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)",
              border: "1px solid #e2e8f0",
            }}
          >
            <h2
              style={{
                fontSize: "clamp(1.25rem, 4vw, 1.5rem)",
                fontWeight: "800",
                color: "#1e293b",
                marginBottom: "clamp(1rem, 3vw, 1.5rem)",
              }}
            >
              Detalhes Completos
            </h2>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr",
                gap: "clamp(1.5rem, 4vw, 2rem)",
              }}
            >
              {/* Descrição */}
              <div>
                <h3
                  style={{
                    fontSize: "clamp(1rem, 3vw, 1.125rem)",
                    fontWeight: "700",
                    color: "#1e293b",
                    marginBottom: "clamp(0.75rem, 2vw, 1rem)",
                  }}
                >
                  Descrição
                </h3>
                <p
                  style={{
                    color: "#64748b",
                    lineHeight: "1.6",
                    marginBottom: "clamp(1rem, 3vw, 1.5rem)",
                    fontSize: "clamp(0.875rem, 2.5vw, 1rem)",
                  }}
                >
                  {vehicle.description}
                </p>

                <h4
                  style={{
                    fontSize: "clamp(0.875rem, 2.5vw, 1rem)",
                    fontWeight: "600",
                    color: "#1e293b",
                    marginBottom: "clamp(0.5rem, 1.5vw, 0.75rem)",
                  }}
                >
                  Opcionais e Equipamentos
                </h4>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(clamp(200px, 45vw, 250px), 1fr))",
                    gap: "clamp(0.25rem, 1vw, 0.5rem)",
                  }}
                >
                  {vehicle.features.map((feature, index) => (
                    <div
                      key={index}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "clamp(0.25rem, 1vw, 0.5rem)",
                        fontSize: "clamp(0.75rem, 2vw, 0.875rem)",
                        color: "#64748b",
                        lineHeight: "1.4",
                      }}
                    >
                      <CheckCircle
                        size={window.innerWidth <= 480 ? 12 : 14}
                        style={{
                          color: "#22c55e",
                          flexShrink: 0,
                        }}
                      />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              {/* Especificações Técnicas */}
              <div>
                <h3
                  style={{
                    fontSize: "clamp(1rem, 3vw, 1.125rem)",
                    fontWeight: "700",
                    color: "#1e293b",
                    marginBottom: "clamp(0.75rem, 2vw, 1rem)",
                  }}
                >
                  Especificações Técnicas
                </h3>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "clamp(0.5rem, 1.5vw, 0.75rem)",
                  }}
                >
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
                        padding: "clamp(0.5rem, 1.5vw, 0.75rem)",
                        backgroundColor: index % 2 === 0 ? "#f8fafc" : "transparent",
                        borderRadius: "clamp(4px, 1vw, 6px)",
                        flexDirection: window.innerWidth <= 480 ? "column" : "row",
                        alignItems: window.innerWidth <= 480 ? "flex-start" : "center",
                        gap: window.innerWidth <= 480 ? "0.25rem" : "0",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "clamp(0.75rem, 2vw, 0.875rem)",
                          color: "#64748b",
                          fontWeight: "500",
                        }}
                      >
                        {spec.label}:
                      </span>
                      <span
                        style={{
                          fontSize: "clamp(0.75rem, 2vw, 0.875rem)",
                          color: "#1e293b",
                          fontWeight: "600",
                          wordBreak: "break-all",
                          textAlign: window.innerWidth <= 480 ? "left" : "right",
                        }}
                      >
                        {spec.value}
                      </span>
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
            padding: "clamp(1rem, 3vw, 2rem)",
          }}
          onClick={() => setShowAllPhotos(false)}
        >
          <div
            style={{
              backgroundColor: "white",
              borderRadius: "clamp(8px, 2vw, 12px)",
              padding: "clamp(1rem, 3vw, 2rem)",
              maxWidth: "min(95vw, 1000px)",
              maxHeight: "min(95vh, 800px)",
              overflow: "auto",
              width: "100%",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "clamp(1rem, 3vw, 1.5rem)",
                flexDirection: window.innerWidth <= 480 ? "column" : "row",
                gap: window.innerWidth <= 480 ? "1rem" : "0",
              }}
            >
              <h3
                style={{
                  fontSize: "clamp(1rem, 3vw, 1.25rem)",
                  fontWeight: "700",
                  color: "#1e293b",
                  textAlign: window.innerWidth <= 480 ? "center" : "left",
                  wordBreak: "break-word",
                  lineHeight: "1.3",
                  margin: 0,
                }}
              >
                Todas as Fotos - {vehicle.name}
              </h3>
              <button
                onClick={() => setShowAllPhotos(false)}
                style={{
                  width: "clamp(28px, 6vw, 32px)",
                  height: "clamp(28px, 6vw, 32px)",
                  backgroundColor: "#f1f5f9",
                  border: "none",
                  borderRadius: "50%",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  fontSize: "clamp(0.875rem, 2vw, 1rem)",
                }}
              >
                ✕
              </button>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(clamp(200px, 45vw, 300px), 1fr))",
                gap: "clamp(0.75rem, 2vw, 1rem)",
              }}
            >
              {vehicle.images.map((image, index) => (
                <img
                  key={index}
                  src={image || "/placeholder.svg"}
                  alt={`${vehicle.name} - Foto ${index + 1}`}
                  style={{
                    width: "100%",
                    height: "clamp(150px, 35vw, 200px)",
                    objectFit: "cover",
                    borderRadius: "clamp(6px, 1.5vw, 8px)",
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
            padding: "clamp(1rem, 3vw, 2rem)",
          }}
          onClick={() => setShowVideoModal(false)}
        >
          <div
            style={{
              backgroundColor: "white",
              borderRadius: "clamp(8px, 2vw, 12px)",
              padding: "clamp(1rem, 3vw, 2rem)",
              maxWidth: "min(95vw, 1000px)",
              maxHeight: "min(95vh, 800px)",
              overflow: "auto",
              width: "100%",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "clamp(1rem, 3vw, 1.5rem)",
                flexDirection: window.innerWidth <= 480 ? "column" : "row",
                gap: window.innerWidth <= 480 ? "1rem" : "0",
              }}
            >
              <h3
                style={{
                  fontSize: "clamp(1rem, 3vw, 1.25rem)",
                  fontWeight: "700",
                  color: "#1e293b",
                  textAlign: window.innerWidth <= 480 ? "center" : "left",
                  wordBreak: "break-word",
                  lineHeight: "1.3",
                  margin: 0,
                }}
              >
                Vídeos - {vehicle.name}
              </h3>
              <button
                onClick={() => setShowVideoModal(false)}
                style={{
                  width: "clamp(28px, 6vw, 32px)",
                  height: "clamp(28px, 6vw, 32px)",
                  backgroundColor: "#f1f5f9",
                  border: "none",
                  borderRadius: "50%",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  fontSize: "clamp(0.875rem, 2vw, 1rem)",
                }}
              >
                ✕
              </button>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(clamp(300px, 80vw, 400px), 1fr))",
                gap: "clamp(1rem, 3vw, 1.5rem)",
              }}
            >
              {vehicle.videos.map((video) => (
                <div key={video.id}>
                  <h4
                    style={{
                      fontSize: "clamp(0.875rem, 2.5vw, 1rem)",
                      fontWeight: "600",
                      color: "#1e293b",
                      marginBottom: "clamp(0.5rem, 1.5vw, 0.75rem)",
                      wordBreak: "break-word",
                      lineHeight: "1.3",
                    }}
                  >
                    {video.title}
                  </h4>
                  <iframe
                    src={video.url}
                    title={video.title}
                    style={{
                      width: "100%",
                      height: "clamp(180px, 40vw, 250px)",
                      borderRadius: "clamp(6px, 1.5vw, 8px)",
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

      {/* CSS Variables */}
      <style jsx>{`
        :root {
          --primary-orange: #f97316;
          --primary-orange-dark: #ea580c;
        }

        @media (min-width: 1024px) {
          .container > div:first-child {
            display: grid;
            grid-template-columns: 2fr 1fr;
            gap: clamp(1.5rem, 4vw, 2rem);
          }
          
          .container > div:first-child > div:nth-child(2) > div {
            position: sticky;
            top: clamp(80px, 15vw, 110px);
          }
        }

        @media (min-width: 1200px) {
          .container > div:last-child > div > div:last-child {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: clamp(1.5rem, 4vw, 2rem);
          }
        }
      `}</style>
    </div>
  )
}

export default VeiculoDetalhes
