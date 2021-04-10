import React, {useState, useEffect, useContext} from 'react'
import {Card, ListGroup, ListGroupItem, Button} from 'react-bootstrap'
import axios from 'axios'
import Band from './Band'

const Bands = () => {
  const [bands, setBands] = useState([])
  const [band, setBand] = useState(null)
  
  useEffect(()=>{
    getBands()
  },[])

  const getBands = async () => {
    
    try{let res = await axios.get(`/api/bands`)
    setBands(res.data)
    console.log(res.data)
    debugger
  }
  catch (err){alert('get bands error')}

  }
  const renderBands = () => {
    return bands.map( band => <Band key={band.id} band={band} setBands={setBands} bands={bands}/>)
  }
  
  const addBand = (band) => {
    setBands([band,...bands])
  }
    
  const addFormModal = (addOrEdit, band) => {

  }
    return(
      <div>
        {renderBands()}
      </div>
    )
  }

 


export default Bands
