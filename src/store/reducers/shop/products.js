import * as actionTypes from '../../actions/actionTypes';
import { updateObject } from '../../../shared/utility';


const fetchProducts = (state, action) => {
  return action.products
};

const reducer = (state = null, action) => {
  switch (action.type) {
    case actionTypes.FETCH_PRODUCTS:
      return fetchProducts(state, action);
    default:
      return state
  }
};

export default reducer;
