import { MainPropagandaContent, ImageContainerPropaganda, DivContainerPropaganda, MainSectionContainer } from './style'
import { HistoryContext } from '../../contexts/HistoryContext'
import { dateFormatter, priceFormatter } from '../../utility/formatter'
import { useContextSelector } from 'use-context-selector'

import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import imgBook from '../../assets/book_home_kid.jpg';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import imgDesignCenter from '../../assets/download.png'

import { useEffect, useState } from 'react';
import axios from 'axios';
import { Books, Star } from '@phosphor-icons/react';
export function Home() {
  const [livros, setLivros] = useState([]);

  useEffect(() => {
    getLivros();
  }, []);
  const API_URL = "http://localhost:8765/api/v1/";

  const getLivros = async () => {
    try {
      const response = await axios.get(API_URL + 'livro/all');
      const data = response.data.data;
      setLivros(data.livros.slice(0, 20));
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
        <div className='divContex'>
          <Container className="mt-4">
            <h1 className='mb-4 mr-4 '>
              <Books size={32} /> Principais Livros
            </h1>
            <Row className="mt-4">
            {livros.map(livro => (
                <Col key={livro.id}>
                  <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={livro.Foto || imgDesignCenter} />
                    <Card.Body>
                      <Card.Title>{livro.Titulo}</Card.Title>
                      <Card.Text>{livro.Subtitulo}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
        </div>
        <Container className='mt-2'>
          <Row>
            <h1 className='mb-4 mr-4 '>
              <Star size={32} /> Principais Livros
            </h1>
            <Col md={8} className='d-flex align-items-center justify-content-center mr-2'>
              <Image src={imgBook} roundedCircle className='imgDonation'/>
            </Col>
            <Col md={4} className='d-flex align-items-center justify-content-center'>
              <h2 className='ml-5 mr-4 text-primary'>
                Abra sua mente, compartilhe o saber: Doe um livro e faça o mundo florescer!
              </h2>
            </Col>
          </Row>
        </Container>
      </MainSectionContainer>
    </>
  )
}