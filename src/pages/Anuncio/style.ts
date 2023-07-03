import styled from 'styled-components'

export const TutorialContainer = styled.div`
  padding: 2rem;
  background-color: white;
  color : black;
  body {
    font-family: Arial, sans-serif;
    line-height: 1.5;
  }
  
  header {
    background-color: #007bff;
    padding: 20px;
    color: #000;
    text-align: center;
  }
  
  h1 {
    margin: 0;
  }
  
  main {
    max-width: 800px;
    margin: 40px auto;
    padding: 20px;
  }
  
  h2 {
    color: #007bff;
  }
  
  p {
    color: #000;
  }

  .imgBook{
    width: 100%;
  }
  
`

export const CardsContainer = styled.div`
  text-align: center;
`

export const Cards = styled.div`
 background-color: white;
  display: inline-block; /* Exibe os cards um ao lado do outro */
  width: calc(20% - 16px); /* Define a largura dos cards (25% - margem) */
  margin: 8px; /* Adiciona uma margem entre os cards */
  vertical-align: top; /* Alinha os cards ao topo */
  border: none;
  border-radius: 4px;
  padding-bottom: 7px;
  box-shadow: 1%;
  box-shadow: 0px 0px 7px 2px gray;
`

export const TituloTexto = styled.div`
  color: #00cccc;
  text-align: center;
  border-color: blue;
  padding-top: 15px;
`

export const ImagenCard = styled.div`
  padding: 30%;
`


export const ButtonCards = styled.div`
 background-color: #007bff;
  color: #fff;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 70%; /* Ajuste o tamanho do botão conforme necessário */
  margin: 0 auto; /* Centraliza o botão horizontalmente */
  display: block; /* Faz o botão ocupar toda a largura disponível */
  text-align: center; /* Centraliza o texto dentro do botão */
`