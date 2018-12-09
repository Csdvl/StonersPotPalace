// @flow
import React, { Component } from 'react';
import { Header, Segment, Grid, Form, Button } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import type { FormProps } from 'redux-form/lib/types';
import Input from "../../../components/UI/Input/input";


type Props = {
  previousPage: SyntheticEvent<HTMLElement> => void
} & FormProps;

class DeliveryInstructions extends Component<Props> {
  render() {
    const { handleSubmit, previousPage } = this.props;
    
    return (
     <Segment size='big'>
       <Header content='Delivery Instructions'/>
       <Segment inverted>
         <Grid centered>
           <Form onSubmit={handleSubmit}>
             <Field
              name="deliveryInstructions"
              component={Input}
              type="text"
              label="If you would like to say anything to the delivery agent, this is the place to do it :)"
              inputtype="textarea"
             />
             
             <Button
              onClick={previousPage}
             content='Previous'
             color='red'
             size='large'
             />
             
             <Button
              // disabled={invalid || submitting || pristine}
              // loading={submitting}
              data-test='next'
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
export default reduxForm({ form: 'checkout', destroyOnUnmount: false })(DeliveryInstructions);
