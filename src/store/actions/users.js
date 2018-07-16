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
    const firestore = getFirestore();
    const user = firebase.auth().currentUser;
    const userRef = firestore.collection('users').doc(user.uid);
    try {
      await user.updateEmail(creds.newEmail);
      await dispatch(reset('changeEmail'));
      await user.updateProfile({
        email: creds.newEmail
      });
      await userRef.update({email: creds.newEmail});
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
    
    if ( user.dob ) {
      user.dob = moment(user.dob).toDate();
    }
    
    user.displayName = [user.firstName, user.lastName].join(' ');
    
    try {
     await firebase.updateProfile(user);
     toastr.success('Success', 'Profile updated');
    } catch (error) {
      console.log(error)
    }
  }
};