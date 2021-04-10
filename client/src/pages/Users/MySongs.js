import React, {useState, useEffect, useContext} from 'react'
import {Card, ListGroup, ListGroupItem, Button} from 'react-bootstrap'
import axios from 'axios'
import MySong from './MySong'

const MySongs = (props) => {

  const {setMySongs, mySongs, auth} = props
  

  useEffect(()=>{
    getMySongs()
  },[])

  const getMySongs = async () => {
    //update w/ path for user's specific songs
    let res = await axios.get(`/api/favorites/${auth.user.id}`)
    setMySongs(res.data)
  }
  
  const renderSongs = () => {
    //map through songs array
    return mySongs.map(song => {
      return(
        <div key={song.song_id}>
          <MySong song={song}/>
        </div>
      )
    })
    
  }

  return(
    <>
    {renderSongs()}
    </>
  )
}

export default MySongs
