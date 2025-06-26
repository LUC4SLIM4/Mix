"use client"

import { useState } from "react"
import {
  Zap,
  DollarSign,
  Send,
  User,
  Mail,
  Phone,
  Car,
  Palette,
  Gauge,
  Calendar,
  Settings,
  Hash,
  Shield,
} from "lucide-react"

const VendaSeuVeiculo = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    marca: "",
    modelo: "",
    versao: "",
    cor: "",
    km: "",
    placa: "",
    anoModelo: "",
    opcionais: "",
  })

  const [focusedField, setFocusedField] = useState("")

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Vehicle sale form submitted:", formData)
    alert("Solicitação enviada com sucesso! Entraremos em contato em breve para avaliar seu veículo.")
  }

  const modernInputStyles = {
    width: "100%",
    padding: "clamp(0.75rem, 2vw, 1rem) clamp(1rem, 2.5vw, 1.25rem)",
    fontSize: "clamp(0.8rem, 2vw, 0.9rem)",
    fontWeight: "500",
    lineHeight: "1.5",
    color: "var(--secondary-black)",
    backgroundColor: "var(--accent-white)",
    border: "2px solid var(--gray-300)",
    borderRadius: "clamp(12px, 3vw, 16px)",
    outline: "none",
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    fontFamily: "inherit",
    boxShadow: "var(--shadow-sm)",
  }

  const modernInputFocusStyles = {
    ...modernInputStyles,
    borderColor: "var(--primary-orange)",
    boxShadow: "0 0 0 3px rgba(255, 107, 53, 0.1), var(--shadow-md)",
    transform: "translateY(-2px)",
  }

  const modernTextareaStyles = {
    ...modernInputStyles,
    minHeight: "clamp(100px, 20vw, 130px)",
    resize: "vertical",
    paddingTop: "clamp(0.75rem, 2vw, 1rem)",
    paddingBottom: "clamp(0.75rem, 2vw, 1rem)",
  }

  const modernLabelStyles = {
    display: "flex",
    alignItems: "center",
    fontSize: "clamp(0.7rem, 1.8vw, 0.8rem)",
    fontWeight: "700",
    color: "var(--secondary-black)",
    marginBottom: "clamp(0.5rem, 1.5vw, 0.6rem)",
    letterSpacing: "0.5px",
    textTransform: "uppercase",
  }

  const sectionHeaderStyles = {
    display: "flex",
    alignItems: "center",
    marginBottom: "clamp(2rem, 5vw, 2.5rem)",
    padding: "clamp(1rem, 2.5vw, 1.25rem) 0",
    borderBottom: "3px solid var(--gray-200)",
    flexDirection: window.innerWidth <= 480 ? "column" : "row",
    textAlign: window.innerWidth <= 480 ? "center" : "left",
    gap: window.innerWidth <= 480 ? "1rem" : "0",
  }

  return (
    <div style={{ paddingTop: "clamp(60px, 12vw, 85px)" }}>
      {/* Header Banner */}
      <section
        style={{
          paddingTop: "clamp(1.5rem, 4vw, 2rem)",
          paddingBottom: "clamp(2rem, 5vw, 3rem)",
          background: "var(--secondary-black)",
          color: "var(--accent-white)",
          position: "relative",
          minHeight: "clamp(25vh, 40vw, 30vh)",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div className="container" style={{ textAlign: "center" }}>
          <h1
            style={{
              color: "var(--accent-white)",
              fontSize: "clamp(1.75rem, 6vw, 3rem)",
              marginBottom: "clamp(0.75rem, 2vw, 1rem)",
              fontWeight: "900",
            }}
          >
            Solicite uma <span className="text-gradient">Avaliação</span>
          </h1>
          <p
            style={{
              textAlign: "center",
              fontSize: "clamp(1rem, 3vw, 1.25rem)",
              maxWidth: "min(650px, 90%)",
              margin: "1rem auto",
              color: "rgba(255, 255, 255, 0.9)",
              fontWeight: "500",
              lineHeight: "1.6",
            }}
          >
            Envie para nossa equipe os dados do seu veículo para fazermos uma proposta. Em breve retornaremos o contato.
          </p>
        </div>
      </section>

      {/* Benefits - Layout Responsivo */}
      <section style={{ backgroundColor: "var(--gray-50)", padding: "clamp(2.5rem, 6vw, 4rem) 0" }}>
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(200px, 100%), 1fr))",
              gap: "clamp(1.5rem, 4vw, 2rem)",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <div style={{ flex: 1 }}>
              <div
                style={{
                  width: "clamp(60px, 12vw, 70px)",
                  height: "clamp(60px, 12vw, 70px)",
                  background: "var(--primary-orange)",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto clamp(1rem, 2.5vw, 1.25rem)",
                  opacity: 0.1,
                }}
              >
                <Zap size={window.innerWidth <= 480 ? 28 : 36} style={{ color: "var(--accent-white)" }} />
              </div>
              <h3
                style={{
                  fontSize: "clamp(1rem, 3vw, 1.25rem)",
                  fontWeight: "800",
                  marginBottom: "clamp(0.5rem, 1.5vw, 0.75rem)",
                  color: "var(--secondary-black)",
                }}
              >
                Avaliação Rápida
              </h3>
              <p style={{ color: "var(--gray-600)", fontSize: "clamp(0.875rem, 2.5vw, 1rem)" }}>
                Resposta em até 24 horas
              </p>
            </div>

            <div style={{ flex: 1 }}>
              <div
                style={{
                  width: "clamp(60px, 12vw, 70px)",
                  height: "clamp(60px, 12vw, 70px)",
                  background: "var(--primary-orange)",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto clamp(1rem, 2.5vw, 1.25rem)",
                  opacity: 0.1,
                }}
              >
                <DollarSign size={window.innerWidth <= 480 ? 28 : 36} style={{ color: "var(--accent-white)" }} />
              </div>
              <h3
                style={{
                  fontSize: "clamp(1rem, 3vw, 1.25rem)",
                  fontWeight: "800",
                  marginBottom: "clamp(0.5rem, 1.5vw, 0.75rem)",
                  color: "var(--secondary-black)",
                }}
              >
                Melhor Preço
              </h3>
              <p style={{ color: "var(--gray-600)", fontSize: "clamp(0.875rem, 2.5vw, 1rem)" }}>
                Avaliação justa e competitiva
              </p>
            </div>

            <div style={{ flex: 1 }}>
              <div
                style={{
                  width: "clamp(60px, 12vw, 70px)",
                  height: "clamp(60px, 12vw, 70px)",
                  background: "var(--primary-orange)",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto clamp(1rem, 2.5vw, 1.25rem)",
                  opacity: 0.1,
                }}
              >
                <Shield size={window.innerWidth <= 480 ? 28 : 36} style={{ color: "var(--accent-white)" }} />
              </div>
              <h3
                style={{
                  fontSize: "clamp(1rem, 3vw, 1.25rem)",
                  fontWeight: "800",
                  marginBottom: "clamp(0.5rem, 1.5vw, 0.75rem)",
                  color: "var(--secondary-black)",
                }}
              >
                Processo Simples
              </h3>
              <p style={{ color: "var(--gray-600)", fontSize: "clamp(0.875rem, 2.5vw, 1rem)" }}>
                Sem burocracia desnecessária
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vehicle Evaluation Form */}
      <section className="section">
        <div className="container">
          <div style={{ maxWidth: "min(900px, 100%)", margin: "0 auto" }}>
            <div
              style={{
                backgroundColor: "var(--accent-white)",
                borderRadius: "clamp(20px, 5vw, 25px)",
                padding: "clamp(2rem, 6vw, 3.5rem)",
                boxShadow: "var(--shadow-xl)",
                border: "2px solid var(--gray-200)",
              }}
            >
              <form onSubmit={handleSubmit}>
                {/* Dados Pessoais */}
                <div style={{ marginBottom: "clamp(2.5rem, 6vw, 3.5rem)" }}>
                  <div style={sectionHeaderStyles}>
                    <div
                      style={{
                        width: "clamp(50px, 10vw, 60px)",
                        height: "clamp(50px, 10vw, 60px)",
                        background: "var(--primary-orange)",
                        borderRadius: "clamp(14px, 3vw, 18px)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginRight: window.innerWidth <= 480 ? "0" : "clamp(1rem, 2.5vw, 1.25rem)",
                        boxShadow: "var(--shadow-lg)",
                      }}
                    >
                      <User size={window.innerWidth <= 480 ? 24 : 28} style={{ color: "var(--accent-white)" }} />
                    </div>
                    <h3
                      style={{
                        fontSize: "clamp(1.25rem, 4vw, 1.75rem)",
                        fontWeight: "800",
                        color: "var(--secondary-black)",
                        textTransform: "uppercase",
                        letterSpacing: "1px",
                        margin: 0,
                      }}
                    >
                      Dados Pessoais
                    </h3>
                  </div>

                  <div style={{ marginBottom: "clamp(1.25rem, 3vw, 1.75rem)" }}>
                    <label style={modernLabelStyles}>
                      <User size={16} style={{ marginRight: "0.6rem", color: "var(--primary-orange)" }} />
                      Nome *
                    </label>
                    <input
                      type="text"
                      style={focusedField === "nome" ? modernInputFocusStyles : modernInputStyles}
                      required
                      placeholder="Digite seu nome completo"
                      value={formData.nome}
                      onChange={(e) => handleInputChange("nome", e.target.value)}
                      onFocus={() => setFocusedField("nome")}
                      onBlur={() => setFocusedField("")}
                    />
                  </div>

                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(auto-fit, minmax(min(250px, 100%), 1fr))",
                      gap: "clamp(1.25rem, 3vw, 1.75rem)",
                    }}
                  >
                    <div>
                      <label style={modernLabelStyles}>
                        <Mail size={16} style={{ marginRight: "0.6rem", color: "var(--primary-orange)" }} />
                        E-mail *
                      </label>
                      <input
                        type="email"
                        style={focusedField === "email" ? modernInputFocusStyles : modernInputStyles}
                        required
                        placeholder="seu@email.com"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        onFocus={() => setFocusedField("email")}
                        onBlur={() => setFocusedField("")}
                      />
                    </div>
                    <div>
                      <label style={modernLabelStyles}>
                        <Phone size={16} style={{ marginRight: "0.6rem", color: "var(--primary-orange)" }} />
                        Telefone *
                      </label>
                      <input
                        type="tel"
                        style={focusedField === "telefone" ? modernInputFocusStyles : modernInputStyles}
                        required
                        placeholder="(11) 99999-9999"
                        value={formData.telefone}
                        onChange={(e) => handleInputChange("telefone", e.target.value)}
                        onFocus={() => setFocusedField("telefone")}
                        onBlur={() => setFocusedField("")}
                      />
                    </div>
                  </div>
                </div>

                {/* Dados do Veículo */}
                <div style={{ marginBottom: "clamp(2.5rem, 6vw, 3.5rem)" }}>
                  <div style={sectionHeaderStyles}>
                    <div
                      style={{
                        width: "clamp(50px, 10vw, 60px)",
                        height: "clamp(50px, 10vw, 60px)",
                        background: "var(--primary-orange)",
                        borderRadius: "clamp(14px, 3vw, 18px)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginRight: window.innerWidth <= 480 ? "0" : "clamp(1rem, 2.5vw, 1.25rem)",
                        boxShadow: "var(--shadow-lg)",
                      }}
                    >
                      <Car size={window.innerWidth <= 480 ? 24 : 28} style={{ color: "var(--accent-white)" }} />
                    </div>
                    <h3
                      style={{
                        fontSize: "clamp(1.25rem, 4vw, 1.75rem)",
                        fontWeight: "800",
                        color: "var(--secondary-black)",
                        textTransform: "uppercase",
                        letterSpacing: "1px",
                        margin: 0,
                      }}
                    >
                      Dados do Veículo
                    </h3>
                  </div>

                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(auto-fit, minmax(min(250px, 100%), 1fr))",
                      gap: "clamp(1.25rem, 3vw, 1.75rem)",
                      marginBottom: "clamp(1.25rem, 3vw, 1.75rem)",
                    }}
                  >
                    <div>
                      <label style={modernLabelStyles}>
                        <Car size={16} style={{ marginRight: "0.6rem", color: "var(--primary-orange)" }} />
                        Marca *
                      </label>
                      <select
                        style={focusedField === "marca" ? modernInputFocusStyles : modernInputStyles}
                        required
                        value={formData.marca}
                        onChange={(e) => handleInputChange("marca", e.target.value)}
                        onFocus={() => setFocusedField("marca")}
                        onBlur={() => setFocusedField("")}
                      >
                        <option value="">Selecione a marca</option>
                        <option value="honda">Honda</option>
                        <option value="toyota">Toyota</option>
                        <option value="volkswagen">Volkswagen</option>
                        <option value="ford">Ford</option>
                        <option value="chevrolet">Chevrolet</option>
                        <option value="fiat">Fiat</option>
                        <option value="hyundai">Hyundai</option>
                        <option value="nissan">Nissan</option>
                        <option value="renault">Renault</option>
                        <option value="peugeot">Peugeot</option>
                      </select>
                    </div>
                    <div>
                      <label style={modernLabelStyles}>
                        <Car size={16} style={{ marginRight: "0.6rem", color: "var(--primary-orange)" }} />
                        Modelo *
                      </label>
                      <input
                        type="text"
                        style={focusedField === "modelo" ? modernInputFocusStyles : modernInputStyles}
                        required
                        placeholder="Ex: Civic, Corolla, Golf"
                        value={formData.modelo}
                        onChange={(e) => handleInputChange("modelo", e.target.value)}
                        onFocus={() => setFocusedField("modelo")}
                        onBlur={() => setFocusedField("")}
                      />
                    </div>
                  </div>

                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(auto-fit, minmax(min(250px, 100%), 1fr))",
                      gap: "clamp(1.25rem, 3vw, 1.75rem)",
                      marginBottom: "clamp(1.25rem, 3vw, 1.75rem)",
                    }}
                  >
                    <div>
                      <label style={modernLabelStyles}>
                        <Settings size={16} style={{ marginRight: "0.6rem", color: "var(--primary-orange)" }} />
                        Versão
                      </label>
                      <input
                        type="text"
                        style={focusedField === "versao" ? modernInputFocusStyles : modernInputStyles}
                        placeholder="Ex: EX, XLS, Highline"
                        value={formData.versao}
                        onChange={(e) => handleInputChange("versao", e.target.value)}
                        onFocus={() => setFocusedField("versao")}
                        onBlur={() => setFocusedField("")}
                      />
                    </div>
                    <div>
                      <label style={modernLabelStyles}>
                        <Palette size={16} style={{ marginRight: "0.6rem", color: "var(--primary-orange)" }} />
                        Cor
                      </label>
                      <input
                        type="text"
                        style={focusedField === "cor" ? modernInputFocusStyles : modernInputStyles}
                        placeholder="Ex: Branco, Prata, Preto"
                        value={formData.cor}
                        onChange={(e) => handleInputChange("cor", e.target.value)}
                        onFocus={() => setFocusedField("cor")}
                        onBlur={() => setFocusedField("")}
                      />
                    </div>
                  </div>

                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(auto-fit, minmax(min(250px, 100%), 1fr))",
                      gap: "clamp(1.25rem, 3vw, 1.75rem)",
                      marginBottom: "clamp(1.25rem, 3vw, 1.75rem)",
                    }}
                  >
                    <div>
                      <label style={modernLabelStyles}>
                        <Gauge size={16} style={{ marginRight: "0.6rem", color: "var(--primary-orange)" }} />
                        KM *
                      </label>
                      <input
                        type="number"
                        style={focusedField === "km" ? modernInputFocusStyles : modernInputStyles}
                        required
                        placeholder="Ex: 50000"
                        value={formData.km}
                        onChange={(e) => handleInputChange("km", e.target.value)}
                        onFocus={() => setFocusedField("km")}
                        onBlur={() => setFocusedField("")}
                      />
                    </div>
                    <div>
                      <label style={modernLabelStyles}>
                        <Hash size={16} style={{ marginRight: "0.6rem", color: "var(--primary-orange)" }} />
                        Placa
                      </label>
                      <input
                        type="text"
                        style={focusedField === "placa" ? modernInputFocusStyles : modernInputStyles}
                        placeholder="ABC-1234"
                        value={formData.placa}
                        onChange={(e) => handleInputChange("placa", e.target.value)}
                        onFocus={() => setFocusedField("placa")}
                        onBlur={() => setFocusedField("")}
                      />
                    </div>
                  </div>

                  <div style={{ marginBottom: "clamp(1.25rem, 3vw, 1.75rem)" }}>
                    <label style={modernLabelStyles}>
                      <Calendar size={16} style={{ marginRight: "0.6rem", color: "var(--primary-orange)" }} />
                      Ano/Modelo *
                    </label>
                    <input
                      type="text"
                      style={focusedField === "anoModelo" ? modernInputFocusStyles : modernInputStyles}
                      required
                      placeholder="Ex: 2020/2021"
                      value={formData.anoModelo}
                      onChange={(e) => handleInputChange("anoModelo", e.target.value)}
                      onFocus={() => setFocusedField("anoModelo")}
                      onBlur={() => setFocusedField("")}
                    />
                  </div>

                  <div>
                    <label style={modernLabelStyles}>
                      <Settings size={16} style={{ marginRight: "0.6rem", color: "var(--primary-orange)" }} />
                      Opcionais
                    </label>
                    <textarea
                      style={
                        focusedField === "opcionais"
                          ? {
                              ...modernTextareaStyles,
                              borderColor: "var(--primary-orange)",
                              boxShadow: "0 0 0 3px rgba(255, 107, 53, 0.1), var(--shadow-md)",
                              transform: "translateY(-2px)",
                            }
                          : modernTextareaStyles
                      }
                      rows="4"
                      placeholder="Descreva os opcionais do veículo: ar condicionado, direção hidráulica, vidros elétricos, alarme, som, rodas de liga, etc."
                      value={formData.opcionais}
                      onChange={(e) => handleInputChange("opcionais", e.target.value)}
                      onFocus={() => setFocusedField("opcionais")}
                      onBlur={() => setFocusedField("")}
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{
                    width: "100%",
                    padding: "clamp(1rem, 2.5vw, 1.25rem) clamp(1.5rem, 3vw, 1.75rem)",
                    fontSize: "clamp(0.875rem, 2.5vw, 1rem)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "clamp(0.5rem, 1.5vw, 0.6rem)",
                  }}
                >
                  <Send size={window.innerWidth <= 480 ? 18 : 20} />
                  Solicitar Avaliação
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default VendaSeuVeiculo
