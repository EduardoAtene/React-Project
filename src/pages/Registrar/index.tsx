import React from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
  MDBIcon
}
from 'mdb-react-ui-kit';

import imgDefaultBook from '../../assets/book_default_image_r.png';

import { DivContainerMain } from './style';

export function Registrar() {
  return (
    <DivContainerMain>
      <MDBContainer fluid className='p-4'>
      
        <MDBRow>

          <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center'>

            <h1 className="my-5 display-3 fw-bold px-3">
              BookShare <br />
              <span className="">Leia, doe, inspire - juntos, fazemos a diferença!</span>
            </h1>
            <div className='img-book'>
              <img src={imgDefaultBook}/>
            </div>
          </MDBCol>

          <MDBCol md='6'>

            <MDBCard className='my-5'>
              <MDBCardBody className='p-5'>
                <h2>Se cadastre no BookShare!</h2>

                <MDBRow>
                  <MDBCol col='12'>
                    
                    <MDBInput wrapperClass='mb-4' label='Insiera seu Nonme' id='form1' type='text'/>
                  </MDBCol>
                </MDBRow>

                <MDBInput wrapperClass='mb-4' label='Email' id='form1' type='email'/>
                <MDBInput wrapperClass='mb-4' label='Password' id='form1' type='password'/>

                <div className='d-flex justify-content-center mb-4'>
                  <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Subscribe to our newsletter' />
                </div>

                <MDBBtn className='w-100 mb-4' size='md'>sign up</MDBBtn>

                <div className="text-center">

                  <p>or sign up with:</p>

                  <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                    <MDBIcon fab icon='facebook-f' size="sm"/>
                  </MDBBtn>

                  <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                    <MDBIcon fab icon='twitter' size="sm"/>
                  </MDBBtn>

                  <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                    <MDBIcon fab icon='google' size="sm"/>
                  </MDBBtn>

                  <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                    <MDBIcon fab icon='github' size="sm"/>
                  </MDBBtn>

                </div>

              </MDBCardBody>
            </MDBCard>

          </MDBCol>

        </MDBRow>

      </MDBContainer>
    </DivContainerMain>

  );
}
