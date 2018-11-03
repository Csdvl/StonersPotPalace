// @flow
import { SubmissionError } from 'redux-form';

import * as actionTypes from './actionTypes';
import * as types from '../../Types/index';


type Creds = {email: string, password: string};

export const authLogin = (creds: Creds ): types.AuthThunkAction => {
  return async (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    try {
      await firebase.auth().signInWithEmailAndPassword(creds.email, creds.password);
      
    } catch (error) {
      throw new SubmissionError({
        _error: error.message
      })
    }
  }
};

export const authRegister = (user: Creds): types.AuthThunkAction =>
 async (dispatch, getState, {getFirebase, getFirestore}) => {
  const firebase = getFirebase();
  const firestore = getFirestore();
  
  try {
    await firebase.auth().createUserWithEmailAndPassword(user.email, user.password);
    
    const userCurrent = await firebase.auth().currentUser;
    await userCurrent.updateProfile({
      email: user.email
    });
    
    let newUser = {
      email: user.email,
      createdAt: firestore.FieldValue.serverTimestamp()
    };
    await firestore.set(`users/${userCurrent.uid}`, {...newUser});
    firebase.auth().useDeviceLanguage();
    await userCurrent.sendEmailVerification();
  } catch (error) {
    throw new SubmissionError({
      _error: error.message
    })
  }
 };

export const socialAuth = (selectedProvider: string): types.AuthThunkAction=> {
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

export const authLogout = () => {
  return {
    type: actionTypes.AUTH_LOGOUT
  }
};