import axios from "axios"
import { Button } from "react-bootstrap"


const UnfavoriteSong = (props) => {

    const {favorite_id} = props

    const deleteFavorite = async() => {
        try {
            await axios.delete(`api/favorites/${favorite_id}`)
            window.location.reload()
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <Button onClick={deleteFavorite}>Unfavorite</Button>
    )
}

export default UnfavoriteSong