"use client"

import { useState } from "react"
import {
  Search,
  Car,
  Phone,
  MessageCircle,
  Shield,
  ArrowRight,
  Star,
  Users,
  TrendingUp,
  Heart,
  Target,
} from "lucide-react"
import VehicleCard from "../components/VehicleCard"
import faxada from "../assets/faxada.png"

const Home = () => {
  const [searchFilters, setSearchFilters] = useState({
    marca: "",
    modelo: "",
    ano: "",
  })

  const featuredVehicles = [
    {
      id: 1,
      name: "TOYOTA HILUX CD GR-S 4X4 2.8 TDI DIES. AUT.",
      price: 295900,
      km: "23.000",
      fuel: "Diesel",
      year: "2023",
      image:
        "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      featured: true,
      status: "disponivel",
    },
    {
      id: 2,
      name: "BMW 320IA 2.0 TB M SPORT A.FLEX/M.SPORT 4P",
      price: 320900,
      km: "17.200",
      fuel: "Flex",
      year: "2024",
      image:
        "https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      featured: true,
      status: "reservado",
    },
    {
      id: 3,
      name: "HONDA ZR-V TOURING 2.0 16V 5P AUT.",
      price: 169900,
      km: "4.700",
      fuel: "Gasolina",
      year: "2023",
      image:
        "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      featured: true,
      status: "disponivel",
    },
    {
      id: 4,
      name: "TOYOTA HILUX CD GR-S 4X4 2.8 TDI DIES. AUT.",
      price: 295900,
      km: "23.000",
      fuel: "Diesel",
      year: "2023",
      image:
        "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      featured: true,
      status: "disponivel",
    },
    {
      id: 5,
      name: "BMW 320IA 2.0 TB M SPORT A.FLEX/M.SPORT 4P",
      price: 320900,
      km: "17.200",
      fuel: "Flex",
      year: "2024",
      image:
        "https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      featured: true,
      status: "reservado",
    },
    {
      id: 6,
      name: "HONDA ZR-V TOURING 2.0 16V 5P AUT.",
      price: 169900,
      km: "4.700",
      fuel: "Gasolina",
      year: "2023",
      image:
        "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      featured: true,
      status: "disponivel",
    },
    {
      id: 7,
      name: "BMW 320IA 2.0 TB M SPORT A.FLEX/M.SPORT 4P",
      price: 320900,
      km: "17.200",
      fuel: "Flex",
      year: "2024",
      image:
        "https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      featured: true,
      status: "reservado",
    },
    {
      id: 8,
      name: "HONDA ZR-V TOURING 2.0 16V 5P AUT.",
      price: 169900,
      km: "4.700",
      fuel: "Gasolina",
      year: "2023",
      image:
        "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      featured: true,
      status: "disponivel",
    },
  ]

  return (
    <div style={{ position: "relative" }}>
      {/* Banner de Fundo Fixo */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: "100vh",
          background: `
  linear-gradient(135deg, 
    rgba(26, 26, 26, 0.95) 0%, 
    rgba(255, 107, 53, 0.08) 50%, 
    rgba(26, 26, 26, 0.98) 100%
  ),
  url(${faxada})
`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: window.innerWidth > 768 ? "fixed" : "scroll",
          zIndex: -1,
        }}
      />

      {/* Conteúdo Flutuante */}
      <div style={{ position: "relative", zIndex: 1 }}>
        {/* Hero Section Minimalista */}
        <section
          style={{
            minHeight: "100vh",
            background: "transparent",
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden",
            paddingTop: "0",
          }}
        >
          <div className="container" style={{ position: "relative", zIndex: 2 }}>
            {/* Conteúdo Principal - Centralizado */}
            <div className="animate-slide-in" style={{ textAlign: "center", marginBottom: "clamp(3rem, 8vw, 4rem)" }}>
              <h1
                style={{
                  fontSize: "clamp(2rem, 8vw, 4rem)",
                  fontWeight: "900",
                  marginBottom: "clamp(1rem, 3vw, 1.5rem)",
                  lineHeight: "1.1",
                  color: "var(--accent-white)",
                  textShadow: "0 4px 20px rgba(0, 0, 0, 0.8)",
                  maxWidth: "min(800px, 90%)",
                  margin: "0 auto clamp(1rem, 3vw, 1.5rem)",
                }}
              >
                Seu próximo <span style={{ color: "var(--primary-orange)" }}>veículo dos sonhos</span> está aqui
              </h1>

              <p
                style={{
                  fontSize: "clamp(1rem, 3vw, 1.25rem)",
                  color: "rgba(255, 255, 255, 0.9)",
                  marginBottom: "clamp(2rem, 5vw, 2.5rem)",
                  textShadow: "0 2px 10px rgba(0, 0, 0, 0.5)",
                  maxWidth: "min(600px, 90%)",
                  margin: "0 auto clamp(2rem, 5vw, 2.5rem)",
                  lineHeight: "1.6",
                }}
              >
                Encontre o veículo perfeito com qualidade garantida e atendimento especializado
              </p>

              {/* CTA Buttons */}
              <div
                style={{
                  display: "flex",
                  gap: "clamp(0.75rem, 2vw, 1rem)",
                  flexWrap: "wrap",
                  justifyContent: "center",
                }}
              >
                <a
                  href="/estoque"
                  className="btn"
                  style={{
                    padding: "clamp(0.75rem, 2vw, 1rem) clamp(1.5rem, 3vw, 2rem)",
                    background: "var(--primary-orange)",
                    color: "var(--accent-white)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    backdropFilter: "blur(20px)",
                    fontSize: "clamp(0.8rem, 2vw, 0.9rem)",
                    fontWeight: "600",
                    boxShadow: "0 8px 25px rgba(255, 107, 53, 0.4)",
                  }}
                >
                  <Car size={18} />
                  Explorar Veículos
                </a>
                <a
                  href="/contato"
                  className="btn"
                  style={{
                    padding: "clamp(0.75rem, 2vw, 1rem) clamp(1.5rem, 3vw, 2rem)",
                    background: "rgba(255, 255, 255, 0.15)",
                    color: "var(--accent-white)",
                    border: "2px solid rgba(255, 255, 255, 0.4)",
                    backdropFilter: "blur(20px)",
                    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
                    fontSize: "clamp(0.8rem, 2vw, 0.9rem)",
                    fontWeight: "600",
                  }}
                >
                  <MessageCircle size={18} />
                  <span style={{ display: window.innerWidth <= 480 ? "none" : "inline" }}>Falar com Especialista</span>
                  <span style={{ display: window.innerWidth <= 480 ? "inline" : "none" }}>Contato</span>
                </a>
              </div>
            </div>

            {/* Formulário de Busca Minimalista - Posicionado abaixo */}
            <div className="animate-slide-up" style={{ maxWidth: "min(600px, 90%)", margin: "0 auto" }}>
              <div
                style={{
                  background: "rgba(255, 255, 255, 0.1)",
                  backdropFilter: "blur(20px)",
                  borderRadius: "16px",
                  padding: "clamp(1.25rem, 3vw, 1.5rem)",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
                }}
              >
                <form>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: window.innerWidth > 768 ? "1fr 1fr 1fr auto" : "1fr",
                      gap: "clamp(0.75rem, 2vw, 1rem)",
                      alignItems: "end",
                    }}
                  >
                    <div className="form-group">
                      <select
                        className="form-input"
                        style={{
                          background: "rgba(255, 255, 255, 0.1)",
                          backdropFilter: "blur(10px)",
                          border: "1px solid rgba(255, 255, 255, 0.2)",
                          color: "var(--accent-white)",
                          fontSize: "clamp(0.8rem, 2vw, 0.9rem)",
                          padding: "clamp(0.75rem, 2vw, 0.875rem)",
                          borderRadius: "8px",
                          width: "100%",
                        }}
                        value={searchFilters.marca}
                        onChange={(e) => setSearchFilters({ ...searchFilters, marca: e.target.value })}
                      >
                        <option value="" style={{ color: "var(--secondary-black)" }}>
                          Marca
                        </option>
                        <option value="honda" style={{ color: "var(--secondary-black)" }}>
                          Honda
                        </option>
                        <option value="toyota" style={{ color: "var(--secondary-black)" }}>
                          Toyota
                        </option>
                        <option value="volkswagen" style={{ color: "var(--secondary-black)" }}>
                          Volkswagen
                        </option>
                        <option value="ford" style={{ color: "var(--secondary-black)" }}>
                          Ford
                        </option>
                        <option value="bmw" style={{ color: "var(--secondary-black)" }}>
                          BMW
                        </option>
                        <option value="audi" style={{ color: "var(--secondary-black)" }}>
                          Audi
                        </option>
                      </select>
                    </div>

                    <div className="form-group">
                      <select
                        className="form-input"
                        style={{
                          background: "rgba(255, 255, 255, 0.1)",
                          backdropFilter: "blur(10px)",
                          border: "1px solid rgba(255, 255, 255, 0.2)",
                          color: "var(--accent-white)",
                          fontSize: "clamp(0.8rem, 2vw, 0.9rem)",
                          padding: "clamp(0.75rem, 2vw, 0.875rem)",
                          borderRadius: "8px",
                          width: "100%",
                        }}
                        value={searchFilters.modelo}
                        onChange={(e) => setSearchFilters({ ...searchFilters, modelo: e.target.value })}
                      >
                        <option value="" style={{ color: "var(--secondary-black)" }}>
                          Modelo
                        </option>
                        <option value="civic" style={{ color: "var(--secondary-black)" }}>
                          Civic
                        </option>
                        <option value="corolla" style={{ color: "var(--secondary-black)" }}>
                          Corolla
                        </option>
                        <option value="jetta" style={{ color: "var(--secondary-black)" }}>
                          Jetta
                        </option>
                        <option value="x3" style={{ color: "var(--secondary-black)" }}>
                          X3
                        </option>
                        <option value="a4" style={{ color: "var(--secondary-black)" }}>
                          A4
                        </option>
                      </select>
                    </div>

                    <div className="form-group">
                      <select
                        className="form-input"
                        style={{
                          background: "rgba(255, 255, 255, 0.1)",
                          backdropFilter: "blur(10px)",
                          border: "1px solid rgba(255, 255, 255, 0.2)",
                          color: "var(--accent-white)",
                          fontSize: "clamp(0.8rem, 2vw, 0.9rem)",
                          padding: "clamp(0.75rem, 2vw, 0.875rem)",
                          borderRadius: "8px",
                          width: "100%",
                        }}
                        value={searchFilters.ano}
                        onChange={(e) => setSearchFilters({ ...searchFilters, ano: e.target.value })}
                      >
                        <option value="" style={{ color: "var(--secondary-black)" }}>
                          Ano
                        </option>
                        <option value="2024" style={{ color: "var(--secondary-black)" }}>
                          2024
                        </option>
                        <option value="2023" style={{ color: "var(--secondary-black)" }}>
                          2023
                        </option>
                        <option value="2022" style={{ color: "var(--secondary-black)" }}>
                          2022
                        </option>
                        <option value="2021" style={{ color: "var(--secondary-black)" }}>
                          2021
                        </option>
                        <option value="2020" style={{ color: "var(--secondary-black)" }}>
                          2020
                        </option>
                      </select>
                    </div>

                    <button
                      type="submit"
                      className="btn"
                      style={{
                        background: "var(--primary-orange)",
                        color: "var(--accent-white)",
                        border: "none",
                        fontSize: "clamp(0.8rem, 2vw, 0.9rem)",
                        padding: "clamp(0.75rem, 2vw, 0.875rem) clamp(1rem, 2.5vw, 1.25rem)",
                        fontWeight: "600",
                        borderRadius: "8px",
                        boxShadow: "0 4px 15px rgba(255, 107, 53, 0.4)",
                        minWidth: window.innerWidth > 768 ? "auto" : "100%",
                        marginTop: window.innerWidth <= 768 ? "0.5rem" : "0",
                      }}
                    >
                      <Search size={16} />
                      {window.innerWidth > 768 ? "Buscar" : "Buscar Veículos"}
                    </button>
                  </div>
                </form>

                {/* Link para ajuda - Minimalista */}
                <div style={{ textAlign: "center", marginTop: "1rem" }}>
                  <button
                    className="btn"
                    style={{
                      fontSize: "clamp(0.75rem, 1.8vw, 0.8rem)",
                      padding: "0.5rem 1rem",
                      background: "transparent",
                      color: "rgba(255, 255, 255, 0.8)",
                      border: "1px solid rgba(255, 255, 255, 0.2)",
                      borderRadius: "6px",
                      fontWeight: "500",
                    }}
                  >
                    <Phone size={14} />
                    Precisa de ajuda? Fale conosco
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Resto das seções com fundo sólido */}
        <div style={{ background: "var(--accent-white)", position: "relative", zIndex: 2 }}>
          {/* Veículos em Destaque */}
          <section className="section">
            <div className="container">
              <div style={{ textAlign: "center", marginBottom: "clamp(2.5rem, 6vw, 3.5rem)" }}>
                <h2 className="section-title">Veículos em Destaque</h2>
                <p className="section-subtitle">
                  Seleção especial dos nossos melhores veículos com condições imperdíveis
                </p>
              </div>

              <div className="grid grid-3">
                {featuredVehicles.map((vehicle) => (
                  <VehicleCard key={vehicle.id} vehicle={vehicle} />
                ))}
              </div>

              <div style={{ textAlign: "center", marginTop: "clamp(2rem, 5vw, 2.5rem)" }}>
                <a
                  href="/estoque"
                  className="btn btn-primary"
                  style={{ padding: "clamp(0.75rem, 2vw, 1rem) clamp(2rem, 4vw, 2.5rem)" }}
                >
                  Ver Todo o Estoque
                  <ArrowRight size={18} />
                </a>
              </div>
            </div>
          </section>

          <section className="section" style={{ backgroundColor: "var(--gray-50)" }}>
            <div className="container">
              <div style={{ textAlign: "center", marginBottom: "clamp(3rem, 7vw, 4rem)" }}>
                <h2 className="section-title">Por que escolher a Mix Automóveis?</h2>
                <p className="section-subtitle">
                  Somos especialistas em conectar você ao veículo perfeito com segurança, qualidade e confiança
                </p>
              </div>

              {/* Layout de Cards Minimalista */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(min(280px, 100%), 1fr))",
                  gap: "clamp(1.5rem, 4vw, 2rem)",
                  maxWidth: "1000px",
                  margin: "0 auto",
                }}
              >
                {/* Card 1 - Qualidade Certificada */}
                <div
                  className="feature-card"
                  style={{
                    background: "var(--accent-white)",
                    borderRadius: "16px",
                    padding: "clamp(2rem, 5vw, 2.5rem)",
                    textAlign: "center",
                    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
                    border: "1px solid rgba(0, 0, 0, 0.05)",
                    transition: "all 0.3s ease",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      width: "80px",
                      height: "80px",
                      background: "linear-gradient(135deg, var(--success), #10b981)",
                      borderRadius: "20px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 1.5rem",
                      boxShadow: "0 8px 25px rgba(34, 197, 94, 0.25)",
                    }}
                  >
                    <Shield size={36} style={{ color: "var(--accent-white)" }} />
                  </div>
                  <h3
                    style={{
                      fontSize: "clamp(1.1rem, 3vw, 1.25rem)",
                      fontWeight: "700",
                      marginBottom: "1rem",
                      color: "var(--secondary-black)",
                    }}
                  >
                    Qualidade Certificada
                  </h3>
                  <p
                    style={{
                      color: "var(--gray-600)",
                      lineHeight: "1.6",
                      fontSize: "clamp(0.875rem, 2.2vw, 0.95rem)",
                      margin: "0",
                    }}
                  >
                    Todos os veículos passam por inspeção rigorosa de 150 pontos antes da venda, garantindo máxima
                    segurança
                  </p>
                  {/* Elemento decorativo */}
                  <div
                    style={{
                      position: "absolute",
                      top: "-50px",
                      right: "-50px",
                      width: "100px",
                      height: "100px",
                      background: "linear-gradient(135deg, rgba(34, 197, 94, 0.1), rgba(34, 197, 94, 0.05))",
                      borderRadius: "50%",
                      zIndex: 0,
                    }}
                  />
                </div>

                {/* Card 2 - Atendimento Humanizado */}
                <div
                  className="feature-card"
                  style={{
                    background: "var(--accent-white)",
                    borderRadius: "16px",
                    padding: "clamp(2rem, 5vw, 2.5rem)",
                    textAlign: "center",
                    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
                    border: "1px solid rgba(0, 0, 0, 0.05)",
                    transition: "all 0.3s ease",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      width: "80px",
                      height: "80px",
                      background: "linear-gradient(135deg, var(--primary-orange), #f97316)",
                      borderRadius: "20px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 1.5rem",
                      boxShadow: "0 8px 25px rgba(255, 107, 53, 0.25)",
                    }}
                  >
                    <Heart size={36} style={{ color: "var(--accent-white)" }} />
                  </div>
                  <h3
                    style={{
                      fontSize: "clamp(1.1rem, 3vw, 1.25rem)",
                      fontWeight: "700",
                      marginBottom: "1rem",
                      color: "var(--secondary-black)",
                    }}
                  >
                    Atendimento Humanizado
                  </h3>
                  <p
                    style={{
                      color: "var(--gray-600)",
                      lineHeight: "1.6",
                      fontSize: "clamp(0.875rem, 2.2vw, 0.95rem)",
                      margin: "0",
                    }}
                  >
                    Equipe especializada pronta para entender suas necessidades e transformar sonhos em realidade
                  </p>
                  {/* Elemento decorativo */}
                  <div
                    style={{
                      position: "absolute",
                      top: "-50px",
                      right: "-50px",
                      width: "100px",
                      height: "100px",
                      background: "linear-gradient(135deg, rgba(255, 107, 53, 0.1), rgba(255, 107, 53, 0.05))",
                      borderRadius: "50%",
                      zIndex: 0,
                    }}
                  />
                </div>

                {/* Card 3 - Preço Justo */}
                <div
                  className="feature-card"
                  style={{
                    background: "var(--accent-white)",
                    borderRadius: "16px",
                    padding: "clamp(2rem, 5vw, 2.5rem)",
                    textAlign: "center",
                    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
                    border: "1px solid rgba(0, 0, 0, 0.05)",
                    transition: "all 0.3s ease",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      width: "80px",
                      height: "80px",
                      background: "linear-gradient(135deg, #3b82f6, #2563eb)",
                      borderRadius: "20px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 1.5rem",
                      boxShadow: "0 8px 25px rgba(59, 130, 246, 0.25)",
                    }}
                  >
                    <Target size={36} style={{ color: "var(--accent-white)" }} />
                  </div>
                  <h3
                    style={{
                      fontSize: "clamp(1.1rem, 3vw, 1.25rem)",
                      fontWeight: "700",
                      marginBottom: "1rem",
                      color: "var(--secondary-black)",
                    }}
                  >
                    Preço Justo Sempre
                  </h3>
                  <p
                    style={{
                      color: "var(--gray-600)",
                      lineHeight: "1.6",
                      fontSize: "clamp(0.875rem, 2.2vw, 0.95rem)",
                      margin: "0",
                    }}
                  >
                    Avaliação transparente e preços competitivos com as melhores condições de financiamento do mercado
                  </p>
                  {/* Elemento decorativo */}
                  <div
                    style={{
                      position: "absolute",
                      top: "-50px",
                      right: "-50px",
                      width: "100px",
                      height: "100px",
                      background: "linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(59, 130, 246, 0.05))",
                      borderRadius: "50%",
                      zIndex: 0,
                    }}
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Estatísticas */}
          <section
            className="section"
            style={{ backgroundColor: "var(--secondary-black)", color: "var(--accent-white)" }}
          >
            <div className="container">
              <div style={{ textAlign: "center", marginBottom: "clamp(2.5rem, 6vw, 3.5rem)" }}>
                <h2
                  style={{
                    fontSize: "clamp(1.5rem, 5vw, 2rem)",
                    fontWeight: "800",
                    marginBottom: "1rem",
                    color: "var(--accent-white)",
                  }}
                >
                  Números que <span style={{ color: "var(--primary-orange)" }}>impressionam</span>
                </h2>
                <p style={{ fontSize: "clamp(0.875rem, 2.5vw, 1rem)", color: "rgba(255, 255, 255, 0.8)" }}>
                  Mais de uma década construindo sonhos e realizando desejos
                </p>
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(min(180px, 100%), 1fr))",
                  gap: "clamp(1rem, 3vw, 1.5rem)",
                  alignItems: "center",
                }}
              >
                {[
                  { number: "15+", label: "Anos de Mercado", icon: TrendingUp },
                  { number: "3.500+", label: "Clientes Felizes", icon: Users },
                  { number: "200+", label: "Veículos Premium", icon: Car },
                  { number: "98%", label: "Satisfação", icon: Star },
                ].map((stat, index) => (
                  <div key={index} style={{ textAlign: "center", minWidth: "0" }}>
                    <stat.icon
                      size={window.innerWidth <= 480 ? 24 : 30}
                      style={{ color: "var(--primary-orange)", marginBottom: "clamp(0.5rem, 1.5vw, 0.75rem)" }}
                    />
                    <div
                      style={{
                        fontSize: "clamp(2rem, 6vw, 2.5rem)",
                        fontWeight: "900",
                        color: "var(--primary-orange)",
                        lineHeight: "1",
                        marginBottom: "0.5rem",
                      }}
                    >
                      {stat.number}
                    </div>
                    <div
                      style={{
                        fontSize: "clamp(0.8rem, 2.5vw, 1rem)",
                        fontWeight: "700",
                        color: "var(--accent-white)",
                        textTransform: "uppercase",
                        letterSpacing: "0.5px",
                      }}
                    >
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Final */}
          <section className="section" style={{ backgroundColor: "var(--accent-white)" }}>
            <div className="container">
              <div
                style={{
                  background: "var(--primary-orange)",
                  borderRadius: "clamp(20px, 5vw, 25px)",
                  padding: "clamp(2rem, 6vw, 3rem) clamp(1.5rem, 4vw, 2.5rem)",
                  textAlign: "center",
                  color: "var(--accent-white)",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div style={{ position: "relative", zIndex: 2 }}>
                  <h2 style={{ fontSize: "clamp(1.5rem, 5vw, 2rem)", fontWeight: "800", marginBottom: "1rem" }}>
                    Pronto para encontrar seu veículo ideal?
                  </h2>
                  <p
                    style={{
                      fontSize: "clamp(0.9rem, 2.5vw, 1.1rem)",
                      marginBottom: "clamp(2rem, 5vw, 2.5rem)",
                      opacity: "0.9",
                      maxWidth: "min(550px, 90%)",
                      margin: "0 auto clamp(2rem, 5vw, 2.5rem)",
                    }}
                  >
                    Nossa equipe especializada está pronta para ajudar você a realizar o sonho do carro novo
                  </p>
                  <div
                    style={{
                      display: "flex",
                      gap: "clamp(0.75rem, 2vw, 1.25rem)",
                      justifyContent: "center",
                      flexWrap: "wrap",
                    }}
                  >
                    <a
                      href="tel:1134567890"
                      className="btn"
                      style={{
                        background: "var(--accent-white)",
                        color: "var(--primary-orange)",
                        padding: "clamp(0.75rem, 2vw, 1rem) clamp(1.5rem, 3vw, 2rem)",
                        fontWeight: "700",
                        fontSize: "clamp(0.8rem, 2vw, 0.9rem)",
                      }}
                    >
                      <Phone size={18} />
                      Ligar Agora
                    </a>
                    <a
                      href="https://wa.me/5511999999999"
                      className="btn"
                      style={{
                        background: "rgba(255, 255, 255, 0.2)",
                        color: "var(--accent-white)",
                        border: "2px solid rgba(255, 255, 255, 0.3)",
                        padding: "clamp(0.75rem, 2vw, 1rem) clamp(1.5rem, 3vw, 2rem)",
                        fontWeight: "700",
                        fontSize: "clamp(0.8rem, 2vw, 0.9rem)",
                      }}
                    >
                      <MessageCircle size={18} />
                      WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Animações CSS */}
      <style jsx>{`
        .form-input::placeholder {
          color: rgba(255, 255, 255, 0.7);
        }

        .form-input:focus {
          border-color: var(--primary-orange) !important;
          box-shadow: 0 0 0 3px rgba(255, 107, 53, 0.2) !important;
          outline: none;
        }

        .form-input option {
          background: var(--secondary-black);
          color: var(--accent-white);
        }

        @media (max-width: 768px) {
          .animate-slide-in,
          .animate-slide-up {
            animation: none;
          }
        }

        .btn {
          transition: all 0.3s ease;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          text-decoration: none;
          border-radius: 8px;
          cursor: pointer;
        }

        .btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
        }

        .feature-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15) !important;
        }

        .feature-card > div:first-child {
          position: relative;
          z-index: 1;
        }

        .feature-card h3,
        .feature-card p {
          position: relative;
          z-index: 1;
        }

        @media (max-width: 768px) {
          .feature-card:hover {
            transform: none;
          }
        }
      `}</style>
    </div>
  )
}

export default Home
