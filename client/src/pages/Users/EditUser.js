import React, {useState} from 'react'
import {Button, Modal} from 'react-bootstrap'
import EditUserForm from './EditUserForm'

const EditUser = (props) => {
  const {user, setUser} = props

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


    const editUserModal = () => {
    return (
      <>
        <Button className="btn btn-info mb-1" onClick={handleShow}>
          Edit User
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Edit {user.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body><EditUserForm user={user} handleClose={handleClose} setUser={setUser}/></Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

  return(
    <div>
      {editUserModal()}
    </div>
  )
}

export default EditUser
