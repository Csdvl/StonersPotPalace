// @flow
import { connect } from 'react-redux';
import { addToCart, ShopFilters } from '../../../../store/actions/index';
import ShopItemList from './ShopItemList';

const filteredShopItemList = (products, filter) => {
  switch (filter) {
    case ShopFilters.SHOW_ALL:
      return products;
    case ShopFilters.SHOW_CAKES:
      return products.filter(product => product.type === 'loaf' || product.type === 'round');
    case ShopFilters.SHOW_PP:
      return products.filter(product => product.type === 'p&p');
    case ShopFilters.SHOW_PT:
      return products.filter(product => product.type === 'p&t');
      case ShopFilters.SHOW_TRAYBAKE:
      return products.filter(product => product.type === 'traybake');
    default:
      throw new Error('Unknown filter: ' + filter)
  }
};

const mapStateToProps = state => ({
  products: filteredShopItemList(state.products, state.shopFilter),
});

const mapDispatchToProps = dispatch => ({
  addToCart: (id, photoURL, label, price, onStock) => dispatch(addToCart(id, photoURL, label, price, onStock))
});
// $FlowFixMe: suppressing this error until we can refactor
export default connect(
 mapStateToProps,
 mapDispatchToProps
)(ShopItemList)