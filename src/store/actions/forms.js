import { SubmissionError } from 'redux-form';
import {toastr} from 'react-redux-toastr';



export const guildEmail = email => {
  return async (dispatch, getState, {getFirestore}) => {
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

export const contactSubmit = values => {
  return async (dispatch, getState, { getFirebase, getFirestore}) => {
    const firebase = getFirebase();
    const firestore = getFirestore();
    const user = firebase.auth().currentUser;
    const userRef = firestore.collection('users').doc(user.uid);
    
    try {
    const userQuerySnap = await userRef.get();

    const contact = {
      firstName:  values.firstName || userQuerySnap.data().firstName,
      lastName: values.lastName || userQuerySnap.data().lastName,
      email: values.email || userQuerySnap.data().email ,
      phoneNumber: values.phoneNumber || userQuerySnap.data().phoneNumber,
      subject: values.subject,
      message: values.message,
      contactMethod: values.contactMethod
    };
    
    await firestore.add('contacts', contact)
    } catch (error) {
      throw new SubmissionError({
        _error: error.message
      })
    }
  }
};