import React, { useState } from 'react';
import Navbar from './Navbar';
import { Tab, Tabs } from 'react-bootstrap';
import { BsStarFill } from 'react-icons/bs';
import dp from './picsseg/dp.jpg';
import './Account.css';
import x1 from './picsseg/distilleryt.png';
import x2 from './picsseg/rattraymarshconservation.png';
import backgroundImage from './b.jpg';


//Account tab
const Account = () => {
  const userData = {
    name: 'Olivia Rodrigo',
    city: 'Toronto',
    description: 'Love Toronto, excited to explore other cities in Ontario!',
    profilePicture: dp,
  };

  const [city, setCity] = useState(userData.city);
  const [description, setDescription] = useState(userData.description);
  const [editMode, setEditMode] = useState(false);

  //changing city and description 
  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleEditModeToggle = () => {
    setEditMode(!editMode);
  };

  return (

    <div style={{ background: `url(${backgroundImage})`, backgroundSize: 'cover', minHeight: '100vh' }}>
      <Navbar showMainLink={true} showDropdown={true} />
      <div className="container mt-4">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <h1 className="my-5">My Account</h1>
            <Tabs defaultActiveKey="account" id="account-tabs">
              <Tab eventKey="account" title="Account">
                <div className="card custom-card mt-0">
                  <div className="card-body">
                    <div className="d-flex align-items-center">
                      <img
                        src={userData.profilePicture}
                        alt="Profile"
                        className="mr-3"
                        style={{ width: '150px', height: '150px', borderRadius: '50%' }}
                      />
                      <div>
                        <h4 className="mb-3">{userData.name}</h4>
                        <div className="form-group">
                          <label htmlFor="city" style={{ textAlign: 'left' }}>City:</label>
                          {editMode ? (
                            <input
                              type="text"
                              className="form-control"
                              id="city"
                              value={city}
                              onChange={handleCityChange}
                            />
                          ) : (
                            <input
                              type="text"
                              className="form-control-plaintext"
                              id="city"
                              value={city}
                              readOnly
                            />
                          )}
                        </div>
                        <div className="form-group">
                          <label htmlFor="description" style={{ textAlign: 'left' }}>Description:</label>
                          {editMode ? (
                            <textarea
                              className="form-control"
                              id="description"
                              value={description}
                              onChange={handleDescriptionChange}
                            />
                          ) : (
                            <p>{description}</p>
                          )}
                        </div>
                        <button
                          className="btn btn-primary" style={{ backgroundColor: '#1b9db7', border: 'none' }}
                          onClick={handleEditModeToggle}
                        >
                          {editMode ? 'Save' : 'Change Description and/or City'}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </Tab>
              <Tab eventKey="itinerary" title="Itinerary">
                <Itinerary />
              </Tab>
              <Tab eventKey="reviews" title="Reviews">
                <Reviews />
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

//Itinerary tab
const Itinerary = () => {
  const [places, setPlaces] = useState([
    { id: 1, name: 'Scooters', checked: false },
    { id: 2, name: 'Dairy Cream', checked: false },
    { id: 3, name: 'Bird Kingdom', checked: false },
    { id: 4, name: 'Heartbreakers', checked: false },
  ]);

  const [newItem, setNewItem] = useState('');

  //checkboxes
  const handleCheckboxChange = (placeId) => {
    setPlaces((prevPlaces) =>
      prevPlaces.map((place) =>
        place.id === placeId ? { ...place, checked: !place.checked } : place
      )
    );
  };

  //adding item to itinerary  
  const handleInputChange = (e) => {
    setNewItem(e.target.value);
  };

  const handleAddItem = () => {
    if (newItem.trim() !== '') {
      const newItemObject = {
        id: places.length + 1,
        name: newItem,
        checked: false,
      };

      setPlaces((prevPlaces) => [...prevPlaces, newItemObject]);
      setNewItem('');
    }
  };

  //deleting item in itinerary
  const handleDeleteItem = (placeId) => {
    setPlaces((prevPlaces) => prevPlaces.filter((place) => place.id !== placeId));
  };

  return (
    <div className="container">
      <ul className="list-group">
        {places.map((place) => (
          <li className="list-group-item d-flex justify-content-between" key={place.id}>
            <label>
              <input
                type="checkbox"
                checked={place.checked}
                onChange={() => handleCheckboxChange(place.id)}
              />
              {place.name}
            </label>
            <button className="btn btn-danger" onClick={() => handleDeleteItem(place.id)}>
              X
            </button>
          </li>
        ))}
      </ul>
      <div className="mt-4">
        <input
          type="text"
          className="form-control"
          placeholder="Enter a new place"
          value={newItem}
          onChange={handleInputChange}
        />
        <button className="btn btn-primary mt-2" style={{ backgroundColor: '#1b9db7', border: 'none' }} onClick={handleAddItem}>
          Add Place
        </button>
      </div>
    </div>
  );
};

//Reviews tab
const Reviews = () => {
  const [reviews, setReviews] = useState([
    {
      id: 1,
      place: 'St. Lawrence Market',
      description: 'Had the best time trying the international cuisine.',
      rating: 4,
      imageUrl: x1,
    },
    {
      id: 2,
      place: 'Allan Gardens Conservatory',
      description: 'The plant diversity is crazy!',
      rating: 5,
      imageUrl: x2,
    },
  ]);

  //deleting review
  const handleDeleteReview = (reviewId) => {
    setReviews((prevReviews) => prevReviews.filter((review) => review.id !== reviewId));
  };

  return (
    <div className="container">
      {reviews.map((review) => (
        <div className="card mb-3" key={review.id}>
          <img
            src={review.imageUrl}
            alt={review.place}
            className="card-img-top"
          />
          <div className="card-body">
            <h5 className="card-title">{review.place}</h5>
            <p className="card-text">{review.description}</p>
            <div className="rating-stars">
            <div className="rating-label">Your Rating:</div>
              {Array.from({ length: review.rating }, (_, index) => (
                <BsStarFill key={index} />
              ))}
            </div>
            <button className="btn btn-danger" onClick={() => handleDeleteReview(review.id)}>
              X
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Account;























