import React, {useState, useEffect, useContext} from 'react'
import {Card, ListGroup, ListGroupItem, Button} from 'react-bootstrap'
import axios from 'axios'
import MySong from './MySong'

const MySongs = (props) => {
  const [mySongs, setMySongs] = useState([])
  const {userId} = props

  useEffect(()=>{
    getMySongs()
  },[])

  const getMySongs = async () => {
    //update w/ path for user's specific songs
    let res = await axios.get(`/api/favorites/${userId}`)
    setMySongs(res.data)
    console.log(res.data)
  }
  
  const renderSongs = () => {
    //map through songs array
    return mySongs.map(song => <MySong title={song.title} album={song.album} artist={song.artist} genre={song.genre} spotify_id={song.spotify_id}/>)
  }

  return(
    <>
    {!mySongs.length >= 1 ? 'no favorite songs' : <div>
    {renderSongs()}
    </div> }
    </>
  )
}

export default MySongs
