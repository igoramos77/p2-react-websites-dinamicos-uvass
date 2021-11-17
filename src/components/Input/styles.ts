import styled from 'styled-components';

export const Container = styled.input`
  width: 100%;
  padding: 1rem 1.5rem;
  border-radius: 12px;
  background-color: #fff;
  border: 1px solid #dedeea;
  color: ${props => props.theme.colors.primary};
  font-size: 1rem;
  font-weight: 700;
  transition: border-color .2s ease-in-out;
`;
