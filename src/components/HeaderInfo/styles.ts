import styled from 'styled-components';

interface IHeaderInfoProps {
  margin?: string;
  showSendButton?: boolean;
  badge?: string;
}

export const Container = styled.div<IHeaderInfoProps>`
  margin: ${props => props.margin};
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  > div {

    > a {
      background: #6e61c6;
      display: ${props => props.showSendButton ? 'flex' : 'none'};
      height: 48px;
      padding: 0 1.2rem;
      border-radius: 8px;
      color: #ffffff;
      font-size: .875rem;
      font-weight: 700;
      text-align: center;
      line-height: 48px;
      cursor: pointer;
      text-decoration: none;
      transition: background-color .2s ease-in-out,color .2s ease-in-out,border-color .2s ease-in-out,box-shadow .2s ease-in-out;
      align-items: center;
      justify-content: center;

      &:hover {
        background: #5753e4;
      }

      /* SMALL MOBILE */
      @media (max-width: 360px) {
        display: none;
      }
   }
  }
`;

export const SupTitle = styled.p`
  color: #8f91ac;
  font-size: .75rem;
  font-weight: 600;
  text-transform: uppercase;
`;

export const Title = styled.h2<IHeaderInfoProps>`
  text-transform: capitalize;
  font-size: 1.625rem;
  font-weight: 700;
  line-height: 1;
  color: ${props => props.theme.colors.textColor};

  > span {
    margin-right: .4rem;
    padding: 1px 9px;
    border-radius: 200px;
    background-color: #23d2e2;
    color: #fff;
    font-size: .75rem;
    font-weight: 700;
    line-height: 1em;
    text-transform: uppercase;
    vertical-align: middle;
  }
`;
