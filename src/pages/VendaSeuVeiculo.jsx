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

  return (
    <div style={{ paddingTop: "85px" }}>
      {" "}
      {/* Reduzido */}
      {/* Header Banner */}
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
            Solicite uma <span className="text-gradient">Avaliação</span>
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
            Envie para nossa equipe os dados do seu veículo para fazermos uma proposta. Em breve retornaremos o contato.
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
                Avaliação Rápida
              </h3>
              <p style={{ color: "var(--gray-600)", fontSize: "1rem" }}>Resposta em até 24 horas</p> {/* Reduzido */}
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
                <DollarSign size={36} style={{ color: "var(--accent-white)" }} /> {/* Reduzido */}
              </div>
              <h3
                style={{
                  fontSize: "1.25rem" /* Reduzido */,
                  fontWeight: "800",
                  marginBottom: "0.75rem" /* Reduzido */,
                  color: "var(--secondary-black)",
                }}
              >
                Melhor Preço
              </h3>
              <p style={{ color: "var(--gray-600)", fontSize: "1rem" }}>Avaliação justa e competitiva</p>{" "}
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
              </div>
              <h3
                style={{
                  fontSize: "1.25rem" /* Reduzido */,
                  fontWeight: "800",
                  marginBottom: "0.75rem" /* Reduzido */,
                  color: "var(--secondary-black)",
                }}
              >
                Processo Simples
              </h3>
              <p style={{ color: "var(--gray-600)", fontSize: "1rem" }}>Sem burocracia desnecessária</p>{" "}
              {/* Reduzido */}
            </div>
          </div>
        </div>
      </section>
      {/* Vehicle Evaluation Form */}
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
                {/* Dados Pessoais */}
                <div style={{ marginBottom: "3.5rem" }}>
                  {" "}
                  {/* Reduzido */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: "2.5rem" /* Reduzido */,
                      padding: "1.25rem 0" /* Reduzido */,
                      borderBottom: "3px solid var(--gray-200)",
                    }}
                  >
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
                  <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "1.75rem", marginBottom: "1.75rem" }}>
                    {" "}
                    {/* Reduzido */}
                    <div>
                      <label style={modernLabelStyles}>
                        <User size={16} style={{ marginRight: "0.6rem", color: "var(--primary-orange)" }} />{" "}
                        {/* Reduzido */}
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
                <div style={{ marginBottom: "3.5rem" }}>
                  {" "}
                  {/* Reduzido */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: "2.5rem" /* Reduzido */,
                      padding: "1.25rem 0" /* Reduzido */,
                      borderBottom: "3px solid var(--gray-200)",
                    }}
                  >
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
                      Dados do Veículo
                    </h3>
                  </div>
                  <div
                    style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.75rem", marginBottom: "1.75rem" }}
                  >
                    {" "}
                    {/* Reduzido */}
                    <div>
                      <label style={modernLabelStyles}>
                        <Car size={16} style={{ marginRight: "0.6rem", color: "var(--primary-orange)" }} />{" "}
                        {/* Reduzido */}
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
                        <Car size={16} style={{ marginRight: "0.6rem", color: "var(--primary-orange)" }} />{" "}
                        {/* Reduzido */}
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
                    style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.75rem", marginBottom: "1.75rem" }}
                  >
                    {" "}
                    {/* Reduzido */}
                    <div>
                      <label style={modernLabelStyles}>
                        <Settings size={16} style={{ marginRight: "0.6rem", color: "var(--primary-orange)" }} />{" "}
                        {/* Reduzido */}
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
                        <Palette size={16} style={{ marginRight: "0.6rem", color: "var(--primary-orange)" }} />{" "}
                        {/* Reduzido */}
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
                    style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.75rem", marginBottom: "1.75rem" }}
                  >
                    {" "}
                    {/* Reduzido */}
                    <div>
                      <label style={modernLabelStyles}>
                        <Gauge size={16} style={{ marginRight: "0.6rem", color: "var(--primary-orange)" }} />{" "}
                        {/* Reduzido */}
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
                        <Hash size={16} style={{ marginRight: "0.6rem", color: "var(--primary-orange)" }} />{" "}
                        {/* Reduzido */}
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
                  <div style={{ marginBottom: "1.75rem" }}>
                    {" "}
                    {/* Reduzido */}
                    <label style={modernLabelStyles}>
                      <Calendar size={16} style={{ marginRight: "0.6rem", color: "var(--primary-orange)" }} />{" "}
                      {/* Reduzido */}
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
                      <Settings size={16} style={{ marginRight: "0.6rem", color: "var(--primary-orange)" }} />{" "}
                      {/* Reduzido */}
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
                      rows="4" /* Reduzido */
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
                    padding: "1.25rem 1.75rem" /* Reduzido */,
                    fontSize: "1rem" /* Reduzido */,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.6rem" /* Reduzido */,
                  }}
                >
                  <Send size={20} /> {/* Reduzido */}
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
