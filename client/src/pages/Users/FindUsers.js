import axios from "axios"
import { useEffect, useState } from "react"
import { Card, ListGroup, ListGroupItem } from "react-bootstrap"
import { Link } from "react-router-dom"
import pfp from '../../components/Images/IMG_0101.JPG'

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
                <div style={{width: '400px', height: '150px', backgroundColor: '#303030', margin: '2em 1em'}}>
                    <div style={{display: 'flex'}}>
                <img src={pfp} alt='avatar' style={{borderRadius: '50%', height: '64px', width: '64px', objectFit: 'cover', display: 'block', overflow: 'hidden', position: 'relative'}} />
               <p style={{margin: '30px'}}> {user.email}</p>
                    </div>
                {/* <Card.Img variant="top" src={`${user.image}/100px160`} /> */}
            
                <Link to={`/users/${user.id}`}>
                <h4 style={{textAlign: 'center'}}>{user.name}</h4>
                </Link>
                
               
                </div>

          
                
            )
        })
    }


    return(
        <div>
            <h1>Find Users</h1>

          {users &&  <div style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap'}}>
                 {renderUsers()} 
                </div>  }  
            
        </div>
    )
}


export default FindUsers