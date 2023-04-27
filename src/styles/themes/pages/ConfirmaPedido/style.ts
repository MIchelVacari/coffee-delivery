import styled from "styled-components";

export const StatusContainer = styled.div`

`


export const Titulos = styled.div`
  flex-direction: column;
  display: block;
  padding-top: 2rem ;
 

  h1 {
    color: ${props => props.theme['yellow-200']};
    
  }

  h3 {
    color: ${props => props.theme['gray-800']};
    
  }
`

export const InforContainer = styled.div`
  width: 32.875rem;
  height: 16.875rem;
  border: 2px solid ;
  border-top-right-radius: 8px; 
`

export const LocalStatus = styled.div`
  display: flex;
  align-items: center;
  gap: 0.95rem;
  margin-left: 1rem;
  margin-top: 2rem;

  button {
    background-color: ${props => props.theme['purple-200']};
    color: ${props => props.theme['white']};
    border-radius: 20px;
    border: 0;
    height: 2rem;
    width: 40px;
  }

  p {
  font-size: 18px;
  font-family: 'Roboto', monospace;
}
`

export const TimerStatus = styled.div`
  display: flex;
  align-items: center;

  display: flex;
  align-items: center;
  gap: 0.95rem;
  margin-left: 1rem;
  

  button {
    background-color: ${props => props.theme['yellow-100']};
    color: ${props => props.theme['white']};
    border-radius: 20px;
    border: 0;
    height: 2rem;
    width: 40px;
  }

  p {
  font-size: 18px;
  font-family: 'Roboto', monospace;
} 
`
export const MoneyStatus = styled.div`
  display: flex;
  align-items: center;
  gap: 0.95rem;
  margin-left: 1rem;

  button {
    background-color: ${props => props.theme['yellow-200']};
    color: ${props => props.theme['white']};
    border-radius: 20px;
    border: 0;
    height: 2rem;
    width: 40px;
  }

  p {
  font-size: 18px;
  font-family: 'Roboto', monospace;
}
`
