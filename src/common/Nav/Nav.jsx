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
    // if (location.pathname === '/') {
    //   return null;
    // }
    return (
      <NavMenu>
        <List>
          <ListItem>
            <Button activeClassName="is-active" exact to="/">Home</Button>
          </ListItem>
          <ListItem>
            <Button activeClassName="is-active" exact to="/monitor">Monitor</Button>
          </ListItem>
          <ListItem>
            <Button activeClassName="is-active" exact to="/graph">Graph</Button>
          </ListItem>
        </List>
      </NavMenu>
    );
  }
};

export default Nav;
