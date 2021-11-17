import 'styled-components';
declare module 'style-components' {
  export interface DefaultTheme {
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
        bgAnimation: string;
        shadowBox: string;

        bgBoxMenu: string;
        shadowMenu: string;

        shadowAlternative: string;

        timelineColor: string;

        textAreaWizColor: string;
      },
  };
}
