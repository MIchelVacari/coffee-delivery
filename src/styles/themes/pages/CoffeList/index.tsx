import { ListContainer, Titulo, BuyContainer, Container } from "./styles"
import { Minus, Plus, ShoppingCart } from "phosphor-react"
import { useEffect, useState } from "react"
import { listaDeProdutos } from '../../pages/produtos'


export function CoffeList() {

  const [carList, setCarList] = useState<number[]>([])

  useEffect(() => { }, [carList])

  function addList() {
    setCarList(state => [...state, 1])
  }

  const [qtdProduto, setQtdProduto ] = useState<number[]>([])

  useEffect(() => {}, [qtdProduto])

  function addQtd() {
    setQtdProduto(state => [...state, 222]) 
  }
  return (
    <div>


      <Titulo>
        <h3>Nossos cafés</h3>
      </Titulo>

      <Container>
        {listaDeProdutos.map(item =>
          <ListContainer>
            <img src={item.imagem} alt="" />
            <p>{item.type}</p>
            <h2>{item.nome}</h2>
            <h3>{item.descrição}</h3>

            <BuyContainer>
            
              <span>R$:{item.preço.toFixed(2)}</span>
              <button type="submit" onClick={addQtd}><Minus size={20}/></button>
              <p typeof="number"></p>
              <button type="submit" onClick={addQtd}><Plus size={20}/></button>
              <button type="submit" onClick={addList}>
                <ShoppingCart size={20} />
              </button>

            </BuyContainer>

          </ListContainer>
        )}
        
      </Container>
  
      <div>
        <ul>
          {carList.map(item => <li>{item}</li>)}

          {qtdProduto.map(item => <li>{item}</li>)}
        </ul>
      </div>
    </div>

  )
}
