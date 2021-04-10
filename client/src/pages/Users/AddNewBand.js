import React, {useState} from 'react'
import BandForm from './BandForm'
import {Button, Modal} from 'react-bootstrap'

const AddNewBand = (props) => {
  const {addBand} = props

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const addBandModal = () => {
    return (
      <>
        <Button className="btn btn-success ml-3" onClick={handleShow}>
          Add New band
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add a band</Modal.Title>
          </Modal.Header>
          <Modal.Body><BandForm handleClose={handleClose} /></Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

  return (
    <div>
      {addBandModal()}
    </div>
  )
}

export default AddNewBand