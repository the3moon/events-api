import { EventsActionsTypes } from "./events.interfaces";

export const changeFirstName = (firstName: string) => {
  return {
    type: EventsActionsTypes.CHANGE_FIRST_NAME,
    payload: firstName,
  };
};

export const changeLastName = (lastName: string) => {
  return {
    type: EventsActionsTypes.CHANGE_LAST_NAME,
    payload: lastName,
  };
};

export const changeEmail = (email: string) => {
  return {
    type: EventsActionsTypes.CHANGE_EMAIL,
    payload: email,
  };
};

export const changeDate = (date: string) => {
  return {
    type: EventsActionsTypes.CHANGE_DATE,
    payload: date,
  };
};
