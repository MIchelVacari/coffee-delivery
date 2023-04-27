import styled from "styled-components";

export const Page = styled.div`
  gap: 2rem;
  flex-direction: row;
  display: flex;
 
`

export const SubTituloPedidos = styled.div`
display: block;
flex-direction: column;
align-items: center;

  button{
    color: ${props => props.theme['yellow-200']};
    border: 0;
   
  }

  span {
      align-items: center;
      gap: 0.5rem;
      font-weight: bold;
      font-size: 1.5rem;
    }

    p {
      color: ${props => props.theme['gray-700']};
      margin-left: 35px;
      margin-top: 1px;
    }
`
export const PedidosContainer = styled.div`
  display: block;
  justify-content: space-between;
  flex-direction: row;
  gap: 10rem;
  width: 100%;
  font-family: 'Roboto', monospace;

  form {
    width: 40rem;
    height: 36.937rem;

    background-color: ${props => props.theme['gray-200']};
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 2rem;
    padding: 1rem;
    
  }

  input {

    /* width: 12.5rem; */
    background-color: ${props => props.theme['gray-300']};
    height: 2.625rem;
    border: 0;

    ::placeholder {
      color: ${props => props.theme['gray-600']};
      font-family: 'Roboto', monospace;
    }
  }
`

export const TotalItens = styled.div`
  display: flex;
  justify-content: space-between;
  
`
export const Entrega = styled.div`
  display: flex;
  justify-content: space-between;

`

export const ValorTotal = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: 'Roboto', monospace;
  font-weight: bold;
`

export const ItensContainer = styled.div`
 
  
  display: grid;
  align-items: center;
  justify-content: center;
  width: 40rem;
  height: 31.125rem;
  padding: 32px;
  border-top-right-radius: 2rem;
  background-color: ${props => props.theme['gray-200']};
  

  button {
    width: 23rem;
    height: 2.875rem;
    background-color: ${props => props.theme['yellow-100']};
    border: 0;
    color: ${props => props.theme['white']};


    &:hover {
      background-color: ${props => props.theme['yellow-200']};
    }
  }

 
`

export const WatchItensContainer = styled.div`
   width: 23rem;
   height: 5rem;
   display: flex;
   justify-content: space-between;
   gap: 15px;

  img {

    width: 4rem;
    height: 4rem;
  }
  #trash {
    display: flex;
    text-align: center;
    align-items: center;
    flex-direction: row;
    width: 5.687rem;
    height: 2rem;
    background-color: ${props => props.theme['gray-400']};
    color: ${props => props.theme['purple-200']};

    :hover {
      background-color: ${props => props.theme['gray-500']};
    }
  }

  #count {
    width: 4.5rem;
    height: 2rem;
    background-color: ${props => props.theme['gray-400']};
    color: ${props => props.theme['purple-200']};
    border: solid;
  }
`

export const FormOfPayment = styled.div`

  width: 42rem;
  height: 12.937rem;

  gap: 10rem;
  margin-top: 8px;

  flex-direction: row;
  background-color: ${props => props.theme['gray-300']};

  button {
    display: flex;
    margin: 10px;
    text-align: center;
    align-items: center;
    gap: 0.5rem;
    flex-direction: row;
    background-color: ${props => props.theme['gray-400']};

    border: none;
    color: ${props => props.theme['purple-200']};

    :hover {
      background-color: ${props => props.theme['gray-500']};
    }
  }

  p {
    display: block;
    flex-direction: column;
    margin-left: 40px;
    margin-top: 2px;
  }
`

export const FormPay = styled.div`
    width: 35rem;
    height: 3.1875rem;
    

    display: flex;
    margin-left: 35px;
  
    gap: 0.85rem;

    button {
      width: 11.166rem;
      height: 3.1875rem;

      margin-top: 40px;

      text-align: center;
      align-items: center;
      justify-content: center;
      
    }
`

export const PayTitulo = styled.div`
  
  display: flex;
  align-items: center;
  flex-direction: row;
  margin-top: 2px;

  button {
    border-radius: 9px;
    border: 0;
  }
    
  span {
    font-size: 24px;
    display: flex;
    flex-direction: row;
    font-weight: 'Roboto', monospace;
  }

`