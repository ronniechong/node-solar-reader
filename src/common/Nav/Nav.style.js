import styled from 'styled-components';
import { NavLink } from "react-router-dom";
const activeClassName = 'is-active';

export const NavMenu = styled.nav`
  width: 100%;
  background-color: #272727;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  align-items: flex-end;
`;

export const Button = styled(NavLink).attrs({
  activeClassName: activeClassName,
})`
  text-decoration: none;
  color: #fff;
  padding: 1rem;
  border-top-left-radius: 0.65rem;
  border-top-right-radius: 0.65rem;
  background-color: #B4B8C5;
  font-size: 1.15rem;
  text-align: center;
  display: block;
  transition: all ease-in-out 0.3s;
  &.${activeClassName} {
    color: #009FB7;
    background-color: #EFF1F3;
  }
`;

export const List = styled.ul`
  list-style: none;
  padding: 1rem 1rem 0;
  margin: 0;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
`;

export const ListItem = styled.li`
  margin: 0 0.25rem;
`;
