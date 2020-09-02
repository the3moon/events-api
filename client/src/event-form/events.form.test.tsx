import React from "react";
import { render } from "@testing-library/react";
import { EventForm } from "./event.form";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { Store } from "@reduxjs/toolkit";

const mockStore = configureStore([]);

describe("Event form", () => {
  let store: Store;
  let component: any;
  const event = {
    firstName: "Jan",
    lastName: "Kowalski",
    email: "jan.k@gmail.com",
    date: "2020-01-01",
  };

  beforeAll(() => {
    store = mockStore({
      events: {
        ...event,
        messages: [],
        loading: false,
      },
    });
  });

  it("renders form with values from redux store", () => {
    component = render(
      <Provider store={store}>
        <EventForm />
      </Provider>
    );
    const firstNameInput = component.getByDisplayValue(event.firstName);
    expect(firstNameInput).toBeInTheDocument();
    const lastNameInput = component.getByDisplayValue(event.lastName);
    expect(lastNameInput).toBeInTheDocument();
    const emailInput = component.getByDisplayValue(event.email);
    expect(emailInput).toBeInTheDocument();
    const dateInput = component.getByDisplayValue(event.date);
    expect(dateInput).toBeInTheDocument();
  });
});
