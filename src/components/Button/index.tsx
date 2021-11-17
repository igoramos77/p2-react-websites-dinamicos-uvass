import React, { ButtonHTMLAttributes } from 'react';

import { Container, LoadingSpinner } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  color:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'info'
    | 'success'
    | 'error'
    | 'outline'
    | 'none';
  block?: boolean;
  loading?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  children,
  block = false,
  loading,
  color,
  ...rest
}) => {
  return (
    <Container
      type="button"
      color={color}
      disabled={loading}
      block={block}
      {...rest}
    >
      {loading ? <LoadingSpinner><div><span /></div></LoadingSpinner> : children}
    </Container>
  );
};

export default Button;
