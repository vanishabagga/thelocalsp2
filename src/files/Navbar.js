import React from "react";
import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

function Navbar({ showMainLink, showDropdown }) {
  const navigate = useNavigate();

  const handleMyAccountClick = () => {
    navigate('/account');
  };

  const handleRecommendClick = () => {
    navigate('/recommend');
  };

  const handleLogoutClick = () => {
    navigate('/');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <ul className="navbar-nav">
          <li className="nav-item" style={{ marginRight: "0" }}>
            <Link
              className="navbar-brand text-left"
              to="/"
              style={{
                fontFamily: "Righteous, cursive",
                fontSize: "1.5em",
              }}
            >
              The Locals
            </Link>
          </li>
          {showMainLink && (
            <li className="nav-item" style={{ marginLeft: "0", marginRight: "auto" }}>
              <Link className="nav-link" to="/main1">
                Explore!
              </Link>
            </li>
          )}
          <li className="nav-item" style={{ marginLeft: "0" }}>
            <Link className="nav-link" to="/faq">
              FAQ
            </Link>
          </li>
        </ul>
        <ul className="navbar-nav">
          {showDropdown && (
            <li className="nav-item">
              <Dropdown>
                <Dropdown.Toggle
                  variant="primary"
                  id="dropdown-basic"
                  style={{ backgroundColor: "#1b9db7", border: "none" }}
                >
                  <i className="bi bi-person-circle text-white"></i>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item onClick={handleMyAccountClick}>
                    My Account
                  </Dropdown.Item>
                  <Dropdown.Item onClick={handleRecommendClick}>
                    Recommend a Place
                  </Dropdown.Item>
                  <div className="dropdown-divider"></div>
                  <Dropdown.Item onClick={handleLogoutClick}>
                    Logout
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;















