import React from 'react';
import { AuthConsumer, } from "../providers/AuthProvider";
import {Form, Button} from 'react-bootstrap';

class Register extends React.Component {
  state = { email: '', password: '', passwordConfirmation: '', };
  
  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password, passwordConfirmation } = this.state;
    const { auth: { handleRegister, }, history, } = this.props;

    if (password === passwordConfirmation)
      handleRegister({ email, password, passwordConfirmation, }, history);
    else
      alert('Passwords Do Not Match!')
  }
  
  handleChange = (e) => {
    const { name, value, } = e.target;
    this.setState({ [name]: value, });
  }
  
  render() {
    const { email, password, passwordConfirmation, } = this.state;

    return (
      <>
        <h1>Register</h1>
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
          <Form.Group>
          <Form.Control
            label="Confirm Password"
            required
            name='passwordConfirmation'
            value={passwordConfirmation}
            placeholder='Confirm Password'
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

export default class ConnectedRegister extends React.Component {
  render() {
    return (
      <AuthConsumer>
        { auth => <Register { ...this.props } auth={auth} /> }
      </AuthConsumer>
    )
  }
}