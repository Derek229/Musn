import React, {useState, useEffect, useContext} from 'react'
import {Card, ListGroup, ListGroupItem, Button} from 'react-bootstrap'
import axios from 'axios'

const MySongs = () => {
  const [mySongs, setMySongs] = useState([])

  // useEffect(()=>{
  //   getMySongs()
  // },[])

  const getMySongs = async () => {
    //update w/ path for user's specific songs
    // let res = await axios.get(`/api/users/${auth.user.id}`)
    // setMySongs(res.data)
    // console.log(res.data)
  }
  
  const renderSongs = () => {
    //map through songs array
    return(
      <>
        <Card >
          <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
          <Card.Body>
            <Card.Title><h4>Song Title</h4></Card.Title>
            <Card.Text>
              Artist
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>Album</ListGroupItem>
            <ListGroupItem>Genre</ListGroupItem>
          </ListGroup>
          <Card.Body>
            <Card.Link href=""><Button className="btn btn-info">Edit Song</Button></Card.Link>
            <Card.Link href=""><Button className="btn btn-warning">Delete Song</Button></Card.Link>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated (insert time here)</small>
          </Card.Footer>
        </Card>
      </>
    )
  }

  return(
    <>
    {renderSongs()}
    </>
  )
}

export default MySongs
