import React, { createContext, useState, useContext } from 'react';

import { ThemeProvider as StyledProvider } from 'styled-components';

import dark from '../styles/themes/dark';
import light from '../styles/themes/light';

interface IThemeContext {
  toggleTheme(): void;
  theme: ITheme;
}

interface ITheme {
  title: string;

  colors: {
    primary: string;
    secondary: string;
    tertiary: string;

    white: string;
    black: string;
    gray: string;

    danger: string;
    success: string;
    info: string;
    warning: string;

    textColor: string;
    secundaryTextColor: string;

    bgContent: string;
    bgBox: string;
    shadowBox: string;

    bgBoxMenu: string;
    shadowMenu: string;

    shadowAlternative: string;
  }
}

const ThemeContext = createContext<IThemeContext>({} as IThemeContext);

const ThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState<ITheme>(() => {
    const themeSave = localStorage.getItem('@poxalulu:theme');

    if(themeSave) {
      return JSON.parse(themeSave);
    }
    else {
      return dark;
    }
  });

  const toggleTheme = () => {
    //console.log('theme ==============', theme)
    if(theme.title === 'dark') {
      setTheme(light);
      localStorage.setItem('@poxalulu:theme', JSON.stringify(light));
    }
    else {
      setTheme(dark);
      localStorage.setItem('@poxalulu:theme', JSON.stringify(dark));
    }
  };
  return (
    <ThemeContext.Provider value={{ toggleTheme, theme }} >
      <StyledProvider theme={theme}>
        {children}
      </StyledProvider>
    </ThemeContext.Provider>
  )
}

function useTheme(): IThemeContext {
  const context = useContext(ThemeContext);

  return context;
}


export { ThemeProvider, useTheme };



