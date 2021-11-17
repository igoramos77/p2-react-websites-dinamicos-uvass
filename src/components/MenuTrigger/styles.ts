import styled from 'styled-components';

interface IMenuTriggerContainerProps {
  notify?: boolean;
  disabledd?: boolean;
  badge?: string;
}

export const MenuTriggerContainer = styled.button<IMenuTriggerContainerProps>`
  color: ${props => props.disabledd ? '#ffffff60'  : '#fff'};
  background: none;
  text-decoration: none;
  font-size: 20px;
  transition: .4s;
  position: relative;
  margin-right: 2rem;

  &:hover {
    color: #ffffff;
  }

  &::before {
    content: '${props => props.badge}';
    position: absolute;
    align-items: center;
    justify-content: center;
    font-size: 11px;
    height: 16px;
    width: 16px;
    border-radius: 50%;
    background-color: #df514e;
    left: -10px;
    padding: 0px 1px 2px 0px;
    display: ${props => props.badge ? 'flex' : 'none'};
  }

  &::after {
    content: '';
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: #41efff;
    border: 2px solid #6e61c6;
    position: absolute;
    top: 1px;
    right: -3px;
    display: ${props => props.notify ? 'block' : 'none'};
  }
`;
