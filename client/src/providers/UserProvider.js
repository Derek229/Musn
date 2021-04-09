import React, {useContext} from 'react';
import {AuthContext} from './AuthProvider'


// Set Up The Initial Context
export const UserContext = React.createContext();

// Create an exportable consumer that can be injected into components
export const UserConsumer = UserContext.Consumer;

// Create the provider using a traditional React.Component class
class UserProvider extends React.Component {

  userIn = useContext(AuthContext)

  state = {
    username: this.userIn.username,
    firstName: this.userIn.firstName,
    lastName: this.userIn.lastName,
    email: this.userIn.email,
    image: this.userIn.image,
    dateJoined: this.userIn.dateJoined,
    updateAccount: (user) => this.updateAccount(user)
  };

  updateUser = (user) => {
    this.setState({...user});
  };
    
  render() {
    return (
      <UserContext.Provider value={this.state}>
        { this.props.children }
      </UserContext.Provider>
    )
  };
};

export default UserProvider;