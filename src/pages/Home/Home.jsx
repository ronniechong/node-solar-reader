import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { observer } from 'mobx-react';
import { List, ListItem } from './Home.style';

@withRouter
@observer
class Home extends React.Component {
  render() {
    const links = [
      {
        id: 'monitor',
        path: '/monitor',
        title: 'Monitor',
      },
      {
        id: 'graph',
        path: '/graph',
        title: 'Graph',
      },
    ];

    const renderLinks = () =>
      links.map((v) => (
        <ListItem key={`${v.id}`}>
          <NavLink activeClassName="is-active" exact to={v.path}>
            {v.title}
          </NavLink>
        </ListItem>
      ));
    return <List>{renderLinks()}</List>;
  }
}

export default Home;
