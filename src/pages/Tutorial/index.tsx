import { MainPropagandaContent, ImageContainerPropaganda, DivContainerPropaganda } from './style'
import { HistoryContext } from '../../contexts/HistoryContext'
import { dateFormatter, priceFormatter } from '../../utility/formatter'
import { useContextSelector } from 'use-context-selector'

import imgDesignCenter from '../../assets/download.png'
export function Tutorial() {
  const historico = useContextSelector(HistoryContext, (v) => {
    return v.historico
  })
  return (
      <>
          <h1>Tutorial de como doar livros: criar conta, criar anúncio e realizar a doação</h1>

          <h2>Introdução:</h2>
          <p>Doar livros é uma maneira maravilhosa de compartilhar conhecimento e promover a leitura. Neste tutorial, você aprenderá como doar livros seguindo alguns passos simples. Vamos lá!</p>

          <h2>Passo 1: Criar uma conta</h2>
          <ol>
              <li>Acesse o site de doação de livros da instituição ou plataforma escolhida.</li>
              <li>Procure pela opção de "Criar conta" ou "Registrar-se" e clique nela.</li>
              <li>Preencha as informações solicitadas, como nome, endereço de e-mail e senha. Certifique-se de escolher uma senha segura.</li>
              <li>Confirme sua conta por meio do link de confirmação enviado para o seu endereço de e-mail.</li>
          </ol>

          <h2>Passo 2: Criar um anúncio</h2>
          <ol>
              <li>Faça login na sua conta recém-criada.</li>
              <li>Procure pela opção de "Criar anúncio" ou algo semelhante e clique nela.</li>
              <li>Você será direcionado para uma página onde poderá fornecer informações sobre o livro que deseja doar.</li>
              <li>Preencha os campos solicitados, como título do livro, autor, editora e uma breve descrição do conteúdo.</li>
              <li>Se você já tiver o livro cadastrado no sistema, procure pelo campo "Buscar livro" e insira o código ISBN do livro. O sistema irá localizar as informações automaticamente. Caso contrário, continue preenchendo os campos manualmente.</li>
          </ol>

          <h2>Passo 3: Realizar o anúncio</h2>
          <ol>
              <li>Após preencher todos os detalhes do livro, clique em "Anunciar" ou "Publicar".</li>
              <li>Revise as informações fornecidas para garantir que estejam corretas.</li>
              <li>Algumas plataformas podem solicitar que você faça o upload de uma foto do livro para melhor visualização.</li>
              <li>Se estiver satisfeito com as informações e a foto, clique em "Confirmar" ou "Publicar anúncio".</li>
              <li>Seu anúncio estará agora disponível para visualização por outras pessoas interessadas em receber o livro.</li>
          </ol>

          <h2>Conclusão:</h2>
          <p>Parabéns! Você concluiu com sucesso o tutorial de como doar livros. Lembre-se de que a doação de livros pode fazer a diferença na vida de alguém, permitindo que mais pessoas tenham acesso ao conhecimento e à leitura. Continue ajudando a promover a educação e a cultura por meio das suas</p>

    </>
  )
}
