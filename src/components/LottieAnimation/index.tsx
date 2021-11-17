import React from 'react';
import Lottie, {LottieProps} from 'react-lottie';

import { Container } from './styles';

interface ILottieAnimationProps extends LottieProps {
  margin?: string;
  scale?: string;
}

const LottieAnimation: React.FC<ILottieAnimationProps> = ({
  margin, scale, ...rest
}) => {
  return (
    <Container margin={margin} scale={scale}>
      <Lottie {...rest} />
    </Container>
  );
}

export default LottieAnimation;
