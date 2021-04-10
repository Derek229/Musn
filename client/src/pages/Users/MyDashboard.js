import React, {useState, useEffect} from 'react'
import {Card} from 'react-bootstrap'

const MyDashboard = () => {

  const [mySongs, setMySongs] = useState([])

  //Get user's associated songs through favorites

  //render each song as a card(?)
  const renderSongs = () => {
    //map through songs array
    return(
      <>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
          <Card.Body>
            <Card.Title>Song Title</Card.Title>
            <Card.Text>
              Artist
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>Album</ListGroupItem>
            <ListGroupItem>Genre</ListGroupItem>
          </ListGroup>
          <Card.Body>
            <Card.Link href="#">Edit Link</Card.Link>
            <Card.Link href="#">Delete Link</Card.Link>
          </Card.Body>
        </Card>
      </>
    )
  }

  //modal for editing and adding songs


  return (
    <div>
      <h1>user dash here</h1>
      {renderSongs()}
    </div>
  )
}

export default MyDashboard
