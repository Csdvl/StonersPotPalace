// @flow
import React from 'react';
import { Button, Item, Label, Header, Form, Segment, Grid } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import type { FormProps } from 'redux-form/lib/types'

import Input from '../../../UI/Input/input';
import { required, matchPassword } from '../../../../../shared/validation';


type Props = {
  updatePassword: SyntheticEvent<HTMLElement> => void,
  providerId: string,
} & FormProps;

const changePassword = ({
                          error,
                          invalid,
                          submitting,
                          handleSubmit,
                          updatePassword,
                          providerId
                        }: Props) => {
  return (
   <Segment size='big'>
     <Header>Change password</Header>
     {providerId &&
     providerId === 'password' && (
      <Item>
        <Item.Meta>Use this form to update your account password</Item.Meta>
        <Segment inverted>
          <Grid centered>
            <Form onSubmit={handleSubmit(updatePassword)}>
              <Field
               name="newPassword1"
               type="password"
               component={Input}
               label="New Password"
               inputtype="text"
               validate={[required ]}
              />
              <Field
               name="newPassword2"
               type="password"
               component={Input}
               label="Confirm New Password"
               inputtype="text"
               validate={[ required, matchPassword]}
              />
              {error && (
               <Label>
                 {error}
               </Label>
              )}
              <Button
               disabled={invalid || submitting}
               loading={submitting}
               content="Update Password"
               style={{ marginTop: '10px', marginBottom: '10px' }}
               color='teal'
               size='large'
              />
            </Form>
          </Grid>
        </Segment>
      </Item>
     )}
     
     {providerId &&
     providerId === 'facebook.com' && (
      <Item>
        <Item.Content>
          <Item.Header>Facebook Account</Item.Header>
          <Item.Description>Please visit Facebook to update your account settings</Item.Description>
          <Button>
            <i name="facebook"/>
            Go to Facebook
          </Button>
        </Item.Content>
      </Item>
     )}
     
     {providerId &&
     providerId === 'google.com' && (
      <Item>
        <Item.Content>
          <Item.Header>Google Account</Item.Header>
          <Item.Meta>Please visit Google to update your account settings</Item.Meta>
          <Button>
            <i name="google plus"/>
            Go to Google
          </Button>
        </Item.Content>
      </Item>
     )}
   </Segment>
  );
};

export default reduxForm({ form: 'changePassword' })(changePassword);
