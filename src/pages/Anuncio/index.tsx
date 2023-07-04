import { useState, useEffect } from 'react';
import axios from 'axios';
import { ButtonCards, Cards, CardsContainer, ImagenCard, TituloTexto, TutorialContainer } from "./style";
import imgBook from '../../assets/book_default_1.jpg';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/esm/Container';

export function Anuncios() {
  function Card({ livro }: any) {
    return (
      <Cards>
        <TituloTexto>
          <h3>{livro.Titulo}</h3>
        </TituloTexto>
        <Container>

          <Image src={imgBook} roundedCircle className='imgBook'/>

        </Container>

        <p>{livro.Subtitulo}</p>
        <ButtonCards>
          <button onClick={() => navigateToItemPage(livro.id)}>Ver detalhes</button>
        </ButtonCards>
      </Cards>
    );
  }

  function navigateToItemPage(itemId: number) {
    window.location.href = "/paginaanuncio/"+itemId;
  }

  const [livros, setLivros] = useState([]);

  useEffect(() => {
    getLivros();
  }, []);

  const getLivros = async () => {
    try {
      const response = await axios.get('http://localhost:8765/api/v1/livro/all');
      const data = response.data.data;
      setLivros(data.livros);
    } catch (error) {
      console.error('Erro ao obter os livros:', error);
    }
  };

  return (
    <>
      <TutorialContainer>
        <h2>Anúncios</h2>
        <CardsContainer>
          {livros.map((livro: any) => (
            <Card key={livro.id} livro={livro} />
          ))}
        </CardsContainer>
      </TutorialContainer>
    </>
  );
}