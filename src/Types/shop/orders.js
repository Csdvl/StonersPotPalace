// @flow
import * as types from "../index";


export type Order = {
  address?: string,
  country?: string,
  deliveryInstructions?: string,
  id?: string,
  orderDate?: number,
  postcode?: string,
  products?: Array<types.CartItem>,
  totalPrice?: number,
  userId?: string
};

export type OrdersState = Array<Order>;

export type FetchOrdersInit = { type: 'FETCH_ORDERS', orders: Array<Order>};

export type OrdersAction = FetchOrdersInit | types.AuthLogout;

type GetState = () => OrdersState;
type PromiseAction = Promise<OrdersAction>;
export type OrdersThunkAction = (dispatch: Dispatch, getState: GetState) => any;
type Dispatch = (action: OrdersAction | OrdersThunkAction | PromiseAction | Array<OrdersAction>) => any;

