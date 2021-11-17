import styled, { css } from 'styled-components';

interface ContainerProps {
  color?:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'info'
    | 'success'
    | 'error'
    | 'outline'
    | 'none';
  block: boolean;
}

const buttonColorVariations = {
  primary: css`
    background: ${props => props.theme.colors.primary};
    color: #fff;
    &:hover {
      background: #3a3fb9;
    }
  `,
  secondary: css`
    background: ${props => props.theme.colors.secondary};
    color: #fff;
    &:hover {
      background: ${props => props.theme.colors.secondary}99;
    }
  `,
  tertiary: css`
    background: ${props => props.theme.colors.tertiary};
    color: #fff;
    &:hover {
      background: ${props => props.theme.colors.tertiary}99;
    }
  `,
  info: css`
    background: ${props => props.theme.colors.info};
    color: #fff;
    &:hover {
      background: ${props => props.theme.colors.info}99;
    }
  `,
  warning: css`
    background: ${props => props.theme.colors.warning};
    color: #fff;
    &:hover {
      background: ${props => props.theme.colors.warning}99;
    }
  `,
  success: css`
    background: ${props => props.theme.colors.success};
    color: #fff;
    &:hover {
      background: #099d72;
    }
  `,
  error: css`
    background: ${props => props.theme.colors.danger};
    color: #fff;
    &:hover {
      background: ${props => props.theme.colors.danger}99;
    }
  `,
  outline: css`
    background: none;
    color: #fff;
    border: 1px solid #fff !important;
    &:hover {
      background: ${props => props.theme.colors.danger}99;
    }
  `,
  none: css`
    background: ${props => props.theme.colors.bgBox};
    cursor: no-drop;
    color: ${props => props.theme.colors.textColor};
    opacity: 0.5;
    //box-shadow: none;
    border: 1px solid #adafca;
    &:hover {
      opacity: 0.5;
    }
  `,
};

export const Container = styled.button<ContainerProps>`
  border: none;
  border-radius: 10px;
  padding: 1.15rem .4rem;
  font-weight: bold;
  align-items: center;
  box-shadow: 4px 7px 12px 0 rgba(97,93,250,.2);
  font-size: 1rem;
  transition: all .3s ease-in-out;
  text-transform: uppercase;

  &:disabled {
    cursor: not-allowed;


    &:hover {
      opacity: 1;
    }
  }

  > span {
    transition: all .3s ease-in-out;
  }

  &:hover {
    > span {
      //padding: 0 5px;
    }
  }

  ${props => props.block && css`
    width: 100%;
  `}

  ${props => buttonColorVariations[props.color || 'primary']}

  svg {
    margin-right: 8px;
  }
`;

export const LoadingSpinner = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;

  > div {
    display: block;
    height: 48px;
    width: 48px;
    -webkit-animation: loader-2-1 3s linear infinite;
    animation: loader-2-1 3s linear infinite;

    > span {
      display: block;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      margin: auto;
      height: 48px;
      width: 48px;
      clip: rect(16px, 48px, 48px, 0);
      -webkit-animation: loader-2-2 1.5s cubic-bezier(0.77, 0, 0.175, 1)
        infinite;
      animation: loader-2-2 1.5s cubic-bezier(0.77, 0, 0.175, 1) infinite;

      &::before {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        margin: auto;
        height: 18px;
        width: 18px;
        border: 3px solid transparent;
        border-top: 3px solid #fff;
        border-radius: 50%;
        -webkit-animation: loader-2-3 1.5s cubic-bezier(0.77, 0, 0.175, 1)
          infinite;
        animation: loader-2-3 1.5s cubic-bezier(0.77, 0, 0.175, 1) infinite;
      }

      &::after {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        margin: auto;
        height: 48px;
        width: 48px;
        border-radius: 50%;
      }
    }
  }
  @keyframes loader-2-1 {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes loader-2-2 {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes loader-2-3 {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
