import * as actionTypes from '../../actions/actionTypes';

const fetchOrders = (state, action) => {
  return  action.orders
};

const reducer = (state = [], action) => {
  switch (action.type) {
    case actionTypes.FETCH_ORDERS:
      return fetchOrders(state, action);
    default:
      return state
  }
};

export default reducer;