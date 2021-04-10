import axios from "axios"
import { Button } from "react-bootstrap"
import { useContext } from "react"
import { AuthContext } from "../providers/AuthProvider"

const FollowBand = (props) => {

    const auth = useContext(AuthContext)
    const {bandId} = props

    const user_id = auth.user.id


    const addBandToFollowed = async() => {
            try {
                let res = await axios.post(`/api/followers/${auth.user.id}`, {band_id: bandId, user_id: user_id})
                console.log(res.data)
            } catch (error) {
                console.log(error)
            }
    }

    return(
        <Button onClick={addBandToFollowed}>Follow</Button>
        )
}

export default FollowBand
   