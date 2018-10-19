// @flow
import React, { Component } from 'react';
import { Header, Button, Form, Segment, Grid, Item, Divider } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import type { FormProps } from 'redux-form/lib/types';

import * as types from '../../../../Types/index';
import { passwordLenght, required, matchPassword, email } from "../../../../shared/validation";
import Input from "../../../components/UI/Input/input";
import SocialAuth from '../SocialAuth/SocialAuth';


type Props = {
  onRegister: SyntheticEvent<HTMLElement> => void,
  onSocialAuth: types.SocialAuth
} & FormProps;

class Signup extends Component<Props> {
  render() {
    const { invalid, submitting, pristine, handleSubmit, onRegister, onSocialAuth, error } = this.props;
    return (
     <Segment size='big' color='purple'>
       <Header content='Register an account !'/>
       <Item>
         <Item.Meta>Register a new account with your E-mail</Item.Meta>
         <Segment inverted>
           <Grid centered>
             <Form onSubmit={handleSubmit(onRegister)}>
               <Field
                name="email"
                component={Input}
                type="text"
                label="E-mail"
                inputtype="text"
                validate={[ required, email ]}
               />
               
               <Field
                name="password"
                component={Input}
                type="password"
                label="Password"
                inputtype="text"
                validate={[ required, passwordLenght ]}
               />
               
               <Field
                name="passwordConfirm"
                component={Input}
                type="password"
                label="Confirm password"
                inputtype="text"
                validate={[ required, passwordLenght, matchPassword ]}
               />
               {error && <label>{error}</label>}
               <Button color='teal'
                       loading={submitting}
                       disabled={invalid || submitting || pristine}
               >Register account
               </Button>
               <Divider hidden/>
               <SocialAuth login={false} socialAuth={onSocialAuth}/>
             </Form>
           </Grid>
         </Segment>
       </Item>
     </Segment>
    );
  }
}

export default reduxForm({
  form: 'signup',
})(Signup);