import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import './Recommend.css'; 

const Recommend = () => {
  const navigate = useNavigate();
  const formRef = useRef();
  const [currentStep, setCurrentStep] = useState(0);

  const handleStep2Click = () => {
    setCurrentStep(1);
    const sectionElement = document.getElementById('recommend-person-section');
    sectionElement.scrollIntoView({ behavior: 'smooth' });
  };

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`First Name: ${firstName} - Category: ${selectedCategory}`);
    setFirstName('');
    setSelectedCategory('');
  };

  const handleStep3Click = () => {
    setCurrentStep(2);
    const sectionElement = document.getElementById('recommend-place-section');
    sectionElement.scrollIntoView({ behavior: 'smooth' });
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleCityChange = (e) => {
    setSelectedCity(e.target.value);
  };

  const handleReviewsClick = () => {
    navigate('/thanks');
    formRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const handleReviewChange = (e) => {
    setReview(e.target.value);
  };

  const handleRatingChange = (e) => {
    setRating(Number(e.target.value));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(file);
  };

  //validation for rating
  const validateRating = (value) => {
    const ratingValue = parseFloat(value);
    if (isNaN(ratingValue) || ratingValue < 1 || ratingValue > 5) {
      alert('Rating must be between 1 and 5.');
      return false;
    }
    return true;
  };

  const [firstName, setFirstName] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const [lastName, setLastName] = useState('');
  const [selectedCity, setSelectedCity] = useState('');

  const [review, setReview] = useState('');
  const [rating, setRating] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div>
      <Navbar showMainLink={true} showDropdown={true} />
      <div className="container">
        <div className="row">
          <div className="col-3">
            <div className="progress progress-vertical">
              <div
                className={`progress-bar ${currentStep >= 1 ? 'active' : ''}`}
                role="progressbar"
                style={{ height: `${currentStep >= 1 ? 33.33 : 0}%`, backgroundColor: '#35d2f1' }}
                aria-valuenow={currentStep >= 1 ? 33.33 : 0}
                aria-valuemin="0"
                aria-valuemax="100"
              />
              <div
                className={`progress-bar ${currentStep >= 2 ? 'active' : ''}`}
                role="progressbar"
                style={{ height: `${currentStep >= 2 ? 66.66 : 0}%`, backgroundColor: '#35d2f1' }}
                aria-valuenow={currentStep >= 2 ? 66.66 : 0}
                aria-valuemin="0"
                aria-valuemax="100"
              />
              <div
                className={`progress-bar ${currentStep >= 3 ? 'active' : ''}`}
                role="progressbar"
                style={{ height: `${currentStep >= 3 ? 100 : 0}%`, backgroundColor: '#35d2f1' }}
                aria-valuenow={currentStep >= 3 ? 100 : 0}
                aria-valuemin="0"
                aria-valuemax="100"
              />
            </div>
          </div>
          <div className="col-9">
        
            <div className="form-step">
              <h1 className={`step-title ${currentStep >= 1 ? 'active' : ''}`}>Step 1</h1>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="firstName">First Name</label>
                  <input type="text" className="form-control" id="firstName" value={firstName} onChange={handleFirstNameChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="category">Category</label>
                  <select
                    className="form-control"
                    id="category"
                    value={selectedCategory}
                    onChange={(e) => handleCategoryChange(e.target.value)}
                  >
                    <option value="">Select a category</option>
                    <option value="Food">Food</option>
                    <option value="Attractions">Attraction</option>
                    <option value="Shopping">Shopping</option>
                    <option value="Night life">Night life</option>
                  </select>
                </div>
                <button
                  type="submit"
                  style={{ backgroundColor: '#f1356d', border: 'none' }}
                  className="btn btn-primary"
                  onClick={handleStep2Click}
                >
                  Step 2
                </button>
              </form>
            </div>

            <div id="recommend-person-section" className="section-divider" />

            <div className="form-step">
              <h1 className={`step-title ${currentStep >= 2 ? 'active' : ''}`}>Step 2</h1>
              <form onSubmit={handleSubmit} ref={formRef}>
                <div className="form-group">
                  <label htmlFor="lastName">Last Name</label>
                  <input type="text" className="form-control" id="lastName" value={lastName} onChange={handleLastNameChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="city">City</label>
                  <select
                    className="form-control"
                    id="city"
                    value={selectedCity}
                    onChange={handleCityChange}
                  >
                    <option value="">Select City</option>
                    <option value="Toronto">Toronto</option>
                    <option value="Mississauga">Mississauga</option>
                    <option value="Ottawa">Ottawa</option>
                    <option value="Niagara Falls">Niagara Falls</option>
                  </select>
                </div>
                <button
                  type="submit"
                  style={{ backgroundColor: '#f1356d', border: 'none' }}
                  className="btn btn-primary"
                  onClick={handleStep3Click}
                >
                  Step 3
                </button>
              </form>
            </div>

            <div id="recommend-place-section" className="section-divider" />

            <div className="form-step">
              <h1 className={`step-title ${currentStep >= 3 ? 'active' : ''}`}>Step 3</h1>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="review">Review</label>
                  <textarea className="form-control" id="review" rows="3" value={review} onChange={handleReviewChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="rating">Rating</label>
                  <input
                    type="number"
                    className="form-control"
                    id="rating"
                    min="1"
                    max="5"
                    step="0.5"
                    value={rating}
                    onChange={handleRatingChange}
                    onBlur={(e) => validateRating(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="image">Image</label>
                  <input type="file" className="form-control-file" id="image" onChange={handleImageChange} />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ backgroundColor: '#1b9db7', border: 'none' }}
                  onClick={handleReviewsClick}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recommend;

















