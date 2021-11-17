import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 100%;
`;

export const CategoriesGrid = styled.div`
  position: relative;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-gap: 1rem;
  margin-bottom: 2rem;
  border-radius: 12px;

  /* gg */
  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
    padding: 1rem;
  }
  /* TABLET */
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  /* MOBILE */
  @media (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
    padding: 0;
  }
`;

export const ProductsGrid = styled.div`
  position: relative;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 1rem;
  margin-bottom: 2rem;
  border-radius: 12px;

  /* gg */
  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
    padding: 1rem;
  }
  /* TABLET */
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  /* MOBILE */
  @media (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
    padding: 0;
  }
`;
