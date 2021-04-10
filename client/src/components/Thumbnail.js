// https://www.youtube.com/watch?v=yydNF8tuVmU
// https://img.youtube.com/vi/yydNF8tuVmU/0.jpg

import { Card } from "react-bootstrap"

const Thumbnail = (props) => {
    const {url} = props
    return(
        <a href={`https://www.youtube.com/watch?v=${url}`} target='_blank'><Card.Img src={`https://img.youtube.com/vi/${url}/0.jpg`}/></a> 
    )
}

export default Thumbnail


// yydNF8tuVmU