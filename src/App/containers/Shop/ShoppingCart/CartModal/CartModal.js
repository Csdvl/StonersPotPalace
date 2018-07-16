import React, { Component } from 'react';
import { Button, Modal,Segment } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom';

import Cart from '../Cart/Cart';


class CartModal extends Component {
  state = { modalOpen: false };
  
  handleOpen = () => this.setState({ modalOpen: true });
  
  handleClose = () => this.setState({ modalOpen: false });
  
  render() {
    const {  } = this.props;
    return (
     <Modal trigger={<Button onClick={this.handleOpen} icon="shopping basket"/>}
            open={this.state.modalOpen}
            onClose={this.handleClose}>
       <Modal.Header><Segment textAlign='center'>Shopping Basket</Segment></Modal.Header>
       <Cart />
       <Button as={NavLink}
               to="/checkout"
               floated='right'
               onClick={this.handleClose}> to checkout... </Button>
     </Modal>
    );
  }
}

export default CartModal;
