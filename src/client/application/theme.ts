import { DefaultTheme } from 'styled-components';

const enum Palette {
  'color1' = '#f6ffed',
  'color2' = '#d9f7be',
  'color3' = '#b7eb8f',
  'color4' = '#95de64',
  'color5' = '#73d13d',
  'color6' = '#52c41a',
  'color7' = '#389e0d',
  'color8' = '#237804',
  'color9' = '#135200',
  'color10' = '#092b00',
}

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
    };
  }
}

const theme: DefaultTheme = {
  colors: {
    primary: Palette.color7,
  },
};

export default theme;
