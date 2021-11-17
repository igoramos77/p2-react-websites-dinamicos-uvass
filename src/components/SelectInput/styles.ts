import styled from 'styled-components';

interface ISelectInputProps {
  borderColor?: string;
  showLabel?: boolean;
  showPlaceholder?: boolean;
}

export const Container = styled.div<ISelectInputProps>`
  position: relative;

  > select {
    position: relative;
    min-width: 6.5rem;
    padding: 7px 10px;
    border-radius: 5px;
    margin-left: 7px;
    border: 1px solid ${props => props.theme.colors.gray}30;
    color: ${props => props.theme.colors.textColor};
    background: ${props => props.theme.colors.bgBox};
    -webkit-appearance: none;
    -moz-appearance: none;
    text-indent: 1px;
    text-overflow: '';

    &::-ms-expand {
      display: none;
    }

    &:focus {
      border-color: #615dfa;
    }

    > option {
      color: ${props => props.theme.colors.textColor};
      font-weight: 600;

      &:nth-child(1) {
        display: ${props => props.showPlaceholder ? 'block' : 'none'};
      }
    }
  }

  > span {
      position: absolute;
      right: 12px;
      top: calc(50% - 3px);
      font-size: 10px;
      stroke-width: 2px;
      stroke: #9098a9;
      fill: none;
      stroke-linecap: round;
      stroke-linejoin: round;
      pointer-events: none;
      user-select: none;
      transform: rotate(90deg);
    }

`;

export const Label = styled.div<ISelectInputProps>`
  color: #adafca;
  font-size: .8rem;
  font-weight: 600;
  position: absolute;
  top: -11px;
  left: 1.2rem;
  padding: 0 2px;
  pointer-events: none;
  background: ${props => props.theme.colors.bgBox};
  transition: .3s ease;
  transform: translateY(0);
  display: ${props=> props.showLabel ? 'block' : 'none'};
`;
