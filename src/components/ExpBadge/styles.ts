import styled from 'styled-components';

interface IExpBadgeProps {
  top?: string | number;
  right?: string | number;
  background?: string;
  border?: string;
  padding?: string | number;
  position?: 'relative' | 'absolute' | 'unset';
}

export const Container = styled.div<IExpBadgeProps>`
  display: flex;
  border-radius: 200px;
  border: 1px solid #6e61c6;
  font-size: .75rem;
  font-weight: 700;
  line-height: 32px;
  min-width: 87px;
  text-align: center;
  justify-content: center;
  background: ${props => props.background ? props.background : props.theme.colors.bgBox};
  border: ${props => props.border ? props.border : 'none'};
  padding: ${props => props.padding ? props.padding : '0 10px' };
  position: ${props => props.position ? props.position : 'absolute' };
  top: ${props => props.top ? props.top : '-12px'};
  right: ${props => props.right ? props.right : '10px'};

  > div {
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;

    > p {
      color: ${props => props.theme.colors.textColor};
      font-weight: bold;
    }

    > span {
      font-weight: bold;
      margin-right: 4px;
    }
  }




`;
