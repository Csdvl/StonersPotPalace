// @flow
export type IsAuth = { isLoaded: boolean, isEmpty: boolean };

export type Profile = {
  address?: string,
  country?: string,
  county?: string,
  createdAt: Date,
  displayName?: string,
  dob?: Date,
  email: string,
  firstName?: string,
  lastName?: string,
  newsletter?: boolean,
  phoneNumber?: string | number,
  postcode?: string,
  isEmpty: boolean,
  isLoaded: boolean
};

export type ContactFormValues = {
  firstName: string,
  lastName: string,
  email: string,
  phoneNumber: string,
  subject: string,
  message: string,
  contactMethod: string
};


type GetState = () => Object;
type Dispatch = (action: AuthThunkAction | any) => any;
export type AuthThunkAction = (dispatch: Dispatch, getState: GetState, getFirestore: Function, getFirebase: Function) => any;

//USERS

export type UpdateUserProfileValues = {
  isLoaded: boolean,
  isEmpty: boolean,
  dob: number,
  displayName: string,
  firstName: string,
  lastName: string
};

export type SocialAuth = (string) => void;

export type AuthLogout = {type: 'AUTH_LOGOUT'};
