import styled from 'styled-components';

export const Container = styled.div`
  grid-area: MH;
  background: #0060b1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  position: fixed;
  width: 100%;
  height: 130px;
  z-index: 99999999;
`;

export const MainContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1320px;
`;

export const HeaderActions = styled.div`
  display: flex;
  margin: 0 2rem;
  text-align: center;

  @media screen and (max-width: 680px) {
    margin: 0 1.5rem;
  }

  > a {
    text-decoration: none;

    > img {
      width: 180px;
    }
  }

`;

export const ArrowBack = styled.button`
  position: absolute;
  height: 15px;
  width: 15px;
  font-size: 14px;
  top: 1.2rem;
  right: 1.2rem;
  border: none;
  background: none;
  color: ${props => props.theme.colors.textColor};
`;

export const AsideMenuMobile = styled.div`
  background: ${props => props.theme.colors.bgBox};
  width: 300px;
  height: 100%;
  overflow-y: scroll;
  position: fixed;
  z-index: 99999999999999;
  padding: 2rem 1rem;
  transition: .5s ease-in-out;
  left: -300px;

  &.sidebar.active {
    left: 0;
  }

  &::-webkit-scrollbar {
    visibility: hidden;
    width: 4px;
    height: 4px;
  }

  &:hover::-webkit-scrollbar {
    width: 4px;
    height: 4px;
    opacity: 1;
    transition: all .3s ease-in-out;
  }
  &:hover::-webkit-scrollbar-thumb {
    background: #cccccc80;
    border-radius: 10px;
  }
  &:hover::-webkit-scrollbar-thumb:hover{

  }
  &:hover::-webkit-scrollbar-track{
    border-radius: 10px;
    box-shadow: inset 7px 10px 12px #cccccc10;
  }

  > div {
    display: flex;
    align-items: center;
    justify-content: left;
    margin-bottom: 1rem;

    > a {
      margin-left: .5rem;
      color: ${props => props.theme.colors.textColor};
      font-weight: 700;
      line-height: 1;
      text-decoration: none;

      > span {
        margin-top: 4px;
        color: #8f91ac;
        font-size: .75rem;
        font-weight: 500;
      }
    }
  }
`;

export const Backdrop = styled.div`
  position: fixed;
  cursor: pointer;
  width: 100%;
  height: 100%;
  z-index: 99999999;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(110, 97, 198, .5);
  visibility: hidden;
  opacity: 0;
  transition: all .3s ease-in-out;

  &.active {
    visibility: visible;
    opacity: 1;
    transition: all .3s ease-in-out;
  }
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > h4 {
    padding: 0 0 5px 7px;
    color: #adafca;
    font-size: .75rem;
    font-weight: 700;
    text-transform: uppercase;
    text-align: left;
    width: 100%;
  }

  > div {
    margin: .25rem 0;
    width: 100%;
    padding: 12px 1rem;
    display: flex;
    align-items: center;

    &.active {
      border-radius: 12px;
      color: ${props => props.theme.colors.white};
      background: ${props => props.theme.colors.primary};
      box-shadow: ${props => props.theme.colors.shadowBox};

      > a, span {
        color: #fff;
      }
    }

    > a {
      text-decoration: none;
      transition: all .2s ease-in-out;
      font-weight: 700;
      text-align: left;
      display: flex;
      align-items: center;
      color: ${props =>props.theme.colors.textColor};

      > span {
        padding-right: 1.5rem;
        font-size: 20px;
        color: ${props =>props.theme.colors.primary};
      }
    }
  }
`;

export const SearchContent = styled.div`
  width: 50%;
  display: flex;
  align-items: center;

  > input {
    width: 100%;
    padding: .58rem 1rem;
    border-radius: 6px;
    color: rgb(66, 70, 77);
  }

  > span {
    margin-left: -2rem;
    color: #c9c9c9;
  }
`;

