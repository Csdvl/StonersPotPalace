import {SubmissionError, reset} from 'redux-form';
import {toastr} from 'react-redux-toastr';
import moment from 'moment';


export const updatePassword = creds => {
  return async (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    const user = firebase.auth().currentUser;
    try {
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

export const updateEmail = creds => {
  return async (dispatch, getState, {getFirebase, getFirestore}) => {
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

export const updateUserProfile = user => {
  return async (dispatch, getState, {getFirebase}) => {
    const firebase = getFirebase();
    const {isLoaded, isEmpty, ...restUser} = user;
    if ( restUser.dob ) {
      restUser.dob = moment(restUser.dob).toDate();
    }
    restUser.displayName = [restUser.firstName, restUser.lastName].join(' ');
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

export const resetPasswordEmail = email => {
  return async (dispatch, getState, {getFirebase} )=> {
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