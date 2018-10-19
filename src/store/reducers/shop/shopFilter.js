// @flow
import * as actionTypes from '../../actions/actionTypes';
import {ShopFilters} from '../../actions/shop/products';


type Action = {
  type: string,
  filter: string
};

const reducer = (state: string = ShopFilters.SHOW_ALL, action: Action): string => {
switch (action.type) {
  case actionTypes.SET_SHOP_FILTER:
    return action.filter;
  default:
    return state
}
};

export default reducer;