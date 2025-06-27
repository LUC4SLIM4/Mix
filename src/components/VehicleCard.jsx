"use client"

import { Eye, MessageCircle, Gauge, Fuel, Calendar, Star, Heart, CheckCircle, Clock } from "lucide-react"
import { Link } from "react-router-dom"

const VehicleCard = ({ vehicle }) => {
  const isVendido = vehicle.status === "vendido"
  const isReservado = vehicle.status === "reservado"
  const isDisponivel = !isVendido && !isReservado

  return (
    <div
      className="card hover-lift"
      style={{
        overflow: "hidden",
        position: "relative",
        opacity: isVendido ? 0.6 : 1,
        filter: isVendido ? "grayscale(0.3)" : "none",
        transition: "all 0.3s ease",
      }}
    >
      <div style={{ position: "relative", overflow: "hidden" }}>
        <img
          src={vehicle.image || "/placeholder.svg"}
          alt={vehicle.name}
          style={{
            width: "100%",
            height: "220px",
            objectFit: "cover",
            transition: "transform 0.3s ease",
          }}
        />

        {/* Overlay Gradient */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "50%",
            background: "linear-gradient(transparent, rgba(0, 0, 0, 0.7))",
            pointerEvents: "none",
          }}
        />

        {/* Status Badges */}
        <div
          style={{
            position: "absolute",
            top: "0.75rem",
            left: "0.75rem",
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",
          }}
        >
          {vehicle.featured && isDisponivel && (
            <div
              className="badge badge-primary"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.25rem",
                fontSize: "0.7rem",
                padding: "0.375rem 0.75rem",
              }}
            >
              <Star size={12} fill="currentColor" />
              Premium
            </div>
          )}

          {isVendido && (
            <div
              style={{
                background: "var(--error)",
                color: "var(--accent-white)",
                padding: "0.5rem 1rem",
                borderRadius: "20px",
                fontSize: "0.75rem",
                fontWeight: "700",
                textTransform: "uppercase",
                letterSpacing: "0.5px",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                boxShadow: "var(--shadow)",
              }}
            >
              <CheckCircle size={14} />
              Vendido
            </div>
          )}

          {isReservado && (
            <div
              style={{
                background: "var(--warning)",
                color: "var(--accent-white)",
                padding: "0.5rem 1rem",
                borderRadius: "20px",
                fontSize: "0.75rem",
                fontWeight: "700",
                textTransform: "uppercase",
                letterSpacing: "0.5px",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                boxShadow: "var(--shadow)",
              }}
            >
              <Clock size={14} />
              Reservado
            </div>
          )}
        </div>

        {/* Botão Favorito - apenas se disponível */}
        {isDisponivel && (
          <button
            style={{
              position: "absolute",
              top: "0.75rem",
              right: "0.75rem",
              width: "36px",
              height: "36px",
              background: "rgba(255, 255, 255, 0.9)",
              border: "none",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              transition: "all 0.2s ease",
              backdropFilter: "blur(10px)",
            }}
            onMouseEnter={(e) => {
              e.target.style.background = "var(--primary-orange)"
              e.target.style.transform = "scale(1.1)"
            }}
            onMouseLeave={(e) => {
              e.target.style.background = "rgba(255, 255, 255, 0.9)"
              e.target.style.transform = "scale(1)"
            }}
          >
            <Heart size={16} style={{ color: "var(--gray-600)" }} />
          </button>
        )}

        {/* Preço Destacado */}
        <div
          style={{
            position: "absolute",
            bottom: "0.75rem",
            left: "0.75rem",
            background: isVendido ? "var(--gray-500)" : "var(--primary-orange)",
            color: "var(--accent-white)",
            padding: "0.6rem 1rem",
            borderRadius: "20px",
            boxShadow: isVendido ? "var(--shadow)" : "var(--shadow-orange)",
          }}
        >
          <div
            style={{
              fontSize: "1.25rem",
              fontWeight: "800",
              lineHeight: "1",
            }}
          >
            {isVendido ? "Vendido" : `R$ ${vehicle.price?.toLocaleString("pt-BR")}`}
          </div>
        </div>

        {/* Overlay para vendido */}
        {isVendido && (
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "rgba(0, 0, 0, 0.4)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backdropFilter: "blur(2px)",
            }}
          >
            <div
              style={{
                background: "var(--accent-white)",
                color: "var(--error)",
                padding: "1rem 2rem",
                borderRadius: "25px",
                fontSize: "1.125rem",
                fontWeight: "800",
                textTransform: "uppercase",
                letterSpacing: "1px",
                boxShadow: "var(--shadow-xl)",
                border: "3px solid var(--error)",
              }}
            >
              ✓ VENDIDO
            </div>
          </div>
        )}
      </div>

      <div style={{ padding: "1.75rem" }}>
        <h3
          style={{
            fontSize: "1rem",
            fontWeight: "700",
            marginBottom: "1.25rem",
            color: isVendido ? "var(--gray-500)" : "var(--secondary-black)",
            lineHeight: "1.3",
            minHeight: "2.4rem",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {vehicle.name}
        </h3>

        {/* Informações do Veículo */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "0.75rem",
            marginBottom: "1.75rem",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.875rem",
              backgroundColor: isVendido ? "var(--gray-100)" : "var(--gray-50)",
              borderRadius: "10px",
              border: "2px solid transparent",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              if (isDisponivel) {
                e.currentTarget.style.borderColor = "var(--primary-orange)"
                e.currentTarget.style.backgroundColor = "rgba(255, 107, 53, 0.05)"
              }
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "transparent"
              e.currentTarget.style.backgroundColor = isVendido ? "var(--gray-100)" : "var(--gray-50)"
            }}
          >
            <Gauge size={18} style={{ color: isVendido ? "var(--gray-400)" : "var(--primary-orange)" }} />
            <div style={{ textAlign: "center" }}>
              <div
                style={{
                  fontSize: "0.8rem",
                  fontWeight: "700",
                  color: isVendido ? "var(--gray-400)" : "var(--secondary-black)",
                }}
              >
                {vehicle.km}
              </div>
              <div style={{ fontSize: "0.7rem", color: "var(--gray-600)" }}>KM</div>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.875rem",
              backgroundColor: isVendido ? "var(--gray-100)" : "var(--gray-50)",
              borderRadius: "10px",
              border: "2px solid transparent",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              if (isDisponivel) {
                e.currentTarget.style.borderColor = "var(--primary-orange)"
                e.currentTarget.style.backgroundColor = "rgba(255, 107, 53, 0.05)"
              }
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "transparent"
              e.currentTarget.style.backgroundColor = isVendido ? "var(--gray-100)" : "var(--gray-50)"
            }}
          >
            <Fuel size={18} style={{ color: isVendido ? "var(--gray-400)" : "var(--primary-orange)" }} />
            <div style={{ textAlign: "center" }}>
              <div
                style={{
                  fontSize: "0.8rem",
                  fontWeight: "700",
                  color: isVendido ? "var(--gray-400)" : "var(--secondary-black)",
                }}
              >
                {vehicle.fuel}
              </div>
              <div style={{ fontSize: "0.7rem", color: "var(--gray-600)" }}>COMBUSTÍVEL</div>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.875rem",
              backgroundColor: isVendido ? "var(--gray-100)" : "var(--gray-50)",
              borderRadius: "10px",
              border: "2px solid transparent",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              if (isDisponivel) {
                e.currentTarget.style.borderColor = "var(--primary-orange)"
                e.currentTarget.style.backgroundColor = "rgba(255, 107, 53, 0.05)"
              }
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "transparent"
              e.currentTarget.style.backgroundColor = isVendido ? "var(--gray-100)" : "var(--gray-50)"
            }}
          >
            <Calendar size={18} style={{ color: isVendido ? "var(--gray-400)" : "var(--primary-orange)" }} />
            <div style={{ textAlign: "center" }}>
              <div
                style={{
                  fontSize: "0.8rem",
                  fontWeight: "700",
                  color: isVendido ? "var(--gray-400)" : "var(--secondary-black)",
                }}
              >
                {vehicle.year}
              </div>
              <div style={{ fontSize: "0.7rem", color: "var(--gray-600)" }}>ANO</div>
            </div>
          </div>
        </div>

        {/* Botões de Ação */}
        <div style={{ display: "flex", gap: "0.75rem" }}>
          {isDisponivel ? (
            <>
              <Link
                to={`/veiculo/${vehicle.id}`}
                className="btn btn-primary"
                style={{
                  flex: 1,
                  padding: "0.875rem",
                  fontSize: "0.8rem",
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.5rem",
                }}
              >
                <Eye size={16} />
                Ver Detalhes
              </Link>
              <button
                className="btn btn-outline"
                style={{
                  padding: "0.875rem",
                  minWidth: "50px",
                  borderRadius: "10px",
                }}
              >
                <MessageCircle size={16} />
              </button>
            </>
          ) : (
            <button
              className="btn"
              disabled
              style={{
                flex: 1,
                padding: "0.875rem",
                fontSize: "0.8rem",
                background: "var(--gray-300)",
                color: "var(--gray-600)",
                cursor: "not-allowed",
                opacity: 0.7,
              }}
            >
              {isVendido ? "Indisponível" : "Reservado"}
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default VehicleCard
