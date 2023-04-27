import { HeaderContainer } from "./style";
import logo from '../../../src/Logo.png'
import icon from '../../../src/icon.png'
import city from '../../../src/City.png'
import { ShoppingCart } from 'phosphor-react'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logo} alt="" />
      <nav>
        <a href="">
          <img src={icon} alt="" />
          <img src={city} alt="" />
        </a>
        <button type="submit">
          <ShoppingCart size={24} />
        </button>
      </nav>
    </HeaderContainer>
  )
}