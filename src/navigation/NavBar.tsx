import * as React from 'react';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
} from 'reactstrap';

/**
 * It is important to surround each nav item with Link if you want to use React Router
 */

class InitialState {
  public isOpen = false;
}
export default class NavBar extends React.Component<{}, InitialState> {
  public state = new InitialState();

  public ontoggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  public render() {
    return (
      <div>
        <Navbar color="dark" light={true} expand="md">
          <Link to="/" style={styles.navbar}> 
            <NavbarBrand>Jamm.</NavbarBrand>
          </Link>
        </Navbar>
      </div>
    );
  }
}

const styles = {
  navbar: {
    color: "#ffffff"
  }
}