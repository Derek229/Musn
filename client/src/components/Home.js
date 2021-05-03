import Header from '../components/Header'
import {Container, Row, Button, Col, Card} from 'react-bootstrap'
import {Link} from 'react-router-dom'

const Home = () => {
  // page content
  const pageTitle = 'Home'
  const pageDescription = 'welcome to MUSN'

  return (
    <>
      <div>
        <Header head={pageTitle} description={pageDescription} />
      </div>
      <Container className="d-flex justify-content-center mt-5 mb-5 ">
        <Row className="d-flex justify-content-center w-100">
          
          <Col className="d-flex justify-content-center">
            <Button href="/songs" variant="primary" className="btn btn-warning" size="lg">
              All Songs
            </Button>
          </Col>

          <Col className="d-flex justify-content-center">
            <Button href="/users" variant="primary" className="btn btn-success"  size="lg">
              All Users
            </Button>
          </Col>

          <Col className="d-flex justify-content-center">
            <Button href="/bands" variant="primary" className="btn btn-info" size="lg">
              All Bands
            </Button>
          </Col>
        
        </Row>
    
      </Container>
    </>
  )
}

export default Home
