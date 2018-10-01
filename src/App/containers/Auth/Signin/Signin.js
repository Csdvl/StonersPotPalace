import React, { Component } from 'react';
import { Header, Button, Form, Segment, Grid, Item, Divider } from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';

import { email, passwordLenght, required } from "../../../../shared/validation";
import Input from "../../../components/UI/Input/input";
import SocialAuth from '../SocialAuth/SocialAuth';


class Signin extends Component {
  render() {
    const { invalid, submitting, pristine, handleSubmit, error, onLogin, onSocialAuth } = this.props;
    return (
     
     <Segment size='big' color='violet'>
       <Header content='Log in !'/>
       <Item>
         <Item.Meta>Log in with your E-mail and password</Item.Meta>
         <Segment inverted>
           <Grid centered>
             <Form onSubmit={handleSubmit(onLogin)}>
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
               {error && <label>{error}</label>}
               <Button
                disabled={invalid || submitting || pristine}
               loading={submitting}
               color='teal'>Log Me In !</Button>
               <Divider hidden />
               <SocialAuth login={true} socialAuth={onSocialAuth} />
             </Form>
           </Grid>
         </Segment>
         <Header sub>If you forgot your password click <Link to='/reset'>here...</Link></Header>
       </Item>
     </Segment>
    );
  }
}

export default reduxForm({ form: 'signin' })(Signin);
