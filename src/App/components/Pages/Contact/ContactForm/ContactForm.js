// @flow
import React, { Component } from 'react';
import { Form, Segment, Button, Grid, Header } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import type { FormProps } from 'redux-form/lib/types';
import { connect } from 'react-redux';

import * as actions from '../../../../../store/actions/index';
import Input from '../../../UI/Input/input';
import {
  isAlphabet,
  nameLenght,
  required,
  email as emailVal,
  number,
  phoneNumber as phoneNumberVal
} from "../../../../../shared/validation";
import capitalize from "capitalize";


type Props = {
  contactSubmitUnauthenticated: SyntheticEvent<HTMLButtonElement> => void,
  contactSubmitAuthenticated: SyntheticEvent<HTMLButtonElement> => void,
  profile: {
    isEmpty: boolean,
    isLoaded: boolean,
    firstName: string,
    lastName: string,
    email: string,
    phoneNumber: number
  }
} & FormProps;

class ContactForm extends Component<Props> {
  render() {
    
    const { invalid, submitting, pristine, handleSubmit, contactSubmitUnauthenticated, contactSubmitAuthenticated, profile: { isEmpty, isLoaded, firstName, lastName, email, phoneNumber } } = this.props;
    
    const options = [
      { key: 'email', text: 'E-mail', value: 'email' },
      { key: 'phone', text: 'Phone', value: 'phone' },
      { key: 'post', text: 'Post', value: 'post' },
    ];
    
    const submit = (isLoaded && !isEmpty) ? contactSubmitAuthenticated : contactSubmitUnauthenticated;
    
    return (
     <Segment size='huge'>
       <Header content='Contact Form' size='large'/>
       <Header content="Send us your thoughts on anything and we'll do our best to answer"/>
       <Segment inverted>
         <Grid centered>
           <Form onSubmit={handleSubmit(submit)}>
             {!((!isEmpty && isLoaded) && (firstName)) &&
             <Field
              name="firstName"
              component={Input}
              type="text"
              label="First Name"
              inputtype="text"
              normalize={capitalize}
              validate={[ required, nameLenght, isAlphabet ]}/>
             }
             {!((!isEmpty && isLoaded) && (lastName)) &&
             < Field
              name="lastName"
              component={Input}
              type="text"
              label="Last Name"
              inputtype="text"
              normalize={capitalize}
              validate={[ required, nameLenght, isAlphabet ]}/>
             }
             {!((!isEmpty && isLoaded) && (email)) &&
             <Field
              name="email"
              component={Input}
              type="text"
              label="E-mail address"
              inputtype="text"
              validate={[ required, emailVal ]}
             />
             }
             {!((!isEmpty && isLoaded) && (phoneNumber)) &&
             <Field
              name="phoneNumber"
              component={Input}
              type="text"
              label="Phone Number"
              inputtype="text"
              validate={[ required, number, phoneNumberVal ]}
             />
             }
             <Field
              name="subject"
              component={Input}
              type="text"
              label="Subject"
              inputtype="text"
              validate={[ required ]}
             />
             
             <Field
              name="message"
              component={Input}
              type="text"
              label="Message"
              inputtype="textarea"
              validate={[ required ]}
             />
             
             <Field
              name="contactMethod"
              component={Input}
              type="text"
              label="Preferred method of contact"
              inputtype="select"
              options={options}
              validate={[ required ]}
             />
             
             <Button
              disabled={invalid || submitting || pristine}
              loading={submitting}
              content='Submit Information'
              style={{ marginTop: '10px', marginBottom: '10px' }}
              color='teal'
              size='large'
             />
           
           </Form>
         </Grid>
       </Segment>
     </Segment>
    );
  }
}

const mapStateToProps = state => {
  return {
    profile: state.firebase.profile
  }
};

const mapDispatchToProps = dispatch => {
  return {
    contactSubmitUnauthenticated: (values) => dispatch(actions.contactSubmitUnauthenticated(values)),
    contactSubmitAuthenticated: (values) => dispatch(actions.contactSubmitAuthenticated(values))
  }
};
// $FlowFixMe: suppressing this error until react-redux fixes type annotations
export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({ form: 'contactForm' })(ContactForm));
