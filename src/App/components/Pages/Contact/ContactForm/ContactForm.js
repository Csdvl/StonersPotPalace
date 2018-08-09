import React, { Component } from 'react';
import { Form, Segment, Button, Grid, Header } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import * as actions from '../../../../../store/actions/index';
import Input from '../../../UI/Input/input';
import { isAlphabet, nameLenght, required } from "../../../../../shared/validation";
import capitalize from "capitalize";


class ContactForm extends Component {
  render() {
    
    const { invalid, submitting, pristine, handleSubmit, contactSubmit, profile: { isEmpty, isLoaded, firstName, lastName, email, phoneNumber } } = this.props;
    
    const options = [
      { key: 'email', text: 'E-mail', value: 'email' },
      { key: 'phone', text: 'Phone', value: 'phone' },
      { key: 'post', text: 'Post', value: 'post' },
    ];
    
    return (
     <Segment size='huge'>
       <Header content='Contact Form' size='large'/>
       <Header content="Send us your thoughts on anything and we'll do our best to answer"/>
       <Segment inverted>
         <Grid centered>
           <Form onSubmit={handleSubmit(contactSubmit)} >
             {!((!isEmpty && isLoaded) && (firstName)) &&
             <Field
              name="firstName"
              component={Input}
              type="text"
              label="First Name"
              inputtype="input"
              normalize={capitalize}/>
             }
             {!((!isEmpty && isLoaded) && (lastName)) &&
             < Field
              name="lastName"
              component={Input}
              type="text"
              label="Last Name"
              inputtype="input"
              normalize={capitalize}/>
             }
             {!((!isEmpty && isLoaded) && (email)) &&
             <Field
              name="email"
              component={Input}
              type="text"
              label="E-mail address"
              inputtype="input"
             />
             }
             {!((!isEmpty && isLoaded) && (phoneNumber)) &&
             <Field
              name="phoneNumber"
              component={Input}
              type="text"
              label="Phone Number"
              inputtype="input"
             />
             }
             <Field
              name="subject"
              component={Input}
              type="text"
              label="Subject"
              inputtype="input"
             />
             
             <Field
              name="message"
              component={Input}
              type="text"
              label="Message"
              inputtype="textarea"
             />
             
             <Field
              name="contactMethod"
              component={Input}
              type="text"
              label="Preferred method of contact"
              inputtype="select"
              options={options}
             />
             
             <Button
              // disabled={invalid || submitting || pristine}
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
  contactSubmit: (values) => dispatch(actions.contactSubmit(values))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({ form: 'contactForm' })(ContactForm));
