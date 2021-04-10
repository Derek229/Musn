import {useEffect, useState} from 'react'
import React from 'react';
import axios from 'axios'
import { useParams } from 'react-router-dom';
import { Card, Dropdown } from 'semantic-ui-react';

const SearchSongs = (props)=>{
    const [songs,setSongs] = useState(null)
    const { id } = useParams()


    useEffect(()=>{
        getSongs()
    },[])

    const getSongs = async () => {
        try {
            let res = await axios.get('/api/songs')
            let normalizedSongData = normalizeSongData(res.data)
            setSongs(normalizedSongData)
            console.log(res.data)

        } catch (error) {
            alert()
        }
    }

    // const onSongChange = async () => {
    //     try{
    //       let res = await axios.get(`/api/songs/${id}`)
    //       setSongs(res.data)

    //   console.log(res.data)

    //     }catch(err){
    //       alert(err)
    //     }
    //     }

        const normalizeSongData = (songArr) => {
            return songArr.map(song => { 
              return {key: song.id , text: song.name , value: song.id}
            })
            }

    
    if(!songs) return <p>loading</p>
    return (
        <>
        <div>
            <div>
                 <h1>Find Songs</h1>
             </div>
            
            <Dropdown
                    // onChange={onSongChange}
                    placeholder='Select a song'
                    fluid
                    selection
                    options={songs}
                />
               
        </div>
        </>
    )

}

export default SearchSongs