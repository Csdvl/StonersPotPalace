// @flow
import { toastr } from 'react-redux-toastr';
import * as actionTypes from "../actionTypes";
import * as types from '../../../Types/index';


const addToCartUnsafe = (id: string, photoURL: string, label: string, price: number, onStock:number): types.AddToCart => ({
  type: actionTypes.ADD_TO_CART,
  id,
  photoURL,
  label,
  price,
  onStock
});

export const addToCart = (id: string, photoURL: string, label: string, price: number, onStock:number): types.CartThunkAction => {
  return async (dispatch) => {
    try {
      await dispatch(addToCartUnsafe(id, photoURL, label, price, onStock));
      toastr.success('Success !', 'You\'ve added an item :)')
    } catch (e) {
      console.log(e)
    }
  }
};

const removeFromCartUnsafe = (id: string, price: number, quantity: number): types.RemoveFromCart => ({
  type: actionTypes.REMOVE_FROM_CART,
  id,
  price,
  quantity
});

export const removeFromCart = (id: string, price: number, quantity: number): types.CartThunkAction => {
  return async (dispatch)=> {
    try {
      dispatch(removeFromCartUnsafe(id, price, quantity));
    } catch (e) {
      console.log(e)
    }
  }
};

const incrementQuantityUnsafe = (id: string, price: number): types.IncrementQuantity => ({
  type: actionTypes.INCREMENT_QUANTITY,
  id,
  price
});

export const incrementQuantity = (id: string, price: number): types.CartThunkAction => {
  return async (dispatch) => {
    try {
      await dispatch(incrementQuantityUnsafe(id, price));
    } catch (e) {
      console.log(e)
    }
  }
};

const decrementQuantityUnsafe = (id: string, price: number): types.DecrementQuantity=> ({
  type: actionTypes.DECREMENT_QUANTITY,
  id,
  price
});

export const decrementQuantity = (id: string, price: number): types.CartThunkAction => {
  return async (dispatch) => {
    try {
      await dispatch(decrementQuantityUnsafe(id, price));
    } catch (e) {
      console.log(e);
    }
  }
};

const orderNow = (values: Object, cartItems: Array<types.CartItem>, totalPrice: number): types.OrderPlaced => ({
  type: actionTypes.ORDER_PLACED,
  values,
  cartItems,
  totalPrice
});

export const orderPlaced = ( values: types.OrderPlacedDetail, cartItems: Array<types.CartItem>, totalPrice: number): types.CartThunkAction => {
  return async (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const user = getFirebase().auth().currentUser;
    console.log('Values:', values);
    const newOrder = {
      deliveryInstructions: values.deliveryInstructions,
      city: values.city,
      country: values.country,
      address: values.address,
      postcode: values.postcode,
      userId: user.uid,
      orderDate: Date.now(),
      totalPrice: totalPrice,
      products: cartItems.map(cartItem => {
        return {
          id: cartItem.id,
          label: cartItem.label,
          price: cartItem.price,
          photoURL: cartItem.photoURL,
          quantity: cartItem.quantity
        }
      })
    };
    
    
    try {
      dispatch(orderNow(values, cartItems, totalPrice));
      await firestore.add('orders', newOrder);
    } catch (e) {
      console.log(e)
    }
  }
};