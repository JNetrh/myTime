import styled, { CreateStyled } from '@emotion/styled';

import { Theme, breakpoints, BreakpointType } from './theme';
import { exhaustiveCheck } from './utils';

export default styled as CreateStyled<Theme>;

export function mediaBreakpointUp(breakpoint: BreakpointType) {
  return `@media (min-width: ${breakpoints[breakpoint]}px)`;
}

export function mediaBreakpointDown(breakpoint: BreakpointType) {
  return `@media (max-width: ${breakpoints[breakpoint] - 0.02}px)`;
}

export function mediaBreakpointBetween(min: BreakpointType, max: BreakpointType) {
  return `@media (min-width: ${breakpoints[min]}px) and (max-width: ${breakpoints[max] - 0.02}px)`;
}

export function mediaBreakpointOnly(breakpoint: BreakpointType) {
  switch (breakpoint) {
    case 'xs':
      return mediaBreakpointDown('sm');

    case 'sm':
      return mediaBreakpointBetween('sm', 'md');

    case 'md':
      return mediaBreakpointBetween('md', 'lg');

    case 'lg':
      return mediaBreakpointBetween('lg', 'xl');

    case 'xl':
      return mediaBreakpointUp('xl');

    default:
      exhaustiveCheck(breakpoint);
      throw new Error('Invalid breakpoint');
  }
}
