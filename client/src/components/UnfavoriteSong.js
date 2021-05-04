import axios from "axios"
import { useContext, useState } from "react"
import { Button } from "react-bootstrap"
import { AuthContext } from "../providers/AuthProvider"


const UnfavoriteSong = (props) => {

    const {favorite_id, songId} = props
    const {user} = useContext(AuthContext)
    // const [favoriteId, setFavoriteId] = useState(favorite_id)

    

    const getFavoriteId = async() => {
        try {
            let res = await axios.get(`/api/favorites/${user.id}`)
            console.log(songId)
            res.data.map(f => f.song_id == songId && deleteFavorite(f.favorite_id))
        } catch (error) {
            console.log(error)
        }
        // deleteFavorite(f)
    }

    const deleteFavorite = async(f) => {
        try {
            await axios.delete(`/api/favorites/${f ? f : favorite_id}`)
            window.location.reload()
        } catch (error) {
            console.log(error)
        }
    }

    // if(favoriteId == null){getFavoriteId()}

    return(
        <Button onClick={favorite_id ? deleteFavorite : getFavoriteId}>Unfavorite</Button>
    )
}

export default UnfavoriteSong