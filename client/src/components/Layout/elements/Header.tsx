import styled, { mediaBreakpointUp } from '../../../emotion';

const Header = styled.h1(props => ({
  textAlign: 'center',
  fontSize: '2rem',
  color: props.theme.colorPalette.amazonGreen,

  [mediaBreakpointUp('md')]: {
    fontSize: '3rem',
  },
}));

export default Header;
