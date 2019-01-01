import React from 'react';
import { observer, inject } from 'mobx-react';
import { withRouter } from 'react-router-dom';
import { NavMenu, Button, List, ListItem } from './Nav.style';

@inject('routing')
@withRouter
@observer
class Nav extends React.Component {
  render() {
    // const { location } = this.props.routing;
    return (
      <NavMenu>
        {/* <span>Current pathname: {location.pathname}</span> */}
        <List>
          <ListItem><Button activeClassName="is-active" to="/monitor">Monitor</Button></ListItem>
          <ListItem><Button activeClassName="is-active" to="/graph">Graph</Button></ListItem>
        </List>
      </NavMenu>
    );
  }
};

export default Nav;
