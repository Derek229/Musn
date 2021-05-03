import React from 'react';
import styled from "styled-components"
import { AuthConsumer, } from "../providers/AuthProvider";
import {Nav, Button} from 'react-bootstrap'
import { withRouter } from 'react-router-dom'
import UserCard from './UserCard'

/* This defines the actual bar going down the screen */
const StyledSideNav = styled.div`
  position: fixed; 
  height: 100%;
  width: 200px;  
  top: 70px;
  background-color: rgb(48,48,48);
  overflow-x: hidden; s
  padding-top: 10px;
  margin: 0 100px 0 0px;
`;

class SideNav extends React.Component {

    userCard = () => {
        const { auth: { user, handleLogout, }, location, } = this.props;
        if (user){
            return(
                <div>
                <UserCard auth={this.props.auth} />

                </div>
            )
        }else {
        return (
          <>
          <Button href="/login" variant="primary" className="btn btn-info" style={{margin: '30px 0 0 20px'}}>
                    Login
                </Button>
                <Button href="/register" variant="primary" className="btn btn-info" style={{margin: '30px 0 0 20px'}}>
                    Register
                </Button>
          </>
        )
        }
    }

    render() {
        return (
            <StyledSideNav>
                <Nav className="ml-auto" >
                {this.userCard()}
                </Nav>
            </StyledSideNav>
        );
      }
}

class Sidebar extends React.Component {

  render() {
    return (
        <SideNav auth={this.props.auth}></SideNav>
    );
  }
}

export class ConnectedSidebar extends React.Component {
    render() {
      return (
        <AuthConsumer> 
          { auth => 
            <Sidebar { ...this.props } auth={auth}/>
          }
        </AuthConsumer>
      )
    }
  }
  
  export default withRouter(ConnectedSidebar);