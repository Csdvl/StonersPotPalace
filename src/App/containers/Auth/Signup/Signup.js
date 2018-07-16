import React, { Component } from 'react';
import {Button, Form} from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import { authRegister, socialAuth } from '../../../../store/actions/auth';
import { passwordLenght, required, matchPassword, email } from "../../../../shared/validation";
import Input from "../../../components/UI/Input/input";
import SocialAuth from '../SocialAuth/SocialAuth';


class Signup extends Component {
  render() {
    const { invalid, submitting, pristine, handleSubmit, onRegister, onSocialAuth, error } = this.props;
    return (
     <Form onSubmit={handleSubmit(onRegister)}>
       <Field
        name="email"
        component={Input}
        type="text"
        label="E-mail"
        inputtype="input"
        validate={[ required, email ]}
       />
       
       <Field
        name="password"
        component={Input}
        type="password"
        label="Password"
        inputtype="input"
        validate={[ required, passwordLenght ]}
       />
       
       <Field
        name="passwordConfirm"
        component={Input}
        type="password"
        label="Confirm password"
        inputtype="input"
        validate={[ required, passwordLenght, matchPassword ]}
       />
       {error && <label>{error}</label>}
       <Button btnType="Submit" disabled={invalid || submitting || pristine}>Submit</Button>
       
       
       <SocialAuth login={false} socialAuth={onSocialAuth}/>
     </Form>
    
    );
  }
}

Signup = reduxForm({
  form: 'signup',
  asyncBlurFields: [ 'email' ]
})(Signup);

const mapDispatchToProps = dispatch => {
  return {
    onRegister: (user) => dispatch(authRegister(user)),
    onSocialAuth: (selectedProvider) => dispatch(socialAuth(selectedProvider))
  }
};

export default connect(null, mapDispatchToProps)(Signup);