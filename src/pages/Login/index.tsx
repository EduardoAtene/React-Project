import React, { useState } from 'react';
import * as Yup from 'yup';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane
} from 'mdb-react-ui-kit';

import imgDefaultBook from '../../assets/book_default_image_r.png';

import { DivContainerMain } from './style';
import Button from 'react-bootstrap/esm/Button';
import authService, { RegisterUser } from '../../lib/auth.service';
import axios from 'axios';

interface FormValues {
  emailLogin: string;
  senhaLogin: string;
  nome: string;
  email: string;
  senha: string;
  rp_senha: string;
  cidade: string;
  bairro: string;
  estado: string;
}

interface FormErrors {
  emailLogin?: string;
  senhaLogin?: string;
  nome?: string;
  email?: string;
  senha?: string;
  rp_senha?: string;
  cidade?: string;
  bairro?: string;
  estado?: string;
}

export function Login() {
  const [values, setValues] = useState<FormValues>({
    emailLogin: '',
    senhaLogin: '',
    nome: '',
    email: '',
    senha: '',
    rp_senha: '',
    cidade: '',
    bairro: '',
    estado: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Partial<FormErrors>>({});
  const [loginRegisterActive, setLoginRegisterActive] = useState('register');

  const handleLoginRegisterClick = (tab: string) => {
    setLoginRegisterActive(tab);
  };

  const loginSchema = Yup.object().shape({
    emailLogin: Yup.string().email('Digite um email válido').required('Campo obrigatório'),
    senhaLogin: Yup.string().required('Campo obrigatório'),
  });

  const registerSchema = Yup.object().shape({
    nome: Yup.string().required('Campo obrigatório'),
    email: Yup.string().email('Digite um email válido').required('Campo obrigatório'),
    senha: Yup.string().required('Campo obrigatório'),
    rp_senha: Yup.string()
      .oneOf([Yup.ref('senha'), ''], 'As senhas devem coincidir')
      .required('Campo obrigatório'),
    cidade: Yup.string().required('Campo obrigatório'),
    bairro: Yup.string().required('Campo obrigatório'),
    estado: Yup.string().required('Campo obrigatório'),
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name } = e.target;
    setTouched({
      ...touched,
      [name]: true,
    });
  };

  const handleSubmitLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    loginSchema
      .validate(values, { abortEarly: false })
      .then(() => {
        // Lógica para fazer o login
      })
      .catch((validationErrors: Yup.ValidationError) => {
        const errors: FormErrors = {};
        validationErrors.inner.forEach((error) => {
          errors[error.path as keyof FormErrors] = error.message;
        });
        setErrors(errors);
      });
  };

  const handleSubmitRegister = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Adicione o preventDefault()
  const API_URL = "http://localhost:8765/api/v1/";

    const response = axios.get(API_URL + 'usuario/all');
  
    registerSchema
      .validate(values, { abortEarly: false })
      .then(() => {
          fetch(API_URL + 'usuario', {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            mode: "no-cors", // no-cors, *cors, same-origin
            cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            credentials: "same-origin", // include, *same-origin, omit
            headers: {
              "Content-Type": "application/json",
              // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: "follow", // manual, *follow, error
            referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify(values)
          }).then((response) => {
            console.log(response);
          });
      

          // .register(values)
          // .then(response => {
          //   // Lógica após o registro bem-sucedido
          //   console.log('Registro realizado com sucesso:', response);
          // })
          // .catch(error => {
          //   // Tratar erros durante o registro
          //   console.error('Erro durante o registro:', error);
          // });
      })
      .catch(validationErrors => {
        const errors: FormErrors = {};
        validationErrors.inner.forEach(error => {
          errors[error.path as keyof FormErrors] = error.message;
        });
        setErrors(errors);
      });
  };
  
  return (
    <DivContainerMain>
      <MDBContainer fluid className='p-4'>
        <MDBRow>
          <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center'>
            <h1 className='my-5 display-3 fw-bold px-3'>
              BookShare <br />
              <span className=''>Leia, doe, inspire - juntos, fazemos a diferença!</span>
            </h1>
            <div className='img-book'>
              <img src={imgDefaultBook} alt='Default Book' />
            </div>
          </MDBCol>
          <MDBCol md='6'>
            <MDBCard className='my-5'>
              <MDBCardBody className='p-5'>
                <div>
                  <MDBTabs pills justify className='mb-3'>
                    <MDBTabsItem>
                      <MDBTabsLink onClick={() => handleLoginRegisterClick('login')} active={loginRegisterActive === 'login'}>
                        Login
                      </MDBTabsLink>
                    </MDBTabsItem>
                    <MDBTabsItem>
                      <MDBTabsLink
                        onClick={() => handleLoginRegisterClick('register')}
                        active={loginRegisterActive === 'register'}
                      >
                        Register
                      </MDBTabsLink>
                    </MDBTabsItem>
                  </MDBTabs>
                  <MDBTabsContent>
                    <MDBTabsPane show={loginRegisterActive === 'login'}>
                      <div className='text-center mb-3'>
                        <h2 className='m-4'>Faça seu Login!</h2>
                      </div>
                      <form onSubmit={handleSubmitLogin}>
                        <p>Email:</p>
                        <MDBInput
                          type='email'
                          id='emailLogin'
                          label=''
                          name='emailLogin'
                          value={values.emailLogin}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className={errors.emailLogin && touched.emailLogin ? 'is-invalid mb-4' : 'mb-4'}
                        />
                        {errors.emailLogin && touched.emailLogin && <div className='invalid-feedback'>{errors.emailLogin}</div>}
                        <p>Senha:</p>
                        <MDBInput
                          type='password'
                          id='senhaLogin'
                          label=''
                          name='senhaLogin'
                          value={values.senhaLogin}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className={errors.senhaLogin && touched.senhaLogin ? 'is-invalid mb-4' : 'mb-4'}
                        />
                        {errors.senhaLogin && touched.senhaLogin && <div className='invalid-feedback'>{errors.senhaLogin}</div>}
                        <div className='d-grid'>
                          <Button type='submit' className='mb-4'>
                            Entrar
                          </Button>
                        </div>
                      </form>
                    </MDBTabsPane>
                    <MDBTabsPane show={loginRegisterActive === 'register'}>
                      <form onSubmit={handleSubmitRegister}>
                        <div className='text-center mb-3'>
                          <h2 className='m-4'>Faça seu Registro!</h2>
                        </div>
                        <p>Nome:</p>
                        <MDBInput
                          id='nome'
                          label=''
                          name='nome'
                          value={values.nome}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className={errors.nome && touched.nome ? 'is-invalid mb-4' : 'mb-4'}
                        />
                        {errors.nome && touched.nome && <div className='invalid-feedback'>{errors.nome}</div>}
                        <p>Email:</p>
                        <MDBInput
                          type='email'
                          id='email'
                          label=''
                          name='email'
                          value={values.email}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className={errors.email && touched.email ? 'is-invalid mb-4' : 'mb-4'}
                        />
                        {errors.email && touched.email && <div className='invalid-feedback'>{errors.email}</div>}
                        <MDBRow className='mb-2'>
                          <MDBCol>
                            <p>Senha:</p>
                            <MDBInput
                              type='password'
                              id='senha'
                              label=''
                              name='senha'
                              value={values.senha}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              className={errors.senha && touched.senha ? 'is-invalid mb-4' : 'mb-4'}
                            />
                            {errors.senha && touched.senha && <div className='invalid-feedback'>{errors.senha}</div>}
                          </MDBCol>
                          <MDBCol>
                            <p>Repita a Senha:</p>
                            <MDBInput
                              type='password'
                              id='rp_senha'
                              label=''
                              name='rp_senha'
                              value={values.rp_senha}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              className={errors.rp_senha && touched.rp_senha ? 'is-invalid mb-4' : 'mb-4'}
                            />
                            {errors.rp_senha && touched.rp_senha && <div className='invalid-feedback'>{errors.rp_senha}</div>}
                          </MDBCol>
                        </MDBRow>
                        <MDBRow className='mb-2'>
                          <MDBCol>
                            <p>Cidade:</p>
                            <MDBInput
                              id='cidade'
                              label=''
                              name='cidade'
                              value={values.cidade}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              className={errors.cidade && touched.cidade ? 'is-invalid mb-4' : 'mb-4'}
                            />
                            {errors.cidade && touched.cidade && <div className='invalid-feedback'>{errors.cidade}</div>}
                          </MDBCol>
                          <MDBCol>
                            <p>Bairro:</p>
                            <MDBInput
                              id='bairro'
                              label=''
                              name='bairro'
                              value={values.bairro}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              className={errors.bairro && touched.bairro ? 'is-invalid mb-4' : 'mb-4'}
                            />
                            {errors.bairro && touched.bairro && <div className='invalid-feedback'>{errors.bairro}</div>}
                          </MDBCol>
                          <MDBCol>
                            <p>Estado:</p>
                            <MDBInput
                              id='estado'
                              label=''
                              name='estado'
                              value={values.estado}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              className={errors.estado && touched.estado ? 'is-invalid mb-4' : 'mb-4'}
                            />
                            {errors.estado && touched.estado && <div className='invalid-feedback' >{errors.estado}</div>}
                            
                          </MDBCol>
                        </MDBRow>
                        <div className='d-grid'>
                          <Button type='submit' className='mb-4 btn-outline'>
                            Entrar
                          </Button>
                        </div>
                      </form>
                    </MDBTabsPane>
                  </MDBTabsContent>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </DivContainerMain>
  );
}

export default Login;