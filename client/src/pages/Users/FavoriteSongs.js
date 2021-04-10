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
        <Card className="mb-2">
          <Card.Body>
            <Card.Title><h4>Here we would</h4></Card.Title>
            <Card.Text>
              render 
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>random songs</ListGroupItem>
            <ListGroupItem>for you!</ListGroupItem>
            <ListGroupItem>Uploaded By: Sons of Pitches Dev Team</ListGroupItem>
          </ListGroup>
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
