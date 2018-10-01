import React, { Component } from 'react';
import { Container, Button, Form } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';


import Cart from '../../../components/Shop/ShoppingCart/Cart';


class OrderSummary extends Component {
  render() {
    
    const { handleSubmit, previousPage, totalPrice, cartItems, orderPlaced } = this.props;
    
    return (
     <Container>
       <Form onSubmit={handleSubmit}>
         <Cart />
         <Button
          onClick={previousPage}
          content='Previous'
          color='red'
          size='large'
         />
         
         
         <Button type='submit'>Place the order</Button>
       </Form>
     </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {}
};

const mapDispatchToProps = dispatch => {
  return {}
};

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({
  form: 'checkout',
  destroyOnUnmount: false
})(OrderSummary));
