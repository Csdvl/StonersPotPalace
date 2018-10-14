// @flow
import * as actionTypes from '../../actions/actionTypes';


type State = {
  cartItems: Array<{
    id: string,
    quantity: number
  }>,
  totalPrice: number
};

type Action = {
  type: string,
  id: string,
  label: string,
  price: number,
  photoURL: string,
  onStock: number,
  quantity: number
};

const initialState: State = {
  cartItems: [],
  totalPrice: 0
};

const addToCart = (state, action) => {
  
  let cartItemIndex = state.cartItems.findIndex(cartItem => cartItem.id === action.id);
  
  if ( cartItemIndex !== -1 ) {
    return state
  }
  
  return {
    ...state,
    cartItems: [
      ...state.cartItems,
      {
        id: action.id,
        quantity: 1,
        label: action.label,
        price: action.price,
        photoURL: action.photoURL,
        onStock: action.onStock
      }
    ],
    totalPrice: Math.round((state.totalPrice + action.price) * 100) / 100
  };
};

const removeFromCart = (state, action) => {
  let cartItemIndex = state.cartItems.findIndex(cartItem => cartItem.id === action.id);
  
  return {
    ...state,
    cartItems: [
      ...state.cartItems.slice(0, cartItemIndex),
      ...state.cartItems.slice(cartItemIndex + 1)
    ],
    totalPrice: Math.round((state.totalPrice - (action.price * action.quantity)) * 100) / 100
  }
};

const incrementQuantity = (state, action) => {
  
  let cartItemIndex = state.cartItems.findIndex(cartItem => cartItem.id === action.id);
  
  return {
    ...state,
    cartItems: [
      ...state.cartItems.filter(cartItem => cartItem.id !== action.id),
      {
        ...state.cartItems[ cartItemIndex ],
        quantity: state.cartItems[ cartItemIndex ].quantity + 1
      }
    ],
    totalPrice: Math.round((state.totalPrice + action.price) * 100) / 100
  }
  
};

const decrementQuantity = (state, action) => {
  
  let cartItemIndex = state.cartItems.findIndex(cartItem => cartItem.id === action.id);
  
  return {
    ...state,
    cartItems: [
      ...state.cartItems.filter(cartItem => cartItem.id !== action.id),
      {
        ...state.cartItems[ cartItemIndex ],
        quantity: state.cartItems[ cartItemIndex ].quantity - 1
      }
    ],
    totalPrice: Math.round((state.totalPrice - action.price) * 100) / 100
  }
  
};

const logout = (state, action) => {
  return {
    cartItems: [],
    totalPrice: 0
  }
};

const reducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      return addToCart(state, action);
    case actionTypes.REMOVE_FROM_CART:
      return removeFromCart(state, action);
    case actionTypes.DECREMENT_QUANTITY:
      return decrementQuantity(state, action);
    case actionTypes.INCREMENT_QUANTITY:
      return incrementQuantity(state, action);
    case actionTypes.AUTH_LOGOUT:
      return logout(state, action);
    default:
      return state
  }
};

export default reducer;