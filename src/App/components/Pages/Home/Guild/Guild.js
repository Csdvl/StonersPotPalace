// @flow
import React from 'react';
import { Form, Button, Item, Divider, Icon, Grid, Segment } from 'semantic-ui-react';
import {connect} from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import type { FormProps } from 'redux-form/lib/types';

import * as actions from '../../../../../store/actions/index';
// $FlowFixMe: suppressing this error until further refactor
import guildImg from '../../../../../assets/images/shop/potStonersGuild.jpeg';
import Input from '../../../UI/Input/input';
import { email } from "../../../../../shared/validation";


type Guild = {
  guildEmail: SyntheticEvent<HTMLElement> => void
} & FormProps;

const guild = ({handleSubmit, guildEmail, invalid, submitting, pristine}: Guild) => (
 <Item.Group>
   <Item>
     <Item.Image src={guildImg} size='large'/>
     <Item.Content>
       <Item.Header>Join !... the Pot Stoner's Guild</Item.Header>
       <Divider/>
       <Item.Description>
         Fringilla libero. Dapibus leo, non proin. In dignissim. Vivamus malesuada.
         Diam sapien, amet fermentum cras, suspendisse sapien. Maecenas ante, ultricies id, diam vitae.
       </Item.Description>
       <Divider hidden/>
       <Segment inverted>
         <Grid centered>
           <Form onSubmit={handleSubmit(guildEmail)}>
             <Field
              name="guild"
              component={Input}
              type="text"
              label={<Icon name='pointing down'/>}
              inputtype="text"
              validate={[ email]}
             />
             
             <Button
              disabled={invalid || submitting || pristine}
              content='Count me in !'
              style={{ marginBottom: '10px' }}
              color='teal'
              size='large'
             />
           </Form>
         </Grid>
       </Segment>
     </Item.Content>
   </Item>
 </Item.Group>
);

const mapDispatchToProps = dispatch => {
  return {
    guildEmail: (email) => dispatch(actions.guildEmail(email))
  }
};
// $FlowFixMe: suppressing this error until react-redux fixes type annotations
export default connect(null, mapDispatchToProps)(reduxForm({ form: 'guild' })(guild));