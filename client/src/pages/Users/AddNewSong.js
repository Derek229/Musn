import React, {useState} from 'react'
import SongForm from './SongForm'
import {Button, Modal} from 'react-bootstrap'

const AddNewSong = (props) => {
  const {addSong} = props

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const addSongModal = () => {
    return (
      <>
        <Button className="btn btn-success ml-3" onClick={handleShow}>
          Add New Song
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add a Song</Modal.Title>
          </Modal.Header>
          <Modal.Body><SongForm handleClose={handleClose} addSong={addSong}/></Modal.Body>
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
      {addSongModal()}
    </div>
  )
}

export default AddNewSong
