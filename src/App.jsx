import { Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Estoque from "./pages/Estoque"
import VeiculoDetalhes from "./pages/VeiculoDetalhes"
import VendaSeuVeiculo from "./pages/VendaSeuVeiculo"
import Financiamento from "./pages/Financiamento"
import Contato from "./pages/Contato"
import Sobre from "./pages/Sobre"

import ScrollToTop from "./components/ScrollToTop"

function App() {
  return (
    <div className="App">
      <Header />
      <ScrollToTop />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/estoque" element={<Estoque />} />
          <Route path="/veiculo/:id" element={<VeiculoDetalhes />} />
          <Route path="/venda" element={<VendaSeuVeiculo />} />
          <Route path="/simulacao" element={<Financiamento />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/sobre" element={<Sobre />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
