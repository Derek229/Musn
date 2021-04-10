import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';

import { Link, useParams } from 'react-router-dom';
import { Card } from 'semantic-ui-react'
import Thumbnail from '../components/Thumbnail';


const Song = ()=>{
    const { id } = useParams()
  const [song, setSong] = useState(null);

  useEffect(() => {
    getSong()
},[])

const getSong = async()=>{
    try{
      let res = await axios.get(`/api/songs/${id}`)
      setSong(res.data)

      console.log(res.data)
    }catch(err){
        alert('err')
    }
}

const renderSong = () => {
    
    return(
        <> 
        <Link to='/songs'>
        <Button>Go Back</Button>
        </Link>
        <Card>
        <Thumbnail url={song.spotify_id} />
           
        <h2>{song.title}</h2>       
        <h3>{song.artist}</h3>
        <h4>{song.album}</h4>
        <h4>{song.genre}</h4>
       </Card>
        </>
        
    )

    

}

return (
    <>
    <h1></h1>
         {song && renderSong()}
      </>
 )
}
export default Song