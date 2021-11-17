import React from 'react';
import GlobalStyle from './styles/GlobalStyle';
import './styles/poxalulu-icons.css';
import { ToastContainer } from 'react-toastify';

import { ModalProvider } from './hooks/modal';
import { AuthProvider } from './hooks/auth';

import Routes from './routes';

const App: React.FC = () => {

  return(
    <AuthProvider>
      <ToastContainer />
      <ModalProvider>
        <GlobalStyle />
        <Routes />
      </ModalProvider>
    </AuthProvider>
  );
}

export default App;
