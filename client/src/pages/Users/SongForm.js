import React, {useContext, useState} from 'react'
import Button from '../../components/Button'
import axios from 'axios'
import {Form} from 'react-bootstrap'
import {AuthContext} from '../../providers/AuthProvider'
import {useHistory} from 'react-router-dom'
import MySongs from './MySongs'

const SongForm = (props) => {
  const {songProp, handleClose, addSong} = props

  const history = useHistory()
  const auth = useContext(AuthContext);
  const [songState, setSongState] = useState(
    songProp ? {
      name: songProp.name,
      artist: songProp.artist,
      image: songProp.image,
      genre: songProp.genre,
      spotify_id: songProp.spotify_id,
			user_id: auth.user.id,
    }  :
    {

  		name: '',
      artist: '',
      image: '',
      genre: '',
      spotify_id: '',
      user_id: auth.user.id,
    }
  )

  const createSong = async () => {
    try{
      debugger
      let res = await axios.post(`/api/songs`, songState)
      handleClose()
      console.log(res.data)

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

    <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Control
            label="name"
            autoFocus
            required         
            name='name'
            value={songState.name}
            placeholder={songProp ? songState.name : 'Name'}
            onChange={handleChange}
          />
          </Form.Group>
          <Form.Group>
          <Form.Control
            label="artist"      
            name='artist'
            autoFocus
            required 
            value={songState.artist}
            placeholder={songProp ? songState.artist : 'Artist'}
            onChange={handleChange}
          /> 
          </Form.Group>
          <Form.Group>
          <Form.Control
            label="album"
            autoFocus
            required         
            name='album'
            value={songState.album}
            placeholder={songProp ? songState.album : 'Album'}
            onChange={handleChange}
          />
          </Form.Group>
          <Form.Group>
          <Form.Control
            label="genre"      
            name='genre'
            autoFocus
            required 
            value={songState.genre}
            placeholder={songProp ? songState.genre : 'Genre'}
            onChange={handleChange}
          /> 
          </Form.Group>
          <Form.Group>
          <Form.Control
            label="spotify_id"      
            name='spotify_id'
            autoFocus
            required 
            value={songState.spotify_id}
            placeholder={songProp ? songState.spotify_id : 'Youtube URL ID'}
            onChange={handleChange}
          /> 
          </Form.Group>
            <Button primary type='submit'>Submit</Button>
        </Form>
    </>
	)
}

export default SongForm


