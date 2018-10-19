// @flow
import * as React from 'react';
import { Header, Button, Item, Label, Form, Segment, Grid } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import type { FormProps } from 'redux-form/lib/types';

import * as types from '../../../../../Types/index';
import Input from "../../../UI/Input/input";
import {required, email, matchEmail} from '../../../../../shared/validation';



type Props = {
  updateEmail: SyntheticEvent<HTMLElement> => void,
} & FormProps;

const changeEmail = ({ error, invalid, submitting, handleSubmit, updateEmail }: Props) => {
  return (
   <Segment size='big'>
     <Header>Change Email</Header>
     <Item>
       <Item.Meta>Use this form to update your account e-mail</Item.Meta>
       <Segment inverted>
         <Grid centered>
           <Form onSubmit={handleSubmit(updateEmail)}>
             <Field
              name="newEmail"
              type="text"
              component={Input}
              label="New Email"
              inputtype="text"
              validate={[required ,email ]}
             />
             <Field
              name="newEmail1"
              type="text"
              component={Input}
              label="Confirm New Email"
              inputtype="text"
              validate={[required ,email, matchEmail ]}
             />
             
             {error && (
              <Label>
                {error}
              </Label>
             )}
             <Button
              disabled={invalid || submitting}
              loading={submitting}
              children="Update Email"
              style={{ marginTop: '10px', marginBottom: '10px' }}
              color='teal'
              size='large'
             />
           </Form>
         </Grid>
       </Segment>
     </Item>
   </Segment>
  );
};

export default reduxForm({ form: 'changeEmail' })(changeEmail);
