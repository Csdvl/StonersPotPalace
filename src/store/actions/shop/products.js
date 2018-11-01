// @flow
import * as actionTypes from '../actionTypes';
import * as types from '../../../Types/index';
import firebase from '../../../firebase';


const fetchProducts = (products: Array<types.Product> ): types.InitProducts=> {
  return {
    type: actionTypes.FETCH_PRODUCTS,
    products
  }
};

export const initProducts = ():types.ProductsThunkAction => {
  return async (dispatch )=> {
    
    const firestore = firebase.firestore();
    const productsRef = firestore.collection('products');
    
    try {
      let querySnapProducts = await productsRef.get();
      let products = [];
      
      for ( let i = 0; i < querySnapProducts.docs.length; i++ ) {
        let product = {...querySnapProducts.docs[i].data(), id: querySnapProducts.docs[i].id};
        products.push(product);
      }
      dispatch(fetchProducts(products))
    } catch (error) {
      console.log(error);
    }
  }
};

export const setShopFilter = (filter: string )=> ({
  type: actionTypes.SET_SHOP_FILTER,
  filter
});

export const ShopFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_CAKES: 'SHOW_CAKES',
  SHOW_PP: 'SHOW_PP',
  SHOW_PT: 'SHOW_PT',
  SHOW_TRAYBAKE: 'SHOW_TRAYBAKE',
};

