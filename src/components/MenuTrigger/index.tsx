import React, {ButtonHTMLAttributes} from 'react';

import { MenuTriggerContainer } from './styles';

interface IMenuTriggerProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  notify?: boolean;
  disabledd?: boolean;
  badge?: string;
}

const MenuTrigger: React.FC<IMenuTriggerProps> = ({notify, disabledd, children, badge, ...rest}) => {
  return (
    <MenuTriggerContainer notify={notify} disabledd={disabledd} badge={badge} {...rest}>
      {children}
    </MenuTriggerContainer>
  );
}

export default MenuTrigger;
