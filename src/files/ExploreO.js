import React from 'react';
import { Carousel, Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { BsStarFill } from 'react-icons/bs';
import Navbar from './Navbar';
import e1 from './picsseg/heartbreakers.webp';
import e2 from './picsseg/4wheelies.jpg';
import e3 from './picsseg/shanghai.jpg';

const ExploreO = () => {
  const navigate = useNavigate();

  const renderCarouselItems = () => {
    const popularSpots = [
      {
        id: 1,
        title: 'Heartbreakers',
        text: 'Pizza tastes like it is from New York!',
        imageUrl: e1,
        rating: 5,
        username: 'giraffelover'
      },
      {
        id: 2,
        title: '4 Wheelies',
        text: 'Had so much fun skating!',
        imageUrl: e2,
        rating: 5,
        username: 'bolt'
      },
      {
        id: 3,
        title: 'Shanghai Wonton Noodle Restaurant',
        text: 'You can get 15 wontons for $5!',
        imageUrl: e3,
        rating: 5,
        username: 'prince24'
      },
    ];

    return popularSpots.map((spot) => (
      <Carousel.Item key={spot.id}>
        <Container>
          <Row>
            <Col md={6}>
              <img
                src={spot.imageUrl}
                alt={spot.title}
                className="d-block w-100 rounded"
                style={{ maxHeight: '400px', objectFit: 'cover' }}
              />
            </Col>
            <Col md={6} className="d-flex align-items-center">
              <div style={{ textAlign: 'left' }}>
                <h3 className="carousel-title">{spot.title}</h3>
                <p className="carousel-text">{spot.text}</p>
                <p>User: {spot.username}</p>
                <div className="rating-container">
                  <span className="rating-label">Rating:</span>
                  <div className="rating-stars">
                  {Array.from({ length: spot.rating }, (_, index) => (
                    <BsStarFill key={index} />
                  ))}
                  </div>
                </div>
                <div style={{ marginTop: '20px' }}>
                  <Button variant="primary" style={{ backgroundColor: '#f1356d', border: 'none' }} className="carousel-button" onClick={handleIClick}>
                    Add to Itinerary
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Carousel.Item>
    ));
  };

  const handleCategoryClick = () => {
    navigate('/category');
  };

  const handleLocalClick = () => {
    navigate('/users');
  };

  const handleIClick = () => {
    navigate('/account');
  };

  return (
    <div>
      <Navbar showMainLink={true} showDropdown={true} />
      <h2 style={{ textAlign: 'center' }}>Popular spots in</h2>
      <h1 style={{ textAlign: 'center', marginBottom: '120px' }}>Ottawa</h1>
      <Carousel className="mt-4">{renderCarouselItems()}</Carousel>
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <Button variant="secondary" style={{ backgroundColor: '#1b9db7', border: 'none' }} className="mr-2 mb-2" onClick={handleCategoryClick}>
          Choose by category
        </Button>
        <br />
        <Button variant="secondary" style={{ backgroundColor: '#1b9db7', border: 'none' }} className="mb-2" onClick={handleLocalClick}>
          Choose by local
        </Button>
      </div>
    </div>
  );
};

export default ExploreO;