import styled from 'styled-components'

export const DivContainerMain = styled.div`
    /* background-image: linear-gradient(to right top, #051937, #013456, #005274, #00728e, #1693a5) !important; */
    width: 100vw;
    height: 100%;


  h1{
    color: white;
    font-weight: 100%;
  }
  h1 > span {
    color: #E0E0E0;
    font-size: 2rem;
  }

  .img-book{
  animation: go-back 1s infinite alternate;

    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;

    img{
      width: 30%;
    }
  }
  .invalid-feedback{
    color:red
  }
  @keyframes go-back {
    from {
      transform: translateY(-100px);
    }
    to {
      transform: translateX(0);
    }
  }
`
