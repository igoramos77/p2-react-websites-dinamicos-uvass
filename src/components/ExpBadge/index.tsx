import React from 'react';

import Icon from '../../components/Icon';

import { Container } from './styles';

interface IExpBadgeProps {
  exp: string | number;
  icon: 'icon-icon-plus' | 'icon-icon-minus-small';
  background?: string;
  border?: string;
  top?: string | number;
  right?: string | number;
  padding?: string | number;
  position?: 'relative' | 'absolute' | 'unset';
}

const ExpBadge: React.FC<IExpBadgeProps> = ({exp, icon, top, right, padding, position, background, border}) => {
  return (
    <Container top={top} right={right} padding={padding} position={position} background={background} border={border}>
      <div>
        <Icon icon={icon} size="7px" color="#6b67fa" />
        <p>{exp} Exp</p>
      </div>
    </Container>
  );
}

export default ExpBadge;
