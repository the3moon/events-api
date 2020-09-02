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
    default:
      return state;
  }
};
