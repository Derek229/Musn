import React, {useState} from 'react'
import {Card, ListGroup, ListGroupItem, Button, Modal} from 'react-bootstrap'
// import BandForm from './bandForm'

const Band = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const {band, bandId, setBands, bands} =  props

  const editFormModal = () => {
    return (
      <>
        <Button className="btn btn-info" onClick={handleShow}>
          Edit
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Edit this band</Modal.Title>
          </Modal.Header>
          <Modal.Body><bandForm handleClose={handleClose}/></Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

  const renderBand = () => {
    return(
      <>
        <Card >
          <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
          <Card.Body>
            <Card.Title><h4>{band.name}</h4></Card.Title>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>Genre:{band.genre}</ListGroupItem>
            <ListGroupItem>members:{band.members}</ListGroupItem>
          </ListGroup>
          <Card.Body>
            <Card.Link>{editFormModal()}</Card.Link>
            <Card.Link><Button className="btn btn-warning">Delete band</Button></Card.Link>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated (insert time here)</small>
          </Card.Footer>
        </Card>
      </>
    )
  }


  return (
    <>
      {renderBand()}
    </>
  )
}

export default Band