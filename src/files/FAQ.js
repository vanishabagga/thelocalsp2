import React from 'react';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';
import backgroundImage from './b.jpg';

const FAQ = () => {
  const navigate = useNavigate();
  const faqs = [
    {
      question: 'What is The Locals?',
      answer:
        "The Locals is a travel website dedicated to helping you explore cities across Ontario with an authentic local perspective. Our platform connects you with locals who have invaluable knowledge about their cities, offering recommendations for lesser-known but remarkable places that may not be as popular among tourists.",
    },
    {
      question: 'How can I use The Locals?',
      answer:
        "Using The Locals is simple! Just sign up for an account or log in if you already have one. Once you're logged in, you can browse recommendations from locals, view detailed descriptions, photos, and ratings of places to visit, dine, and explore. You can also create your own personalized travel itineraries and share your favorite spots with others.",
    },
    {
      question: 'Are the recommendations from real locals?',
      answer:
        'Yes, absolutely! Our platform connects you with verified locals who have a deep understanding of their cities. All recommendations and reviews come from real users who live in the cities they are recommending.',
    },
    {
      question: 'How can I contribute to The Locals?',
      answer:
        "We encourage users to contribute to The Locals by sharing their own favorite spots and hidden gems in their cities. You can add your recommendations, write reviews, and help other travelers experience Ontario like a local.",
    },
  ];

  const handleStartChat = () => {
    navigate('/chat');
  };

  return (
    <div style={{ background: `url(${backgroundImage})`, backgroundSize: 'cover', minHeight: '100vh' }}>
      <Navbar showMainLink={false} showDropdown={false} />
      <div className="container mt-4">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <h1 className="my-5">Frequently Asked Questions</h1>
            {faqs.map((faq, index) => (
              <div key={index} className="card mb-3">
                <div className="card-header">
                  <h5 className="mb-0">{faq.question}</h5>
                </div>
                <div className="card-body">
                  <p className="card-text">{faq.answer}</p>
                </div>
              </div>
            ))}
            <div className="text-center">
              <p>Have more questions? Ask Pitbull!</p>
              <button className="btn btn-primary" style={{ backgroundColor: '#f1356d', border: 'none' }} onClick={handleStartChat}>
                Start Virtual Chat
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;

