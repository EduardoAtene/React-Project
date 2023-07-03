import { MainPropagandaContent, ImageContainerPropaganda, DivContainerPropaganda, MainSectionContainer } from './style'
import { HistoryContext } from '../../contexts/HistoryContext'
import { dateFormatter, priceFormatter } from '../../utility/formatter'
import { useContextSelector } from 'use-context-selector'

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import imgDefaultBook from '../../assets/book_default_image.jpg';
import imgDesignCenter from '../../assets/download.png'

import { useEffect, useState } from 'react';
import authService from '../../lib/auth.service';
import axios from 'axios';
export function Home() {
  const [livros, setLivros] = useState([]);

  useEffect(() => {
    getLivros();
  }, []);
  const API_URL = "http://localhost:8765/api/v1/";

  const getLivros = async () => {
    try {
      debugger
      const response = await axios.get(API_URL + 'livro/all');
      const data = response.data.data;
      debugger
      setLivros(data.livros);

    } catch (error) {
      debugger
      console.error('Erro ao obter os livros:', error);
    }
  };
  return (
    <>
      <MainPropagandaContent>
        <ImageContainerPropaganda src={imgDesignCenter} />
        <DivContainerPropaganda>
          <h2>Livros que voam das estantes</h2>
          <h2>para os corações</h2>
          <h2>dos leitores.</h2>
          <span>Leia, doe, inspire - juntos, fazemos a diferença!</span>
        </DivContainerPropaganda>
      </MainPropagandaContent>


      <MainSectionContainer> 
        <Container className="mt-4">
          <Row>
          {livros.map(livro => (
              <Col key={livro.id}>
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={livro.Foto || imgDesignCenter} />
                  <Card.Body>
                    <Card.Title>{livro.Titulo}</Card.Title>
                    <Card.Text>{livro.Subtitulo}</Card.Text>
                    <Button variant="primary">Visualizar</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </MainSectionContainer>
    </>
  )
}
