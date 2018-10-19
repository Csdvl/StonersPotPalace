// @flow
import * as actionTypes from '../../actions/actionTypes';
import * as types from '../../../Types/index';


const fetchProducts = (state: types.ProductsState, action:types.InitProducts): types.ProductsState => {
  return action.products
};

const reducer = (state: types.ProductsState = [], action: types.ProductsAction): types.ProductsState => {
  switch (action.type) {
    case actionTypes.FETCH_PRODUCTS:
      return fetchProducts(state, action);
    default:
      return state
  }
};

export default reducer;
