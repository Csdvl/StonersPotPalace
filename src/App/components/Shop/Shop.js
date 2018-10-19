// @flow
import React from 'react';
import { Container } from 'semantic-ui-react';

import * as types from '../../../Types/index';
import ShopItemList from './ShopItemList/hoc_ShopItemList';
import ShopFilter from './ShopFilter/ShopFilter';


type Shop = {
  products: Array<types.ShopItemCard>,
  addToCart: (string, string, string, number, number) => types.AddToCart
};

const shop = ({ products, addToCart }: Shop) => {
  return (
   <Container fluid>
     <ShopFilter/>
     <ShopItemList products={products} addToCart={addToCart}/>
   </Container>
  );
};

export default shop;