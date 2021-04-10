import React, {useState, useEffect, useContext} from 'react'
import {Card, ListGroup, ListGroupItem, Button} from 'react-bootstrap'
import axios from 'axios'

const FollowBands = (props) => {

  const {auth} = props

  const [myBands, setMyBands] = useState([])

  useEffect(()=>{
    getMyBands()
  },[])

  const getMyBands = async () => {
    //update w/ path for user's specific songs
    let res = await axios.get(`/api/follows/${auth.user.id}`)
    setMyBands(res.data)
    console.log(res.data)
  }

  const renderBands = () => {
    return myBands.map(band =>{
      return(
        <>
          <Card style={{ width: '100%' }} className="mb-2">
            <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
            <Card.Body>
              <Card.Title><h4>{band.band_name}</h4></Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroupItem>Genre: {band.genre}</ListGroupItem>
            </ListGroup>
            <Card.Body>
              <Card.Link href="#"><Button className="btn btn-info">Go to Band's Page</Button></Card.Link>
            </Card.Body>
          </Card>
        </>
      )
    })
    
  }

  return (
    <>
      {renderBands()}
    </>
  )
}

export default FollowBands
