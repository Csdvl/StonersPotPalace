// @flow
import * as actionTypes from '../../actions/actionTypes';
import * as types from '../../../Types/index';

const fetchOrders = (state: types.OrdersState, action: types.FetchOrdersInit): types.OrdersState => {
  return  action.orders
};

const logout = (state: types.OrdersState, action): types.OrdersState => {
  return []
};

const reducer = (state: types.OrdersState = [], action: types.OrdersAction): types.OrdersState => {
  switch (action.type) {
    case actionTypes.FETCH_ORDERS:
      return fetchOrders(state, action);
    case  actionTypes.AUTH_LOGOUT:
      return logout(state, action);
      default:
      return state
  }
};

export default reducer;