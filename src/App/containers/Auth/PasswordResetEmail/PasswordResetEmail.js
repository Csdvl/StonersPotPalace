// @flow
import React from 'react';
import { Form, Grid, Button, Header, Segment, Item } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';

import Input from "../../../components/UI/Input/input";
import { email } from "../../../../shared/validation";


const PasswordResetEmail = ({ handleSubmit, error, invalid, submitting, pristine, resetPasswordEmail }) => {
  return (
   <Segment size='big' color0='olive'>
     <Header content='Reset password'/>
     <Item>
       <Item.Meta>Please provide your e-mail, so that we can send you the reset password link</Item.Meta>
       <Segment inverted>
         <Grid centered>
           <Form onSubmit={handleSubmit(resetPasswordEmail)}>
             <Field
              name="email"
              component={Input}
              type="text"
              label="E-mail"
              inputtype="text"
              validate={[ email ]}
             />
             
             {error && <label>{error}</label>}
             <Button
              disabled={invalid || submitting || pristine}
              loading={submitting}
              color='teal'
              content='Reset password'
              style={{ marginBottom: '15px' }}
             />
           </Form>
         </Grid>
       </Segment>
     </Item>
   </Segment>
  );
};

export default reduxForm({
  form: 'resetPassword'
})(PasswordResetEmail);