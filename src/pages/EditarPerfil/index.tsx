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

import imgBookDonation from '../../assets/user-book-image.jpg';

interface FormData {
  nome: string;
  email: string;
  cidade: string;
  bairro: string;
  estado: string;
}

export function EditarPerfil() {
  const [validated, setValidated] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    nome: '',
    email: '',
    cidade: '',
    bairro: '',
    estado: '',
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
        <Container className='mt-2'>
          <Row>
            <h1 className='mb-4 mr-4'>
                <Badge bg="primary"> - </Badge> Editar Perfil
            </h1>
            <Col md={6} className='d-flex align-items-center justify-content-center mr-2'>
              <Image src={imgBookDonation} roundedCircle className='imgDonation'/>
            </Col>
            <Col md={6}>
              <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="nome">
                  <Form.Label>Nome</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Nome"
                    value={formData.nome}
                    onChange={handleChange}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Por favor, forneça o seu nome.
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Por favor, forneça um email válido.
                  </Form.Control.Feedback>
                </Form.Group>

                <Row className="mb-3">
                  <Form.Group as={Col} md="6" controlId="cidade">
                    <Form.Label>Cidade</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Cidade"
                      value={formData.cidade}
                      onChange={handleChange}
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      Por favor, forneça a cidade.
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} md="6" controlId="bairro">
                    <Form.Label>Bairro</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Bairro"
                      value={formData.bairro}
                      onChange={handleChange}
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      Por favor, forneça o bairro.
                    </Form.Control.Feedback>
                  </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="estado">
                  <Form.Label>Estado</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Estado"
                    value={formData.estado}
                    onChange={handleChange}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Por favor, forneça o estado.
                  </Form.Control.Feedback>
                </Form.Group>

                <Button type="submit">Salvar Alterações</Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </FormsContainer>
    </>
  );
}