import React, {useState, useEffect, useContext} from 'react'
import {Card, ListGroup, ListGroupItem, Button} from 'react-bootstrap'
import axios from 'axios'
import FollowBand from '../../components/FollowBand'
import { AuthContext, AuthProvider } from '../../providers/AuthProvider'
import UnfollowBand from '../../components/UnfollowBand'

const FollowBands = (props) => {

  const {userId} = props

  const auth = useContext(AuthContext)

  const [myBands, setMyBands] = useState([])

  useEffect(()=>{
    getMyBands()
  },[])

  const getMyBands = async () => {
    //update w/ path for user's specific songs
    try{
    let res = await axios.get(`/api/follows/${userId}`)
    setMyBands(res.data)
    console.log(res.data)}
    catch(error){
      console.log(error)
    }
  }

  const renderBands = () => {
    return myBands.map(band => {
    return(
      <>
        <Card style={{ width: '100%' }}>
          <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
          <Card.Body>
            <Card.Title><h4>{band.band_name}</h4></Card.Title>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>{band.genre}</ListGroupItem>
          </ListGroup>
          <Card.Body>
            <Card.Link href="#"><Button className="btn btn-info">Go to Band's Page</Button></Card.Link>
          </Card.Body>

          {auth.user.id != band.user_id ? <FollowBand bandId={band.band_id}/> : <UnfollowBand followId={band.follow_id}/>}
          <Card.Footer>
            <small className="text-muted">Last updated (insert time here)</small>
          </Card.Footer>
        </Card>
      </>
    )})
  }

  return (
    <>
      {!myBands.length >= 1 ? <ListGroup>no favorite bands</ListGroup>  : <div>
      {renderBands()}
      </div> }
    </>
  )
}

export default FollowBands
