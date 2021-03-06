// @flow
import React, { Component } from 'react';
import { Container, Header, Divider } from 'semantic-ui-react';
import { connect } from 'react-redux';

import * as actions from '../../../store/actions/index';
import * as types from '../../../Types/index';
import OrderSumary from './OrderSummary/OrderSummary';
import DeliveryAddress from './DeliveryAddress/DeliveryAddress';
import DeliveryInstructions from './DeliveryInstructions/DeliveryInstructions';


type State = {
  page: number
};

type Props = {
  orderPlaced: (Object, Array<types.CartItem>, number) => types.OrderPlaced,
  profile: types.Profile,
  cartItems: Array<types.CartItem>,
  totalPrice: number
};

class CartCheckout extends Component<Props, State> {
  
  state = {
    page: 1
  };
  
  nextPage() {
    this.setState({ page: this.state.page + 1 })
  }
  
  previousPage() {
    this.setState({ page: this.state.page - 1 })
  }
  
  render() {
    const { orderPlaced, cartItems, totalPrice, profile } = this.props;
    const { page } = this.state;
    
    return (
     <Container>
       <Header size='large' content='Checkout'/>
       <Divider/>
       {page === 1 && <DeliveryAddress onSubmit={() => this.nextPage()} profile={profile}/>}
       {page === 2 && <DeliveryInstructions previousPage={() => this.previousPage()} onSubmit={() => this.nextPage()}/>}
       {page === 3 &&
       <OrderSumary previousPage={() => this.previousPage()} onSubmit={values => orderPlaced(values, cartItems, totalPrice)}/>}
     </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    profile: state.firebase.profile,
    cartItems: state.cart.cartItems,
    totalPrice: state.cart.totalPrice
  }
};

const mapDispatchToProps = dispatch => {
  return {
    orderPlaced: (values, cartItems, totalPrice) => dispatch(actions.orderPlaced(values,cartItems, totalPrice))
  }
};
// $FlowFixMe: suppressing this error until we can refactor
export default connect(mapStateToProps, mapDispatchToProps)(CartCheckout);