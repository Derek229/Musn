import React, {useState, useEffect, useContext} from 'react'
import {Card, ListGroup, ListGroupItem, Button} from 'react-bootstrap'
import axios from 'axios'

const FavoriteSongs = () => {
  const [myFavoriteSongs, setMyFavoriteSongs] = useState([])

  // useEffect(()=>{
  //   getMyFavorites()
  // },[])

  const getMyFavorites = async () => {
    //update w/ path for user's favorite songs
    // let res = await axios.get(`/api/users/${auth.user.id}`)
    // setMyFavoriteSongs(res.data)
    // console.log(res.data)
  }

  //render user's favorited songs
  const renderFavoriteSongs = () => {
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
            <ListGroupItem>Uploaded By: </ListGroupItem>
          </ListGroup>
          <Card.Body>
            <Card.Link href="#"><Button className="btn btn-info">Open Song</Button></Card.Link>
            <Card.Link href="#"><Button className="btn btn-success">Visit User</Button></Card.Link>
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
      {renderFavoriteSongs()}
    </>
  )
}

export default FavoriteSongs
