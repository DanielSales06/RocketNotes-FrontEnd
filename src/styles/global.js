import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
 * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
 }

 body {
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  color: ${({ theme }) => theme.COLORS.WHITE};

 
  -webkit-font-smoothing: antialiased;
 }

 body, input, button, textarea {
  font-family: 'Roboto Slab', serif;
  font-size: 16px;
  outline: none;
 }

 a {
  text-decoration: none;
 }

 button, a {
  cursor: pointer;
  transition: filter 0.2s;
 }

 button:hover, a:hover {
  filter: brightness(0.9);
 }

  /* Works on Firefox */
  * {
    scrollbar-width: thin;
    scrollbar-color: ${({ theme }) => theme.COLORS.ORANGE} ${({ theme }) => theme.COLORS.BACKGROUND_700};
   }

   /* Works on Chrome, Edge, and Safari */
   *::-webkit-scrollbar {
    width: .8rem;
   }

   *::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.COLORS.BACKGROUND_700};
   }

   *::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.COLORS.ORANGE};
    border-radius: .8rem;
    border: solid ${({ theme }) => theme.COLORS.BACKGROUND_700};
    ;
   }

 input:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 30px #232129 inset;
    background: content-box;
    border-radius: 0.8rem;
  }

/* Cor do texto do autocomplete */
  input:-webkit-autofill {
      -webkit-text-fill-color: white !important;
  }

// Mostra senha
::-ms-reveal {
    border: 2px solid ${({theme}) => theme.COLORS.ORANGE};
    background-color: ${({theme}) => theme.COLORS.ORANGE}; 
    border-radius: 50%;
  }
`;

