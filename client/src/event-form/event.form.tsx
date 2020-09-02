import React, { FunctionComponent, useCallback } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux";
import {
  changeFirstName,
  changeLastName,
  changeDate,
  changeEmail,
  storeEvent,
} from "./events.actions";

export const EventForm: FunctionComponent = () => {
  const firstName = useSelector((state: RootState) => state.events.firstName);
  const lastName = useSelector((state: RootState) => state.events.lastName);
  const email = useSelector((state: RootState) => state.events.email);
  const date = useSelector((state: RootState) => state.events.date);
  const messages = useSelector((state: RootState) => state.events.messages);
  const loading = useSelector((state: RootState) => state.events.loading);
  const dispatch = useDispatch();

  const handleFirstNameChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(changeFirstName(e.target.value));
    },
    [dispatch]
  );

  const handleLastNameChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(changeLastName(e.target.value));
    },
    [dispatch]
  );

  const handleEmailChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(changeEmail(e.target.value));
    },
    [dispatch]
  );

  const handleDateChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(changeDate(e.target.value));
    },
    [dispatch]
  );

  const handleSubmit = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    dispatch(
      storeEvent({ firstName, lastName, eventDate: new Date(date), email })
    );
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formBasicFirstName">
        <Form.Label>First Name</Form.Label>
        <Form.Control
          required
          value={firstName}
          onChange={handleFirstNameChange}
          type="text"
        />
      </Form.Group>

      <Form.Group controlId="formBasicLastName">
        <Form.Label>Last Name</Form.Label>
        <Form.Control
          required
          value={lastName}
          onChange={handleLastNameChange}
          type="text"
        />
      </Form.Group>

      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          required
          value={email}
          onChange={handleEmailChange}
          type="email"
        />
      </Form.Group>

      <Form.Group controlId="formBasicEventDate">
        <Form.Label>Event Date</Form.Label>
        <Form.Control
          required
          value={date}
          onChange={handleDateChange}
          type="date"
        />
      </Form.Group>

      <Button variant="primary" type="submit" disabled={loading}>
        {loading ? (
          <>
            <Spinner
              as="span"
              animation="border"
              size="sm"
              role="status"
              aria-hidden="true"
            />
            Loading...
          </>
        ) : (
          "Submit"
        )}
      </Button>
      {messages.map((m, idx) => {
        return (
          <Alert key={idx} variant={m.type}>
            {m.message}
          </Alert>
        );
      })}
    </Form>
  );
};
