import {
  createStore,
  combineReducers,
  applyMiddleware,
} from "@reduxjs/toolkit";
import { eventsReducer } from "./event-form/events.reducer";
import { EventsState } from "./event-form/events.interfaces";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

export interface RootState {
  events: EventsState;
}

export const store = createStore(
  combineReducers({ events: eventsReducer }),
  composeWithDevTools(applyMiddleware(thunk))
);
