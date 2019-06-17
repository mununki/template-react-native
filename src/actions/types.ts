import { SIGN_UP, SIGN_IN, SIGN_OUT } from ".";

export interface SignUpArgs {
  email: string;
  password: string;
  firstName: string;
  LastName: string;
}

export interface SignInArgs {
  email: string;
  password: string;
}

interface SignUpAction {
  type: typeof SIGN_UP;
  credentials: SignUpArgs;
}

interface SignInAction {
  type: typeof SIGN_IN;
  credentials: SignInArgs;
}

interface SignOutAction {
  type: typeof SIGN_OUT;
}

export type AuthActionTypes = SignUpAction | SignInAction | SignOutAction;
