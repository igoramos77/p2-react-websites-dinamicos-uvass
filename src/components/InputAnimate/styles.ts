import styled from 'styled-components';

interface IInputAnimateProps {
  padding?: string;
  margin?: string;
  onlyWhite?: boolean | false;
}

export const Container = styled.div<IInputAnimateProps>`
  position: relative;
  line-height: 14px;
  display: inline-block;
  margin-top: 1.5rem;
  width: 100%;
  padding: ${props => props.padding ? props.padding : null};
  margin: ${props => props.margin ? props.margin : null};

  > span {
    position: absolute;
    padding: 0 .5rem;
    right: .5rem;
    margin: 20px 0;
    color: #adafca;
    font-size: 18px;
  }
`;

export const Input = styled.input<IInputAnimateProps>`
  width: 100%;
  padding: 1rem 1.5rem;
  border-radius: 12px;
  border: 1px solid ${props => props.theme.colors.gray}30;
  color: ${props => props.onlyWhite ? '#3e3f5e' : props.theme.colors.textColor};
  background: ${props => props.onlyWhite ? '#ffffff' : props.theme.colors.bgBox};
  font-size: 1rem;
  font-weight: 700;
  transition: .3s ease-in-out;

  &:focus {
    border-color: #615dfa;
  }

  &:valid + label {
    font-size: .8rem;
    transform: translateY(-1.7rem);
  }

  &:invalid + label {
    transform: translateY(0);
  }

  &:focus + label {
    font-size: .8rem;
    transform:translateY(-1.7rem);
  }
`;

export const Label = styled.label<IInputAnimateProps>`
  color: #adafca;
  font-size: 1rem;
  font-weight: 600;
  position: absolute;
  top: 20px;
  left: 1rem;
  padding: 0 5px;
  pointer-events: none;
  background: ${props => props.onlyWhite ? '#fff' : props.theme.colors.bgBox};
  transition: .3s ease;
  transform: translateY(0);
`;
