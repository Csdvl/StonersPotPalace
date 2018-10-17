// @flow
import { toastr } from 'react-redux-toastr';
import * as actionTypes from "../actionTypes";
import * as types from '../../../Types/index';
import type { AddToCart } from "../../../Types";


const addToCartUnsafe = (id, photoURL, label, price, onStock) => ({
  type: actionTypes.ADD_TO_CART,
  id,
  photoURL,
  label,
  price,
  onStock
});

export const addToCart: AddToCart = (id: string, photoURL: string, label: string, price: number, onStock:number) => {
  return async (dispatch: Function) => {
    try {
      await dispatch(addToCartUnsafe(id, photoURL, label, price, onStock));
      toastr.success('Success !', 'You\'ve added an item :)')
    } catch (e) {
      console.log(e)
    }
  }
};

const removeFromCartUnsafe = (id, price, quantity) => ({
  type: actionTypes.REMOVE_FROM_CART,
  id,
  price,
  quantity
});

export const removeFromCart = (id: string, price: number, quantity: number) => {
  return async (dispatch: Function)=> {
    try {
      dispatch(removeFromCartUnsafe(id, price, quantity));
    } catch (e) {
      console.log(e)
    }
  }
};

const incrementQuantityUnsafe = (id, price) => ({
  type: actionTypes.INCREMENT_QUANTITY,
  id,
  price
});

export const incrementQuantity = (id: string, price: number) => {
  return async (dispatch: Function) => {
    try {
      await dispatch(incrementQuantityUnsafe(id, price));
    } catch (e) {
      console.log(e)
    }
  }
};

const decrementQuantityUnsafe = (id, price) => ({
  type: actionTypes.DECREMENT_QUANTITY,
  id,
  price
});

export const decrementQuantity = (id: string, price: number) => {
  return async (dispatch: Function) => {
    try {
      await dispatch(decrementQuantityUnsafe(id, price));
      // toastr.success('Success !', 'You\'ve removed an item...');
    } catch (e) {
      console.log(e);
    }
  }
};

const orderNow = () => ({
  type: actionTypes.ORDER_PLACED,
});

export const orderPlaced = ( values: Object, cartItems: Array<Object>, totalPrice: number) => {
  return async (dispatch: Function, getState: Function, { getFirebase, getFirestore }: Function) => {
    const firestore = getFirestore();
    const user = getFirebase().auth().currentUser;
    
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
      await firestore.add('orders', newOrder);
      dispatch(orderNow());
    } catch (e) {
      console.log(e)
    }
  }
};