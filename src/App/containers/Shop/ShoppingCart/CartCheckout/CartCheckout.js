import React, { Component } from 'react';
import {Container, Button} from 'semantic-ui-react';
import {connect} from 'react-redux';
import * as actions from '../../../../../store/actions/index';

import Cart from '../Cart/Cart';


class CartCheckout extends Component {
  render() {
    const{orderPlaced, cartItems, totalPrice} = this.props;
    
    return (
    <Container>
      <div>
        step be step checkout
        Delivery Details
        <div>Delivery Address</div>
        <div>Delivery Instructions</div>
      </div>
      
    <Cart/>
      
      <Button onClick={() => orderPlaced(cartItems, totalPrice)}>Place the order</Button>
    </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    cartItems: state.cart.cartItems,
    totalPrice: state.cart.totalPrice
  }
};

const mapDispatchToProps = dispatch => {
  return {
    orderPlaced: (cartItems, totalPrice) => dispatch  (actions.orderPlaced(cartItems, totalPrice))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(CartCheckout);