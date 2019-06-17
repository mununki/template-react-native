import { SIGN_UP, SIGN_IN, SIGN_OUT } from "../actions";
import { AuthActionTypes } from "../actions/types";

const initAuthState = {
  isSignedIn: false
};

export const auth = (state = initAuthState, action: AuthActionTypes) => {
  switch (action.type) {
    case SIGN_UP:
      return { isSignedIn: true };
    case SIGN_IN:
      return { isSignedIn: true };
    case SIGN_OUT:
      return { isSignedIn: false };
    default:
      return state;
  }
};
