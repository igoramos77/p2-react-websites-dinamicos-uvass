import styled from 'styled-components';

interface ILottieAnimationProps {
  margin?: string;
  scale?: string;
}

export const Container = styled.div<ILottieAnimationProps>`
  margin: ${props => props.scale ? props.scale : 'unset'};
  transform: ${props => props.scale ? props.scale : 'unset'};
`;
