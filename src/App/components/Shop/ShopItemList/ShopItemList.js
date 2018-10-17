// @flow
import React from 'react';
import {Card} from 'semantic-ui-react';

import * as types from '../../../../Types/index';
import ShopItemCard from './ShopItemCard/ShopItemCard';
import Spinner from '../../../components/UI/Spinner/Spinner';


type ShopItemListTypes = {
  addToCart: types.AddToCart,
  products: Array<types.Product>
};

const ShopItemList = ({ products, addToCart }: ShopItemListTypes) => {
  let shopItems = <Spinner/>;
  
  if ( products ) {
    shopItems = products.map(product => (
     <ShopItemCard
      key={product.id}
      label={product.label}
      price={product.price}
      onStock={product.onStock}
      photoURL={product.photoURL}
      delivery={product.delivery}
      description={product.description}
      addToCartClicked={() => addToCart(product.id, product.photoURL, product.label, product.price, product.onStock)}
     />
    ));
  }
  
  return (
   
   <Card.Group itemsPerRow={3} >
     {shopItems}
   </Card.Group>
  )
};

export default ShopItemList;