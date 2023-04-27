import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: Space-between;
`


export const Titulo = styled.div`
  font-size: 25px;
`


export const ListContainer = styled.div`
  display:  flex;
  justify-content: flex;
  flex-wrap: wrap;
  
  border-radius: 1rem;
  border-top-right-radius: 2rem;
  margin-top: 45px;

  background-color: ${props => props.theme['gray-300']};
 
  
  
  text-align: center;
  width: 16rem;
  height: 19rem;
  flex-direction: column;

  img {
    width: 120px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    border: none;
   
  }

  p {
    margin:  auto;
    font-size: 1rem;
    border-radius: 2rem;
    width: 5.123rem;
    height: 1.312rem;
    background-color: ${props => props.theme['yellow-300']};
    color: ${props => props.theme['yellow-100']};
  }

  h2 {
    font-style: bold;
    font-size: 1.125rem;
  }

  h3 {
    font-size: 0.825rem;
    color: ${props => props.theme['gray-600']};
  }

  button {
    background-color: ${props => props.theme['purple-100']};
    color: ${props => props.theme['white']};
    border: none;
    border-radius: 0.500rem;
    width: 2.375rem;
    height: 2.375rem;
    


    &:hover {
    background-color: ${props => props.theme['purple-200']};
  }
  }

  
`

export const BuyContainer = styled.div`

  justify-content: space-between;
  display: flex;
  padding: 10px;

  font-size:25px;
  gap: 3px;
  
  p {

    width: 2.375rem;
    height: 2.375rem;
    background-color: white;
    border-radius: 5px;
  
  }

  `


  
 


