import styled from 'styled-components';

interface IIconProps {
  color?: string;
  icon: string;
  size?: string;
  margin?: string;
  revert?: boolean;
}

export const Container = styled.span<IIconProps>`
  color: ${props => props.color};
  font-size: ${props => props.size};
  margin: ${props => props.margin};
  transform: ${props => props.revert ? 'rotate(180deg) !important' : 'unset' };
`;
