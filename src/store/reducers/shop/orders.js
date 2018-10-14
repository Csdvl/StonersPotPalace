// @flow
import * as actionTypes from '../../actions/actionTypes';


type State = [];

type Action = {
  type: string,
  orders: Object
};

const fetchOrders = (state, action) => {
  return  action.orders
};

const logout = (state, action) => {
  return []
};

const reducer = (state: State = [], action: Action) => {
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