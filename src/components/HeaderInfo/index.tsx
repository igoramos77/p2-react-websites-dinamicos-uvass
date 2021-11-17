import React from 'react';
import { Link } from 'react-router-dom';

import { Container, SupTitle, Title } from './styles';

import Icon from '../Icon';

interface IHeaderInfoProps {
  supTitle: string;
  title: string;
  margin?: string;
  showSendButton?: boolean;
  badge?: string;
  to?: any;
}

const HeaderInfo: React.FC<IHeaderInfoProps> = ({ supTitle, title, margin, badge, to, showSendButton = true }) => {
  return (
    <Container margin={margin} showSendButton={showSendButton}>
      <div>
        <SupTitle>{supTitle}</SupTitle>
        <Title>{badge && <span>{badge}</span>} {title}</Title>
      </div>
      <div>
        <Link to={to}><Icon icon="icon-icon-send-message" color="#ffffff" size="14px" margin="0 8px 0 0" /> BUTTON EXAMPLE</Link>
      </div>
    </Container>
  );
}

export default HeaderInfo;
