import React, { Component } from 'react';
import { Button, Modal, Segment, Label, Divider } from 'semantic-ui-react'
import { NavLink, Link } from 'react-router-dom';

import Cart from '../Cart/Cart';


class CartModal extends Component {
  state = { modalOpen: false };
  
  handleOpen = () => this.setState({ modalOpen: true });
  
  handleClose = () => this.setState({ modalOpen: false });
  
  render() {
    const {} = this.props;
    return (
     <Modal trigger={<Button onClick={this.handleOpen} icon="shopping basket"/>}
            open={this.state.modalOpen}
            onClose={this.handleClose}>
       <Modal.Header><Segment textAlign='center'>Shopping Basket</Segment></Modal.Header>
       
       <Cart/>
       <Divider hidden/>
       {this.props.isAuth
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
