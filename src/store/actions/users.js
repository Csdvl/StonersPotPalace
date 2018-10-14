// @flow
import { SubmissionError, reset } from 'redux-form';
import { toastr } from 'react-redux-toastr';
import moment from 'moment';

import * as actionTypes from './actionTypes';


type UpdatePassword = {
  newPassword1: string
};

type UpdateEmail = {
  newEmail: string
};

type UpdateUserProfile = {
  isLoaded: boolean,
  isEmpty: boolean,
  dob: number,
  displayName: string,
  firstName: string,
  lastName: string
};

type ResetPasswordEmail = {
  email: string,
};

export const updatePassword = (creds: UpdatePassword) => {
  return async (dispatch: Function, getState: Function, { getFirebase }: Function) => {
    const firebase = getFirebase();
    const user = firebase.auth().currentUser;
    try {
      dispatch({ type: actionTypes.UPDATE_PASSWORD });
      await user.updatePassword(creds.newPassword1);
      await dispatch(reset('changePassword'));
      toastr.success('Success', 'Your password has been updated')
    } catch (error) {
      throw new SubmissionError({
        _error: error.message
      })
    }
  }
};

export const updateEmail = (creds: UpdateEmail) => {
  return async (dispatch: Function, getState: Function, { getFirebase }: Function) => {
    const firebase = getFirebase();
    const user = firebase.auth().currentUser;
    try {
      await user.updateEmail(creds.newEmail);
      await firebase.updateProfile({
        email: creds.newEmail
      });
      await dispatch(reset('changeEmail'));
      toastr.success('Success !', 'Your E-mail has been updated')
    } catch (error) {
      throw new SubmissionError({
        _error: error.message
      })
      
    }
  }
};

export const updateUserProfile = (user: UpdateUserProfile) => {
  return async (dispatch: Function, getState: Function, { getFirebase }: Function) => {
    const firebase = getFirebase();
    const { isLoaded, isEmpty, ...restUser } = user;
    if ( restUser.dob ) {
      restUser.dob = moment(restUser.dob).toDate();
    }
    restUser.displayName = [ restUser.firstName, restUser.lastName ].join(' ');
    try {
      await firebase.updateProfile(restUser);
      await dispatch(reset('userInfo'));
      toastr.success('Success', 'Profile updated');
    } catch (error) {
      throw new SubmissionError({
        _error: error.message
      })
    }
  }
};

export const resetPasswordEmail = (email: ResetPasswordEmail )=> {
  return async (dispatch: Function, getState: Function, { getFirebase }: Function) => {
    const firebase = getFirebase();
    const auth = firebase.auth();
    try {
      await auth.sendPasswordResetEmail(email.email);
    } catch (error) {
      throw new SubmissionError({
        _error: error.message
      })
    }
  }
};