import React from 'react';

import { Container } from './styles';

const ContentGrid: React.FC = ({children}) => {
  return (
    <Container>
      {children}
    </Container>
  );
}

export default ContentGrid;
