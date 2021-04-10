import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import {Card, ListGroup, ListGroupItem, Container, Row, Col, Button} from 'react-bootstrap'
import MySongs from './MySongs'
import FollowBands from './FollowBands'
import FavoriteSongs from './FavoriteSongs'

const UserShow = () => {

    const {id} = useParams()

    const [user, setUser] = useState(null)
    const [favorites, setFavorites] = useState(null)
    const [following, setFollowing] = useState(null)
    const [owner, setOwner] = useState(false)

    useEffect(()=> {
        getData()
    },[])


    const getData = async() => {
        try {
            let res = await axios.get(`/api/users/${id}`)
            console.log(res.data)
            setUser(res.data)
            // let tes = await axios.get(`/api/favorites/${id}`)
            // console.log(tes.data)
            // setFavorites(tes.data)
            // let mes = await axios.get(`/api/follows/${id}`)
            // console.log(mes.data)
            // setFollowing(mes.data)
        } catch (error) {
            console.log(error)
        }
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
                </Card>
              </>
            )
          }
        
        
          //modal for editing and adding songs
        
        
          return (
          <div>
              
              {user &&
              <div>
              <Container fluid >
              <Link to='/users'>
                <Button className="mb-2 mt-3 btn-warning">Back to Users</Button>
              </Link>
              <h1>{user.name}'s Dashboard</h1>
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
                <Col xs={{ order: 1 }}><h3>{user.name}'s Favorite Songs</h3></Col>
                <Col xs={{ order: 2 }}><h3>{user.name}'s Favorite Bands</h3></Col>
                </Row>
                <Row>
                <Col xs={{ order: 1 }}><MySongs userId={id} owner={owner}/></Col>
                <Col xs={{ order: 2 }}><FollowBands userId={id} /></Col>

                </Row>
              </Container> 
              </div> }
              
            </div> 
          )
        }

    


export default UserShow