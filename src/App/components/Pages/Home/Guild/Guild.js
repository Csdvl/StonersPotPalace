import React from 'react';
import { Form, Button, Item, Divider, Icon, Grid, Segment } from 'semantic-ui-react';
import { reduxForm, Field } from 'redux-form';


import guildImg from '../../../../../assets/images/shop/potStonersGuild.jpeg';
import Input from '../../../UI/Input/input';


const guild = () => (
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
           <Form>
             <Field
              name="newsletter"
              component={Input}
              type="text"
              label={<Icon name='pointing down'/>}
              inputtype="input"
             />
             
             <Button
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

export default reduxForm({ form: 'newsletter' })(guild);