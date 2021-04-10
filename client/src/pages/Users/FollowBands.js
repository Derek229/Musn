import React, {useState, useEffect, useContext} from 'react'
import {Card, ListGroup, ListGroupItem, Button} from 'react-bootstrap'
import axios from 'axios'

const FollowBands = () => {

  const [myBands, setMyBands] = useState([])

  // useEffect(()=>{
  //   getMyBands()
  // },[])

  const getMyBands = async () => {
    //update w/ path for user's specific songs
    // let res = await axios.get(`/api/users/${auth.user.id}`)
    // setMyBands(res.data)
    // console.log(res.data)
  }

  const renderBands = () => {
    //map through users
    return(
      <>
        <Card style={{ width: '100%' }}>
          <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
          <Card.Body>
            <Card.Title><h4>Band Name</h4></Card.Title>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>band genre</ListGroupItem>
          </ListGroup>
          <Card.Body>
            <Card.Link href="#"><Button className="btn btn-info">Go to Band's Page</Button></Card.Link>
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
      {renderBands()}
    </>
  )
}

export default FollowBands
