import { DefaultTheme } from 'styled-components';

const enum Palette {
  'green1' = '#f6ffed',
  'green2' = '#d9f7be',
  'green3' = '#b7eb8f',
  'green4' = '#95de64',
  'green5' = '#73d13d',
  'green6' = '#52c41a',
  'green7' = '#389e0d',
  'green8' = '#237804',
  'green9' = '#135200',
  'green10' = '#092b00',
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
    primary: Palette.green7,
  },
};

export default theme;
