import React from 'react'
import { AuthConsumer, } from "../providers/AuthProvider";
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { Link, withRouter, } from 'react-router-dom'

class Navbar1 extends React.Component {
  
  // rightNavItems = () => {
  //   const { auth: { user, handleLogout, }, location, } = this.props;
    
  //   if (user) {
  //     return (
  //       <Menu.Menu position='right'>
  //         <Menu.Item
  //           name='logout'
  //           onClick={ () => handleLogout(this.props.history) }
  //         />
  //       </Menu.Menu>
  //     )
  //   } else {
  //     return (
  //       <Menu.Menu position='right'>
  //         <Link to='/login'>
  //           <Menu.Item
  //             id='login'
  //             name='login'
  //             active={location.pathname === '/login'}
  //           />
  //         </Link>
  //         <Link to='/register'>
  //           <Menu.Item
  //             id='register'
  //             name='register'
  //             active={location.pathname === '/register'}
  //           />
  //         </Link>
  //       </Menu.Menu>
  //     )
  //   }
  // }

  
  
  render() {
    return (
      <div>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">Musn</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">About</Nav.Link>
              <NavDropdown title="Access" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Users</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.2">Songs</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.3">Bands</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
          <Nav className="justify-content-end" style={{ width: "100%" }}>
            <Nav.Link href="#">
              Signed in as: User name here
            </Nav.Link>
            <Nav.Link href="">
              Logout
            </Nav.Link>
          </Nav>
          </Navbar>
      </div>
    )
  }
}

// export class ConnectedNavbar extends React.Component {
//   render() {
//     return (
//       <AuthConsumer> 
//         { auth => 
//           <Navbar { ...this.props } auth={auth} />
//         }
//       </AuthConsumer>
//     )
//   }
// }

    

export class ConnectedNavbar extends React.Component {
  render() {
    return (
      <AuthConsumer> 
        { auth => 
          <Navbar1 { ...this.props } auth={auth} />
        }
      </AuthConsumer>
    )
  }
}

export default withRouter(ConnectedNavbar);