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