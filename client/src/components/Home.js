import Header from '../components/Header'
import {Container, Row, Button, Col, Card, Carousel} from 'react-bootstrap'
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
      <Container className="d-flex justify-content-center " >
    
      
      <Carousel fade controls={false}>
      <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://source.unsplash.com/IiwYeihxC58"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Share and Save Your Favorite Songs</h3>
      <a href="/songs" style={{textDecoration: 'none', color: 'rgb(52,152,219)'}} ><p>View All Songs</p></a>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://source.unsplash.com/NcdG9mK3PBY"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>See What Others Are Listening To</h3>
      <a href="/users" style={{textDecoration: 'none', color: 'rgb(52,152,219)'}} ><p>View All Users</p></a>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://source.unsplash.com/fPKqpUbTL4Y"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Find Your Favorite Bands</h3>
      <a href="/bands" style={{textDecoration: 'none', color: 'rgb(52,152,219)'}} ><p>View All Bands</p></a>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</Container>
    </>
  )
}

export default Home
