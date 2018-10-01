import React from 'react';
import { Container } from 'semantic-ui-react';

import ShopItemList from './ShopItemList/hoc_ShopItemList';
import ShopFilter from './ShopFilter/ShopFilter';


const shop = ({ products, addToCart }) => {
  return (
   <Container fluid>
     <ShopFilter/>
     <ShopItemList products={products} addToCart={addToCart}/>
   </Container>
  );
};

export default shop;