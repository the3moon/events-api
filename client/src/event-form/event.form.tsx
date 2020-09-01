import React, { FunctionComponent } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export const EventForm: FunctionComponent = () => {
  return (
    <Form>
      <Form.Group controlId="formBasicFirstName">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="text" />
      </Form.Group>

      <Form.Group controlId="formBasicLastName">
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="text" />
      </Form.Group>

      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" />
      </Form.Group>

      <Form.Group controlId="formBasicEventDate">
        <Form.Label>Event Date</Form.Label>
        <Form.Control type="date" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};
