import * as actionTypes from '../../actions/actionTypes';
import {ShopFilters} from '../../actions/shop/products';


const reducer = (state = ShopFilters.SHOW_ALL, action) => {
switch (action.type) {
  case actionTypes.SET_SHOP_FILTER:
    return action.filter;
  default:
    return state
}
};

export default reducer;