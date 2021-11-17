import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { useTheme } from '../../hooks/theme';

import api from '../../services/api';

import MenuTrigger from '../MenuTrigger';
import Toggle from '../Toggle';
import Input from '../Input';

import menuLinks from '../../utils/menuLinks';

import logo from '../../assets/logo.svg';

import {
  Container,
  HeaderActions,
  ArrowBack,
  AsideMenuMobile,
  Menu,
  Backdrop,
  MainContent,
  SearchContent
} from './styles';
import Icon from '../Icon';

export interface IStatsBoxSmallProps {
  id: string;
  status: 'canceled' | 'pending' | 'in_correction' | 'in_confirmation' | 'corrected';
  created_at: string;
  is_photo: boolean;
  corrections: {
    final_grade?: number;
  }[]
  theme: {
    name: string;
    thumbnail_url: string;
  }
  status_info: {
    name: string;
  }
}

const MainHeader: React.FC = () => {
  const location = useLocation();
  const localtionSplited = location.pathname.split('/')[1];

  // SideBar Menu Open
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  const { toggleTheme } = useTheme();


  const handleChangeTheme = () => {
    toggleTheme();
  }

  return (
    <>
      <Container>
        <MainContent>

          <HeaderActions>
            <MenuTrigger disabledd={true} onClick={showSidebar}>
              <span className="icon-icon-grid"></span>
            </MenuTrigger>
            <Link to="/">
              <img src={logo} alt="Kabom - Explosão de Preços Baixos!" />
            </Link>
          </HeaderActions>

          <SearchContent>
            <Input placeholder="Busque aqui" />
            <Icon size="16px" icon="icon-icon-magnifying-glass"  />
          </SearchContent>

          <div>
            <Toggle labelLeft="light" labelRight="dark" onChange={handleChangeTheme} checked={false} />
          </div>

        </MainContent>


      </Container>

      <AsideMenuMobile className={sidebar ? 'sidebar active' : 'sidebar'}>
        <ArrowBack onClick={showSidebar}>
          <span className="icon-icon-back-arrow"></span>
        </ArrowBack>
        <div>
          <Link to="/perfil" onClick={showSidebar}>Olá, Igor! <br /> <span>Mensgem de boas vindas!</span></Link>
        </div>
        <Menu>
          <h4>Menu</h4>
          {menuLinks.map((item, index) => (
            <div key={index} className={localtionSplited === item.location || (localtionSplited === '' && index === 0)  ? 'active' : ''}>
              <Link data-tooltip={item.tooltip} to={'/' + item.location} onClick={showSidebar} >
                <span className={item.icon}></span>
                {item.tooltip}
              </Link>
            </div>
          ))}
        </Menu>
      </AsideMenuMobile>
      <Backdrop className={sidebar ? 'active' : 'no-active'} onClick={showSidebar} />
    </>
  );
}

export default MainHeader;
