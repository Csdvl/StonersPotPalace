// @flow
import React, { Component } from 'react';
import { Button, Modal, Segment, Label, Divider, Container } from 'semantic-ui-react'
import { NavLink, Link } from 'react-router-dom';

import * as types from '../../../../../Types/index';
import Cart from '../Cart';


type State = { modalOpen: boolean };

type Props = {
  isAuth: types.IsAuth,
  cartItems: Array<types.OrderProduct>
};

class CartModal extends Component<Props, State> {
  state = { modalOpen: false };
  
  handleOpen = () => this.setState({ modalOpen: true });
  
  handleClose = () => this.setState({ modalOpen: false });
  
  render() {
    const { modalOpen } = this.state;
    const { isAuth, cartItems } = this.props;
    
    const content = cartItems.length === 0 ? null : cartItems.length;
    
    return (
     <Modal trigger={<Button onClick={this.handleOpen} icon="shopping basket" content={content}/>}
            open={modalOpen}
            onClose={this.handleClose}>
       <Modal.Header><Segment textAlign='center'>Shopping Basket</Segment></Modal.Header>
       
       <Cart/>
       <Divider hidden/>
       {isAuth
        ? <Button as={NavLink}
                  to="/checkout"
                  floated='right'
                  onClick={this.handleClose}> to checkout... </Button>
        : <Link to='/auth'><Segment textAlign='center'><Label size='big' color='purple'
                                                              content='Please Log in or Register an account to place an order !'/></Segment></Link>}
     </Modal>
    );
  }
}

export default CartModal;
