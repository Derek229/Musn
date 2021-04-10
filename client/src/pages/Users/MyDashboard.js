import React, {useState, useEffect, useContext} from 'react'
import {Card, ListGroup, ListGroupItem, Container, Row, Col, Button, Modal} from 'react-bootstrap'
import axios from 'axios'
import {AuthContext} from '../../providers/AuthProvider'
import MySongs from './MySongs'
import FollowBands from './FollowBands'
import FavoriteSongs from './FavoriteSongs'
import SongForm from './SongForm'
import EditUser from './EditUser'

const MyDashboard = () => {

  const auth = useContext(AuthContext)

  const [user, setUser] = useState([])
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(()=>{
    getUserData()
  },[])

  //getUser's Data
  const getUserData = async () => {
    let res = await axios.get(`/api/users/${auth.user.id}`)
    setUser(res.data)
    console.log(res.data)
  }

  //Get user's associated songs through favorites
  const getSongs = async () => {

  }

  const addSongModal = () => {
    return (
      <>
        <Button className="btn btn-success" onClick={handleShow}>
          Add New Song
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add a Song</Modal.Title>
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




  const renderSelf = () => {
    return(
      <>
        <Card style={{ width: '100%' }}>
          <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
          <Card.Body>
            <Card.Title><h3>Name: {user.name}</h3></Card.Title>
            <Card.Text>
              Username here (we need to add to seeds)
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>Email: {user.email}</ListGroupItem>
            <ListGroupItem>Date Joined: {user.created_at}</ListGroupItem>
          </ListGroup>
          <Card.Body>
            <EditUser user={user} setUser={setUser}/>
            <Card.Link>{addSongModal()}</Card.Link>
          </Card.Body>
        </Card>
      </>
    )
  }


  //modal for editing and adding songs


  return (
    <div>
      
      <Container fluid >
      <h1>My Dashboard</h1>
        <div >
          
        </div>
      <div>
        <Row>
          <Col>{renderSelf()}</Col>
        </Row>
      </div>
      </Container>
      <br />
      <Container fluid class="d-flex justify-content-center">
      <Row>
        <Col xs={{ order: 1 }}><h3>My Songs</h3></Col>
        <Col xs={{ order: 2 }}><h3>My Favorite Bands</h3></Col>
        <Col xs={{ order: 2 }}><h3>My Favorite Songs</h3></Col>
        </Row>
        <Row>
        <Col xs={{ order: 1 }}><MySongs /></Col>
        <Col xs={{ order: 2 }}><FollowBands /></Col>
        <Col xs={{ order: 2 }}><FavoriteSongs /></Col>
        </Row>
      </Container>
      
    </div>
  )
}

export default MyDashboard
