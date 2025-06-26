"use client"

import { useState } from "react"
import { Shield, Zap, CreditCard, Send, Car, User, Phone, Calendar, MapPin, Mail, FileText } from "lucide-react"

const Financiamento = () => {
  const [formData, setFormData] = useState({
    descricaoVeiculo: "",
    cpf: "",
    nomeCompleto: "",
    dataNascimento: "",
    nomeMae: "",
    cidade: "",
    email: "",
    telefone: "",
  })

  const [focusedField, setFocusedField] = useState("")

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Financing form submitted:", formData)
    alert("Solicitação enviada com sucesso! Entraremos em contato em breve.")
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
      {/* Header */}
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
            Solicite uma <span className="text-gradient">Simulação</span>
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
            Envie seus dados para simularmos um financiamento. Em breve retornaremos o contato.
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
                Segurança
              </h3>
              <p style={{ color: "var(--gray-600)", fontSize: "clamp(0.875rem, 2.5vw, 1rem)" }}>
                Dados protegidos e processo seguro
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
                Aprovação Rápida
              </h3>
              <p style={{ color: "var(--gray-600)", fontSize: "clamp(0.875rem, 2.5vw, 1rem)" }}>
                Resposta em até 2 horas
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
                <CreditCard size={window.innerWidth <= 480 ? 28 : 36} style={{ color: "var(--accent-white)" }} />
              </div>
              <h3
                style={{
                  fontSize: "clamp(1rem, 3vw, 1.25rem)",
                  fontWeight: "800",
                  marginBottom: "clamp(0.5rem, 1.5vw, 0.75rem)",
                  color: "var(--secondary-black)",
                }}
              >
                Parcelas Acessíveis
              </h3>
              <p style={{ color: "var(--gray-600)", fontSize: "clamp(0.875rem, 2.5vw, 1rem)" }}>Até 60x para pagar</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
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
                {/* Veículo de Interesse */}
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
                      Veículo de Interesse
                    </h3>
                  </div>
                  <div style={{ marginBottom: "clamp(1.25rem, 3vw, 1.75rem)" }}>
                    <textarea
                      style={
                        focusedField === "descricaoVeiculo"
                          ? {
                              ...modernTextareaStyles,
                              borderColor: "var(--primary-orange)",
                              boxShadow: "0 0 0 3px rgba(255, 107, 53, 0.1), var(--shadow-md)",
                              transform: "translateY(-2px)",
                            }
                          : modernTextareaStyles
                      }
                      rows="4"
                      required
                      placeholder="Descreva detalhadamente o veículo desejado (marca, modelo, ano), valor estimado, condições de financiamento (entrada, número de parcelas), possibilidade de troca, etc."
                      value={formData.descricaoVeiculo}
                      onChange={(e) => handleInputChange("descricaoVeiculo", e.target.value)}
                      onFocus={() => setFocusedField("descricaoVeiculo")}
                      onBlur={() => setFocusedField("")}
                    />
                  </div>
                </div>

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
                        <FileText size={16} style={{ marginRight: "0.6rem", color: "var(--primary-orange)" }} />
                        CPF *
                      </label>
                      <input
                        type="text"
                        style={focusedField === "cpf" ? modernInputFocusStyles : modernInputStyles}
                        required
                        placeholder="000.000.000-00"
                        value={formData.cpf}
                        onChange={(e) => handleInputChange("cpf", e.target.value)}
                        onFocus={() => setFocusedField("cpf")}
                        onBlur={() => setFocusedField("")}
                      />
                    </div>
                    <div>
                      <label style={modernLabelStyles}>
                        <Calendar size={16} style={{ marginRight: "0.6rem", color: "var(--primary-orange)" }} />
                        Data de Nascimento *
                      </label>
                      <input
                        type="date"
                        style={focusedField === "dataNascimento" ? modernInputFocusStyles : modernInputStyles}
                        required
                        value={formData.dataNascimento}
                        onChange={(e) => handleInputChange("dataNascimento", e.target.value)}
                        onFocus={() => setFocusedField("dataNascimento")}
                        onBlur={() => setFocusedField("")}
                      />
                    </div>
                  </div>

                  <div style={{ marginBottom: "clamp(1.25rem, 3vw, 1.75rem)" }}>
                    <label style={modernLabelStyles}>
                      <User size={16} style={{ marginRight: "0.6rem", color: "var(--primary-orange)" }} />
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      style={focusedField === "nomeCompleto" ? modernInputFocusStyles : modernInputStyles}
                      required
                      placeholder="Digite seu nome completo"
                      value={formData.nomeCompleto}
                      onChange={(e) => handleInputChange("nomeCompleto", e.target.value)}
                      onFocus={() => setFocusedField("nomeCompleto")}
                      onBlur={() => setFocusedField("")}
                    />
                  </div>

                  <div style={{ marginBottom: "clamp(1.25rem, 3vw, 1.75rem)" }}>
                    <label style={modernLabelStyles}>
                      <User size={16} style={{ marginRight: "0.6rem", color: "var(--primary-orange)" }} />
                      Nome Completo da Mãe *
                    </label>
                    <input
                      type="text"
                      style={focusedField === "nomeMae" ? modernInputFocusStyles : modernInputStyles}
                      required
                      placeholder="Digite o nome completo da sua mãe"
                      value={formData.nomeMae}
                      onChange={(e) => handleInputChange("nomeMae", e.target.value)}
                      onFocus={() => setFocusedField("nomeMae")}
                      onBlur={() => setFocusedField("")}
                    />
                  </div>

                  <div>
                    <label style={modernLabelStyles}>
                      <MapPin size={16} style={{ marginRight: "0.6rem", color: "var(--primary-orange)" }} />
                      Cidade *
                    </label>
                    <input
                      type="text"
                      style={focusedField === "cidade" ? modernInputFocusStyles : modernInputStyles}
                      required
                      placeholder="Ex: São Paulo - SP"
                      value={formData.cidade}
                      onChange={(e) => handleInputChange("cidade", e.target.value)}
                      onFocus={() => setFocusedField("cidade")}
                      onBlur={() => setFocusedField("")}
                    />
                  </div>
                </div>

                {/* Dados para Contato */}
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
                      <Phone size={window.innerWidth <= 480 ? 24 : 28} style={{ color: "var(--accent-white)" }} />
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
                      Dados para Contato
                    </h3>
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
                        Telefone (WhatsApp) *
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
                  Enviar Dados
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Financiamento
