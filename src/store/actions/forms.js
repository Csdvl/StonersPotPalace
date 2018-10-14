// @flow
import { SubmissionError } from 'redux-form';
import { toastr } from 'react-redux-toastr';


export const guildEmail = (email: Object) => {
  return async (dispatch: Function, getState: Function, { getFirestore }: Function) => {
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

export const contactSubmitUnauthenticated = (values: Object) => {
  return async (dispatch: Function, getState: Function, { getFirestore }: Function) => {
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

export const contactSubmitAuthenticated = (values: Object )=> {
  return async (dispatch: Function, getState: Function, { getFirebase, getFirestore }: Function) => {
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
      
      console.log(firstName);
      
      if ( !firstName && !lastName && !phoneNumber) {
        updatedUser = {
          firstName: values.firstName,
          lastName: values.lastName,
          displayName: [values.firstName, values.lastName].join(' '),
          phoneNumber: values.phoneNumber
        };
        console.log('im in the if statetement');
        console.log(updatedUser);
        return await firebase.updateProfile(updatedUser);
      }
      
    } catch (error) {
      throw new SubmissionError({
        _error: error.message
      })
    }
  }
};