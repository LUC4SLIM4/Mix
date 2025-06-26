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
    <div style={{ paddingTop: "102px" }}>
      {" "}
      {/* Reduzido */}
      {/* Hero Section */}
      <section
        style={{
          background: "var(--accent-white)",
          padding: "4rem 0" /* Reduzido */,
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3.5rem", alignItems: "center" }}>
            {" "}
            {/* Reduzido */}
            {/* Conteúdo */}
            <div>
              <div className="badge badge-primary" style={{ marginBottom: "1.75rem" }}>
                {" "}
                {/* Reduzido */}
                <Zap size={14} /> {/* Reduzido */}
                Mais de 15 anos de história
              </div>

              <h1
                style={{
                  fontSize: "clamp(2rem, 4vw, 3rem)" /* Reduzido */,
                  fontWeight: "900",
                  marginBottom: "1.25rem" /* Reduzido */,
                  lineHeight: "1.1",
                  color: "var(--secondary-black)",
                }}
              >
                Nossa <span className="text-gradient">Jornada</span> de Sucesso
              </h1>

              <p
                style={{
                  fontSize: "1.1rem" /* Reduzido */,
                  marginBottom: "1.75rem" /* Reduzido */,
                  color: "var(--gray-600)",
                  lineHeight: "1.6",
                }}
              >
                Desde 2008, transformamos sonhos em realidade, sempre com inovação, qualidade e atendimento excepcional
                que nossos clientes merecem.
              </p>

              <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
                {" "}
                {/* Reduzido */}
                <a href="/estoque" className="btn btn-primary">
                  <Award size={18} /> {/* Reduzido */}
                  Ver Veículos
                </a>
                <a href="/contato" className="btn btn-secondary">
                  <MapPin size={18} /> {/* Reduzido */}
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
                  height: "450px" /* Reduzido */,
                  objectFit: "cover",
                  borderRadius: "20px" /* Reduzido */,
                  boxShadow: "var(--shadow-xl)",
                }}
              />
            </div>
          </div>
        </div>
      </section>
      {/* Missão, Visão, Valores - Layout Fluido */}
      <section className="section" style={{ backgroundColor: "var(--gray-50)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            {" "}
            {/* Reduzido */}
            <h2 className="section-title">Nossos Pilares</h2>
            <p className="section-subtitle">
              Os valores que nos guiam em cada negociação e relacionamento com nossos clientes
            </p>
          </div>

          {/* Layout Horizontal Fluido */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "3.5rem" }}>
            {" "}
            {/* Reduzido */}
            {/* Missão */}
            <div style={{ flex: 1, textAlign: "center" }}>
              <div
                style={{
                  width: "80px" /* Reduzido */,
                  height: "80px" /* Reduzido */,
                  background: "var(--primary-orange)",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 1.75rem" /* Reduzido */,
                  opacity: 0.1,
                }}
              >
                <Target size={36} style={{ color: "var(--accent-white)" }} /> {/* Reduzido */}
              </div>
              <h3
                style={{
                  fontSize: "1.25rem" /* Reduzido */,
                  fontWeight: "700",
                  marginBottom: "0.75rem" /* Reduzido */,
                  color: "var(--secondary-black)",
                }}
              >
                Missão
              </h3>
              <p style={{ color: "var(--gray-600)", lineHeight: "1.6", fontSize: "0.9rem" }}>
                {" "}
                {/* Reduzido */}
                Transformar a experiência de compra de veículos através da inovação, transparência e excelência.
              </p>
            </div>
            {/* Divisor Visual */}
            <div
              style={{
                width: "2px",
                height: "180px" /* Reduzido */,
                background: "var(--gray-300)",
                alignSelf: "center",
              }}
            />
            {/* Visão */}
            <div style={{ flex: 1, textAlign: "center" }}>
              <div
                style={{
                  width: "80px" /* Reduzido */,
                  height: "80px" /* Reduzido */,
                  background: "var(--success)",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 1.75rem" /* Reduzido */,
                  opacity: 0.1,
                }}
              >
                <Eye size={36} style={{ color: "var(--accent-white)" }} /> {/* Reduzido */}
              </div>
              <h3
                style={{
                  fontSize: "1.25rem" /* Reduzido */,
                  fontWeight: "700",
                  marginBottom: "0.75rem" /* Reduzido */,
                  color: "var(--secondary-black)",
                }}
              >
                Visão
              </h3>
              <p style={{ color: "var(--gray-600)", lineHeight: "1.6", fontSize: "0.9rem" }}>
                {" "}
                {/* Reduzido */}
                Ser a concessionária mais inovadora e confiável do país, reconhecida pela excelência em atendimento.
              </p>
            </div>
            {/* Divisor Visual */}
            <div
              style={{
                width: "2px",
                height: "180px" /* Reduzido */,
                background: "var(--gray-300)",
                alignSelf: "center",
              }}
            />
            {/* Valores */}
            <div style={{ flex: 1, textAlign: "center" }}>
              <div
                style={{
                  width: "80px" /* Reduzido */,
                  height: "80px" /* Reduzido */,
                  background: "var(--warning)",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 1.75rem" /* Reduzido */,
                  opacity: 0.1,
                }}
              >
                <Gem size={36} style={{ color: "var(--accent-white)" }} /> {/* Reduzido */}
              </div>
              <h3
                style={{
                  fontSize: "1.25rem" /* Reduzido */,
                  fontWeight: "700",
                  marginBottom: "0.75rem" /* Reduzido */,
                  color: "var(--secondary-black)",
                }}
              >
                Valores
              </h3>
              <p style={{ color: "var(--gray-600)", lineHeight: "1.6", fontSize: "0.9rem" }}>
                {" "}
                {/* Reduzido */}
                Inovação, transparência, excelência e compromisso com o cliente orientam todas as nossas ações.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Timeline - Layout Mais Limpo */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            {" "}
            {/* Reduzido */}
            <h2 className="section-title">Nossa Trajetória</h2>
            <p className="section-subtitle">Uma jornada de crescimento, inovação e conquistas ao longo dos anos</p>
          </div>

          {/* Timeline Vertical Alternada */}
          <div style={{ maxWidth: "750px", margin: "0 auto", position: "relative" }}>
            {" "}
            {/* Reduzido */}
            {/* Linha Central */}
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
              }}
            />
            {timeline.map((item, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "3.5rem" /* Reduzido */,
                  position: "relative",
                  zIndex: 1,
                }}
              >
                {/* Conteúdo Esquerda (anos pares) */}
                {index % 2 === 0 && (
                  <>
                    <div style={{ flex: 1, textAlign: "right", paddingRight: "2.5rem" }}>
                      {" "}
                      {/* Reduzido */}
                      <div
                        style={{
                          fontSize: "1.75rem" /* Reduzido */,
                          fontWeight: "800",
                          color: "var(--primary-orange)",
                          marginBottom: "0.5rem",
                        }}
                      >
                        {item.year}
                      </div>
                      <h3
                        style={{
                          fontSize: "1.125rem" /* Reduzido */,
                          fontWeight: "700",
                          marginBottom: "0.5rem",
                          color: "var(--secondary-black)",
                        }}
                      >
                        {item.title}
                      </h3>
                      <p style={{ color: "var(--gray-600)", lineHeight: "1.5", fontSize: "0.9rem" }}>
                        {item.description}
                      </p>{" "}
                      {/* Reduzido */}
                    </div>

                    {/* Ícone Central */}
                    <div
                      style={{
                        width: "50px" /* Reduzido */,
                        height: "50px" /* Reduzido */,
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
                      <item.icon size={20} style={{ color: "var(--accent-white)" }} /> {/* Reduzido */}
                    </div>

                    <div style={{ flex: 1 }} />
                  </>
                )}

                {/* Conteúdo Direita (anos ímpares) */}
                {index % 2 === 1 && (
                  <>
                    <div style={{ flex: 1 }} />

                    {/* Ícone Central */}
                    <div
                      style={{
                        width: "50px" /* Reduzido */,
                        height: "50px" /* Reduzido */,
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
                      <item.icon size={20} style={{ color: "var(--accent-white)" }} /> {/* Reduzido */}
                    </div>

                    <div style={{ flex: 1, textAlign: "left", paddingLeft: "2.5rem" }}>
                      {" "}
                      {/* Reduzido */}
                      <div
                        style={{
                          fontSize: "1.75rem" /* Reduzido */,
                          fontWeight: "800",
                          color: "var(--primary-orange)",
                          marginBottom: "0.5rem",
                        }}
                      >
                        {item.year}
                      </div>
                      <h3
                        style={{
                          fontSize: "1.125rem" /* Reduzido */,
                          fontWeight: "700",
                          marginBottom: "0.5rem",
                          color: "var(--secondary-black)",
                        }}
                      >
                        {item.title}
                      </h3>
                      <p style={{ color: "var(--gray-600)", lineHeight: "1.5", fontSize: "0.9rem" }}>
                        {item.description}
                      </p>{" "}
                      {/* Reduzido */}
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Diferenciais - Layout Simples */}
      <section className="section" style={{ backgroundColor: "var(--gray-50)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            {" "}
            {/* Reduzido */}
            <h2 className="section-title">Nossos Diferenciais</h2>
            <p className="section-subtitle">O que nos torna únicos no mercado de veículos premium</p>
          </div>

          {/* Layout Vertical Simples */}
          <div style={{ maxWidth: "700px", margin: "0 auto" }}>
            {" "}
            {/* Reduzido */}
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
                  gap: "2.5rem" /* Reduzido */,
                  marginBottom: "2.5rem" /* Reduzido */,
                  padding: "1.75rem 0" /* Reduzido */,
                  borderBottom: index < 2 ? "1px solid var(--gray-300)" : "none",
                }}
              >
                <div
                  style={{
                    width: "70px" /* Reduzido */,
                    height: "70px" /* Reduzido */,
                    background: value.color,
                    borderRadius: "18px" /* Reduzido */,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    opacity: 0.1,
                  }}
                >
                  <value.icon size={28} style={{ color: "var(--accent-white)" }} /> {/* Reduzido */}
                </div>
                <div>
                  <h3
                    style={{
                      fontSize: "1.25rem" /* Reduzido */,
                      fontWeight: "700",
                      marginBottom: "0.75rem" /* Reduzido */,
                      color: "var(--secondary-black)",
                    }}
                  >
                    {value.title}
                  </h3>
                  <p style={{ color: "var(--gray-600)", lineHeight: "1.6", fontSize: "1rem" }}>
                    {" "}
                    {/* Reduzido */}
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
          padding: "4rem 0" /* Reduzido */,
        }}
      >
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            {" "}
            {/* Reduzido */}
            <h2 style={{ fontSize: "2rem", fontWeight: "800", marginBottom: "0.75rem" }}>
              {" "}
              {/* Reduzido */}
              Números que <span className="text-gradient">Impressionam</span>
            </h2>
            <p style={{ fontSize: "1rem", opacity: 0.8 }}>Resultados que comprovam nossa excelência e dedicação</p>{" "}
            {/* Reduzido */}
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
                  padding: "2rem 1.5rem" /* Reduzido */,
                  background: "rgba(255, 255, 255, 0.05)",
                  borderRadius: "18px" /* Reduzido */,
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  backdropFilter: "blur(10px)",
                }}
                className="hover-lift"
              >
                <stat.icon size={30} style={{ color: "var(--primary-orange)", marginBottom: "1.25rem" }} />{" "}
                {/* Reduzido */}
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
