import React from 'react';
import {
  Menu, 
  Container
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const Header = () => (
  <Menu fixed='top' size='large'>
    <Container>
      <Menu.Menu position='left'>
        <Link to="/">
          <Menu.Item as='a'>Mark Tong</Menu.Item>
        </Link>
      </Menu.Menu>
      <Menu.Menu position='right'>
        <Menu.Item as='a' active>About</Menu.Item>
        <Menu.Item as='a'>Contact</Menu.Item>
        <Menu.Item as='a'>Blog</Menu.Item>
      </Menu.Menu>
    </Container>
  </Menu>
)

export default Header;