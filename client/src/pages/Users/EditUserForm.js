import React, {useContext, useState} from 'react'
import axios from 'axios'
import {Form, Button} from 'react-bootstrap'
import {AuthContext} from '../../providers/AuthProvider'

const SongForm = (props) => {
  const {user, handleClose, setUser} = props

  const auth = useContext(AuthContext);
  const [userState, setUserState] = useState(
    user ? {
      name: user.name,
      email: user.email,
			user_id: auth.user.id,
    }  :
    {

  		name: '',
      email: '',
      user_id: auth.user.id,
    }
  )

  const editUser = async () => {
    try{
      axios.put(`/api/users/${auth.user.id}`, userState)
      handleClose()
      setUser(userState)
    }catch(err){
      alert(err)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    editUser()
    
  }

  const handleChange = (e) => {
    setUserState({...userState, [e.target.name]: e.target.value})
  }

	return (
		<>
    <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Control
            label="Name"
            autoFocus
            required         
            name='name'
            value={userState.name}
            placeholder={user ? user.name : 'Name'}
            onChange={handleChange}
          />
          </Form.Group>
          <Form.Group>
          <Form.Control
            label="Email"
            autoFocus
            required         
            name='email'
            value={userState.email}
            placeholder={user ? user.email : 'Email'}
            onChange={handleChange}
          /> 
          </Form.Group>
            <Button primary type='submit'>Submit</Button>
        </Form>
    </>
	)
}

export default SongForm



