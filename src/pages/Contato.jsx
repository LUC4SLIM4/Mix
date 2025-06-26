"use client"

import { useState } from "react"
import { Phone, MessageCircle, Mail, MapPin, Clock, Send, User, FileText } from "lucide-react"

const Contato = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    assunto: "",
    mensagem: "",
  })

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Contact form submitted:", formData)
    alert("Mensagem enviada com sucesso! Retornaremos em breve.")
    setFormData({ nome: "", email: "", assunto: "", mensagem: "" })
  }

  const contactMethods = [
    {
      icon: Phone,
      title: "Telefone",
      info: "(11) 3456-7890",
      description: "Seg à Sex: 8h às 18h",
      color: "var(--primary-orange)",
      action: "tel:1134567890",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      info: "(11) 99999-9999",
      description: "Atendimento 24h",
      color: "var(--success)",
      action: "https://wa.me/5511999999999",
    },
    {
      icon: Mail,
      title: "E-mail",
      info: "contato@mixveiculos.com.br",
      description: "Resposta em até 24h",
      color: "var(--warning)",
      action: "mailto:contato@mixveiculos.com.br",
    },
  ]

  return (
    <div style={{ paddingTop: "102px" }}>
      {" "}
      {/* Reduzido */}
      {/* Hero Section */}
      <section
        style={{
          color: "var(--accent-black)",
          padding: "4rem 0" /* Reduzido */,
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-20%",
            right: "-10%",
            width: "350px" /* Reduzido */,
            height: "350px" /* Reduzido */,
            background: "rgba(255, 255, 255, 0.1)",
            borderRadius: "50%",
            filter: "blur(100px)",
          }}
        />

        <div className="container">
          <div style={{ textAlign: "center", maxWidth: "600px", margin: "0 auto", position: "relative", zIndex: 2 }}>
            {" "}

            <h1
              style={{
                fontSize: "clamp(2rem, 4vw, 3rem)" /* Reduzido */,
                fontWeight: "900",
                marginBottom: "1.25rem" /* Reduzido */,
                lineHeight: "1.1",
              }}
            >
              Vamos Conversar?
            </h1>
            <p
              style={{
                fontSize: "1.1rem" /* Reduzido */,
                opacity: 0.9,
                lineHeight: "1.6",
              }}
            >
              Nossa equipe especializada está pronta para ajudar você a encontrar o veículo perfeito. Entre em contato
              conosco!
            </p>
          </div>
        </div>
      </section>
      {/* Métodos de Contato */}
      <section className="section" style={{ backgroundColor: "var(--gray-50)" }}>
        <div className="container">
          <div className="grid grid-3">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.action}
                className="card hover-lift"
                style={{
                  padding: "2.5rem 1.75rem" /* Reduzido */,
                  textAlign: "center",
                  textDecoration: "none",
                  color: "inherit",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "4px",
                    background: method.color,
                  }}
                />
                <div
                  style={{
                    width: "70px" /* Reduzido */,
                    height: "70px" /* Reduzido */,
                    background: `${method.color}15`,
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 1.75rem" /* Reduzido */,
                    border: `3px solid ${method.color}30`,
                  }}
                >
                  <method.icon size={28} style={{ color: method.color }} /> {/* Reduzido */}
                </div>
                <h3
                  style={{
                    fontSize: "1.25rem" /* Reduzido */,
                    fontWeight: "700",
                    marginBottom: "0.75rem" /* Reduzido */,
                    color: "var(--secondary-black)",
                  }}
                >
                  {method.title}
                </h3>
                <p style={{ fontSize: "1rem", fontWeight: "600", color: method.color, marginBottom: "0.5rem" }}>
                  {" "}
                  {/* Reduzido */}
                  {method.info}
                </p>
                <p style={{ fontSize: "0.8rem", color: "var(--gray-600)" }}>{method.description}</p> {/* Reduzido */}
              </a>
            ))}
          </div>
        </div>
      </section>
      {/* Formulário + Mapa */}
      <section className="section">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3.5rem", alignItems: "start" }}>
            {" "}
            {/* Reduzido */}
            {/* Formulário */}
            <div>
              <div style={{ marginBottom: "2.5rem" }}>
                {" "}
                {/* Reduzido */}
                <h2
                  style={{
                    fontSize: "2rem" /* Reduzido */,
                    fontWeight: "800",
                    marginBottom: "0.75rem" /* Reduzido */,
                    color: "var(--secondary-black)",
                  }}
                >
                  Envie sua <span className="text-gradient">Mensagem</span>
                </h2>
                <p style={{ fontSize: "1rem", color: "var(--gray-600)" }}>
                  {" "}
                  {/* Reduzido */}
                  Preencha o formulário abaixo e nossa equipe entrará em contato em breve
                </p>
              </div>

              <div className="card" style={{ padding: "2.5rem" }}>
                {" "}
                {/* Reduzido */}
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label className="form-label">
                      <User size={14} style={{ marginRight: "0.5rem" }} /> {/* Reduzido */}
                      Nome Completo
                    </label>
                    <input
                      type="text"
                      className="form-input"
                      required
                      placeholder="Digite seu nome completo"
                      value={formData.nome}
                      onChange={(e) => handleInputChange("nome", e.target.value)}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">
                      <Mail size={14} style={{ marginRight: "0.5rem" }} /> {/* Reduzido */}
                      E-mail
                    </label>
                    <input
                      type="email"
                      className="form-input"
                      required
                      placeholder="seu@email.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">
                      <FileText size={14} style={{ marginRight: "0.5rem" }} /> {/* Reduzido */}
                      Assunto
                    </label>
                    <select
                      className="form-input"
                      required
                      value={formData.assunto}
                      onChange={(e) => handleInputChange("assunto", e.target.value)}
                    >
                      <option value="">Selecione um assunto</option>
                      <option value="duvida">Dúvida sobre veículo</option>
                      <option value="financiamento">Financiamento</option>
                      <option value="venda">Venda de veículo</option>
                      <option value="agendamento">Agendamento de visita</option>
                      <option value="outros">Outros</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label">
                      <MessageCircle size={14} style={{ marginRight: "0.5rem" }} /> {/* Reduzido */}
                      Mensagem
                    </label>
                    <textarea
                      className="form-input"
                      rows="5" /* Reduzido */
                      required
                      placeholder="Digite sua mensagem aqui..."
                      value={formData.mensagem}
                      onChange={(e) => handleInputChange("mensagem", e.target.value)}
                      style={{ resize: "vertical", minHeight: "130px" }} /* Reduzido */
                    />
                  </div>

                  <button type="submit" className="btn btn-primary" style={{ width: "100%" }}>
                    <Send size={18} /> {/* Reduzido */}
                    Enviar Mensagem
                  </button>
                </form>
              </div>
            </div>
            {/* Informações + Mapa */}
            <div>
              {/* Informações da Loja */}
              <div className="card" style={{ padding: "2.5rem", marginBottom: "1.75rem" }}>
                {" "}
                {/* Reduzido */}
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.75rem" }}>
                  {" "}
                  {/* Reduzido */}
                  <div
                    style={{
                      width: "50px" /* Reduzido */,
                      height: "50px" /* Reduzido */,
                      background: "var(--primary-orange)",
                      borderRadius: "14px" /* Reduzido */,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <MapPin size={24} style={{ color: "var(--accent-white)" }} /> {/* Reduzido */}
                  </div>
                  <h3 style={{ fontSize: "1.25rem", fontWeight: "700", color: "var(--secondary-black)", margin: 0 }}>
                    {" "}
                    {/* Reduzido */}
                    Nossa Localização
                  </h3>
                </div>
                <div style={{ marginBottom: "1.75rem" }}>
                  {" "}
                  {/* Reduzido */}
                  <div style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", marginBottom: "1.25rem" }}>
                    {" "}
                    {/* Reduzido */}
                    <MapPin size={18} style={{ color: "var(--primary-orange)", marginTop: "2px", flexShrink: 0 }} />{" "}
                    {/* Reduzido */}
                    <div>
                      <p
                        style={{
                          fontWeight: "600",
                          color: "var(--secondary-black)",
                          marginBottom: "0.5rem",
                          fontSize: "0.9rem",
                        }}
                      >
                        {" "}
                        {/* Reduzido */}
                        Endereço:
                      </p>
                      <p style={{ color: "var(--gray-600)", lineHeight: "1.6", fontSize: "0.9rem" }}>
                        {" "}
                        {/* Reduzido */}
                        Rua das Flores, 123 - Centro
                        <br />
                        São Paulo - SP, 01234-567
                      </p>
                    </div>
                  </div>
                  <div style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
                    {" "}
                    {/* Reduzido */}
                    <Clock size={18} style={{ color: "var(--primary-orange)", marginTop: "2px", flexShrink: 0 }} />{" "}
                    {/* Reduzido */}
                    <div>
                      <p
                        style={{
                          fontWeight: "600",
                          color: "var(--secondary-black)",
                          marginBottom: "0.5rem",
                          fontSize: "0.9rem",
                        }}
                      >
                        {" "}
                        {/* Reduzido */}
                        Horário de Funcionamento:
                      </p>
                      <p style={{ color: "var(--gray-600)", lineHeight: "1.6", fontSize: "0.9rem" }}>
                        {" "}
                        {/* Reduzido */}
                        Segunda à Sexta: 8:00 às 18:00
                        <br />
                        Sábado: 8:00 às 15:00
                        <br />
                        Domingo: Fechado
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mapa */}
              <div className="card" style={{ overflow: "hidden" }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1975!2d-46.6333824!3d-23.5505199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDMzJzAxLjkiUyA0NsKwMzgnMDAuMiJX!5e0!3m2!1spt-BR!2sbr!4v1234567890"
                  width="100%"
                  height="280" /* Reduzido */
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização Mix Veículos"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Final */}
      <section
        style={{
          background: "var(--secondary-black)",
          color: "var(--accent-white)",
          padding: "3.5rem 0" /* Reduzido */,
        }}
      >
        <div className="container" style={{ textAlign: "center" }}>
          <h2 style={{ fontSize: "2rem", fontWeight: "800", marginBottom: "0.75rem" }}>
            {" "}
            {/* Reduzido */}
            Visite Nossa <span className="text-gradient">Loja Física</span>
          </h2>
          <p
            style={{
              fontSize: "1rem" /* Reduzido */,
              marginBottom: "1.75rem" /* Reduzido */,
              opacity: 0.9,
              maxWidth: "550px" /* Reduzido */,
              margin: "0 auto 1.75rem",
            }}
          >
            Venha conhecer nosso showroom e encontre o carro dos seus sonhos. Nossa equipe está pronta para atendê-lo!
          </p>
          <div style={{ display: "flex", gap: "0.75rem", justifyContent: "center", flexWrap: "wrap" }}>
            {" "}
            {/* Reduzido */}
            <a href="tel:1134567890" className="btn btn-primary">
              <Phone size={18} /> {/* Reduzido */}
              Ligar Agora
            </a>
            <a href="https://wa.me/5511999999999" className="btn" style={{ background: "#22c55e", color: "white" }}>
              <MessageCircle size={18} /> {/* Reduzido */}
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contato
