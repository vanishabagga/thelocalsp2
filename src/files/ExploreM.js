import React from 'react';
import { Carousel, Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { BsStarFill } from 'react-icons/bs';
import Navbar from './Navbar';
import e1 from './picsseg/dairycream.png';
import e2 from './picsseg/vicjohnson.jpg';
import e3 from './picsseg/scooters.jpg';

const ExploreM = () => {
  const navigate = useNavigate();

  const renderCarouselItems = () => {
    const popularSpots = [
      {
        id: 1,
        title: 'Dairy Cream',
        text: 'Best icecream ever!',
        imageUrl: e1,
        rating: 5,
        username: 'veera25'
      },
      {
        id: 2,
        title: 'Vic Johnson Park',
        text: 'Such cute geese!',
        imageUrl: e2,
        rating: 5,
        username: 'butterflyfairy2'
      },
      {
        id: 3,
        title: 'Scooters',
        text: 'They filmed a Netflix scene here!!',
        imageUrl: e3,
        rating: 5,
        username: 'celestedoe'
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
      <h1 style={{ textAlign: 'center', marginBottom: '120px' }}>Mississauga</h1>
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

export default ExploreM;
