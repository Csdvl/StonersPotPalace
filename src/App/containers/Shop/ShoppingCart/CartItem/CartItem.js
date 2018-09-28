import React from 'react';
import { Segment, Button, Item, Label } from 'semantic-ui-react';


const cartItem = ({ photoURL, label, price, quantity, onStock, onClickMinus, onClickPlus, removeFromCart }) => {
  return (
   <Segment size="small" textAlign='center'>
     <Item.Group>
       <Item>
         <Item.Image src={photoURL} size='tiny'/>
         <Item.Content><Label>{label}</Label></Item.Content>
         <Item.Content><Label>£ {price}</Label></Item.Content>
         <Item.Content>
           <Item.Content><Label>
             {quantity}
           </Label></Item.Content>
           <Button type="button"
                   onClick={onClickPlus}
                   content="+"
                   color='green'
                   disabled={quantity === onStock}/>
           <Button type="button"
                   onClick={onClickMinus}
                   content="-"
                   color='red'
                   disabled={quantity < 2}/>
           
           <Button type="button"
                   onClick={removeFromCart}
                   attached="bottom"
                   icon="trash alternate"
                   color='black'
                   />
         </Item.Content>
       </Item>
     </Item.Group>
   </Segment>
  );
};

export default cartItem;
