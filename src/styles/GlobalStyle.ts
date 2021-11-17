import { createGlobalStyle } from 'styled-components';

import mascoteImg from '../assets/mascote-crop.png';

export default createGlobalStyle `
  * {
    margin: 0;
    padding: 0;
    text-transform: none;
    box-sizing: border-box;
    outline: none;
    font-family: 'Titillium Web', sans-serif;

    ::selection {
      background-color: #fe416b;
      color: #fff;
    }
  }

  html {
    overflow-x: hidden;
  }

  html, #root {
    height: 100%;
  }

  *, input, button {
    border: 0;
    outline: none;
  }

  button {
    cursor: pointer;
  }

  body.swal2-shown > [aria-hidden="true"] {
    filter: blur(7px) !important;
  }

  .swal2-actions {
    z-index: 0;
  }

  .swal2-title {
    color: #fff;
    margin-bottom: 0 !important;
  }

  .swal2-content {
    color: #fff;
    font-size: .8rem;
    text-transform: uppercase !important;
  }

  .swal2-styled.swal2-confirm, .swal2-styled.swal2-cancel {
    width: 170px;
    border: none;
    border-radius: 7px;
    padding: .9rem 0;
    text-align: center;
    justify-content: center;
    font-weight: bold;
    align-items: center;
    box-shadow: 0 0 40px 0 rgba(94,92,154,.06);
    font-size: .75rem;
  }

  .swal2-icon {
    margin: 0 auto 1.875em;
  }

  .swal2-show {
    background: #6e61c6;
    border-radius: 12px;
  }

  .swal2-close {
    color: #fff !important;
    top: 9px;
    right: 7px;
    font-size: 27px;
    background: rgb(106 85 157 / 22%);
    border-radius: 50%;
    width: 30px;
    height: 30px;
    transition: all .4s;

    &:hover {
      background: rgb(167 146 218 / 22%);
    }

    &:focus {
      outline: 0;
      box-shadow: none !important;
    }
  }

  .swal2-styled.swal2-confirm {
    background: #03bb85;
  }

  .Toastify__toast-container {
    z-index: 99999999999 !important;
  }

  .Toastify__toast--success {
    background: #03bb85 !important;
  }
`;
