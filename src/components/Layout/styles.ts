import styled from 'styled-components';

/*
 * Layout -----
 * AS = Aside
 * MH = MainHeader
 * CT = Content
 */

export const Grid = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: 140px auto;
  grid-template-areas:
  'MH'
  'CT';
  background: ${props => props.theme.colors.bgContent};

   /* TABLET */
   @media (max-width: 768px) {
    grid-template-columns: auto;
    grid-template-rows: 140px auto;
    grid-template-areas:
    'MH'
    'CT';

    overflow-x: hidden;
  }

  /* MOBILE */
  @media (max-width: 480px) {
    overflow-x: hidden;
  }

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 0;
    background: -webkit-gradient(linear,left top,left bottom,from(${props => props.theme.colors.primary}),to(${props => props.theme.colors.primary}50));
    box-shadow: inset 2px 2px 2px rgba(255,255,255,.25), inset -2px -2px 2px rgba(0,0,0,.25);}

  ::-webkit-scrollbar-track {
    background-color: #fff;
    background: ${props => props.theme.colors.bgBox}80;
  }
`;
