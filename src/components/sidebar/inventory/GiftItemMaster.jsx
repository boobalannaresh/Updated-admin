import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import "./giftItemMaster.css";

export default function GiftItemMaster() {

  const [itemName, setItemName] = useState('');
  const [redeemPoints, setRedeemPoints] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!itemName) newErrors.itemName = 'Item Name is required';
    if (!redeemPoints) newErrors.redeemPoints = 'Redeem Points are required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      // Handle form submission
      console.log({ itemName, redeemPoints });
      setErrors({});
    }
  };


  return (
    <main id='main' className='main'>
    <Container>
      <Row className="justify-content-md-center mt-4">
        <Col md={6}>
          <h2 style={{textAlign:"center"}}>Gift Item Master</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formItemName" className="mb-3">
              <Form.Label>Item Name</Form.Label>
              <Form.Control
                type="text"
                value={itemName}
                onChange={(e) => setItemName(e.target.value)}
                isInvalid={!!errors.itemName}
                placeholder="Enter item name"
              />
              <Form.Control.Feedback type="invalid">
                {errors.itemName}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formRedeemPoints" className="mb-3">
              <Form.Label>Redeem Points</Form.Label>
              <Form.Control
                type="number"
                value={redeemPoints}
                onChange={(e) => setRedeemPoints(e.target.value)}
                isInvalid={!!errors.redeemPoints}
                placeholder="Enter redeem points"
              />
              <Form.Control.Feedback type="invalid">
                {errors.redeemPoints}
              </Form.Control.Feedback>
            </Form.Group>

            <Button variant="primary" type="submit" block>
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
</main>
  )
}
