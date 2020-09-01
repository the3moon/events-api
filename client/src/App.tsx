import React from "react";
import { EventForm } from "./event-form/event.form";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function App() {
  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <EventForm />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
