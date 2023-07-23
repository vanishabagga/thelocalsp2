import React, { useState } from 'react';
import { Card, Container, Form, Button, Modal, Row, Col } from 'react-bootstrap';
import { BsStarFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import f1 from './picsseg/piano.webp';
import f2 from './picsseg/skippa.png';
import f3 from './picsseg/actinolite.png';
import f4 from './picsseg/chantecler.png';
import Navbar from './Navbar';

const posts = [
  {
    id: 1,
    title: 'Piano Piano',
    description: 'The food here is delicious! It was a bit busy so I would not go on the weekend again.',
    imageUrl: f1,
    username: 'conradfisher',
    type: 'Italian',
    priceRange: 1,
    overallRating: 3, 
    dietaryRestrictions: ['Vegetarian', 'Gluten-Free'],
  },
  {
    id: 2,
    title: 'Skippa',
    description: 'The food came out quick and it was so so good.',
    imageUrl: f2,
    username: 'flinster4',
    type: 'Asian',
    priceRange: 2,
    overallRating: 4,
    dietaryRestrictions: ['Halal'],
  },
  {
    id: 3,
    title: 'Actinolite',
    description: 'Best first date spot ever',
    imageUrl: f3,
    username: 'isabellaflop2',
    type: 'Mexican',
    priceRange: 3,
    overallRating: 5,
    dietaryRestrictions: ['Vegetarian'],
  },
  {
    id: 4,
    title: 'Chantecler',
    description: 'Great spot to enjoy with friends',
    imageUrl: f4,
    username: 'flipflop',
    type: 'Canadian',
    priceRange: 2,
    overallRating: 2,
    dietaryRestrictions: ['Vegetarian', 'Gluten-Free', 'Vegan'],
  },
];


const Food = () => {
  const [ratings, setRatings] = useState({});
  const [comments, setComments] = useState({});
  const [overallRating, setOverallRating] = useState(0);
  const [selectedFoodTypes, setSelectedFoodTypes] = useState([]);
  const [selectedPriceRange, setSelectedPriceRange] = useState(0);
  const [showFilter, setShowFilter] = useState(false);
  const [comment, setComment] = useState('');
  const [filteredPosts, setFilteredPosts] = useState(posts);
  const [selectedDietaryRestrictions, setSelectedDietaryRestrictions] = useState([]);

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
    const selectedFoodTypes = Array.from(document.querySelectorAll('input[name="foodType"]:checked')).map(
      (checkbox) => checkbox.value
    );

    setSelectedFoodTypes(selectedFoodTypes);

    const selectedDietaryRestrictions = Array.from(document.querySelectorAll('input[name="dietaryRestrictions"]:checked')).map(
      (checkbox) => checkbox.value
    );

    setSelectedDietaryRestrictions(selectedDietaryRestrictions);

    const filteredPosts = posts.filter((post) => {
      const matchesFoodType = selectedFoodTypes.length === 0 || selectedFoodTypes.includes(post.type);
      const matchesPriceRange = selectedPriceRange === 0 || post.priceRange <= selectedPriceRange;

      const hasAllDietaryRestrictions =
        selectedDietaryRestrictions.length === 0 ||
        selectedDietaryRestrictions.every((restriction) => post.dietaryRestrictions.includes(restriction));

      return matchesFoodType && matchesPriceRange && hasAllDietaryRestrictions;
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
        <h1 className="my-5">Food</h1>
        <Button onClick={handleFilterClick} variant="primary" className="filter-button" style={{ backgroundColor: '#f1356d', border: 'none' }}>
          Filter
        </Button>
        {filteredPosts.map((post) => (
          <Card key={post.id} className="custom-card mb-3" style={{ backgroundColor: 'rgba(241, 53, 109, 0.5)', border: 'none' }}>
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
                <Form.Label>Type of Food:</Form.Label>
                <Form.Check
                  type="checkbox"
                  name="foodType"
                  value="Italian"
                  label="Italian"
                  checked={selectedFoodTypes.includes('Italian')}
                  onChange={(e) =>
                    setSelectedFoodTypes(
                      e.target.checked ? [...selectedFoodTypes, 'Italian'] : selectedFoodTypes.filter((type) => type !== 'Italian')
                    )
                  }
                />
                <Form.Check
                  type="checkbox"
                  name="foodType"
                  value="Canadian"
                  label="Canadian"
                  checked={selectedFoodTypes.includes('Canadian')}
                  onChange={(e) =>
                    setSelectedFoodTypes(
                      e.target.checked ? [...selectedFoodTypes, 'Canadian'] : selectedFoodTypes.filter((type) => type !== 'Canadian')
                    )
                  }
                />
                <Form.Check
                  type="checkbox"
                  name="foodType"
                  value="Mexican"
                  label="Mexican"
                  checked={selectedFoodTypes.includes('Mexican')}
                  onChange={(e) =>
                    setSelectedFoodTypes(
                      e.target.checked ? [...selectedFoodTypes, 'Mexican'] : selectedFoodTypes.filter((type) => type !== 'Mexican')
                    )
                  }
                />
                <Form.Check
                  type="checkbox"
                  name="foodType"
                  value="Asian"
                  label="Asian"
                  checked={selectedFoodTypes.includes('Asian')}
                  onChange={(e) =>
                    setSelectedFoodTypes(
                      e.target.checked ? [...selectedFoodTypes, 'Asian'] : selectedFoodTypes.filter((type) => type !== 'Asian')
                    )
                  }
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Price Range:</Form.Label>
                <Form.Range min={0} max={3} step={1} value={selectedPriceRange} onChange={(e) => setSelectedPriceRange(Number(e.target.value))} />
                <Form.Label>{['', '$', '$$', '$$$'][selectedPriceRange]}</Form.Label>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>Dietary Restrictions:</Form.Label>
                <Form.Check
                  type="checkbox"
                  name="dietaryRestrictions"
                  value="Vegetarian"
                  label="Vegetarian"
                  checked={selectedDietaryRestrictions.includes('Vegetarian')}
                  onChange={(e) =>
                    setSelectedDietaryRestrictions(
                      e.target.checked
                        ? [...selectedDietaryRestrictions, 'Vegetarian']
                        : selectedDietaryRestrictions.filter((restriction) => restriction !== 'Vegetarian')
                    )
                  }
                />
                <Form.Check
                  type="checkbox"
                  name="dietaryRestrictions"
                  value="Vegan"
                  label="Vegan"
                  checked={selectedDietaryRestrictions.includes('Vegan')}
                  onChange={(e) =>
                    setSelectedDietaryRestrictions(
                      e.target.checked ? [...selectedDietaryRestrictions, 'Vegan'] : selectedDietaryRestrictions.filter((restriction) => restriction !== 'Vegan')
                    )
                  }
                />
                <Form.Check
                  type="checkbox"
                  name="dietaryRestrictions"
                  value="Gluten-Free"
                  label="Gluten-Free"
                  checked={selectedDietaryRestrictions.includes('Gluten-Free')}
                  onChange={(e) =>
                    setSelectedDietaryRestrictions(
                      e.target.checked
                        ? [...selectedDietaryRestrictions, 'Gluten-Free']
                        : selectedDietaryRestrictions.filter((restriction) => restriction !== 'Gluten-Free')
                    )
                  }
                />
                <Form.Check
                  type="checkbox"
                  name="dietaryRestrictions"
                  value="Halal"
                  label="Halal"
                  checked={selectedDietaryRestrictions.includes('Halal')}
                  onChange={(e) =>
                    setSelectedDietaryRestrictions(
                      e.target.checked
                        ? [...selectedDietaryRestrictions, 'Halal']
                        : selectedDietaryRestrictions.filter((restriction) => restriction !== 'Halal')
                    )
                  }
                />
              </Form.Group>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleFilterClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleFilterClose} style={{ backgroundColor: '#f1356d', border: 'none' }}>
            Apply Filters
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Food;














