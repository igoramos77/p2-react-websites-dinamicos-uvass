import React, { createContext, useContext } from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

interface ICreateModalProps {
  html: string | HTMLElement | JSX.Element;
  background: string;
  backdrop: string;
  showCancelButton: boolean;
  showConfirmButton: boolean;
  showCloseButton: boolean;
}

interface IModalContext {
  createModal(props: ICreateModalProps): void;
}

const ModalContext = createContext<IModalContext>({} as IModalContext);

const ModalProvider: React.FC = ({ children }) => {
  const MySwal = withReactContent(Swal);

  const createModal = ({
    html,
    background,
    backdrop,
    showCancelButton,
    showConfirmButton,
    showCloseButton,
  }: ICreateModalProps) => {
    MySwal.fire({
      html,
      background,
      backdrop,
      showCancelButton,
      showConfirmButton,
      showCloseButton,
      target: '#root',
    });
  };
  return (
    <ModalContext.Provider value={{ createModal }} >
      {children}
    </ModalContext.Provider>
  )
}

function useModal(): IModalContext {
  const context = useContext(ModalContext);

  return context;
}


export { ModalProvider, useModal };
