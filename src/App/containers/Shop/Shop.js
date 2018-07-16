import React, { Component } from 'react';
import {Container} from 'semantic-ui-react';
import { connect } from 'react-redux';
import { withFirestore } from 'react-redux-firebase';

import * as actions from "../../../store/actions/index";
import ShopItemList from './ShopItemList/hoc_ShopItemList';
import ShopFilter from './ShopFilter/ShopFilter';


class Shop extends Component {
  
  render() {
    const { products, addToCart } = this.props;
    
    return (
     <Container fluid>
       <ShopFilter />
       <ShopItemList products={products} addToCart={addToCart}/>
     </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.products,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    addToCart: (productId, photoURL, label, price, onStock) => dispatch(actions.addToCart(productId, photoURL, label, price, onStock)),
  }
};

export default withFirestore(connect(mapStateToProps, mapDispatchToProps)(Shop));