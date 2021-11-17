import React from 'react';

import { Container } from './styles';
interface LoaderProps {
  isFixed?: boolean;
  borderRadius?: string;
  zIndex?: number;
}

const Loader: React.FC<LoaderProps> = ({ isFixed = false, borderRadius, zIndex }) => {
  return (
    <Container isFixed={isFixed} borderRadius={borderRadius} zIndex={zIndex}>
      <div>
        <span />
      </div>
    </Container>
  );
};

export default Loader;
