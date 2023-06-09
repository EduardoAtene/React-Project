import styled from 'styled-components'

export const MainPropagandaContent = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ImageContainerPropaganda = styled.img`
  flex: 1;
`

export const DivContainerPropaganda = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  animation: go-back 1s infinite alternate;
  h2 {
    font-size: 3rem;
  }
  span {
    font-size: 2rem;
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
