import React, { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import UserRecs from './UserRecs'; 
import Navbar from './Navbar';
import u1 from "./picsseg/u1.jpg"
import u2 from "./picsseg/u2.jpg"
import u3 from "./picsseg/u3.jpg"
import u4 from "./picsseg/u4.jpg"
import u5 from "./picsseg/u5.jpg"
import u6 from "./picsseg/u6.jpg"


const Users = () => {
  const users = [
    {
        id: 1,
        name: 'flowerpower',
        description: 'Love to explore and travel.',
        imageUrl: u1,
      },
      {
        id: 2,
        name: 'lalaland22',
        description: 'Animal and food lover<3',
        imageUrl: u2,
      },
      {
        id: 3,
        name: 'rosie5',
        description: 'Always looking for unique spots.',
        imageUrl: u3,
      },
  
      {
        id: 4,
        name: 'jackie42',
        description: 'If there are sweets, I will be there!',
        imageUrl: u4,
      },
  
      {
        id: 5,
        name: 'mariposa',
        description: 'Want to find slay spots:)',
        imageUrl: u5,
      },
  
      {
        id: 6,
        name: '2eric',
        description: 'New here! Excited to find places.',
        imageUrl: u6,
      },
  
      
   
  ];

  const [selectedUser, setSelectedUser] = useState(null); 

  const handleUserClick = (user) => {
    setSelectedUser(user); 
  };

  return (
    <>
      <Navbar showMainLink={true} showDropdown={true} /> 
      <Container>
      <div style={{ marginTop: '80px', textAlign: 'center' }}>
        <h1 className="my-5">Users</h1>
      </div>
        <Row>
          {users.map((user) => (
            <Col key={user.id} md={4}>
              <Card
                className="mb-4"
                onClick={() => handleUserClick(user)}
                style={{ backgroundColor: 'rgba(241, 53, 109, 0.5)', border: 'none' }}
              >
                <div className="image-container">
                  <Card.Img
                    variant="top"
                    src={user.imageUrl}
                    className="rounded-circle smaller-image"
                  />
                </div>
                <Card.Body>
                  <Card.Title>{user.name}</Card.Title>
                  <Card.Text>{user.description}</Card.Text>
                  <Button variant="primary" style={{ backgroundColor: '#1b9db7', border: 'none' }}>Choose</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        {selectedUser && <UserRecs selectedUser={selectedUser} />} 
      </Container>
    </>
  );
};

export default Users;

