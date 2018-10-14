// @flow
import React, { Component } from 'react';
import { Container, Button, Form } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import type { FormProps } from 'redux-form/lib/types';


import Cart from '../../../components/Shop/ShoppingCart/Cart';


type Props = {
  previousPage: Event => void
} & FormProps;

class OrderSummary extends Component<Props> {
  render() {
    
    const { handleSubmit, previousPage } = this.props;
    
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
// $FlowFixMe: suppressing this error until we can refactor
export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({
  form: 'checkout',
  destroyOnUnmount: false
})(OrderSummary));
