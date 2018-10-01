import React, { Component } from 'react';
import { Item, Label } from 'semantic-ui-react';

import UserOrder from './UserOrder/UserOrder';
import Spinner from '../../UI/Spinner/Spinner';


class userOrders extends Component {
  
  async componentDidMount() {
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
    
    // if (  !Array.isArray(orders) || !orders.length) {
    //   userOrders = <Label content='You didint place any orders yet'/>
    // }

    return (
     <Item.Group>
       {userOrders}
     </Item.Group>
    );
  }
};

export default userOrders;
