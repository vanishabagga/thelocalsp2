import React from 'react';
import { useNavigate } from 'react-router-dom';
import backgroundImage from './b.jpg';

const Thanks = () => {
    const navigate = useNavigate();
    const handleAccountClick = () => {
        navigate('/account');
      };
  return (
    <div style={{ background: `url(${backgroundImage})`, backgroundSize: 'cover', minHeight: '100vh' }}>
      <h1>Thank You Fellow Local!</h1>
      <p>Your review has been submitted successfully.</p>
      <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ backgroundColor: '#1b9db7', border: 'none' }}
                  onClick={handleAccountClick}
                >
                  Return to Your Account
                </button>
    </div>
    
  );
};

export default Thanks;
