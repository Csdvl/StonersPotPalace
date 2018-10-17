// @flow

//AUTH
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

//USERS

export type UpdatePassword = SyntheticEvent<HTMLElement> => void;

export type UpdateEmail = SyntheticEvent<HTMLElement> => void;

export type ResetPasswordEmail = SyntheticEvent<HTMLElement> => void;

export type UpdateUserProfile = SyntheticEvent<HTMLElement> => void;

export type ContactSubmitUnauthenticated = SyntheticEvent<HTMLElement> => void;

export type ContactSubmitAuthenticated = SyntheticEvent<HTMLElement> => void;

export type AuthLogout = () => void;

export type AuthRegister = SyntheticEvent<HTMLElement> => void;

export type SocialAuth = (string) => void;

export type AuthLogin = SyntheticEvent<HTMLElement> => void;


