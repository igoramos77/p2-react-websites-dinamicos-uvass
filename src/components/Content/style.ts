import styled from 'styled-components';

export const Container = styled.div`
  grid-area: CT;
  color: ${props => props.theme.colors.white};
  display: flex;
  justify-content: center;
  margin: 0 auto;
  max-width: 1320px;
  /* max-width: 1184px; */
  width: 100%;
  min-height: 100vh;
  //width: 100vh; /* VERIFICAR AQUI */
  //height: calc(100vh - 80px); /* VERIFICAR AQUI */

  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background: ${props => props.theme.colors.secondary};
    border-radius: 10px;
  }
  ::-webkit-scrollbar-track{
    background: ${props => props.theme.colors.tertiary};
  }

  /* MOBILE */
  @media (max-width: 480px) {
    padding: 30px 1rem;
  }
`;
