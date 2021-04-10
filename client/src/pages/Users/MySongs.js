import React, {useState, useEffect, useContext} from 'react'
import {Card, ListGroup, ListGroupItem, Button} from 'react-bootstrap'
import axios from 'axios'
import MySong from './MySong'

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
      <div>
        <MySong />
      </div>
    )
  }

  return(
    <>
    {renderSongs()}
    </>
  )
}

export default MySongs
