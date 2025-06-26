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
  Zap,
  CheckCircle,
  Heart,
  Target,
} from "lucide-react"
import VehicleCard from "../components/VehicleCard"

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
              rgba(26, 26, 26, 0.8) 0%, 
              rgba(255, 107, 53, 0.1) 50%, 
              rgba(26, 26, 26, 0.9) 100%
            ),
            url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')
          `,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: window.innerWidth > 768 ? "fixed" : "scroll",
          zIndex: -1,
        }}
      />

      {/* Conteúdo Flutuante */}
      <div style={{ position: "relative", zIndex: 1 }}>
        {/* Hero Section Flutuante */}
        <section
          style={{
            minHeight: "100vh",
            background: "transparent",
            position: "relative",
            display: "flex",
            alignItems: "center",
            overflow: "hidden",
            paddingTop: "0",
          }}
        >
          {/* Elementos Decorativos Flutuantes */}
          <div
            style={{
              position: "absolute",
              top: "10%",
              right: "5%",
              width: "clamp(150px, 30vw, 250px)",
              height: "clamp(150px, 30vw, 250px)",
              background: "rgba(255, 107, 53, 0.1)",
              borderRadius: "50%",
              filter: "blur(100px)",
              animation: "float 6s ease-in-out infinite",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: "15%",
              left: "8%",
              width: "clamp(120px, 25vw, 180px)",
              height: "clamp(120px, 25vw, 180px)",
              background: "rgba(255, 255, 255, 0.05)",
              borderRadius: "50%",
              filter: "blur(80px)",
              animation: "float 8s ease-in-out infinite reverse",
            }}
          />

          <div className="container" style={{ position: "relative", zIndex: 2 }}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(min(400px, 100%), 1fr))",
                alignItems: "center",
                gap: "clamp(2rem, 6vw, 3rem)",
              }}
            >
              {/* Conteúdo Principal */}
              <div className="animate-slide-in">
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    background: "rgba(255, 255, 255, 0.1)",
                    backdropFilter: "blur(20px)",
                    padding: "clamp(0.5rem, 1.5vw, 0.6rem) clamp(1rem, 2.5vw, 1.25rem)",
                    borderRadius: "40px",
                    marginBottom: "clamp(1rem, 3vw, 1.5rem)",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <Zap size={14} style={{ color: "var(--primary-orange)" }} />
                  <span
                    style={{ fontSize: "clamp(0.7rem, 2vw, 0.8rem)", fontWeight: "600", color: "var(--accent-white)" }}
                  >
                    Mais de 15 anos de experiência
                  </span>
                </div>

                <h1
                  style={{
                    fontSize: "clamp(1.75rem, 7vw, 3.5rem)",
                    fontWeight: "900",
                    marginBottom: "clamp(1rem, 2.5vw, 1.25rem)",
                    lineHeight: "1.1",
                    color: "var(--accent-white)",
                    textShadow: "0 4px 20px rgba(0, 0, 0, 0.5)",
                  }}
                >
                  Seu próximo <span style={{ color: "var(--primary-orange)" }}>veículo dos sonhos</span> está aqui
                </h1>

                <p
                  style={{
                    fontSize: "clamp(0.9rem, 2.5vw, 1.1rem)",
                    marginBottom: "clamp(1.5rem, 4vw, 2rem)",
                    color: "rgba(255, 255, 255, 0.9)",
                    lineHeight: "1.6",
                    maxWidth: "min(480px, 100%)",
                    textShadow: "0 2px 10px rgba(0, 0, 0, 0.3)",
                  }}
                >
                  Descubra nossa seleção premium de veículos com qualidade garantida, preços justos e atendimento
                  personalizado que você merece.
                </p>

                {/* Lista de Benefícios */}
                <div style={{ marginBottom: "clamp(2rem, 5vw, 2.5rem)" }}>
                  {[
                    "Veículos inspecionados e certificados",
                    "Financiamento facilitado em até 60x",
                    "Garantia estendida disponível",
                    "Suporte pós-venda especializado",
                  ].map((benefit, index) => (
                    <div
                      key={index}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "clamp(0.5rem, 1.5vw, 0.75rem)",
                        marginBottom: "clamp(0.4rem, 1vw, 0.6rem)",
                      }}
                    >
                      <CheckCircle
                        size={window.innerWidth <= 480 ? 16 : 18}
                        style={{ color: "var(--success)", flexShrink: 0 }}
                      />
                      <span
                        style={{
                          color: "rgba(255, 255, 255, 0.9)",
                          fontWeight: "500",
                          fontSize: "clamp(0.8rem, 2vw, 0.9rem)",
                          textShadow: "0 2px 10px rgba(0, 0, 0, 0.3)",
                        }}
                      >
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div style={{ display: "flex", gap: "clamp(0.75rem, 2vw, 1rem)", flexWrap: "wrap" }}>
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
                      background: "rgba(255, 255, 255, 0.1)",
                      color: "var(--accent-white)",
                      border: "2px solid rgba(255, 255, 255, 0.3)",
                      backdropFilter: "blur(20px)",
                      boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
                      fontSize: "clamp(0.8rem, 2vw, 0.9rem)",
                    }}
                  >
                    <MessageCircle size={18} />
                    <span style={{ display: window.innerWidth <= 480 ? "none" : "inline" }}>
                      Falar com Especialista
                    </span>
                    <span style={{ display: window.innerWidth <= 480 ? "inline" : "none" }}>Contato</span>
                  </a>
                </div>
              </div>

              {/* Formulário de Busca Lateral Flutuante */}
              <div className="animate-slide-up">
                <div
                  style={{
                    background: "rgba(255, 255, 255, 0.1)",
                    backdropFilter: "blur(20px)",
                    borderRadius: "clamp(16px, 4vw, 20px)",
                    padding: "clamp(2rem, 5vw, 2.5rem)",
                    boxShadow: "0 20px 60px rgba(0, 0, 0, 0.3)",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      height: "4px",
                      background: "var(--primary-orange)",
                      borderRadius: "20px 20px 0 0",
                    }}
                  />

                  <div style={{ textAlign: "center", marginBottom: "clamp(1.25rem, 3vw, 1.75rem)" }}>
                    <h3
                      style={{
                        fontSize: "clamp(1rem, 3vw, 1.25rem)",
                        fontWeight: "700",
                        color: "var(--accent-white)",
                        marginBottom: "0.5rem",
                        textShadow: "0 2px 10px rgba(0, 0, 0, 0.3)",
                      }}
                    >
                      Encontre seu veículo ideal
                    </h3>
                    <p style={{ color: "rgba(255, 255, 255, 0.8)", fontSize: "clamp(0.8rem, 2vw, 0.9rem)" }}>
                      Preencha os filtros e descubra as melhores opções
                    </p>
                  </div>

                  <form>
                    <div className="form-group">
                      <label
                        className="form-label"
                        style={{
                          color: "rgba(255, 255, 255, 0.9)",
                          textShadow: "0 2px 10px rgba(0, 0, 0, 0.3)",
                          fontSize: "clamp(0.7rem, 1.8vw, 0.8rem)",
                        }}
                      >
                        Marca do Veículo
                      </label>
                      <select
                        className="form-input"
                        style={{
                          background: "rgba(255, 255, 255, 0.1)",
                          backdropFilter: "blur(10px)",
                          border: "2px solid rgba(255, 255, 255, 0.2)",
                          color: "var(--accent-white)",
                          fontSize: "clamp(0.8rem, 2vw, 0.9rem)",
                        }}
                        value={searchFilters.marca}
                        onChange={(e) => setSearchFilters({ ...searchFilters, marca: e.target.value })}
                      >
                        <option value="" style={{ color: "var(--secondary-black)" }}>
                          Selecione a marca
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
                      <label
                        className="form-label"
                        style={{
                          color: "rgba(255, 255, 255, 0.9)",
                          textShadow: "0 2px 10px rgba(0, 0, 0, 0.3)",
                          fontSize: "clamp(0.7rem, 1.8vw, 0.8rem)",
                        }}
                      >
                        Modelo
                      </label>
                      <select
                        className="form-input"
                        style={{
                          background: "rgba(255, 255, 255, 0.1)",
                          backdropFilter: "blur(10px)",
                          border: "2px solid rgba(255, 255, 255, 0.2)",
                          color: "var(--accent-white)",
                          fontSize: "clamp(0.8rem, 2vw, 0.9rem)",
                        }}
                        value={searchFilters.modelo}
                        onChange={(e) => setSearchFilters({ ...searchFilters, modelo: e.target.value })}
                      >
                        <option value="" style={{ color: "var(--secondary-black)" }}>
                          Selecione o modelo
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
                      <label
                        className="form-label"
                        style={{
                          color: "rgba(255, 255, 255, 0.9)",
                          textShadow: "0 2px 10px rgba(0, 0, 0, 0.3)",
                          fontSize: "clamp(0.7rem, 1.8vw, 0.8rem)",
                        }}
                      >
                        Ano
                      </label>
                      <select
                        className="form-input"
                        style={{
                          background: "rgba(255, 255, 255, 0.1)",
                          backdropFilter: "blur(10px)",
                          border: "2px solid rgba(255, 255, 255, 0.2)",
                          color: "var(--accent-white)",
                          fontSize: "clamp(0.8rem, 2vw, 0.9rem)",
                        }}
                        value={searchFilters.ano}
                        onChange={(e) => setSearchFilters({ ...searchFilters, ano: e.target.value })}
                      >
                        <option value="" style={{ color: "var(--secondary-black)" }}>
                          Selecione o ano
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
                        width: "100%",
                        background: "var(--primary-orange)",
                        color: "var(--accent-white)",
                        border: "1px solid rgba(255, 255, 255, 0.1)",
                        fontSize: "clamp(0.8rem, 2vw, 0.9rem)",
                      }}
                    >
                      <Search size={18} />
                      Buscar Veículos
                    </button>
                  </form>

                  <div
                    style={{
                      marginTop: "clamp(1.25rem, 3vw, 1.75rem)",
                      padding: "clamp(1rem, 2.5vw, 1.25rem)",
                      background: "rgba(255, 255, 255, 0.05)",
                      borderRadius: "clamp(12px, 3vw, 14px)",
                      textAlign: "center",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                    }}
                  >
                    <p
                      style={{
                        fontSize: "clamp(0.7rem, 1.8vw, 0.8rem)",
                        color: "rgba(255, 255, 255, 0.8)",
                        marginBottom: "clamp(0.5rem, 1.5vw, 0.75rem)",
                      }}
                    >
                      Precisa de ajuda para escolher?
                    </p>
                    <button
                      className="btn"
                      style={{
                        fontSize: "clamp(0.7rem, 1.8vw, 0.75rem)",
                        padding: "clamp(0.5rem, 1.5vw, 0.6rem) clamp(1rem, 2.5vw, 1.25rem)",
                        background: "rgba(255, 255, 255, 0.1)",
                        color: "var(--accent-white)",
                        border: "2px solid rgba(255, 255, 255, 0.2)",
                        backdropFilter: "blur(10px)",
                      }}
                    >
                      <Phone size={14} />
                      <span style={{ display: window.innerWidth <= 480 ? "none" : "inline" }}>Falar com Consultor</span>
                      <span style={{ display: window.innerWidth <= 480 ? "inline" : "none" }}>Consultor</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Resto das seções com fundo sólido */}
        <div style={{ background: "var(--accent-white)", position: "relative", zIndex: 2 }}>
          {/* Seção de Diferenciais - Layout Responsivo */}
          <section className="section" style={{ backgroundColor: "var(--gray-50)" }}>
            <div className="container">
              <div style={{ textAlign: "center", marginBottom: "clamp(2.5rem, 6vw, 3.5rem)" }}>
                <h2 className="section-title">Por que escolher a Mix Veículos?</h2>
                <p className="section-subtitle">
                  Somos especialistas em conectar você ao veículo perfeito com segurança, qualidade e confiança
                </p>
              </div>

              {/* Layout Responsivo */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: window.innerWidth > 768 ? "2fr 1fr 2fr" : "1fr",
                  gap: "clamp(2rem, 5vw, 2.5rem)",
                  alignItems: "center",
                }}
              >
                {/* Feature 1 */}
                <div
                  style={{
                    textAlign: window.innerWidth > 768 ? "right" : "center",
                    padding: "clamp(1rem, 3vw, 1.5rem)",
                  }}
                >
                  <div
                    style={{
                      width: "clamp(60px, 12vw, 70px)",
                      height: "clamp(60px, 12vw, 70px)",
                      background: "var(--success)",
                      borderRadius: "clamp(14px, 3vw, 18px)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginLeft: window.innerWidth > 768 ? "auto" : "auto",
                      marginRight: window.innerWidth > 768 ? "0" : "auto",
                      marginBottom: "clamp(1rem, 2.5vw, 1.25rem)",
                      opacity: 0.1,
                    }}
                  >
                    <Shield size={window.innerWidth <= 480 ? 28 : 32} style={{ color: "var(--accent-white)" }} />
                  </div>
                  <h3
                    className="text-xl"
                    style={{ marginBottom: "clamp(0.5rem, 1.5vw, 0.75rem)", color: "var(--secondary-black)" }}
                  >
                    Qualidade Certificada
                  </h3>
                  <p style={{ color: "var(--gray-600)", lineHeight: "1.6", fontSize: "clamp(0.8rem, 2vw, 0.9rem)" }}>
                    Todos os veículos passam por inspeção rigorosa de 150 pontos antes da venda
                  </p>
                </div>

                {/* Centro - Ícone Principal */}
                {window.innerWidth > 768 && (
                  <div style={{ textAlign: "center" }}>
                    <div
                      style={{
                        width: "clamp(80px, 15vw, 100px)",
                        height: "clamp(80px, 15vw, 100px)",
                        background: "var(--primary-orange)",
                        borderRadius: "clamp(20px, 5vw, 25px)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        margin: "0 auto",
                        boxShadow: "var(--shadow-xl)",
                      }}
                    >
                      <Car size={window.innerWidth <= 480 ? 40 : 50} style={{ color: "var(--accent-white)" }} />
                    </div>
                  </div>
                )}

                {/* Feature 2 */}
                <div
                  style={{
                    textAlign: window.innerWidth > 768 ? "left" : "center",
                    padding: "clamp(1rem, 3vw, 1.5rem)",
                  }}
                >
                  <div
                    style={{
                      width: "clamp(60px, 12vw, 70px)",
                      height: "clamp(60px, 12vw, 70px)",
                      background: "var(--error)",
                      borderRadius: "clamp(14px, 3vw, 18px)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginLeft: window.innerWidth > 768 ? "0" : "auto",
                      marginRight: window.innerWidth > 768 ? "auto" : "auto",
                      marginBottom: "clamp(1rem, 2.5vw, 1.25rem)",
                      opacity: 0.1,
                    }}
                  >
                    <Heart size={window.innerWidth <= 480 ? 28 : 32} style={{ color: "var(--accent-white)" }} />
                  </div>
                  <h3
                    className="text-xl"
                    style={{ marginBottom: "clamp(0.5rem, 1.5vw, 0.75rem)", color: "var(--secondary-black)" }}
                  >
                    Atendimento Humanizado
                  </h3>
                  <p style={{ color: "var(--gray-600)", lineHeight: "1.6", fontSize: "clamp(0.8rem, 2vw, 0.9rem)" }}>
                    Equipe especializada pronta para entender suas necessidades e sonhos
                  </p>
                </div>
              </div>

              {/* Feature 3 - Centralizada */}
              <div
                style={{
                  textAlign: "center",
                  marginTop: "clamp(2rem, 5vw, 2.5rem)",
                  padding: "clamp(1rem, 3vw, 1.5rem)",
                }}
              >
                <div
                  style={{
                    width: "clamp(60px, 12vw, 70px)",
                    height: "clamp(60px, 12vw, 70px)",
                    background: "var(--primary-orange)",
                    borderRadius: "clamp(14px, 3vw, 18px)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto clamp(1rem, 2.5vw, 1.25rem)",
                    opacity: 0.1,
                  }}
                >
                  <Target size={window.innerWidth <= 480 ? 28 : 32} style={{ color: "var(--accent-white)" }} />
                </div>
                <h3
                  className="text-xl"
                  style={{ marginBottom: "clamp(0.5rem, 1.5vw, 0.75rem)", color: "var(--secondary-black)" }}
                >
                  Preço Justo Sempre
                </h3>
                <p
                  style={{
                    color: "var(--gray-600)",
                    lineHeight: "1.6",
                    maxWidth: "min(450px, 90%)",
                    margin: "0 auto",
                    fontSize: "clamp(0.8rem, 2vw, 0.9rem)",
                  }}
                >
                  Avaliação transparente e preços competitivos com as melhores condições do mercado
                </p>
              </div>
            </div>
          </section>

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
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        .form-input::placeholder {
          color: rgba(255, 255, 255, 0.6);
        }

        .form-input:focus {
          border-color: var(--primary-orange) !important;
          box-shadow: 0 0 0 4px rgba(255, 107, 53, 0.2) !important;
        }

        @media (max-width: 768px) {
          .animate-slide-in,
          .animate-slide-up {
            animation: none;
          }
        }
      `}</style>
    </div>
  )
}

export default Home
