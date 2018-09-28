import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import {reducer as toastrReducer} from 'react-redux-toastr';
import {firebaseReducer } from 'react-redux-firebase';
import {firestoreReducer } from 'redux-firestore';

import productsReducer from './shop/products';
import ordersReducer from './shop/orders';
import cartReducer from './shop/cart';
import shopFilterReducer from './shop/shopFilter';


const rootReducer = combineReducers({
  form: formReducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  toastr: toastrReducer,
  products: productsReducer,
  cart: cartReducer,
  shopFilter: shopFilterReducer,
  orders: ordersReducer
});

export default rootReducer;