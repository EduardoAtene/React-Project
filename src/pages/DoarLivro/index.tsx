import { useState, ChangeEvent, FormEvent } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import { FormsContainer } from './style';
import Badge from 'react-bootstrap/Badge';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';

import imgBookDonation from '../../assets/donation-book.jpg';

interface FormData {
  isbn: string;
  titulo: string;
  subtitulo: string;
  editoraGenero: string;
  autor: string;
  dataPublicacao: string;
}

export function DoarLivro() {
  const [validated, setValidated] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    isbn: '',
    titulo: '',
    subtitulo: '',
    editoraGenero: '',
    autor: '',
    dataPublicacao: '',
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    event.stopPropagation();

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      setValidated(true);
      return;
    }

    // Do something with the form data
    console.log(formData);
  };

  return (
    <>
      <FormsContainer>
        <Container className='mt-5'>
          <Row>
            <Col md={6} className='d-flex align-items-center justify-content-center'>
              <Image src={imgBookDonation} roundedCircle className='imgDonation'/>
            </Col>
            <Col md={6}>
              <h1 className='mb-4 mr-4'>
                Doar Livro <Badge bg="primary">Novo</Badge>
              </h1>
              <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Row className="mb-3">
                  <Form.Group as={Col} md="6" controlId="isbn">
                    <Form.Label>ISBN</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="ISBN"
                      value={formData.isbn}
                      onChange={handleChange}
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      Por favor, forneça o ISBN do livro.
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} md="6" controlId="editoraGenero">
                    <Form.Label>Editora e Gênero</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Editora e Gênero"
                      value={formData.editoraGenero}
                      onChange={handleChange}
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      Por favor, forneça a editora e o gênero do livro.
                    </Form.Control.Feedback>
                  </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="titulo">
                  <Form.Label>Título</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Título"
                    value={formData.titulo}
                    onChange={handleChange}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Por favor, forneça o título do livro.
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="subtitulo">
                  <Form.Label>Subtítulo</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Subtítulo"
                    value={formData.subtitulo}
                    onChange={handleChange}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Por favor, forneça o subtítulo do livro.
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="autor">
                  <Form.Label>Autor</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Autor"
                    value={formData.autor}
                    onChange={handleChange}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Por favor, forneça o autor do livro.
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="dataPublicacao">
                  <Form.Label>Data de Publicação</Form.Label>
                  <Form.Control
                    type="datetime-local"
                    placeholder="Data de Publicação"
                    value={formData.dataPublicacao}
                    onChange={handleChange}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Por favor, forneça a data de publicação do livro.
                  </Form.Control.Feedback>
                </Form.Group>

                <Button type="submit">Cadastrar livro para doação</Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </FormsContainer>
    </>
  );
}