
import {Link, useParams} from 'react-router-dom'
import axios from 'axios'
import { useEffect, useState } from 'react';
import { Card } from 'semantic-ui-react';



const Songs = (props)=>{
    const { id } = useParams()
    const [songs, setSongs] = useState(null);


    useEffect(() => {
        getSongs()
    },[])


      const getSongs = async()=>{
        try{
          let res = await axios.get(`/api/songs`)
          setSongs(res.data)

          console.log(res.data)
        }catch(err){
            alert('err')
        }
    }

    const renderSong = () => {
        return songs.map((song) => {
        return(
            <> 
            <Card>
               <Link to={`songs/${song.id}`}>
            <h2>{song.title}</h2>
                 </Link>
            <h3>{song.artist}</h3>
            <h4>{song.album}</h4>
            <h4>{song.genre}</h4>
           <br/>
           </Card>
            </>
        )}
   
        )
   
    }

    return (
        <>
        <h1>Songs</h1>
             {songs && renderSong()}
          </>
     )
}

export default Songs