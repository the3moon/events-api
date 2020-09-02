import { Action } from "@reduxjs/toolkit";

export interface EventsState {
  firstName: string;
  lastName: string;
  email: string;
  date: string;
}
export enum EventsActionsTypes {
  CHANGE_FIRST_NAME = "CHANGE_FIRST_NAME",
  CHANGE_LAST_NAME = "CHANGE_LAST_NAME",
  CHANGE_EMAIL = "CHANGE_EMAIL",
  CHANGE_DATE = "CHANGE_DATE",
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

export type EventsActions =
  | ChangeEventFirstNameAction
  | ChangeEventLastNameAction
  | ChangeEventEmailAction
  | ChangeEventDateAction;
