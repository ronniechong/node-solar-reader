import styled from 'styled-components';
import { NavLink } from "react-router-dom";
const activeClassName = 'is-active';

export const NavMenu = styled.nav`
  width: 100%;
`;

export const Button = styled(NavLink).attrs({
  activeClassName: activeClassName,
})`
  &.${activeClassName} {
    color: yellow;
  }
`;
