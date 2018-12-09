// @flow
import React, { Component } from 'react';
import { Label, Container, Item, Segment, Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';

import * as actions from "../../../../store/actions/index";
import * as types from '../../../../Types/index';
import CartItem from './CartItem/CartItem';


type Props = {
  cartItems: Array<types.CartItem>,
  decrementQuantity: (string, number) => types.DecrementQuantity,
  incrementQuantity: (string, number) => types.IncrementQuantity,
  removeFromCart: (string, number, number) => types.RemoveFromCart,
  totalPrice: number
};

class Cart extends Component<Props> {
  render() {
    
    const { cartItems, decrementQuantity, incrementQuantity, removeFromCart, totalPrice } = this.props;
    
    const shoppingCartItems = (cartItems.map(cartItem => {
       const { id, label, name, price, onStock, quantity, photoURL } = cartItem;
       return (
        <CartItem
         key={id}
         id={id}
         name={name}
         label={label}
         price={price}
         photoURL={photoURL}
         quantity={quantity}
         onStock={onStock}
         
         removeFromCart={() => removeFromCart(id, price, quantity)}
         onClickPlus={() => incrementQuantity(id, price)}
         onClickMinus={() => decrementQuantity(id, price)}
        />)
     }
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
// $FlowFixMe: suppressing this error until we can refactor
export default connect(mapStateToProps, mapDispatchToProps)(Cart);

