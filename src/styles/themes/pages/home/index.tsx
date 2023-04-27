import cafe from '../../../../../src/cafe.png'
import { HomeContainer, Icons } from './style'
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import { CoffeList } from '../CoffeList'


export function Home() {
  return (
    <div>
    <HomeContainer>
      <div>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <h3>Com o Coffe Delivery você recebe seu café onde estiver, a qualquer hora</h3>
        <Icons>
            <span> <i><ShoppingCart size={24} /></i> Compra simples e segura</span>
            <span> <i><Timer size={24} /></i> Entrega rápida e rastreada</span>
            <span> <i><Package size={24} /> </i>Embalagem mantém o café intacto</span>
            <span><i> <Coffee size={24} /></i> O café chega fresquinho até você</span>
        </Icons>
      </div>
      <div>
        <img src={cafe} alt="" />
      </div>
    </HomeContainer>
    <CoffeList />
    </div>
    

  )
}