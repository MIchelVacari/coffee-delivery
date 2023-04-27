import styled from "styled-components";

export const HomeContainer = styled.div`
   display: flex;
   justify-content: space-between;
   font-size: 37px;
   margin-top: 5rem;
   

   background-color: ${props => props.theme['yellow-300']};
   padding: 15px;
   h1 {
      margin: 1.5rem;
   }

   h3 {
    font-size: 25px;
    color: ${props => props.theme['gray-600']};
    margin: 1.5rem;
   }

   span {

      font-size: 24px;
      margin: 1.5rem;
   
   }

   i {   
         padding: 7px;
         display: center;
         border-radius: 50px ;
         background-color: ${props => props.theme['yellow-100']} ;
         /* color: ${props => props.theme['white']}; */
         color: black;

         
      }

      
   
`

export const Icons = styled.div`
   display: flex;
   justify-content: flex-start;
   flex-wrap: wrap ;
`