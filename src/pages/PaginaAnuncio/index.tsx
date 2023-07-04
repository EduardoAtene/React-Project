import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { TutorialContainer } from './style';
import { CardsContainer } from '../Anuncio/style';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Badge from 'react-bootstrap/Badge';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import imgBookDonation from '../../assets/book_default_1.jpg';

interface LivroDetalhes {
  id: number;
  ISBN: string;
  Titulo: string;
  Subtitulo: string;
  DataPublicacao: string;
  Editora: string;
  Generos: string;
  Autores: string;
  Foto: string | null;
}

export function PaginaAnuncio() {
  const { idLivro } = useParams<{ idLivro: string }>();
  const [livroDetalhes, setLivroDetalhes] = useState<LivroDetalhes | null>(null);

  useEffect(() => {
    getLivroDetalhes(idLivro);
  }, [idLivro]);

  const getLivroDetalhes = async (idLivro: string) => {
    try {
      const response = await axios.get(`http://localhost:8765/api/v1/livro/${idLivro}`);
      const data = response.data.data.livros_info;
      if (data.length > 0) {
        const livro: LivroDetalhes = data[0];
        setLivroDetalhes(livro);
      } else {
        console.error('Detalhes do livro não encontrados');
      }
    } catch (error) {
      console.error('Erro ao obter os detalhes do livro:', error);
    }
  };

  if (!livroDetalhes) {
    return <div>Carregando...</div>;
  }

  const handleAbrirWhatsapp = () => {
    window.open('https://api.whatsapp.com/send/?phone=5531992051504&text&type=phone_number&app_absent=0', '_blank');
  };

  return (
    <>
      <TutorialContainer>
        <CardsContainer>
          <Container className='mt-2'>
            <h1 className='mb-4 mr-4'>
              <Badge bg="primary"> - </Badge> Anuncio : {livroDetalhes.Titulo}
            </h1>
            <Row>
              <Col md={6} className='d-flex align-items-center justify-content-center mr-2'>
                <Image src={imgBookDonation} roundedCircle className='imgDonation'/>
              </Col>
              <Col md={6} className='d-flex align-items-center justify-content-center'>
                <Card>
                  <Card.Header>{livroDetalhes.Titulo}</Card.Header>
                  <Card.Body>
                    <Card.Title className='mb-2'>{livroDetalhes.Subtitulo}</Card.Title>
                    <Card.Text className='me-4'>
                      <strong>ISBN:</strong> {livroDetalhes.ISBN} <br />
                      <strong>Editora:</strong> {livroDetalhes.Editora} <br />
                      <strong>Gêneros:</strong> {livroDetalhes.Generos} <br />
                      <strong>Autores:</strong> {livroDetalhes.Autores} <br />
                      <strong>Data de Publicação:</strong> {livroDetalhes.DataPublicacao}<br />
                    </Card.Text>
                    <Button variant="success" onClick={handleAbrirWhatsapp}>Abrir Whatsapp</Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </CardsContainer>
      </TutorialContainer>
    </>
  );
}