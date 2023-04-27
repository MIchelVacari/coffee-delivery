import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;


  nav {
    display: flex;
    gap: 0.5rem;
    
  }

  a {
    background-color: ${props => props.theme['gray-400']};
    border-radius: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  button {
    border: none;
    border-radius: 0.2rem;
    color: ${props => props.theme['yellow-200']};
    background-color: ${props => props.theme['yellow-300']};

  &:hover {
    background-color: ${props => props.theme['yellow-200']};
  }
  }
` 