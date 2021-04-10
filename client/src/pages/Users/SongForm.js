import React, {useContext, useState} from 'react'
import Button from '../../components/Button'
import axios from 'axios'
import {Form} from 'react-bootstrap'
import {AuthContext} from '../../providers/AuthProvider'
import {useHistory} from 'react-router-dom'

const SongForm = (props) => {
  const {songProp, handleClose,} = props

  const history = useHistory()
  const auth = useContext(AuthContext);
  const [name, setName] = useState('')
  const [artist, setArtist] = useState('')
  const [songState, setSongState] = useState(
    songProp ? {
      name: songProp.name,
      artist: songProp.artist,
      image: songProp.image,
      genre: songProp.genre,
			user_id: auth.user.id,
    }  :
    {

  		name: '',
      artist: '',
      image: '',
      genre: '',
      user_id: auth.user.id,
    }
  )

  const createSong = async () => {
    try{
      // let res = await axios.post(`/api/users/${auth.user.id}/songs`, songState)
      handleClose()
      // addSong(res.data)

    }catch(err){
      alert(err)
    }
  }

  const editSong = async () => {
    try{
      // axios.put(`/api/users/${auth.user.id}/songs/${songProp.id}`, songState)
      handleClose()
    }catch(err){
      alert(err)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
	
    if (songProp){
      editSong()
    }else{
			createSong()
    }
    
  }

  const handleChange = (e) => {
    setSongState({...songState, [e.target.name]: e.target.value})
  }

	return (
		<>
    {/* <Form onSubmit={handleSubmit}>
      <Form.Field>
        <label>Song Name</label>
				<input 
          name="name"
          value={songState.name}
          onChange={handleChange}
          placeholder={songProp ? songState.name : 'Name'}
        />
      </Form.Field>
      <Form.Field>
        <label>Band/Artist</label>
				<input 
					name="artist"
          value={songState.artist}
					onChange={handleChange}
					placeholder={songProp ? songState.artist : 'Artist'}
				/>
      </Form.Field>
      <Button type='submit'>Submit</Button> 
    </Form> */}

    <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Control
            label="Name"
            autoFocus
            required         
            name='name'
            value={name}
            placeholder={songProp ? songState.name : 'Name'}
            onChange={handleChange}
          />
          </Form.Group>
          <Form.Group>
          <Form.Control
            label="Artist"
            autoFocus
            required         
            name='artist'
            value={artist}
            placeholder={songProp ? songState.artist : 'Artist'}
            onChange={handleChange}
          /> 
          </Form.Group>
            <Button primary type='submit'>Submit</Button>
        </Form>
    </>
	)
}

export default SongForm


