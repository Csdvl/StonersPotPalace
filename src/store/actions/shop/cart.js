import * as actionTypes from "../actionTypes";
import { toastr } from 'react-redux-toastr';


const addToCartUnsafe = (id, photoURL, label, price, onStock) => ({
  type: actionTypes.ADD_TO_CART,
  id,
  photoURL,
  label,
  price,
  onStock
});

export const addToCart = (id, photoURL, label, price, onStock) => {
  return async (dispatch) => {
    try {
      await dispatch(addToCartUnsafe(id, photoURL, label, price, onStock));
      // toastr.success('Success !', 'You\'ve added an item :)')
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

export const removeFromCart = (id, price, quantity) => {
  return async dispatch => {
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

export const incrementQuantity = (id, price) => {
  return async (dispatch) => {
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

export const decrementQuantity = (id, price) => {
  return async (dispatch) => {
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

export const orderPlaced = (cartItems, totalPrice) => {
  return async (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const user = getFirebase().auth().currentUser;
    
    const newOrder = {
      userId: user.uid,
      orderDate: Date.now(),
      totalPrice,
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