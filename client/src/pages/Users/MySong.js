import React, {useContext, useState} from 'react'
import {Card, ListGroup, ListGroupItem, Button, Modal} from 'react-bootstrap'
import AddToFavorites from '../../components/AddToFavorites'
import Thumbnail from '../../components/Thumbnail'
import UnfavoriteSong from '../../components/UnfavoriteSong'
import { AuthContext } from '../../providers/AuthProvider'
import SongForm from './SongForm'

const MySong = (props) => {

  const {songId, key, title, album, artist, genre, spotify_id, userId, favoriteId} = props

  const [show, setShow] = useState(false);

  const auth = useContext(AuthContext)

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const editFormModal = () => {
    
    return (
      <>
        <Button className="btn btn-info" onClick={handleShow}>
          Edit
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Edit this Song</Modal.Title>
          </Modal.Header>
          <Modal.Body><SongForm handleClose={handleClose}/></Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

  const renderSong = () => {
    return(
      <>
        <Card >
          <Thumbnail url={spotify_id} />
          <Card.Body>
            <Card.Title><h4>{title}</h4></Card.Title>
            <Card.Text>
              By: {artist}
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>Album: {album}</ListGroupItem>
            <ListGroupItem>{genre}</ListGroupItem>
          </ListGroup>
          {auth.user.id != userId ? <AddToFavorites songId={songId}/> : <UnfavoriteSong favorite_id={favoriteId}/> }
          <Card.Body>
            <Card.Link>{editFormModal()}</Card.Link>
            <Card.Link><Button className="btn btn-warning">Delete Song</Button></Card.Link>
          </Card.Body>
        </Card>
      </>
    )
  }


  return (
    <>
      {renderSong()}
    </>
  )
}

export default MySong
