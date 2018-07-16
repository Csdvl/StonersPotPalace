import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Label, Container, Item, Segment, Icon } from 'semantic-ui-react';
import * as actions from "../../../../../store/actions/index";
import CartItem from './CartItem/CartItem';


class Cart extends Component {
  render() {
    
    const { cartItems, decrementQuantity, incrementQuantity, removeFromCart, totalPrice } = this.props;

    
    const shoppingCartItems = (cartItems.map(cartItem =>
     <CartItem
      key={cartItem.id}
      label={cartItem.label}
      price={cartItem.price}
      photoURL={cartItem.photoURL}
      quantity={cartItem.quantity}
      onStock={cartItem.onStock}
      
      removeFromCart={() => removeFromCart(cartItem.id, cartItem.price, cartItem.quantity)}
      onClickPlus={() => incrementQuantity(cartItem.id, cartItem.price)}
      onClickMinus={() => decrementQuantity(cartItem.id, cartItem.price)}
     />
    ));
    
    return (
     <Container>
       <Item.Group>
         {cartItems.length < 1 ?
          <Segment textAlign='center'><Label>No products added yet :)</Label></Segment> : shoppingCartItems}
       </Item.Group>
       <Segment textAlign='center'>
         <Label size='large'>Your order adds up to: £ {totalPrice} {totalPrice === 0 ? '...duh..!' : null} </Label>
         {totalPrice === 0 ? <Icon name='pointing up' size='big'/> : null}
       </Segment>
     
     </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cartItems: state.cart.cartItems,
    totalPrice: state.cart.totalPrice
  }
};

const mapDispatchToProps = dispatch => {
  return {
    decrementQuantity: (id, price) => dispatch(actions.decrementQuantity(id, price)),
    incrementQuantity: (id, price) => dispatch(actions.incrementQuantity(id, price)),
    removeFromCart: (id, price, quantity) => dispatch(actions.removeFromCart(id, price, quantity))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);

