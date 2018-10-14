// @flow
import React from 'react';
import { Card, Image, Button, Label, Divider } from 'semantic-ui-react';

import AccordionDescription from './AccordionDescription';


type ShopItemCard = {
  label: string,
  onStock: number,
  delivery: boolean,
  price: number,
  photoURL: string,
  description: string,
  addToCartClicked: SyntheticEvent<HTMLButtonElement> => void
};

const shopItemCard = ({ label, onStock, delivery, price, photoURL, description, addToCartClicked }: ShopItemCard) => {
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