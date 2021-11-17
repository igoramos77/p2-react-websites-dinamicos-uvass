import styled from 'styled-components';

export const Container = styled.div`
display: flex;

  > section {

    display: -webkit-inline-box;
    justify-content: center;
    align-items: center;
    width: auto;
    margin: 32px auto 0;
    border-radius: 12px;
    background: ${props => props.theme.colors.bgBox};
    box-shadow: 0 0 40px 0 rgba(94,92,154,.06);
    position: relative;
    padding: 7px 0;

    > div {
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;

      &:nth-child(1) {
        transform: rotate(180deg);

        &::before {
          content: "";
          width: 1px;
          height: 20px;
          background-color: #adafca70;
          position: absolute;
          top: calc(50% - 10px);
          left: 0;
        }
      }

      &:last-child {
        &::before {
          content: "";
          width: 1px;
          height: 20px;
          background-color: #adafca70;
          position: absolute;
          top: calc(50% - 9px);
          left: 0;
        }
      }

      > button {
        display: flex;
        text-decoration: none;
        color: ${props => props.theme.colors.textColor};
        background: transparent;
        padding: 23px 15px;
        border-radius: 12px;
        font-size: .875rem;
        font-weight: 700;
        line-height: 0;
        transition: all .25s ease-in-out;
        margin: 0 .5rem;

        > span {
          line-height: 0;
        }

        &[disabled] {
          color: #adafca70;
          cursor: default;
        }
      }
    }

    > ul {

      > li {
        display: inline-flex;
        position: relative;
        padding: 0 .5rem;

        &:not(:first-child):before {
          content: "";
          width: 1px;
          height: 20px;
          background: #adafca70;
          position: absolute;
          top: calc(50% - 10px);
          left: 0;
        }

        > button, a {
          text-decoration: none;
          color: #3e3f5e;
          background: transparent;
          color: ${props => props.theme.colors.textColor};
          padding: 23px 15px;
          border-radius: 12px;
          font-size: .875rem;
          font-weight: 700;
          line-height: 0;
          transition: all .25s ease-in-out;

          &:hover {
            background-color: ${props => props.theme.colors.bgBoxMenu};
            color: ${props => props.theme.colors.primary};
            box-shadow: ${props => props.theme.colors.shadowMenu};
          }

          &.active {
            background-color: ${props => props.theme.colors.bgBoxMenu};
            color: ${props => props.theme.colors.primary};
            box-shadow: ${props => props.theme.colors.shadowMenu};
          }
        }
      }
    }
  }

`;
