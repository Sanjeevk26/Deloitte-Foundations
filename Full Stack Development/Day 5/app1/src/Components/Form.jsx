import React, { useState } from 'react';

import { Form, Button } from 'react-bootstrap';


const MyForm = () => {
  return (
    <Form>
      <Form.Group controlId="formName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name" />
      </Form.Group>

      <Form.Group controlId="formQuantity">
        <Form.Label>Quantity</Form.Label>
        <Form.Control type="number" placeholder="Enter quantity" />
      </Form.Group>

      <Form.Group controlId="formPrice">
        <Form.Label>Price</Form.Label>
        <Form.Control type="number" placeholder="Enter price" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default MyForm;
