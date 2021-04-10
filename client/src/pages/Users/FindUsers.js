import axios from "axios"
import { useEffect, useState } from "react"
import { Card, ListGroup, ListGroupItem } from "react-bootstrap"
import { Link } from "react-router-dom"

const FindUsers = () => {

    const [users, setUsers] = useState(null)

    useEffect(()=> {
        getUsers()
    },[])


    const getUsers = async() => {
        try {
            let res = await axios.get('/api/users')
            setUsers(res.data)
            console.log(res.data)
        } catch (error) {
            console.log(error)
        }
    }

    const renderUsers = () => {
        return users.map(user => {
            return(
                <Card className="list-group-flush">
                {/* <img src={user.image} alt='avatar' class="img-thumbnail" /> */}
                {/* <Card.Img variant="top" src={`${user.image}/100px160`} /> */}
            <ListGroupItem>
                <Link to={`/users/${user.id}`}>
                <h4>{user.name}</h4>
                </Link>
                {user.email}
                </ListGroupItem>
                </Card>

          
                
            )
        })
    }


    return(
        <div>
            <h1>Find Users</h1>

          {users &&  <div >
                 {renderUsers()} 
                </div>  }  
            
        </div>
    )
}


export default FindUsers