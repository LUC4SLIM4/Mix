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
    padding: "1rem 1.25rem" /* Reduzido */,
    fontSize: "0.9rem" /* Reduzido */,
    fontWeight: "500",
    lineHeight: "1.5",
    color: "var(--secondary-black)",
    backgroundColor: "var(--accent-white)",
    border: "2px solid var(--gray-300)",
    borderRadius: "16px" /* Reduzido */,
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
    minHeight: "130px" /* Reduzido */,
    resize: "vertical",
    paddingTop: "1rem" /* Reduzido */,
    paddingBottom: "1rem" /* Reduzido */,
  }

  const modernLabelStyles = {
    display: "flex",
    alignItems: "center",
    fontSize: "0.8rem" /* Reduzido */,
    fontWeight: "700",
    color: "var(--secondary-black)",
    marginBottom: "0.6rem" /* Reduzido */,
    letterSpacing: "0.5px",
    textTransform: "uppercase",
  }

  const sectionHeaderStyles = {
    display: "flex",
    alignItems: "center",
    marginBottom: "2.5rem" /* Reduzido */,
    padding: "1.25rem 0" /* Reduzido */,
    borderBottom: "3px solid var(--gray-200)",
  }

  return (
    <div style={{ paddingTop: "85px" }}>
      {" "}
      {/* Reduzido */}
      {/* Header */}
      <section
        style={{
          paddingTop: "2rem" /* Reduzido */,
          paddingBottom: "3rem" /* Reduzido */,
          background: "var(--secondary-black)",
          color: "var(--accent-white)",
          position: "relative",
          minHeight: "30vh" /* Reduzido */,
          display: "flex",
          alignItems: "center",
        }}
      >
        <div className="container" style={{ textAlign: "center" }}>
          <h1
            style={{
              color: "var(--accent-white)",
              fontSize: "3rem" /* Reduzido */,
              marginBottom: "1rem" /* Reduzido */,
              fontWeight: "900",
            }}
          >
            Solicite uma <span className="text-gradient">Simulação</span>
          </h1>
          <p
            style={{
              textAlign: "center",
              fontSize: "1.25rem" /* Reduzido */,
              maxWidth: "650px" /* Reduzido */,
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
      {/* Benefits - Layout Simples */}
      <section style={{ backgroundColor: "var(--gray-50)", padding: "4rem 0" }}>
        {" "}
        {/* Reduzido */}
        <div className="container">
          <div style={{ display: "flex", justifyContent: "space-around", alignItems: "center", textAlign: "center" }}>
            <div style={{ flex: 1 }}>
              <div
                style={{
                  width: "70px" /* Reduzido */,
                  height: "70px" /* Reduzido */,
                  background: "var(--primary-orange)",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 1.25rem" /* Reduzido */,
                  opacity: 0.1,
                }}
              >
                <Shield size={36} style={{ color: "var(--accent-white)" }} /> {/* Reduzido */}
              </div>
              <h3
                style={{
                  fontSize: "1.25rem" /* Reduzido */,
                  fontWeight: "800",
                  marginBottom: "0.75rem" /* Reduzido */,
                  color: "var(--secondary-black)",
                }}
              >
                Segurança
              </h3>
              <p style={{ color: "var(--gray-600)", fontSize: "1rem" }}>Dados protegidos e processo seguro</p>{" "}
              {/* Reduzido */}
            </div>

            <div style={{ flex: 1 }}>
              <div
                style={{
                  width: "70px" /* Reduzido */,
                  height: "70px" /* Reduzido */,
                  background: "var(--primary-orange)",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 1.25rem" /* Reduzido */,
                  opacity: 0.1,
                }}
              >
                <Zap size={36} style={{ color: "var(--accent-white)" }} /> {/* Reduzido */}
              </div>
              <h3
                style={{
                  fontSize: "1.25rem" /* Reduzido */,
                  fontWeight: "800",
                  marginBottom: "0.75rem" /* Reduzido */,
                  color: "var(--secondary-black)",
                }}
              >
                Aprovação Rápida
              </h3>
              <p style={{ color: "var(--gray-600)", fontSize: "1rem" }}>Resposta em até 2 horas</p> {/* Reduzido */}
            </div>

            <div style={{ flex: 1 }}>
              <div
                style={{
                  width: "70px" /* Reduzido */,
                  height: "70px" /* Reduzido */,
                  background: "var(--primary-orange)",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 1.25rem" /* Reduzido */,
                  opacity: 0.1,
                }}
              >
                <CreditCard size={36} style={{ color: "var(--accent-white)" }} /> {/* Reduzido */}
              </div>
              <h3
                style={{
                  fontSize: "1.25rem" /* Reduzido */,
                  fontWeight: "800",
                  marginBottom: "0.75rem" /* Reduzido */,
                  color: "var(--secondary-black)",
                }}
              >
                Parcelas Acessíveis
              </h3>
              <p style={{ color: "var(--gray-600)", fontSize: "1rem" }}>Até 60x para pagar</p> {/* Reduzido */}
            </div>
          </div>
        </div>
      </section>
      {/* Contact Form */}
      <section className="section">
        <div className="container">
          <div style={{ maxWidth: "900px", margin: "0 auto" }}>
            {" "}
            {/* Reduzido */}
            <div
              style={{
                backgroundColor: "var(--accent-white)",
                borderRadius: "25px" /* Reduzido */,
                padding: "3.5rem" /* Reduzido */,
                boxShadow: "var(--shadow-xl)",
                border: "2px solid var(--gray-200)",
              }}
            >
              <form onSubmit={handleSubmit}>
                {/* Veículo de Interesse */}
                <div style={{ marginBottom: "3.5rem" }}>
                  {" "}
                  {/* Reduzido */}
                  <div style={sectionHeaderStyles}>
                    <div
                      style={{
                        width: "60px" /* Reduzido */,
                        height: "60px" /* Reduzido */,
                        background: "var(--primary-orange)",
                        borderRadius: "18px" /* Reduzido */,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginRight: "1.25rem" /* Reduzido */,
                        boxShadow: "var(--shadow-lg)",
                      }}
                    >
                      <Car size={28} style={{ color: "var(--accent-white)" }} /> {/* Reduzido */}
                    </div>
                    <h3
                      style={{
                        fontSize: "1.75rem" /* Reduzido */,
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
                  <div style={{ marginBottom: "1.75rem" }}>
                    {" "}
                    {/* Reduzido */}
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
                      rows="4" /* Reduzido */
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
                <div style={{ marginBottom: "3.5rem" }}>
                  {" "}
                  {/* Reduzido */}
                  <div style={sectionHeaderStyles}>
                    <div
                      style={{
                        width: "60px" /* Reduzido */,
                        height: "60px" /* Reduzido */,
                        background: "var(--primary-orange)",
                        borderRadius: "18px" /* Reduzido */,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginRight: "1.25rem" /* Reduzido */,
                        boxShadow: "var(--shadow-lg)",
                      }}
                    >
                      <User size={28} style={{ color: "var(--accent-white)" }} /> {/* Reduzido */}
                    </div>
                    <h3
                      style={{
                        fontSize: "1.75rem" /* Reduzido */,
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
                    style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.75rem", marginBottom: "1.75rem" }}
                  >
                    {" "}
                    {/* Reduzido */}
                    <div>
                      <label style={modernLabelStyles}>
                        <FileText size={16} style={{ marginRight: "0.6rem", color: "var(--primary-orange)" }} />{" "}
                        {/* Reduzido */}
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
                        <Calendar size={16} style={{ marginRight: "0.6rem", color: "var(--primary-orange)" }} />{" "}
                        {/* Reduzido */}
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
                  <div style={{ marginBottom: "1.75rem" }}>
                    {" "}
                    {/* Reduzido */}
                    <label style={modernLabelStyles}>
                      <User size={16} style={{ marginRight: "0.6rem", color: "var(--primary-orange)" }} />{" "}
                      {/* Reduzido */}
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
                  <div style={{ marginBottom: "1.75rem" }}>
                    {" "}
                    {/* Reduzido */}
                    <label style={modernLabelStyles}>
                      <User size={16} style={{ marginRight: "0.6rem", color: "var(--primary-orange)" }} />{" "}
                      {/* Reduzido */}
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
                      <MapPin size={16} style={{ marginRight: "0.6rem", color: "var(--primary-orange)" }} />{" "}
                      {/* Reduzido */}
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
                <div style={{ marginBottom: "3.5rem" }}>
                  {" "}
                  {/* Reduzido */}
                  <div style={sectionHeaderStyles}>
                    <div
                      style={{
                        width: "60px" /* Reduzido */,
                        height: "60px" /* Reduzido */,
                        background: "var(--primary-orange)",
                        borderRadius: "18px" /* Reduzido */,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginRight: "1.25rem" /* Reduzido */,
                        boxShadow: "var(--shadow-lg)",
                      }}
                    >
                      <Phone size={28} style={{ color: "var(--accent-white)" }} /> {/* Reduzido */}
                    </div>
                    <h3
                      style={{
                        fontSize: "1.75rem" /* Reduzido */,
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
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.75rem" }}>
                    {" "}
                    {/* Reduzido */}
                    <div>
                      <label style={modernLabelStyles}>
                        <Mail size={16} style={{ marginRight: "0.6rem", color: "var(--primary-orange)" }} />{" "}
                        {/* Reduzido */}
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
                        <Phone size={16} style={{ marginRight: "0.6rem", color: "var(--primary-orange)" }} />{" "}
                        {/* Reduzido */}
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
                    padding: "1.25rem 1.75rem" /* Reduzido */,
                    fontSize: "1rem" /* Reduzido */,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.6rem" /* Reduzido */,
                  }}
                >
                  <Send size={20} /> {/* Reduzido */}
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
