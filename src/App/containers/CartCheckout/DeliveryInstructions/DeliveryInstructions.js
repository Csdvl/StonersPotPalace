import React, { Component } from 'react';
import { Header, Segment, Grid, Form, Button } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import Input from "../../../components/UI/Input/input";


class DeliveryInstructions extends Component {
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

const mapStateToProps = (state) => {
  return {}
};

const mapDispatchToProps = dispatch => {
  return {}
};

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({ form: 'checkout', destroyOnUnmount: false })(DeliveryInstructions));
