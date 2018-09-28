import React from 'react';
import { Item, Label, Segment } from 'semantic-ui-react';


const userOrder = ({ order }) => {
  
  const orderedProducts = order.products.map(product => {
    return (
     <Segment size='small' textAlign='center'>
       <Item.Group>
         <Item>
           <Item.Image src={product.photoURL} size='small'/>
           <Item.Content verticalAlign='middle'> <Label size='big'> {product.label}</Label></Item.Content>
           <Item.Content >you got...  <Label size='large'> {product.quantity}</Label></Item.Content>
           <Item.Content ><Label size='large'>{product.price} </Label> £/per unit</Item.Content>
           <Item.Content ><Label size='large'>{product.price * product.quantity} </Label>£/total product </Item.Content>
         </Item>
       </Item.Group>
     </Segment>
    )
  });
  
  return (
   <Segment size='huge' inverted>
     <Item>
       <Item.Content>
         <Item.Header><Segment size='large'>Order Ref: <Label size='big'>#{order.id}</Label></Segment></Item.Header>
         <Item.Meta><Segment size='large' secondary>Order date: <Label size='big'>{order.orderDate}</Label></Segment></Item.Meta>
         <Item.Description><Segment size='large'>Total price of your order: <Label size='big'>£{order.totalPrice}</Label></Segment></Item.Description>
         <Item.Extra>
           <Item.Group><Segment color='olive' inverted>{orderedProducts}</Segment></Item.Group>
         </Item.Extra>
       </Item.Content>
     </Item>
   </Segment>
  );
};

export default userOrder;
