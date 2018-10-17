// @flow
import React from 'react';
import { Card, Image, Button, Label, Divider } from 'semantic-ui-react';

import * as types from '../../../../../Types/index';
import AccordionDescription from './AccordionDescription';


type Props = {
  addToCartClicked: types.AddToCart
} & types.ShopItemCard ;

const shopItemCard = ({ label, onStock, delivery, price, photoURL, description, addToCartClicked }: Props) => {
  let color = 'green';
  if ( onStock < 11 ) {
    color = 'yellow'
  }
  if ( onStock < 8 ) {
    color = 'orange'
  }
  if ( onStock < 4 ) {
    color = 'red'
  }
  if ( onStock === 0 ) {
    color = 'black'
  }
  return (
   <Card>
     <Image src={photoURL}/>
     <Card.Content>
       <Card.Header>{label}</Card.Header>
       <Divider hidden/>
       <Card.Meta><Label size='large' color={color}>{onStock} left on stock !</Label></Card.Meta>
       <Card.Description><AccordionDescription title='Description' description={description}/></Card.Description>
     </Card.Content>
     <Card.Content extra>
       <Card.Description>
         <Label size='large'>{delivery ? "It's ready... to come to you" : "Sorry we need more time to cook'em"}</Label>
       </Card.Description>
       <Divider/>
       <Card.Description>
         <Label size='huge' color='yellow'>£{price}</Label>
       </Card.Description>
       <Divider/>
       <Button
        disabled={onStock < 1}
        onClick={addToCartClicked}
        size='huge'
        color='olive'
       >Add to basket!</Button>
     </Card.Content>
   </Card>
  )
};

export default shopItemCard;