// @flow
import React from 'react';
import { Container } from 'semantic-ui-react';

import ShopItemList from './ShopItemList/hoc_ShopItemList';
import ShopFilter from './ShopFilter/ShopFilter';


type Shop = {
  products: Array<Object>,
  addToCart: Event => void
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