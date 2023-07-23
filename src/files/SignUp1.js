import React, { useState } from 'react';
import { Link as ScrollLink, Element } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import Navbar from './Navbar';
import backgroundImage from './b.jpg';

const Signup1 = () => {
  const navigate = useNavigate();
  const [language, setLanguage] = useState('English');
  const [city, setCity] = useState('');
  const [birthday, setBirthday] = useState('');

  const handleMain1Click = () => {
    navigate('/main1');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  //translation
  const toggleLanguage = () => {
    const newLanguage = language === 'English' ? 'French' : 'English';
    setLanguage(newLanguage);
  };

  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
      }}
    >
      <Navbar showMainLink={false} showDropdown={false} />
      <Button
        variant="primary"
        style={{ backgroundColor: '#f1356d', border: "none",position: 'absolute', top: '10px', right: '10px' }}
        onClick={toggleLanguage}
      >
        {language === 'English' ? 'Français' : 'English'}
      </Button>
      <div style={{ marginTop: '40px' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
          }}
        >
          <div
          style={{
            backgroundColor: 'white',
            borderRadius: '20px',
            padding: '20px',
            marginBottom: '40px',
          }}
        >
          <h1
            style={{
              textAlign: 'center',
              fontFamily: 'Righteous, cursive',
              color: 'pink',
              margin: '0',
            }}
          >
            {language === 'English' ? 'Welcome Local!' : 'Bienvenue Local !'}
          </h1>
        </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <div className="signup">
            <div
              className="signup-section"
              style={{
                backgroundColor: 'rgba(27, 157, 183, 0.8)',
                padding: '20px',
                width: '300px',
                marginTop: '20px',
                borderRadius: '10px',
              }}
            >
              <h2 style={{ marginBottom: '1em', color: 'white' }}>
                {language === 'English' ? 'Step 1' : 'Étape 1'}
              </h2>
              <Form onSubmit={handleSubmit}>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    marginBottom: '1em',
                  }}
                >
                  <Form.Label style={{ color: 'white' }}>
                    {language === 'English' ? 'Name:' : 'Nom :'}
                  </Form.Label>
                  <Form.Control type="text" id="name" style={{ width: '200px' }} />
                </div>

                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    marginBottom: '1em',
                  }}
                >
                  <Form.Label style={{ color: 'white' }}>
                    {language === 'English' ? 'Date of Birth:' : 'Date de naissance :'}
                  </Form.Label>
                  <Form.Control
                    type="text"
                    id="birthday"
                    style={{ width: '200px' }}
                    placeholder={language === 'English' ? 'YYYY-MM-DD' : 'AAAA-MM-JJ'}
                    value={birthday}
                    onChange={(e) => setBirthday(e.target.value)}
                  />
                </div>

                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    marginBottom: '1em',
                  }}
                >
                  <Form.Label style={{ color: 'white' }}>
                    {language === 'English' ? 'City:' : 'Ville :'}
                  </Form.Label>
                  <Form.Control
                    as="select"
                    id="city"
                    style={{ width: '200px' }}
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                  >
                    <option value="">{language === 'English' ? 'Select City' : 'Sélectionner la ville'}</option>
                    <option value="Toronto">{language === 'English' ? 'Toronto' : 'Toronto'}</option>
                    <option value="Mississauga">{language === 'English' ? 'Mississauga' : 'Mississauga'}</option>
                    <option value="Ottawa">{language === 'English' ? 'Ottawa' : 'Ottawa'}</option>
                    <option value="Niagara Falls">{language === 'English' ? 'Niagara Falls' : 'Chutes du Niagara'}</option>
                  </Form.Control>
                </div>
              </Form>

              <ScrollLink to="signup2-section" spy={true} smooth={true} offset={-70} duration={500}>
                <Button
                  variant="primary"
                  style={{ marginTop: '2px', backgroundColor: '#f1356d', border: 'none' }}
                >
                  {language === 'English' ? 'Step 2' : 'Étape 2'}
                </Button>
              </ScrollLink>
            </div>

            <div
              style={{
                marginTop: '1em',
                display: 'inline-block',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'white',
                padding: '10px',
                borderRadius: '20px',
              }}
            >
              <p style={{ color: 'black', margin: '0' }}>
                {language === 'English' ? 'Already have an account? ' : 'Déjà inscrit ? '}
                <Link to="/login" component={RouterLink} style={{ color: '#f1356d' }}>
                  {language === 'English' ? 'Log in' : 'Se connecter'}
                </Link>
                .
              </p>
            </div>

            <Element
              name="signup2-section"
              className="signup-section"
              style={{
                backgroundColor: 'rgba(27, 157, 183, 0.8)',
                padding: '20px',
                width: '300px',
                marginTop: '20px',
                borderRadius: '10px',
              }}
            >
              <h2 style={{ marginBottom: '1em', color: 'white' }}>
                {language === 'English' ? 'Step 2' : 'Étape 2'}
              </h2>
              <Form onSubmit={handleSubmit}>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    marginBottom: '1em',
                  }}
                >
                  <Form.Label style={{ color: 'white' }}>
                    {language === 'English' ? 'Username:' : 'Nom d\'utilisateur :'}
                  </Form.Label>
                  <Form.Control type="text" id="username" style={{ width: '200px' }} />
                </div>

                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    marginBottom: '1em',
                  }}
                >
                  <Form.Label style={{ color: 'white' }}>
                    {language === 'English' ? 'Password:' : 'Mot de passe :'}
                  </Form.Label>
                  <Form.Control type="password" id="password" style={{ width: '200px' }} />
                </div>

                <Button
                  variant="secondary"
                  className="mb-2"
                  onClick={handleMain1Click}
                  style={{ backgroundColor: '#f1356d', border: 'none' }}
                >
                  {language === 'English' ? 'Sign Up' : 'S\'inscrire'}
                </Button>
              </Form>
            </Element>

            <div
              style={{
                marginTop: '1em',
                display: 'inline-block',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'white',
                padding: '10px',
                borderRadius: '20px',
              }}
            >
              <p style={{ color: 'black', margin: '0' }}>
                {language === 'English' ? 'Already have an account? ' : 'Déjà inscrit ? '}
                <Link to="/login" component={RouterLink} style={{ color: '#f1356d' }}>
                  {language === 'English' ? 'Log in' : 'Se connecter'}
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup1;



















