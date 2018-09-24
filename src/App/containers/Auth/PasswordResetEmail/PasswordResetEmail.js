import React, { Component } from 'react';
import { Form, Grid, Button, Header, Segment, Item } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

import * as actions from '../../../../store/actions/index';
import Input from "../../../components/UI/Input/input";
import { email } from "../../../../shared/validation";


class PasswordResetEmail extends Component {
  render() {
    const { handleSubmit, error, invalid, submitting, pristine, resetPasswordEmail } = this.props;
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
  }
}

const mapDispatchToProps = dispatch => {
  return {
    resetPasswordEmail: (email) => dispatch(actions.resetPasswordEmail(email))
  }
};

export default connect(null, mapDispatchToProps)(reduxForm({
  form: 'resetPassword'
})(PasswordResetEmail));