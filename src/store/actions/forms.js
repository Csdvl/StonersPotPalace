// @flow
import { SubmissionError } from 'redux-form';
import { toastr } from 'react-redux-toastr';

import * as types from '../../Types/index';


export const guildEmail = (email: {guild: string}): types.AuthThunkAction => {
  return async (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    
    try {
      const newEmail = {
        email: email.guild,
        registeredAt: firestore.FieldValue.serverTimestamp()
      };
      await firestore.add('guild', newEmail);
      toastr.success('Success !', "We've sent you an email containing further instructions");
    } catch (error) {
      throw new SubmissionError({
        _error: error.message
      })
    }
  }
};

export const contactSubmitUnauthenticated = (values: types.ContactFormValues): types.AuthThunkAction => {
  return async (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    try {
      
      const contact = {
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        phoneNumber: values.phoneNumber,
        subject: values.subject,
        message: values.message,
        contactMethod: values.contactMethod
      };
      
      await firestore.add('contacts', contact);
      
    } catch (error) {
      throw new SubmissionError({
        _error: error.message
      })
    }
  }
};

export const contactSubmitAuthenticated = (values: types.ContactFormValues ): types.AuthThunkAction => {
  return async (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();
    const user = firebase.auth().currentUser;
    const userRef = firestore.collection('users').doc(user.uid);
    
    try {
      const userQuerySnap = await userRef.get();
      
      const firstName = userQuerySnap.data().firstName;
      const lastName = userQuerySnap.data().lastName;
      const phoneNumber = userQuerySnap.data().phoneNumber;
      let updatedUser;
      
      const contact = {
        firstName: values.firstName || firstName,
        lastName: values.lastName || lastName,
        phoneNumber: values.phoneNumber || phoneNumber,
        subject: values.subject,
        message: values.message,
        contactMethod: values.contactMethod
      };
      
      await firestore.add('contacts', contact);
      
      if ( !firstName && !lastName && !phoneNumber) {
        updatedUser = {
          firstName: values.firstName,
          lastName: values.lastName,
          displayName: [values.firstName, values.lastName].join(' '),
          phoneNumber: values.phoneNumber
        };
 
        return await firebase.updateProfile(updatedUser);
      }
      
    } catch (error) {
      throw new SubmissionError({
        _error: error.message
      })
    }
  }
};