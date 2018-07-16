import { SubmissionError } from 'redux-form';

import * as actionTypes from './actionTypes';


const authStart = () => {
  return {
    type: actionTypes.AUTH_START
  }
};

export const authLogout = () => {
  return {
    type: actionTypes.AUTH_LOGOUT
  }
};

const authSuccess = (email) => {
  return {
    type: actionTypes.LOGIN_SUCCESS,
    email
  }
};

const authFail = () => {
  return {
    type: actionTypes.AUTH_FAIL
  }
};

export const authLogin = creds => {
  return async (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    dispatch(authStart());
    
    try {
      await firebase.auth().signInWithEmailAndPassword(creds.email, creds.password);
      dispatch(authSuccess(creds.email));
      
    } catch (error) {
      console.log(error);
      dispatch(authFail());
      throw new SubmissionError({
        _error: error.message
      })
    }
  }
};

export const authRegister = user =>
 async (dispatch, getState, {getFirebase, getFirestore}) => {
  const firebase = getFirebase();
  const firestore = getFirestore();
  
  try {
    let createdUser = await firebase.auth().createUserWithEmailAndPassword(user.email, user.password);
    console.log(createdUser);
    
    const userCurrent = await firebase.auth().currentUser;
    
    await userCurrent.updateProfile({
      email: user.email
    });
    
    let newUser = {
      email: user.email,
      createdAt: firestore.FieldValue.serverTimestamp()
    };
    await firestore.set(`users/${userCurrent.uid}`, {...newUser})
  } catch (error) {
    throw new SubmissionError({
      _error: error.message
    })
  }
 };

export const socialAuth = selectedProvider => {
 return async (dispatch, getState, {getFirebase, getFirestore}) => {
   const firebase = getFirebase();
   const firestore = getFirestore();
   
   try {
      let user = await firebase.login({
       provider: selectedProvider,
       type: 'popup'
     });
    if ( user.additionalUserInfo.isNewUser ) {
      await firestore.set(`users/${user.user.uid}`, {
        displayName: user.profile.displayName,
        photoURL: user.profile.avatarUrl,
        createdAt: firestore.FieldValue.serverTimestamp()
      })
    }
   } catch (error) {
     console.log(error);
   }
 }
};

