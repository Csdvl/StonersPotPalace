// @flow
import React, { Component } from 'react';
import {  Segment, Header, Button, Form, Grid } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import type { FormProps} from 'redux-form/lib/types';

import * as types from '../../../../Types/index';
import Input from "../../../components/UI/Input/input";


type State = {
  activeIndex: number
};

type Props = {
  profile: types.Profile,
  onSubmit: SyntheticEvent<HTMLElement> => void
} & FormProps;

class DeliveryAddress extends Component<Props, State> {
  
  render() {
    const { handleSubmit, invalid, pristine, submitting } = this.props;
    
    return (
     <Segment size='big'>
       <Header content='Delivery Address'/>
           <Segment inverted>
             <Grid centered>
               <Form onSubmit={handleSubmit}>
                 <Field
                  name="country"
                  component={Input}
                  type="text"
                  label="Country"
                  inputtype="text"
                 />
                 <Field
                  name="city"
                  component={Input}
                  type="text"
                  label="City"
                  inputtype="text"
                 />
                 <Field
                  name="address"
                  component={Input}
                  type="text"
                  label="Address"
                  inputtype="textarea"
                 />
                 <Field
                  name="postcode"
                  component={Input}
                  type="text"
                  label="Post Code"
                  inputtype="text"
                 />
                 
                 <Button
                  disabled={invalid || submitting || pristine}
                  loading={submitting}
                  type='submit'
                  content='Next'
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

// $FlowFixMe: suppressing this error until we can refactor
export default reduxForm({ form: 'checkout', destroyOnUnmount: false })(DeliveryAddress);
