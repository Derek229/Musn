
import axios from 'axios'
import React, {useContext, useEffect, useRef, useState} from 'react'
import {Card, ListGroup, ListGroupItem, Button, Modal, Container} from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import AddToFavorites from '../components/AddToFavorites'
import Thumbnail from '../components/Thumbnail'
import UnfavoriteSong from '../components/UnfavoriteSong'
import { AuthContext } from '../providers/AuthProvider'
import SongForm from './Users/SongForm'
import * as Scroll from 'react-scroll'
import HorizontalScroll from 'react-scroll-horizontal'




const Songs = (props)=>{
  const {user} = useContext(AuthContext)
  const [songs, setSongs] = useState(null);
  const [show, setShow] = useState(false);
  const [usersSongIds, setUsersSongIds] = useState([])

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // const scroll = (scrollOffset) => {
  //   ref.current.scrollLeft += scrollOffset;
  // };
  // const ref = useRef()

  // const scroll = (scrollOffset) => {
  //     Scroll.animateScroll.scrollMore(-30);
  // }

  // let scroll = Scroll.animateScroll


    useEffect(() => {
        getSongs()
    },[])


      const getSongs = async()=>{
        try{
          let res = await axios.get(`/api/songs`)
          let res2 = await axios.get(`/api/favorites/${user.id}`)
          setSongs(res.data)
          setUsersSongIds(([...new Set(res2.data.map(us => us.song_id))]))
          // console.log(res.data)
          // console.log(([...new Set(res2.data.map(us => us.song_id))]))
        }catch(err){
            alert('err')
        }
    }

    const editFormModal = () => {
    
        return (
          <>
            <Button className="btn btn-info" onClick={handleShow}>
              Edit
            </Button>
      
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Edit this Song</Modal.Title>
              </Modal.Header>
              <Modal.Body><SongForm handleClose={handleClose}/></Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
          </>
        );
      }

    const renderSong = () => {
        return songs.map((song) => {
        return(
            
            <Container className="d-flex justify-content-center mt-5 mb-5" style={{width: '300px', height: '100%', margin: '0'}}>
        <Card style={{width:"400px", }} >
          <Thumbnail url={song.spotify_id} />
          <Card.Body>
              <Link to={`songs/${song.id}`}>
            <Card.Title><h4>{song.title}</h4></Card.Title>
            </Link>
            <Card.Text>
              By: {song.artist}
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>Album: {song.album}</ListGroupItem>
            <ListGroupItem>{song.genre}</ListGroupItem>
          </ListGroup>
          {!usersSongIds.includes(song.id) ? <AddToFavorites songId={song.id}/> : <UnfavoriteSong songId={song.id}/>}
          <Card.Body>
            <Card.Link>{editFormModal()}</Card.Link>
            <Card.Link><Button className="btn btn-warning">Delete Song</Button></Card.Link>
          </Card.Body>
        </Card>
        </Container>
     
        )}
   
        )
   
    }

    return (
      // 
        <>
          <div>
        <h1 style={{margin: 'auto'}}>Songs</h1>
          
        <div style={{display: 'flex', justifyContent: 'space-between', flexDirection: 'row', width: '60em', height: '100%', flexWrap: 'wrap'}}>
            {/* <HorizontalScroll pageLock='true'> */}
             {songs && renderSong()}
             {/* </HorizontalScroll>  */}
        </div>
          </div>
          </>
      //
     )
}

export default Songs