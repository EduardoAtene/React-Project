import styled from 'styled-components'

export const HeaderContainer = styled.header`
  background-color: ${(props) => props.theme.terciary};
  padding: 1rem 0 2rem;
  border-end-end-radius: 20px;
  border-end-start-radius: 20px;
`

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1720px;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const LogoImageContent = styled.div`
  width: 4rem;
  max-width: 100%;

  display: flex;
  align-items: center;
  gap: 0.3;
  h2 {
    font-family: 'Jost', sans-serif;
  }
`

export const NewHistoryButton = styled.button`
  height: 50px;
  border: 0;
  background: ${(props) => props.theme['green-500']};
  color: ${(props) => props.theme.white};
  font-weight: bold;
  padding: 0 1.5rem;
  border-radius: 6px;
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: ${(props) => props.theme['green-700']};
    transition: background-color 0.25;
  }
`

// export const NavButtonHeader = styled.button`
//     display: block;

//     margin: 2rem;
//     padding: 2rem;

//     border-radius: 8px;

// `
