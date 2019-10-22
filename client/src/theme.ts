import React, { useContext } from 'react';

export type BreakpointType = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type Breakpoints = { [breakpoint in BreakpointType]: number };

// TEMP taken from another project
export const breakpoints: Breakpoints = {
  xs: 0,
  sm: 375,
  md: 768,
  lg: 1024,
  xl: 1440,
};

// TEMP taken from another project
type ColorPalette = {
  amazonGreen: string;
  aquamarineBlue: string;
  crimsonRed: string;
  mabelBlue: string;
  monteCarloGreen: string;
  silver: string;
  smokeWhite: string;
  spaceGray: string;
  veryLightGray: string;
  whaleBlue: string;
  white: string;
};

// TEMP taken from another project
const colorPalette: ColorPalette = {
  amazonGreen: '#317963',
  aquamarineBlue: '#76cde5',
  crimsonRed: '#ed1848',
  mabelBlue: '#bfdee5',
  monteCarloGreen: '#88ceb9',
  silver: '#c6c6c6',
  smokeWhite: '#f7f7f7',
  spaceGray: '#414042',
  veryLightGray: '#cccccc',
  whaleBlue: '#042a45',
  white: '#ffffff',
};

export type Theme = {
  breakpoints: string[];
  colorPalette: ColorPalette;
};

const theme: Theme = {
  breakpoints: Object.values(breakpoints).map(b => `${b}px`),
  colorPalette,
};

export default theme;

export const ThemeContext = React.createContext<Theme>(theme);

export const useTheme = () => useContext(ThemeContext);
