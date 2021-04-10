import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const UserShow = () => {

    const {id} = useParams()

    const [user, setUser] = useState(null)
    const [favorites, setFavorites] = useState(null)
    const [following, setFollowing] = useState(null)

    useEffect(()=> {
        getData()
    },[])


    const getData = async() => {
        try {
            let res = await axios.get(`/api/users/${id}`)
            console.log(res.data)
            setUser(res.data)
            let tes = await axios.get(`/api/favorites/${id}`)
            console.log(tes.data)
            setFavorites(tes.data)
            let mes = await axios.get(`/api/follows/${id}`)
            console.log(mes.data)
            setFollowing(mes.data)
        } catch (error) {
            console.log(error)
        }
    }
    return(
        <div>
            <h1>User Show</h1>
        </div>

    )
}

export default UserShow