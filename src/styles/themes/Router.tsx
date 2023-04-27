import { Route, Routes } from "react-router-dom"
import { DefaultLayout } from "../../components/layouts/defaulLayouts"
import { ConfirmaContainer } from "./pages/ConfirmaPedido"
import { Home } from "./pages/home"
import { Pedido } from "./pages/Pedidos"

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/pedido" element={< Pedido />} />
        <Route  path="/status" element={< ConfirmaContainer />}/>
      </Route>
    </Routes>

  )
}