import React from 'react';

import { Container } from './styles';

const Footer: React.FC = () => {
  return (
    <Container>
      <p>{new Date().getFullYear()} Kabom - ‎Explosão de Preços Baixos!</p>
    </Container>
  );
}

export default Footer;
