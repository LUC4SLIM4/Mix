"use client"

import { useState } from "react"
import { Search, List, ArrowUpDown, Filter, Car } from "lucide-react"
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
    <div style={{ paddingTop: "83px" }}>
      {" "}
      {/* Reduzido */}
      {/* Hero Banner Diferenciado */}
      <section
        style={{
          background: "var(--secondary-black)",
          color: "var(--accent-white)",
          padding: "3rem 0" /* Reduzido */,
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "20%",
            right: "10%",
            width: "250px" /* Reduzido */,
            height: "250px" /* Reduzido */,
            background: "var(--primary-orange)",
            borderRadius: "50%",
            opacity: 0.05,
          }}
        />

        <div className="container">
          <div style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto" }}>
            {" "}
            {/* Reduzido */}
            <div className="badge badge-primary" style={{ marginBottom: "1.5rem" }}>
              {" "}
              {/* Reduzido */}
              <Car size={14} /> {/* Reduzido */}
              {vehicles.length} veículos disponíveis
            </div>
            <h1
              style={{
                fontSize: "clamp(2rem, 4vw, 3rem)" /* Reduzido */,
                fontWeight: "900",
                marginBottom: "1.25rem" /* Reduzido */,
                lineHeight: "1.1",
              }}
            >
              Nosso <span className="text-gradient">Estoque Premium</span>
            </h1>
            <p
              style={{
                fontSize: "1.1rem" /* Reduzido */,
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
      {/* Filtros Laterais + Conteúdo */}
      <section className="section">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "280px 1fr", gap: "2.5rem", alignItems: "start" }}>
            {" "}
            {/* Reduzido */}
            {/* Sidebar de Filtros */}
            <div
              style={{
                position: "sticky",
                top: "120px" /* Reduzido */,
              }}
            >
              <div
                className="card"
                style={{
                  padding: "1.75rem" /* Reduzido */,
                  background: "var(--accent-white)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.75rem" }}>
                  {" "}
                  {/* Reduzido */}
                  <div
                    style={{
                      width: "36px" /* Reduzido */,
                      height: "36px" /* Reduzido */,
                      background: "var(--primary-orange)",
                      borderRadius: "10px" /* Reduzido */,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Filter size={18} style={{ color: "var(--accent-white)" }} /> {/* Reduzido */}
                  </div>
                  <h3 style={{ fontSize: "1.125rem", fontWeight: "700", color: "var(--secondary-black)", margin: 0 }}>
                    {" "}
                    {/* Reduzido */}
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

                <button className="btn btn-primary" style={{ width: "100%", marginTop: "0.75rem" }}>
                  {" "}
                  {/* Reduzido */}
                  <Search size={16} /> {/* Reduzido */}
                  Aplicar Filtros
                </button>

                <button
                  className="btn btn-outline"
                  style={{ width: "100%", marginTop: "0.6rem" }} /* Reduzido */
                  onClick={() => setFilters({ marca: "", modelo: "", precoMin: "", precoMax: "", combustivel: "" })}
                >
                  Limpar Filtros
                </button>
              </div>
            </div>
            {/* Área Principal */}
            <div>
              {/* Barra de Controles */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "1.75rem" /* Reduzido */,
                  padding: "1.25rem" /* Reduzido */,
                  background: "var(--accent-white)",
                  borderRadius: "14px" /* Reduzido */,
                  boxShadow: "var(--shadow)",
                  border: "1px solid var(--gray-200)",
                }}
              >
                <div>
                  <p style={{ fontSize: "0.9rem", fontWeight: "600", color: "var(--secondary-black)", margin: 0 }}>
                    {" "}
                    {/* Reduzido */}
                    {vehicles.length} veículos encontrados
                  </p>
                  <p style={{ fontSize: "0.8rem", color: "var(--gray-600)", margin: 0 }}>
                    {" "}
                    {/* Reduzido */}
                    Página {currentPage} de {totalPages}
                  </p>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                  {" "}
                  {/* Reduzido */}
                  {/* View Mode Toggle */}
                  <div
                    style={{
                      display: "flex",
                      background: "var(--gray-100)",
                      borderRadius: "10px" /* Reduzido */,
                      padding: "0.2rem" /* Reduzido */,
                    }}
                  >
                    <button
                      style={{
                        padding: "0.4rem" /* Reduzido */,
                        background: viewMode === "grid" ? "var(--accent-white)" : "transparent",
                        border: "none",
                        borderRadius: "8px",
                        cursor: "pointer",
                        transition: "all 0.2s ease",
                        boxShadow: viewMode === "grid" ? "var(--shadow-sm)" : "none",
                      }}
                      onClick={() => setViewMode("grid")}
                    >
                    </button>
                    <button
                      style={{
                        padding: "0.4rem" /* Reduzido */,
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
                        size={16} /* Reduzido */
                        style={{ color: viewMode === "list" ? "var(--primary-orange)" : "var(--gray-600)" }}
                      />
                    </button>
                  </div>
                  {/* Sort Dropdown */}
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <ArrowUpDown size={16} style={{ color: "var(--gray-600)" }} /> {/* Reduzido */}
                    <select
                      className="form-input"
                      style={{ minWidth: "160px", padding: "0.6rem" }} /* Reduzido */
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

              {/* Grid de Veículos */}
              <div className={viewMode === "grid" ? "grid grid-3" : ""}>
                {currentVehicles.map((vehicle) => (
                  <VehicleCard key={vehicle.id} vehicle={vehicle} />
                ))}
              </div>

              {/* Paginação Moderna */}
              {totalPages > 1 && (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "0.75rem" /* Reduzido */,
                    marginTop: "2.5rem" /* Reduzido */,
                    padding: "1.75rem" /* Reduzido */,
                    background: "var(--accent-white)",
                    borderRadius: "14px" /* Reduzido */,
                    boxShadow: "var(--shadow)",
                  }}
                >
                  <button
                    className="btn btn-outline"
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage(currentPage - 1)}
                    style={{
                      opacity: currentPage === 1 ? 0.5 : 1,
                      cursor: currentPage === 1 ? "not-allowed" : "pointer",
                      padding: "0.6rem 1.25rem" /* Reduzido */,
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
                        minWidth: "44px" /* Reduzido */,
                        padding: "0.6rem" /* Reduzido */,
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
                      padding: "0.6rem 1.25rem" /* Reduzido */,
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
