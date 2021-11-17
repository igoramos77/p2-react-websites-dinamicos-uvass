import styled from 'styled-components';
import Switch, { ReactSwitchProps } from 'react-switch';

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const ToggleLabel = styled.span`
  color: ${props => props.theme.colors.textColor};
  text-align: center;
  font-size: .7rem;
  text-transform: uppercase;
  font-weight: 700;
`;

export const ToggleSelector = styled(Switch).attrs<ReactSwitchProps>(
  ({ theme }) => ({
    onColor: '#6e61c6',
    offColor: '#eaeaf5',
  }))<ReactSwitchProps>`
  margin: 0 7px;
  `;
