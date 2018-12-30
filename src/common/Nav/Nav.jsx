import React from 'react';
import { observer, inject } from 'mobx-react';
import { NavLink } from "react-router-dom";
import { NavMenu, Button } from './Nav.style';

@inject('routing')
@observer
class Nav extends React.Component {
  render() {
    const { location } = this.props.routing;
    return (
      <NavMenu>
        <span>Current pathname: {location.pathname}</span>
        <ul>
          <li><Button activeClassName="is-active" to="/monitor">Monitor</Button></li>
          <li><Button activeClassName="is-active" to="/graph">Graph</Button></li>
        </ul>
      </NavMenu>
    );
  }
};

export default Nav;
