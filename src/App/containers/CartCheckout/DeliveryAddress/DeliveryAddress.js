// @flow
import React, { Component } from 'react';
import { Divider, Segment, Header, Card, Accordion, Icon, Button, Form, Grid } from 'semantic-ui-react';
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
  state = { activeIndex: -1 };
  
  handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;
    
    this.setState({ activeIndex: newIndex })
  };
  
  render() {
    const { activeIndex } = this.state;
    const { profile, handleSubmit, onSubmit } = this.props;
    
    return (
     <Segment size='big'>
       <Header content='Delivery Address'/>
       
       {/*<Card>*/}
         {/*<Card.Content>*/}
           {/*<Card.Header>{profile.displayName}</Card.Header>*/}
           {/*<Card.Description>Country: {profile.country}</Card.Description>*/}
           {/*<Card.Description>City: {profile.city}</Card.Description>*/}
           {/*<Card.Description>Address: {profile.address}</Card.Description>*/}
           {/*<Card.Description>Post Code: {profile.postcode}</Card.Description>*/}
         {/*</Card.Content>*/}
       {/*</Card>*/}
       
       {/*<Divider horizontal>OR</Divider>*/}
       
       {/*<Accordion>*/}
         {/*<Accordion.Title active={activeIndex === 0} index={0} onClick={this.handleClick}>*/}
           {/*<Icon name='dropdown'/>*/}
           {/*Add a New Address*/}
         {/*</Accordion.Title>*/}
         {/*<Accordion.Content active={activeIndex === 0}>*/}
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
                  // disabled={invalid || submitting || pristine}
                  // loading={submitting}
                  type='submit'
                  content='Next'
                  style={{ marginTop: '10px', marginBottom: '10px' }}
                  color='teal'
                  size='large'
                 />
               </Form>
             </Grid>
           </Segment>
         {/*</Accordion.Content>*/}
       {/*</Accordion>*/}
     
     </Segment>
    );
  }
}

// $FlowFixMe: suppressing this error until we can refactor
export default reduxForm({ form: 'checkout', destroyOnUnmount: false })(DeliveryAddress);
