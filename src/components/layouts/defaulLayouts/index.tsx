import { Header } from "../../header";
import { Outlet } from "react-router-dom"
import { LayoutContainer } from "./styles";
import { CoffeList } from "../../../styles/themes/pages/CoffeList";


export function DefaultLayout() {
  return (
    <LayoutContainer>
      <Header />
      <Outlet />
    </LayoutContainer>
  )
}