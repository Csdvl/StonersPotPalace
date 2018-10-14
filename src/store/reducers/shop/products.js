// @flow
import * as actionTypes from '../../actions/actionTypes';


type State = [];

type Action = {
  type: string,
  products: Object,
};

const fetchProducts = (state, action) => {
  return action.products
};

const reducer = (state: State = [], action: Action) => {
  switch (action.type) {
    case actionTypes.FETCH_PRODUCTS:
      return fetchProducts(state, action);
    default:
      return state
  }
};

export default reducer;
