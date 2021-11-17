import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled(Link)`
  width: 100%;
  padding: 0;
  padding-top: 35px;
  justify-content: center;
  align-items: center;
  height: 156px;
  flex-direction: column;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0;
  background: ${props => props.theme.colors.bgBox};
  color: ${props => props.theme.colors.textColor};
  border: 0 solid #fff;
  border-radius: 8px;
  margin-top: 1rem;
  text-decoration: none;
  transition: all .3s ease-in-out;

  display: flex;
  flex-direction: column;
  align-items: center;

  &:hover {
    background: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.white};
  }

  > h2 {
    margin: 1rem 0;
    font-size: 1rem;
    font-weight: 600;
  }
`;
