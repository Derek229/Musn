import axios from "axios"
import { Button } from "react-bootstrap"


const UnfollowBand = (props) => {
    const {followId} = props

    const deleteFollow = async() => {
        try {
            await axios.delete(`/api/followers/${followId}`)
            window.location.reload()
        } catch (error) {
            console.log(error)
        }
    }
    return(
        <Button onClick={deleteFollow}>Unfollow</Button>
    )
}

export default UnfollowBand