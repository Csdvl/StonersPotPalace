import React from 'react';
import { Header, Button, Item, Label, Form, Segment, Grid } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';

import Input from "../../../../../components/UI/Input/input";


const changeEmail = ({ error, invalid, submitting, handleSubmit, updateEmail }) => {
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
              inputtype="input"
              // validate={[passwordLenght ]}
             />
             <Field
              name="newEmail1"
              type="text"
              component={Input}
              label="Confirm New Email"
              inputtype="input"
              // validate={[passwordLenght ]}
             />
             
             {error && (
              <Label>
                {error}
              </Label>
             )}
             <Button
              disabled={invalid || submitting}
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
