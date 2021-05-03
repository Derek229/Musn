import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import {Card, ListGroup, ListGroupItem, Container, Row, Col, Button} from 'react-bootstrap'
import EditUser from '../pages/Users/EditUser'

const UserShow = (props) => {

    const {auth} = props

    const [user, setUser] = useState(null)
    const [favorites, setFavorites] = useState(null)
    const [following, setFollowing] = useState(null)
    const [owner, setOwner] = useState(false)

    useEffect(()=> {
        getData()
    },[])


    const getData = async() => {
        try {
            let res = await axios.get(`/api/users/${auth.user.id}`)
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
                    <Card.Title><h3>{auth.user.name}</h3></Card.Title>
                    <Card.Text>
                      Username here (we need to add to seeds)
                    </Card.Text>
                  </Card.Body>
                  <ListGroup className="list-group-flush">
                    <ListGroupItem>{auth.user.email}</ListGroupItem>
                    <Button href="/dashboard" variant="primary" className="btn btn-info" style={{margin: '20px auto 0px 20px'}}>
                    Dashboard
                </Button>
                    <div style={{margin: '20px 0 5px 20px'}}>
                      {user && <EditUser user={user} setUser={setUser}/>}
                    </div>
                    

                  </ListGroup>
                  
                </Card>
              </>
            )
          }
        
        
          //modal for editing and adding songs
        
        
          return (
          <div>
              {renderSelf()}
            </div> 
          )
        }

    


export default UserShow