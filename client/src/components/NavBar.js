import React from 'react'
import { AuthConsumer, } from "../providers/AuthProvider";
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { withRouter } from 'react-router-dom'

class Navbar1 extends React.Component {
  
  rightNavItems = () => {
    const { auth: { user, handleLogout, }, location, } = this.props;
    
    if (user) {
      return (
        <>
          <Nav.Link href="/dashboard">
            {user.name}
          </Nav.Link>
          <Nav.Link>
          <Nav.Item onClick={() => handleLogout(this.props.history)}>
            Logout
          </Nav.Item>
          </Nav.Link>
        </>
      )
    } else {
      return (
        <>
        <Nav.Link href="/login">
          Login
        </Nav.Link>
        <Nav.Link href="/register">
          Register
        </Nav.Link>
        </>
      )
    }
  }

  
  
  render() {
    return (
      <div>
        <Navbar bg="primary" expand="lg" variant="dark">
          <Navbar.Brand href="/">MUSN</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav activeKey={this.props.location.pathname} className="mr-auto" >
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <NavDropdown title="Access" id="basic-nav-dropdown">
                <NavDropdown.Item href="/users">Users</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/songs">Songs</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/bands">Bands</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          <Nav activeKey={this.props.location.pathname} className="justify-content-end" style={{ width: "100%" }}>
            {this.rightNavItems()}
          </Nav>
          </Navbar.Collapse>
          </Navbar>
      </div>
    )
  }
}

    

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