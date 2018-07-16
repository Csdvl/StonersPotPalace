import React, { Component } from 'react';
import { Item } from 'semantic-ui-react';
import { connect } from 'react-redux';

import * as actions from '../../../../../store/actions/index';
import UserOrder from './UserOrder/UserOrder';
import Spinner from '../../../../components/UI/Spinner/Spinner';


class UserOrders extends Component {
  
  async componentWillMount() {
    const { fetchOrdersInit } = this.props;
    
    fetchOrdersInit();
  }
  
  render() {
    
    const { orders } = this.props;
    
    let userOrders = <Spinner/>;
    
    if ( orders.length > 0 ) {
      userOrders = orders.map(order =>
       <UserOrder order={order}/>
      );
    }
    
    return (
     <Item.Group>
       {userOrders}
     </Item.Group>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    orders: state.orders
  }
};

const mapDispatchToProps = dispatch => {
  return {
    fetchOrdersInit: () => dispatch(actions.fetchOrdersInit())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(UserOrders);
