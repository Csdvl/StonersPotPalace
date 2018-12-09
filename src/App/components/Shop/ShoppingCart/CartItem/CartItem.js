// @flow
import React from 'react';
import { Segment, Button, Item, Label } from 'semantic-ui-react';

import * as types from '../../../../../Types/index';


type Props = {
  onClickMinus: (string, number) => types.DecrementQuantity,
  onClickPlus: (string, number) => types.IncrementQuantity,
  removeFromCart: (string, number, number) => types.RemoveFromCart,
} & types.CartItem;

const cartItem = ({ photoURL, label, name, price, quantity, onStock, onClickMinus, onClickPlus, removeFromCart }: Props) => {
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
                   data-test={`plus${name}`}
                   onClick={onClickPlus}
                   content="+"
                   color='green'
                   disabled={quantity === onStock}/>
           <Button type="button"
                   data-test={`minus${name}`}
                   onClick={onClickMinus}
                   content="-"
                   color='red'
                   disabled={quantity < 2}/>
           
           <Button type="button"
                   data-test={`remove${name}`}
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
