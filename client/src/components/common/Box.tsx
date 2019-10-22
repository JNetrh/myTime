import {
  flexbox,
  FlexboxProps,
  layout,
  LayoutProps,
  position,
  PositionProps,
  space,
  SpaceProps,
} from 'styled-system';

import styled from '../../emotion';

export type BoxProps = FlexboxProps & LayoutProps & PositionProps & SpaceProps;

const Box = styled.div<BoxProps>(flexbox, layout, position, space);

export default Box;
