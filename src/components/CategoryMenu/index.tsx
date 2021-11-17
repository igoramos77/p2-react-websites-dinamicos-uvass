import React from 'react';

import { Container } from './styles';

interface ICategoryMenu {
  category: string;
  to: string;
}

const CategoryMenu: React.FC<ICategoryMenu> = ({category, to, children }) => {
  return (
    <Container to={`/categoria/` + to}>
      <h2>{category}</h2>
      {children}
    </Container>
  );
}

export default CategoryMenu;
