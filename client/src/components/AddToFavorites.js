import axios from "axios"
import { useContext } from "react"
import { Button } from "react-bootstrap"
import { AuthContext } from "../providers/AuthProvider"

const AddToFavorites = (props) => {
    const auth = useContext(AuthContext)
    const {songId} = props

    const user_id = auth.user.id


    const addSongToFavorites = async() => {
            try {
                console.log(songId)
                let res = axios.post(`/api/favorites/${auth.user.id}`, {song_id: songId, user_id: user_id})
                window.location.reload()
            } catch (error) {
                console.log(error)
            }
    }

    return(
        <Button onClick={addSongToFavorites}>Favorite</Button>
        )
}

export default AddToFavorites