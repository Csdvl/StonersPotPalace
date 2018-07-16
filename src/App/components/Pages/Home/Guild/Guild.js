import React from 'react';
import { Form, Button, Input, Item } from 'semantic-ui-react';


const guild = () => (
 <Item>
   <Item.Content>
     <Item.Header>Join !... the Pot Stoner's Guild</Item.Header>
     <Item.Description>
       Fringilla libero. Dapibus leo, non proin. In dignissim. Vivamus malesuada.
       Diam sapien, amet fermentum cras, suspendisse sapien. Maecenas ante, ultricies id, diam vitae.
     </Item.Description>
     <Form.Field>
       <Input/>
       <Button>Count me in !</Button>
     </Form.Field>
   </Item.Content>
 </Item>
);

export default guild;