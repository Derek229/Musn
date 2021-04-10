import React, {useContext, useState} from 'react'
import Button from '../../components/Button'
import axios from 'axios'
import {Form} from 'react-bootstrap'
import {AuthContext} from '../../providers/AuthProvider'
import {useHistory} from 'react-router-dom'


const BandForm = (props) => {
  const {bandProp, handleClose, addBand} = props

  const history = useHistory()
  const auth = useContext(AuthContext);
  const [bandState, setBandState] = useState(
    bandProp ? {
      name: bandProp.name,
      image: bandProp.image,
      genre: bandProp.genre,
      members: bandProp.members,
			user_id: auth.user.id,
    }  :
    {

  		name: '',
      image: '',
      genre: '',
     members:'',
      user_id: auth.user.id,
    }
  )

  const createBand = async () => {
    try{
      let res = await axios.post(`/api/bands`, bandState)
      handleClose()
      console.log(res.data)

    }catch(err){
      alert(err)
    }
  }

  const editBand = async () => {
    try{
      let res = await axios.put(`/api/bands/${bandProp.id}`, bandState)
      handleClose()
    }catch(err){
      alert(err)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
	
    if (bandProp){
      editBand()
    }else{
			createBand()
    }
    
  }

  const handleChange = (e) => {
    setBandState({...bandState, [e.target.name]: e.target.value})
  }

	return (
		<>

    <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Control
            label="name"
            autoFocus
            required         
            name='name'
            value={bandState.name}
            placeholder={bandProp ? bandState.name : 'Name'}
            onChange={handleChange}
          />
          </Form.Group>
          <Form.Group>
          <Form.Control
            label="genre"      
            name='genre'
            autoFocus
            required 
            value={bandState.artist}
            placeholder={bandProp ? bandState.genre : 'genre'}
            onChange={handleChange}
          /> 
          </Form.Group>
          <Form.Group>
          <Form.Control
            label="members"
            autoFocus
            required         
            name='members'
            value={bandState.album}
            placeholder={bandProp ? bandState.members : 'member'}
            onChange={handleChange}
          />
          </Form.Group>
            <Button primary type='submit'>Submit</Button>
        </Form>
    </>
	)
}

export default BandForm
