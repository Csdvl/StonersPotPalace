import React, { Component } from 'react';
import {Button, Form} from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import { authLogin, socialAuth } from '../../../../store/actions/auth';
import { email, passwordLenght, required } from "../../../../shared/validation";
import Input from "../../../components/UI/Input/input";
import SocialAuth from '../SocialAuth/SocialAuth';


class Signin extends Component {
  render() {
    const { invalid, submitting, pristine, handleSubmit, error, onLogin, onSocialAuth } = this.props;
    return (
     <Form onSubmit={handleSubmit(onLogin)}>
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
       {error && <label>{error}</label>}
       <Button btnType="Submit" disabled={invalid || submitting || pristine}>Submit Sign In</Button>
       
       
       <SocialAuth login={true} socialAuth={onSocialAuth}/>
     </Form>
    
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onLogin: (creds) => dispatch(authLogin(creds)),
    onSocialAuth: (selectedProvider) => dispatch(socialAuth(selectedProvider))
  }
};

export default connect(null, mapDispatchToProps)(reduxForm({ form: 'signin' })(Signin));
