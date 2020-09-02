import { Reducer } from "@reduxjs/toolkit";
import {
  EventsState,
  EventsActions,
  EventsActionsTypes,
} from "./events.interfaces";

const eventsInitialState: EventsState = {
  firstName: "",
  lastName: "",
  email: "",
  date: "",
  messages: [],
  loading: false,
};

export const eventsReducer: Reducer<EventsState, EventsActions> = (
  state = eventsInitialState,
  action
) => {
  switch (action.type) {
    case EventsActionsTypes.CHANGE_FIRST_NAME: {
      return { ...state, firstName: action.payload };
    }
    case EventsActionsTypes.CHANGE_LAST_NAME: {
      return { ...state, lastName: action.payload };
    }
    case EventsActionsTypes.CHANGE_EMAIL: {
      return { ...state, email: action.payload };
    }
    case EventsActionsTypes.CHANGE_DATE: {
      return { ...state, date: action.payload };
    }
    case EventsActionsTypes.CHANGE_MESSAGES: {
      return { ...state, messages: action.payload };
    }
    case EventsActionsTypes.CHANGE_LOADING: {
      return { ...state, loading: action.payload };
    }
    default:
      return state;
  }
};
