import { UserActionTypes } from "./userActionTypes";

export const userSetDetails = (user) => ({
  type: UserActionTypes.USER_SET_DETAILS,
  payload: user,
});
