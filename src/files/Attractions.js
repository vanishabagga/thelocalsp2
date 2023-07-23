import React, { useState } from 'react';
import { Card, Container, Form, Button, Modal, Row, Col } from 'react-bootstrap';
import { BsStarFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import f1 from './picsseg/a1.png';
import f2 from './picsseg/a2.png';
import f3 from './picsseg/a3.png';
import f4 from './picsseg/a4.png';
import Navbar from './Navbar';

const posts = [
  {
    id: 1,
    title: 'Graffiti Alley',
    description: 'Great place to take pictures',
    imageUrl: f1,
    username: 'bliarjordan',
    type: 'Outdoors',
    priceRange: 1,
    overallRating: 3, 
  },
  {
    id: 2,
    title: 'CNE',
    description: 'So many cool rides!',
    imageUrl: f2,
    username: 'samanthapar',
    type: 'Amusement Park',
    priceRange: 2,
    overallRating: 4,
  },
  {
    id: 3,
    title: 'Casanova',
    description: 'It was so cool! Would definitely go again.',
    imageUrl: f3,
    username: 'flynnrider',
    type: 'Monument',
    priceRange: 3,
    overallRating: 5,
  },
  {
    id: 4,
    title: 'Flower conservatory',
    description: 'The flowers were so bright and beautiful.',
    imageUrl: f4,
    username: 'tangled25',
    type: 'Outdoors',
    priceRange: 2,
    overallRating: 4,
  },
];

const Attractions = () => {
  const [ratings, setRatings] = useState({});
  const [comments, setComments] = useState({});
  const [overallRating, setOverallRating] = useState(0);
  const [selectedFoodTypes, setSelectedFoodTypes] = useState([]);
  const [selectedPriceRange, setSelectedPriceRange] = useState(0);
  const [showFilter, setShowFilter] = useState(false);
  const [comment, setComment] = useState('');
  const [filteredPosts, setFilteredPosts] = useState(posts);

  const navigate = useNavigate();
  const handleIClick = () => {
    navigate('/account');
  };

  //add comment
  const handleAddComment = (postId, comment) => {
    setComments((prevComments) => ({ ...prevComments, [postId]: comment }));
    setComment('');
  };

  //delete comment
  const handleDeleteComment = (postId) => {
    setComments((prevComments) => {
      const updatedComments = { ...prevComments };
      delete updatedComments[postId];
      return updatedComments;
    });
  };

  //faceted search
  const handleFilterClick = () => {
    setShowFilter(true);
  };

  const handleFilterClose = () => {
    const selectedFoodTypes = Array.from(document.querySelectorAll('input[name="foodType"]:checked')).map((checkbox) => checkbox.value);

    setSelectedFoodTypes(selectedFoodTypes);

    const filteredPosts = posts.filter((post) => {
      const matchesFoodType = selectedFoodTypes.length === 0 || selectedFoodTypes.includes(post.type);
      const matchesPriceRange = selectedPriceRange === 0 || post.priceRange <= selectedPriceRange;

      return matchesFoodType && matchesPriceRange;
    });

    setFilteredPosts(filteredPosts);
    setShowFilter(false);
  };

  const handlePriceRangeChange = (value) => {
    setSelectedPriceRange(Number(value));
  };

  const handleRatingChange = (postId, value) => {
    const numericValue = Number(value);

    if (numericValue >= 1 && numericValue <= 5) {
      setRatings((prevRatings) => ({ ...prevRatings, [postId]: numericValue }));
      alert('Thank you for rating!');
    } else {
      alert('Only numbers 1-5 are allowed for rating.');
    }
  };

  return (
    <div>
      <Navbar showMainLink={true} showDropdown={true} />
      <Container>
        <h1 className="my-5">Attractions</h1>
        <Button onClick={handleFilterClick} variant="primary" className="filter-button" style={{ backgroundColor: '#f1356d', border: 'none' }}>
          Filter
        </Button>
        {filteredPosts.map((post) => (
          <Card
            key={post.id}
            className="custom-card mb-3"
            style={{ backgroundColor: 'rgba(241, 53, 109, 0.5)', border: 'none' }}
          >
            <Card.Img variant="top" src={post.imageUrl} />
            <Card.Body>
              <Card.Text>{post.username}</Card.Text>
              <Card.Title>{post.title}</Card.Title>
              <Card.Text>{post.description}</Card.Text>
              <div className="overall-rating">
                <div className="rating-label">Rating:</div>
                <div className="rating-stars">
                  {Array.from({ length: post.overallRating }, (_, index) => (
                    <BsStarFill key={index} />
                  ))}
                </div>
              </div>
              <Form.Group>
                <Form.Label>Your Rating:</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter your rating (1-5)"
                  min={1}
                  max={5}
                  onChange={(e) => handleRatingChange(post.id, e.target.value)}
                />
              </Form.Group>
              <Button variant="primary" style={{ backgroundColor: '#1b9db7', border: 'none' }} onClick={handleIClick}>
                Add to Itinerary
              </Button>
              <Form.Group>
                <Form.Label>Comment:</Form.Label>
                <Form.Control type="text" placeholder="Enter your comment" value={comment} onChange={(e) => setComment(e.target.value)} />
              </Form.Group>
              <Button onClick={() => handleAddComment(post.id, comment)} variant="primary" style={{ backgroundColor: '#1b9db7', border: 'none' }}>
                Post
              </Button>
              {comments[post.id] && (
                <div className="comment">
                  <strong>Comment:</strong> {comments[post.id]}
                  <Button onClick={() => handleDeleteComment(post.id)} variant="danger" size="sm" style={{ marginLeft: '10px' }}>
                    X
                  </Button>
                </div>
              )}
            </Card.Body>
          </Card>
        ))}
      </Container>

      <Modal show={showFilter} onHide={handleFilterClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Filter</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col>
              <Form.Group>
                <Form.Label>Type of Attractions:</Form.Label>
                <Form.Check
                  type="checkbox"
                  name="foodType"
                  value="Outdoors"
                  label="Outdoors"
                  checked={selectedFoodTypes.includes('Outdoors')}
                  onChange={(e) => setSelectedFoodTypes(e.target.checked ? [...selectedFoodTypes, 'Outdoors'] : selectedFoodTypes.filter((type) => type !== 'Outdoors'))}
                />
                <Form.Check
                  type="checkbox"
                  name="foodType"
                  value="Amusement Park"
                  label="Amusement Park"
                  checked={selectedFoodTypes.includes('Amusement Park')}
                  onChange={(e) => setSelectedFoodTypes(e.target.checked ? [...selectedFoodTypes, 'Amusement Park'] : selectedFoodTypes.filter((type) => type !== 'Amusement Park'))}
                />
                <Form.Check
                  type="checkbox"
                  name="foodType"
                  value="Monument"
                  label="Monument"
                  checked={selectedFoodTypes.includes('Monument')}
                  onChange={(e) => setSelectedFoodTypes(e.target.checked ? [...selectedFoodTypes, 'Monument'] : selectedFoodTypes.filter((type) => type !== 'Monument'))}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Price Range:</Form.Label>
                <Form.Range
                  min={0}
                  max={3}
                  step={1}
                  value={selectedPriceRange}
                  onChange={(e) => setSelectedPriceRange(Number(e.target.value))}
                />
                <Form.Label>{['Free', '$', '$$', '$$$'][selectedPriceRange]}</Form.Label>
              </Form.Group>
            </Col>
            <Col>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleFilterClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={handleFilterClose}
            style={{ backgroundColor: '#f1356d', border: 'none' }}
          >
            Apply Filters
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Attractions;



