import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  border-radius: 8px;
  cursor: pointer;
  width: 100%;
  background: ${props => props.theme.colors.bgBox};
  color: ${props => props.theme.colors.textColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  > h3 {
    font-size: 0.875rem;
    line-height: 1.125rem;
    font-weight: 600;
    margin-top: 0.5rem;
    color: ${props => props.theme.colors.textColor};
    text-align: left;
    margin-bottom: 1rem;
  }

  > h4 {
    width: 100%;
    text-align: left;
    font-size: 1.5rem;
    line-height: 2.125rem;
    font-weight: 700;
    color: rgb(255, 101, 0);
  }

  > p {
    width: 100%;
    text-align: left;
    line-height: 1;
    font-weight: 400;
    height: 1rem;
    color: rgb(127, 133, 141);
  }
`;

export const ProductCardModal = styled.div`
  position: relative;
  width: 100%;

  > h1 {
    text-align: left;
    color: #3e3f5e;
  }

  > div {
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;

    > img {

    }

    > div {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;

      > p {
        color: #3e3f5e;

        > span {
          color: green;
          font-weight: bold;
        }
      }

      > h2 {
        margin-top: 1rem;
        width: 100%;
        text-align: left;
        font-size: 2.5rem;
        line-height: 2.125rem;
        font-weight: 700;
        color: rgb(255,101,0);
      }

      > footer {
        margin-top: 2rem;
        display: flex;
        justify-content: flex-start;

        > button {
          width: 100%;
          background: #0060b1;
          display: flex;
          height: 48px;
          padding: 0px 1.2rem;
          border-radius: 8px;
          color: rgb(255, 255, 255);
          font-size: 0.875rem;
          font-weight: 700;
          text-align: center;
          line-height: 48px;
          cursor: pointer;
          text-decoration: none;
          transition: background-color 0.2s ease-in-out 0s, color 0.2s ease-in-out 0s, border-color 0.2s ease-in-out 0s, box-shadow 0.2s ease-in-out 0s;
          align-items: center;
          justify-content: center;
          text-transform: uppercase;

          > svg {
            margin-right: .5rem;
          }
        }
      }
    }
  }
`;
