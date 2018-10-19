// @flow
import * as types from '../index';

export type OrderPlacedDetail = {
  deliveryInstructions: string,
  city: string,
  country: string,
  address: string,
  postcode: string
};

export type CartItem = {
  id: string,
  label: string,
  photoURL: string,
  +price: number,
  +quantity: number,
  +onStock?: number
};

export type CartState = {
  +cartItems: Array<CartItem>,
  +totalPrice: number
};

export type AddToCart = {type: 'ADD_TO_CART', id: string, photoURL: string, label: string, price: number, onStock: number};

export type RemoveFromCart = {type: 'REMOVE_FROM_CART', id: string, price: number, quantity: number};

export type IncrementQuantity = {type: 'INCREMENT_QUANTITY', id: string, price: number};

export type DecrementQuantity = {type: 'DECREMENT_QUANTITY', id: string, price: number};

export type OrderPlaced = {type: 'ORDER_PLACED', values: OrderPlacedDetail, cartItems: Array<CartItem>, totalPrice: number}

export type CartAction = AddToCart | RemoveFromCart | IncrementQuantity | DecrementQuantity | OrderPlaced | types.AuthLogout;

type GetState = () => CartState;
type PromiseAction = Promise<CartAction>;
export type CartThunkAction = (dispatch: Dispatch, getState: GetState, getFirestore: Function, getFirebase: Function) => any;
type Dispatch = (action: CartAction | CartThunkAction | PromiseAction | Array<CartAction>) => any;

