"use client"

import { Target, Eye, Gem, Star, Users, Award, MapPin, Zap, TrendingUp, Heart } from "lucide-react"

const Sobre = () => {
  const timeline = [
    {
      year: "2008",
      title: "Fundação",
      description: "Mix Veículos é fundada com a missão de revolucionar o mercado de carros usados.",
      icon: Zap,
    },
    {
      year: "2012",
      title: "Expansão",
      description: "Ampliação do showroom e início das parcerias estratégicas com bancos.",
      icon: TrendingUp,
    },
    {
      year: "2018",
      title: "Inovação Digital",
      description: "Lançamento da plataforma online e implementação de tecnologias avançadas.",
      icon: Star,
    },
    {
      year: "2024",
      title: "Presente",
      description: "Mais de 15 anos de excelência e milhares de clientes satisfeitos.",
      icon: Award,
    },
  ]

  return (
    <div style={{ paddingTop: "clamp(70px, 15vw, 102px)" }}>
      {/* Hero Section */}
      <section
        style={{
          background: "var(--accent-white)",
          padding: "clamp(2rem, 8vw, 4rem) 0",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(400px, 100%), 1fr))",
              gap: "clamp(2rem, 6vw, 3.5rem)",
              alignItems: "center",
            }}
          >
            {/* Conteúdo */}
            <div>
              <div className="badge badge-primary" style={{ marginBottom: "clamp(1rem, 3vw, 1.75rem)" }}>
                <Zap size={14} />
                Mais de 15 anos de história
              </div>

              <h1
                style={{
                  fontSize: "clamp(1.75rem, 6vw, 3rem)",
                  fontWeight: "900",
                  marginBottom: "clamp(1rem, 2.5vw, 1.25rem)",
                  lineHeight: "1.1",
                  color: "var(--secondary-black)",
                }}
              >
                Nossa <span className="text-gradient">Jornada</span> de Sucesso
              </h1>

              <p
                style={{
                  fontSize: "clamp(0.9rem, 2.5vw, 1.1rem)",
                  marginBottom: "clamp(1.25rem, 3vw, 1.75rem)",
                  color: "var(--gray-600)",
                  lineHeight: "1.6",
                }}
              >
                Desde 2008, transformamos sonhos em realidade, sempre com inovação, qualidade e atendimento excepcional
                que nossos clientes merecem.
              </p>

              <div style={{ display: "flex", gap: "clamp(0.5rem, 2vw, 0.75rem)", flexWrap: "wrap" }}>
                <a href="/estoque" className="btn btn-primary">
                  <Award size={18} />
                  Ver Veículos
                </a>
                <a href="/contato" className="btn btn-secondary">
                  <MapPin size={18} />
                  Nos Visite
                </a>
              </div>
            </div>

            {/* Imagem */}
            <div>
              <img
                src="/faixada.webp"
                alt="Showroom Mix Veículos"
                style={{
                  width: "100%",
                  height: "clamp(300px, 50vw, 450px)",
                  objectFit: "cover",
                  borderRadius: "clamp(15px, 4vw, 20px)",
                  boxShadow: "var(--shadow-xl)",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Missão, Visão, Valores - Layout Responsivo */}
      <section className="section" style={{ backgroundColor: "var(--gray-50)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "clamp(2.5rem, 6vw, 4rem)" }}>
            <h2 className="section-title">Nossos Pilares</h2>
            <p className="section-subtitle">
              Os valores que nos guiam em cada negociação e relacionamento com nossos clientes
            </p>
          </div>

          {/* Layout Responsivo */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(250px, 100%), 1fr))",
              gap: "clamp(2rem, 5vw, 3.5rem)",
              alignItems: "flex-start",
            }}
          >
            {/* Missão */}
            <div style={{ textAlign: "center" }}>
              <div
                style={{
                  width: "clamp(60px, 12vw, 80px)",
                  height: "clamp(60px, 12vw, 80px)",
                  background: "var(--primary-orange)",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto clamp(1.25rem, 3vw, 1.75rem)",
                  opacity: 0.1,
                }}
              >
                <Target size={window.innerWidth <= 768 ? 28 : 36} style={{ color: "var(--accent-white)" }} />
              </div>
              <h3
                style={{
                  fontSize: "clamp(1rem, 3vw, 1.25rem)",
                  fontWeight: "700",
                  marginBottom: "clamp(0.5rem, 1.5vw, 0.75rem)",
                  color: "var(--secondary-black)",
                }}
              >
                Missão
              </h3>
              <p style={{ color: "var(--gray-600)", lineHeight: "1.6", fontSize: "clamp(0.8rem, 2vw, 0.9rem)" }}>
                Transformar a experiência de compra de veículos através da inovação, transparência e excelência.
              </p>
            </div>

            {/* Visão */}
            <div style={{ textAlign: "center" }}>
              <div
                style={{
                  width: "clamp(60px, 12vw, 80px)",
                  height: "clamp(60px, 12vw, 80px)",
                  background: "var(--success)",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto clamp(1.25rem, 3vw, 1.75rem)",
                  opacity: 0.1,
                }}
              >
                <Eye size={window.innerWidth <= 768 ? 28 : 36} style={{ color: "var(--accent-white)" }} />
              </div>
              <h3
                style={{
                  fontSize: "clamp(1rem, 3vw, 1.25rem)",
                  fontWeight: "700",
                  marginBottom: "clamp(0.5rem, 1.5vw, 0.75rem)",
                  color: "var(--secondary-black)",
                }}
              >
                Visão
              </h3>
              <p style={{ color: "var(--gray-600)", lineHeight: "1.6", fontSize: "clamp(0.8rem, 2vw, 0.9rem)" }}>
                Ser a concessionária mais inovadora e confiável do país, reconhecida pela excelência em atendimento.
              </p>
            </div>

            {/* Valores */}
            <div style={{ textAlign: "center" }}>
              <div
                style={{
                  width: "clamp(60px, 12vw, 80px)",
                  height: "clamp(60px, 12vw, 80px)",
                  background: "var(--warning)",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto clamp(1.25rem, 3vw, 1.75rem)",
                  opacity: 0.1,
                }}
              >
                <Gem size={window.innerWidth <= 768 ? 28 : 36} style={{ color: "var(--accent-white)" }} />
              </div>
              <h3
                style={{
                  fontSize: "clamp(1rem, 3vw, 1.25rem)",
                  fontWeight: "700",
                  marginBottom: "clamp(0.5rem, 1.5vw, 0.75rem)",
                  color: "var(--secondary-black)",
                }}
              >
                Valores
              </h3>
              <p style={{ color: "var(--gray-600)", lineHeight: "1.6", fontSize: "clamp(0.8rem, 2vw, 0.9rem)" }}>
                Inovação, transparência, excelência e compromisso com o cliente orientam todas as nossas ações.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline - Layout Responsivo */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "clamp(2.5rem, 6vw, 3.5rem)" }}>
            <h2 className="section-title">Nossa Trajetória</h2>
            <p className="section-subtitle">Uma jornada de crescimento, inovação e conquistas ao longo dos anos</p>
          </div>

          {/* Timeline Responsiva */}
          <div style={{ maxWidth: "min(750px, 100%)", margin: "0 auto", position: "relative" }}>
            {/* Linha Central - Oculta em mobile */}
            <div
              style={{
                position: "absolute",
                left: "50%",
                top: 0,
                bottom: 0,
                width: "4px",
                background: "var(--primary-orange)",
                transform: "translateX(-50%)",
                zIndex: 0,
                display: window.innerWidth <= 768 ? "none" : "block",
              }}
            />

            {timeline.map((item, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "clamp(2rem, 5vw, 3.5rem)",
                  position: "relative",
                  zIndex: 1,
                  flexDirection: window.innerWidth <= 768 ? "column" : "row",
                  textAlign: window.innerWidth <= 768 ? "center" : index % 2 === 0 ? "right" : "left",
                }}
              >
                {/* Layout Desktop - Alternado */}
                {window.innerWidth > 768 && index % 2 === 0 && (
                  <>
                    <div style={{ flex: 1, textAlign: "right", paddingRight: "clamp(1.5rem, 4vw, 2.5rem)" }}>
                      <div
                        style={{
                          fontSize: "clamp(1.25rem, 4vw, 1.75rem)",
                          fontWeight: "800",
                          color: "var(--primary-orange)",
                          marginBottom: "0.5rem",
                        }}
                      >
                        {item.year}
                      </div>
                      <h3
                        style={{
                          fontSize: "clamp(1rem, 2.5vw, 1.125rem)",
                          fontWeight: "700",
                          marginBottom: "0.5rem",
                          color: "var(--secondary-black)",
                        }}
                      >
                        {item.title}
                      </h3>
                      <p
                        style={{ color: "var(--gray-600)", lineHeight: "1.5", fontSize: "clamp(0.8rem, 2vw, 0.9rem)" }}
                      >
                        {item.description}
                      </p>
                    </div>

                    <div
                      style={{
                        width: "clamp(40px, 8vw, 50px)",
                        height: "clamp(40px, 8vw, 50px)",
                        background: "var(--primary-orange)",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        border: "4px solid var(--accent-white)",
                        boxShadow: "var(--shadow)",
                        zIndex: 2,
                      }}
                    >
                      <item.icon size={window.innerWidth <= 480 ? 16 : 20} style={{ color: "var(--accent-white)" }} />
                    </div>

                    <div style={{ flex: 1 }} />
                  </>
                )}

                {window.innerWidth > 768 && index % 2 === 1 && (
                  <>
                    <div style={{ flex: 1 }} />

                    <div
                      style={{
                        width: "clamp(40px, 8vw, 50px)",
                        height: "clamp(40px, 8vw, 50px)",
                        background: "var(--primary-orange)",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        border: "4px solid var(--accent-white)",
                        boxShadow: "var(--shadow)",
                        zIndex: 2,
                      }}
                    >
                      <item.icon size={window.innerWidth <= 480 ? 16 : 20} style={{ color: "var(--accent-white)" }} />
                    </div>

                    <div style={{ flex: 1, textAlign: "left", paddingLeft: "clamp(1.5rem, 4vw, 2.5rem)" }}>
                      <div
                        style={{
                          fontSize: "clamp(1.25rem, 4vw, 1.75rem)",
                          fontWeight: "800",
                          color: "var(--primary-orange)",
                          marginBottom: "0.5rem",
                        }}
                      >
                        {item.year}
                      </div>
                      <h3
                        style={{
                          fontSize: "clamp(1rem, 2.5vw, 1.125rem)",
                          fontWeight: "700",
                          marginBottom: "0.5rem",
                          color: "var(--secondary-black)",
                        }}
                      >
                        {item.title}
                      </h3>
                      <p
                        style={{ color: "var(--gray-600)", lineHeight: "1.5", fontSize: "clamp(0.8rem, 2vw, 0.9rem)" }}
                      >
                        {item.description}
                      </p>
                    </div>
                  </>
                )}

                {/* Layout Mobile - Vertical */}
                {window.innerWidth <= 768 && (
                  <>
                    <div
                      style={{
                        width: "clamp(50px, 12vw, 60px)",
                        height: "clamp(50px, 12vw, 60px)",
                        background: "var(--primary-orange)",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        border: "4px solid var(--accent-white)",
                        boxShadow: "var(--shadow)",
                        marginBottom: "1rem",
                      }}
                    >
                      <item.icon size={window.innerWidth <= 480 ? 20 : 24} style={{ color: "var(--accent-white)" }} />
                    </div>

                    <div>
                      <div
                        style={{
                          fontSize: "clamp(1.5rem, 5vw, 2rem)",
                          fontWeight: "800",
                          color: "var(--primary-orange)",
                          marginBottom: "0.5rem",
                        }}
                      >
                        {item.year}
                      </div>
                      <h3
                        style={{
                          fontSize: "clamp(1.125rem, 3vw, 1.25rem)",
                          fontWeight: "700",
                          marginBottom: "0.5rem",
                          color: "var(--secondary-black)",
                        }}
                      >
                        {item.title}
                      </h3>
                      <p
                        style={{
                          color: "var(--gray-600)",
                          lineHeight: "1.5",
                          fontSize: "clamp(0.875rem, 2.5vw, 1rem)",
                        }}
                      >
                        {item.description}
                      </p>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diferenciais - Layout Responsivo */}
      <section className="section" style={{ backgroundColor: "var(--gray-50)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "clamp(2.5rem, 6vw, 3.5rem)" }}>
            <h2 className="section-title">Nossos Diferenciais</h2>
            <p className="section-subtitle">O que nos torna únicos no mercado de veículos premium</p>
          </div>

          <div style={{ maxWidth: "min(700px, 100%)", margin: "0 auto" }}>
            {[
              {
                icon: Star,
                title: "Confiança",
                description: "Relacionamentos sólidos baseados na transparência e credibilidade total.",
                color: "var(--primary-orange)",
              },
              {
                icon: Star,
                title: "Excelência",
                description: "Padrão premium em todos os veículos e serviços oferecidos aos clientes.",
                color: "var(--warning)",
              },
              {
                icon: Heart,
                title: "Compromisso",
                description: "Dedicação total para superar expectativas e realizar sonhos.",
                color: "var(--success)",
              },
            ].map((value, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "clamp(1.5rem, 4vw, 2.5rem)",
                  marginBottom: "clamp(1.5rem, 4vw, 2.5rem)",
                  padding: "clamp(1rem, 3vw, 1.75rem) 0",
                  borderBottom: index < 2 ? "1px solid var(--gray-300)" : "none",
                  flexDirection: window.innerWidth <= 480 ? "column" : "row",
                  textAlign: window.innerWidth <= 480 ? "center" : "left",
                }}
              >
                <div
                  style={{
                    width: "clamp(60px, 12vw, 70px)",
                    height: "clamp(60px, 12vw, 70px)",
                    background: value.color,
                    borderRadius: "clamp(14px, 3vw, 18px)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    opacity: 0.1,
                  }}
                >
                  <value.icon size={window.innerWidth <= 480 ? 24 : 28} style={{ color: "var(--accent-white)" }} />
                </div>
                <div>
                  <h3
                    style={{
                      fontSize: "clamp(1rem, 3vw, 1.25rem)",
                      fontWeight: "700",
                      marginBottom: "clamp(0.5rem, 1.5vw, 0.75rem)",
                      color: "var(--secondary-black)",
                    }}
                  >
                    {value.title}
                  </h3>
                  <p style={{ color: "var(--gray-600)", lineHeight: "1.6", fontSize: "clamp(0.875rem, 2.5vw, 1rem)" }}>
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Estatísticas */}
      <section
        style={{
          background: "var(--secondary-black)",
          color: "var(--accent-white)",
          padding: "clamp(2.5rem, 8vw, 4rem) 0",
        }}
      >
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "clamp(2.5rem, 6vw, 3.5rem)" }}>
            <h2 style={{ fontSize: "clamp(1.5rem, 5vw, 2rem)", fontWeight: "800", marginBottom: "0.75rem" }}>
              Números que <span className="text-gradient">Impressionam</span>
            </h2>
            <p style={{ fontSize: "clamp(0.875rem, 2.5vw, 1rem)", opacity: 0.8 }}>
              Resultados que comprovam nossa excelência e dedicação
            </p>
          </div>

          <div className="grid grid-4">
            {[
              { number: "15+", label: "Anos de Experiência", description: "Inovação constante", icon: TrendingUp },
              { number: "3000+", label: "Clientes Satisfeitos", description: "Sonhos realizados", icon: Users },
              { number: "150+", label: "Veículos Premium", description: "Curadoria especial", icon: Award },
              { number: "99%", label: "Satisfação", description: "Excelência garantida", icon: Star },
            ].map((stat, index) => (
              <div
                key={index}
                style={{
                  textAlign: "center",
                  padding: "clamp(1.5rem, 4vw, 2rem) clamp(1rem, 3vw, 1.5rem)",
                  background: "rgba(255, 255, 255, 0.05)",
                  borderRadius: "clamp(14px, 4vw, 18px)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  backdropFilter: "blur(10px)",
                }}
                className="hover-lift"
              >
                <stat.icon
                  size={window.innerWidth <= 480 ? 24 : 30}
                  style={{ color: "var(--primary-orange)", marginBottom: "clamp(0.75rem, 2vw, 1.25rem)" }}
                />
                <div className="stat-number" style={{ color: "var(--primary-orange)" }}>
                  {stat.number}
                </div>
                <div className="stat-label" style={{ color: "var(--accent-white)" }}>
                  {stat.label}
                </div>
                <div className="stat-description" style={{ color: "rgba(255, 255, 255, 0.7)" }}>
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Sobre
