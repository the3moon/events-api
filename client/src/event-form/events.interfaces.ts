import { Action } from "@reduxjs/toolkit";

export interface EventsState {
  firstName: string;
  lastName: string;
  email: string;
  date: string;
  messages: { message: string; type: string }[];
  loading: boolean;
}
export enum EventsActionsTypes {
  CHANGE_FIRST_NAME = "CHANGE_FIRST_NAME",
  CHANGE_LAST_NAME = "CHANGE_LAST_NAME",
  CHANGE_EMAIL = "CHANGE_EMAIL",
  CHANGE_DATE = "CHANGE_DATE",
  CHANGE_MESSAGES = "CHANGE_MESSAGES",
  CHANGE_LOADING = "CHANGE_LOADING",
}

export interface ChangeEventFirstNameAction extends Action {
  type: EventsActionsTypes.CHANGE_FIRST_NAME;
  payload: string;
}

export interface ChangeEventLastNameAction extends Action {
  type: EventsActionsTypes.CHANGE_LAST_NAME;
  payload: string;
}

export interface ChangeEventEmailAction extends Action {
  type: EventsActionsTypes.CHANGE_EMAIL;
  payload: string;
}

export interface ChangeEventDateAction extends Action {
  type: EventsActionsTypes.CHANGE_DATE;
  payload: string;
}

export interface ChangeEventMessagesAction extends Action {
  type: EventsActionsTypes.CHANGE_MESSAGES;
  payload: { message: string; type: string }[];
}

export interface ChangeEventLoadingAction extends Action {
  type: EventsActionsTypes.CHANGE_LOADING;
  payload: boolean;
}

export type EventsActions =
  | ChangeEventFirstNameAction
  | ChangeEventLastNameAction
  | ChangeEventEmailAction
  | ChangeEventDateAction
  | ChangeEventLoadingAction
  | ChangeEventMessagesAction;
