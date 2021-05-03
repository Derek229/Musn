import React from 'react';
import { AuthConsumer, } from "../providers/AuthProvider";
import {Form, Button} from 'react-bootstrap';

class Login extends React.Component {
  state = { email: '', password: '' }
  
  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password, } = this.state;
    this.props.auth.handleLogin({ email, password, }, this.props.history);
  }
  
  handleChange = (e) => {
    const { name, value, } = e.target;
    this.setState({ [name]: value, });
  }

  render() {
    const { email, password, } = this.state;
  
    return (
      <>
        <h1>Login</h1>
        <Form onSubmit={this.handleSubmit}>
        <Form.Group>
          <Form.Control
            label="Email"
            autoFocus
            required         
            name='email'
            value={email}
            placeholder='Email'
            onChange={this.handleChange}
          />
          </Form.Group>
          <Form.Group>
          <Form.Control
            label="Password"
            required
            name='password'
            value={password}
            placeholder='Password'
            type='password'
            onChange={this.handleChange}
          /> 
          </Form.Group>
            <Button primary type='submit'>Submit</Button>
        </Form>
      </>
    )
  }
}

export default class ConnectedLogin extends React.Component {
  render() {
    return (
      <AuthConsumer>
        { auth => <Login {...this.props} auth={auth} />}
      </AuthConsumer>
    )
  }
}