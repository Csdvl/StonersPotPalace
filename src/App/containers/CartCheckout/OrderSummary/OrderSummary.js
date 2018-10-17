// @flow
import React, { Component } from 'react';
import { Container, Button, Form } from 'semantic-ui-react';
import { reduxForm } from 'redux-form';
import type { FormProps } from 'redux-form/lib/types';

import Cart from '../../../components/Shop/ShoppingCart/Cart';


type Props = {
  previousPage: SyntheticEvent<HTMLElement> => void
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

// $FlowFixMe: suppressing this error until we can refactor
export default reduxForm({
  form: 'checkout',
  destroyOnUnmount: false
})(OrderSummary);
