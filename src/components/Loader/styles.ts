import styled from 'styled-components';

interface ContainerProps {
  isFixed?: boolean;
  borderRadius?: string;
  zIndex?: number;
}

export const Container = styled.div<ContainerProps>`
  position: ${props => (props.isFixed ? 'fixed' : 'absolute')};
  z-index: 9999999;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  border-radius: ${props => props.borderRadius || '8px'};
  background: ${props => props.theme.colors.bgBox};
  z-index: ${props => props.zIndex || props.zIndex};

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
        height: 48px;
        width: 48px;
        border: 3px solid transparent;
        border-top: 3px solid ${props => props.theme.colors.primary};
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
