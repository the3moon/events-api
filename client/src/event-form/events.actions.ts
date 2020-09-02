import { EventsActionsTypes } from "./events.interfaces";
import { Dispatch } from "@reduxjs/toolkit";
import axios from "axios";

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

export const storeEvent = (formData: {
  firstName: string;
  lastName: string;
  email: string;
  eventDate: Date;
}) => async (dispatch: Dispatch) => {
  dispatch({
    type: EventsActionsTypes.CHANGE_LOADING,
    payload: true,
  });
  dispatch({
    type: EventsActionsTypes.CHANGE_MESSAGES,
    payload: [],
  });
  try {
    await axios.post("api/events", formData);
    dispatch({
      type: EventsActionsTypes.CHANGE_MESSAGES,
      payload: [
        {
          message: "Event has been added",
          type: "success",
        },
      ],
    });
    dispatch(changeFirstName(""));
    dispatch(changeLastName(""));
    dispatch(changeEmail(""));
    dispatch(changeDate(""));
  } catch (error) {
    if (error.response) {
      const resp = error.response;
      switch (resp.status) {
        case 500:
          // problem on server side
          dispatch({
            type: EventsActionsTypes.CHANGE_MESSAGES,
            payload: [
              {
                message: "There is problem with server try again later",
                type: "danger",
              },
            ],
          });
          break;
        case 400: {
          // invalid data
          dispatch({
            type: EventsActionsTypes.CHANGE_MESSAGES,
            payload: resp.data.message.map((m: string) => ({
              message: m,
              type: "danger",
            })),
          });
          break;
        }
      }
    } else {
      console.error(error);
    }
  }

  dispatch({
    type: EventsActionsTypes.CHANGE_LOADING,
    payload: false,
  });
};
