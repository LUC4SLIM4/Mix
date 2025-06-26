"use client"

import { useState } from "react"
import { Search, List, ArrowUpDown, Filter, Car, X } from "lucide-react"
import VehicleCard from "../components/VehicleCard"

const Estoque = () => {
  const [filters, setFilters] = useState({
    marca: "",
    modelo: "",
    precoMin: "",
    precoMax: "",
    combustivel: "",
  })

  const [viewMode, setViewMode] = useState("grid")
  const [sortBy, setSortBy] = useState("relevancia")
  const [currentPage, setCurrentPage] = useState(1)
  const [showMobileFilters, setShowMobileFilters] = useState(false)
  const itemsPerPage = 12

  const vehicles = [
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
      status: "vendido",
    },
    {
      id: 4,
      name: "FORD BRONCO SPORT WILDTRAK 2.0 TB 16V AWD AUT",
      price: 168000,
      km: "24.000",
      fuel: "Gasolina",
      year: "2021",
      image:
        "https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      featured: true,
      status: "disponivel",
    },
    {
      id: 5,
      name: "MERCEDES C180 KOMPRESSOR 1.8 16V AUT.",
      price: 165000,
      km: "41.000",
      fuel: "Gasolina",
      year: "2020",
      image:
        "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      featured: true,
      status: "disponivel",
    },
    {
      id: 6,
      name: "AUDI A4 ATTRACTION 2.0 TFSI 16V AUT.",
      price: 150000,
      km: "38.000",
      fuel: "Gasolina",
      year: "2021",
      image:
        "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      featured: true,
      status: "disponivel",
    },
  ]

  const totalPages = Math.ceil(vehicles.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const currentVehicles = vehicles.slice(startIndex, startIndex + itemsPerPage)

  return (
    <div style={{ paddingTop: "clamp(60px, 12vw, 83px)" }}>
      {/* Hero Banner */}
      <section
        style={{
          background: "var(--secondary-black)",
          color: "var(--accent-white)",
          padding: "clamp(2rem, 6vw, 3rem) 0",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "20%",
            right: "10%",
            width: "clamp(150px, 30vw, 250px)",
            height: "clamp(150px, 30vw, 250px)",
            background: "var(--primary-orange)",
            borderRadius: "50%",
            opacity: 0.05,
          }}
        />

        <div className="container">
          <div style={{ textAlign: "center", maxWidth: "min(700px, 90%)", margin: "0 auto" }}>
            <div className="badge badge-primary" style={{ marginBottom: "clamp(1rem, 3vw, 1.5rem)" }}>
              <Car size={14} />
              {vehicles.length} veículos disponíveis
            </div>
            <h1
              style={{
                fontSize: "clamp(1.75rem, 6vw, 3rem)",
                fontWeight: "900",
                marginBottom: "clamp(1rem, 2.5vw, 1.25rem)",
                lineHeight: "1.1",
              }}
            >
              Nosso <span className="text-gradient">Estoque Premium</span>
            </h1>
            <p
              style={{
                fontSize: "clamp(0.9rem, 2.5vw, 1.1rem)",
                opacity: 0.9,
                lineHeight: "1.6",
              }}
            >
              Descubra nossa coleção exclusiva de veículos selecionados com qualidade garantida e as melhores condições
              do mercado
            </p>
          </div>
        </div>
      </section>

      {/* Filtros + Conteúdo */}
      <section className="section">
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: window.innerWidth > 1024 ? "280px 1fr" : "1fr",
              gap: "clamp(1.5rem, 4vw, 2.5rem)",
              alignItems: "start",
            }}
          >
            {/* Sidebar de Filtros - Desktop */}
            {window.innerWidth > 1024 && (
              <div
                style={{
                  position: "sticky",
                  top: "clamp(100px, 15vw, 120px)",
                }}
              >
                <div
                  className="card"
                  style={{
                    padding: "clamp(1.5rem, 3vw, 1.75rem)",
                    background: "var(--accent-white)",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.75rem",
                      marginBottom: "clamp(1.25rem, 3vw, 1.75rem)",
                    }}
                  >
                    <div
                      style={{
                        width: "clamp(32px, 6vw, 36px)",
                        height: "clamp(32px, 6vw, 36px)",
                        background: "var(--primary-orange)",
                        borderRadius: "clamp(8px, 2vw, 10px)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Filter size={18} style={{ color: "var(--accent-white)" }} />
                    </div>
                    <h3
                      style={{
                        fontSize: "clamp(1rem, 2.5vw, 1.125rem)",
                        fontWeight: "700",
                        color: "var(--secondary-black)",
                        margin: 0,
                      }}
                    >
                      Filtrar Veículos
                    </h3>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Marca</label>
                    <select
                      className="form-input"
                      value={filters.marca}
                      onChange={(e) => setFilters({ ...filters, marca: e.target.value })}
                    >
                      <option value="">Todas as marcas</option>
                      <option value="honda">Honda</option>
                      <option value="toyota">Toyota</option>
                      <option value="bmw">BMW</option>
                      <option value="audi">Audi</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Modelo</label>
                    <select
                      className="form-input"
                      value={filters.modelo}
                      onChange={(e) => setFilters({ ...filters, modelo: e.target.value })}
                    >
                      <option value="">Todos os modelos</option>
                      <option value="civic">Civic</option>
                      <option value="corolla">Corolla</option>
                      <option value="hilux">Hilux</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Preço Mínimo</label>
                    <input
                      type="number"
                      className="form-input"
                      placeholder="R$ 0"
                      value={filters.precoMin}
                      onChange={(e) => setFilters({ ...filters, precoMin: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Preço Máximo</label>
                    <input
                      type="number"
                      className="form-input"
                      placeholder="R$ 500.000"
                      value={filters.precoMax}
                      onChange={(e) => setFilters({ ...filters, precoMax: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Combustível</label>
                    <select
                      className="form-input"
                      value={filters.combustivel}
                      onChange={(e) => setFilters({ ...filters, combustivel: e.target.value })}
                    >
                      <option value="">Todos</option>
                      <option value="flex">Flex</option>
                      <option value="gasolina">Gasolina</option>
                      <option value="diesel">Diesel</option>
                    </select>
                  </div>

                  <button
                    className="btn btn-primary"
                    style={{ width: "100%", marginTop: "clamp(0.5rem, 1.5vw, 0.75rem)" }}
                  >
                    <Search size={16} />
                    Aplicar Filtros
                  </button>

                  <button
                    className="btn btn-outline"
                    style={{ width: "100%", marginTop: "clamp(0.5rem, 1.5vw, 0.6rem)" }}
                    onClick={() => setFilters({ marca: "", modelo: "", precoMin: "", precoMax: "", combustivel: "" })}
                  >
                    Limpar Filtros
                  </button>
                </div>
              </div>
            )}

            {/* Área Principal */}
            <div>
              {/* Barra de Controles */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "clamp(1.25rem, 3vw, 1.75rem)",
                  padding: "clamp(1rem, 2.5vw, 1.25rem)",
                  background: "var(--accent-white)",
                  borderRadius: "clamp(12px, 3vw, 14px)",
                  boxShadow: "var(--shadow)",
                  border: "1px solid var(--gray-200)",
                  flexWrap: "wrap",
                  gap: "1rem",
                }}
              >
                <div style={{ flex: "1", minWidth: "200px" }}>
                  <p
                    style={{
                      fontSize: "clamp(0.8rem, 2vw, 0.9rem)",
                      fontWeight: "600",
                      color: "var(--secondary-black)",
                      margin: 0,
                    }}
                  >
                    {vehicles.length} veículos encontrados
                  </p>
                  <p style={{ fontSize: "clamp(0.7rem, 1.8vw, 0.8rem)", color: "var(--gray-600)", margin: 0 }}>
                    Página {currentPage} de {totalPages}
                  </p>
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "clamp(0.5rem, 1.5vw, 0.75rem)",
                    flexWrap: "wrap",
                  }}
                >
                  {/* Botão Filtros Mobile */}
                  {window.innerWidth <= 1024 && (
                    <button
                      className="btn btn-outline"
                      onClick={() => setShowMobileFilters(!showMobileFilters)}
                      style={{
                        padding: "clamp(0.5rem, 1.5vw, 0.6rem) clamp(0.75rem, 2vw, 1rem)",
                        fontSize: "clamp(0.7rem, 1.8vw, 0.8rem)",
                      }}
                    >
                      <Filter size={16} />
                      Filtros
                    </button>
                  )}

                  {/* View Mode Toggle */}
                  <div
                    style={{
                      display: "flex",
                      background: "var(--gray-100)",
                      borderRadius: "clamp(8px, 2vw, 10px)",
                      padding: "clamp(0.15rem, 0.5vw, 0.2rem)",
                    }}
                  >
                    <button
                      style={{
                        padding: "clamp(0.3rem, 1vw, 0.4rem)",
                        background: viewMode === "grid" ? "var(--accent-white)" : "transparent",
                        border: "none",
                        borderRadius: "8px",
                        cursor: "pointer",
                        transition: "all 0.2s ease",
                        boxShadow: viewMode === "grid" ? "var(--shadow-sm)" : "none",
                      }}
                      onClick={() => setViewMode("grid")}
                    >
                      <div
                        style={{
                          width: "16px",
                          height: "16px",
                          display: "grid",
                          gridTemplateColumns: "1fr 1fr",
                          gap: "2px",
                        }}
                      >
                        {[...Array(4)].map((_, i) => (
                          <div
                            key={i}
                            style={{
                              width: "6px",
                              height: "6px",
                              background: viewMode === "grid" ? "var(--primary-orange)" : "var(--gray-600)",
                              borderRadius: "1px",
                            }}
                          />
                        ))}
                      </div>
                    </button>
                    <button
                      style={{
                        padding: "clamp(0.3rem, 1vw, 0.4rem)",
                        background: viewMode === "list" ? "var(--accent-white)" : "transparent",
                        border: "none",
                        borderRadius: "8px",
                        cursor: "pointer",
                        transition: "all 0.2s ease",
                        boxShadow: viewMode === "list" ? "var(--shadow-sm)" : "none",
                      }}
                      onClick={() => setViewMode("list")}
                    >
                      <List
                        size={16}
                        style={{ color: viewMode === "list" ? "var(--primary-orange)" : "var(--gray-600)" }}
                      />
                    </button>
                  </div>

                  {/* Sort Dropdown */}
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <ArrowUpDown size={16} style={{ color: "var(--gray-600)" }} />
                    <select
                      className="form-input"
                      style={{
                        minWidth: "clamp(140px, 25vw, 160px)",
                        padding: "clamp(0.5rem, 1.5vw, 0.6rem)",
                        fontSize: "clamp(0.7rem, 1.8vw, 0.8rem)",
                      }}
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                    >
                      <option value="relevancia">Relevância</option>
                      <option value="menor-preco">Menor Preço</option>
                      <option value="maior-preco">Maior Preço</option>
                      <option value="menor-km">Menor KM</option>
                      <option value="mais-novo">Mais Novo</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Filtros Mobile */}
              {showMobileFilters && window.innerWidth <= 1024 && (
                <div
                  className="card"
                  style={{
                    padding: "clamp(1.5rem, 4vw, 2rem)",
                    marginBottom: "clamp(1.5rem, 3vw, 2rem)",
                    background: "var(--accent-white)",
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: "1.5rem",
                    }}
                  >
                    <h3
                      style={{
                        fontSize: "clamp(1rem, 3vw, 1.25rem)",
                        fontWeight: "700",
                        color: "var(--secondary-black)",
                        margin: 0,
                      }}
                    >
                      Filtrar Veículos
                    </h3>
                    <button
                      onClick={() => setShowMobileFilters(false)}
                      style={{
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        padding: "0.5rem",
                        color: "var(--gray-600)",
                      }}
                    >
                      <X size={20} />
                    </button>
                  </div>

                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(auto-fit, minmax(min(200px, 100%), 1fr))",
                      gap: "1rem",
                    }}
                  >
                    <div className="form-group">
                      <label className="form-label">Marca</label>
                      <select
                        className="form-input"
                        value={filters.marca}
                        onChange={(e) => setFilters({ ...filters, marca: e.target.value })}
                      >
                        <option value="">Todas as marcas</option>
                        <option value="honda">Honda</option>
                        <option value="toyota">Toyota</option>
                        <option value="bmw">BMW</option>
                        <option value="audi">Audi</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label className="form-label">Modelo</label>
                      <select
                        className="form-input"
                        value={filters.modelo}
                        onChange={(e) => setFilters({ ...filters, modelo: e.target.value })}
                      >
                        <option value="">Todos os modelos</option>
                        <option value="civic">Civic</option>
                        <option value="corolla">Corolla</option>
                        <option value="hilux">Hilux</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label className="form-label">Preço Mínimo</label>
                      <input
                        type="number"
                        className="form-input"
                        placeholder="R$ 0"
                        value={filters.precoMin}
                        onChange={(e) => setFilters({ ...filters, precoMin: e.target.value })}
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label">Preço Máximo</label>
                      <input
                        type="number"
                        className="form-input"
                        placeholder="R$ 500.000"
                        value={filters.precoMax}
                        onChange={(e) => setFilters({ ...filters, precoMax: e.target.value })}
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label">Combustível</label>
                      <select
                        className="form-input"
                        value={filters.combustivel}
                        onChange={(e) => setFilters({ ...filters, combustivel: e.target.value })}
                      >
                        <option value="">Todos</option>
                        <option value="flex">Flex</option>
                        <option value="gasolina">Gasolina</option>
                        <option value="diesel">Diesel</option>
                      </select>
                    </div>
                  </div>

                  <div style={{ display: "flex", gap: "1rem", marginTop: "1.5rem", flexWrap: "wrap" }}>
                    <button className="btn btn-primary" style={{ flex: 1, minWidth: "120px" }}>
                      <Search size={16} />
                      Aplicar
                    </button>
                    <button
                      className="btn btn-outline"
                      style={{ flex: 1, minWidth: "120px" }}
                      onClick={() => setFilters({ marca: "", modelo: "", precoMin: "", precoMax: "", combustivel: "" })}
                    >
                      Limpar
                    </button>
                  </div>
                </div>
              )}

              {/* Grid de Veículos */}
              <div
                className={viewMode === "grid" ? "grid grid-3" : ""}
                style={{ gap: viewMode === "list" ? "1rem" : undefined }}
              >
                {currentVehicles.map((vehicle) => (
                  <VehicleCard key={vehicle.id} vehicle={vehicle} />
                ))}
              </div>

              {/* Paginação */}
              {totalPages > 1 && (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "clamp(0.5rem, 1.5vw, 0.75rem)",
                    marginTop: "clamp(2rem, 5vw, 2.5rem)",
                    padding: "clamp(1.5rem, 3vw, 1.75rem)",
                    background: "var(--accent-white)",
                    borderRadius: "clamp(12px, 3vw, 14px)",
                    boxShadow: "var(--shadow)",
                    flexWrap: "wrap",
                  }}
                >
                  <button
                    className="btn btn-outline"
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage(currentPage - 1)}
                    style={{
                      opacity: currentPage === 1 ? 0.5 : 1,
                      cursor: currentPage === 1 ? "not-allowed" : "pointer",
                      padding: "clamp(0.5rem, 1.5vw, 0.6rem) clamp(1rem, 2vw, 1.25rem)",
                      fontSize: "clamp(0.7rem, 1.8vw, 0.8rem)",
                    }}
                  >
                    Anterior
                  </button>

                  {[...Array(totalPages)].map((_, index) => (
                    <button
                      key={index + 1}
                      className={currentPage === index + 1 ? "btn btn-primary" : "btn btn-outline"}
                      onClick={() => setCurrentPage(index + 1)}
                      style={{
                        minWidth: "clamp(36px, 8vw, 44px)",
                        padding: "clamp(0.5rem, 1.5vw, 0.6rem)",
                        fontSize: "clamp(0.7rem, 1.8vw, 0.8rem)",
                      }}
                    >
                      {index + 1}
                    </button>
                  ))}

                  <button
                    className="btn btn-outline"
                    disabled={currentPage === totalPages}
                    onClick={() => setCurrentPage(currentPage + 1)}
                    style={{
                      opacity: currentPage === totalPages ? 0.5 : 1,
                      cursor: currentPage === totalPages ? "not-allowed" : "pointer",
                      padding: "clamp(0.5rem, 1.5vw, 0.6rem) clamp(1rem, 2vw, 1.25rem)",
                      fontSize: "clamp(0.7rem, 1.8vw, 0.8rem)",
                    }}
                  >
                    Próxima
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Estoque
