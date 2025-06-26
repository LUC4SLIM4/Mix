"use client"

import { Eye, MessageCircle, Gauge, Fuel, Calendar, Heart, CheckCircle, Clock } from "lucide-react"

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
        width: "100%",
        maxWidth: "400px",
        margin: "0 auto",
      }}
    >
      <div style={{ position: "relative", overflow: "hidden" }}>
        <img
          src={vehicle.image || "/placeholder.svg"}
          alt={vehicle.name}
          style={{
            width: "100%",
            height: "clamp(180px, 25vw, 220px)",
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
            top: "clamp(0.5rem, 2vw, 0.75rem)",
            left: "clamp(0.5rem, 2vw, 0.75rem)",
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
                fontSize: "clamp(0.6rem, 1.5vw, 0.7rem)",
                padding: "clamp(0.25rem, 1vw, 0.375rem) clamp(0.5rem, 1.5vw, 0.75rem)",
              }}
            ></div>
          )}

          {isVendido && (
            <div
              style={{
                background: "var(--error)",
                color: "var(--accent-white)",
                padding: "clamp(0.375rem, 1.5vw, 0.5rem) clamp(0.75rem, 2vw, 1rem)",
                borderRadius: "20px",
                fontSize: "clamp(0.65rem, 1.5vw, 0.75rem)",
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
                padding: "clamp(0.375rem, 1.5vw, 0.5rem) clamp(0.75rem, 2vw, 1rem)",
                borderRadius: "20px",
                fontSize: "clamp(0.65rem, 1.5vw, 0.75rem)",
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
              top: "clamp(0.5rem, 2vw, 0.75rem)",
              right: "clamp(0.5rem, 2vw, 0.75rem)",
              width: "clamp(32px, 6vw, 36px)",
              height: "clamp(32px, 6vw, 36px)",
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
            <Heart size={window.innerWidth <= 480 ? 14 : 16} style={{ color: "var(--gray-600)" }} />
          </button>
        )}

        {/* Preço Destacado */}
        <div
          style={{
            position: "absolute",
            bottom: "clamp(0.5rem, 2vw, 0.75rem)",
            left: "clamp(0.5rem, 2vw, 0.75rem)",
            background: isVendido ? "var(--gray-500)" : "var(--primary-orange)",
            color: "var(--accent-white)",
            padding: "clamp(0.5rem, 1.5vw, 0.6rem) clamp(0.75rem, 2vw, 1rem)",
            borderRadius: "clamp(15px, 3vw, 20px)",
            boxShadow: isVendido ? "var(--shadow)" : "var(--shadow-orange)",
          }}
        >
          <div
            style={{
              fontSize: "clamp(1rem, 3vw, 1.25rem)",
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
                padding: "clamp(0.75rem, 2vw, 1rem) clamp(1.5rem, 4vw, 2rem)",
                borderRadius: "25px",
                fontSize: "clamp(0.875rem, 2.5vw, 1.125rem)",
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

      <div style={{ padding: "clamp(1.25rem, 3vw, 1.75rem)" }}>
        <h3
          style={{
            fontSize: "clamp(0.875rem, 2.5vw, 1rem)",
            fontWeight: "700",
            marginBottom: "clamp(1rem, 2.5vw, 1.25rem)",
            color: isVendido ? "var(--gray-500)" : "var(--secondary-black)",
            lineHeight: "1.3",
            minHeight: "clamp(2rem, 5vw, 2.4rem)",
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
            gap: "clamp(0.5rem, 1.5vw, 0.75rem)",
            marginBottom: "clamp(1.25rem, 3vw, 1.75rem)",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "0.5rem",
              padding: "clamp(0.625rem, 2vw, 0.875rem)",
              backgroundColor: isVendido ? "var(--gray-100)" : "var(--gray-50)",
              borderRadius: "clamp(8px, 2vw, 10px)",
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
            <Gauge
              size={window.innerWidth <= 480 ? 16 : 18}
              style={{ color: isVendido ? "var(--gray-400)" : "var(--primary-orange)" }}
            />
            <div style={{ textAlign: "center" }}>
              <div
                style={{
                  fontSize: "clamp(0.7rem, 2vw, 0.8rem)",
                  fontWeight: "700",
                  color: isVendido ? "var(--gray-400)" : "var(--secondary-black)",
                }}
              >
                {vehicle.km}
              </div>
              <div style={{ fontSize: "clamp(0.6rem, 1.5vw, 0.7rem)", color: "var(--gray-600)" }}>KM</div>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "0.5rem",
              padding: "clamp(0.625rem, 2vw, 0.875rem)",
              backgroundColor: isVendido ? "var(--gray-100)" : "var(--gray-50)",
              borderRadius: "clamp(8px, 2vw, 10px)",
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
            <Fuel
              size={window.innerWidth <= 480 ? 16 : 18}
              style={{ color: isVendido ? "var(--gray-400)" : "var(--primary-orange)" }}
            />
            <div style={{ textAlign: "center" }}>
              <div
                style={{
                  fontSize: "clamp(0.7rem, 2vw, 0.8rem)",
                  fontWeight: "700",
                  color: isVendido ? "var(--gray-400)" : "var(--secondary-black)",
                }}
              >
                {vehicle.fuel}
              </div>
              <div style={{ fontSize: "clamp(0.6rem, 1.5vw, 0.7rem)", color: "var(--gray-600)" }}>COMBUSTÍVEL</div>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "0.5rem",
              padding: "clamp(0.625rem, 2vw, 0.875rem)",
              backgroundColor: isVendido ? "var(--gray-100)" : "var(--gray-50)",
              borderRadius: "clamp(8px, 2vw, 10px)",
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
            <Calendar
              size={window.innerWidth <= 480 ? 16 : 18}
              style={{ color: isVendido ? "var(--gray-400)" : "var(--primary-orange)" }}
            />
            <div style={{ textAlign: "center" }}>
              <div
                style={{
                  fontSize: "clamp(0.7rem, 2vw, 0.8rem)",
                  fontWeight: "700",
                  color: isVendido ? "var(--gray-400)" : "var(--secondary-black)",
                }}
              >
                {vehicle.year}
              </div>
              <div style={{ fontSize: "clamp(0.6rem, 1.5vw, 0.7rem)", color: "var(--gray-600)" }}>ANO</div>
            </div>
          </div>
        </div>

        {/* Botões de Ação */}
        <div
          style={{
            display: "flex",
            gap: "clamp(0.5rem, 1.5vw, 0.75rem)",
            flexDirection: window.innerWidth <= 480 ? "column" : "row",
          }}
        >
          {isDisponivel ? (
            <>
              <button
                className="btn btn-primary"
                style={{
                  flex: 1,
                  padding: "clamp(0.75rem, 2vw, 0.875rem)",
                  fontSize: "clamp(0.7rem, 1.8vw, 0.8rem)",
                  minHeight: "44px",
                }}
              >
                <Eye size={window.innerWidth <= 480 ? 14 : 16} />
                Ver Detalhes
              </button>
              <button
                className="btn btn-outline"
                style={{
                  padding: "clamp(0.75rem, 2vw, 0.875rem)",
                  minWidth: window.innerWidth <= 480 ? "100%" : "50px",
                  borderRadius: "clamp(8px, 2vw, 10px)",
                  minHeight: "44px",
                }}
              >
                <MessageCircle size={window.innerWidth <= 480 ? 14 : 16} />
                {window.innerWidth <= 480 && <span style={{ marginLeft: "0.5rem" }}>WhatsApp</span>}
              </button>
            </>
          ) : (
            <button
              className="btn"
              disabled
              style={{
                flex: 1,
                padding: "clamp(0.75rem, 2vw, 0.875rem)",
                fontSize: "clamp(0.7rem, 1.8vw, 0.8rem)",
                background: "var(--gray-300)",
                color: "var(--gray-600)",
                cursor: "not-allowed",
                opacity: 0.7,
                minHeight: "44px",
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
