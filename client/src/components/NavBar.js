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
          <Nav.Link>
          <Nav.Item onClick={() => handleLogout(this.props.history)}>
            Logout
          </Nav.Item>
          </Nav.Link>
        </>
      )
    } 
  }

  
  
  render() {
    return (
      <div>
        <Navbar fixed="top" bg="primary" expand="lg" variant="dark">
          <Navbar.Brand href="/">MUSN</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            
            <Nav activeKey={this.props.location.pathname} className="mr-auto" >   
            {this.props.auth.user && 
            <>          
                <Nav.Link href="/songs">Songs</Nav.Link>
                <Nav.Link href="/users">Users</Nav.Link>
                <Nav.Link href="/bands">Bands</Nav.Link></>}
                <Nav.Link href="/about">About</Nav.Link>
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