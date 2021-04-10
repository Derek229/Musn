import React from 'react'
import {Card, CardGroup, Container, ListGroup, ListGroupItem, Button, Row} from 'react-bootstrap'

class About extends React.Component {
    render() {
        return (
            <>
            <h1>About MUSN</h1>
            <Container className="d-flex justify-content-center w-100">

            <Row className="d-flex justify-content-center w-100">
            <Card className='m-2' border="warning" style={{width:"500px", height:"200px"}}>
                <Card.Body>
                    <Card.Title><h4>Derek Cluff</h4></Card.Title>
                    <Card.Text>
                        Hobbies: Camping, Chess
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>Likes: Video Games, Baseball</ListGroupItem>
                    <ListGroupItem>Favorite Artists: Logic, Excision, BTSM</ListGroupItem>
                </ListGroup> 
            </Card>
            <Card className='m-2' border="info" style={{width:"500px", height:"200px"}}>
                <Card.Body>
                    <Card.Title><h4>Callice Austin</h4></Card.Title>
                    <Card.Text>
                        Hobbies: Annoying the people I love
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>Likes: Being in the mountains: hiking, camping,</ListGroupItem>
                    <ListGroupItem>Favorite Artists: Taylor Swift, Addison Grace</ListGroupItem>
                </ListGroup> 
            </Card>
            <Card className='m-2' border="danger" style={{width:"500px", height:"200px"}}>
                <Card.Body>
                    <Card.Title><h4>Ethan McNeal</h4></Card.Title>
                    <Card.Text>
                        Hobbies: Playing Guitar
                    </Card.Text>
                </Card.Body>
                <ListGroup  className="list-group-flush">
                    <ListGroupItem >Likes: Video Games, My Cat</ListGroupItem>
                    <ListGroupItem>Favorite Artist: Daft Punk </ListGroupItem>
                </ListGroup> 
            </Card>
            <Card className='m-2' border="success" style={{width:"500px", height:"200px"}}>
                <Card.Body>
                    <Card.Title><h4>Trevor von Hake</h4></Card.Title>
                    <Card.Text>
                        Hobbies: Climbing, Playing Piano
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>Likes: Video Games, Tennis, Rain</ListGroupItem>
                    <ListGroupItem>Favorite Artists: Matt Martians, Frank Ocean</ListGroupItem>
                </ListGroup> 
            </Card>
            </Row>
            </Container>
            </>
        )
    }
}

export default About