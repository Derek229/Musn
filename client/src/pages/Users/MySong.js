import React, {useState} from 'react'
import {Card, ListGroup, ListGroupItem, Button, Modal} from 'react-bootstrap'
import SongForm from './SongForm'

const MySong = (props) => {

  const {song}=props

  const [show, setShow] = useState(false);

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
        <Card className="mb-2">
          <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
          <Card.Body>
            <Card.Title><h4>{song.title}</h4></Card.Title>
            <Card.Text>
              Artist: {song.artist}
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>Genre: {song.genre}</ListGroupItem>
          </ListGroup>
          <Card.Body>
            <Card.Link>{editFormModal()}</Card.Link>
            <Card.Link><Button className="btn btn-warning">Delete Song</Button></Card.Link>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated by: {song.name}</small>
          </Card.Footer>
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
