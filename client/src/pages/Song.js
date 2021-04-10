import axios from 'axios';
import { Button } from 'bootstrap';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Card } from 'semantic-ui-react'


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
        <Card >
           
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