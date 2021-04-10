import axios from 'axios'
import React, { useState } from 'react'

const bands = (props)=> {
  const [show, setShow] =  useState(null)
   const[name, setName] = useState('')
   
   const {data, loading, error} =useAxiosOnMount('/api/bands')
   const handleSubmit =async () => {
     try{
       let res = await axios.post('/api/bands', {name})
       window.location.reload()
     } catch (err){
       console.log(err)
     }
     }

     const deleteBand = async (id) => {
       try {
         let res = await axios.delete(`/api/bands/${id}`)
         window.location.reload()
       }catch(err) {
         console.log(err)
       }
       }
          return(
            <Form.Group>
  <Form.Control size="lg" type="text" placeholder="Large text" />
  <br />
  <Form.Control type="text" placeholder="Normal text" />
  <br />
  <Form.Control size="sm" type="text" placeholder="Small text" />
</Form.Group>
          )

     }
 

export default bands