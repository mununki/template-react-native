import { SignUpArgs, SignInArgs } from "./types";

export const SIGN_UP = "SIGN_UP";
export const SIGN_IN = "SIGN_IN";
export const SIGN_OUT = "SIGN_OUT";

export const signUp = (args: SignUpArgs) => ({
  type: SIGN_UP,
  credentials: args
});

export const signIn = (args: SignInArgs) => ({
  type: SIGN_IN,
  credentials: args
});

export const signOut = () => ({
  type: SIGN_OUT
});
