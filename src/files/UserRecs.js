import React, { useState, useEffect } from 'react';
import { Carousel, Container, Row, Col, Button } from 'react-bootstrap';
import { BsStarFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import a1 from './picsseg/food.png';
import a2 from './picsseg/tulips.png';
import a3 from './picsseg/bigchill.png';
import b1 from './picsseg/patio.png';
import b2 from './picsseg/beach.png';
import b3 from './picsseg/birdkingdom.jpg';
import c1 from './picsseg/umbrellasky.png';
import c2 from './picsseg/distilleryt.png';
import c3 from './picsseg/carlosbakery.png';
import d1 from './picsseg/nanashake.png';
import d2 from './picsseg/ladiperie.png';
import d3 from './picsseg/bazaar.png';
import e1 from './picsseg/kariyapark.png';
import e2 from './picsseg/rattraymarshconservation.png';
import e3 from './picsseg/recroom.png';
import f1 from './picsseg/eljefe.png';
import f2 from './picsseg/squareone.png';
import f3 from './picsseg/carasauga.png';


const UserRecs = ({ selectedUser }) => {
  const navigate = useNavigate();
  const handleIClick = () => {
    navigate('/account');
  };
  const [popularSpots, setPopularSpots] = useState([]);

  const renderCarouselItems = () => {
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
                <p>User: {selectedUser.name}</p>
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

  useEffect(() => {
    const userVariations = [
      {
        userId: 1,
        spots: [
          {
            id: 1,
            title: 'Frambitos',
            text: 'So yummy!',
            imageUrl: a1,
            rating: 4,
          },
          {
            id: 2,
            title: 'Tulip Festival',
            text: 'Millions of tulips, so beautiful',
            imageUrl: a2,
            rating: 3,
          },
          {
            id: 3,
            title: 'Big Chill',
            text: 'The icecream is so delish!',
            imageUrl: a3,
            rating: 4,
          },
        ],
      },
      {
        userId: 2,
        spots: [
          {
            id: 1,
            title: 'Great Patio',
            text: 'Great view while you eat.',
            imageUrl: b1,
            rating: 4,
          },
          {
            id: 2,
            title: 'Wasaga',
            text: 'Played volleyball with friends, had a great time.',
            imageUrl: b2,
            rating: 3,
          },
          {
            id: 3,
            title: 'Bird Kingdom',
            text: 'So many beautiful creatures',
            imageUrl: b3,
            rating: 4,
          },
        ],
      },
      {
        userId: 3,
        spots: [
          {
            id: 1,
            title: 'Umbrella Sky',
            text: 'Such cool art and great for pictures.',
            imageUrl: c1,
            rating: 3,
          },
          {
            id: 2,
            title: 'Distillery',
            text: 'Great movie spot.',
            imageUrl: c2,
            rating: 3,
          },
          {
            id: 3,
            title: 'Carlos Bakery',
            text: 'The cakes are so unique!',
            imageUrl: c3,
            rating: 4,
          },
        ],
      },
      {
        userId: 4,
        spots: [
          {
            id: 1,
            title: 'Nana shake',
            text: 'The shake tastes like my nana made it!',
            imageUrl: d1,
            rating: 4,
          },
          {
            id: 2,
            title: 'Ladiperie',
            text: 'Such good treats!',
            imageUrl: d2,
            rating: 3,
          },
          {
            id: 3,
            title: 'Grand Bazaar Niagara',
            text: 'So many cool things to buy!',
            imageUrl: d3,
            rating: 4,
          },
        ],
      },
      {
        userId: 5,
        spots: [
          {
            id: 1,
            title: 'Kariya Park',
            text: 'The cherry blossom trees are so beautiful.',
            imageUrl: e1,
            rating: 4,
          },
          {
            id: 2,
            title: 'Marsh Conservation',
            text: 'Beautiful nature.',
            imageUrl: e2,
            rating: 3,
          },
          {
            id: 3,
            title: 'Rec Room',
            text: 'Fun time playing games with friends.',
            imageUrl: e3,
            rating: 4,
          },
        ],
      },
      {
        userId: 6,
        spots: [
          {
            id: 1,
            title: 'El jefe',
            text: 'Best tequila shots EVER.',
            imageUrl: f1,
            rating: 4,
          },
          {
            id: 2,
            title: 'Square One',
            text: 'SO many stores to shop at.',
            imageUrl: f2,
            rating: 3,
          },
          {
            id: 3,
            title: 'Carasauga',
            text: 'Learned about a lot of different cultures.',
            imageUrl: f3,
            rating: 4,
          },
        ],
      },
  
    ];

    //carousel rendering for specific user selected
    const selectedVariation = userVariations.find(
      (variation) => variation.userId === selectedUser.id
    );

    if (selectedVariation) {
      setPopularSpots(selectedVariation.spots);
    } else {
      setPopularSpots([]);
    }
  }, [selectedUser]);

  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>Popular spots for {selectedUser.name}</h2>
      <Carousel className="mt-4">{renderCarouselItems()}</Carousel>
    </div>
  );
};

export default UserRecs;




