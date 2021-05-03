import Header from '../components/Header'
import {Container, Row, Button, Col, Card} from 'react-bootstrap'
import {Link} from 'react-router-dom'

const Home = () => {
  // page content
  const pageTitle = 'Welcome to MUSN'
  const pageDescription = ' community-driven social media for music lovers'

  return (
    <>
      <div>
        <Header head={pageTitle} description={pageDescription} />
      </div>
      <Container className="d-flex justify-content-center mt-5 mb-5 ">
        <Row className="d-flex justify-content-center w-100">
          
          <Col className="d-flex justify-content-center">
            <Button href="/songs" className="btn btn-success" size="lg">
              All Songs
            </Button>
          </Col>

          <Col className="d-flex justify-content-center">
            <Button href="/users" className="btn btn-info"  size="lg">
              All Users
            </Button>
          </Col>

          <Col className="d-flex justify-content-center">
            <Button href="/bands" className="btn btn-warning" size="lg">
              All Bands
            </Button>
          </Col>
        
        </Row>
    
      </Container>
    </>
  )
}

export default Home
