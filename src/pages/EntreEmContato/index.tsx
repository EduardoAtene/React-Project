import { TutorialContainer } from "./style";

export function EntreEmContato() {

  return (
      <>
        <TutorialContainer>
            <h2>Contato</h2>
            <p>Entre em contato conosco para obter mais informações sobre o nosso site de doações de livros ou para tirar qualquer dúvida.</p>
            <h3>Informações de Contato:</h3>
            <ul>
              <li><strong>Email:</strong> info@livrosparadoacao.com</li>
              <li><strong>Telefone:</strong> (XX) XXXX-XXXX</li>
              <li><strong>Endereço:</strong> Rua dos Livros, 1234, Cidade dos Leitores, Estado</li>
            </ul>
            {/* <h3>Formulário de Contato:</h3>
            <form id="contact-form">
              <label htmlFor="nome">Nome:</label>
              <input type="text" id="nome" name="nome" required>
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required>
              <label htmlFor="mensagem">Mensagem:</label>
              <textarea id="mensagem" name="mensagem" rows="4" required></textarea>
              <button type="submit">Enviar</button>
            </form>    */}
        </TutorialContainer>          
    </>
  )
}
